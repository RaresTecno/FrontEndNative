import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/AppNavigator'; // Archivo de navegación principal
// import CustomBackHandler from './navigation/CustomBack'; // Manejador personalizado del botón atrás

const App = () => {
  return (
    <NavigationContainer>
      {/* Componente para manejar el botón de retroceso */}
      {/* <CustomBackHandler /> */}
      {/* Configuración de navegación */}
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
