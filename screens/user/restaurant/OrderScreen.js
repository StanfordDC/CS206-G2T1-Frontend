import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image, Alert, Modal} from 'react-native';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';
import styles from './styles';
import Routes from '../../../router/routes';

const OrderScreen = () => {

  return (
    <View style={[styles.layout, {justifyContent: 'flex-start'}]}>
      <View style = {[styles.header]}>
        <Text style = {{fontSize: 18, fontWeight : 'bold', alignSelf: 'center'}}> North Mall </Text>
      </View>

      <View style = {{flexDirection: 'column', justifyContent: 'space-evenly'}}>
        <Image
            style={{ width: 300, height: 300, borderRadius: 5, marginBottom: 20}}
            source={{uri: 'https://experienceredmond.com/wp-content/uploads/2016/08/Starbucks-logo-6.jpg'}}
          />
        <Text style = {{fontSize: 32, fontWeight: 'bold', alignSelf: 'center'}}>Starbucks</Text>
        <Text style = {{fontSize: 25, alignSelf: 'center', marginBottom: 25}}>25 minutes </Text>
        <TouchableOpacity style = {[styles.button, {borderRadius: 20}, {marginBottom: 20}, {width: 250}, {alignItems: 'center'}]} onPress = {() => nav.navigate('Locations') }>
        <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}> View Menu </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.button, {borderRadius: 20}, {marginBottom: 20}, {width: 250}, {alignItems: 'center'}]} onPress = {() => nav.navigate('Locations') }>
        <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}> Order Now </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.button, {backgroundColor: 'red'}, {borderRadius: 20}, {marginBottom: 20}, {width: 250}, {alignItems: 'center'}]} onPress = {() => nav.navigate('Locations') }>
        <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}> Leave Queue </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(OrderScreen);