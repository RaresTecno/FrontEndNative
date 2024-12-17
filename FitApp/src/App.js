import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/AppNavigator'; // Archivo de navegación principal
// import CustomBackHandler from './navigation/CustomBack'; // Manejador personalizado del botón atrás

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      {/* Componente para manejar el botón de retroceso */}
      {/* <CustomBackHandler /> */}
      {/* Configuración de navegación */}
      <Navigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex:1,
  //   backgroundColor: 'red',
  // },
});

export default App;
