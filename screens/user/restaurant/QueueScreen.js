import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image, Alert, Modal} from 'react-native';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';
import styles from './styles';
import Routes from '../../../router/routes';

const QueueScreen = ({navigation}) => {

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Queue</Text>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(QueueScreen);