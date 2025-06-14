// app/(tabs)/animales.tsx
import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import ListaAnimales from '@/app/listaAnimales';

export default function AnimalesScreen() {
  return (
    <View style={styles.container}>
      <ListaAnimales />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
