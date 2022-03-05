import React, {useState} from 'react';
import {Keyboard, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

import styles from './styles';
import Routes from '../../../router/routes';

const UserRegistrationScreen = ({navigation}) => {

 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [email, setEmail] = useState('');
 const [contact, setContact] = useState('');
 const [error, setError] = useState('');

 const SignUp = async()=> {
    Keyboard.dismiss();
    if (username !== '' && password !== '' && email !== '' && contact !== ''){
        setError('');
        nav.navigation('location');
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

export default connect(null, mapDispatchToProps)(UserRegistrationScreen);
