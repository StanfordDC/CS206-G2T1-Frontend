import {StyleSheet} from 'react-native';
import Colors from '../../../../utils/Colors';

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
      },
      text1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.lightGrey1,
        marginBottom: 15
      },
      text2:{
        fontSize: 60, fontWeight: 'bold', color: Colors.lightYellow, marginBottom: 30
      },
      body: {
        flexDirection: 'row', justifyContent: 'space-between'
      },
      icon: {
        width: 75, height : 75, marginRight: 10
      },
      text3: {
        textAlign: 'center', color: Colors.lightGrey1, fontWeight: 'bold', marginBottom: 3
      },
      text4: {
        textAlign: 'center', marginBottom: 3
      },
      messageContainer: {
        justifyContent: 'center'
      },
      text5: {
        textAlign: 'center', color: '#DF2C2C', fontWeight: 'bold', marginBottom: 3
      },
      text6:{
        textAlign: 'center', marginBottom: 3, fontWeight: 'bold'
      },
      button : {
        backgroundColor: Colors.themeRed2,
        width: '75%', height: 55,
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 70,
        justifyContent: 'center'
      },
      buttonText: {
        color: Colors.white, fontSize: 20, fontWeight: 'bold'
      }
});
export default styles;