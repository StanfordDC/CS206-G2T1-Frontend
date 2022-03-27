import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

import styles from './styles';
import Routes from '../../../router/routes';

const BusinessOrdersScreen = () =>{
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


            </ScrollView>
        </View>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(BusinessOrdersScreen);
