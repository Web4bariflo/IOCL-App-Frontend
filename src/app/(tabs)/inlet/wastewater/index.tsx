import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function WastewaterScreen() {
  // Toggle states
  const [solenoidActive, setSolenoidActive] = useState(false);
  const [inletPumpActive, setInletPumpActive] = useState(false);
  const [contactorActive, setContactorActive] = useState(false);

  const Toggle = ({
    active,
    onPress,
  }: {
    active: boolean;
    onPress: () => void;
  }) => (
    <TouchableOpacity
      style={[styles.toggleContainer, active ? styles.toggleActive : styles.toggleInactive]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.toggleSide, active && styles.toggleSideActive]}>
        <Text style={[styles.toggleText, active && styles.toggleTextActive]}>ACTIVE</Text>
      </View>
      <View style={[styles.toggleSide, !active && styles.toggleSideActive]}>
        <Text style={[styles.toggleText, !active && styles.toggleTextActive]}>DEACTIVE</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
     {/* Header */}
<View style={styles.header}>
  <TouchableOpacity
    style={styles.menuBtn}
    onPress={() => router.push('/(tabs)/dashboard')}   // ← goes back to dashboard
    activeOpacity={0.7}
  >
    <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
  </TouchableOpacity>

  <View style={styles.headerTitle}>
    <Text style={styles.title}>Inlet / Sensors</Text>
    <Text style={styles.subtitle}>Automatic Mode</Text>
  </View>

  <View style={styles.offlineBadge}>
    <Text style={styles.offlineText}>Offline</Text>
  </View>
</View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ========== SYSTEM OVERVIEW ========== */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>System Overview</Text>

          <TouchableOpacity style={styles.startBtn} activeOpacity={0.85}>
            <Ionicons name="power" size={20} color="#fff" />
            <Text style={styles.startBtnText}>START SYSTEM</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.stopBtn} activeOpacity={0.85}>
            <View style={styles.stopIcon} />
            <Text style={styles.stopBtnText}>STOP</Text>
          </TouchableOpacity>
        </View>

        {/* ========== SOLENOID VALVES ========== */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <MaterialCommunityIcons name="pipe-valve" size={26} color="#1e88e5" />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.sectionTitle}>Solenoid Valves</Text>
                <Text style={styles.sectionSub}>2 Valves</Text>
              </View>
            </View>
            <Toggle active={solenoidActive} onPress={() => setSolenoidActive(!solenoidActive)} />
          </View>

          <View style={styles.divider} />

          <View style={styles.itemRow}>
            <Text style={styles.itemLabel}>Valve 1</Text>
            <View style={styles.statusRight}>
              <Text style={styles.statusText}>Closed</Text>
              <View style={[styles.dot, { backgroundColor: '#9e9e9e' }]} />
            </View>
          </View>

          <View style={styles.itemRow}>
            <Text style={styles.itemLabel}>Valve 2</Text>
            <View style={styles.statusRight}>
              <Text style={styles.statusText}>Closed</Text>
              <View style={[styles.dot, { backgroundColor: '#9e9e9e' }]} />
            </View>
          </View>
        </View>

        {/* ========== INLET PUMP 1 ========== */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <MaterialCommunityIcons name="pump" size={26} color="#1e88e5" />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.sectionTitle}>Inlet Pump 1</Text>
                <Text style={styles.sectionSub}>Disabled</Text>
              </View>
            </View>
            <Toggle active={inletPumpActive} onPress={() => setInletPumpActive(!inletPumpActive)} />
          </View>

          <View style={styles.divider} />

          <View style={styles.itemRow}>
            <View>
              <Text style={styles.itemLabelSmall}>Status</Text>
              <Text style={styles.itemLabel}>Disabled</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.itemLabelSmall}>Since</Text>
              <Text style={styles.itemLabel}>08:15 AM</Text>
            </View>
          </View>
        </View>

        {/* ========== CONTACTOR SENSORS ========== */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <Ionicons name="swap-vertical" size={26} color="#1e88e5" />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.sectionTitle}>Contactor Sensors</Text>
                <Text style={styles.sectionSub}>2 Sensors</Text>
              </View>
            </View>
            <Toggle active={contactorActive} onPress={() => setContactorActive(!contactorActive)} />
          </View>

          <View style={styles.divider} />

          <View style={styles.itemRow}>
            <Text style={styles.itemLabel}>Contactor 1</Text>
            <View style={styles.statusRight}>
              <Text style={styles.statusText}>Inactive</Text>
              <View style={[styles.dot, { backgroundColor: '#9e9e9e' }]} />
            </View>
          </View>

          <View style={styles.itemRow}>
            <Text style={styles.itemLabel}>Contactor 2</Text>
            <View style={styles.statusRight}>
              <Text style={styles.statusText}>Inactive</Text>
              <View style={[styles.dot, { backgroundColor: '#9e9e9e' }]} />
            </View>
          </View>
        </View>

        {/* ========== AUTOMATIC PROCESS ========== */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Automatic Process</Text>

          {/* Step 01 */}
          <View style={styles.processRow}>
            <View style={[styles.stepCircle, styles.stepOn]}>
              <Text style={styles.stepNumber}>01</Text>
            </View>
            <MaterialCommunityIcons name="pipe-valve" size={20} color="#1e88e5" style={{ marginHorizontal: 10 }} />
            <Text style={styles.processLabel}>Solenoid Valve</Text>
            <View style={styles.processStatus}>
              <Text style={[styles.processStatusText, { color: '#2e7d32' }]}>ON</Text>
              <View style={[styles.dot, { backgroundColor: '#2e7d32' }]} />
            </View>
          </View>

          {/* Step 02 */}
          <View style={styles.processRow}>
            <View style={[styles.stepCircle, styles.stepOn]}>
              <Text style={styles.stepNumber}>02</Text>
            </View>
            <MaterialCommunityIcons name="pump" size={20} color="#1e88e5" style={{ marginHorizontal: 10 }} />
            <Text style={styles.processLabel}>Inlet Pump</Text>
            <View style={styles.processStatus}>
              <Text style={[styles.processStatusText, { color: '#2e7d32' }]}>ON</Text>
              <View style={[styles.dot, { backgroundColor: '#2e7d32' }]} />
            </View>
          </View>

          {/* Step 03 */}
          <View style={styles.processRow}>
            <View style={[styles.stepCircle, styles.stepOn]}>
              <Text style={styles.stepNumber}>03</Text>
            </View>
            <Ionicons name="wifi" size={20} color="#1e88e5" style={{ marginHorizontal: 10 }} />
            <Text style={styles.processLabel}>Control Sensor</Text>
            <View style={styles.processStatus}>
              <Text style={[styles.processStatusText, { color: '#2e7d32' }]}>Detection ON</Text>
              <View style={[styles.dot, { backgroundColor: '#2e7d32' }]} />
            </View>
          </View>

          {/* Step 04 */}
          <View style={styles.processRow}>
            <View style={[styles.stepCircle, styles.stepOn]}>
              <Text style={styles.stepNumber}>04</Text>
            </View>
            <MaterialCommunityIcons name="view-grid" size={20} color="#1e88e5" style={{ marginHorizontal: 10 }} />
            <Text style={styles.processLabel}>Contactor Sensor</Text>
            <View style={styles.processStatus}>
              <Text style={[styles.processStatusText, { color: '#2e7d32' }]}>Detection ON</Text>
              <View style={[styles.dot, { backgroundColor: '#2e7d32' }]} />
            </View>
          </View>

          {/* Step 05 */}
          <View style={styles.processRow}>
            <View style={[styles.stepCircle, styles.stepOff]}>
              <Text style={[styles.stepNumber, { color: '#c62828' }]}>05</Text>
            </View>
            <MaterialCommunityIcons name="pump" size={20} color="#1e88e5" style={{ marginHorizontal: 10 }} />
            <Text style={styles.processLabel}>Inlet Pump 1</Text>
            <View style={styles.processStatus}>
              <Text style={[styles.processStatusText, { color: '#c62828' }]}>OFF</Text>
              <View style={[styles.dot, { backgroundColor: '#c62828' }]} />
            </View>
          </View>
        </View>

        {/* ========== TANK FILLING ========== */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tank Filling</Text>

          <View style={styles.tankRow}>
            <Text style={styles.tankLabel}>Wastewater Tank</Text>
            <Text style={styles.tankPercent}>65%</Text>
          </View>
          <View style={styles.progressBg}>
            <View style={[styles.progressFill, { width: '65%', backgroundColor: '#1e88e5' }]} />
          </View>

          <View style={[styles.tankRow, { marginTop: 18 }]}>
            <Text style={styles.tankLabel}>Normal Water Tank</Text>
            <Text style={styles.tankPercent}>42%</Text>
          </View>
          <View style={styles.progressBg}>
            <View style={[styles.progressFill, { width: '42%', backgroundColor: '#26a69a' }]} />
          </View>
        </View>

        {/* ========== LOG ========== */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <Ionicons name="document-text-outline" size={22} color="#00897b" />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.sectionTitle}>Log</Text>
                <Text style={styles.sectionSub}>Recent Activity</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All ›</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.logRow}>
            <Text style={styles.logTime}>9:15 AM</Text>
            <Text style={styles.logText}>Inlet Pump 1 Started</Text>
            <Ionicons name="chevron-forward" size={18} color="#bdbdbd" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.logRow}>
            <Text style={styles.logTime}>9:12 AM</Text>
            <Text style={styles.logText}>Valve 1 Opened</Text>
            <Ionicons name="chevron-forward" size={18} color="#bdbdbd" />
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuBtn: {
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 13,
    color: '#00897b',
    marginTop: 2,
  },
  offlineBadge: {
    backgroundColor: '#616161',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  offlineText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 14,
  },
  startBtn: {
    backgroundColor: '#2e7d32',
    borderRadius: 10,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  startBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
  stopBtn: {
    borderWidth: 1.5,
    borderColor: '#ef5350',
    borderRadius: 10,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopIcon: {
    width: 12,
    height: 12,
    backgroundColor: '#ef5350',
    borderRadius: 2,
    marginRight: 8,
  },
  stopBtnText: {
    color: '#ef5350',
    fontSize: 15,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  sectionSub: {
    fontSize: 12,
    color: '#757575',
    marginTop: 2,
  },
  toggleContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  toggleActive: {},
  toggleInactive: {},
  toggleSide: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#f5f5f5',
  },
  toggleSideActive: {
    backgroundColor: '#00897b',
  },
  toggleText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#757575',
  },
  toggleTextActive: {
    color: '#fff',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 14,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  itemLabel: {
    fontSize: 14,
    color: '#424242',
  },
  itemLabelSmall: {
    fontSize: 12,
    color: '#9e9e9e',
    marginBottom: 2,
  },
  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    color: '#616161',
    marginRight: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  processRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepOn: {
    borderColor: '#2e7d32',
  },
  stepOff: {
    borderColor: '#c62828',
  },
  stepNumber: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2e7d32',
  },
  processLabel: {
    flex: 1,
    fontSize: 14,
    color: '#424242',
  },
  processStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  processStatusText: {
    fontSize: 13,
    fontWeight: '600',
    marginRight: 6,
  },
  tankRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  tankLabel: {
    fontSize: 14,
    color: '#424242',
  },
  tankPercent: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  progressBg: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  viewAll: {
    fontSize: 13,
    color: '#00897b',
    fontWeight: '600',
  },
  logRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  logTime: {
    width: 70,
    fontSize: 13,
    color: '#757575',
  },
  logText: {
    flex: 1,
    fontSize: 14,
    color: '#424242',
  },
});