import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function FlocculationDosingInletPumpScreen() {
  const [pumpStatus, setPumpStatus] = useState<'Running' | 'Stopped'>('Running');
  const [valve1Status, setValve1Status] = useState<'OPEN' | 'CLOSE'>('OPEN');
  const [valve2Status, setValve2Status] = useState<'OPEN' | 'CLOSE'>('OPEN');
  const [sensor1Active] = useState<boolean>(true);
  const [sensor2Active] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* Top Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.navigate('/flocculation/dosing/settings')}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Inlet Pump Control</Text>
        <View style={styles.backButtonPlaceholder} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ================= SECTION 1: INLET PUMP 1 ================= */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Inlet Pump 1</Text>
          <View style={styles.card}>
            {/* Status Row */}
            <View style={styles.pumpStatusRow}>
              <Image
                source={require('@/assets/images/inletpump.png')}
                style={styles.pumpIcon}
                resizeMode="contain"
              />
              <View style={styles.statusInfo}>
                <Text style={styles.statusLabel}>Status</Text>
                <Text
                  style={[
                    styles.statusValue,
                    pumpStatus === 'Running'
                      ? styles.statusRunning
                      : styles.statusStopped,
                  ]}
                >
                  {pumpStatus}
                </Text>
              </View>
            </View>

            {/* Action Buttons: START and STOP */}
            <View style={styles.pumpActionsRow}>
              <TouchableOpacity
                style={[
                  styles.btnStart,
                  pumpStatus === 'Running' && styles.btnStartActive,
                ]}
                onPress={() => setPumpStatus('Running')}
                activeOpacity={0.8}
              >
                <Text style={styles.btnStartText}>START</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.btnStop,
                  pumpStatus === 'Stopped' && styles.btnStopActive,
                ]}
                onPress={() => setPumpStatus('Stopped')}
                activeOpacity={0.8}
              >
                <Text style={styles.btnStopText}>STOP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ================= SECTION 2: SOLENOID VALVES ================= */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Solenoid Valves</Text>
          <View style={styles.card}>
            {/* Valve 1 Row */}
            <View style={styles.valveRow}>
              <View style={styles.valveLeft}>
                <Text style={styles.valveName}>Valve 1</Text>
                <Text
                  style={[
                    styles.valveState,
                    valve1Status === 'OPEN'
                      ? styles.stateOpen
                      : styles.stateClosed,
                  ]}
                >
                  {valve1Status === 'OPEN' ? 'Open' : 'Closed'}
                </Text>
              </View>

              {/* Segmented Switch */}
              <View style={styles.segmentedContainer}>
                <TouchableOpacity
                  style={[
                    styles.segmentedTab,
                    valve1Status === 'OPEN' && styles.segmentedTabActive,
                  ]}
                  onPress={() => setValve1Status('OPEN')}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.segmentedText,
                      valve1Status === 'OPEN' && styles.segmentedTextActive,
                    ]}
                  >
                    OPEN
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.segmentedTab,
                    valve1Status === 'CLOSE' && styles.segmentedTabActiveClose,
                  ]}
                  onPress={() => setValve1Status('CLOSE')}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.segmentedText,
                      valve1Status === 'CLOSE' && styles.segmentedTextActive,
                    ]}
                  >
                    CLOSE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Divider Line */}
            <View style={styles.divider} />

            {/* Valve 2 Row */}
            <View style={styles.valveRow}>
              <View style={styles.valveLeft}>
                <Text style={styles.valveName}>Valve 2</Text>
                <Text
                  style={[
                    styles.valveState,
                    valve2Status === 'OPEN'
                      ? styles.stateOpen
                      : styles.stateClosed,
                  ]}
                >
                  {valve2Status === 'OPEN' ? 'Open' : 'Closed'}
                </Text>
              </View>

              {/* Segmented Switch */}
              <View style={styles.segmentedContainer}>
                <TouchableOpacity
                  style={[
                    styles.segmentedTab,
                    valve2Status === 'OPEN' && styles.segmentedTabActive,
                  ]}
                  onPress={() => setValve2Status('OPEN')}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.segmentedText,
                      valve2Status === 'OPEN' && styles.segmentedTextActive,
                    ]}
                  >
                    OPEN
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.segmentedTab,
                    valve2Status === 'CLOSE' && styles.segmentedTabActiveClose,
                  ]}
                  onPress={() => setValve2Status('CLOSE')}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.segmentedText,
                      valve2Status === 'CLOSE' && styles.segmentedTextActive,
                    ]}
                  >
                    CLOSE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* ================= SECTION 3: CONTACTOR SENSORS ================= */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Contactor Sensors</Text>
          <View style={styles.card}>
            {/* Contactor Sensor 1 */}
            <View style={styles.sensorRow}>
              <Text style={styles.sensorName}>Contactor Sensor 1</Text>
              <View style={styles.sensorStatusContainer}>
                <Text
                  style={[
                    styles.sensorStatusText,
                    sensor1Active ? styles.sensorActive : styles.sensorInactive,
                  ]}
                >
                  {sensor1Active ? 'Active' : 'Inactive'}
                </Text>
                <View
                  style={[
                    styles.sensorDot,
                    sensor1Active ? styles.sensorDotActive : styles.sensorDotInactive,
                  ]}
                />
              </View>
            </View>

            {/* Contactor Sensor 2 */}
            <View style={[styles.sensorRow, { marginTop: 18 }]}>
              <Text style={styles.sensorName}>Contactor Sensor 2</Text>
              <View style={styles.sensorStatusContainer}>
                <Text
                  style={[
                    styles.sensorStatusText,
                    sensor2Active ? styles.sensorActive : styles.sensorInactive,
                  ]}
                >
                  {sensor2Active ? 'Active' : 'Inactive'}
                </Text>
                <View
                  style={[
                    styles.sensorDot,
                    sensor2Active ? styles.sensorDotActive : styles.sensorDotInactive,
                  ]}
                />
              </View>
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
    backgroundColor: '#F4F6F9',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F6',
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1E293B',
  },
  backButtonPlaceholder: {
    width: 36,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 32,
  },
  section: {
    marginBottom: 22,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 12,
    letterSpacing: 0.2,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#0F172A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 10,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)',
      },
    }),
  },

  /* ================= PUMP STATUS & ACTIONS ================= */
  pumpStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  pumpIcon: {
    width: 44,
    height: 44,
    marginRight: 14,
  },
  statusInfo: {
    justifyContent: 'center',
  },
  statusLabel: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500',
    marginBottom: 2,
  },
  statusValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  statusRunning: {
    color: '#00B779',
  },
  statusStopped: {
    color: '#EF4444',
  },
  pumpActionsRow: {
    flexDirection: 'row',
    gap: 14,
  },
  btnStart: {
    flex: 1,
    backgroundColor: '#00B779',
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00B779',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2,
  },
  btnStartActive: {
    opacity: 1,
  },
  btnStartText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  btnStop: {
    flex: 1,
    backgroundColor: '#FF3B3B',
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2,
  },
  btnStopActive: {
    opacity: 1,
  },
  btnStopText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  /* ================= SOLENOID VALVES ================= */
  valveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  valveLeft: {
    justifyContent: 'center',
  },
  valveName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 2,
  },
  valveState: {
    fontSize: 14,
    fontWeight: '600',
  },
  stateOpen: {
    color: '#00B779',
  },
  stateClosed: {
    color: '#64748B',
  },
  segmentedContainer: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: 3,
    alignItems: 'center',
  },
  segmentedTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 64,
  },
  segmentedTabActive: {
    backgroundColor: '#00B779',
    shadowColor: '#00B779',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  segmentedTabActiveClose: {
    backgroundColor: '#EF4444',
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  segmentedText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 0.3,
  },
  segmentedTextActive: {
    color: '#FFFFFF',
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 16,
  },

  /* ================= CONTACTOR SENSORS ================= */
  sensorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sensorName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E293B',
  },
  sensorStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sensorStatusText: {
    fontSize: 14,
    fontWeight: '700',
    marginRight: 6,
  },
  sensorActive: {
    color: '#00B779',
  },
  sensorInactive: {
    color: '#64748B',
  },
  sensorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  sensorDotActive: {
    backgroundColor: '#00B779',
  },
  sensorDotInactive: {
    backgroundColor: '#94A3B8',
  },
});
