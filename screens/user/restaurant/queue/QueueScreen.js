import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {setLoader} from '../../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

import styles from './styles';
import Routes from '../../../../router/routes';

const QueueScreen = ({navigation}) => {

    const [isTurn, setIsTurn] = useState(false);

    return(
        <View style={styles.container}>
              <Text style = {styles.text1}> Your queue number is </Text>
              <Text style = {styles.text2}> #177 </Text>

              <View style = {styles.body}>
                <Image style = {styles.icon} source = {{uri: 'https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/039_girl_avatar_profile_woman_headband-512.png' }}></Image>
                {isTurn ? <TurnNow/> : <Waiting/>}
              </View>

              {isTurn ?
                null :
                <TouchableOpacity style = {styles.button} onPress = {() => navigation.pop() }>
                    <Text style = {styles.buttonText}> Leave Queue </Text>
                </TouchableOpacity>
              }
        </View>
          );
        };

const Waiting = () => {
    return(
        <View>
            <Text style = {styles.text3}>Queue Position:</Text>
            <Text style = {styles.text4}>4 people ahead of you</Text>
            <Text style = {styles.text3}>Estimated waiting time:</Text>
            <Text style = {styles.text4}>15-20 min</Text>
        </View>
)}

const TurnNow = () => {
    return(
        <View style = {styles.messageContainer}>
            <Text style = {styles.text5}>It's your turn</Text>
            <Text style = {styles.text6}>Please head to the shop now</Text>
        </View>
)}


const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(QueueScreen);