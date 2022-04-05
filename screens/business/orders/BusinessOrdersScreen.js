import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';
import {ORDER_BUSINESS_API} from '../../../utils/Const';

import styles from './styles';
import Routes from '../../../router/routes';

const BusinessOrdersScreen = ({navigation, businessName, storedBID, setLoaderAction}) =>{

    const [openDrawer, setOpenDrawer] = useState(false);
    const [order, setOrder] = useState([]);

    const OrderList = [
        {num:'XE6885B', time: '14:21', price:'$25.21'},
        {num:'XE6895B', time: '14:21', price:'$30.21'},
        {num:'XE6400B', time: '15:24', price:'$25.21'},
        {num:'XE6141B', time: '12:21', price:'$25.21'},
    ];

    const config = {
        method: 'GET',
        url: ORDER_BUSINESS_API + storedBID
    }

    useEffect (()=>{
       const timer = setTimeout(()=>{
           axios(config)
               .then((response) =>{
               if(response?.data){
                   setOrder(response.data)
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
                <TouchableOpacity style = {styles.centralize} onPress = {() => setOpenDrawer(!openDrawer) }>
                    <FontAwesome5 name={'bars'} style={styles.menuIcon}/></TouchableOpacity>
                <Text style={styles.barText}>{businessName}</Text>
                <TouchableOpacity style = {styles.centralize}>
                    <FontAwesome5 name={'bars'} style={styles.whiteColor}/></TouchableOpacity>
            </View>
            <ScrollView style={styles.body}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Order No.</Text>
                    <Text style={styles.headerText}>Time</Text>
                    <Text style={styles.headerText}>Price</Text>
                    <FontAwesome5 name='angle-right' style={{fontSize: 25, color: 'white'}}/>
                </View>
                {OrderList.map((item, index) => (
                    <ShowItemFunc key={index.toString()} item={item}></ShowItemFunc>
                ))}

            </ScrollView>
        </View>
    );


}

const ShowItemFunc = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const item = props.item;
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 60, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#000'}}>
            <Modal animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={()=>{setModalVisible(!modalVisible);}}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <TouchableOpacity style={{alignSelf: 'flex-end', margin: 25}} onPress = {() => {setModalVisible(!modalVisible)}}>
                        <FontAwesome5 name={'times'} style={{color:'#ffffff', fontSize: 30}}/></TouchableOpacity>
                        <View style={{alignItems:'center',marginTop: 5,marginBottom: 10,}}><Text style={{fontSize: 25, color:'white'}}>Order no.: {item.num}</Text></View>
                        <View style={{alignItems:'center', marginVertical: 10}}><Text style={{fontSize: 25, color: 'white'}}>Price: <Text style={{fontSize: 65, fontWeight: 'bold'}}>{item.price}</Text></Text></View>
                        <View style={{alignItems:'center',marginVertical: 10,}}><Text style={{fontSize: 25, color:'white'}}>Time: {item.time}</Text></View>
                        <View style={{alignItems:'center',marginTop: 20}}><TouchableOpacity style={{height:50, width: 200, alignItems:'center', justifyContent:'center',backgroundColor: 'white',borderRadius: 10,}}><Text style={{fontSize: 20, color:'#4236A7',fontWeight:'bold'}}>View Order</Text></TouchableOpacity></View>
                    </View>
                </View>
            </Modal>
            <Text style={{fontSize: 18}}>{item.num}</Text>
            <Text style={{fontSize: 18}}>{item.time}</Text>
            <Text style={{fontSize: 18}}>{item.price}</Text>
            <TouchableOpacity onPress={()=>setModalVisible(true)}><FontAwesome5 name='angle-right' style={{fontSize: 30}}/></TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(BusinessOrdersScreen);
