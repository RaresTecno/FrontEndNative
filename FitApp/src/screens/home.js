import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Publicaciones from '../components/publicacion';
const historias = Array.from({ length: 50 }, (_, index) => `Historia ${index + 1}`);
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.histories}
        showsHorizontalScrollIndicator={true} // Ocultar el indicador de scroll horizontal
      >
        {historias.map((historia, index) => (
          <View key={index} style={styles.button}>
            <Text style={styles.buttonText}>{historia}</Text>
          </View>
        ))}
      </ScrollView>
      <Publicaciones></Publicaciones>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  histories: {
    backgroundColor: 'red'
  },
  button:{
    borderColor: 'black',
    borderWidth: 2,
    padding:3
  },
});

export default HomeScreen;
