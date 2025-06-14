import { Tabs } from 'expo-router';

export default function ListasLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="frutas" options={{ title: 'Frutas' }} />
      <Tabs.Screen name="animales" options={{ title: 'Animales' }} />
    </Tabs>
  );
}


