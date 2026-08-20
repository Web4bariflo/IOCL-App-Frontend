import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AutomaticModeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push({ pathname: '/dashboard', params: { menu: 'open' } })} style={styles.backButton}>
          <MaterialCommunityIcons name="chevron-left" size={28} color="#000" />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Desludging / Flotation</Text>
          <TouchableOpacity onPress={() => router.push('/desludging/manual')} style={styles.modePill}>
            <MaterialCommunityIcons name="hand-back-right" size={12} color="#3B82F6" style={{ marginRight: 6 }} />
            <Text style={styles.modeText}>Automatic Mode</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.settingsButton}>
          <MaterialCommunityIcons name="cog-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Status Cards (Horizontal Scroll) */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.statusCardsScroll}>
          <View style={styles.statusCard}>
            <Text style={styles.statusCardTitle}>Water Level{'\n'}Sensor</Text>
            <View style={styles.iconWrapperNeutral}>
              <Image source={require('@/assets/images/auto1.png')} style={{ width: 45, height: 45 }} resizeMode="contain" />
            </View>
            <Text style={styles.statusCardValueBlue}>72 %</Text>
            <View style={styles.statusLabelRow}>
              <MaterialCommunityIcons name="check-circle" size={12} color="#10B981" />
              <Text style={styles.statusLabelTextGreen}>OK</Text>
            </View>
          </View>

          <View style={styles.statusCard}>
            <Text style={styles.statusCardTitle}>Pump 2</Text>
            <View style={styles.iconWrapperNeutral}>
              <Image source={require('@/assets/images/auto2.png')} style={{ width: 45, height: 45 }} resizeMode="contain" />
            </View>
            <Text style={styles.statusCardValueGreen}>ON</Text>
            <View style={styles.statusLabelRow}>
              <View style={styles.statusDotGreen} />
              <Text style={styles.statusLabelTextGreen}>Running</Text>
            </View>
          </View>

          <View style={styles.statusCard}>
            <Text style={styles.statusCardTitle}>Stepper Motor</Text>
            <View style={styles.iconWrapperNeutral}>
              <Image source={require('@/assets/images/auto3.png')} style={{ width: 45, height: 45 }} resizeMode="contain" />
            </View>
            <Text style={styles.statusCardValueGreen}>ON</Text>
            <View style={styles.statusLabelRow}>
              <View style={styles.statusDotGreen} />
              <Text style={styles.statusLabelTextGreen}>Running</Text>
            </View>
          </View>

          <View style={styles.statusCard}>
            <Text style={styles.statusCardTitle}>Air Compressor /{'\n'}Blower</Text>
            <View style={styles.iconWrapperNeutral}>
              <Image source={require('@/assets/images/auto4.png')} style={{ width: 45, height: 45 }} resizeMode="contain" />
            </View>
            <Text style={styles.statusCardValueGreen}>ON</Text>
            <View style={styles.statusLabelRow}>
              <View style={styles.statusDotGreen} />
              <Text style={styles.statusLabelTextGreen}>Running</Text>
            </View>
          </View>
        </ScrollView>

        {/* Manual Controls */}
        <Text style={styles.sectionHeading}>Manual Controls</Text>
        <View style={styles.cardContainer}>
          <View style={styles.controlRow}>
            <View style={styles.controlInfo}>
              <MaterialCommunityIcons name="waves" size={24} color="#3B82F6" style={styles.controlIcon} />
              <View>
                <Text style={styles.controlTitle}>Water Level Sensor</Text>
                <Text style={styles.controlSub}>Level Monitoring</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.viewDetailsBtn}>
              <Text style={styles.viewDetailsText}>View Details</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.controlRow}>
            <View style={styles.controlInfo}>
              <MaterialCommunityIcons name="water-pump" size={24} color="#3B82F6" style={styles.controlIcon} />
              <View>
                <Text style={styles.controlTitle}>Pump 2</Text>
                <Text style={styles.controlSub}>Outlet Pump</Text>
              </View>
            </View>
            <View style={styles.onOffContainer}>
              <TouchableOpacity style={[styles.onOffBtn, styles.onBtnActive]}>
                <Text style={styles.onTextActive}>ON</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.onOffBtn, styles.offBtnInactive]}>
                <Text style={styles.offTextInactive}>OFF</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.controlRow}>
            <View style={styles.controlInfo}>
              <MaterialCommunityIcons name="engine-outline" size={24} color="#6B7280" style={styles.controlIcon} />
              <View>
                <Text style={styles.controlTitle}>Stepper Motor</Text>
                <Text style={styles.controlSub}>Mechanism</Text>
              </View>
            </View>
            <View style={styles.onOffContainer}>
              <TouchableOpacity style={[styles.onOffBtn, styles.onBtnActive]}>
                <Text style={styles.onTextActive}>ON</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.onOffBtn, styles.offBtnInactive]}>
                <Text style={styles.offTextInactive}>OFF</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.controlRowNoBorder}>
            <View style={styles.controlInfo}>
              <MaterialCommunityIcons name="fan" size={24} color="#3B82F6" style={styles.controlIcon} />
              <View>
                <Text style={styles.controlTitle}>Air Compressor / Blower</Text>
                <Text style={styles.controlSub}>Aeration</Text>
              </View>
            </View>
            <View style={styles.onOffContainer}>
              <TouchableOpacity style={[styles.onOffBtn, styles.onBtnActive]}>
                <Text style={styles.onTextActive}>ON</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.onOffBtn, styles.offBtnInactive]}>
                <Text style={styles.offTextInactive}>OFF</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Timing Settings */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionHeadingMargin}>Timing Settings</Text>
          <View style={styles.timingHeaders}>
            <Text style={styles.timingHeaderLabel}>Start After (Delay)</Text>
            <Text style={styles.timingHeaderLabel}>Run Duration</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.timingRow}>
            <View style={styles.timingInfo}>
              <MaterialCommunityIcons name="water-pump" size={24} color="#3B82F6" style={styles.controlIcon} />
              <View>
                <Text style={styles.controlTitle}>Pump 2</Text>
                <Text style={styles.controlSub}>Outlet Pump</Text>
              </View>
            </View>
            <View style={styles.timingInputs}>
              <View style={styles.timingInputBox}>
                <MaterialCommunityIcons name="clock-outline" size={14} color="#6B7280" />
                <Text style={styles.timingInputText}>00:00</Text>
              </View>
              <View style={styles.timingInputBox}>
                <MaterialCommunityIcons name="clock-outline" size={14} color="#6B7280" />
                <Text style={styles.timingInputText}>00:15</Text>
              </View>
              <MaterialCommunityIcons name="pencil" size={18} color="#3B82F6" />
            </View>
          </View>

          <View style={styles.timingRow}>
            <View style={styles.timingInfo}>
              <MaterialCommunityIcons name="engine-outline" size={24} color="#6B7280" style={styles.controlIcon} />
              <View>
                <Text style={styles.controlTitle}>Stepper Motor</Text>
                <Text style={styles.controlSub}>Mechanism</Text>
              </View>
            </View>
            <View style={styles.timingInputs}>
              <View style={styles.timingInputBox}>
                <MaterialCommunityIcons name="clock-outline" size={14} color="#6B7280" />
                <Text style={styles.timingInputText}>02:00</Text>
              </View>
              <View style={styles.timingInputBox}>
                <MaterialCommunityIcons name="clock-outline" size={14} color="#6B7280" />
                <Text style={styles.timingInputText}>00:20</Text>
              </View>
              <MaterialCommunityIcons name="pencil" size={18} color="#3B82F6" />
            </View>
          </View>

          <View style={styles.timingRowNoBorder}>
            <View style={styles.timingInfo}>
              <MaterialCommunityIcons name="fan" size={24} color="#3B82F6" style={styles.controlIcon} />
              <View>
                <Text style={styles.controlTitle}>Air Compressor /{'\n'}Blower</Text>
                <Text style={styles.controlSub}>Aeration</Text>
              </View>
            </View>
            <View style={styles.timingInputs}>
              <View style={styles.timingInputBox}>
                <MaterialCommunityIcons name="clock-outline" size={14} color="#6B7280" />
                <Text style={styles.timingInputText}>02:00</Text>
              </View>
              <View style={styles.timingInputBox}>
                <MaterialCommunityIcons name="clock-outline" size={14} color="#6B7280" />
                <Text style={styles.timingInputText}>02:30</Text>
              </View>
              <MaterialCommunityIcons name="pencil" size={18} color="#3B82F6" />
            </View>
          </View>
        </View>

        {/* Operation Log */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionHeadingMargin}>Operation Log</Text>
          <TouchableOpacity style={styles.dropdownBtn}>
            <MaterialCommunityIcons name="calendar-blank-outline" size={14} color="#3B82F6" />
            <Text style={styles.dropdownBtnText}>Today</Text>
            <MaterialCommunityIcons name="chevron-down" size={14} color="#6B7280" />
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.tableHeader, { flex: 1.5 }]}>Asset</Text>
            <Text style={[styles.tableHeader, { flex: 0.8 }]}>Status</Text>
            <Text style={[styles.tableHeader, { flex: 1 }]}>ON Time</Text>
            <Text style={[styles.tableHeader, { flex: 1 }]}>OFF Time</Text>
            <Text style={[styles.tableHeader, { flex: 1.2 }]}>Run Time</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 1.5 }]}>Pump 2</Text>
            <View style={styles.statusBoxGreen}>
              <Text style={styles.statusBoxTextGreen}>ON</Text>
            </View>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'center' }]}>10:00 AM</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'center' }]}>10:15 AM</Text>
            <View style={styles.runTimeCell}>
              <Text style={styles.runTimeText}>00:15:00</Text>
              <MaterialCommunityIcons name="chevron-right" size={16} color="#9CA3AF" />
            </View>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 1.5 }]}>Stepper Motor</Text>
            <View style={styles.statusBoxGreen}>
              <Text style={styles.statusBoxTextGreen}>ON</Text>
            </View>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'center' }]}>08:00 AM</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'center' }]}>08:20 AM</Text>
            <View style={styles.runTimeCell}>
              <Text style={styles.runTimeText}>00:20:00</Text>
              <MaterialCommunityIcons name="chevron-right" size={16} color="#9CA3AF" />
            </View>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 1.5 }]}>Air Compressor /{'\n'}Blower</Text>
            <View style={styles.statusBoxGreen}>
              <Text style={styles.statusBoxTextGreen}>ON</Text>
            </View>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'center' }]}>08:00 AM</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'center' }]}>08:30 AM</Text>
            <View style={styles.runTimeCell}>
              <Text style={styles.runTimeText}>00:30:00</Text>
              <MaterialCommunityIcons name="chevron-right" size={16} color="#9CA3AF" />
            </View>
          </View>

          <TouchableOpacity style={styles.recordLogBtn}>
            <MaterialCommunityIcons name="clock-outline" size={16} color="#3B82F6" />
            <Text style={styles.recordLogText}>Record New Log Manually</Text>
          </TouchableOpacity>
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
          <MaterialCommunityIcons name="format-list-bulleted" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Logs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="chart-line" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Trends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View>
            <MaterialCommunityIcons name="bell-outline" size={24} color="#9CA3AF" />
            <View style={styles.navBadge}><Text style={styles.navBadgeText}>2</Text></View>
          </View>
          <Text style={styles.navText}>Alarms</Text>
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
  modePill: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#EFF6FF',
    paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginTop: 4,
  },
  modeText: { color: '#3B82F6', fontSize: 12, fontWeight: '600' },
  settingsButton: { padding: 5, marginRight: -5 },
  scrollContent: { padding: 16, paddingBottom: 40 },

  statusCardsScroll: { paddingBottom: 20, paddingRight: 16 },
  statusCard: {
    backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, width: 130, marginRight: 12,
    borderWidth: 1, borderColor: '#F3F4F6', alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  statusCardTitle: { fontSize: 11, fontWeight: '600', color: '#111827', textAlign: 'center', minHeight: 30, marginBottom: 10 },
  iconWrapperNeutral: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  statusCardValueBlue: { fontSize: 18, fontWeight: '700', color: '#3B82F6', marginBottom: 4 },
  statusCardValueGreen: { fontSize: 16, fontWeight: '700', color: '#10B981', marginBottom: 4 },
  statusLabelRow: { flexDirection: 'row', alignItems: 'center' },
  statusDotGreen: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#10B981', marginRight: 4 },
  statusLabelTextGreen: { fontSize: 11, color: '#10B981', fontWeight: '500', marginLeft: 2 },

  sectionHeading: { fontSize: 15, fontWeight: '700', color: '#111827', marginBottom: 12 },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, marginTop: 10 },
  sectionHeadingMargin: { fontSize: 15, fontWeight: '700', color: '#111827' },

  cardContainer: {
    backgroundColor: '#FFFFFF', borderRadius: 12, borderWidth: 1, borderColor: '#F3F4F6',
    marginBottom: 20, paddingHorizontal: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  controlRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  controlRowNoBorder: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16 },
  controlInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  controlIcon: { marginRight: 12 },
  controlTitle: { fontSize: 13, fontWeight: '600', color: '#111827' },
  controlSub: { fontSize: 11, color: '#6B7280', marginTop: 2 },

  viewDetailsBtn: { borderWidth: 1, borderColor: '#3B82F6', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 6 },
  viewDetailsText: { color: '#3B82F6', fontSize: 11, fontWeight: '600' },

  onOffContainer: { flexDirection: 'row', alignItems: 'center' },
  onOffBtn: { borderWidth: 1, borderRadius: 4, paddingHorizontal: 14, paddingVertical: 6, marginLeft: 8 },
  onBtnActive: { borderColor: '#10B981', backgroundColor: '#FFFFFF' },
  onTextActive: { color: '#10B981', fontSize: 11, fontWeight: '600' },
  offBtnInactive: { borderColor: '#FECACA', backgroundColor: '#FFFFFF' },
  offTextInactive: { color: '#EF4444', fontSize: 11, fontWeight: '600' },

  timingHeaders: { flexDirection: 'row', justifyContent: 'flex-end', width: '55%' },
  timingHeaderLabel: { fontSize: 10, color: '#6B7280', flex: 1, textAlign: 'center' },
  timingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  timingRowNoBorder: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16 },
  timingInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  timingInputs: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1.2 },
  timingInputBox: {
    flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB',
    borderRadius: 6, paddingHorizontal: 8, paddingVertical: 6, marginRight: 8, minWidth: 70, justifyContent: 'space-between'
  },
  timingInputText: { fontSize: 11, color: '#111827', marginLeft: 6 },

  dropdownBtn: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: '#FFFFFF' },
  dropdownBtnText: { fontSize: 11, color: '#374151', marginHorizontal: 6 },

  tableHeaderRow: { flexDirection: 'row', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F3F4F6', backgroundColor: '#FAFAFA', marginHorizontal: -16, paddingHorizontal: 16 },
  tableHeader: { fontSize: 10, color: '#6B7280', fontWeight: '500' },
  tableRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  tableCell: { fontSize: 11, color: '#111827', fontWeight: '500' },
  statusBoxGreen: { borderWidth: 1, borderColor: '#10B981', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, flex: 0.8, alignItems: 'center', maxWidth: 40 },
  statusBoxTextGreen: { color: '#10B981', fontSize: 10, fontWeight: '600' },
  runTimeCell: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1.2 },
  runTimeText: { color: '#3B82F6', fontSize: 11, fontWeight: '600', marginRight: 4 },

  recordLogBtn: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 14, marginTop: 4 },
  recordLogText: { color: '#3B82F6', fontSize: 13, fontWeight: '600', marginLeft: 6 },

  bottomNav: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#FFFFFF',
    paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#E5E7EB',
  },
  navItem: { alignItems: 'center', justifyContent: 'center', position: 'relative' },
  navIconActiveContainer: { backgroundColor: '#EFF6FF', padding: 4, borderRadius: 8 },
  navText: { fontSize: 10, color: '#9CA3AF', marginTop: 4, fontWeight: '500' },
  navTextActive: { fontSize: 10, color: '#3B82F6', marginTop: 4, fontWeight: '600' },
  navBadge: { position: 'absolute', top: -4, right: -4, backgroundColor: '#EF4444', borderRadius: 8, minWidth: 16, height: 16, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#FFF' },
  navBadgeText: { color: '#FFF', fontSize: 9, fontWeight: '700' },
});
