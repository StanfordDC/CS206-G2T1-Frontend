import React, {useState} from 'react';
import {Button, Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';

const RegistrationForm = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <Text style = {{fontSize: 100, fontWeight: 'bold', color: '#4236A7', marginBottom: 30, fontStyle: 'italic'}}> Q-now </Text>
      <Text style={styles.formLabel}> Login Form </Text>
      <View>
        <TextInput placeholder="Enter Username" style={styles.inputStyle} />
        <TextInput placeholder="Enter Email" style={styles.inputStyle} />
        <TextInput placeholder="Enter Contact No." style={styles.inputStyle} />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          style={styles.inputStyle}
        />
        <TouchableOpacity style = {{backgroundColor: 'white', alignItems: 'center', marginTop: 10, }} onPress = {() => nav.navigate('Locations') }>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style = {{backgroundColor: '#4236A7', width: '75%', height: 35, alignItems: 'center', borderRadius: 10, marginTop: 70, justifyContent: 'center'}} onPress = {() => nav.navigate('Locations') }>
        <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}> Sign Up </Text> 
      </TouchableOpacity>
      <View>
      <Text style = {{alignItems: 'center', justifyContent:'center', marginTop: 10, fontSize: 15, marginLeft: 80}}><Text>Already have an account?</Text>
      <TouchableOpacity style = {{backgroundColor: 'white'}} onPress = {() => nav.navigate('Locations') }>
        <Text style = {{color: '#3366BB', fontSize: 15, textDecorationLine: 'underline'}}> Login </Text> 
      </TouchableOpacity>
      </Text>
      </View>

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

export default RegistrationForm;