import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SplashScreen from '../screens/SplashScreen';
import LogIn from '../screens/LogIn';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Navigator = () => (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator
                //screenOptions={{}}
                initialRouteName="SplashScreen"
            >
                <Stack.Screen
                    options={{
                        title: 'SplashScreen',
                        headerShown: false,
                    }}
                    name="SplashScreen"
                    component={SplashScreen} />
                <Stack.Screen
                    options={{
                        title: 'LogIn To Home',
                    }}
                    name="LogIn"
                    component={LogIn} />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Home"
                    component={Home} />

            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
);

export default Navigator;
