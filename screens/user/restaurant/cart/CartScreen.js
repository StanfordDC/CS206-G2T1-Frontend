import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import {setLoader} from '../../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

import styles from './styles';
import Routes from '../../../../router/routes';

const CartScreen = () => {
    return(
        <OrderTable></OrderTable>
    );
}


class OrderRow extends React.Component {

  render() {

    const order = this.props.order;

  return (
    <View style = {styles.itemBox}>
      <View style = {styles.itemContent}>
        <Image style = {styles.itemImage} source = {{uri : 'https://th.bing.com/th/id/OIP.2A6VgPhQGmqQ0C7mMkv6eAHaJh?pid=ImgDet&rs=1'}}></Image>
        <View>
          <Text style = {styles.itemHeader}> {order.name}</Text>
          <View style = {styles.itemDescription}>
            <Text style = {styles.itemPrice}>{order.price}</Text>
            <View style = {styles.itemQuantity}>
              <TouchableOpacity style = {styles.alignCenter}><Text style = {styles.textWhite}>-</Text></TouchableOpacity>
              <Text style = {styles.textWhite} >{order.quantity}</Text>
              <TouchableOpacity><Text style = {styles.textWhite}>+</Text></TouchableOpacity>
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

        ORDERS.forEach( (order) => {
            rows.push(
                <OrderRow
                  order = {order}
                  image = {order.image}
                  key = {order.name}
                 />
            );
        });

        return (
          <View style = {styles.container}>
             <ScrollView centerContent = {true} contentContainerStyle = {styles.contentContainer}>
              {rows}
            </ScrollView>

            <TouchableOpacity style = {styles.orderButton} onPress = {() => nav.navigate('Locations') }>
                <Text style = {styles.orderText}> Order </Text>
            </TouchableOpacity>
           </View>
            );
    }
}


//dummy data
 const ORDERS = [
   {name: 'Caramel Macchiato', price: '$7.60', quantity: '2', image: 'https://www.starbucks.com.sg/menu/beverages/espresso-beverages/oatmilk-cocoa-macchiato'},
   {name: 'Oatmilk Cocoa Macchiato', price: '$7.80', quantity: '2', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
   {name: 'Nitro Cold Brew', price: '$6.50',  quantity: '2', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
 ];



const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(CartScreen);