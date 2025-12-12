import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DrawerMenu({ isOpen, onClose }: DrawerMenuProps) {
  const { t } = useTranslation();
  const router = useRouter();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const menuItems = [
    {
      id: 'process',
      label: t('tabs.tab1'),
      subItems: [
        { label: t('process.plan'), route: '/process/plan' },
        { label: t('process.source'), route: '/process/source' },
        { label: t('process.make'), route: '/process/make' },
        { label: t('process.deliver'), route: '/process/deliver' },
        { label: t('process.return'), route: '/process/return' },
        { label: t('process.enable'), route: '/process/enable' },
      ],
    },
    {
      id: 'performance',
      label: t('tabs.tab2'),
      subItems: [],
    },
    {
      id: 'practices',
      label: t('tabs.tab3'),
      subItems: [],
    },
    {
      id: 'people',
      label: t('tabs.tab4'),
      subItems: [],
    },
  ];

  const toggleMenu = (menuId: string) => {
    setExpandedMenu(expandedMenu === menuId ? null : menuId);
  };

  const handleNavigation = (route: string) => {
    router.push(route as any);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <LinearGradient colors={['#1a1f3a', '#2d3561']} style={styles.drawer} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
      <ScrollView style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>SCOR</Text>
          <Text style={styles.subtitle}>SUPPLY CHAIN OPERATIONS{'\n'}REFERENCE MODEL</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map(item => (
            <View key={item.id}>
              <Pressable style={styles.menuItem} onPress={() => toggleMenu(item.id)}>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Text style={styles.chevron}>{expandedMenu === item.id ? '▼' : '▶'}</Text>
              </Pressable>

              {/* Submenu Items */}
              {expandedMenu === item.id && item.subItems.length > 0 && (
                <View style={styles.subMenu}>
                  {item.subItems.map((subItem, index) => (
                    <Pressable key={index} style={styles.subMenuItem} onPress={() => handleNavigation(subItem.route)}>
                      <Text style={styles.subMenuLabel}>{subItem.label}</Text>
                    </Pressable>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    width: 280,
  },
  content: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 2,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '600',
    color: '#B0B8D4',
    lineHeight: 14,
    letterSpacing: 0.5,
  },
  menuContainer: {
    paddingVertical: 16,
  },
  menuItem: {
    backgroundColor: '#2E5C8A',
    marginHorizontal: 12,
    marginVertical: 6,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuLabel: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  chevron: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  subMenu: {
    backgroundColor: 'rgba(46, 92, 138, 0.3)',
    marginHorizontal: 12,
    marginBottom: 6,
    paddingVertical: 4,
  },
  subMenuItem: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  subMenuLabel: {
    color: '#E8E8E8',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 8,
  },
});
