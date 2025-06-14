import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente Hijo
const SaludoHijo = ({ nombre }: { nombre: string }) => {
  return (
    <Text style={styles.saludoTexto}>¡Hola, {nombre}!</Text>
  );
};

// Componente Padre
const SaludoPadre = () => {
  const nombres = ['Ana', 'Carlos', 'María'];

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Saludos:</Text>
      {nombres.map((nombre, index) => (
        <SaludoHijo key={index} nombre={nombre} />
      ))}
    </View>
  );
};

export default SaludoPadre;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  saludoTexto: {
    fontSize: 18,
    marginVertical: 5,
  },
});
