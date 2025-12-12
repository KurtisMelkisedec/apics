import { Pressable, StyleSheet, Text } from 'react-native';

interface PerformanceButtonProps {
  title: string;
  route: string;
}

export function PerformanceButton({ title, route }: PerformanceButtonProps) {
  const handlePress = () => {
    console.log(`Navigation to ${route} - route will be implemented later`);
  };

  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={handlePress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0b5672',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 0,
    marginVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#1a7a9e',
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
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
});
