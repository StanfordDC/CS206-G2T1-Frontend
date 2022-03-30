import React, {useState} from 'react';
import {Keyboard, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

import styles from './styles';
import Routes from '../../../router/routes';

const UserLoginScreen = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const SignIn = async() => {
    Keyboard.dismiss();
    if (username !== '' && password !== ''){
        navigation.replace(Routes.Customer, {screen: Routes.RestaurantScreen});
    }
    if (username !== ''){setUserError('')}
    else{setUserError('Username should not be empty')}
    if (password !== ''){setPasswordError('')}
    else{setPasswordError('Password should not be empty')}
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}> Q-now </Text>
      <View style={styles.form}>
        <TextInput placeholder="Enter Username"
                   style={styles.inputStyle}
                   onChangeText={(updateUser)=>setUsername(updateUser)}
                   onChange={()=>setUserError('')}
                   autoCapitalize={'none'}
                   autoCorrect={false}
        />
        <Text style={styles.inputError}>{userError}</Text>
        <TextInput placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={(updatePass)=>setPassword(updatePass)}
          onChange={()=> setPasswordError('')}
          style={styles.inputStyle}
        />
        <Text style={styles.inputError}>{passwordError}</Text>
        <TouchableOpacity style={styles.forgetPass} onPress = {() => nav.navigate('Locations') }>
            <Text style={styles.forgetPassText}> Forgot Password? </Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.pressableText}
      onPress={()=>navigation.replace(Routes.BusinessLoginScreen)}>
        Switch To Business</Text>

      <TouchableOpacity style={styles.button} onPress={SignIn}>
        <Text style={styles.loginText}> Login </Text>
      </TouchableOpacity>

      <Text style={styles.text}>Don't have an account?
      <Text onPress={()=>navigation.push(Routes.UserRegistrationScreen)}
            style={styles.pressableText}> Create a new account</Text>
      </Text>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(UserLoginScreen);

