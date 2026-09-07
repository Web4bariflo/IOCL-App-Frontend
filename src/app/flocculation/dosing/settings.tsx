import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DosingSettingsScreen() {
  // const [operatingMode, setOperatingMode] = useState<'AUTO' | 'MANUAL'>('AUTO');
  // const [operatingMode, setOperatingMode] = useState<'AUTO' | 'MANUAL'>('AUTO');
  const [operatingMode, setOperatingMode] = useState<'AUTO' | 'MANUAL'>('MANUAL');
  const [notifications, setNotifications] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/dashboard')}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#111827" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>1.Dosing Settings</Text>
        </View>
        <View style={styles.backButton} />
      </View>
      <View style={styles.headerBorder} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* General */}
        <Text style={styles.sectionTitle}>GENERAL</Text>
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Operating Mode</Text>
              <Text style={styles.settingSubtitle}>Select automatic or manual control</Text>
            </View>
            {/* <View style={styles.toggleContainer}>
              <TouchableOpacity
                style={[styles.toggleButton, operatingMode === 'AUTO' && styles.toggleButtonActive]}
                onPress={() => setOperatingMode('AUTO')}
              >
                <Text style={[styles.toggleText, operatingMode === 'AUTO' && styles.toggleTextActive]}>AUTO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.toggleButton, operatingMode === 'MANUAL' && styles.toggleButtonActive]}
                onPress={() => setOperatingMode('MANUAL')}
              >
                <Text style={[styles.toggleText, operatingMode === 'MANUAL' && styles.toggleTextActive]}>MANUAL</Text>
              </TouchableOpacity>
            </View> */}
        <View style={styles.toggleContainer}>
  <TouchableOpacity
    style={[
      styles.toggleButton,
      operatingMode === 'AUTO' && styles.toggleButtonActive,
    ]}
    onPress={() => {
      setOperatingMode('AUTO');
      router.push('/flocculation/dosing');
    }}
  >
    <Text
      style={[
        styles.toggleText,
        operatingMode === 'AUTO' && styles.toggleTextActive,
      ]}
    >
      AUTO
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[
      styles.toggleButton,
      operatingMode === 'MANUAL' && styles.toggleButtonActive,
    ]}
    onPress={() => {
      setOperatingMode('MANUAL');
    }}
  >
    <Text
      style={[
        styles.toggleText,
        operatingMode === 'MANUAL' && styles.toggleTextActive,
      ]}
    >
      MANUAL
    </Text>
  </TouchableOpacity>
</View>
          </View>
        </View>

        {/* Devices */}
        <Text style={styles.sectionTitle}>DEVICES</Text>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.deviceRow}
            onPress={() => router.push('/flocculation/dosing/inletpump')}
          >
            <Image
              source={require('@/assets/images/inletpump.png')}
              style={[styles.deviceIcon, { width: 24, height: 24 }]}
              resizeMode="contain"
            />

            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Inlet Pump 1</Text>
            </View>

            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#111827"
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.deviceRow}
            onPress={() => router.push('/flocculation/dosing/contactorsensors')}
          >
            <Image
              source={require('@/assets/images/contactor.png')}
              style={[styles.deviceIcon, { width: 24, height: 24 }]}
              resizeMode="contain"
            />

            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Contactor Sensors</Text>
              <Text style={styles.settingSubtitle}>2 Sensors</Text>
            </View>

            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#111827"
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.deviceRow}
            onPress={() => router.push('/flocculation/dosing/solenoid')}
          >
            <Image
              source={require('@/assets/images/solenoid.png')}
              style={[styles.deviceIcon, { width: 24, height: 24 }]}
              resizeMode="contain"
            />

            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Solenoid Valves</Text>
              <Text style={styles.settingSubtitle}>2 Valves</Text>
            </View>

            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#111827"
            />
          </TouchableOpacity>
        </View>

        {/* Alerts & Notifications */}
        <Text style={styles.sectionTitle}>ALERTS & NOTIFICATIONS</Text>
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Enable Notifications</Text>
              <Text style={styles.settingSubtitle}>Receive alerts for status changes</Text>
            </View>
            <Switch
              trackColor={{ false: '#E5E7EB', true: '#14B8A6' }}
              thumbColor={'#FFFFFF'}
              onValueChange={setNotifications}
              value={notifications}
            />
          </View>
        </View>

        {/* About */}
        <Text style={styles.sectionTitle}>ABOUT</Text>
        <View style={styles.card}>
          <View style={styles.aboutRow}>
            <Text style={styles.aboutLabel}>App Version</Text>
            <Text style={styles.aboutValue}>1.0.0</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.aboutRow}>
            <Text style={styles.aboutLabel}>PLC / Controller</Text>
            <View style={styles.statusRow}>
              <Text style={styles.statusTextGreen}>Connected</Text>
              <View style={styles.statusDotGreen} />
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  headerBorder: {
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
    marginTop: 24,
    marginBottom: 8,
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  settingTextContainer: {
    flex: 1,
    paddingRight: 16,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  settingSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  toggleButtonActive: {
    backgroundColor: '#14B8A6',
  },
  toggleText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
  },
  toggleTextActive: {
    color: '#FFFFFF',
  },
  deviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  deviceIcon: {
    marginRight: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginLeft: 40,
  },
  aboutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  aboutLabel: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '600',
  },
  aboutValue: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusTextGreen: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '500',
  },
  statusDotGreen: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginLeft: 8,
  },
});