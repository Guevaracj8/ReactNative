// app/(tabs)/scroll.tsx
import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import VistaScroll from '@/app/scroll';

export default function ScrollScreen() {
  return (
    <View style={styles.container}>
      <VistaScroll />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
