import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const datosAnimales = [
  {
    title: 'Mamífero',
    data: ['León', 'Elefante', 'Delfín', 'Oso polar', 'Murciélago'],
  },
  {
    title: 'Aves',
    data: ['Águila', 'Pingüino', 'Colibrí', 'Flamenco', 'Búho'],
  },
  {
    title: 'Reptiles',
    data: ['Cocodrilo', 'Iguana', 'Tortuga marina', 'Serpiente pitón', 'Camaleón'],
  },
  {
    title: 'Anfibios',
    data: ['Rana arbórea', 'Salamandra', 'Sapo común'],
  },
  {
    title: 'Peces',
    data: ['Tiburón blanco', 'Caballito de mar'],
  },
];

const ListaAnimales = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Animales por Especie</Text>
      <SectionList
        sections={datosAnimales}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.seccion}>{title}</Text>
        )}
      />
    </View>
  );
};

export default ListaAnimales;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  seccion: {
    fontSize: 20,
    fontWeight: '600',
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
});
