import React, {useState} from 'react';
import {Button, Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PaymentForm = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <FontAwesome5 size={90} color = {'#4236A7'} name={'wallet'} style = {{marginBottom:30}} />
      <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#4236A7', marginBottom: 30}}> Add Payment Method </Text>
      <Text style={styles.formLabel}> Login Form </Text>
      <View>
        <TextInput placeholder="Name on Card" style={styles.inputStyle} />
        <TextInput placeholder="Card Number" style={styles.inputStyle} />
        <TextInput placeholder="Expiry Date" style={styles.inputStyle} />
        <TextInput
          secureTextEntry={true}
          placeholder="Security Code"
          style={styles.inputStyle}
        />
        <TouchableOpacity style = {{backgroundColor: 'white', alignItems: 'center', marginTop: 10, }} onPress = {() => nav.navigate('Locations') }>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style = {{backgroundColor: '#4236A7', width: '75%', height: 35, alignItems: 'center', borderRadius: 10, marginTop: 70, justifyContent: 'center'}} onPress = {() => nav.navigate('Locations') }>
        <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}> Add Card </Text> 
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  formLabel: {
    fontSize: 20,
    color: '#fff',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#DCDCDC',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default PaymentForm;