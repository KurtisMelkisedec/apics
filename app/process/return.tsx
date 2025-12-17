import { Stack } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Info } from 'lucide-react-native';

export default function ReturnScreen() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [infoContent, setInfoContent] = useState<{ code: string; title: string } | null>(null);

  const items = [
    { code: 'sR1', title: t('return.items.sR1.title') },
    { code: 'sR2', title: t('return.items.sR2.title') },
    { code: 'sR3', title: t('return.items.sR3.title') },
    { code: 'sR4', title: t('return.items.sR4.title') },
    { code: 'sR5', title: t('return.items.sR5.title') },
  ];

  const subItemCodes: Record<string, string[]> = {
    sR1: ['sR1.1', 'sR1.2', 'sR1.3', 'sR1.4'],
    sR2: ['sR2.1', 'sR2.2', 'sR2.3', 'sR2.4'],
    sR3: ['sR3.1', 'sR3.2', 'sR3.3', 'sR3.4'],
    sR4: ['sR4.1', 'sR4.2', 'sR4.3', 'sR4.4'],
    sR5: ['sR5.1', 'sR5.2', 'sR5.3', 'sR5.4'],
  };

  return (
    <>
      <Stack.Screen options={{ title: t('process.return') }} />
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
                    <Text style={styles.subDesc}>{t(`return.subItems.${subCode}.description`)}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
        <Modal visible={infoOpen} transparent animationType="fade" onRequestClose={() => setInfoOpen(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>{t('return.definition')}</Text>
              <Text style={styles.modalBody}>{infoContent?.code && t(`return.infoDetails.${infoContent.code}`)}</Text>
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
