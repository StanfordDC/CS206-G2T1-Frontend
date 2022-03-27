//import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Alert, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


class ItemBox extends React.Component {

  render() {

    const order = this.props.order;

  return (
    <TouchableOpacity style = {{backgroundColor: 'white', shadowRadius: 1, borderRadius: 10, marginTop: 15, justifyContent: 'space-evenly', alignItems: 'center', width: 150, height: 200}}>
        <Image style = {{width: 120, height: 120, borderRadius: 50}} source = {{uri : 'https://th.bing.com/th/id/OIP.2A6VgPhQGmqQ0C7mMkv6eAHaJh?pid=ImgDet&rs=1'}}></Image>
        <View>
          <Text style = {{marginBottom: 20, fontWeight: 'bold'}}> {order.name}</Text>
        </View>
    </TouchableOpacity>
  );
}
}
  

 class FoodTable extends React.Component {

    render() {

    const rows = [];

    ORDERS.forEach((order) => {
       
        rows.push(
            <ItemBox 
              order = {order}
              image = {order.image}
              key = {order.name}
             />
        );

    });

    return (
    <View>
        <Text style = {{textAlign: 'center', marginTop: 20, marginBottom: 20, fontSize: 20, fontWeight: 'bold'}}> Starbucks </Text>
        <ScrollView contentContainerStyle= {styles.contentContainer}> 
          {rows}
        </ScrollView>
        </View>
    );
 }
     }

     

const MenuScreen = () => {

  return (
    <FoodTable></FoodTable>
  );
};

const Stack = createStackNavigator();

export const AppNavigator = () => {


  return (
    <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScreen} />
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
    flexWrap: 'wrap', 
    flexDirection: 'row', 
    justifyContent: 'space-evenly'
  }
});


const ORDERS = [
  {name: 'Caramel Macchiato', price: '$7.60', quantity: '2', image: 'https://www.starbucks.com.sg/menu/beverages/espresso-beverages/oatmilk-cocoa-macchiato'},
  {name: 'Oatmilk Cocoa Macchiato', price: '$7.80', quantity: '2', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Nitro Cold Brew', price: '$6.50',  quantity: '2', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Oatmilk Cocoa Macchiato', price: '$7.80', quantity: '2', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Nitro Cold Brew', price: '$6.50',  quantity: '2', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
];