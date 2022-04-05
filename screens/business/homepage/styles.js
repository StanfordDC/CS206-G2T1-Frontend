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
    modal:{
        backgroundColor: Colors.themeBlue,
        alignSelf: 'center',
        height: 400,
        width: '80%',
        borderRadius: 10,
    },
    closeModal:{
        alignSelf: 'flex-end',
        margin: 25
    },
    closeButton: {
        color: Colors.white,
        fontSize: 30
    },
    modalBody:{
        marginLeft: 50
    },
    modalBodyText:{
        fontSize: 18,
        color: Colors.white
    },
    modalBodyText2Row: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 10
    },
    modalBodyText2: {
        fontSize:60,
        color: Colors.white,
        fontWeight: 'bold'
    },
    modalBodyText3: {
        fontSize: 18,
        color: Colors.white,
        marginTop:15,
        marginLeft: 10
    },
    modalButtonRow:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical: 20
    },
    modalMinusButton: {
        justifyContent:'center',
        alignItems: 'center',
        width: 120, height: 60,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.white,
        backgroundColor: Colors.themeBlue2
    },
    modalPlusButton: {
        justifyContent:'center',
        alignItems: 'center',
        width: 120, height: 60,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.white,
        backgroundColor: Colors.themeBlue2
    },
    modalPlusMinusText: {
        color: Colors.white,
        fontSize: 40
    },
    topBar:{
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 20,
        height: 60,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    centralizeContent: {
        justifyContent: 'center'
    },
    whiteColor: {
        color: Colors.white
    },
    menuIcon:{
        fontSize: 25,
    },
    topBarText: {
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
        width: '45%',
        height: 120,
        borderRadius: 10,

        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
    },
    waitingButtonBody: {
        flexDirection: 'row',
        alignItems:'center'
    },
    secondBarText1: {
        fontSize: 13,
        color: Colors.white
    },
    secondBarText2: {
        fontSize:40,
        color: Colors.white,
        fontWeight: 'bold'
    },
    secondBarText3: {
        fontSize: 18,
        color: Colors.white,
        marginTop:15,
        marginLeft: 10
    },
    averageWaiting:{
        marginVertical: 10,
        fontSize: 16,
    },
    body: {
        marginTop: 10,
        width: '100%'
    },
    thirdBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    listRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pressedButton1: {
        color: Colors.themeBlue,
        fontSize: 25,
        marginHorizontal: 10
    },
    unPressedButton1: {
        color: Colors.grey,
        fontSize: 25,
        marginHorizontal: 10
    },
    pressedButton2: {
        color: Colors.themeBlue,
        fontSize: 25,
        marginHorizontal: 5
    },
    unPressedButton2: {
        color: Colors.grey,
        fontSize: 25,
        marginHorizontal: 5
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginVertical: 15
    },
    listHeaderText1: {
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        width: '30%'
    },
    listHeaderText2: {
         fontSize: 15,
         fontWeight: 'bold',
         textDecorationLine: 'underline',
         width: '30%'
    },
    listHeaderText3: {
         fontSize: 15,
         fontWeight: 'bold',
         textDecorationLine: 'underline',
         width: '30%'
    },
    listItems: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height:60,
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.grey
    },
    listItemsText1: {width:'30%'},
    listItemsText2: {width:'30%'},
    listItemsText3: {
        width:'20%',
        color: Colors.green,
        fontWeight: 'bold',
    },
    listItemsText4: {
        width:'20%',
        color: Colors.red,
        fontWeight: 'bold',
    },
    blockBody: {
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        marginTop: 15,
    },
    block1: {
        height: 120, width: 140,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.green,
        borderRadius: 10
    },
    block2: {
        height: 120, width: 140,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.themeBlue2,
        borderRadius: 10
    },
    blockText1: {
        color: Colors.white,
        marginVertical:3,
    },
    blockText2: {
        color: Colors.white,
        fontWeight: 'bold'
    }
});
export default styles;