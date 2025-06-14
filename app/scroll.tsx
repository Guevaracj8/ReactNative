import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const VistaScroll = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.titulo}>Galería de Imágenes y Textos</Text>

      {[...Array(10)].map((_, index) => (
        <View key={index} style={styles.itemContainer}>
          <Image
            source={{ uri: 'https://imagenes.eltiempo.com/files/image_600_455/uploads/2018/03/22/5ab429520bc85.jpeg' }}
            style={styles.imagen}
          />
          <Text style={styles.texto}>
            Imagen número {index + 1}: ¡Los perritos dominan internet!
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default VistaScroll;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  imagen: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
    
  },
});
