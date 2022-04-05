import React from 'react';
import {Image, View} from 'react-native';
import {setLoader} from '../../redux/actions/CommonAction';
import {connect} from 'react-redux';
import styles from './styles';
import Routes from '../../router/routes';

const SplashScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Image style={{width:250, height:200}}
                source={require('../../assets/favicon.png')}
                resizeMode={'contain'}
            />
        </View>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(SplashScreen);