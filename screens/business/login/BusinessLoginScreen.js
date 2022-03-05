import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

import styles from './styles';
import Routes from '../../../router/routes';

const BusinessLoginScreen = ({setLoaderAction, navigation}) => {

    const [uen, setUen] = useState('');
    const [password, setPassword] = useState('');
    const [uenError, setUenError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const SignIn = async() => {
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
            <View>
                <Text style={styles.logo}> Q-now </Text>
                <Text style={styles.bizLabel}>business</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder='Business UEN'
                    onChangeText={(updateUEN)=> setUen(updateUEN)}
                    onChange={()=> setUenError('')}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                />
                <Text style={styles.inputError}>{uenError}</Text>
                <TextInput style={styles.input}
                    placeholder='Password'
                    onChangeText={(updatePass) => setPassword(updatePass)}
                    onChange={()=> setPasswordError('')}
                    secureTextEntry={true}
                />
                <Text style={styles.inputError}>{passwordError}</Text>
                <TouchableOpacity style={styles.forgetPass} onPress = {() => nav.navigate('Locations') }>
                    <Text style={styles.forgetPassText}> Forgot Password? </Text>
                </TouchableOpacity>

            </View>

            <Text style={styles.pressableText}
            onPress={()=>navigation.replace(Routes.UserLoginScreen)}>
                Switch To User</Text>

            <TouchableOpacity style={styles.button} onPress={SignIn}>
                <Text style={styles.loginText}> Login </Text>
            </TouchableOpacity>

            <Text style={styles.text}>Don't have an account?
            <Text onPress={()=>navigation.push(Routes.BusinessRegistrationScreen)}
                style={styles.pressableText}> Create a new account</Text>
            </Text>
        </View>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(BusinessLoginScreen);
