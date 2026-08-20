import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ManualModeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push({ pathname: '/dashboard', params: { menu: 'open' } })} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Desludging / Flotation</Text>
          <Text style={styles.modeText}>Manual Mode</Text>
        </View>

        <TouchableOpacity style={styles.settingsButton}>
          <MaterialCommunityIcons name="cog-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Status Cards (Horizontal Scroll) */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.statusCardsScroll}>
          <View style={styles.statusCard}>
            <Text style={styles.statusCardTitle}>Water-level{'\n'}Sensor</Text>
            <View style={styles.iconWrapperNeutral}>
              <Image source={require('@/assets/images/auto1.png')} style={{ width: 45, height: 45 }} resizeMode="contain" />
            </View>
            <View style={styles.badgeActive}>
              <Text style={styles.badgeActiveText}>ACTIVE</Text>
            </View>
            <Text style={styles.statusBottomTextBlue}>Level: <Text style={{fontWeight: '700'}}>68%</Text></Text>
          </View>

          <View style={styles.statusCard}>
            <Text style={styles.statusCardTitle}>Pump 2</Text>
            <View style={styles.iconWrapperNeutral}>
              <Image source={require('@/assets/images/auto2.png')} style={{ width: 45, height: 45 }} resizeMode="contain" />
            </View>
            <View style={styles.badgeStopped}>
              <Text style={styles.badgeStoppedText}>STOPPED</Text>
            </View>
            <Text style={styles.statusBottomText}>Last Run: 00:00</Text>
          </View>

          <View style={styles.statusCard}>
            <Text style={styles.statusCardTitle}>Stepper Motor{'\n'}(Delay System)</Text>
            <View style={styles.iconWrapperNeutral}>
              <Image source={require('@/assets/images/auto3.png')} style={{ width: 45, height: 45 }} resizeMode="contain" />
            </View>
            <View style={styles.badgeStopped}>
              <Text style={styles.badgeStoppedText}>STOPPED</Text>
            </View>
            <Text style={styles.statusBottomText}>Next Start: --:--</Text>
          </View>

          <View style={styles.statusCard}>
            <Text style={styles.statusCardTitle}>Air Compressor /{'\n'}Blower</Text>
            <View style={styles.iconWrapperNeutral}>
              <Image source={require('@/assets/images/auto4.png')} style={{ width: 45, height: 45 }} resizeMode="contain" />
            </View>
            <View style={styles.badgeStopped}>
              <Text style={styles.badgeStoppedText}>STOPPED</Text>
            </View>
            <Text style={styles.statusBottomText}>Last Run: 00:00</Text>
          </View>
        </ScrollView>

        {/* Manual Controls */}
        <Text style={styles.sectionHeadingUppercase}>MANUAL CONTROLS</Text>
        <View style={styles.cardContainer}>
          <View style={styles.controlRow}>
            <View style={styles.controlInfo}>
              <MaterialCommunityIcons name="waves" size={24} color="#3B82F6" style={styles.controlIcon} />
              <View>
                <Text style={styles.controlTitle}>Water-level Sensor</Text>
                <Text style={styles.controlSub}>Level: <Text style={{fontWeight: '700', color: '#3B82F6'}}>68%</Text></Text>
              </View>
            </View>
            <View style={styles.rightActionRow}>
              <View style={[styles.badgeActive, { marginRight: 10, paddingHorizontal: 12 }]}>
                <Text style={styles.badgeActiveText}>ACTIVE</Text>
              </View>
              <MaterialCommunityIcons name="information-outline" size={20} color="#6B7280" />
            </View>
          </View>

          <View style={styles.controlRow}>
            <View style={styles.controlInfo}>
              <MaterialCommunityIcons name="water-pump" size={24} color="#1E3A8A" style={styles.controlIcon} />
              <View>
                <Text style={styles.controlTitle}>Pump 2</Text>
              </View>
            </View>
            <View style={styles.onOffContainer}>
              <TouchableOpacity style={styles.startBtn}>
                <Text style={styles.startText}>START</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stopBtn}>
                <Text style={styles.stopText}>STOP</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.controlRow}>
            <View style={styles.controlInfo}>
              <MaterialCommunityIcons name="engine-outline" size={24} color="#111827" style={styles.controlIcon} />
              <View>
                <Text style={styles.controlTitle}>Stepper Motor</Text>
                <Text style={styles.controlSub}>(2-hour Delay)</Text>
              </View>
            </View>
            <View style={styles.onOffContainer}>
              <TouchableOpacity style={styles.startBtn}>
                <Text style={styles.startText}>START</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stopBtn}>
                <Text style={styles.stopText}>STOP</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.controlRowNoBorder}>
            <View style={styles.controlInfo}>
              <MaterialCommunityIcons name="fan" size={24} color="#1E3A8A" style={styles.controlIcon} />
              <View>
                <Text style={styles.controlTitle}>Air Compressor / Blower</Text>
              </View>
            </View>
            <View style={styles.onOffContainer}>
              <TouchableOpacity style={styles.startBtn}>
                <Text style={styles.startText}>START</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stopBtn}>
                <Text style={styles.stopText}>STOP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Timing Settings */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionHeadingUppercase}>TIMING SETTINGS</Text>
          <TouchableOpacity style={styles.editTimingBtn}>
            <MaterialCommunityIcons name="pencil" size={14} color="#3B82F6" />
            <Text style={styles.editTimingText}>Edit Timing</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.tableHeader, { flex: 1.5 }]}>Asset</Text>
            <Text style={[styles.tableHeader, { flex: 1, textAlign: 'center' }]}>Start (Delay)</Text>
            <Text style={[styles.tableHeader, { flex: 1, textAlign: 'center' }]}>Run Duration</Text>
            <Text style={[styles.tableHeader, { flex: 1, textAlign: 'center' }]}>Stop (Auto)</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCellTitle, { flex: 1.5 }]}>Pump 2</Text>
            <View style={[styles.timingOutlineBox, { flex: 1 }]}>
              <Text style={styles.timingOutlineText}>00:00</Text>
            </View>
            <View style={[styles.timingOutlineBox, { flex: 1 }]}>
              <Text style={styles.timingOutlineText}>00:10</Text>
            </View>
            <View style={[styles.timingOutlineBox, { flex: 1 }]}>
              <Text style={styles.timingOutlineText}>00:10</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={{ flex: 1.5 }}>
              <Text style={styles.tableCellTitle}>Stepper Motor</Text>
              <Text style={styles.tableCellSub}>(2-hour Delay)</Text>
            </View>
            <View style={[styles.timingOutlineBox, { flex: 1 }]}>
              <Text style={styles.timingOutlineText}>02:00</Text>
            </View>
            <View style={[styles.timingOutlineBox, { flex: 1 }]}>
              <Text style={styles.timingOutlineText}>00:20</Text>
            </View>
            <View style={[styles.timingOutlineBox, { flex: 1 }]}>
              <Text style={styles.timingOutlineText}>02:20</Text>
            </View>
          </View>

          <View style={styles.tableRowNoBorder}>
            <View style={{ flex: 1.5 }}>
              <Text style={styles.tableCellTitle}>Air Compressor /{'\n'}Blower</Text>
            </View>
            <View style={[styles.timingOutlineBox, { flex: 1 }]}>
              <Text style={styles.timingOutlineText}>00:00</Text>
            </View>
            <View style={[styles.timingOutlineBox, { flex: 1 }]}>
              <Text style={styles.timingOutlineText}>00:15</Text>
            </View>
            <View style={[styles.timingOutlineBox, { flex: 1 }]}>
              <Text style={styles.timingOutlineText}>00:15</Text>
            </View>
          </View>
        </View>
        <Text style={styles.footerNoteText}>* Timing is in HH:MM format</Text>

        {/* Run Time Records */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionHeadingUppercase}>RUN TIME RECORDS</Text>
          <TouchableOpacity style={styles.dropdownBtn}>
            <MaterialCommunityIcons name="calendar-blank-outline" size={14} color="#3B82F6" />
            <Text style={styles.dropdownBtnText}>Today</Text>
            <MaterialCommunityIcons name="chevron-down" size={14} color="#6B7280" />
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.tableHeader, { flex: 1.5 }]}>Asset</Text>
            <Text style={[styles.tableHeader, { flex: 1, textAlign: 'center' }]}>Last ON</Text>
            <Text style={[styles.tableHeader, { flex: 1, textAlign: 'center' }]}>Last OFF</Text>
            <Text style={[styles.tableHeader, { flex: 1, textAlign: 'center' }]}>Run Duration</Text>
          </View>

          <View style={styles.tableRowSimple}>
            <Text style={[styles.tableCellTitle, { flex: 1.5 }]}>Pump 2</Text>
            <Text style={[styles.tableCellValue, { flex: 1, textAlign: 'center' }]}>09:05 AM</Text>
            <Text style={[styles.tableCellValue, { flex: 1, textAlign: 'center' }]}>09:15 AM</Text>
            <Text style={[styles.tableCellValue, { flex: 1, textAlign: 'center' }]}>00:10</Text>
          </View>

          <View style={styles.tableRowSimple}>
            <Text style={[styles.tableCellTitle, { flex: 1.5 }]}>Stepper Motor</Text>
            <Text style={[styles.tableCellValue, { flex: 1, textAlign: 'center' }]}>07:00 AM</Text>
            <Text style={[styles.tableCellValue, { flex: 1, textAlign: 'center' }]}>07:20 AM</Text>
            <Text style={[styles.tableCellValue, { flex: 1, textAlign: 'center' }]}>00:20</Text>
          </View>

          <View style={styles.tableRowSimpleNoBorder}>
            <Text style={[styles.tableCellTitle, { flex: 1.5 }]}>Air Compressor / Blower</Text>
            <Text style={[styles.tableCellValue, { flex: 1, textAlign: 'center' }]}>08:30 AM</Text>
            <Text style={[styles.tableCellValue, { flex: 1, textAlign: 'center' }]}>08:45 AM</Text>
            <Text style={[styles.tableCellValue, { flex: 1, textAlign: 'center' }]}>00:15</Text>
          </View>
        </View>

        {/* Manual Mode Toggle Info */}
        <Text style={[styles.sectionHeadingUppercase, { marginTop: 10 }]}>MANUAL MODE</Text>
        <View style={styles.manualModeBox}>
          <View style={styles.manualModeIconWrapper}>
            <MaterialCommunityIcons name="hand-back-right" size={20} color="#3B82F6" />
          </View>
          <View style={styles.manualModeTextWrapper}>
            <Text style={styles.manualModeTitle}>You are in <Text style={{color: '#3B82F6', fontWeight: '600'}}>Manual Mode</Text></Text>
            <Text style={styles.manualModeDesc}>All assets can be started or stopped manually.</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/desludging/automatic')} style={styles.switchModeBtn}>
            <Text style={styles.switchModeText}>Switch to Auto Mode</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="home-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navTextActiveIndicator}>Manual</Text>
          <MaterialCommunityIcons name="hand-back-right" size={24} color="#3B82F6" />
          <Text style={styles.navTextActive}>Manual</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="clock-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="bell-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Alarms</Text>
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
  backButton: { padding: 5, marginLeft: -5 },
  headerTitleContainer: { alignItems: 'center', flex: 1 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },
  modeText: { color: '#3B82F6', fontSize: 13, fontWeight: '600', marginTop: 2 },
  settingsButton: { padding: 5, marginRight: -5 },
  scrollContent: { padding: 16, paddingBottom: 40 },
  
  statusCardsScroll: { paddingBottom: 20, paddingRight: 16 },
  statusCard: {
    backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, width: 130, marginRight: 12,
    borderWidth: 1, borderColor: '#E5E7EB', alignItems: 'center',
  },
  statusCardTitle: { fontSize: 11, fontWeight: '600', color: '#111827', textAlign: 'center', minHeight: 30, marginBottom: 10 },
  iconWrapperNeutral: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  badgeActive: { backgroundColor: '#F0FDF4', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4, borderWidth: 1, borderColor: '#D1FAE5', marginBottom: 6 },
  badgeActiveText: { color: '#10B981', fontSize: 10, fontWeight: '700' },
  badgeStopped: { backgroundColor: '#F3F4F6', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4, borderWidth: 1, borderColor: '#E5E7EB', marginBottom: 6 },
  badgeStoppedText: { color: '#6B7280', fontSize: 10, fontWeight: '700' },
  statusBottomText: { fontSize: 10, color: '#6B7280', marginTop: 2 },
  statusBottomTextBlue: { fontSize: 10, color: '#3B82F6', marginTop: 2 },
  
  sectionHeadingUppercase: { fontSize: 12, fontWeight: '700', color: '#1E3A8A', marginBottom: 12, letterSpacing: 0.5 },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, marginTop: 15 },
  
  cardContainer: {
    backgroundColor: '#FFFFFF', borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB',
    marginBottom: 10, paddingHorizontal: 16,
  },
  controlRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  controlRowNoBorder: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16 },
  controlInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  controlIcon: { marginRight: 12 },
  controlTitle: { fontSize: 13, fontWeight: '600', color: '#111827' },
  controlSub: { fontSize: 11, color: '#6B7280', marginTop: 2 },
  rightActionRow: { flexDirection: 'row', alignItems: 'center' },
  
  onOffContainer: { flexDirection: 'row', alignItems: 'center' },
  startBtn: { borderWidth: 1, borderColor: '#10B981', borderRadius: 4, paddingHorizontal: 14, paddingVertical: 6, marginLeft: 8 },
  startText: { color: '#10B981', fontSize: 11, fontWeight: '600' },
  stopBtn: { borderWidth: 1, borderColor: '#EF4444', borderRadius: 4, paddingHorizontal: 14, paddingVertical: 6, marginLeft: 8 },
  stopText: { color: '#EF4444', fontSize: 11, fontWeight: '600' },
  
  editTimingBtn: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#BFDBFE', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: '#FFFFFF' },
  editTimingText: { color: '#3B82F6', fontSize: 11, fontWeight: '600', marginLeft: 4 },
  
  tableHeaderRow: { flexDirection: 'row', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  tableHeader: { fontSize: 10, color: '#6B7280', fontWeight: '500' },
  tableRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  tableRowNoBorder: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14 },
  tableCellTitle: { fontSize: 11, color: '#111827', fontWeight: '600' },
  tableCellSub: { fontSize: 10, color: '#6B7280', marginTop: 2 },
  timingOutlineBox: { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 6, paddingVertical: 6, alignItems: 'center', marginHorizontal: 4 },
  timingOutlineText: { fontSize: 11, color: '#374151' },
  footerNoteText: { fontSize: 10, color: '#9CA3AF', marginBottom: 20, fontStyle: 'italic', marginLeft: 4 },
  
  dropdownBtn: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: '#FFFFFF' },
  dropdownBtnText: { fontSize: 11, color: '#374151', marginHorizontal: 6 },
  
  tableRowSimple: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  tableRowSimpleNoBorder: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14 },
  tableCellValue: { fontSize: 11, color: '#374151' },
  
  manualModeBox: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#F9FAFB', borderRadius: 12,
    borderWidth: 1, borderColor: '#E5E7EB', padding: 16, marginBottom: 20
  },
  manualModeIconWrapper: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#EFF6FF', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  manualModeTextWrapper: { flex: 1 },
  manualModeTitle: { fontSize: 13, color: '#111827', marginBottom: 2 },
  manualModeDesc: { fontSize: 10, color: '#6B7280' },
  switchModeBtn: { borderWidth: 1, borderColor: '#3B82F6', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#FFFFFF' },
  switchModeText: { color: '#3B82F6', fontSize: 11, fontWeight: '600' },

  bottomNav: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#FFFFFF',
    paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#E5E7EB',
  },
  navItem: { alignItems: 'center', justifyContent: 'center', position: 'relative' },
  navText: { fontSize: 10, color: '#9CA3AF', marginTop: 4, fontWeight: '500' },
  navTextActive: { fontSize: 10, color: '#3B82F6', marginTop: 4, fontWeight: '600' },
  navTextActiveIndicator: { display: 'none' },
});
