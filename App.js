import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from "./router";
import MainContainer from "./components/MainContainer";

const App = () =>{
    return(
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <View style={{flex:1}}>
                    <AppNavigator/>
                    <MainContainer/>
                </View>
            </PersistGate>
        </Provider>
    );
};

export default App;