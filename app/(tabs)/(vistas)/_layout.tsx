import { Tabs } from 'expo-router';

export default function VistasLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Saludos' }} />
      <Tabs.Screen name="formulario" options={{ title: 'Formulario' }} />
      <Tabs.Screen name="scroll" options={{ title: 'Scroll View' }} />
    </Tabs>
  );
}

