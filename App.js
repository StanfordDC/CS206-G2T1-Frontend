//import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Alert, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


class OrderRow extends React.Component {

  render() {

    const order = this.props.order;

  return (
    <View style = {{backgroundColor: 'white', shadowRadius: 1, width: '80%', height: 120, borderRadius: 10, marginTop: 15, justifyContent: 'center'}}>
      <View style = {{flexDirection: 'row', justifyContent: 'flex-start', alignItems:'center', marginLeft: 20}}>
        <Image style = {{width: 75, height: 75, borderRadius: 5, marginRight: 20}} source = {{uri : 'https://th.bing.com/th/id/OIP.2A6VgPhQGmqQ0C7mMkv6eAHaJh?pid=ImgDet&rs=1'}}></Image>
        <View>
          <Text style = {{marginBottom: 20, fontWeight: 'bold', textAlign: 'left'}}> {order.name}</Text>
          <View style = {{flexDirection: 'row'}}>
            <Text style = {{color: '#DE8060'}}>{order.price}</Text>
            <View style = {{width: 75, height: 18, backgroundColor: '#DE8060', borderRadius: 10, marginLeft: 40, flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity style = {{alignContents: 'center'}}><Text style = {{color: 'white'}}>-</Text></TouchableOpacity>
              <Text style = {{color: 'white'}} >{order.quantity}</Text>
              <TouchableOpacity><Text style = {{color: 'white'}}>+</Text></TouchableOpacity>
            </View> 
          </View>
        </View>
      </View>
    </View>
  );
}
}
  

 class OrderTable extends React.Component {

    render() {

    const rows = [];

    ORDERS.forEach((order) => {
       
        rows.push(
            <OrderRow 
              order = {order}
              image = {order.image}
              key = {order.name}
             />
        );

    });

    return (
    <View style = {{height: '90%'}}>
     <ScrollView centerContent = {true} contentContainerStyle = {styles.contentContainer}> 

      {rows}
      
    </ScrollView>
    <TouchableOpacity style = {{backgroundColor: '#4236A7', width: '75%', height: 55, alignItems: 'center', borderRadius: 25, marginTop: 70, justifyContent: 'center', alignSelf: 'center'}} onPress = {() => nav.navigate('Locations') }>
        <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}> Order </Text> 
    </TouchableOpacity>
    </View>
    );
 }
     }

     

const CartScreen = () => {

  return (
    <OrderTable></OrderTable>
  );
};

const Stack = createStackNavigator();

export const AppNavigator = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

const App = () => {

  return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>   
  );
};

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  header: {
    width: '100%',
    height: '8%',
    backgroundColor: 'white', 
    justifyContent: 'space-around',
    flexDirection: 'row',
  }, 
  button: {
    backgroundColor: '#4236A7', 
    alignSelf: 'center', 
    padding: 10, 
    borderRadius: 5,
  }, 
  restaurant: {
    backgroundColor: 'white',
    padding: 20,
  }, 
  restaurantDetails: {
    fontSize: 20,
    padding: 5,
  }, 
  contentContainer: {
    alignItems: 'center', 
    justifyContent: 'space-around'
  }
});


const ORDERS = [
  {name: 'Caramel Macchiato', price: '$7.60', quantity: '2', image: 'https://www.starbucks.com.sg/menu/beverages/espresso-beverages/oatmilk-cocoa-macchiato'},
  {name: 'Oatmilk Cocoa Macchiato', price: '$7.80', quantity: '2', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Nitro Cold Brew', price: '$6.50',  quantity: '2', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
];