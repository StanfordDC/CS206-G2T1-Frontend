import {StyleSheet} from 'react-native';
import Colors from '../../../../utils/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    topBar: {
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 20,
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    barText: {
        fontSize: 15,
        alignSelf: 'center'
    },
    scrollContainer: {
        width: '100%',
        marginTop: 10,
        backgroundColor: Colors.grey,
    },
    itemBox: {
        backgroundColor: Colors.white,
        shadowRadius: 1,
        width: '75%',
        height: '18%',
        borderRadius: 10,
        marginTop: 15,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    itemContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center'
    },
    itemImage: {
        width: 75,
        height: 75,
        borderRadius: 5
    },
    itemName: {
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
})
export default styles;