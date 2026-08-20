import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AutomaticModeScreen() {
  const router = useRouter();

  // Dummy states for switches
  const [switches, setSwitches] = useState({
    heater: true,
    motor1: true,
    motor2: true,
    motor3: true,
    pump: true,
  });

  const toggleSwitch = (key: keyof typeof switches) => {
    setSwitches((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderAutoAssetCard = (title: string, key: keyof typeof switches, iconName: any, iconColor: string) => (
    <View style={styles.assetCard}>
      <View style={styles.assetCardTopRow}>
        
        {/* Col 1: Icon & Title */}
        <View style={styles.assetCol1}>
          <MaterialCommunityIcons name={iconName} size={24} color={iconColor} style={{ marginTop: -2 }} />
          <View style={styles.assetTitleBox}>
            <Text style={styles.assetTitle} numberOfLines={2}>{title}</Text>
            <View style={styles.statusRow}>
              <View style={styles.statusDotGreen} />
              <Text style={styles.statusTextGreen}>ON</Text>
            </View>
          </View>
        </View>

        {/* Col 2: Start Time */}
        <View style={styles.assetCol2}>
          <Text style={styles.timingLabel}>Start Time</Text>
          <View style={styles.timingValueRow}>
            <Text style={styles.timingValue}>08:00 AM</Text>
            <MaterialCommunityIcons name="pencil" size={12} color="#9CA3AF" style={styles.timingEditIcon} />
          </View>
        </View>

        {/* Col 3: Off Time */}
        <View style={styles.assetCol2}>
          <Text style={styles.timingLabel}>Off Time</Text>
          <View style={styles.timingValueRow}>
            <Text style={styles.timingValue}>08:20 AM</Text>
            <MaterialCommunityIcons name="pencil" size={12} color="#9CA3AF" style={styles.timingEditIcon} />
          </View>
        </View>

        {/* Col 4: On Duration */}
        <View style={styles.assetCol3}>
          <Text style={styles.timingLabel}>On Duration</Text>
          <Text style={styles.timingDurationValue}>00:20:15</Text>
          <View style={styles.recordedRow}>
            <MaterialCommunityIcons name="clock-outline" size={10} color="#9CA3AF" />
            <Text style={styles.recordedText}>Recorded</Text>
          </View>
        </View>

      </View>

      <View style={styles.assetFooterRow}>
        <View style={styles.scheduleRow}>
          <MaterialCommunityIcons name="clock-time-four-outline" size={14} color="#3B82F6" />
          <Text style={styles.scheduleText}>Schedule: Daily</Text>
        </View>
        <Switch
          trackColor={{ false: '#D1D5DB', true: '#3B82F6' }}
          thumbColor={'#FFFFFF'}
          ios_backgroundColor="#D1D5DB"
          onValueChange={() => toggleSwitch(key)}
          value={switches[key]}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push({ pathname: '/dashboard', params: { menu: 'open' } })} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Flocculation Tank</Text>
          <View style={styles.modePillAuto}>
            <MaterialCommunityIcons name="refresh" size={12} color="#10B981" style={{ marginRight: 4 }} />
            <Text style={styles.modeTextAuto}>Automatic Mode</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="dots-vertical" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Tank Visualization Area */}
        <View style={styles.tankVisualizationContainer}>
          <View style={styles.tankImageWrapper}>
            <Image source={require('@/assets/images/flocauto.png')} style={styles.tankImage} resizeMode="contain" />
          </View>
          <View style={styles.systemStatusCardOverlay}>
            <View style={styles.statusHeaderRow}>
              <MaterialCommunityIcons name="check-circle" size={14} color="#10B981" />
              <Text style={styles.systemStatusLabel}>System Status</Text>
            </View>
            <Text style={styles.systemStatusValue}>Running</Text>
            <Text style={styles.systemStatusSub}>All systems normal</Text>
          </View>
        </View>

        {/* Metrics Row */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.metricsScrollContainer}>
          <View style={styles.metricCardHorizontal}>
            <View style={[styles.metricIconCircle, { backgroundColor: '#EFF6FF' }]}>
              <MaterialCommunityIcons name="clock-outline" size={18} color="#3B82F6" />
            </View>
            <View>
              <Text style={styles.metricLabel}>Total Run Time</Text>
              <Text style={styles.metricValue}>02:35:14</Text>
              <Text style={styles.metricSub}>Today</Text>
            </View>
          </View>
          <View style={styles.metricCardHorizontal}>
            <View style={[styles.metricIconCircle, { backgroundColor: '#F0FDF4' }]}>
              <MaterialCommunityIcons name="play-circle-outline" size={18} color="#10B981" />
            </View>
            <View>
              <Text style={styles.metricLabel}>Cycles</Text>
              <Text style={styles.metricValue}>05</Text>
              <Text style={styles.metricSub}>Today</Text>
            </View>
          </View>
          <View style={styles.metricCardHorizontal}>
            <View style={[styles.metricIconCircle, { backgroundColor: '#FEF3C7' }]}>
              <MaterialCommunityIcons name="hourglass" size={18} color="#F59E0B" />
            </View>
            <View>
              <Text style={styles.metricLabel}>Avg. On Duration</Text>
              <Text style={styles.metricValue}>00:20:15</Text>
              <Text style={styles.metricSub}>(Today)</Text>
            </View>
          </View>
          <View style={styles.metricCardHorizontal}>
            <View style={[styles.metricIconCircle, { backgroundColor: '#F3E8FF' }]}>
              <MaterialCommunityIcons name="calendar-month-outline" size={18} color="#8B5CF6" />
            </View>
            <View>
              <Text style={styles.metricLabel}>Next Cycle Start</Text>
              <Text style={styles.metricValue}>10:30 AM</Text>
              <Text style={styles.metricSub}>Today</Text>
            </View>
          </View>
        </ScrollView>

        {/* Assets Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Assets</Text>
          <TouchableOpacity style={styles.editButton}>
            <MaterialCommunityIcons name="pencil" size={14} color="#3B82F6" />
            <Text style={styles.editButtonText}>Edit Timings</Text>
          </TouchableOpacity>
        </View>

        {renderAutoAssetCard('Geyser Heater', 'heater', 'water-boiler', '#EF4444')}
        {renderAutoAssetCard('Stepper Motor 1', 'motor1', 'engine-outline', '#3B82F6')}
        {renderAutoAssetCard('Stepper Motor 2', 'motor2', 'engine-outline', '#3B82F6')}
        {renderAutoAssetCard('Stepper Motor 3', 'motor3', 'engine-outline', '#3B82F6')}
        {renderAutoAssetCard('Pump to Mixing Tank', 'pump', 'water-pump', '#3B82F6')}

        {/* Automatic Mode Info */}
        <View style={styles.autoModeInfoContainer}>
          <View style={styles.autoModeInfoContent}>
            <MaterialCommunityIcons name="refresh" size={24} color="#10B981" style={styles.autoModeInfoIcon} />
            <View style={styles.autoModeInfoTexts}>
              <Text style={styles.autoModeInfoTitle}>Automatic Mode</Text>
              <Text style={styles.autoModeInfoDesc}>All assets will run as per the scheduled timings.</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.stopAllButton}>
            <MaterialCommunityIcons name="stop-circle" size={16} color="#EF4444" />
            <Text style={styles.stopAllText}>Stop All</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="view-grid-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="water-boiler" size={24} color="#3B82F6" />
          <Text style={styles.navTextActive}>Tanks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="bell-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Alarms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="chart-box-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="cog-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingTop: 10, paddingBottom: 15, backgroundColor: '#FFFFFF',
  },
  backButton: { padding: 5 },
  headerTitleContainer: { alignItems: 'center', flex: 1 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },
  modePillAuto: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#D1FAE5',
    paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginTop: 4,
  },
  modeTextAuto: { color: '#10B981', fontSize: 12, fontWeight: '600' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  tankVisualizationContainer: { position: 'relative', marginBottom: 20, height: 220, justifyContent: 'center' },
  tankImageWrapper: {
    width: '100%', height: 200, justifyContent: 'center', alignItems: 'center'
  },
  tankImage: { width: '90%', height: '100%' },
  systemStatusCardOverlay: {
    position: 'absolute', top: 0, right: 10,
    backgroundColor: '#FFFFFF', borderRadius: 8, padding: 12, alignItems: 'center',
    borderWidth: 1, borderColor: '#F0FDF4', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,
  },
  statusHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  systemStatusLabel: { fontSize: 11, color: '#065F46', marginLeft: 4, fontWeight: '500' },
  systemStatusValue: { fontSize: 16, fontWeight: '700', color: '#10B981' },
  systemStatusSub: { fontSize: 10, color: '#6B7280', marginTop: 4, textAlign: 'center' },
  metricsScrollContainer: { paddingBottom: 15, paddingRight: 20 },
  metricCardHorizontal: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 12, padding: 12, marginRight: 10,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2,
    elevation: 1, borderWidth: 1, borderColor: '#F3F4F6', minWidth: 160,
  },
  metricIconCircle: { width: 36, height: 36, borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  metricLabel: { fontSize: 11, color: '#6B7280', marginBottom: 2 },
  metricValue: { fontSize: 15, fontWeight: '700', color: '#111827' },
  metricSub: { fontSize: 10, color: '#9CA3AF', marginTop: 1 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15, marginTop: 10 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },
  editButton: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', paddingHorizontal: 12,
    paddingVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: '#E5E7EB',
  },
  editButtonText: { color: '#3B82F6', fontSize: 12, fontWeight: '600', marginLeft: 4 },
  assetCard: {
    backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginBottom: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05,
    shadowRadius: 2, elevation: 1, borderWidth: 1, borderColor: '#F3F4F6',
  },
  assetCardTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  assetCol1: { flexDirection: 'row', alignItems: 'flex-start', flex: 1.5, paddingRight: 5 },
  assetTitleBox: { marginLeft: 6, flex: 1 },
  assetTitle: { fontSize: 12, fontWeight: '700', color: '#111827', flexWrap: 'wrap' },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  statusDotGreen: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#10B981', marginRight: 4 },
  statusTextGreen: { fontSize: 10, color: '#10B981', fontWeight: '600' },
  assetCol2: { flex: 1, paddingHorizontal: 2 },
  assetCol3: { flex: 1.2, alignItems: 'flex-end' },
  timingLabel: { fontSize: 9, color: '#6B7280', marginBottom: 2 },
  timingValueRow: { flexDirection: 'row', alignItems: 'center' },
  timingValue: { fontSize: 11, fontWeight: '700', color: '#111827' },
  timingEditIcon: { marginLeft: 4 },
  timingDurationValue: { fontSize: 11, fontWeight: '700', color: '#10B981' },
  recordedRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  recordedText: { fontSize: 9, color: '#9CA3AF', marginLeft: 2 },
  assetFooterRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
  scheduleRow: { flexDirection: 'row', alignItems: 'center' },
  scheduleText: { fontSize: 13, color: '#3B82F6', marginLeft: 6, fontWeight: '500' },
  autoModeInfoContainer: {
    flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', backgroundColor: '#F9FAFB', borderRadius: 12,
    padding: 12, marginTop: 10, borderWidth: 1, borderColor: '#E5E7EB', gap: 10, justifyContent: 'space-between'
  },
  autoModeInfoContent: { flex: 1, minWidth: '60%', flexDirection: 'row', alignItems: 'center' },
  autoModeInfoIcon: { marginRight: 10, backgroundColor: '#D1FAE5', padding: 6, borderRadius: 20, overflow: 'hidden' },
  autoModeInfoTexts: { flex: 1 },
  autoModeInfoTitle: { fontSize: 14, fontWeight: '600', color: '#111827' },
  autoModeInfoDesc: { fontSize: 11, color: '#4B5563', marginTop: 2 },
  stopAllButton: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FEF2F2', paddingHorizontal: 16,
    paddingVertical: 10, borderRadius: 8, borderWidth: 1, borderColor: '#FECACA',
  },
  stopAllText: { color: '#EF4444', fontWeight: '700', marginLeft: 6, fontSize: 14 },
  bottomNav: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#FFFFFF',
    paddingVertical: 12, borderTopWidth: 1, borderTopColor: '#E5E7EB',
  },
  navItem: { alignItems: 'center', justifyContent: 'center' },
  navText: { fontSize: 10, color: '#9CA3AF', marginTop: 4, fontWeight: '500' },
  navTextActive: { fontSize: 10, color: '#3B82F6', marginTop: 4, fontWeight: '600' },
});
