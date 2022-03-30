import {StyleSheet} from 'react-native';
import Colors from '../../../../utils/Colors';

const styles = StyleSheet.create({
    container: {
        height: '90%'
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    itemBox: {
        backgroundColor: Colors.white,
        shadowRadius: 1,
        width: '80%',
        height: 120,
        borderRadius: 10,
        marginTop: 15,
        justifyContent: 'center'
    },
    itemContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        marginLeft: 20
    },
    itemImage: {
        width: 75,
        height: 75,
        borderRadius: 5,
        marginRight: 20
    },
    itemHeader: {
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    itemDescription: {
        flexDirection: 'row'
    },
    itemPrice: {
        color: Colors.orange
    },
    itemQuantity: {
        width: 75,
        height: 18,
        backgroundColor: Colors.orange,
        borderRadius: 10,
        marginLeft: 40,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textWhite: { color: Colors.white },
    alignCenter: { alignItems: 'center' },
    orderButton: {
        backgroundColor: Colors.themeBlue,
        width: '75%',
        height: 55,
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 70,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    orderText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
});
export default styles;