import { Stack } from 'expo-router';

export default function PracticesLayout() {
  return (
    <Stack>
      <Stack.Screen name="emerging" options={{ headerShown: false }} />
      <Stack.Screen name="best" options={{ headerShown: false }} />
      <Stack.Screen name="standard" options={{ headerShown: false }} />
    </Stack>
  );
}
