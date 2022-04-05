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
    },
    header:{
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginHorizontal: 15,
        marginTop: 20,
    },
    table:{
        marginTop: 20
    },
    rows: {
        width:'100%',
        height: 50,
        flexDirection:'row',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.grey
    },
    rowHeader: {
        marginHorizontal: 20,
        width: 100
    },
    rowText: {
        marginHorizontal:20,
        color: Colors.grey,
    },
    buttonContainer:{
        marginTop: 60,
        alignItems: 'center',
    },
    button:{
        width: '75%',
        height: 50,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        backgroundColor: Colors.themeBlue
    },
    buttonText:{
        color: Colors.white,
    }
})
export default styles;