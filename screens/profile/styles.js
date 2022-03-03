import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white,
        justifyContent: 'flex-start',
    },
    image:{
        flex:1,
        marginTop: 30,
        backgroundColor: Colors.black,
    },
    body:{
        flex:3,
        justifyContent: 'flex-start',
    },
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        margin: 15
    },
    title:{
        fontSize: 16,
    },
    box:{
        height: 70,
        alignSelf: 'stretch',

    },
    input:{
        fontSize:15,
    }

});

export default styles