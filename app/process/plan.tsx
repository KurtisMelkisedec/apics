import { Stack } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { IconSymbol } from '@/components/ui/icon-symbol';

export default function PlanScreen() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [infoContent, setInfoContent] = useState<{ code: string; title: string } | null>(null);

  const items = [
    { code: 'sP1', title: t('plan.items.sP1.title') },
    { code: 'sP2', title: t('plan.items.sP2.title') },
    { code: 'sP3', title: t('plan.items.sP3.title') },
    { code: 'sP4', title: t('plan.items.sP4.title') },
    { code: 'sP5', title: t('plan.items.sP5.title') },
  ];

  const subItemCodes: Record<string, string[]> = {
    sP1: ['sP1.1', 'sP1.2', 'sP1.3', 'sP1.4'],
    sP2: ['sP2.1', 'sP2.2', 'sP2.3', 'sP2.4'],
    sP3: ['sP3.1', 'sP3.2', 'sP3.3', 'sP3.4'],
    sP4: ['sP4.1', 'sP4.2', 'sP4.3', 'sP4.4'],
    sP5: ['sP5.1', 'sP5.2', 'sP5.3', 'sP5.4'],
  };

  return (
    <>
      <Stack.Screen options={{ title: t('process.plan') }} />
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
                  <IconSymbol name="info.circle" size={20} color="#9AA0A6" />
                </Pressable>
              </View>
            </Pressable>

            {expanded[item.code] && (
              <View style={styles.subList}>
                {(subItemCodes[item.code] || []).map(subCode => (
                  <View key={subCode} style={styles.subRow}>
                    <Text style={styles.subCode}>{subCode}</Text>
                    <Text style={styles.subDesc}>{t(`plan.subItems.${subCode}.description`)}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
        {/* Info Modal */}
        <Modal visible={infoOpen} transparent animationType="fade" onRequestClose={() => setInfoOpen(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>
                {infoContent?.code} • {infoContent?.title}
              </Text>
              <Text style={styles.modalBody}>{t('plan.infoBody', { title: infoContent?.title })}</Text>
              <Pressable style={styles.modalClose} onPress={() => setInfoOpen(false)}>
                <Text style={styles.modalCloseText}>{t('common.close', 'Fermer')}</Text>
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
    backgroundColor: '#000', // fond noir comme sur ton image
    padding: 16,
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
  subTitle: {
    color: '#EAEAEA',
    fontSize: 16,
    marginTop: 1,
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
