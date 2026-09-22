import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { turnOnMotor, turnOffMotor, getEquipmentManualLogs } from '../../../api/mixingTankApi';

export default function InletPumpScreen() {
  const [activeTab, setActiveTab] = useState<
    'PUMP 1' | 'PUMP 2' | 'PUMP 3'
  >('PUMP 1');

  const [pumpIds, setPumpIds] = useState<number[]>([]);
  const [stageId, setStageId] = useState<number | null>(null);

  const [loading, setLoading] = useState(false);

  const [startedAt, setStartedAt] = useState<string | null>(null);
  const [endedAt, setEndedAt] = useState<string | null>(null);
  const [durationSeconds, setDurationSeconds] = useState<number | null>(null);

  const [pumpState, setPumpState] = useState<'ON' | 'OFF'>('OFF');
  const [manualLogs, setManualLogs] = useState<any[]>([]);
const [logsLoading, setLogsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedPumpIds = await AsyncStorage.getItem(
          'mixingTankInletPumpIds'
        );

        const storedStageId = await AsyncStorage.getItem(
          'mixingTankStageId'
        );

        if (storedPumpIds) {
          setPumpIds(JSON.parse(storedPumpIds));
        }

        if (storedStageId) {
          setStageId(Number(storedStageId));
        }

        console.log('Inlet Pump IDs:', storedPumpIds);
        console.log('Mixing Tank Stage ID:', storedStageId);

      } catch (error) {
        console.log('Error loading pump data:', error);
      }
    };

    loadData();
  }, []);

  const getSelectedPumpId = () => {
    if (activeTab === 'PUMP 1') {
      return pumpIds[0];
    }

    if (activeTab === 'PUMP 2') {
      return pumpIds[1];
    }

    return pumpIds[2];
  };

  const loadManualLogs = async () => {
  try {
    if (stageId === null) {
      return;
    }

    const pumpId = getSelectedPumpId();

    if (!pumpId) {
      return;
    }

    setLogsLoading(true);

    console.log('Loading logs for Pump ID:', pumpId);
    console.log('Stage ID:', stageId);

    const response = await getEquipmentManualLogs(
      pumpId,
      stageId
    );

    console.log('Manual Logs:', response);

    if (response.success) {
      setManualLogs(response.data.slice(0, 3));
    }

  } catch (error) {
    console.log('Failed to load manual logs:', error);
  } finally {
    setLogsLoading(false);
  }
};

useEffect(() => {
  if (stageId !== null && pumpIds.length > 0) {
    loadManualLogs();
  }
}, [stageId, pumpIds, activeTab]);

  const handleStartPump = async () => {
    try {
      if (stageId === null) {
        console.log('Mixing Tank stage ID not found');
        return;
      }

      const pumpId = getSelectedPumpId();

      if (!pumpId) {
        console.log('Selected pump ID not found');
        return;
      }

      setLoading(true);

      console.log('Selected Pump:', activeTab);
      console.log('Pump ID:', pumpId);
      console.log('Stage ID:', stageId);

      const response = await turnOnMotor(
        pumpId,
        stageId
      );

      console.log('Pump ON Response:', response);

      if (response.success) {
        setStartedAt(response.data.started_at);

        // Clear previous OFF information
        setEndedAt(null);
        setDurationSeconds(null);

        setPumpState('ON');
        await loadManualLogs();

      }

    } catch (error) {
      console.log('Failed to start pump:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStopPump = async () => {
    try {
      if (stageId === null) {
        console.log('Mixing Tank stage ID not found');
        return;
      }

      const pumpId = getSelectedPumpId();

      if (!pumpId) {
        console.log('Selected pump ID not found');
        return;
      }

      setLoading(true);

      console.log('Selected Pump:', activeTab);
      console.log('Pump ID:', pumpId);
      console.log('Stage ID:', stageId);

      const response = await turnOffMotor(
        pumpId,
        stageId
      );

      console.log('Pump OFF Response:', response);

      if (response.success) {
        setEndedAt(response.data.ended_at);
        setDurationSeconds(response.data.duration_seconds);
        setPumpState('OFF');
        await loadManualLogs();
      }

    } catch (error) {
      console.log('Failed to stop pump:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/mixingtank/settings')}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#1E3A8A" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>
            Inlet Pump {activeTab.replace('PUMP ', '')}
          </Text>
          <Text style={styles.cardTitle}>
            Inlet Pump {activeTab.replace('PUMP ', '')} Manual Control
          </Text>
        </View>
        <View style={styles.backButton} />
      </View>
      <View style={styles.headerBorder} />

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Pump Status Card */}
        <View style={styles.card}>
          <View style={styles.statusCardContent}>
            <Image
              source={require('@/assets/images/inletpump.png')}
              style={styles.pumpLargeIcon}
              resizeMode="contain"
            />
            <View style={styles.statusTextContainer}>
              <Text style={styles.statusTitle}>Pump Status</Text>
              <View style={styles.statusRow}>
                <View style={styles.statusDotGreen} />
                <Text style={styles.statusTextGreen}>Ready</Text>
              </View>
              <Text style={styles.statusSubtitle}>PLC connection active</Text>
            </View>
            {/* <View style={styles.offBadge}>
              <Text style={styles.offBadgeText}>OFF</Text>
            </View> */}

            <View style={styles.offBadge}>
  <Text style={styles.offBadgeText}>
    {pumpState}
  </Text>
</View>
          </View>
        </View>

        {/* Pump Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'PUMP 1' && styles.tabButtonActive,
            ]}
            onPress={() => setActiveTab('PUMP 1')}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'PUMP 1' && styles.tabButtonTextActive,
              ]}
            >
              PUMP 1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'PUMP 2' && styles.tabButtonActive,
            ]}
            onPress={() => setActiveTab('PUMP 2')}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'PUMP 2' && styles.tabButtonTextActive,
              ]}
            >
              PUMP 2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'PUMP 3' && styles.tabButtonActive,
            ]}
            onPress={() => setActiveTab('PUMP 3')}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'PUMP 3' && styles.tabButtonTextActive,
              ]}
            >
              PUMP 3
            </Text>
          </TouchableOpacity>
        </View>

        {/* Manual Control Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Manual Control</Text>
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={styles.startButton}
              onPress={handleStartPump}
              disabled={loading}
            >
              <MaterialCommunityIcons name="power" size={24} color="#FFFFFF" />
              <Text style={styles.startButtonText}>
                {loading ? 'STARTING...' : 'START PUMP'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.stopButton}
              onPress={handleStopPump}
              disabled={loading}
            >
              <MaterialCommunityIcons name="stop-circle-outline" size={24} color="#DC2626" />
              <Text style={styles.stopButtonText}>
                {loading ? 'STOPPING...' : 'STOP PUMP'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Operating Schedule Card */}
        {/* <View style={styles.card}>
          <Text style={styles.cardTitle}>Operating Schedule</Text>
          <Text style={styles.cardSubtitle}>Set the pump operation window</Text>

          <View style={styles.scheduleRow}>
            <View style={styles.scheduleLabelContainer}>
              <MaterialCommunityIcons name="clock-outline" size={22} color="#1A5B9C" />
              <Text style={styles.scheduleLabel}>Start Time</Text>
            </View>
            <View style={styles.timeInputBox}>
              <Text style={styles.timeInputText}>08:15 AM</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.scheduleRow}>
            <View style={styles.scheduleLabelContainer}>
              <MaterialCommunityIcons name="clock-outline" size={22} color="#1A5B9C" />
              <Text style={styles.scheduleLabel}>End Time</Text>
            </View>
            <View style={styles.timeInputBox}>
              <Text style={styles.timeInputText}>06:15 PM</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.scheduleRow}>
            <View style={styles.scheduleLabelContainer}>
              <MaterialCommunityIcons name="clock-outline" size={22} color="#1A5B9C" />
              <Text style={styles.scheduleLabel}>Running Time</Text>
            </View>
            <View style={styles.timeInputBox}>
              <Text style={styles.timeInputText}>10 hr</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>SAVE SCHEDULE</Text>
          </TouchableOpacity>
        </View> */}

        <View style={styles.card}>
  <Text style={styles.cardTitle}>Operating Schedule</Text>

  <Text style={styles.cardSubtitle}>
    Set the pump operation window
  </Text>

  {/* After START */}
  {pumpState === 'ON' && (
    <View style={styles.scheduleRow}>
      <View style={styles.scheduleLabelContainer}>
        <MaterialCommunityIcons
          name="clock-outline"
          size={22}
          color="#1A5B9C"
        />

        <Text style={styles.scheduleLabel}>
          Start Time
        </Text>
      </View>

      <View style={styles.timeInputBox}>
        <Text style={styles.timeInputText}>
          {startedAt
            ? new Date(startedAt).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })
            : '--'}
        </Text>
      </View>
    </View>
  )}

  {/* After STOP */}
  {pumpState === 'OFF' && endedAt && (
    <>
      <View style={styles.scheduleRow}>
        <View style={styles.scheduleLabelContainer}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={22}
            color="#1A5B9C"
          />

          <Text style={styles.scheduleLabel}>
            End Time
          </Text>
        </View>

        <View style={styles.timeInputBox}>
          <Text style={styles.timeInputText}>
            {new Date(endedAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.scheduleRow}>
        <View style={styles.scheduleLabelContainer}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={22}
            color="#1A5B9C"
          />

        <Text style={styles.scheduleLabel}>
          Running Time
        </Text>
      </View>

        <View style={styles.timeInputBox}>
          <Text style={styles.timeInputText}>
            {durationSeconds !== null
              ? `${durationSeconds} sec`
              : '--'}
          </Text>
        </View>
      </View>
    </>
  )}
</View>

        {/* Operation Log Card */}
        {/* <View style={styles.card}>
          <View style={styles.logHeader}>
            <Text style={styles.cardTitle}>Operation Log</Text>
            <TouchableOpacity style={styles.viewAllRow}>
              <Text style={styles.viewAllText}>View All</Text>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#0D9488" />
            </TouchableOpacity>
          </View>

          <View style={styles.logRow}>
            <Text style={styles.logTime}>Today, 08:15 AM</Text>
            <View style={styles.logStatusContainer}>
              <Text style={styles.logStatusText}>Pump Started</Text>
              <View style={[styles.logStatusDot, { backgroundColor: '#10B981' }]} />
            </View>
          </View>

          <View style={styles.logDivider} />

          <View style={styles.logRow}>
            <Text style={styles.logTime}>Yesterday, 06:15 PM</Text>
            <View style={styles.logStatusContainer}>
              <Text style={styles.logStatusText}>Pump Stopped</Text>
              <View style={[styles.logStatusDot, { backgroundColor: '#6B7280' }]} />
            </View>
          </View>

          <View style={styles.logDivider} />

          <View style={styles.logRow}>
            <Text style={styles.logTime}>Yesterday, 08:15 AM</Text>
            <View style={styles.logStatusContainer}>
              <Text style={styles.logStatusText}>Pump Started</Text>
              <View style={[styles.logStatusDot, { backgroundColor: '#10B981' }]} />
            </View>
          </View>

        </View> */}

        <View style={styles.card}>
  <View style={styles.logHeader}>
    <Text style={styles.cardTitle}>Operation Log</Text>

    <TouchableOpacity style={styles.viewAllRow}>
      <Text style={styles.viewAllText}>View All</Text>

      <MaterialCommunityIcons
        name="chevron-right"
        size={20}
        color="#0D9488"
      />
    </TouchableOpacity>
  </View>

  {logsLoading ? (
    <Text style={styles.logTime}>
      Loading logs...
    </Text>
  ) : manualLogs.length === 0 ? (
    <Text style={styles.logTime}>
      No operation logs found
    </Text>
  ) : (
    manualLogs.map((log, index) => (
      <React.Fragment key={log.id}>
        <View style={styles.logRow}>
          <Text style={styles.logTime}>
            {new Date(log.created_at).toLocaleString([], {
              day: '2-digit',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>

          <View style={styles.logStatusContainer}>
            <Text style={styles.logStatusText}>
              {log.action === 'ON'
                ? 'Pump Started'
                : 'Pump Stopped'}
            </Text>

            <View
              style={[
                styles.logStatusDot,
                {
                  backgroundColor:
                    log.action === 'ON'
                      ? '#10B981'
                      : '#6B7280',
                },
              ]}
            />
          </View>
        </View>

        {index < manualLogs.length - 1 && (
          <View style={styles.logDivider} />
        )}
      </React.Fragment>
    ))
  )}
</View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  headerBorder: {
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E3A8A',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  statusCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pumpLargeIcon: {
    width: 56,
    height: 56,
    marginRight: 16,
  },
  statusTextContainer: {
    flex: 1,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 2,
  },
  statusDotGreen: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 6,
  },
  statusTextGreen: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '500',
  },
  statusSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  offBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  offBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 16,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  startButton: {
    flex: 1,
    backgroundColor: '#0D9488',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
  stopButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DC2626',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  stopButtonText: {
    color: '#DC2626',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
  scheduleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  scheduleLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scheduleLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 12,
  },
  timeInputBox: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  timeInputText: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 4,
  },
  saveButton: {
    backgroundColor: '#0D9488',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    marginTop: 16,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  logHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 13,
    color: '#0D9488',
    fontWeight: '500',
  },
  logRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logTime: {
    fontSize: 14,
    color: '#4B5563',
  },
  logStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logStatusText: {
    fontSize: 14,
    color: '#4B5563',
    marginRight: 8,
  },
  logStatusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  logDivider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 4,
  },

  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
    overflow: 'hidden',
  },

  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E5E7EB',
  },

  tabButtonActive: {
    backgroundColor: '#0D9488',
  },

  tabButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },

  tabButtonTextActive: {
    color: '#FFFFFF',
  },
});