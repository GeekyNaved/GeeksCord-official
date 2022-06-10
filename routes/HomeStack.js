import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SearchScreen"
                    component={SearchScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="LinksScreen"
                    component={LinksScreen}
                    options={{
                        title: 'Links',
                        headerStyle: {
                            backgroundColor: '#6200ee',
                        },
                        headerTintColor: 'white',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default HomeStack;
