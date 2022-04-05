import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
    padding: 10,
    borderRadius: 5,
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