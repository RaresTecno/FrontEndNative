import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.top}>
        <View style={styles.top_1}>
          <View style={styles.profileImg}></View>
          <View style={styles.profileDerecha}>
            <View style={styles.profileNombre}>
              <Text style={styles.textName}>Rares.Zb</Text>

            </View>
            <View style={styles.profileNumbers}>

              <Text style={styles.profileF}>Follows</Text>
              <Text style={styles.profileF}>Followers</Text>
              <Text style={styles.profileF}>Entrenos</Text>

            </View>
            <View style={styles.profileNumbers}>
              <TouchableOpacity style={styles.btnVista}>
                <Text style={styles.buttonText} >Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnVista}>
                <Text style={styles.buttonText} >Mensajes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.descripcion}>
          <Text style={styles.descripcionText} >DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion</Text>
        </View>
      </View>
      <View style={styles.grafica}>

      </View>
      <View style={styles.mid}>
        <View style={styles.vistas}>
          <TouchableOpacity style={styles.btnVista}>
            <Text style={styles.buttonText} >Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnVista}>
            <Text style={styles.buttonText} >Rutinas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnVista}>
            <Text style={styles.buttonText} >Recetas</Text>
          </TouchableOpacity>

        </View>
      </View>

    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b1b1b',
  },
  top: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  top_1: {
    flexDirection: 'row',
    margin: 10,
  },
  profileImg: {
    height: 100,
    aspectRatio: 1,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000',
  },
  profileDerecha: {
    flex: 2,
  },
  profileNombre: {
    alignItems: 'center',
    marginVertical: 10
  },
  textName: {

  },
  profileNumbers: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  profileF: {
    textAlign: 'center',
    marginHorizontal: 10
  },
  descripcion: {
    marginHorizontal: 30,
    marginBottom: 10
  },
  descripcionText: {

  },
  grafica: {
    backgroundColor: 'blue',
    height: 200
  },
  mid: {
    backgroundColor: 'green',
    height: 9000
  },
  vistas: {
    flexDirection: 'row',

  },
  btnVista: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 2,
  },
  buttonText: {
    textAlign: 'center'
  },
});

export default HomeScreen;
