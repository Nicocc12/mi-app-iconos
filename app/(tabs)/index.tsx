// App.tsx
import { MaterialIcons } from '@expo/vector-icons'; // ✅ Importación correcta para Expo
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejemplo con Vector Icons</Text>

      <MaterialIcons name="wifi" size={40} color="green" />

      {/* 1. Componente Icon */}
      <MaterialIcons name="home" size={50} color="#4CAF50" />

      {/* 2. Componente TouchableOpacity con Icon */}
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="camera-alt" size={30} color="#fff" />
        <Text style={styles.buttonText}>Abrir Cámara</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
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
