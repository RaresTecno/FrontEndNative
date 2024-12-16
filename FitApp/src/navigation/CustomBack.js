import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useNavigationState, useNavigation } from '@react-navigation/native';

const CustomBackHandler = () => {
  const navigation = useNavigation(); // Para manejar la navegación
  const state = useNavigationState((state) => state); // Obtener el estado actual de la navegación

  useEffect(() => {
    const onBackPress = () => {
      if (state.index > 0) {
        // Si no estás en la pestaña inicial, regresa a la anterior
        navigation.goBack();
        return true; // Previene que cierre la app
      }

      return false; // Permite que el botón cierre la app si estás en la pestaña inicial
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [state, navigation]);

  return null; // No es necesario renderizar nada
};

export default CustomBackHandler;
