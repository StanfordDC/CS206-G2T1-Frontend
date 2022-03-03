import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

import styles from './styles';
import Routes from '../../../router/routes';
import Colors from '../../../utils/Colors';

const BusinessLoginScreen = ({setLoaderAction, navigation}) => {

    const [uen, setUen] = useState('');
    const [password, setPassword] = useState('');
    const [uenError, setUenError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const checkSignIn = async() => {
        Keyboard.dismiss();
        if (uen !== '' && password !== ''){
//             //setLoaderAction(true)
//             //await fetch
            navigation.push(Routes.BusinessProfileScreen);
        }
        if (uen !== ''){setUenError('')}
        else{setUenError('UEN should not be empty')}
        if (password !== ''){setPasswordError('')}
        else{setPasswordError('Password should not be empty')}
    }

    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.inputError}>{uenError}</Text>
                <TextInput style={styles.input}
                    placeholder={'Business UEN'}
                    placeholderTextColor={Colors.black}
                    onChangeText={(updateUEN)=> setUen(updateUEN)}
                    onChange={()=> setUenError('')}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                />
                <Text style={styles.inputError}>{passwordError}</Text>
                <TextInput style={styles.input}
                    placeholder={'Password'}
                    placeholderTextColor={Colors.black}
                    onChangeText={(updatePass) => setPassword(updatePass)}
                    onChange={()=> setPasswordError('')}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button}>
                    <Text onPress={checkSignIn}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );


}

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(BusinessLoginScreen);
