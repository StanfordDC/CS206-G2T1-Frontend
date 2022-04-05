import {StyleSheet} from 'react-native';
import Colors from '../../../utils/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white,
        justifyContent: 'flex-start',
    },
    modalContainer:{
        flex:1,
        backgroundColor: Colors.black40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawer: {
        width: '60%',
        height: '100%',
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start'
    },
    drawerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    drawerHeaderText: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf:'center',
        marginVertical: 10,
    },
    drawerHeaderIcon: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf:'flex-end',
        marginVertical: 10,
    },
    drawerOptions: {
        flexDirection:'row',
        height:70,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.grey
    },
    drawerText: {
        fontSize: 20,
        marginHorizontal: 10,
    },
    menuIcon:{
        fontSize: 25,
        margin: 10,
    },
    image:{
        flex:1,
        marginTop: 30,
        justifyContent:'center',
        alignItems: 'center',
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
        marginTop: 20,
        height: '50%',
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
        width: 120,
        fontSize: 15,
    },
    rowText: {
        marginHorizontal:20,
        color: Colors.grey2,
        fontSize: 15
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