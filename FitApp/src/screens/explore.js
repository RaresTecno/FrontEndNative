import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.divButtons}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Para ti</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Rutinas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Recetas</Text>
                    </TouchableOpacity>

                </View>
                <TextInput style={styles.searchInput}></TextInput>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    header: {
        width: '100%',
        alignItems: 'center'
    },
    divButtons: {
        width: '100%',
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: 'blue',
        borderWidth: 2
    },
    buttonText: {
        textAlign: 'center'
    },
    searchInput: {
        color: '#fff',
        width: '90%',
        backgroundColor: 'red',
    },
});

export default HomeScreen;
