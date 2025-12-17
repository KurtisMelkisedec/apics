import { LinearGradient } from 'expo-linear-gradient';
import { usePathname, useRouter } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DrawerMenu({ isOpen, onClose }: DrawerMenuProps) {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
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
      subItems: [
        { label: t('performance.reliability'), route: '/performance/reliability' },
        { label: t('performance.responsiveness'), route: '/performance/responsiveness' },
        { label: t('performance.agility'), route: '/performance/agility' },
        { label: t('performance.cost'), route: '/performance/cost' },
        { label: t('performance.assetManagement'), route: '/performance/asset-management' },
      ],
    },
    {
      id: 'practices',
      label: t('tabs.tab3'),
      subItems: [
        { label: t('practices.emerging'), route: '/practices/emerging' },
        { label: t('practices.best'), route: '/practices/best' },
        { label: t('practices.standard'), route: '/practices/standard' },
      ],
    },
    {
      id: 'people',
      label: t('tabs.tab4'),
      subItems: [
        { label: t('people.skill'), route: '/people/skill' },
        { label: t('people.experience'), route: '/people/experience' },
        { label: t('people.training'), route: '/people/training' },
      ],
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
      <View style={styles.container}>
        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
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
                    {item.subItems.map((subItem, index) => {
                      const isActive = pathname === subItem.route;
                      return (
                        <Pressable
                          key={index}
                          style={[styles.subMenuItem, isActive && styles.subMenuItemActive]}
                          onPress={() => handleNavigation(subItem.route)}
                        >
                          <Text style={[styles.subMenuLabel, isActive && styles.subMenuLabelActive]}>{subItem.label}</Text>
                        </Pressable>
                      );
                    })}
                  </View>
                )}
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Footer Bar - pinned at bottom */}
        <View style={styles.footerBar}>
          {[
            { id: 'about', labelKey: 'footer.about', url: 'https://www.ascm.org/about-ascm/' },
            { id: 'contact', labelKey: 'footer.contact', url: 'https://www.ascm.org/contact-ascm' },
            { id: 'join', labelKey: 'footer.join', url: 'https://www.ascm.org/membership-community/' },
            { id: 'privacy', labelKey: 'footer.privacy', url: 'https://www.ascm.org/privacy-policy/' },
          ].map(link => (
            <Pressable key={link.id} style={styles.footerLink} onPress={() => Linking.openURL(link.url)}>
              <Text style={styles.footerLinkText}>{t(link.labelKey)}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    width: 280,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 12,
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
    backgroundColor: '#FFFFFF',
    marginHorizontal: 12,
    marginBottom: 6,
    paddingVertical: 4,
  },
  subMenuItem: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  subMenuLabel: {
    color: '#2A2A2A',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 8,
  },
  subMenuItemActive: {
    backgroundColor: '#2E5C8A',
  },
  subMenuLabelActive: {
    color: '#FFFFFF',
  },
  footerBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingBottom: 54,
    borderTopWidth: 0,
    backgroundColor: '#4A90E2',
  },
  footerLink: {
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  footerLinkText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0,
  },
});
