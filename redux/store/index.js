import MainReducer from '../reducers/index'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';


export const store = createStore(MainReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
