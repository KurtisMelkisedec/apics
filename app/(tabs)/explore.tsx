import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';

import { PerformanceButton } from '@/components/performance/performance-button';

export default function TabTwoScreen() {
  const { t } = useTranslation();

  return (
    <LinearGradient colors={['#A8D5E2', '#1a5f7a']} style={styles.container} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <PerformanceButton title={t('performance.reliability')} route="/performance/reliability" />
            <PerformanceButton title={t('performance.responsiveness')} route="/performance/responsiveness" />
            <PerformanceButton title={t('performance.agility')} route="/performance/agility" />
            <PerformanceButton title={t('performance.cost')} route="/performance/cost" />
            <PerformanceButton title={t('performance.assetManagement')} route="/performance/asset-management" />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
  buttonContainer: {
    gap: 4,
  },
});
