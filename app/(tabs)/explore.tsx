import { ProcessButton } from '@/components/process/process-button';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function TabTwoScreen() {
  const { t } = useTranslation();
  return (
    <LinearGradient colors={['#F0F8FF', '#4A90E2']} style={styles.container} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <ProcessButton title={t('performance.reliability')} route="/performance/reliability" />
            <ProcessButton title={t('performance.responsiveness')} route="/performance/responsiveness" />
            <ProcessButton title={t('performance.agility')} route="/performance/agility" />
            <ProcessButton title={t('performance.cost')} route="/performance/cost" />
            <ProcessButton title={t('performance.assetManagement')} route="/performance/asset-management" />
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
