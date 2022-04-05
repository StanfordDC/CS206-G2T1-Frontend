import { ScrollView, Text, View, TouchableOpacity, Image, Alert, Modal,TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import Routes from '../../../router/routes';
import styles from './styles';
import {BUSINESS_API, CREATE_ORDER_API} from '../../../utils/Const';

import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

const RestaurantScreen = ({navigation, storedCID, customerName, setLoaderAction}) => {

    const [duration, setDuration] = useState('Select Duration');
    const [pax, setPax] = useState('Select Pax');
    const [bName, setBName] = useState('');
    const [bID, setBID] = useState('');
    const [waiting, setWaiting] = useState(25);
    const [store, setStore] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [durationModal, setDurationModal] = useState(false);
    const [paxModal, setPaxModal] = useState(false);
    const [inQueue, setInQueue] = useState(false);

    const config = {
        method: 'GET',
        url: BUSINESS_API
    }

    useEffect (() => {
        const timer = setTimeout(()=>{
            axios(config)
                .then((response) =>{
                if(response?.data){
                    setStore(response.data)
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

    const ShowItemFunc = store.map((item, index) => (
            <TouchableOpacity style = {styles.restaurant} key={index.toString()} onPress={() => {setModalVisible(!modalVisible); setBName(item.name); setBID(item.bid); }}>
             <Text style = {[styles.restaurantDetails, {fontWeight:'bold'}]}>{item.name}</Text>
{/*              <Text style = {styles.restaurantDetails}> <Text style = {{fontWeight: 'bold'}}>{item.duration}</Text> minutes </Text> */}
            </TouchableOpacity>
    ));

    const CreateOrder = async() => {
        const newPax = parseInt(pax);
        axios({
            method: 'POST',
            url: CREATE_ORDER_API + bID + '/' +storedCID,
            data: {
                'bid': bID,
                'cid': storedCID,
                'price': 10.0,
                'date': "2016-01-25T21:34:55",
                "pax": newPax,
                "order_status": 1,
                "payment_status": 1
            }
        })
        .then((response) =>{
            if(response?.data){
                console.log(response?.data);
            }
            setLoaderAction(false);
            })
            .catch((error) => {
                setLoaderAction(false);
                console.log(error);
            })
    }

      return (
        <View style={[styles.layout, {justifyContent: 'flex-start'}]}>
        <Modal animationType='fade' transparent={true}
                   visible={durationModal} onRequestClose={()=>{setDurationModal(!durationModal);}}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.closeModal} onPress = {() => {setDurationModal(!durationModal);}}>
                            <FontAwesome5 name={'times'} style={styles.closeButton}/></TouchableOpacity>
                        <View style={styles.modalBody}>

                        </View>

                    </View>
                </View>
            </Modal>

            <Modal animationType='fade' transparent={true}
                   visible={paxModal} onRequestClose={()=>{setPaxModal(!paxModal);}}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.closeModal} onPress = {() => {setPaxModal(!paxModal);}}>
                            <FontAwesome5 name={'times'} style={styles.closeButton}/></TouchableOpacity>
                        <View style={styles.modalBody}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 60, color: '#fff', fontWeight: 'bold'}}>Pax: </Text>
                                <TextInput placeholder='0'
                                        keyboardType='numeric'
                                        style={{height:50, width: 50, borderRadius: 10, marginHorizontal: 20, fontSize: 50, alignSelf:'flex-end'}}
                                        onChangeText={(updatePax)=> setPax(updatePax)}
                                    />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal animationType='fade' transparent={true}
                   visible={modalVisible} onRequestClose={()=>{setModalVisible(!modalVisible);}}>
                <View style={styles.layout}>
                  <View style = {{flexDirection: 'column', justifyContent: 'space-evenly'}}>

                    <Text style = {{fontSize: 32, fontWeight: 'bold', alignSelf: 'center'}}>{bName}</Text>
                    <Text style = {{fontSize: 25, alignSelf: 'center', marginBottom: 25}}>{waiting} minutes </Text>
                    <TouchableOpacity style = {[styles.button, {borderRadius: 20}, {marginBottom: 20}, {width: 250}, {alignItems: 'center'}]} onPress = {() => nav.navigate('Locations') }>
                    <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}> View Menu </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[styles.button, {borderRadius: 20}, {marginBottom: 20}, {width: 250}, {alignItems: 'center'}]} onPress = {() => nav.navigate('Locations') }>
                    <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}> Order Now </Text>
                    </TouchableOpacity>
                    {
                        inQueue ?
                            <TouchableOpacity style = {[styles.button, {backgroundColor: 'red'}, {borderRadius: 20}, {marginBottom: 20}, {width: 250}, {alignItems: 'center'}]} onPress = {() => setInQueue(!inQueue) }>
                              <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}> Leave Queue </Text>
                            </TouchableOpacity>
                            : <TouchableOpacity style = {[styles.button, {borderRadius: 20}, {marginBottom: 20}, {width: 250}, {alignItems: 'center'}]} onPress = {CreateOrder}>
                                <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}> Join Queue </Text>
                              </TouchableOpacity>
                    }

                  </View>
                </View>
            </Modal>

          <View style = {[styles.header, {flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}]}>
            <TouchableOpacity style = {[styles.button, {borderRadius: 20}]} onPress={()=>setDurationModal(!durationModal)}>
                <Text style = {{color: 'white', marginHorizontal: 5}}> <FontAwesome5 name={'angle-down'} />  {duration}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.button, {borderRadius: 20}]} onPress={()=>setPaxModal(!paxModal)}>
                <Text style = {{color: 'white', marginHorizontal: 5}}><FontAwesome5 name={'angle-down'} />   {pax}</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            {ShowItemFunc}
          </ScrollView>
        </View>
      );
};




const mapStateToProps = state => {
    return {
        storedCID: state?.UserReducer?.cid ? state.UserReducer.cid : '',
        customerName: state?.UserReducer?.cname ? state.UserReducer.cname : '',
    }
};


const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantScreen);