import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
    const deportes = Array.from({ length: 50 }, (_, index) => `Deporte ${index + 1}`);

    const llamada = () =>{
        alert('Deporte')
    }
    const AddSport = () =>{
        alert('Añadir deporte')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>TUS DEPORTES</Text>
            </View>
            <ScrollView contentContainerStyle={styles.main}>
                {deportes.map((deporte, index) => (
                    <TouchableOpacity key={index} style={styles.button} onPress={llamada}>
                        <Text style={styles.buttonText}>{deporte}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.DivNewSport}>
                <TouchableOpacity style={styles.NewSport}>
                    <Text style={styles.buttonText} onPress={AddSport}>Añadir Deporte</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        padding: 10,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
    },
    main: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        marginVertical: 5,
        width: '95%',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }, 
    DivNewSport: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    NewSport: {
        backgroundColor: 'green',
        padding: 10,
        marginVertical: 10,
        width: '95%',
        alignItems: 'center',
        borderRadius: 5,
    },
});

export default HomeScreen;
