import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const frutas = [
  'Mango',
  'Lechosa (Papaya)',
  'Guayaba',
  'Patilla (Sandía)',
  'Melón',
  'Níspero',
  'Tamarindo',
  'Merey (Anacardo)',
  'Mamón (Quenepa)',
  'Cereza Criolla',
  'Parchita (Maracuyá)',
  'Guanábana',
  'Cambur (Banano)',
  'Plátano',
  'Piña',
  'Coco',
  'Mora',
  'Jobito',
  'Uva de Playa',
  'Borojo',
];

const ListaFrutas = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Frutas Tropicales</Text>
      <FlatList
        data={frutas}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTexto}> {item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListaFrutas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemTexto: {
    fontSize: 18,
  },
});
