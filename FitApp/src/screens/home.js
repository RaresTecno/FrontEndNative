import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import Publicaciones from '../components/publicacion';
import Historias from '../components/histories';




const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}
    showsVerticalScrollIndicator={false} 
    
    >
      <Historias></Historias>
      <Publicaciones></Publicaciones>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
  }
});

export default HomeScreen;
