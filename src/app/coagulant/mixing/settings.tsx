import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function SettingsScreen() {
  const [operatingMode, setOperatingMode] = useState<'AUTO' | 'MANUAL'>('AUTO');
  const [notifications, setNotifications] = useState(true);

  const handleModeSelect = (mode: 'AUTO' | 'MANUAL') => {
    setOperatingMode(mode);
    if (mode === 'AUTO') {
      router.push('/coagulant/automatic');
    } else {
      router.push('/coagulant/manual');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/dashboard')}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#001133" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>
        <View style={styles.backButton} />
      </View>
      <View style={styles.headerBorder} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* General */}
        <Text style={styles.sectionTitle}>GENERAL</Text>
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Operating Mode</Text>
              <Text style={styles.settingSubtitle}>Select automatic or manual control</Text>
            </View>
            <View style={styles.toggleContainer}>
              <TouchableOpacity
                style={[styles.toggleButton, operatingMode === 'AUTO' && styles.toggleButtonActive]}
                onPress={() => handleModeSelect('AUTO')}
              >
                <Text style={[styles.toggleText, operatingMode === 'AUTO' && styles.toggleTextActive]}>AUTO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.toggleButton, operatingMode === 'MANUAL' && styles.toggleButtonActive]}
                onPress={() => handleModeSelect('MANUAL')}
              >
                <Text style={[styles.toggleText, operatingMode === 'MANUAL' && styles.toggleTextActive]}>MANUAL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Devices */}
{/* Devices */}
<Text style={styles.sectionTitle}>DEVICES</Text>

<View style={styles.card}>

  {/* Motor 1 */}
  <TouchableOpacity
    style={styles.deviceItem}
    onPress={() => router.push('/coagulant/mixing/motor1')}
  >
    <Image
      source={require('@/assets/images/motor.png')}
      style={styles.deviceIcon}
      resizeMode="contain"
    />

    <Text style={styles.deviceName}>
      Motor 1
    </Text>

    <MaterialCommunityIcons
      name="chevron-right"
      size={24}
      color="#001133"
    />
  </TouchableOpacity>

  <View style={styles.divider} />

  {/* Motor 2 */}
  <TouchableOpacity
    style={styles.deviceItem}
    onPress={() => router.push('/coagulant/mixing/motor2')}
  >
    <Image
      source={require('@/assets/images/motor.png')}
      style={styles.deviceIcon}
      resizeMode="contain"
    />

    <Text style={styles.deviceName}>
      Motor 2
    </Text>

    <MaterialCommunityIcons
      name="chevron-right"
      size={24}
      color="#001133"
    />
  </TouchableOpacity>

  <View style={styles.divider} />

  {/* Blower 1 */}
  <TouchableOpacity
    style={styles.deviceItem}
    onPress={() => router.push('/coagulant/mixing/blower')}
  >
    <Image
      source={require('@/assets/images/blower.png')}
      style={styles.deviceIcon}
      resizeMode="contain"
    />

    <Text style={styles.deviceName}>
      Blower 1
    </Text>

    <MaterialCommunityIcons
      name="chevron-right"
      size={24}
      color="#001133"
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
              trackColor={{ false: '#E5E7EB', true: '#009688' }}
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
            <Text style={styles.settingTitle}>App Version</Text>
            <Text style={styles.aboutValueText}>1.0.0</Text>
          </View>
          
          <View style={[styles.divider, { marginVertical: 12 }]} />
          
          <View style={styles.aboutRow}>
            <Text style={styles.settingTitle}>PLC / Controller</Text>
            <View style={styles.connectedContainer}>
              <Text style={styles.connectedText}>Connected</Text>
              <View style={styles.connectedDot} />
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
    backgroundColor: '#F8F9FA' 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 16, 
    paddingTop: 16, 
    paddingBottom: 16, 
    backgroundColor: '#FFFFFF' 
  },
  headerBorder: { 
    height: 1, 
    backgroundColor: '#E5E7EB' 
  },
  backButton: { 
    width: 40, 
    height: 40, 
    justifyContent: 'center' 
  },
  headerTitleContainer: { 
    flex: 1, 
    alignItems: 'center' 
  },
  headerTitle: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#001133' 
  },
  scrollContent: { 
    padding: 16, 
    paddingBottom: 40 
  },
  sectionTitle: { 
    fontSize: 13, 
    fontWeight: '600', 
    color: '#6B7280', 
    marginTop: 24, 
    marginBottom: 8, 
    marginLeft: 4 
  },
  card: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 12, 
    paddingHorizontal: 16, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 2, 
    elevation: 2 
  },
  settingRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingVertical: 16 
  },
  settingTextContainer: { 
    flex: 1, 
    paddingRight: 16 
  },
  settingTitle: { 
    fontSize: 15, 
    fontWeight: '600', 
    color: '#001133' 
  },
  settingSubtitle: { 
    fontSize: 13, 
    color: '#6B7280', 
    marginTop: 4 
  },
  toggleContainer: { 
    flexDirection: 'row', 
    backgroundColor: '#FFFFFF', 
    borderRadius: 6, 
    borderWidth: 1, 
    borderColor: '#E5E7EB', 
    overflow: 'hidden' 
  },
  toggleButton: { 
    paddingVertical: 8, 
    paddingHorizontal: 16, 
    backgroundColor: '#FFFFFF' 
  },
  toggleButtonActive: { 
    backgroundColor: '#009688' 
  },
  toggleText: { 
    fontSize: 12, 
    fontWeight: '600', 
    color: '#001133' 
  },
  toggleTextActive: { 
    color: '#FFFFFF' 
  },
  deviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  deviceIcon: {
    width: 40,
    height: 40,
  },
  deviceName: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#001133',
    marginLeft: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
  },
  aboutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  aboutValueText: {
    fontSize: 14,
    color: '#6B7280',
  },
  connectedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectedText: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '500',
    marginRight: 6,
  },
  connectedDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
  }
});