import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function DashboardScreen() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCoagulantDropdown, setShowCoagulantDropdown] = useState(false);
  const [showMixingDropdown, setShowMixingDropdown] = useState(false);
  const [showFlocculationDropdown, setShowFlocculationDropdown] = useState(false);
  const [showDesludgingDropdown, setShowDesludgingDropdown] = useState(false);

  const params = useLocalSearchParams();
  useEffect(() => {
    if (params.menu === 'open') {
      setIsMenuOpen(true);
    }
  }, [params.menu]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setIsMenuOpen(true)}>
          <MaterialCommunityIcons name="menu" size={28} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Inlet / Sensors</Text>
          <Text style={styles.headerSubtitle}>Manual Mode</Text>
        </View>
        <TouchableOpacity>
          <View>
            <MaterialCommunityIcons name="bell-outline" size={28} color="#000" />
            <View style={styles.notificationDot} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>System Overview</Text>

        {/* Pump Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIconContainer}>
              <Image source={require('@/assets/images/inletpump.png')} style={{ width: 24, height: 24 }} resizeMode="contain" />
            </View>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle}>Inlet Pump 1</Text>
              <Text style={styles.statusTextGreen}>Running</Text>
            </View>
            <View style={styles.onBadge}>
              <Text style={styles.onBadgeText}>ON</Text>
            </View>
          </View>
          <View style={styles.cardFooter}>
            <View>
              <Text style={styles.footerLabel}>Status</Text>
              <Text style={styles.statusTextGreen}>Running</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.footerLabel}>Since</Text>
              <Text style={styles.footerValue}>08:15 AM</Text>
            </View>
          </View>
        </View>

        {/* Contactor Sensors Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIconContainer}>
              <Image source={require('@/assets/images/contactor.png')} style={{ width: 24, height: 24 }} resizeMode="contain" />
            </View>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle}>Contactor Sensors</Text>
              <Text style={styles.cardSubtitle}>2 Sensors</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Contactor 1</Text>
            <View style={styles.statusRow}>
              <Text style={styles.statusTextGreen}>Active</Text>
              <View style={styles.statusDotGreen} />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Contactor 2</Text>
            <View style={styles.statusRow}>
              <Text style={styles.statusTextGreen}>Active</Text>
              <View style={styles.statusDotGreen} />
            </View>
          </View>
        </View>

        {/* Solenoid Valves Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIconContainer}>
              <Image source={require('@/assets/images/solenoid.png')} style={{ width: 24, height: 24 }} resizeMode="contain" />
            </View>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle}>Solenoid Valves</Text>
              <Text style={styles.cardSubtitle}>2 Valves</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Valve 1</Text>
            <View style={styles.statusRow}>
              <Text style={styles.statusTextGreen}>Open</Text>
              <View style={styles.statusDotGreen} />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Valve 2</Text>
            <View style={styles.statusRow}>
              <Text style={styles.statusTextGreen}>Open</Text>
              <View style={styles.statusDotGreen} />
            </View>
          </View>
        </View>

        {/* Tank Filling Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle}>Tank Filling</Text>
            </View>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>Wastewater Tank</Text>
              <Text style={styles.progressValue}>65 %</Text>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '65%' }]} />
            </View>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>Normal Water Tank</Text>
              <Text style={styles.progressValue}>42 %</Text>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '42%' }]} />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Side Drawer Menu */}
      <Modal visible={isMenuOpen} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={StyleSheet.absoluteFill} onPress={() => setIsMenuOpen(false)} activeOpacity={1} />

          <View style={styles.sideDrawer}>
            <View style={styles.drawerHeader}>
              <Text style={styles.drawerTitle}></Text>
              <TouchableOpacity onPress={() => setIsMenuOpen(false)}>
                <MaterialCommunityIcons name="close" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.drawerContent}>
              {[
                'Inlet Sensor',
                'Coagulant Sensor',
                'Mixing Tank',
                'Flocculation',
                'Desludging'
              ].map((item, index) => (
                <View key={index}>

                  <TouchableOpacity
                    style={styles.drawerMenuItem}
                    onPress={() => {
                      if (item === 'Coagulant Sensor') {
                        setShowCoagulantDropdown(!showCoagulantDropdown);
                        setShowMixingDropdown(false);
                        setShowFlocculationDropdown(false);
                        setShowDesludgingDropdown(false);
                      }
                      else if (item === 'Mixing Tank') {
                        setShowMixingDropdown(!showMixingDropdown);
                        setShowCoagulantDropdown(false);
                        setShowFlocculationDropdown(false);
                        setShowDesludgingDropdown(false);
                      }
                      else if (item === 'Flocculation') {
                        setShowFlocculationDropdown(!showFlocculationDropdown);
                        setShowCoagulantDropdown(false);
                        setShowMixingDropdown(false);
                        setShowDesludgingDropdown(false);
                      }
                      else if (item === 'Desludging') {
                        setShowDesludgingDropdown(!showDesludgingDropdown);
                        setShowCoagulantDropdown(false);
                        setShowMixingDropdown(false);
                        setShowFlocculationDropdown(false);
                      }
                      else {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    <Text style={styles.drawerMenuText}>{item}</Text>
                  </TouchableOpacity>

                  {/* Dropdown for Coagulant */}
                  {item === 'Coagulant Sensor' && showCoagulantDropdown && (
                    <View style={styles.dropdownContainer}>

                      <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => {
                          setShowCoagulantDropdown(false);
                          setIsMenuOpen(false);
                          router.push('/coagulant/manual');
                        }}
                      >
                        <Text style={styles.dropdownText}>Manual Mode</Text>
                      </TouchableOpacity>


                      <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => {
                          console.log('Automatic Mode Selected');
                          setIsMenuOpen(false);
                          router.push('/coagulant/automatic');
                        }}
                      >
                        <Text style={styles.dropdownText}>Automatic Mode</Text>
                      </TouchableOpacity>

                    </View>
                  )}
                 {item === 'Mixing Tank' && showMixingDropdown && (
  <View style={styles.dropdownContainer}>

    {/* MANUAL MODE */}
    <TouchableOpacity
      style={styles.dropdownItem}
      onPress={() => {
        setShowMixingDropdown(false);
        setIsMenuOpen(false);
        router.push('/mixingtank/manual');
      }}
    >
      <Text style={styles.dropdownText}>Manual Mode</Text>
    </TouchableOpacity>

    {/* AUTOMATIC MODE */}
    <TouchableOpacity
      style={styles.dropdownItem}
      onPress={() => {
        setShowMixingDropdown(false);
        setIsMenuOpen(false);
        router.push('/mixingtank/automatic');
      }}
    >
      <Text style={styles.dropdownText}>Automatic Mode</Text>
    </TouchableOpacity>

  </View>
)}
                 {item === 'Flocculation' && showFlocculationDropdown && (
  <View style={styles.dropdownContainer}>
    {/* MANUAL MODE */}
    <TouchableOpacity
      style={styles.dropdownItem}
      onPress={() => {
        setShowFlocculationDropdown(false);
        setIsMenuOpen(false);
        router.push('/flocculation/manual');
      }}
    >
      <Text style={styles.dropdownText}>Manual Mode</Text>
    </TouchableOpacity>

      {/* AUTOMATIC MODE */}
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          setShowFlocculationDropdown(false);
          setIsMenuOpen(false);
          router.push('/flocculation/automatic');
        }}
      >
        <Text style={styles.dropdownText}>Automatic Mode</Text>
      </TouchableOpacity>
    </View>
  )}

  {item === 'Desludging' && showDesludgingDropdown && (
    <View style={styles.dropdownContainer}>
      {/* MANUAL MODE */}
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          setShowDesludgingDropdown(false);
          setIsMenuOpen(false);
          router.push('/desludging/manual');
        }}
      >
        <Text style={styles.dropdownText}>Manual Mode</Text>
      </TouchableOpacity>

      {/* AUTOMATIC MODE */}
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          setShowDesludgingDropdown(false);
          setIsMenuOpen(false);
          router.push('/desludging/automatic');
        }}
      >
        <Text style={styles.dropdownText}>Automatic Mode</Text>
      </TouchableOpacity>
    </View>
  )}
                </View>
              ))}
            </ScrollView>
            
            <View style={styles.drawerFooter}>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => {
                  setIsMenuOpen(false);
                  router.replace('/');
                }}
              >
                <MaterialCommunityIcons name="logout" size={24} color="#EF4444" />
                <Text style={styles.logoutText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
  },
  sideDrawer: {
    width: '75%',
    maxWidth: 320,
    backgroundColor: '#FFFFFF',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 20,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  drawerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  drawerContent: {
    padding: 16,
  },
  drawerMenuItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  drawerMenuText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  drawerFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EF4444',
    marginLeft: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '600',
    marginTop: 2,
  },
  notificationDot: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardIconContainer: {
    marginRight: 12,
  },
  cardTitleContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  statusTextGreen: {
    fontSize: 13,
    color: '#10B981',
    fontWeight: '500',
  },
  onBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  onBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  footerLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  footerValue: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  rowLabel: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDotGreen: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginLeft: 8,
  },
  progressContainer: {
    marginTop: 12,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 13,
    color: '#374151',
    fontWeight: '500',
  },
  progressValue: {
    fontSize: 13,
    color: '#6B7280',
  },
  progressBarBg: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#208AEF',
  },
  dropdownContainer: {
    paddingLeft: 20,
    backgroundColor: '#F9FAFB',
  },

  dropdownItem: {
    paddingVertical: 12,
  },

  dropdownText: {
    fontSize: 14,
    color: '#4B5563',
  },
});
