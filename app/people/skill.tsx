import { Stack } from 'expo-router';
import { Info } from 'lucide-react-native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SkillScreen() {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const items = [
    { code: 'HS.002', expandable: false },
    { code: 'HS.003', expandable: false },
    { code: 'HS.004', expandable: false },
    { code: 'HS.005', expandable: false },
    { code: 'HS.006', expandable: false },
    { code: 'HS.007', expandable: false },
    { code: 'HS.009', expandable: false },
    { code: 'HS.0012', expandable: false },
    { code: 'HS.0015', expandable: false },
    { code: 'HS.0016', expandable: false },
    { code: 'HS.0018', expandable: false },
    { code: 'HS.0139', expandable: false },
    { code: 'HS.0022', expandable: false },
    { code: 'HS.0025', expandable: false },
    { code: 'HS.0028', expandable: false },
    { code: 'HS.0029', expandable: false },
    { code: 'HS.0032', expandable: false },
    { code: 'HS.0124', expandable: false },
    { code: 'HS.0036', expandable: false },
    { code: 'HS.0037', expandable: false },
    { code: 'HS.0069', expandable: false },
    { code: 'HS.0094', expandable: false },
    { code: 'HS.0108', expandable: false },
    { code: 'HS.0121', expandable: false },
    { code: 'HS.0124b', expandable: false },
    { code: 'HS.0139b', expandable: false },
    { code: 'HS.0144', expandable: false },
    { code: 'HS.0165', expandable: false },
  ];

  const handleInfoPress = (code: string) => {
    setSelectedItem(code);
    setModalVisible(true);
  };

  return (
    <>
      <Stack.Screen options={{ title: t('people.skill') }} />
      <ScrollView style={styles.container}>
        {items.map(item => {
          const translationKey = item.code.replace(/\./g, '_');
          return (
            <View key={item.code} style={styles.itemContainer}>
              <View style={styles.itemContent}>
                <Text style={styles.itemCode}>{item.code}</Text>
                <Text style={styles.itemTitle}>{t(`people.skillItems.${translationKey}.title`)}</Text>
              </View>
              <Pressable onPress={() => handleInfoPress(item.code)} style={styles.infoButton}>
                <Info size={24} color="#7EC8E3" />
              </Pressable>
            </View>
          );
        })}
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
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
