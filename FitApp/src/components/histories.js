import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Publicaciones from '../components/publicacion';
const historias = Array.from({ length: 50 }, (_, index) => `ceipmiguelhernandezfu`);


//Cortar el nombre y poner ... a los 14 caracteres
let isZoomed = false;
console.log(isZoomed)
const HomeScreen = () => {
    return (
        <ScrollView
            horizontal={true}
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false} 
        >
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                </View>
                <Text style={styles.buttonText} numberOfLines={1}>Tu historia</Text>
            </View>
            {historias.map((historia, index) => (
                <View key={index} style={styles.buttonContainer}>
                    <View key={index} style={styles.button}>
                    </View>
                    <Text style={styles.buttonText} numberOfLines={1}>{historia}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#1b1b1b',
        height: 120
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        
    },
    button: {
        backgroundColor: 'blue',
        height: '85%',
        borderRadius: 50,
        aspectRatio: 1,
        marginBottom: 2
    },
    buttonText: {
        height: '15%',
        textAlign: 'center',
        fontSize: 12,
        maxWidth: 100, 
        overflow: 'hidden',
        color: '#f1f1f1'
    },
});

export default HomeScreen;
