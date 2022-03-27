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
      <View style = {{flexDirection: 'row', justifyContent: 'space-around', alignItems:'center'}}>
        <Image style = {{width: 75, height: 75, borderRadius: 5 }} source = {{uri : 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'}}></Image>
        <View>
          <Text style = {{marginBottom: 20, fontWeight: 'bold', textAlign: 'left'}}> {order.name}</Text>
          <Text> {order.date} </Text>
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
       <View style = {{alignItems: 'center'}}>
      {rows}
      </View>
    </ScrollView>
    );
 }
     }

     

const OrderHistoryScreen = () => {

  return (
    <OrderTable></OrderTable>
  );
};

const Stack = createStackNavigator();

export const AppNavigator = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name="Order History" component={OrderHistoryScreen} />
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
  {name: 'Starbucks', date: '12/12/2022', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Jollibee', date: '12/12/2022', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Genki', date: '12/12/2022', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Din Tai Fung', date: '12/12/2022', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'KFC', date: '12/12/2022', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Sushi Express', date: '12/12/2022', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'}
];