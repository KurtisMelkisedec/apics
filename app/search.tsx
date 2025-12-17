import { useRouter } from 'expo-router';
import { Search } from 'lucide-react-native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SearchScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Top section with green background */}
      <View style={styles.topSection}>
        {/* Title */}
        <Text style={styles.title}>{t('search.title')}</Text>

        {/* Search input with green background */}
        <View style={styles.searchContainer}>
          <View style={styles.inputWrapper}>
            <Search color="#FFFFFF" size={20} />
            <TextInput
              placeholder={t('search.placeholder')}
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              style={styles.input}
              underlineColorAndroid="transparent"
              returnKeyType="search"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>
      </View>

      {/* Empty white space for body */}
      <View style={styles.body} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topSection: {
    backgroundColor: '#42a3b2ff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  header: {
    marginBottom: 20,
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#FFFFFF',
  },
  body: {
    flex: 1,
  },
});
