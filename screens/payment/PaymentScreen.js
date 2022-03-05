import React, {useState} from 'react';
import {Button, Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {setLoader} from '../../redux/actions/CommonAction';
import {connect} from 'react-redux';

import styles from './styles';
import Routes from '../../router/routes';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PaymentScreen = ({navigation}) => {

  const [name, setName] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [expDate, setExpDate] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const addCard = async() =>{
    if (name !== '' && cardNo !== '' && expDate !== '' && code !== '' && error !== ''){
        setError('');
        nav.navigation('location');
    }
    else{
        setError('Please fill in all the field');
    }

  }

  return (
    <View style={styles.container}>
      <FontAwesome5 size={90} color = {'#4236A7'} name={'wallet'} style={styles.wallet} />
      <Text style={styles.title}> Add Payment Method </Text>
      <Text style={styles.formLabel}> Login Form </Text>
      <View>
        <Text style={styles.error}>{error}</Text>
        <TextInput placeholder="Name on Card" style={styles.inputStyle}
                    onChangeText={(updateName)=>setName(updateName)}
                    autoCapitalize={'none'} autoCorrect={false}/>
        <TextInput placeholder="Card Number" style={styles.inputStyle}
                    onChangeText={(updateCard)=>setCardNo(updateCard)}
                    keyboardType={'numeric'}/>
        <TextInput placeholder="Expiry Date" style={styles.inputStyle}
                    onChangeText={(updateDate)=>setExpDate(updateDate)}
                    keyboardType={'numeric'}/>
        <TextInput placeholder="Security Code" style={styles.inputStyle}
                    onChangeText={(updateCode)=>setCode(updateCode)}
                    maxLength={3}
                    secureTextEntry={true}/>

      </View>
      <TouchableOpacity style={styles.button} onPress={addCard}>
        <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}> Add Card </Text>
      </TouchableOpacity>

    </View>
  );
};

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(PaymentScreen);
