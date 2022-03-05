import {StyleSheet} from 'react-native';
import Colors from '../../../utils/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white,
        justifyContent: 'flex-start',
    },
    image:{
        flex:1,
        marginTop: 30,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: Colors.black,
    },
    body:{
        flex:3,
        justifyContent: 'flex-start',
    },
    header:{
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginHorizontal: 15,
        marginTop: 20,
    },


})
export default styles;