import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import NombreFormulario from '@/app/nombreFormulario';

export default function FormularioScreen() {
  return (
    <View style={styles.container}>
      <NombreFormulario />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
