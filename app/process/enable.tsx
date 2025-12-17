import { Stack } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Info } from 'lucide-react-native';

export default function EnableScreen() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [infoContent, setInfoContent] = useState<{ code: string; title: string } | null>(null);

  const items = [
    { code: 'sE1', title: t('enable.items.sE1.title') },
    { code: 'sE2', title: t('enable.items.sE2.title') },
    { code: 'sE3', title: t('enable.items.sE3.title') },
    { code: 'sE4', title: t('enable.items.sE4.title') },
    { code: 'sE5', title: t('enable.items.sE5.title') },
    { code: 'sE6', title: t('enable.items.sE6.title') },
    { code: 'sE7', title: t('enable.items.sE7.title') },
    { code: 'sE8', title: t('enable.items.sE8.title') },
    { code: 'sE9', title: t('enable.items.sE9.title') },
    { code: 'sE10', title: t('enable.items.sE10.title') },
    { code: 'sE11', title: t('enable.items.sE11.title') },
  ];

  const subItemCodes: Record<string, string[]> = {
    sE1: ['sE1.1', 'sE1.2', 'sE1.3', 'sE1.4'],
    sE2: ['sE2.1', 'sE2.2', 'sE2.3', 'sE2.4'],
    sE3: ['sE3.1', 'sE3.2', 'sE3.3', 'sE3.4'],
    sE4: ['sE4.1', 'sE4.2', 'sE4.3', 'sE4.4'],
    sE5: ['sE5.1', 'sE5.2', 'sE5.3', 'sE5.4'],
    sE6: ['sE6.1', 'sE6.2', 'sE6.3', 'sE6.4'],
    sE7: ['sE7.1', 'sE7.2', 'sE7.3', 'sE7.4'],
    sE8: ['sE8.1', 'sE8.2', 'sE8.3', 'sE8.4'],
    sE9: ['sE9.1', 'sE9.2', 'sE9.3', 'sE9.4'],
    sE10: ['sE10.1', 'sE10.2', 'sE10.3', 'sE10.4'],
    sE11: ['sE11.1', 'sE11.2', 'sE11.3', 'sE11.4'],
  };

  return (
    <>
      <Stack.Screen options={{ title: t('process.enable') }} />
      <ScrollView style={styles.container}>
        {items.map(item => (
          <View key={item.code}>
            <Pressable style={styles.row} onPress={() => setExpanded(prev => ({ ...prev, [item.code]: !prev[item.code] }))}>
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

            {expanded[item.code] && (
              <View style={styles.subList}>
                {(subItemCodes[item.code] || []).map(subCode => (
                  <View key={subCode} style={styles.subRow}>
                    <Text style={styles.subCode}>{subCode}</Text>
                    <Text style={styles.subDesc}>{t(`enable.subItems.${subCode}.description`)}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
        <Modal visible={infoOpen} transparent animationType="fade" onRequestClose={() => setInfoOpen(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>{t('enable.definition')}</Text>
              <Text style={styles.modalBody}>{infoContent?.code && t(`enable.infoDetails.${infoContent.code}`)}</Text>
              <Pressable style={styles.modalClose} onPress={() => setInfoOpen(false)}>
                <Text style={styles.modalCloseText}>{t('common.close')}</Text>
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
  subList: {
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  subRow: {
    flexDirection: 'column',
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    paddingVertical: 10,
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
  subCode: {
    color: '#2E5C8A',
    fontWeight: '700',
    fontSize: 14,
  },
  subDesc: {
    color: '#2A2A2A',
    fontSize: 13,
    lineHeight: 18,
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
