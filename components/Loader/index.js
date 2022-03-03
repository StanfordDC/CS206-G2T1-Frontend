import React, {Component} from 'react';
import {connect} from 'react-redux';
import { View, ActivityIndicator, StatusBar, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utils/Colors';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

class Loader extends Component{
    render(){
        if (!this.props.isLoading) return null;
        return(
            <View style={[styles.vContainer, {backgroundColor: Colors.black40}]}>
                <StatusBar backgroundColor={Colors.white}/>
                <ActivityIndicator color={Colors.white} size="large"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    vContainer: {
        paddingTop: 0,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        flex: 1,
        height: SCREEN_HEIGHT
    },
});

const mapStateToProps = (state) => ({
    isLoading: state.CommonReducer.isLoading,
});

export default connect(mapStateToProps)(Loader);


