import { Stack } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Info } from 'lucide-react-native';

export default function AgilityScreen() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [infoContent, setInfoContent] = useState<{ code: string; title: string } | null>(null);

  const items = [
    { code: 'AG.1.1', title: t('performance.items.AG_1_1.title'), expandable: false },
    { code: 'AG.2.1', title: t('performance.items.AG_2_1.title'), expandable: false },
    { code: 'AG.2.2', title: t('performance.items.AG_2_2.title'), expandable: false },
    { code: 'AG.2.3', title: t('performance.items.AG_2_3.title'), expandable: false },
    { code: 'AG.2.4', title: t('performance.items.AG_2_4.title'), expandable: false },
    { code: 'AG.2.5', title: t('performance.items.AG_2_5.title'), expandable: false },
    { code: 'AG.1.2', title: t('performance.items.AG_1_2.title'), expandable: false },
    { code: 'AG.2.6', title: t('performance.items.AG_2_6.title'), expandable: false },
    { code: 'AG.2.7', title: t('performance.items.AG_2_7.title'), expandable: false },
    { code: 'AG.2.8', title: t('performance.items.AG_2_8.title'), expandable: false },
    { code: 'AG.1.4', title: t('performance.items.AG_1_4.title'), expandable: false },
    { code: 'AG.2.9', title: t('performance.items.AG_2_9.title'), expandable: false },
    { code: 'AG.2.10', title: t('performance.items.AG_2_10.title'), expandable: false },
    { code: 'AG.2.11', title: t('performance.items.AG_2_11.title'), expandable: false },
    { code: 'AG.2.12', title: t('performance.items.AG_2_12.title'), expandable: false },
    { code: 'AG.2.13', title: t('performance.items.AG_2_13.title'), expandable: false },
    { code: 'AG.2.14', title: t('performance.items.AG_2_14.title'), expandable: false },
    { code: 'AG.2.15', title: t('performance.items.AG_2_15.title'), expandable: false },
  ];

  const subItemCodes: Record<string, string[]> = {};

  return (
    <>
      <Stack.Screen options={{ title: t('performance.agility') }} />
      <ScrollView style={styles.container}>
        {items.map(item => (
          <View key={item.code}>
            <Pressable
              style={styles.row}
              onPress={() => item.expandable && setExpanded(prev => ({ ...prev, [item.code]: !prev[item.code] }))}
            >
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

            {item.expandable && expanded[item.code] && (
              <View style={styles.subList}>
                {(subItemCodes[item.code] || []).map(subCode => (
                  <View key={subCode} style={styles.subRow}>
                    <Text style={styles.subCode}>{subCode}</Text>
                    <Text style={styles.subDesc}>{t(`performance.subItems.${subCode.replace(/\./g, '_')}.description`)}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
        <Modal visible={infoOpen} transparent animationType="fade" onRequestClose={() => setInfoOpen(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>{t('performance.definition')}</Text>
              <Text style={styles.modalBody}>{infoContent && t(`performance.infoDetails.${infoContent.code.replace(/\./g, '_')}`)}</Text>
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
