import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const NombreFormulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const nombreCompleto = nombre.trim() && apellido.trim()
    ? `${nombre} ${apellido}`
    : '';

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ingresa tu nombre:</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={setNombre}
        value={nombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido"
        onChangeText={setApellido}
        value={apellido}
      />

      {nombreCompleto !== '' && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto}>¡Hola, {nombreCompleto}!</Text>
        </View>
      )}
    </View>
  );
};

export default NombreFormulario;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  resultadoContainer: {
    marginTop: 30,
    backgroundColor: '#dff0d8',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  resultadoTexto: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3c763d',
  },
});
