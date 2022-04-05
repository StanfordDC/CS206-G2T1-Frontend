import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';
import {BUSINESS_GET_QUEUE_API} from '../../../utils/Const';
import axios from 'axios';

import styles from './styles';
import Routes from '../../../router/routes';

const BusinessQueueScreen = ({navigation, storedBID, businessName, setLoaderAction}) =>{

    const [openDrawer, setOpenDrawer] = useState(false);
    const [inQueue, setInQueue] = useState([])
    const [oid, setOid] = useState('');

    const config = {
        method: 'GET',
        url: BUSINESS_GET_QUEUE_API + storedBID + '/status/0',
    };

     useEffect (() => {
        const timer = setTimeout(()=>{
            axios(config)
                .then((response) =>{
                if(response?.data){
                    setInQueue(response.data)
                }
                setLoaderAction(false);
                })
                .catch((error) => {
                    setLoaderAction(false);
                        console.log(error);
                })
        },3000);
        return ()=> clearTimeout(timer);
    },[]);

    const configTwo = {
        method: 'PUT',
        url: BUSINESS_GET_QUEUE_API + storedBID +'/oid/' + oid
    };


    return(
       <View style={styles.container}>
           <Modal animationType='fade' transparent={true}
                  visible={openDrawer} onRequestClose={()=>{setOpenDrawer(!openDrawer);}}>
               <View style={styles.modalContainer}>
                   <View style={styles.drawer}>
                       <TouchableOpacity style={styles.drawerHeader}onPress={()=>setOpenDrawer(!openDrawer)}>
                           <Text style={styles.drawerHeaderText}>{businessName}</Text>
                           <FontAwesome5 name='angle-right' style={styles.drawerHeaderIcon}/></TouchableOpacity>
                       <TouchableOpacity style={styles.drawerOptions} onPress={()=>navigation.replace(Routes.BusinessHomeScreen)}>
                           <FontAwesome5 name='home' style={styles.drawerText}/><Text style={styles.drawerText}>Home</Text></TouchableOpacity>
                       <TouchableOpacity style={styles.drawerOptions} onPress={()=>navigation.replace(Routes.BusinessQueueScreen)}>
                          <FontAwesome5 name='user-friends' style={styles.drawerText}/><Text style={styles.drawerText}>Queue</Text></TouchableOpacity>
                       <TouchableOpacity style={styles.drawerOptions} onPress={()=>navigation.replace(Routes.BusinessOrdersScreen)}>
                           <FontAwesome5 name='clipboard-list' style={styles.drawerText}/><Text style={styles.drawerText}>Order</Text></TouchableOpacity>
                       <TouchableOpacity style={styles.drawerOptions} onPress={()=>navigation.replace(Routes.BusinessProfileScreen)}>
                           <FontAwesome5 name='user' style={styles.drawerText}/><Text style={styles.drawerText}>Profile</Text></TouchableOpacity>
                   </View>
               </View>
           </Modal>

           <View style={styles.topBar}>
               <TouchableOpacity style = {{justifyContent: 'center'}} onPress = {() => setOpenDrawer(!openDrawer) }>
                   <FontAwesome5 name={'bars'} style={styles.menuIcon}/></TouchableOpacity>
               <Text style={styles.barText}>{businessName}</Text>
               <TouchableOpacity style = {{justifyContent: 'center'}}>
                   <FontAwesome5 name={'bars'} style={{color:'#ffffff'}}/></TouchableOpacity>
           </View>
            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 10}}>Current Queue List:</Text>
            </View>
           <ScrollView>
               {inQueue.map((item, index) => (
                       <View key={index.toString()}>
                       <TouchableOpacity style={{flexDirection: 'row', alignItems:'center', marginVertical: 5}}>
                           <FontAwesome5 name='user-friends' style={{fontSize: 15, marginHorizontal: 5}}/>
                           <Text style={{fontSize: 15, marginHorizontal: 5}}>QID {item.oqid}</Text>
                       </TouchableOpacity>
                       </View>
                   ))}
           </ScrollView>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        storedBID: state?.UserReducer?.bid ? state.UserReducer.bid : '',
        businessName: state?.UserReducer?.name ? state.UserReducer.name : '',
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessQueueScreen);
