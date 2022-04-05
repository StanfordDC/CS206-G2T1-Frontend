import {StyleSheet} from 'react-native';
import Colors from '../../../utils/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white,
        alignItems: 'center',
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
    topBar:{
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 20,
        height: 60,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    menuIcon:{
        fontSize: 25,
    },
    barText: {
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center'
    },

});
export default styles;