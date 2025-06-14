// app/(tabs)/frutas.tsx
import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import ListaFrutas from '@/app/listaFrutas';

export default function FrutasScreen() {
  return (
    <View style={styles.container}>
      <ListaFrutas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
