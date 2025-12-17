import { Stack } from 'expo-router';
import { Info } from 'lucide-react-native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TrainingScreen() {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const items = [
    'HT.0001',
    'HT.0002',
    'HT.0003',
    'HT.0004',
    'HT.0005',
    'HT.0006',
    'HT.0007',
    'HT.0017',
    'HT.0027',
    'HT.0034',
    'HT.0037',
    'HT.0060',
    'HT.0066',
    'HT.0067',
    'HT.0070',
    'HT.0080',
    'HT.0102',
    'HT.0122',
    'HT.0127',
    'HT.0128',
    'HT.0133',
    'HT.0157',
    'HT.0158',
    'HT.0159',
    'HT.0160',
    'HT.0161',
  ];

  const handleInfoPress = (code: string) => {
    setSelectedItem(code);
    setModalVisible(true);
  };

  return (
    <>
      <Stack.Screen options={{ title: t('people.training') }} />
      <ScrollView style={styles.container}>
        {items.map(code => {
          const translationKey = code.replace(/\./g, '_');
          return (
            <View key={code} style={styles.itemContainer}>
              <View style={styles.itemContent}>
                <Text style={styles.itemCode}>{code}</Text>
                <Text style={styles.itemTitle}>{t(`people.trainingItems.${translationKey}.title`)}</Text>
              </View>
              <Pressable onPress={() => handleInfoPress(code)} style={styles.infoButton}>
                <Info size={24} color="#7EC8E3" />
              </Pressable>
            </View>
          );
        })}
      </ScrollView>

      <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedItem}</Text>
            <Text style={styles.modalBody}>{t('people.infoBody', { title: selectedItem })}</Text>
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>{t('common.close')}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 16, paddingBottom: 100 },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    borderColor: '#333',
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  itemContent: { flex: 1 },
  itemCode: { fontSize: 16, fontWeight: '700', color: '#7EC8E3', marginBottom: 4 },
  itemTitle: { fontSize: 14, color: '#FFF' },
  infoButton: { marginLeft: 12 },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 24,
    width: '80%',
    maxWidth: 400,
  },
  modalTitle: { fontSize: 18, fontWeight: '700', color: '#2E5C8A', marginBottom: 12 },
  modalBody: { fontSize: 14, color: '#2A2A2A', marginBottom: 20 },
  closeButton: {
    backgroundColor: '#2E5C8A',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
});
