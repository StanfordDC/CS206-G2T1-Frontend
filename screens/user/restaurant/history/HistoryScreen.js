import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {setLoader} from '../../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

import styles from './styles';
import Routes from '../../../../router/routes';

const HistoryScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.barText}>Order History</Text>
            </View>
            <View style={styles.scrollContainer}>
            <ScrollView>
                <HistoryTable></HistoryTable>
            </ScrollView>
            </View>
        </View>
    );
}

class HistoryRow extends React.Component {
     render() {

        const order = this.props.order;

      return (
        <TouchableOpacity style = {styles.itemBox}>
          <View style = {styles.itemContent}>
            <Image style = {styles.itemImage} source = {{uri : 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'}}></Image>
            <View>
              <Text style = {styles.itemName}> {order.name}</Text>
              <Text> {order.date} </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }

}

class HistoryTable extends React.Component {

    render() {

    const rows = [];

    ORDERS.forEach((order) => {

        rows.push(
            <HistoryRow
              order = {order}
              image = {order.image}
              key = {order.name}
             />
        );

    });

    return (
     <View>
      {rows}
    </View>
    );
 }
     }


const ORDERS = [
  {name: 'Starbucks', date: '12/12/2022', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Jollibee', date: '12/12/2022', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Genki', date: '12/12/2022', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Din Tai Fung', date: '12/12/2022', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'KFC', date: '12/12/2022', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'},
  {name: 'Sushi Express', date: '12/12/2022', image: 'https://th.bing.com/th/id/OIP.Ft_RM5qjJsN01TF2Vn5-bgHaHa?pid=ImgDet&rs=1'}
];

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(HistoryScreen);