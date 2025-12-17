import { Stack } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Info } from 'lucide-react-native';

export default function BestPracticeScreen() {
  const { t } = useTranslation();
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [infoContent, setInfoContent] = useState<{ code: string; title: string } | null>(null);

  const items = [
    { code: 'BP.002', title: t('practices.bestSection.items.BP_002.title') },
    { code: 'BP.003', title: t('practices.bestSection.items.BP_003.title') },
    { code: 'BP.109', title: t('practices.bestSection.items.BP_109.title') },
    { code: 'BP.103', title: t('practices.bestSection.items.BP_103.title') },
    { code: 'BP.016', title: t('practices.bestSection.items.BP_016.title') },
    { code: 'BP.024', title: t('practices.bestSection.items.BP_024.title') },
    { code: 'BP.025', title: t('practices.bestSection.items.BP_025.title') },
    { code: 'BP.026', title: t('practices.bestSection.items.BP_026.title') },
    { code: 'BP.027', title: t('practices.bestSection.items.BP_027.title') },
    { code: 'BP.028', title: t('practices.bestSection.items.BP_028.title') },
    { code: 'BP.029', title: t('practices.bestSection.items.BP_029.title') },
    { code: 'BP.031', title: t('practices.bestSection.items.BP_031.title') },
    { code: 'BP.034', title: t('practices.bestSection.items.BP_034.title') },
    { code: 'BP.036', title: t('practices.bestSection.items.BP_036.title') },
    { code: 'BP.041', title: t('practices.bestSection.items.BP_041.title') },
    { code: 'BP.048', title: t('practices.bestSection.items.BP_048.title') },
    { code: 'BP.049', title: t('practices.bestSection.items.BP_049.title') },
    { code: 'BP.052', title: t('practices.bestSection.items.BP_052.title') },
    { code: 'BP.053', title: t('practices.bestSection.items.BP_053.title') },
    { code: 'BP.055', title: t('practices.bestSection.items.BP_055.title') },
    { code: 'BP.062', title: t('practices.bestSection.items.BP_062.title') },
    { code: 'BP.071', title: t('practices.bestSection.items.BP_071.title') },
    { code: 'BP.074', title: t('practices.bestSection.items.BP_074.title') },
  ];

  return (
    <>
      <Stack.Screen options={{ title: t('practices.best') }} />
      <ScrollView style={styles.container}>
        {items.map(item => (
          <View key={item.code}>
            <Pressable style={styles.row}>
              <View>
                <Text style={styles.code}>{item.code}</Text>
                <Text style={styles.title}>{item.title}</Text>
              </View>

              <View style={styles.iconContainer}>
                <Pressable
                  onPress={e => {
                    e.stopPropagation();
                    setInfoContent({ code: item.code, title: item.title });
                    setInfoOpen(true);
                  }}
                  style={styles.infoButton}
                >
                  <Info size={20} color="#9AA0A6" />
                </Pressable>
              </View>
            </Pressable>
          </View>
        ))}
        <Modal visible={infoOpen} transparent animationType="fade" onRequestClose={() => setInfoOpen(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>
                {infoContent?.code} • {infoContent?.title}
              </Text>
              <Text style={styles.modalBody}>{t('practices.infoBody', { title: infoContent?.title })}</Text>
              <Pressable style={styles.modalClose} onPress={() => setInfoOpen(false)}>
                <Text style={styles.modalCloseText}>{t('common.close', 'Close')}</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
    paddingBottom: 100,
  },
  row: {
    paddingVertical: 14,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  code: {
    color: '#7EC8E3',
    fontWeight: '700',
    fontSize: 16,
  },
  title: {
    color: 'white',
    fontSize: 18,
    marginTop: 2,
  },
  iconContainer: {
    backgroundColor: '#1F1F1F',
    padding: 8,
    borderRadius: 50,
    alignItems: 'center',
  },
  infoButton: {
    paddingHorizontal: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    width: '90%',
    backgroundColor: '#111',
    borderColor: '#333',
    borderWidth: 1,
    padding: 16,
  },
  modalTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  modalBody: {
    color: '#C8C8C8',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  modalClose: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#2E5C8A',
  },
  modalCloseText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
