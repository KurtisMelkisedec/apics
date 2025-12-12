import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ProcessButtonProps {
  title: string;
  route: string;
}

export function ProcessButton({ title, route }: ProcessButtonProps) {
  const router = useRouter();

  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={() => router.push(route as any)}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2E5C8A',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 0,
    marginVertical: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
