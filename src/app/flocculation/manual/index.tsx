import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ManualModeScreen() {
  const router = useRouter();

  const renderManualAssetRow = (title: string, subtitle: string, iconName: any, iconColor: string, iconBgColor: string, isOn: boolean) => (
    <View style={styles.manualAssetRow}>
      <View style={[styles.manualAssetIconContainer, { backgroundColor: iconBgColor, borderColor: iconBgColor }]}>
        <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
      </View>
      <View style={styles.manualAssetTitleContainer}>
        <Text style={styles.assetTitle}>{title}</Text>
        <Text style={styles.assetSubtitle}>{subtitle}</Text>
      </View>

      <View style={styles.manualStatusContainer}>
        <View style={isOn ? styles.statusDotGreen : styles.statusDotRed} />
        <Text style={isOn ? styles.statusTextGreen : styles.statusTextRed}>{isOn ? 'ON' : 'OFF'}</Text>
      </View>

      <View style={styles.manualActionsContainer}>
        <TouchableOpacity style={isOn ? styles.actionButtonOutlineInactive : styles.actionButtonOutlineBlue}>
          <Text style={isOn ? styles.actionButtonOutlineTextInactive : styles.actionButtonOutlineTextBlue}>START</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isOn ? styles.actionButtonOutlineRed : styles.actionButtonOutlineRedInactive}>
          <Text style={isOn ? styles.actionButtonOutlineTextRed : styles.actionButtonOutlineTextRedInactive}>STOP</Text>
        </TouchableOpacity>
        <MaterialCommunityIcons name="chevron-right" size={20} color="#9CA3AF" />
      </View>
    </View>
  );

  const renderScheduleTimingRow = (title: string, iconName: any, iconColor: string, start: string, stop: string, duration: string) => (
    <View style={styles.scheduleTimingRow}>
      <View style={styles.manualAssetIconContainer}>
        <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
      </View>
      <View style={styles.scheduleTitleContainer}>
        <Text style={styles.assetTitle}>{title.split(' ')[0]}</Text>
        <Text style={styles.assetTitle}>{title.split(' ').slice(1).join(' ')}</Text>
      </View>

      <View style={styles.timingColumn}>
        <Text style={styles.timingLabel}>Start Time</Text>
        <View style={styles.timingInputBox}>
          <Text style={styles.timingInputValue}>{start}</Text>
          <MaterialCommunityIcons name="clock-outline" size={14} color="#9CA3AF" />
        </View>
      </View>

      <View style={styles.timingColumn}>
        <Text style={styles.timingLabel}>Stop Time</Text>
        <View style={styles.timingInputBox}>
          <Text style={styles.timingInputValue}>{stop}</Text>
          <MaterialCommunityIcons name="clock-outline" size={14} color="#9CA3AF" />
        </View>
      </View>

      <View style={styles.timingColumnRight}>
        <Text style={styles.timingLabel}>Duration (Last Run)</Text>
        <View style={styles.durationBox}>
          <Text style={styles.durationValue}>{duration}</Text>
          <MaterialCommunityIcons name="clock-outline" size={14} color="#10B981" />
        </View>
      </View>

      <MaterialCommunityIcons name="chevron-right" size={20} color="#9CA3AF" style={{ marginLeft: 8 }} />
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
          <Text style={styles.modeTextManual}>Manual Mode</Text>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={{ marginRight: 15 }}>
            <MaterialCommunityIcons name="bell-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="dots-vertical" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Tank Visualization Area */}
        <View style={styles.tankVisualizationContainer}>
          <View style={styles.tankImageWrapper}>
            <Image source={require('@/assets/images/flocmanual.png')} style={styles.tankImage} resizeMode="contain" />
          </View>

          <View style={styles.tankRightPanel}>
            <View style={styles.tankInfoCard}>
              <View>
                <Text style={styles.tankInfoLabel}>Tank Level</Text>
                <Text style={styles.tankInfoValueBlue}>62 %</Text>
              </View>
              <MaterialCommunityIcons name="waves" size={24} color="#3B82F6" />
            </View>
            <View style={styles.tankInfoCard}>
              <View>
                <Text style={styles.tankInfoLabel}>Temp.</Text>
                <Text style={styles.tankInfoValueBlue}>33.5 °C</Text>
              </View>
              <MaterialCommunityIcons name="thermometer" size={24} color="#3B82F6" />
            </View>
          </View>
        </View>

        {/* ASSETS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitleUppercase}>ASSETS</Text>
        </View>
        <View style={styles.listContainer}>
          {renderManualAssetRow('Geyser Heater', 'Heater', 'water-boiler', '#EF4444', '#FEE2E2', false)}
          {renderManualAssetRow('Stepper Motor 1', 'Mixer 1', 'engine-outline', '#1E3A8A', '#EFF6FF', true)}
          {renderManualAssetRow('Stepper Motor 2', 'Mixer 2', 'engine-outline', '#1E3A8A', '#EFF6FF', true)}
          {renderManualAssetRow('Stepper Motor 3', 'Mixer 3', 'engine-outline', '#1E3A8A', '#EFF6FF', true)}
          {renderManualAssetRow('Pump 1', 'To Mixing Tank', 'water-pump', '#10B981', '#D1FAE5', false)}
        </View>

        {/* SCHEDULE & TIMING */}
        <View style={[styles.sectionHeader, { marginTop: 20 }]}>
          <Text style={styles.sectionTitleUppercase}>SCHEDULE & TIMING</Text>
          <TouchableOpacity style={styles.editButton}>
            <MaterialCommunityIcons name="pencil" size={14} color="#3B82F6" />
            <Text style={styles.editButtonText}>Edit All Timing</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          {renderScheduleTimingRow('Geyser Heater', 'water-boiler', '#EF4444', '08:00 AM', '08:30 AM', '30 min')}
          {renderScheduleTimingRow('Stepper Motor 1', 'engine-outline', '#1E3A8A', '08:00 AM', '08:35 AM', '30 min')}
          {renderScheduleTimingRow('Stepper Motor 2', 'engine-outline', '#1E3A8A', '08:00 AM', '08:35 AM', '30 min')}
          {renderScheduleTimingRow('Stepper Motor 3', 'engine-outline', '#1E3A8A', '08:00 AM', '08:35 AM', '30 min')}
          {renderScheduleTimingRow('Pump 1', 'water-pump', '#10B981', '08:40 AM', '08:50 AM', '10 min')}
        </View>

        {/* Manual Mode Info */}
        <Text style={[styles.sectionTitleUppercase, { marginTop: 20, marginBottom: 10 }]}>MANUAL MODE INFO</Text>
        <View style={styles.manualModeInfoBox}>
          <MaterialCommunityIcons name="information-outline" size={20} color="#3B82F6" />
          <Text style={styles.manualModeInfoText}>
            In Manual Mode, you can start or stop each asset manually. Timings can be edited and last run duration is recorded.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconActiveContainer}>
            <MaterialCommunityIcons name="view-grid" size={24} color="#3B82F6" />
          </View>
          <Text style={styles.navTextActive}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="history" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="chart-line" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Trends</Text>
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
  modePillManual: { marginTop: 4, paddingHorizontal: 12, paddingVertical: 4 },
  modeTextManual: { color: '#3B82F6', fontSize: 14, fontWeight: '600' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  tankVisualizationContainer: { flexDirection: 'row', marginBottom: 20, height: 180, alignItems: 'center' },
  tankImageWrapper: {
    flex: 2, justifyContent: 'center', alignItems: 'center', height: '100%', overflow: 'hidden'
  },
  tankImage: { width: '100%', height: '100%' },
  tankRightPanel: { flex: 1.2, marginLeft: 15, justifyContent: 'flex-start', height: '100%' },
  tankInfoCard: {
    backgroundColor: '#FFFFFF', borderRadius: 8, padding: 12, flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between', 
    borderWidth: 1, borderColor: '#E5E7EB', marginBottom: 10,
  },
  tankInfoLabel: { fontSize: 11, color: '#6B7280' },
  tankInfoValueBlue: { fontSize: 16, fontWeight: '700', color: '#3B82F6', marginTop: 2 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitleUppercase: { fontSize: 13, fontWeight: '700', color: '#1E3A8A', letterSpacing: 0.5 },
  editButton: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', paddingHorizontal: 12,
    paddingVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: '#E5E7EB',
  },
  editButtonText: { color: '#3B82F6', fontSize: 13, fontWeight: '600', marginLeft: 4 },
  listContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  manualAssetRow: {
    flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', padding: 16,
    borderBottomWidth: 1, borderBottomColor: '#F3F4F6', gap: 10,
  },
  manualAssetIconContainer: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: '#F8FAFC', justifyContent: 'center',
    alignItems: 'center', borderWidth: 1, borderColor: '#E2E8F0',
  },
  manualAssetTitleContainer: { flex: 1, minWidth: 100 },
  assetTitle: { fontSize: 14, fontWeight: '600', color: '#111827' },
  assetSubtitle: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  manualStatusContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', minWidth: 50 },
  statusDotGreen: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#10B981', marginRight: 4 },
  statusDotRed: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#EF4444', marginRight: 4 },
  statusTextGreen: { fontSize: 12, color: '#10B981', fontWeight: '600' },
  statusTextRed: { fontSize: 12, color: '#EF4444', fontWeight: '600' },
  manualActionsContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1.5, minWidth: 120 },
  actionButtonOutlineBlue: { borderWidth: 1, borderColor: '#3B82F6', borderRadius: 4, paddingHorizontal: 10, paddingVertical: 6, marginRight: 8, backgroundColor: '#FFFFFF' },
  actionButtonOutlineTextBlue: { color: '#3B82F6', fontSize: 11, fontWeight: '600' },
  actionButtonOutlineInactive: { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 4, paddingHorizontal: 10, paddingVertical: 6, marginRight: 8, backgroundColor: '#F9FAFB' },
  actionButtonOutlineTextInactive: { color: '#9CA3AF', fontSize: 11, fontWeight: '600' },
  actionButtonOutlineRed: { borderWidth: 1, borderColor: '#EF4444', borderRadius: 4, paddingHorizontal: 10, paddingVertical: 6, marginRight: 8, backgroundColor: '#FFFFFF' },
  actionButtonOutlineTextRed: { color: '#EF4444', fontSize: 11, fontWeight: '600' },
  actionButtonOutlineRedInactive: { borderWidth: 1, borderColor: '#FECACA', borderRadius: 4, paddingHorizontal: 10, paddingVertical: 6, marginRight: 8, backgroundColor: '#FEF2F2' },
  actionButtonOutlineTextRedInactive: { color: '#FCA5A5', fontSize: 11, fontWeight: '600' },
  scheduleTimingRow: {
    flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', padding: 16,
    borderBottomWidth: 1, borderBottomColor: '#F3F4F6', gap: 8,
  },
  scheduleTitleContainer: { flex: 1.5, minWidth: 100 },
  timingColumn: { flex: 1, minWidth: 70 },
  timingColumnRight: { flex: 1.2, minWidth: 110 },
  timingLabel: { fontSize: 11, color: '#6B7280', marginBottom: 4 },
  timingInputBox: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1,
    borderColor: '#E5E7EB', borderRadius: 6, paddingHorizontal: 6, paddingVertical: 6, marginTop: 4,
  },
  timingInputValue: { fontSize: 11, color: '#374151' },
  durationBox: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1,
    borderColor: '#D1FAE5', backgroundColor: '#F0FDF4', borderRadius: 6, paddingHorizontal: 6,
    paddingVertical: 6, marginTop: 4,
  },
  durationValue: { fontSize: 11, color: '#10B981', fontWeight: '500' },
  manualModeInfoBox: {
    flexDirection: 'row', backgroundColor: '#EFF6FF', padding: 12, borderRadius: 8,
    alignItems: 'flex-start', borderWidth: 1, borderColor: '#BFDBFE',
  },
  manualModeInfoText: { flex: 1, marginLeft: 10, fontSize: 12, color: '#1E3A8A', lineHeight: 18 },
  bottomNav: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#FFFFFF',
    paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#E5E7EB',
  },
  navItem: { alignItems: 'center', justifyContent: 'center' },
  navIconActiveContainer: { backgroundColor: '#EFF6FF', padding: 4, borderRadius: 8 },
  navText: { fontSize: 10, color: '#9CA3AF', marginTop: 4, fontWeight: '500' },
  navTextActive: { fontSize: 10, color: '#3B82F6', marginTop: 4, fontWeight: '600' },
});
