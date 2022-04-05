import React, {useState} from 'react';
import {Keyboard, Text, View, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';
import {CREATE_CUSTOMER_API} from '../../../utils/Const';

import styles from './styles';
import Routes from '../../../router/routes';

const UserRegistrationScreen = ({navigation, setLoaderAction}) => {

 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [email, setEmail] = useState('');
 const [contact, setContact] = useState('');
 const [error, setError] = useState('');

 const SignUp = async()=> {
    Keyboard.dismiss();

    const config ={
        method: 'POST',
        url: CREATE_CUSTOMER_API,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "name": username,
            "email": email,
            "phone_no": contact,
            "password": password,
            "card_name": "card",
            "authorities": "ROLE_USER",
            "expiry_date": "2016-01-25T21:34:55"
        }
    };

    if (username !== '' && password !== '' && email !== '' && contact !== ''){
        setError('');
        setLoaderAction(true);
        axios(config)
            .then((response) =>{
                if(response?.data){
//                     console.log(response.data)
                    navigation.pop();
                }
                setLoaderAction(false);
            })
            .catch((error) => {
                setLoaderAction(false);
                console.log(error);
            })
    }
    else{
        setError('Please fill up all your details');
    }
 }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}> Q-now </Text>

      <View style={styles.form}>
        <Text style={styles.error}>{error}</Text>
        <TextInput placeholder="Enter Username"
                    style={styles.inputStyle}
                    onChangeText={(updateUser)=>setUsername(updateUser)}
                    autoCapitalize={'none'}
                    autoCorrect={false}/>

        <TextInput placeholder="Enter Email"
                    style={styles.inputStyle}
                    onChangeText={(updateEmail)=>setEmail(updateEmail)}
                    keyboardType='email-address'
                    autoCapitalize={'none'}
                    autoCorrect={false}/>

        <TextInput placeholder="Enter Contact No."
                    style={styles.inputStyle}
                    onChangeText={(updateContact)=>setContact(updateContact)}
                    keyboardType='numeric'/>

        <TextInput placeholder="Enter Password"
                   style={styles.inputStyle}
                   onChangeText={(updatePass)=>setPassword(updatePass)}
                   secureTextEntry={true}/>


      </View>
      <TouchableOpacity style={styles.button} onPress={SignUp}>
        <Text style={styles.signUpText}> Sign Up </Text>
      </TouchableOpacity>

      <View>
      <Text style={styles.text}>Already have an account?
      <Text onPress={()=>navigation.pop()}
            style={styles.pressableText}> Login </Text>
      </Text>
      </View>

    </View>
  );
};

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(UserRegistrationScreen);
