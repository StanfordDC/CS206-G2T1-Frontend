import React, {useState, useEffect} from 'react';
import {View, Modal, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';
import {BUSINESS_API, SET_TABLE_API} from '../../../utils/Const';

import styles from './styles';
import Routes from '../../../router/routes';


const BusinessHomeScreen = ({navigation, storedBID, setLoaderAction, businessName}) =>{
    const [modalVisibleOne, setModalVisibleOne] = useState(false);
    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
    const [isList, setIsList] = useState(true);
    const [openDrawer, setOpenDrawer] = useState(false);

    const [waitTimeOne, setWaitTimeOne] = useState(30);
    const [waitTimeTwo, setWaitTimeTwo] = useState(50);
    const [aveTime, setAveTime] = useState(30);
    const [table, setTable] = useState([]);
    const [tid, setTid] = useState('');
    const [availability, setAvailability] = useState(true);
    const [isAvailable, setIsAvailable] = useState('');

    const config = {
        method: 'GET',
        url: BUSINESS_API + storedBID + '/table',
    };

    useEffect (() => {
        const timer = setTimeout(()=>{
            axios(config)
                .then((response) =>{
                if(response?.data){
                    setTable(response.data)
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

//     const changeTable = async() =>{
//         setLoaderAction(true);
//         if (availability == true){
//             setIsAvailable('occupy')
//         }
//         else {
//             setIsAvailable('free')
//         }
//         axios({
//             method:'PUT',
//             url: SET_TABLE_API + tid + '/' + isAvailable,
//             header:{
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then((response) =>{
//             if(response?.data){
//                 console.log('yes')
//             }
//             setLoaderAction(false);
//             })
//             .catch((error) => {
//                 setLoaderAction(false);
//                     console.log(error);
//             })
//
//     }

    const ShowListFunc = table.map((object, index)=> (
        <TouchableOpacity style={styles.listItems} key={index.toString()} onPress={()=>{setTid(object.tid); setAvailability(object.availability); changeTable()}}>
            <Text style={styles.listItemsText1}>Table {object.tid}</Text>
            <Text style={styles.listItemsText2}>{object.type}</Text>
            { object.availability ? <Text style={styles.listItemsText3}>Yes</Text>
                                  : <Text style={styles.listItemsText4}>No</Text>
            }
        </TouchableOpacity>
    ));

    const ShowBlockFunc = table.map((object, index) => (
        <TouchableOpacity style={object.availability ? styles.block1 : styles.block2} key={index.toString()}>
            <Text style={styles.blockText1}>Table {object.tid}</Text>
            <Text style={styles.blockText1}>Pax {object.type}</Text>
            { object.availability ? <Text style={styles.blockText2}>Available</Text>
                                  : <Text style={styles.blockText2}>No</Text>
            }
        </TouchableOpacity>
    ));

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

            <Modal animationType='fade' transparent={true}
                    visible={modalVisibleOne} onRequestClose={()=>{setModalVisibleOne(!modalVisibleOne);}}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.closeModal} onPress = {() => {setModalVisibleOne(!modalVisibleOne)}}>
                            <FontAwesome5 name={'times'} style={styles.closeButton}/></TouchableOpacity>
                        <View style={styles.modalBody}>
                             <Text style={styles.modalBodyText}>Queue</Text>
                            <Text style={styles.modalBodyText}>waiting time: </Text>
                        </View>
                        <View style={styles.modalBodyText2Row}>
                           <Text style={styles.modalBodyText2}>{waitTimeOne}</Text>
                           <Text style={styles.modalBodyText3}>mins</Text>
                        </View>
                        <View style={styles.modalButtonRow}>
                            <TouchableOpacity style={styles.modalMinusButton}
                                onPress={()=>setWaitTimeOne(waitTimeOne-1)}>
                                <FontAwesome5 name={'minus'} style={styles.modalPlusMinusText}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalPlusButton}
                                onPress={()=>setWaitTimeOne(waitTimeOne+1)}>
                                <FontAwesome5 name={'plus'} style={styles.modalPlusMinusText}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal animationType='fade' transparent={true}
                    visible={modalVisibleTwo} onRequestClose={()=>{setModalVisibleTwo(!modalVisibleTwo);}}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.closeModal} onPress = {() => {setModalVisibleTwo(!modalVisibleTwo)}}>
                            <FontAwesome5 name={'times'} style={styles.closeButton}/></TouchableOpacity>
                        <View style={styles.modalBody}>
                             <Text style={styles.modalBodyText}>Queue</Text>
                            <Text style={styles.modalBodyText}>waiting time: </Text>
                        </View>
                        <View style={styles.modalBodyText2Row}>
                           <Text style={styles.modalBodyText2}>{waitTimeTwo}</Text>
                           <Text style={styles.modalBodyText3}>mins</Text>
                        </View>
                        <View style={styles.modalButtonRow}>
                            <TouchableOpacity style={styles.modalMinusButton}
                                onPress={()=>setWaitTimeTwo(waitTimeTwo-1)}>
                                <FontAwesome5 name={'minus'} style={styles.modalPlusMinusText}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalPlusButton}
                                onPress={()=>setWaitTimeTwo(waitTimeTwo+1)}>
                                <FontAwesome5 name={'plus'} style={styles.modalPlusMinusText}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.topBar}>
                <TouchableOpacity style = {styles.centralizeContent} onPress={()=>setOpenDrawer(true)}>
                    <FontAwesome5 name={'bars'} style={styles.menuIcon}/></TouchableOpacity>
                <Text style={styles.topBarText}>{businessName}</Text>
                <TouchableOpacity style = {styles.centralizeContent}>
                    <FontAwesome5 name={'bars'} style={styles.whiteColor}/></TouchableOpacity>
            </View>

            <View style={styles.secondBar}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.waitingButton} onPress={()=>{setModalVisibleOne(true)}}>
                        <View>
                        <Text style={styles.secondBarText1}>2 Pax Waiting Time: </Text>
                        </View>
                        <View style={styles.waitingButtonBody}>
                            <Text style={styles.secondBarText2}>{waitTimeOne}</Text>
                            <Text style={styles.secondBarText3}>mins</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.waitingButton} onPress={()=>{setModalVisibleTwo(true)}}>
                        <View>
                        <Text style={styles.secondBarText1}>5 Pax Waiting Time: </Text>
                        </View>
                        <View style={styles.waitingButtonBody}>
                            <Text style={styles.secondBarText2}>{waitTimeTwo}</Text>
                            <Text style={styles.secondBarText3}>mins</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.averageWaiting}> Average waiting time: {aveTime} mins</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.thirdBar}>
                    <View style={styles.listRow}>
                        <TouchableOpacity onPress={()=>{setIsList(true)}}><FontAwesome5 name='list' style={[isList ? styles.pressedButton1: styles.unPressedButton1]}/></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setIsList(false)}}><FontAwesome5 name='border-all' style={[isList ? styles.unPressedButton2 : styles.pressedButton2]}/></TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{flexDirection:'row', alignItems: 'center', alignSelf:'flex-end'}}>
                        <Text>Sort by</Text>
                        <FontAwesome5 name='sort' style={{color: '#000000', fontSize: 25,marginHorizontal: 5}}/>
                    </TouchableOpacity>
                </View>


            </View>
            {
                isList
                    ? <ScrollView>
                         <View>
                         <View style={styles.listHeader}>
                             <Text style={styles.listHeaderText1}>Table</Text>
                             <Text style={styles.listHeaderText2}>Pax</Text>
                             <Text style={styles.listHeaderText3}>Availability</Text>
                         </View>
                             {ShowListFunc}
                         </View>
                    </ScrollView>
                    : <ScrollView>
                        <View styles={styles.blockBody}>
                            {ShowBlockFunc}
                        </View>
                    </ScrollView>
            }
        </View>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(BusinessHomeScreen);
