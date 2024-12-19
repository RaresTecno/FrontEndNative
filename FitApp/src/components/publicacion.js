import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';

// Obtener las dimensiones de la pantalla
const { width: screen_width } = Dimensions.get('window');

// Función para generar un aspecto aleatorio entre "1_1", "4_5" o "2_3"
const getRandomAspectRatio = () => {
    const ratios = ["1_1", "4_5", "2_3"];
    return ratios[Math.floor(Math.random() * ratios.length)];
};

const height_header = screen_width / 9;
const height_footer = screen_width / 4;

const Publicacion = () => {
    return (
        <View style={styles.scrollContainer}>
            {Array.from({ length: 10 }).map((_, index) => {
                // Generar un aspect ratio aleatorio para cada View
                const aspect_ratio = getRandomAspectRatio();
                let aspect_height;

                // Calcular la altura basada en el aspect ratio
                if (aspect_ratio == "1_1") {
                    aspect_height = screen_width;
                } else if (aspect_ratio == "4_5") {
                    aspect_height = (screen_width * 5) / 4;
                } else if (aspect_ratio == "2_3") {
                    aspect_height = (screen_width * 3) / 2;
                }

                return (
                    <View style={[styles.mainContainer]}>
                        <View style={[styles.header]}>

                        </View>
                        <View key={index} style={[styles.container, { height: aspect_height }]}>
                            {/* Contenido dentro de la vista, puedes agregar texto o cualquier otro elemento */}
                        </View>
                        <View style={[styles.footer]}>

                        </View>
                    </View>
                );
            })}
        </View>
    );
};

export default Publicacion;

const styles = StyleSheet.create({
    scrollContainer: {
        // flexGrow: 1, // Esto asegura que el contenido puede expandirse para permitir el scroll
        // justifyContent: 'flex-start', // Puedes ajustar el contenido a tu preferencia
        // backgroundColor: '#1b1b1b'
    },
    mainContainer: {
        marginBottom: 10,  // Ajuste para un espaciado adecuado
    },
    container: {
        backgroundColor: '#060606',
        width: screen_width,
    },
    header: {
        backgroundColor: '#2b2b2b',
        width: screen_width,
        height: height_header,
    },
    footer: {
        backgroundColor: '#2b2b2b',
        width: screen_width,
        height: height_footer,
    }
});
