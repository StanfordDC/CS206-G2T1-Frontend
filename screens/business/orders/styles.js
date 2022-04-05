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
    body:{
        width: '100%',
        paddingHorizontal: 15,
        marginTop: 15,
    },
})
export default styles;