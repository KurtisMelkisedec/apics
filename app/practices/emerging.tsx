import { Stack } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Info } from 'lucide-react-native';

export default function EmergingPracticeScreen() {
  const { t } = useTranslation();
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [infoContent, setInfoContent] = useState<{ code: string; title: string } | null>(null);

  const items = [
    { code: 'BP.120', title: t('practices.items.BP_120.title') },
    { code: 'BP.121', title: t('practices.items.BP_121.title') },
    { code: 'BP.150', title: t('practices.items.BP_150.title') },
    { code: 'BP.176', title: t('practices.items.BP_176.title') },
    { code: 'BP.177', title: t('practices.items.BP_177.title') },
    { code: 'BP.178', title: t('practices.items.BP_178.title') },
    { code: 'BP.179', title: t('practices.items.BP_179.title') },
    { code: 'BP.180', title: t('practices.items.BP_180.title') },
    { code: 'BP.181', title: t('practices.items.BP_181.title') },
    { code: 'BP.182', title: t('practices.items.BP_182.title') },
    { code: 'BP.183', title: t('practices.items.BP_183.title') },
    { code: 'BP.184', title: t('practices.items.BP_184.title') },
    { code: 'BP.188', title: t('practices.items.BP_188.title') },
  ];

  return (
    <>
      <Stack.Screen options={{ title: t('practices.emerging') }} />
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
