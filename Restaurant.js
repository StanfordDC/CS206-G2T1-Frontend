import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Alert, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const RestaurantScreen = () => {

  const nav = useNavigation();

  return (
    <View style={[styles.layout, {justifyContent: 'flex-start'}]}>
      <View style = {[styles.header]}>
      <TouchableOpacity style = {{justifyContent: 'center'}} onPress = {() => nav.navigate('Order History') }><FontAwesome5 name={'angle-left'} /></TouchableOpacity>
        <Text style = {{fontSize: 18, fontWeight : 'bold', alignSelf: 'center'}}> North Mall </Text>
        <TouchableOpacity style = {{justifyContent: 'center'}} onPress = {() => nav.navigate('Order') }><FontAwesome5 name={'angle-right'} /></TouchableOpacity>

      </View>
      <View style = {[styles.header, {flexDirection: 'row'}, {justifyContent: 'space-evenly'}]}>
        <TouchableOpacity style = {[styles.button, {borderRadius: 20}]} onPress = {() => nav.navigate('Locations') }>
        <Text style = {{color: 'white'}}> <FontAwesome5 name={'angle-down'} /> Select Duration </Text> 
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.button, {borderRadius: 20}]} onPress = {() => nav.navigate('Locations') }>
        <Text style = {{color: 'white'}}><FontAwesome5 name={'angle-down'} /> Select Pax </Text> 
        </TouchableOpacity>
      </View>

      <RestaurantTable > </RestaurantTable>
    </View>
  );
};

// class JoinQueue extends React.component {
//   render() {
//     const { modalVisible } = this.state;
//     return (
//       <View style={styles.centeredView}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert("Modal has been closed.");
//             this.setModalVisible(!modalVisible);
//           }}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>Hello World!</Text>
//               <Pressable
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={() => this.setModalVisible(!modalVisible)}
//               >
//                 <Text style={styles.textStyle}>Hide Modal</Text>
//               </Pressable>
//             </View>
//           </View>
//         </Modal>
//         <Pressable
//           style={[styles.button, styles.buttonOpen]}
//           onPress={() => this.setModalVisible(true)}
//         >
//           <Text style={styles.textStyle}>Show Modal</Text>
//         </Pressable>
//       </View>
//     );
//   }
// }


class RestaurantRow extends React.Component {
  
  render() {

    const restaurant = this.props.restaurant;

  return (
    <TouchableOpacity style = {styles.restaurant} >
      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View>
        <Image 
          style={{ width: 150, height: 150, borderRadius: 5 }}
          source={{uri: 'https://experienceredmond.com/wp-content/uploads/2016/08/Starbucks-logo-6.jpg'}}
        />
      </View>
      <View style = {{padding: 28}}>
      <Text style = {[styles.restaurantDetails, {fontWeight:'bold'}]}>{restaurant.name}</Text>
      <Text style = {styles.restaurantDetails}>{restaurant.rating} <FontAwesome5 name={'star'} /></Text>
      <Text style = {styles.restaurantDetails}> <Text style = {{fontWeight: 'bold'}}>{restaurant.duration}</Text> minutes </Text>
      </View>
      </View>
    </TouchableOpacity>
  );
}
}
  

 class RestaurantTable extends React.Component {
     render() {

      const rows = [];

    RESTAURANTS.forEach((restaurant) => {
       
        rows.push(
            <RestaurantRow 
              restaurant = {restaurant}
              key = {restaurant.name}
             />
        );

    });

    return (
     <ScrollView>
      {rows}
      </ScrollView>
    );
 }
     }

     

    
const QueueScreen = () => {

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Queue</Text>
    </View>
  );
};

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

const Stack = createStackNavigator();

export const AppNavigator = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={RestaurantScreen} />
        <Stack.Screen name="Queue" component={QueueScreen} />
        <Stack.Screen name="Order History" component={OrderHistoryScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />


    </Stack.Navigator>
  );
};

const Restaurant = () => {

  return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>   
  );
};

export default Restaurant;

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


const RESTAURANTS = [
  {name: 'Starbucks', rating: '4.2', duration: '20-30', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Jollibee', rating: '4.9', duration: '20-30', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Genki', rating: '4.1', duration: '20-30', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Din Tai Fung', rating: '4.5', duration: '20-30', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'KFC', rating: '3.5', duration: '20-30', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Sushi Express', rating: '3.4', duration: '20-30', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'}
];