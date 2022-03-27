import React, {useState} from 'react';
import {Button, Text, StyleSheet, View, TextInput, TouchableOpacity, Image} from 'react-native';

const QueuePage = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <Text style = {{fontSize: 20, fontWeight: 'bold', color: '#80807F', marginBottom: 15}}> Your queue number is </Text>
      <Text style = {{fontSize: 60, fontWeight: 'bold', color: '#F4C76D', marginBottom: 30}}> #177 </Text>

      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image style = {{width: 75, height : 75, marginRight: 10}} source = {{uri: 'https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/039_girl_avatar_profile_woman_headband-512.png' }}></Image>
        <View>
            <Text style = {{textAlign: 'center', color: '#80807F', fontWeight: 'bold', marginBottom: 3}}>Queue Position:</Text>
            <Text style = {{textAlign: 'center', marginBottom: 3}}>4 people ahead of you</Text>
            <Text style = {{textAlign: 'center', color: '#80807F', fontWeight: 'bold', marginBottom: 3}}>Estimated waiting time:</Text>
            <Text style = {{textAlign: 'center', marginBottom: 3}}>15-20 min</Text>
        </View>
      </View>      
    
      <TouchableOpacity style = {{backgroundColor: '#A73636', width: '75%', height: 55, alignItems: 'center', borderRadius: 25, marginTop: 70, justifyContent: 'center'}} onPress = {() => nav.navigate('Locations') }>
        <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}> Leave Queue </Text> 
      </TouchableOpacity>
      <View>
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

export default QueuePage;