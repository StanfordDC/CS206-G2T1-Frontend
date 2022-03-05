import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wallet:  {
    marginBottom:30
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.themeBlue,
    marginBottom: 10
  },
  formLabel: {
    fontSize: 20,
    color: Colors.white,
  },
  error:{
    color: Colors.errorRed,
    fontSize: 14,
    marginBottom: 5,
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  button: {
    backgroundColor: '#4236A7',
    width: '75%',
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 60,
    justifyContent: 'center'
  }
});

export default styles;