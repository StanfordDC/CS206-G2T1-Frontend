import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

import styles from './styles';
import Routes from '../../../router/routes';

const BusinessOrdersScreen = () =>{
    const OrderList = [
        {num:'XE6885B', time: '14:21', price:'$25.21'},
        {num:'XE6895B', time: '14:21', price:'$30.21'},
        {num:'XE6400B', time: '15:24', price:'$25.21'},
        {num:'XE6141B', time: '12:21', price:'$25.21'},
    ];

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity style = {{justifyContent: 'center'}} onPress = {() => navigation.push(Routes.OrderHistoryScreen) }>
                    <FontAwesome5 name={'bars'} style={styles.menuIcon}/></TouchableOpacity>
                <Text style={styles.barText}>Din Tai Fung</Text>
                <TouchableOpacity style = {{justifyContent: 'center'}} onPress = {() => navigation.push(Routes.OrderHistoryScreen) }>
                    <FontAwesome5 name={'bars'} style={{color:'#ffffff'}}/></TouchableOpacity>
            </View>
            <ScrollView style={styles.body}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', textDecorationLine: 'underline'}}>Order No.</Text>
                    <Text style={{fontSize: 17, fontWeight: 'bold', textDecorationLine: 'underline'}}>Time</Text>
                    <Text style={{fontSize: 17, fontWeight: 'bold', textDecorationLine: 'underline'}}>Price</Text>
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

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(BusinessOrdersScreen);
