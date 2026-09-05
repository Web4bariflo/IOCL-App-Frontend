import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function StepperMotorScreen() {
  const router = useRouter();
  const [motorRunning, setMotorRunning] = useState(false);
  const [rpm, setRpm] = useState(120);

  const increaseRpm = () => setRpm(prev => prev + 10);
  const decreaseRpm = () => setRpm(prev => (prev > 10 ? prev - 10 : 10));

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#1E3A5F" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Stepper Motor</Text>
          <Text style={styles.headerSubtitle}>Manual Control</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 30 }}>
        
        {/* MOTOR STATUS CARD */}
        <View style={styles.card}>
          <View style={styles.motorStatusRow}>
            <Image
              source={require('../../../../assets/images/StepperMotor.png')}
              style={styles.motorImage}
              resizeMode="contain"
            />
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.motorStatusTitle}>Motor Status</Text>
              <View style={styles.statusRow}>
                <View style={[styles.statusDot, { backgroundColor: '#10B981' }]} />
                <Text style={styles.statusReady}>Ready</Text>
              </View>
              <Text style={styles.plcText}>PLC connection active</Text>
            </View>

            <View style={styles.offBadge}>
              <Text style={styles.offText}>OFF</Text>
            </View>
          </View>
        </View>

        {/* MANUAL CONTROL */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Manual Control</Text>

          <View style={styles.controlButtons}>
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() => setMotorRunning(true)}
            >
              <MaterialCommunityIcons name="power" size={20} color="#fff" />
              <Text style={styles.startText}>START MOTOR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.stopBtn}
              onPress={() => setMotorRunning(false)}
            >
              <MaterialCommunityIcons name="stop-circle-outline" size={20} color="#EF4444" />
              <Text style={styles.stopText}>STOP MOTOR</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* OPERATING SCHEDULE */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Operating Schedule</Text>
          <Text style={styles.sectionDesc}>Set the motor operation window</Text>

          {/* Start Time */}
          <View style={styles.scheduleRow}>
            <View style={styles.scheduleLeft}>
              <MaterialCommunityIcons name="clock-outline" size={20} color="#3B82F6" />
              <Text style={styles.scheduleLabel}>Start Time</Text>
            </View>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>08:15 AM</Text>
            </View>
          </View>

          {/* End Time */}
          <View style={styles.scheduleRow}>
            <View style={styles.scheduleLeft}>
              <MaterialCommunityIcons name="clock-outline" size={20} color="#3B82F6" />
              <Text style={styles.scheduleLabel}>End Time</Text>
            </View>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>06:15 PM</Text>
            </View>
          </View>

          {/* Running Time */}
          <View style={styles.scheduleRow}>
            <View style={styles.scheduleLeft}>
              <MaterialCommunityIcons name="clock-outline" size={20} color="#3B82F6" />
              <Text style={styles.scheduleLabel}>Running Time</Text>
            </View>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>10 hr</Text>
            </View>
          </View>

          {/* Set RPM */}
          <View style={styles.scheduleRow}>
            <View style={styles.scheduleLeft}>
              <MaterialCommunityIcons name="speedometer" size={20} color="#3B82F6" />
              <Text style={styles.scheduleLabel}>Set RPM</Text>
            </View>
            <View style={styles.rpmControl}>
              <TouchableOpacity style={styles.rpmBtn} onPress={decreaseRpm}>
                <Text style={styles.rpmBtnText}>−</Text>
              </TouchableOpacity>
              <Text style={styles.rpmValue}>{rpm} RPM</Text>
              <TouchableOpacity style={styles.rpmBtn} onPress={increaseRpm}>
                <Text style={styles.rpmBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveText}>SAVE SCHEDULE</Text>
          </TouchableOpacity>
        </View>

        {/* OPERATION LOG */}
        <View style={styles.card}>
          <View style={styles.logHeader}>
            <Text style={styles.sectionTitle}>Operation Log</Text>
            <Text style={styles.viewAll}>View All ›</Text>
          </View>

          <LogItem time="Today, 08:15 AM" message="Motor Started" active />
          <LogItem time="Yesterday, 06:15 PM" message="Motor Stopped" active={false} />
          <LogItem time="Yesterday, 08:15 AM" message="Motor Started" active />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ================= COMPONENTS ================= */

function LogItem({ time, message, active }: any) {
  return (
    <View style={styles.logItem}>
      <Text style={styles.logTime}>{time}</Text>
      <View style={styles.logRight}>
        <Text style={styles.logMessage}>{message}</Text>
        <View
          style={[
            styles.logDot,
            { backgroundColor: active ? '#10B981' : '#9CA3AF' },
          ]}
        />
      </View>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  backBtn: {
    padding: 4,
  },
  headerCenter: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E3A5F',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
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
  motorStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  motorImage: {
    width: 56,
    height: 56,
  },
  motorStatusTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusReady: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '500',
  },
  plcText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  offBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },
  offText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  sectionDesc: {
    fontSize: 13,
    color: '#9CA3AF',
    marginBottom: 16,
  },
  controlButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  startBtn: {
    flex: 1,
    backgroundColor: '#0D9488',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 10,
    gap: 8,
  },
  startText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  stopBtn: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#EF4444',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 10,
    gap: 8,
  },
  stopText: {
    color: '#EF4444',
    fontWeight: '700',
    fontSize: 14,
  },
  scheduleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  scheduleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  scheduleLabel: {
    fontSize: 15,
    color: '#374151',
  },
  timeBox: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  timeText: {
    fontSize: 14,
    color: '#1F2937',
    fontWeight: '500',
  },
  rpmControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  rpmBtn: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rpmBtnText: {
    fontSize: 20,
    color: '#374151',
    fontWeight: '500',
  },
  rpmValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginHorizontal: 8,
    minWidth: 70,
    textAlign: 'center',
  },
  saveBtn: {
    backgroundColor: '#0D9488',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  saveText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  logHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  viewAll: {
    fontSize: 13,
    color: '#3B82F6',
  },
  logItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  logTime: {
    fontSize: 13,
    color: '#6B7280',
  },
  logRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logMessage: {
    fontSize: 14,
    color: '#374151',
  },
  logDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});