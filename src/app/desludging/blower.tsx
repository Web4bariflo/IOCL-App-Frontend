import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Blower1Screen() {
  const [blowerRunning, setBlowerRunning] = useState(false);
  const [airFlow, setAirFlow] = useState(120);

  return (
    <SafeAreaView style={styles.container}>
      {/* ================= HEADER ================= */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={27}
            color="#001133"
          />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Blower 1</Text>
          <Text style={styles.headerSubtitle}>Manual Control</Text>
        </View>

        <View style={styles.headerRightSpace} />
      </View>

      {/* ================= CONTENT ================= */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ================= BLOWER STATUS ================= */}
        <View style={styles.card}>
          <View style={styles.statusContainer}>
            <Image
              source={require('@/assets/images/blower.png')}
              style={styles.blowerImage}
              resizeMode="contain"
            />

            <View style={styles.statusInfo}>
              <Text style={styles.statusTitle}>Blower Status</Text>

              <View style={styles.readyRow}>
                <View style={styles.greenDot} />

                <Text style={styles.readyText}>
                  {blowerRunning ? 'Running' : 'Ready'}
                </Text>
              </View>

              <Text style={styles.statusSubtitle}>
                PLC connection active
              </Text>
            </View>

            <View style={styles.offBadge}>
              <Text style={styles.offText}>
                {blowerRunning ? 'ON' : 'OFF'}
              </Text>
            </View>
          </View>
        </View>

        {/* ================= MANUAL CONTROL ================= */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Manual Control</Text>

          <View style={styles.controlButtons}>
            {/* START */}
            <TouchableOpacity
              style={[
                styles.startButton,
                blowerRunning && styles.startButtonActive,
              ]}
              onPress={() => setBlowerRunning(true)}
            >
              <MaterialCommunityIcons
                name="power"
                size={27}
                color="#FFFFFF"
              />

              <Text style={styles.startButtonText}>
                START BLOWER
              </Text>
            </TouchableOpacity>

            {/* STOP */}
            <TouchableOpacity
              style={styles.stopButton}
              onPress={() => setBlowerRunning(false)}
            >
              <MaterialCommunityIcons
                name="stop-circle-outline"
                size={27}
                color="#DC2626"
              />

              <Text style={styles.stopButtonText}>
                STOP BLOWER
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ================= OPERATING SCHEDULE ================= */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Operating Schedule
          </Text>

          <Text style={styles.cardSubtitle}>
            Set the blower operation window
          </Text>

          {/* START TIME */}
          <ScheduleRow
            icon="clock-outline"
            label="Start Time"
            value="08:15 AM"
          />

          <View style={styles.divider} />

          {/* END TIME */}
          <ScheduleRow
            icon="clock-outline"
            label="End Time"
            value="06:15 PM"
          />

          <View style={styles.divider} />

          {/* RUNNING TIME */}
          <ScheduleRow
            icon="clock-outline"
            label="Running Time"
            value="10 hr"
          />

          {/* AIR FLOW */}
          <View style={styles.airFlowSection}>
            <Text style={styles.airFlowTitle}>
              Air Flow Rate
            </Text>

            <View style={styles.airFlowRow}>
              <View style={styles.sliderContainer}>
                <View style={styles.sliderTrack}>
                  <View
                    style={[
                      styles.sliderFill,
                      {
                        width: `${(airFlow / 200) * 100}%`,
                      },
                    ]}
                  />

                  <View
                    style={[
                      styles.sliderThumb,
                      {
                        left: `${(airFlow / 200) * 100}%`,
                      },
                    ]}
                  />
                </View>

                <View style={styles.sliderLabels}>
                  <Text style={styles.sliderLabel}>0</Text>
                  <Text style={styles.sliderLabel}>
                    200 m³/hr
                  </Text>
                </View>
              </View>

              <View style={styles.airFlowValueBox}>
                <Text style={styles.airFlowValue}>
                  {airFlow} m³/hr
                </Text>
              </View>
            </View>
          </View>

          {/* SAVE BUTTON */}
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>
              SAVE SETTINGS
            </Text>
          </TouchableOpacity>
        </View>

        {/* ================= OPERATION LOG ================= */}
        <View style={styles.card}>
          <View style={styles.logHeader}>
            <Text style={styles.cardTitle}>
              Operation Log
            </Text>

            <TouchableOpacity style={styles.viewAllContainer}>
              <Text style={styles.viewAllText}>
                View All
              </Text>

              <MaterialCommunityIcons
                name="chevron-right"
                size={21}
                color="#0D9488"
              />
            </TouchableOpacity>
          </View>

          {/* LOG 1 */}
          <LogRow
            time="Today, 08:15 AM"
            text="Blower Started"
            active
          />

          <View style={styles.logDivider} />

          {/* LOG 2 */}
          <LogRow
            time="Yesterday, 06:15 PM"
            text="Blower Stopped"
            active={false}
          />

          <View style={styles.logDivider} />

          {/* LOG 3 */}
          <LogRow
            time="Yesterday, 08:15 AM"
            text="Blower Started"
            active
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ========================================================= */
/* SCHEDULE ROW */
/* ========================================================= */

function ScheduleRow({
  icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.scheduleRow}>
      <View style={styles.scheduleLeft}>
        <MaterialCommunityIcons
          name={icon}
          size={23}
          color="#1677B9"
        />

        <Text style={styles.scheduleLabel}>
          {label}
        </Text>
      </View>

      <View style={styles.timeBox}>
        <Text style={styles.timeText}>
          {value}
        </Text>
      </View>
    </View>
  );
}

/* ========================================================= */
/* LOG ROW */
/* ========================================================= */

function LogRow({
  time,
  text,
  active,
}: {
  time: string;
  text: string;
  active: boolean;
}) {
  return (
    <View style={styles.logRow}>
      <Text style={styles.logTime}>
        {time}
      </Text>

      <View style={styles.logStatus}>
        <Text style={styles.logText}>
          {text}
        </Text>

        <View
          style={[
            styles.logDot,
            {
              backgroundColor: active
                ? '#0FA69B'
                : '#64748B',
            },
          ]}
        />
      </View>
    </View>
  );
}

/* ========================================================= */
/* STYLES */
/* ========================================================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },

  /* ================= HEADER ================= */

  header: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  backButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#001133',
  },

  headerSubtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },

  headerRightSpace: {
    width: 40,
  },

  /* ================= CONTENT ================= */

  scrollContent: {
    padding: 14,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,

    elevation: 2,
  },

  /* ================= STATUS ================= */

  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  blowerImage: {
    width: 68,
    height: 68,
    marginRight: 14,
  },

  statusInfo: {
    flex: 1,
  },

  statusTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#001133',
  },

  readyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  greenDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#0FA69B',
    marginRight: 7,
  },

  readyText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0FA69B',
  },

  statusSubtitle: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 3,
  },

  offBadge: {
    backgroundColor: '#F1F2F3',
    borderWidth: 1,
    borderColor: '#D9DADD',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 9,
  },

  offText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },

  /* ================= MANUAL CONTROL ================= */

  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#001133',
    marginBottom: 5,
  },

  controlButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 10,
  },

  startButton: {
    flex: 1,
    height: 54,
    borderRadius: 7,
    backgroundColor: '#0FA69B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  startButtonActive: {
    backgroundColor: '#0D9488',
  },

  startButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 7,
  },

  stopButton: {
    flex: 1,
    height: 54,
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#D75B5B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  stopButtonText: {
    color: '#DC2626',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 7,
  },

  /* ================= SCHEDULE ================= */

  cardSubtitle: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 12,
  },

  scheduleRow: {
    height: 49,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  scheduleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  scheduleLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#001133',
    marginLeft: 12,
  },

  timeBox: {
    minWidth: 112,
    height: 36,
    borderWidth: 1,
    borderColor: '#D7DCE1',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  timeText: {
    fontSize: 13,
    color: '#4B5563',
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
  },

  /* ================= AIR FLOW ================= */

  airFlowSection: {
    marginTop: 13,
  },

  airFlowTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#001133',
    marginBottom: 10,
  },

  airFlowRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sliderContainer: {
    flex: 1,
    marginRight: 12,
  },

  sliderTrack: {
    height: 5,
    backgroundColor: '#D9DEE3',
    borderRadius: 5,
    position: 'relative',
  },

  sliderFill: {
    height: 5,
    backgroundColor: '#0FA69B',
    borderRadius: 5,
  },

  sliderThumb: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: '#0FA69B',
    top: -7,
    marginLeft: -9,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,

    elevation: 3,
  },

  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  sliderLabel: {
    fontSize: 11,
    color: '#64748B',
  },

  airFlowValueBox: {
    width: 112,
    height: 43,
    borderWidth: 1,
    borderColor: '#D7DCE1',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  airFlowValue: {
    fontSize: 13,
    color: '#4B5563',
    fontWeight: '500',
  },

  /* ================= SAVE ================= */

  saveButton: {
    height: 42,
    backgroundColor: '#0FA69B',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 13,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  /* ================= LOG ================= */

  logHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewAllText: {
    fontSize: 13,
    color: '#0D9488',
    fontWeight: '500',
  },

  logRow: {
    minHeight: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logTime: {
    fontSize: 12,
    color: '#4B5563',
  },

  logStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logText: {
    fontSize: 12,
    color: '#4B5563',
    marginRight: 8,
  },

  logDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  logDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
  },
});