import { Tabs } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DrawerMenu } from '@/components/drawer/drawer-menu';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const toggleLanguage = useCallback(() => {
    const next = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(next);
  }, [i18n]);

  const headerBackgroundColor = '#FFFFFF';
  const headerTextColor = '#4A90E2';
  const tabBarBackgroundColor = '#FFFFFF';
  const tabBarTintColor = '#2E5C8A';
  const tabBarInactiveTintColor = '#4A90E2';

  return (
    <View style={{ flex: 1 }}>
      {/* Custom Header */}
      <View
        style={{
          backgroundColor: headerBackgroundColor,
          paddingTop: insets.top,
          paddingHorizontal: 16,
          paddingVertical: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 0,
        }}
      >
        {/* Menu Button */}
        <Pressable onPress={() => setDrawerOpen(true)} hitSlop={8}>
          <IconSymbol size={28} name="line.3.horizontal" color={headerTextColor} />
        </Pressable>

        {/* App Name */}
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: headerTextColor,
          }}
        >
          Scor
        </Text>

        {/* Right Actions: Search + Language */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Pressable hitSlop={8}>
            <IconSymbol size={24} name="magnifyingglass" color={headerTextColor} />
          </Pressable>
          <Pressable onPress={toggleLanguage} hitSlop={8} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconSymbol size={22} name="globe" color={headerTextColor} />
            <Text style={{ color: headerTextColor, marginLeft: 6, fontWeight: '600' }}>
              {i18n.language?.toUpperCase() === 'FR' ? 'FR' : i18n.language?.toUpperCase() === 'EN' ? 'EN' : i18n.language?.toUpperCase()}
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Tabs Navigator with Top Tab Bar */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarPosition: 'top',
          tabBarActiveTintColor: tabBarTintColor,
          tabBarInactiveTintColor: tabBarInactiveTintColor,
          tabBarStyle: {
            backgroundColor: tabBarBackgroundColor,
            borderBottomWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            paddingTop: 0,
            paddingBottom: 0,
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: '700',
            textTransform: 'none',
          },
          tabBarIndicatorStyle: {
            backgroundColor: tabBarTintColor,
            height: 4,
            borderRadius: 2,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: t('tabs.tab1'),
            tabBarIcon: () => null,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: t('tabs.tab2'),
            tabBarIcon: () => null,
          }}
        />
        <Tabs.Screen
          name="tab3"
          options={{
            title: t('tabs.tab3'),
            tabBarIcon: () => null,
          }}
        />
        <Tabs.Screen
          name="tab4"
          options={{
            title: t('tabs.tab4'),
            tabBarIcon: () => null,
          }}
        />
      </Tabs>

      {/* Drawer Menu */}
      <Modal visible={drawerOpen} transparent animationType="fade" onRequestClose={() => setDrawerOpen(false)}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <DrawerMenu isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
          {/* Overlay - tap to close */}
          <Pressable style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onPress={() => setDrawerOpen(false)} />
        </View>
      </Modal>
    </View>
  );
}
