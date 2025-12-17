import { Stack } from 'expo-router';
import { Info } from 'lucide-react-native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ExperienceScreen() {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const items = [
    { code: 'HE.0009', expandable: false },
    { code: 'HE.0010', expandable: false },
    { code: 'HE.0108', expandable: false },
    { code: 'HE.0162', expandable: false },
    { code: 'HE.0205', expandable: false },
    { code: 'HE.0224', expandable: false },
    { code: 'HE.0251', expandable: false },
    { code: 'HE.0265', expandable: false },
    { code: 'HE.0269', expandable: false },
    { code: 'HE.0303', expandable: false },
    { code: 'HE.0304', expandable: false },
    { code: 'HE.0305', expandable: false },
    { code: 'HE.0306', expandable: false },
    { code: 'HE.0307', expandable: false },
    { code: 'HE.0308', expandable: false },
    { code: 'HE.0309', expandable: false },
  ];

  const handleInfoPress = (code: string) => {
    setSelectedItem(code);
    setModalVisible(true);
  };

  return (
    <>
      <Stack.Screen options={{ title: t('people.experience') }} />
      <ScrollView style={styles.container}>
        {items.map(item => {
          const translationKey = item.code.replace(/\./g, '_');
          return (
            <View key={item.code} style={styles.itemContainer}>
              <View style={styles.itemContent}>
                <Text style={styles.itemCode}>{item.code}</Text>
                <Text style={styles.itemTitle}>{t(`people.experienceItems.${translationKey}.title`)}</Text>
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
