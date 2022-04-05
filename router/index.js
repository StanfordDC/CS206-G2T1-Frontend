import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './routes';

import SplashScreen from "../screens/splash/SplashScreen";
import UserLoginScreen from "../screens/user/login/UserLoginScreen";
import UserRegistrationScreen from "../screens/user/register/UserRegistrationScreen";

import RestaurantScreen from '../screens/user/restaurant/RestaurantScreen';
import QueueScreen from '../screens/user/restaurant/queue/QueueScreen';
import CartScreen from '../screens/user/restaurant/cart/CartScreen';
import HistoryScreen from '../screens/user/restaurant/history/HistoryScreen';

import OrderHistoryScreen from '../screens/user/restaurant/OrderHistoryScreen';

//Business
import BusinessLoginScreen from '../screens/business/login/BusinessLoginScreen';
import BusinessRegistrationScreen from '../screens/business/register/BusinessRegistrationScreen';
import BusinessProfileScreen from '../screens/business/profile/BusinessProfileScreen';
import BusinessHomeScreen from '../screens/business/homepage/BusinessHomeScreen';
import BusinessOrdersScreen from '../screens/business/orders/BusinessOrdersScreen';
import BusinessQueueScreen from '../screens/business/queue/BusinessQueueScreen';

import PaymentScreen from '../screens/payment/PaymentScreen';

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
                   name="Customer"
                   component={Customer}
                />
                <Stack.Screen options={{headerShown: false}} name={Routes.QueueScreen} component={QueueScreen} />
                <Stack.Screen options={{headerShown: false}}
                    name={Routes.HistoryScreen}
                    component={HistoryScreen} />

                <Stack.Screen options={{headerShown: false}} name={Routes.UserLoginScreen} component={UserLoginScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.UserRegistrationScreen} component={UserRegistrationScreen} />

                <Stack.Screen options={{headerShown: false}} name={Routes.BusinessLoginScreen} component={BusinessLoginScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.BusinessRegistrationScreen} component={BusinessRegistrationScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.BusinessHomeScreen} component={BusinessHomeScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.BusinessProfileScreen} component={BusinessProfileScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.BusinessOrdersScreen} component={BusinessOrdersScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.BusinessQueueScreen} component={BusinessQueueScreen} />

                <Stack.Screen options={{headerShown: false}} name={Routes.PaymentScreen} component={PaymentScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}


const Customer = () => {
   return(
       <Tab.Navigator screenOptions={{showLabel: false, style: {position:'absolute', elevation:0}}}>
            <Tab.Screen options={{headerShown: false}} name={Routes.RestaurantScreen} component={RestaurantScreen}/>

            <Tab.Screen options={{headerShown: false}} name={Routes.OrderHistoryScreen} component={OrderHistoryScreen} />
            <Tab.Screen options={{headerShown: false}} name={Routes.CartScreen} component={CartScreen} />
       </Tab.Navigator>
   );
}

export default AppNavigator;