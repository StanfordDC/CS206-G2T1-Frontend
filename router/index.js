import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './routes';

import SplashScreen from "../screens/splash/SplashScreen";
import UserLoginScreen from "../screens/user/login/UserLoginScreen";

import RestaurantScreen from '../screens/user/restaurant/RestaurantScreen';
import QueueScreen from '../screens/user/restaurant/QueueScreen';
import OrderHistoryScreen from '../screens/user/restaurant/OrderHistoryScreen';
import OrderScreen from '../screens/user/restaurant/OrderScreen';

import BusinessLoginScreen from '../screens/business/login/BusinessLoginScreen';
import BusinessProfileScreen from '../screens/business/profile/BusinessProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName={Routes.UserLoginScreen}>
                <Stack.Screen
                    options={{headerShown: false}}
                    name={Routes.SplashScreen}
                    component={SplashScreen}
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name={Routes.RestaurantScreen}
                    component={RestaurantScreen}
                />
                <Stack.Screen options={{headerShown: false}} name={Routes.UserLoginScreen} component={UserLoginScreen} />

                <Stack.Screen options={{headerShown: false}} name={Routes.QueueScreen} component={QueueScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.OrderHistoryScreen} component={OrderHistoryScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.OrderScreen} component={OrderScreen} />

                <Stack.Screen options={{headerShown: false}} name={Routes.BusinessLoginScreen} component={BusinessLoginScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.BusinessProfileScreen} component={BusinessProfileScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

//<Stack.Screen
//    options={{headerShown: false}}
//    name="Home"
//    component={Home}
///>
//
//const Home = () => {
//    return(
//        <Tab.Navigator>
//            <Tab.Screen name="Profile" component={ProfileScreen}/>
//            <Tab.Screen name="Login" component={LoginScreen}/>
//        </Tab.Navigator>
//    );
//}

export default AppNavigator;