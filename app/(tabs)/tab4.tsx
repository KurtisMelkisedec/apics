import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Text, View } from 'react-native';

export default function Tab4Screen() {
  const colorScheme = useColorScheme();
  const textColor = Colors[colorScheme ?? 'light'].text;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors[colorScheme ?? 'light'].background }}>
      <Text style={{ fontSize: 18, color: textColor }}>Tab 4 Content</Text>
    </View>
  );
}
