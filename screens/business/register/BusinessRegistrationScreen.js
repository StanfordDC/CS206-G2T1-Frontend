import React, {useState} from 'react';
import {Keyboard, Text, View, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';
import {BUSINESS_API} from '../../../utils/Const';

import styles from './styles';
import Routes from '../../../router/routes';

const BusinessRegistrationScreen = ({navigation, setLoaderAction}) => {

 const [uen, setUen] = useState('');
 const [password, setPassword] = useState('');
 const [name, setName] = useState('');
 const [contact, setContact] = useState('');
 const [website, setWebsite] = useState('');
 const [error, setError] = useState('');

 const SignUp = async()=> {
    Keyboard.dismiss();

    const config = {
        method: 'POST',
        url: BUSINESS_API,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
             'uen': uen,
             'password': password,
             'name': name,
             'contact_number': contact,
             'mid': 0,
             'authorities': 'ROLE_USER',
             'waiting_time': 0,
             'website': website
        }
    }

    if (uen !== '' && password !== '' && name !== '' && contact !== '' && website !== ''){
        setError('');
        setLoaderAction(true);
        axios(config)
            .then((response) => {
                if (response?.data){
//                     console.log(response.data)
                    navigation.pop();
                }
                setLoaderAction(false);
            })
            .catch((error) => {
                setLoaderAction(false);
//                 console.log(error);
                setError(error);
            })
    }
    else{
        setError('Please fill up all the field');
    }
 }

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.logo}> Q-now </Text>
       <Text style={styles.bizLabel}>business</Text>
        </View>
      <View style={styles.form}>
        <Text style={styles.error}>{error}</Text>
        <TextInput placeholder="Enter UEN"
                    style={styles.inputStyle}
                    onChangeText={(updateUen)=>setUen(updateUen)}
                    autoCapitalize={'none'}
                    autoCorrect={false}/>

        <TextInput placeholder="Enter Name"
                    style={styles.inputStyle}
                    onChangeText={(updateName)=>setName(updateName)}
                    autoCapitalize={'none'}
                    autoCorrect={false}/>

        <TextInput placeholder="Enter Contact No."
                    style={styles.inputStyle}
                    onChangeText={(updateContact)=>setContact(updateContact)}
                    keyboardType='numeric'/>

       <TextInput placeholder="Enter Website"
                  style={styles.inputStyle}
                  onChangeText={(updateWebsite)=>setWebsite(updateWebsite)}
                  secureTextEntry={true}/>

        <TextInput placeholder="Enter Password"
                   style={styles.inputStyle}
                   onChangeText={(updatePass)=>setPassword(updatePass)}
                   secureTextEntry={true}/>

      </View>
      <TouchableOpacity style={styles.button} onPress={SignUp}>
        <Text style={styles.signUpText}> Sign Up </Text>
      </TouchableOpacity>

      <Text style={styles.text}>Already have an account?
      <Text onPress={()=>navigation.pop()}
            style={styles.pressableText}> Login </Text>
      </Text>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(BusinessRegistrationScreen);
