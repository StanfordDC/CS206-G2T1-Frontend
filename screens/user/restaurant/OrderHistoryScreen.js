import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image, Alert, Modal} from 'react-native';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';
import styles from './styles';
import Routes from '../../../router/routes';

const OrderHistoryScreen = () => {

  return (
    <ScrollView style = {{backgroundColor: 'white', flex: 1}}>
    <TouchableOpacity style={[styles.layout, {justifyContent: 'flex-start'}, {marginBottom: 10}]}>
      <View style = {{backgroundColor: 'white', borderRadius: 5, width: '80%', height: 100, marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly', shadowRadius: 3, shadowColor: 'black', shadowOpacity: 10}}>
        <Image style = {{width: 75, height: 75, alignSelf: 'center', borderRadius: 5, marginRight: 30}} source = {{uri: 'https://static.onecms.io/wp-content/uploads/sites/35/2016/05/03220825/starbucks-mini-frap.jpg'}}></Image>
        <View style = {{alignSelf: 'center'}}>
          <Text style = {{marginBottom: 20, fontWeight: 'bold'}}> Starbucks</Text>
          <Text> 07/02/2022 </Text>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.layout, {justifyContent: 'flex-start'}, {marginBottom: 10}]}>
      <View style = {{backgroundColor: 'white', borderRadius: 5, width: '80%', height: 100, marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly', shadowRadius: 3, shadowColor: 'black', shadowOpacity: 10}}>
        <Image style = {{width: 75, height: 75, alignSelf: 'center', borderRadius: 5, marginRight: 30}} source = {{uri: 'https://static.onecms.io/wp-content/uploads/sites/35/2016/05/03220825/starbucks-mini-frap.jpg'}}></Image>
        <View style = {{alignSelf: 'center'}}>
          <Text style = {{marginBottom: 20, fontWeight: 'bold'}}> Starbucks</Text>
          <Text> 07/02/2022 </Text>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.layout, {justifyContent: 'flex-start'}, {marginBottom: 10}]}>
      <View style = {{backgroundColor: 'white', borderRadius: 5, width: '80%', height: 100, marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly', shadowRadius: 3, shadowColor: 'black', shadowOpacity: 10}}>
        <Image style = {{width: 75, height: 75, alignSelf: 'center', borderRadius: 5, marginRight: 30}} source = {{uri: 'https://static.onecms.io/wp-content/uploads/sites/35/2016/05/03220825/starbucks-mini-frap.jpg'}}></Image>
        <View style = {{alignSelf: 'center'}}>
          <Text style = {{marginBottom: 20, fontWeight: 'bold'}}> Starbucks</Text>
          <Text> 07/02/2022 </Text>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.layout, {justifyContent: 'flex-start'}, {marginBottom: 10}]}>
      <View style = {{backgroundColor: 'white', borderRadius: 5, width: '80%', height: 100, marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly', shadowRadius: 3, shadowColor: 'black', shadowOpacity: 10}}>
        <Image style = {{width: 75, height: 75, alignSelf: 'center', borderRadius: 5, marginRight: 30}} source = {{uri: 'https://static.onecms.io/wp-content/uploads/sites/35/2016/05/03220825/starbucks-mini-frap.jpg'}}></Image>
        <View style = {{alignSelf: 'center'}}>
          <Text style = {{marginBottom: 20, fontWeight: 'bold'}}> Starbucks</Text>
          <Text> 07/02/2022 </Text>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.layout, {justifyContent: 'flex-start'}, {marginBottom: 10}]}>
      <View style = {{backgroundColor: 'white', borderRadius: 5, width: '80%', height: 100, marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly', shadowRadius: 3, shadowColor: 'black', shadowOpacity: 10}}>
        <Image style = {{width: 75, height: 75, alignSelf: 'center', borderRadius: 5, marginRight: 30}} source = {{uri: 'https://static.onecms.io/wp-content/uploads/sites/35/2016/05/03220825/starbucks-mini-frap.jpg'}}></Image>
        <View style = {{alignSelf: 'center'}}>
          <Text style = {{marginBottom: 20, fontWeight: 'bold'}}> Starbucks</Text>
          <Text> 07/02/2022 </Text>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.layout, {justifyContent: 'flex-start'}, {marginBottom: 10}]}>
      <View style = {{backgroundColor: 'white', borderRadius: 5, width: '80%', height: 100, marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly', shadowRadius: 3, shadowColor: 'black', shadowOpacity: 10}}>
        <Image style = {{width: 75, height: 75, alignSelf: 'center', borderRadius: 5, marginRight: 30}} source = {{uri: 'https://static.onecms.io/wp-content/uploads/sites/35/2016/05/03220825/starbucks-mini-frap.jpg'}}></Image>
        <View style = {{alignSelf: 'center'}}>
          <Text style = {{marginBottom: 20, fontWeight: 'bold'}}> Starbucks</Text>
          <Text> 07/02/2022 </Text>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.layout, {justifyContent: 'flex-start'}, {marginBottom: 10}]}>
      <View style = {{backgroundColor: 'white', borderRadius: 5, width: '80%', height: 100, marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly', shadowRadius: 3, shadowColor: 'black', shadowOpacity: 10}}>
        <Image style = {{width: 75, height: 75, alignSelf: 'center', borderRadius: 5, marginRight: 30}} source = {{uri: 'https://static.onecms.io/wp-content/uploads/sites/35/2016/05/03220825/starbucks-mini-frap.jpg'}}></Image>
        <View style = {{alignSelf: 'center'}}>
          <Text style = {{marginBottom: 20, fontWeight: 'bold'}}> Starbucks</Text>
          <Text> 07/02/2022 </Text>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.layout, {justifyContent: 'flex-start'}, {marginBottom: 10}]}>
      <View style = {{backgroundColor: 'white', borderRadius: 5, width: '80%', height: 100, marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly', shadowRadius: 3, shadowColor: 'black', shadowOpacity: 10}}>
        <Image style = {{width: 75, height: 75, alignSelf: 'center', borderRadius: 5, marginRight: 30}} source = {{uri: 'https://static.onecms.io/wp-content/uploads/sites/35/2016/05/03220825/starbucks-mini-frap.jpg'}}></Image>
        <View style = {{alignSelf: 'center'}}>
          <Text style = {{marginBottom: 20, fontWeight: 'bold'}}> Starbucks</Text>
          <Text> 07/02/2022 </Text>
        </View>
      </View>
    </TouchableOpacity>
    </ScrollView>
  );
};


const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(OrderHistoryScreen);