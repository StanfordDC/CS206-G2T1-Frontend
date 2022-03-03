import React from 'react';
import { Image, View, Text, TextInput } from 'react-native';
import { DataTable } from 'react-native-paper';
import {setLoader} from '../../redux/actions/CommonAction';
import {connect} from 'react-redux';
import styles from './styles';
import Routes from '../../router/routes';

const ProfileScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.image}>

            </View>
            <View style={styles.body}>
                <Text style={styles.header}> Business Profile </Text>
                <View style={styles.box}>
                    <DataTable>
                        <DataTable.Row>
                            <DataTable.Cell>UEN</DataTable.Cell>

                        </DataTable.Row>
                    </DataTable>
                    </View>



            </View>
        </View>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setLoaderAction: params => dispatch(setLoader(params)),
    };
};

export default connect(null, mapDispatchToProps)(ProfileScreen);