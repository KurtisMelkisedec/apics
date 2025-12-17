import { Stack } from 'expo-router';

export default function PerformanceLayout() {
  return (
    <Stack>
      <Stack.Screen name="reliability" options={{ headerShown: false }} />
      <Stack.Screen name="responsiveness" options={{ headerShown: false }} />
      <Stack.Screen name="agility" options={{ headerShown: false }} />
      <Stack.Screen name="cost" options={{ headerShown: false }} />
      <Stack.Screen name="asset-management" options={{ headerShown: false }} />
    </Stack>
  );
}
