import {StyleSheet} from 'react-native';
import Colors from '../../../utils/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontSize: 100,
        fontWeight: 'bold',
        color: Colors.themeRed,
        fontStyle: 'italic',
    },
    bizLabel:{
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.themeRed,
        alignSelf: 'flex-end',
        marginHorizontal: 35,
        fontStyle: 'italic',
    },
    form:{
        alignItems:'center',
        marginTop: 30,
    },
    inputError:{
        color: Colors.errorRed,
        fontSize: 14,
        marginVertical: 2,
        justifyContent: 'center',
    },
    input:{
        marginTop: 10,
        width:300,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 25,
        backgroundColor: Colors.grey,
    },
    forgetPass: {
        backgroundColor: 'white',
        marginTop: 5,
        },
    forgetPassText: {
        color: Colors.hyperlink,
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    button: {
        backgroundColor: Colors.themeRed,
        width: '75%',
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 40,
        justifyContent: 'center'
    },
    loginText:{
        color: Colors.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 10,
        fontSize: 15
    },
    pressableText: {
        color: Colors.hyperlink,
        marginTop: 15,
        fontSize: 15,
        textDecorationLine: 'underline'
    }
});

export default styles