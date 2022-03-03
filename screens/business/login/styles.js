import {StyleSheet} from 'react-native';
import Colors from '../../../utils/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    form:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 60,
    },
    input:{
        width:300,
        height: 50,
        backgroundColor: Colors.grey,
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 18,
        color: Colors.black,
        marginVertical: 5
    },
    button:{
        width:200,
        height:50,
        backgroundColor:Colors.blue,
    },
    inputError:{
        fontSize: 14,

    }
});

export default styles