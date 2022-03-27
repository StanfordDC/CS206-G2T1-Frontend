import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator} from '@react-navigation/drawer';
import Routes from './routes';

import SplashScreen from "../screens/splash/SplashScreen";
import UserLoginScreen from "../screens/user/login/UserLoginScreen";
import UserRegistrationScreen from "../screens/user/register/UserRegistrationScreen";

import RestaurantScreen from '../screens/user/restaurant/RestaurantScreen';
import QueueScreen from '../screens/user/restaurant/QueueScreen';
import OrderHistoryScreen from '../screens/user/restaurant/OrderHistoryScreen';
import OrderScreen from '../screens/user/restaurant/OrderScreen';

import BusinessLoginScreen from '../screens/business/login/BusinessLoginScreen';
import BusinessRegistrationScreen from '../screens/business/register/BusinessRegistrationScreen';
import BusinessProfileScreen from '../screens/business/profile/BusinessProfileScreen';
import BusinessHomeScreen from '../screens/business/homepage/BusinessHomeScreen';
import BusinessOrdersScreen from '../screens/business/orders/BusinessOrdersScreen';

import PaymentScreen from '../screens/payment/PaymentScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

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


                <Stack.Screen options={{headerShown: false}} name={Routes.UserLoginScreen} component={UserLoginScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.UserRegistrationScreen} component={UserRegistrationScreen} />

                <Stack.Screen options={{headerShown: false}} name={Routes.QueueScreen} component={QueueScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.OrderHistoryScreen} component={OrderHistoryScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.OrderScreen} component={OrderScreen} />

                <Stack.Screen options={{headerShown: false}} name={Routes.BusinessLoginScreen} component={BusinessLoginScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.BusinessRegistrationScreen} component={BusinessRegistrationScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.BusinessHomeScreen} component={BusinessHomeScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.BusinessProfileScreen} component={BusinessProfileScreen} />
                <Stack.Screen options={{headerShown: false}} name={Routes.BusinessOrdersScreen} component={BusinessOrdersScreen} />

                <Stack.Screen options={{headerShown: false}} name={Routes.PaymentScreen} component={PaymentScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const Business = () => {
//     return(
//         <Drawer.Navigator initialRouteName={Routes.BusinessHomeScreen}>
//
//         </Drawer.Navigator>
//     );
// }



const Customer = () => {
   return(
       <Tab.Navigator>
            <Tab.Screen
                options={{headerShown: false}}
                name={Routes.RestaurantScreen}
                component={RestaurantScreen}
            />
       </Tab.Navigator>
   );
}

export default AppNavigator;