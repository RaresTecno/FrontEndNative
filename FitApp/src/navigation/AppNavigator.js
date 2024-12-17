import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import Explore from '../screens/explore';
import Routines from '../screens/routines';
import Feeding from '../screens/feeding';
import Profile from '../screens/profile';
import Login from '../screens/login';
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
                // tabBarShowLabel: false,           // No mostrar el texto debajo del ícono
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" color={color} size={size} /> 
                    ),
                }}
            />
            <Tab.Screen
                name="Routines"
                component={Routines}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" color={color} size={size} /> 
                    ),
                }}
            />
            <Tab.Screen
                name="Feeding"
                component={Feeding}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" color={color} size={size} /> 
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" color={color} size={size} /> 
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabsNavigator;
