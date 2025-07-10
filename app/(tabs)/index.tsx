
// Importamos la familia de iconos 'MaterialIcons' desde la librería '@expo/vector-icons'.
// Esta libreria ya viene incluida al usar Expo y permite agregar iconos fácilmente.
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

// Importamos componentes basicos de React Native:
// - TouchableOpacity: para crear botones con efecto de toque.
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Componente principal de la aplicacion.
export default function App() {
  return (
    // View principal que contiene todos los elementos de la pantalla.
    // Usa el estilo 'container' para centrar todo.
    <View style={styles.container}>

      <Text style={styles.title}>Ejemplo con Vector Icons</Text>

      {/* Icono de 'wifi' usando MaterialIcons.
          - name="wifi": define que icono mostrar.
          - size={40}: tamaño del icono.
          - color="green": color del icono.
      */}
      <MaterialIcons name="wifi" size={40} color="green" />

      {/* Otro icono, en este caso 'home'.
          - name="home": muestra un icono de casa.
          - size={50}: tamanio del icono.
          - color="#4CAF50": color del icono.
      */}
      <MaterialIcons name="home" size={50} color="#4CAF50" />

      {/* Boton tactil que contiene un icono y un texto.
          - TouchableOpacity: permite que el botón reaccione al tocarlo (con efecto de opacidad).
      */}
      <TouchableOpacity style={styles.button}>

        {/* Icono 'camara' dentro del boton.
            - name="camera-alt": icono de camara.
            - size={30}: tamaño.
            - color="#fff": color.
        */}
        <MaterialIcons name="camera-alt" size={30} color="#fff" />

        {/* Texto del boton.*/}
        <Text style={styles.buttonText}>Abrir Camara</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos definidos con StyleSheet.
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', // Centra los elementos verticalmente.
    alignItems: 'center', // Centra los elementos horizontalmente.
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22, 
    marginBottom: 20, 
  },
  button: {
    flexDirection: 'row', // Pone icono y texto uno al lado del otro.
    backgroundColor: '#2196F3', 
    padding: 10, 
    borderRadius: 8,
    alignItems: 'center', 
    marginTop: 20, 
  },
  buttonText: {
    color: '#fff', 
    marginLeft: 10, 
    fontSize: 18,
  },
});
