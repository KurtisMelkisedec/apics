import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ProcessButton } from '@/components/process/process-button';

export default function PracticesTab() {
  const { t } = useTranslation();

  return (
    <LinearGradient colors={['#F0F8FF', '#4A90E2']} style={styles.container} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <ProcessButton title={t('practices.emerging')} route="/practices/emerging" />
            <ProcessButton title={t('practices.best')} route="/practices/best" />
            <ProcessButton title={t('practices.standard')} route="/practices/standard" />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollView: { flex: 1 },
  content: { flex: 1, padding: 20, paddingTop: 30 },
  buttonContainer: { gap: 4 },
});
