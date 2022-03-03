import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, TouchableOpacity, Image, Alert, Modal} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Routes from '../../../router/routes';
import styles from './styles';

import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

const RestaurantScreen = ({navigation}) => {

//  const nav = useNavigation();

  return (
    <View style={[styles.layout, {justifyContent: 'flex-start'}]}>
      <View style = {[styles.header]}>
      <TouchableOpacity style = {{justifyContent: 'center'}} onPress = {() => navigation.push(Routes.OrderHistoryScreen) }><FontAwesome5 name={'angle-left'} /></TouchableOpacity>
        <Text style = {{fontSize: 18, fontWeight : 'bold', alignSelf: 'center'}}> North Mall </Text>
        <TouchableOpacity style = {{justifyContent: 'center'}} onPress = {() => navigation.push(Routes.OrderScreen) }><FontAwesome5 name={'angle-right'} /></TouchableOpacity>

      </View>
      <View style = {[styles.header, {flexDirection: 'row'}, {justifyContent: 'space-evenly'}]}>
        <TouchableOpacity style = {[styles.button, {borderRadius: 20}]}>
        <Text style = {{color: 'white'}}> <FontAwesome5 name={'angle-down'} /> Select Duration </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.button, {borderRadius: 20}]}>
        <Text style = {{color: 'white'}}><FontAwesome5 name={'angle-down'} /> Select Pax </Text>
        </TouchableOpacity>
      </View>


    </View>
  );
};

//       <RestaurantTable > </RestaurantTable>

//
//class RestaurantRow extends React.Component {
//
//  render() {
//
//    const restaurant = this.props.restaurant;
//
//  return (
//    <TouchableOpacity style = {styles.restaurant} >
//      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
//      <View>
//        <Image
//          style={{ width: 150, height: 150, borderRadius: 5 }}
//          source={{uri: 'https://experienceredmond.com/wp-content/uploads/2016/08/Starbucks-logo-6.jpg'}}
//        />
//      </View>
//      <View style = {{padding: 28}}>
//      <Text style = {[styles.restaurantDetails, {fontWeight:'bold'}]}>{restaurant.name}</Text>
//      <Text style = {styles.restaurantDetails}>{restaurant.rating} <FontAwesome5 name={'star'} /></Text>
//      <Text style = {styles.restaurantDetails}> <Text style = {{fontWeight: 'bold'}}>{restaurant.duration}</Text> minutes </Text>
//      </View>
//      </View>
//    </TouchableOpacity>
//  );
//}
//}
//
//
// class RestaurantTable extends React.Component {
//     render() {
//
//      const rows = [];
//
//    RESTAURANTS.forEach((restaurant) => {
//
//        rows.push(
//            <RestaurantRow
//              restaurant = {restaurant}
//              key = {restaurant.name}
//             />
//        );
//
//    });
//
//    return (
//     <ScrollView>
//      {rows}
//      </ScrollView>
//    );
// }
//     }
//
//
//
//
//
//
//const RESTAURANTS = [
//  {name: 'Starbucks', rating: '4.2', duration: '20-30', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
//  {name: 'Jollibee', rating: '4.9', duration: '20-30', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
//  {name: 'Genki', rating: '4.1', duration: '20-30', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
//  {name: 'Din Tai Fung', rating: '4.5', duration: '20-30', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
//  {name: 'KFC', rating: '3.5', duration: '20-30', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
//  {name: 'Sushi Express', rating: '3.4', duration: '20-30', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'}
//];

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(RestaurantScreen);
//
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