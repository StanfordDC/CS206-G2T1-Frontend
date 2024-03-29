import {StyleSheet} from 'react-native';
import Colors from '../../../utils/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  logo: {
    fontSize: 100,
    fontWeight: 'bold',
    color: Colors.themeRed,
    fontStyle: 'italic'
  },
  bizLabel:{
      fontSize: 30,
      fontWeight: 'bold',
      color: Colors.themeRed,
      alignSelf: 'flex-end',
      marginHorizontal: 35,
      fontStyle: 'italic',
  },
  form: {
    alignItems:'center',
  },
  error: {
    color: Colors.errorRed,
    fontSize: 14,
    marginVertical: 2,
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#DCDCDC',
  },
  button: {
    backgroundColor: Colors.themeRed,
    width: '75%',
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 60,
    justifyContent: 'center',
  },
  signUpText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 10,
    fontSize: 15,
  },
  pressableText: {
    color: Colors.hyperLink,
    marginTop:15,
    fontSize: 15,
    textDecorationLine: 'underline'
  }
});

export default styles;