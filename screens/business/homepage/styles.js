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
    modal:{
        backgroundColor: Colors.themeBlue,
        alignSelf: 'center',
        height: 400,
        width: '80%',
        borderRadius: 10,
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
    secondBar:{
        marginTop: 15,
        paddingBottom: 15,
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.grey,
    },
    waitingButton:{
        backgroundColor: Colors.themeBlue,
        width: '85%',
        height: 120,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    averageWaiting:{
        marginVertical: 10,
        fontSize: 16,
    }

});
export default styles;