import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

import styles from './styles';
import Routes from '../../../router/routes';
import Colors from '../../../utils/Colors';

const BusinessProfileScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={{width:'100%', height:'100%'}}
                   source={require('../../../assets/business-profile-background.jpg')}/>
            </View>
            <View style={styles.body}>
                <Text style={styles.header}>Business Profile</Text>
                
            </View>
        </View>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(BusinessProfileScreen);

