import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/home';
import Login from '../screens/login/login';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Asegúrate de que esta librería esté instalada

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#ff9800', // Color del ícono cuando está activo
                tabBarInactiveTintColor: 'gray',  // Color del ícono cuando está inactivo
                headerShown: false,               // No mostrar header en todas las pantallas
                tabBarShowLabel: false,           // No mostrar el texto debajo del ícono
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} /> // Cambié "360" por "home"
                    ),
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" color={color} size={size} /> // Cambié "add-alert" por "person"
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabsNavigator;
