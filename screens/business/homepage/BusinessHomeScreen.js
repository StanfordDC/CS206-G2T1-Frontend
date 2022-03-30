import React, {useState} from 'react';
import {View, Modal, Text, TouchableOpacity, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

import styles from './styles';
import Routes from '../../../router/routes';


const BusinessHomeScreen = () =>{
    const [modalVisible, setModalVisible] = useState(false);
    const [isList, setIsList] = useState(true);

    return(
        <View style={styles.container}>
            <Modal animationType='fade'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={()=>{setModalVisible(!modalVisible);}}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <TouchableOpacity style={{alignSelf: 'flex-end', margin: 25}} onPress = {() => {setModalVisible(!modalVisible)}}>
                            <FontAwesome5 name={'times'} style={{color:'#ffffff', fontSize: 30}}/></TouchableOpacity>
                        <View style={{marginLeft: 50}}>
                             <Text style={{fontSize: 18, color: '#ffffff'}}>Queue</Text>
                            <Text style={{fontSize: 18, color: '#ffffff'}}>waiting time: </Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center', marginVertical: 10}}>
                           <Text style={{fontSize:60, color: '#ffffff', fontWeight: 'bold'}}>50</Text>
                           <Text style={{fontSize: 18, color: '#ffffff',marginTop:15, marginLeft: 10}}>mins</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center', marginVertical: 20}}>
                            <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', width: 120, height: 60, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, overflow: 'hidden', borderWidth: 1, borderColor: '#ffffff', backgroundColor: '#5348AF80'}}>
                                <FontAwesome5 name={'minus'} style={{color: '#ffffff', fontSize: 40 }}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', width:120, height: 60, borderTopRightRadius: 10, borderBottomRightRadius: 10, overflow: 'hidden', borderWidth: 1, borderColor: '#ffffff', backgroundColor: '#5348AF80'}}>
                                <FontAwesome5 name={'plus'} style={{color: '#ffffff', fontSize: 40 }}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.topBar}>
                <TouchableOpacity style = {{justifyContent: 'center'}} onPress = {() => navigation.push(Routes.OrderHistoryScreen) }>
                    <FontAwesome5 name={'bars'} style={styles.menuIcon}/></TouchableOpacity>
                <Text style={styles.barText}>Din Tai Fung</Text>
                <TouchableOpacity style = {{justifyContent: 'center'}} onPress = {() => navigation.push(Routes.OrderHistoryScreen) }>
                    <FontAwesome5 name={'bars'} style={{color:'#ffffff'}}/></TouchableOpacity>
            </View>

            <View style={styles.secondBar}>
                <TouchableOpacity style={styles.waitingButton} onPress={()=>{setModalVisible(true)}}>
                    <View>
                    <Text style={{fontSize: 18, color: '#ffffff'}}>Queue</Text>
                    <Text style={{fontSize: 18, color: '#ffffff'}}>waiting time: </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Text style={{fontSize:60, color: '#ffffff', fontWeight: 'bold'}}>50</Text>
                        <Text style={{fontSize: 18, color: '#ffffff',marginTop:15, marginLeft: 10}}>mins</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.averageWaiting}> Average waiting time: 30 mins</Text>
            </View>
            <View style={{marginTop: 10, width: '100%',}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginBottom: 10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={()=>{setIsList(true)}}><FontAwesome5 name='list' style={{color: '#000000', fontSize: 25,marginHorizontal: 10}}/></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setIsList(false)}}><FontAwesome5 name='border-all' style={{color: '#000000', fontSize: 25, marginHorizontal: 5}}/></TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{height: 25, width: 70, borderRadius: 4, borderWidth:2, borderColor:'#0000000', justifyContent:'center', alignItems:'center'}}><Text>Edit</Text></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row', alignItems: 'center', alignSelf:'flex-end'}}>
                        <Text>Sort by</Text>
                        <FontAwesome5 name='sort' style={{color: '#000000', fontSize: 25,marginHorizontal: 5}}/>
                    </TouchableOpacity>
                </View>
                {isList ? <SortByList/> : <SortByDiagram/>}
            </View>

        </View>
    );
}

const TableList = [
    {table: 'Window Seat 1', pax: '5', availability: '20 mins'},
    {table: 'Window Seat 2',pax: '10', availability: '50 mins'},
    {table: 'Window Seat 3', pax: '5', availability: '20mins'},
    {table: 'Seat 1', pax: '3', availability: '20mins'},
    {table: 'Seat 2', pax: '2', availability: '20mins'}
];

const SortByList = () =>{

    return(
        <ScrollView>
            <View style={{paddingHorizontal: 10,}}>
                {TableList.map((item, index) => (
                    <Text key={index.toString()}>{item.table} {item.pax} {item.availability}</Text>
                ))}
            </View>
        </ScrollView>
    );
}

const SortByDiagram = () =>{
    return(
        <ScrollView>
            <View style={{paddingHorizontal: 10, }}>
                {TableList.map((item, index) => (
                    <TouchableOpacity key={index.toString()} style={{height:50, width: 50, color:'#000'}}><Text style={{color:'white'}}>{item.table}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(BusinessHomeScreen);
