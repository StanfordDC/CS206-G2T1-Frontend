import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {setLoader} from '../../../redux/actions/CommonAction';
import {connect} from 'react-redux';

import styles from './styles';
import Routes from '../../../router/routes';

const BusinessProfileScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={{width:'100%', height:'100%'}}
                   source={require('../../../assets/business-profile-background.jpg')}/>
            </View>
            <View style={styles.body}>
                <Text style={styles.header}>Business Profile</Text>
                <View style={styles.table}>
                    <ProfileTable></ProfileTable>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

class ProfileRow extends React.Component{
    render(){
        const info = this.props.info;
        return(
            <View style={styles.rows}>
                <Text style={styles.rowHeader}>{info.header}</Text>
                <Text style={styles.rowText}>{info.col}</Text>
            </View>
        );
    }
}

class ProfileTable extends React.Component{
    render(){
        const rows = [];

        ProfileList.forEach((info)=>{
            rows.push(
                <ProfileRow info={info} key={info.header}/>
            );
        });

        return(<View>{rows}</View>);
    }
}

const ProfileList = [
    {header: 'UEN', col: 'X33W5op9'},
    {header: 'Name',col: 'Din Tai Fung'},
    {header: 'Phone Number', col: '+65 6334 5151'},
    {header: 'Webpage', col: 'www.dintaifung.com.sg'},
    {header: 'Password', col: 'password'}
];

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(BusinessProfileScreen);

