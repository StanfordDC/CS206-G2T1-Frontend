import {StyleSheet} from 'react-native';
import Colors from '../../../utils/Colors';


const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
      height: 200,
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
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  header: {
    width: '100%',
    height: '8%',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#4236A7',
    alignSelf: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: 150,
  },
  restaurant: {
    backgroundColor: 'white',
    padding: 20,
  },
  restaurantDetails: {
    fontSize: 20,
    padding: 5,
  }
});

export default styles;