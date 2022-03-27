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
    <TouchableOpacity style = {{backgroundColor: 'white', shadowRadius: 1, width: '75%', height: '18%', borderRadius: 10, marginTop: 15, justifyContent: 'center'}}>
      <View style = {{flexDirection: 'row', justifyContent: 'flex-start', alignItems:'center', marginLeft: 20}}>
        <Image style = {{width: 75, height: 75, borderRadius: 5, marginRight: 20}} source = {{uri : 'https://th.bing.com/th/id/OIP.2A6VgPhQGmqQ0C7mMkv6eAHaJh?pid=ImgDet&rs=1'}}></Image>
        <View>
          <Text style = {{marginBottom: 20, fontWeight: 'bold', textAlign: 'left'}}> {order.name}</Text>
          <View style = {{flexDirection: 'row'}}>
            <Text style = {{color: '#DE8060'}}>{order.price}</Text>
            <View style = {{width: 45, height: 18, backgroundColor: '#DE8060', borderRadius: 10, marginLeft: 40}}><Text style = {{textAlign: 'center', color: 'white'}}>{order.quantity}</Text></View> 
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
     <ScrollView> 
      <Text style = {{textAlign: 'center', marginTop: 10, fontSize: 20, fontWeight: 'bold'}}> Starbucks </Text>
      <View style = {{alignItems: 'center'}}>
      {rows}
      </View>
    </ScrollView>
    );
 }
     }

     

const FoodOrderHistoryScreen = () => {

  return (
    <OrderTable></OrderTable>
  );
};

const Stack = createStackNavigator();

export const AppNavigator = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name="Order History" component={FoodOrderHistoryScreen} />
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
  }
});


const ORDERS = [
  {name: 'Caramel Macchiato', price: '$7.60', quantity: '2', image: 'https://www.starbucks.com.sg/menu/beverages/espresso-beverages/oatmilk-cocoa-macchiato'},
  {name: 'Oatmilk Cocoa Macchiato', price: '$7.80', quantity: '2', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Nitro Cold Brew', price: '$6.50',  quantity: '2', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Almond Croissant', price: '$7.20',  quantity: '2', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Breakfast Pancakes', price: '$7.50', quantity: '2',image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Banana Walnut Muffin', price: '$4.20',  quantity: '2', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'}
];