import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function SettingsScreen() {
  const [manualMode, setManualMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>
        <View style={styles.backButton} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* General */}
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.settingRow}>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Manual Mode</Text>
            <Text style={styles.settingSubtitle}>Enable manual control of devices</Text>
          </View>
          <Switch
            trackColor={{ false: '#E5E7EB', true: '#208AEF' }}
            thumbColor={'#FFFFFF'}
            onValueChange={setManualMode}
            value={manualMode}
          />
        </View>

        {/* Devices */}
        <Text style={styles.sectionTitle}>Devices</Text>
        <TouchableOpacity style={styles.deviceRow}>
          <Image source={require('@/assets/images/inletpump.png')} style={[styles.deviceIcon, { width: 24, height: 24 }]} resizeMode="contain" />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Inlet Pump 1</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.deviceRow}>
          <Image source={require('@/assets/images/contactor.png')} style={[styles.deviceIcon, { width: 24, height: 24 }]} resizeMode="contain" />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Contactor Sensors</Text>
            <Text style={styles.settingSubtitle}>2 Sensors</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.deviceRow}>
          <Image source={require('@/assets/images/solenoid.png')} style={[styles.deviceIcon, { width: 24, height: 24 }]} resizeMode="contain" />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Solenoid Valves</Text>
            <Text style={styles.settingSubtitle}>2 Valves</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#9CA3AF" />
        </TouchableOpacity>

        {/* Alerts & Notifications */}
        <Text style={styles.sectionTitle}>Alerts & Notifications</Text>
        <View style={styles.settingRow}>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Enable Notifications</Text>
            <Text style={styles.settingSubtitle}>Receive alerts for status changes</Text>
          </View>
          <Switch
            trackColor={{ false: '#E5E7EB', true: '#208AEF' }}
            thumbColor={'#FFFFFF'}
            onValueChange={setNotifications}
            value={notifications}
          />
        </View>

        {/* About */}
        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.aboutRow}>
          <Text style={styles.aboutLabel}>App Version</Text>
          <Text style={styles.aboutValue}>1.0.0</Text>
        </View>
        <View style={styles.aboutRow}>
          <Text style={styles.aboutLabel}>PLC / Controller</Text>
          <View style={styles.statusRow}>
            <Text style={styles.statusTextGreen}>Connected</Text>
            <View style={styles.statusDotGreen} />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 15,
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
    fontWeight: '700',
    color: '#111827',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginTop: 16,
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
  },
  settingSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },
  deviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  deviceIcon: {
    marginRight: 16,
  },
  aboutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  aboutLabel: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
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
