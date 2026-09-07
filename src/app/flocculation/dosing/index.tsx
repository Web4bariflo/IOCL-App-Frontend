import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CoagulantSystemScreen() {
    const router = useRouter();
  const [systemRunning, setSystemRunning] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
<View style={styles.header}>

  {/* BACK ARROW */}
 <TouchableOpacity
  style={styles.backButton}
  onPress={() => router.replace('/(tabs)/dashboard')}
>
    <MaterialCommunityIcons
      name="arrow-left"
      size={26}
      color="#1E3A5F"
    />
  </TouchableOpacity>

  {/* TITLE */}
  <View style={styles.headerCenter}>
    <Text style={styles.headerTitle}> Flocculation System</Text>
    <Text style={styles.subtitle}>Automatic Mode</Text>
  </View>

  {/* OFFLINE */}
  <View style={styles.offlineBadge}>
    <Text style={styles.offlineText}>Offline</Text>
  </View>

</View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 30 }}>
        {/* SYSTEM OVERVIEW */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>System Overview</Text>

          <TouchableOpacity
            style={styles.startBtn}
            onPress={() => setSystemRunning(true)}
          >
            <MaterialCommunityIcons name="power" size={20} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.startText}>START SYSTEM</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.stopBtn}
            onPress={() => setSystemRunning(false)}
          >
            <MaterialCommunityIcons name="stop" size={18} color="#EF4444" style={{ marginRight: 8 }} />
            <Text style={styles.stopText}>STOP</Text>
          </TouchableOpacity>
        </View>

        {/* MOTOR 1 */}
        <Card
          title="Motor 1"
          subtitle="Disabled"
          image={require('@/assets/images/motor.png')} // change if needed
          active={false}
        >
          <View style={styles.statusRow}>
            <View>
              <Text style={styles.statusLabel}>Status</Text>
              <Text style={styles.statusValue}>Disabled</Text>
            </View>
            <View>
              <Text style={styles.statusLabel}>Since</Text>
              <Text style={styles.statusValue}>08:15 AM</Text>
            </View>
          </View>
        </Card>

        {/* MOTOR 2 */}
        <Card
          title="Motor 2"
          subtitle="Disabled"
          image={require('@/assets/images/motor.png')}
          active={false}
        >
          <View style={styles.statusRow}>
            <View>
              <Text style={styles.statusLabel}>Status</Text>
              <Text style={styles.statusValue}>Disabled</Text>
            </View>
            <View>
              <Text style={styles.statusLabel}>Since</Text>
              <Text style={styles.statusValue}>08:15 AM</Text>
            </View>
          </View>
        </Card>

        {/* BLOWER 1 */}
        <Card
          title="Blower 1"
          subtitle="Stopped"
          image={require('@/assets/images/blower.png')} // change if needed
          active={false}
        >
          <View style={styles.statusRow}>
            <View>
              <Text style={styles.statusLabel}>Status</Text>
              <Text style={styles.statusValue}>Stopped</Text>
            </View>
            <View>
              <Text style={styles.statusLabel}>Since</Text>
              <Text style={styles.statusValue}>08:15 AM</Text>
            </View>
          </View>
        </Card>

        {/* AUTOMATIC PROCESS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Automatic Process</Text>

          <ProcessRow
            number="01"
            text="Motor 1"
            image={require('@/assets/images/motor.png')}
            active
          />
          <ProcessRow
            number="02"
            text="Motor 2"
            image={require('@/assets/images/motor.png')}
            active
          />
          <ProcessRow
            number="03"
            text="Blower 1"
            image={require('@/assets/images/blower.png')}
            active={false}
          />
        </View>

        {/* TANK FILLING */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Tank Filling</Text>
          <TankRow label="Wastewater Tank" percent={65} color="#3B82F6" />
          <TankRow label="Normal Water Tank" percent={42} color="#14B8A6" />
        </View>

        {/* LOG */}
        <View style={styles.card}>
          <View style={styles.logHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={20}
                color="#3B82F6"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.sectionTitle}>Log</Text>
            </View>
            <Text style={styles.viewAll}>View All ›</Text>
          </View>
          <Text style={styles.recentActivity}>Recent Activity</Text>

          <LogRow time="9:15 AM" message="Motor 1 Started" />
          <LogRow time="9:12 AM" message="Blower 1 Stopped" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ==================== COMPONENTS ==================== */

function Card({ title, subtitle, image, active, children }: any) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardTitleRow}>
          {image && (
            <Image source={image} style={styles.cardIcon} resizeMode="contain" />
          )}
          <View>
            <Text style={styles.sectionTitle}>{title}</Text>
            {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
          </View>
        </View>
        <View style={[styles.deactiveBtn, active && styles.activeBtn]}>
          <Text style={[styles.deactiveText, active && styles.activeText]}>
            {active ? 'ACTIVE' : 'DEACTIVE'}
          </Text>
        </View>
      </View>
      {children}
    </View>
  );
}

function ProcessRow({ number, text, image, active }: any) {
  return (
    <View style={styles.processRow}>
      <View style={styles.processLeft}>
        <View
          style={[
            styles.processNumber,
            active ? styles.processNumberActive : styles.processNumberInactive,
          ]}
        >
          <Text style={styles.processNumberText}>{number}</Text>
        </View>

        <View style={styles.processIconText}>
          {image && (
            <Image source={image} style={styles.processIcon} resizeMode="contain" />
          )}
          <Text style={styles.processText}>{text}</Text>
        </View>
      </View>

      <View style={styles.processRight}>
        <Text style={{ color: active ? '#10B981' : '#EF4444', fontWeight: '600' }}>
          {active ? 'ON' : 'OFF'}
        </Text>
        <View
          style={[
            styles.dot,
            { backgroundColor: active ? '#10B981' : '#EF4444' },
          ]}
        />
      </View>
    </View>
  );
}

function TankRow({ label, percent, color }: any) {
  return (
    <View style={styles.tankRow}>
      <Text style={styles.tankLabel}>{label}</Text>
      <View style={styles.progressBarBackground}>
        <View
          style={[
            styles.progressBarFill,
            { width: `${percent}%`, backgroundColor: color },
          ]}
        />
      </View>
      <Text style={styles.tankPercent}>{percent}%</Text>
    </View>
  );
}

function LogRow({ time, message }: any) {
  return (
    <View style={styles.logRow}>
      <Text style={styles.logTime}>{time}</Text>
      <Text style={styles.logMessage}>{message}</Text>
      <Text style={styles.logArrow}>›</Text>
    </View>
  );
}

/* ==================== STYLES ==================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
 header: {
  padding: 16,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  minHeight: 80,
},
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E3A5F',
  },
  subtitle: {
    color: '#10B981',
    marginTop: 4,
    fontWeight: '500',
  },
  offlineBadge: {
    position: 'absolute',
    right: 16,
    top: 16,
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  offlineText: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cardIcon: {
    width: 36,
    height: 36,
    marginRight: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  deactiveBtn: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  activeBtn: {
    backgroundColor: '#D1FAE5',
  },
  deactiveText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
  },
  activeText: {
    color: '#059669',
  },
  startBtn: {
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  stopBtn: {
    borderWidth: 1.5,
    borderColor: '#EF4444',
    paddingVertical: 14,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopText: {
    color: '#EF4444',
    fontWeight: 'bold',
    fontSize: 15,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  statusLabel: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  statusValue: {
    fontSize: 14,
    color: '#374151',
    marginTop: 2,
  },
  processRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  processLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  processNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  processNumberActive: {
    backgroundColor: '#10B981',
  },
  processNumberInactive: {
    backgroundColor: '#F3F4F6',
  },
  processNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  processIconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  processIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  processText: {
    fontSize: 14,
    color: '#374151',
  },
  processRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  tankRow: {
    marginVertical: 10,
  },
  tankLabel: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 6,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  tankPercent: {
    position: 'absolute',
    right: 0,
    top: 0,
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  logHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAll: {
    color: '#3B82F6',
    fontSize: 13,
  },
  recentActivity: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 12,
  },
  logRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  logTime: {
    width: 70,
    fontSize: 13,
    color: '#6B7280',
  },
  logMessage: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
  },
  logArrow: {
    fontSize: 18,
    color: '#9CA3AF',
  },

  backButton: {
  position: 'absolute',
  left: 16,
  top: 20,
  width: 40,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
},

headerCenter: {
  alignItems: 'center',
},
});