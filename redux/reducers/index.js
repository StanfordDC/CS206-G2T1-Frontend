import {applyMiddleware, combineReducers, createStore} from 'redux';
import CommonReducer from './CommonReducer';
import UserReducer from './UserReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['UserReducer'],
};

export default combineReducers({
  CommonReducer: CommonReducer,
  UserReducer: persistReducer(persistConfig, UserReducer),
});
