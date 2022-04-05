import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, Modal} from 'react-native';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';
import {BUSINESS_GET_BY_ID_API} from '../../../utils/Const';

import styles from './styles';
import Routes from '../../../router/routes';

const BusinessProfileScreen = ({navigation, storedBID,setLoaderAction, businessName}) => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [uen, setUen] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [website, setWebsite] = useState('');

    const ProfileList = [
        {header: 'UEN', col: uen},
        {header: 'Name',col: name},
        {header: 'Phone Number', col: contact},
        {header: 'Webpage', col: website},
    ];

    useEffect (()=> {
        axios(config)
            .then((response) =>{
                if(response?.data){
//                     console.log(response.data)
                    setUen(response.data.uen);
                    setName(response.data.name);
                    setContact(response.data.contact_number);
                    setWebsite(response.data.website);
                }
                setLoaderAction(false);
            })
            .catch((error) => {
                setLoaderAction(false);
                    console.log(error);
            })
    })

    const config = {
        method: 'GET',
        url: BUSINESS_GET_BY_ID_API + storedBID,
        headers: { 'Accept': 'application/json'}
    }

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

            <View style={styles.image}>
                <ImageBackground style={{width:'100%', height:'100%'}}
                   source={require('../../../assets/business-profile-background.jpg')} imageStyle={{opacity:0.5}}>
                <TouchableOpacity onPress={()=>setOpenDrawer(true)}>
                    <FontAwesome5 name={'bars'} style={styles.menuIcon}/></TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.body}>
                <Text style={styles.header}>Business Profile</Text>
                <View style={styles.table}>
                    {ProfileList.map((item, index) => (
                        <ShowRowFunc key={index.toString()} item={item}/>
                    ))}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const ShowRowFunc = (props) =>{
    const item = props.item;
    return(
        <View style={styles.rows}>
            <Text style={styles.rowHeader}>{item.header}</Text>
            <Text style={styles.rowText}>{item.col}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(BusinessProfileScreen);

