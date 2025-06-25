import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { CartScreen, CategoryScreen, HomeScreen, SearchScreen } from '../screens/Index';
import { BottomTab } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomBar = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}} tabBar={(props)=><BottomTab {...props}/>}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Category" component={CategoryScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
    )
}
const StackRoute = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeScreen" component={BottomBar} />
        </Stack.Navigator>
    )
}
const Routes = () => {
    return (
        <NavigationContainer>
            <StackRoute />
        </NavigationContainer>
    )
}
export default Routes