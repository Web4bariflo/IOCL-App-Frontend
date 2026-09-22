import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { turnOnValve, turnOffValve, getEquipmentManualLogs } from '../../../api/mixingTankApi';

export default function SolenoidScreen() {
  const [activeTab, setActiveTab] = useState<
    'VALVE 1' | 'VALVE 2' | 'VALVE 3'
  >('VALVE 1');

  const [valveIds, setValveIds] = useState<number[]>([]);
  const [stageId, setStageId] = useState<number | null>(null);

  const [loading, setLoading] = useState(false);
  const [startedAt, setStartedAt] = useState<string | null>(null);
  const [endedAt, setEndedAt] = useState<string | null>(null);
  const [durationSeconds, setDurationSeconds] = useState<number | null>(null);
  const [valveState, setValveState] = useState<'ON' | 'OFF'>('OFF');
  const [manualLogs, setManualLogs] = useState<any[]>([]);
const [logsLoading, setLogsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedValveIds = await AsyncStorage.getItem(
          'mixingTankSolenoidValveIds'
        );

        const storedStageId = await AsyncStorage.getItem(
          'mixingTankStageId'
        );

        if (storedValveIds) {
          setValveIds(JSON.parse(storedValveIds));
        }

        if (storedStageId) {
          setStageId(Number(storedStageId));
        }

        console.log('Valve IDs:', storedValveIds);
        console.log('Mixing Tank Stage ID:', storedStageId);
      } catch (error) {
        console.log('Error loading valve data:', error);
      }
    };

    loadData();
  }, []);

  const getSelectedValveId = () => {
    if (activeTab === 'VALVE 1') {
      return valveIds[2];
    }

    if (activeTab === 'VALVE 2') {
      return valveIds[1];
    }

    return valveIds[0];
  };

  const loadManualLogs = async () => {
  try {
    if (stageId === null) {
      return;
    }

    const valveId = getSelectedValveId();

    if (!valveId) {
      return;
    }

    setLogsLoading(true);

    console.log('Loading logs for Valve ID:', valveId);
    console.log('Stage ID:', stageId);

    const response = await getEquipmentManualLogs(
      valveId,
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
  if (stageId !== null && valveIds.length > 0) {
    loadManualLogs();
  }
}, [stageId, valveIds, activeTab]);

  // const handleOpenValve = async () => {
  //   try {
  //     if (stageId === null) {
  //       console.log('Mixing Tank stage ID not found');
  //       return;
  //     }

  //     const valveId = getSelectedValveId();

  //     if (!valveId) {
  //       console.log('Selected valve ID not found');
  //       return;
  //     }

  //     setLoading(true);

  //     console.log('Selected Valve:', activeTab);
  //     console.log('Valve ID:', valveId);
  //     console.log('Stage ID:', stageId);

  //     const response = await turnOnValve(
  //       valveId,
  //       stageId
  //     );

  //     console.log('Valve ON Response:', response);

  //     if (response.success) {
  //       setStartedAt(response.data.started_at);
  //     }
  //   } catch (error) {
  //     console.log('Failed to turn ON valve:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const handleOpenValve = async () => {
    try {
      if (stageId === null) {
        console.log('Mixing Tank stage ID not found');
        return;
      }

      const valveId = getSelectedValveId();

      if (!valveId) {
        console.log('Selected valve ID not found');
        return;
      }

      setLoading(true);

      console.log('Selected Valve:', activeTab);
      console.log('Valve ID:', valveId);
      console.log('Stage ID:', stageId);

      const response = await turnOnValve(
        valveId,
        stageId
      );

      console.log('Valve ON Response:', response);

      if (response.success) {
        setStartedAt(response.data.started_at);
        setEndedAt(null);
        setDurationSeconds(null);
        setValveState('ON');
        await loadManualLogs();
      }

    } catch (error) {
      console.log('Failed to turn ON valve:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseValve = async () => {
    try {
      if (stageId === null) {
        console.log('Mixing Tank stage ID not found');
        return;
      }

      const valveId = getSelectedValveId();

      if (!valveId) {
        console.log('Selected valve ID not found');
        return;
      }

      setLoading(true);

      console.log('Selected Valve:', activeTab);
      console.log('Valve ID:', valveId);
      console.log('Stage ID:', stageId);

      const response = await turnOffValve(
        valveId,
        stageId
      );

      console.log('Valve OFF Response:', response);

      if (response.success) {
        setEndedAt(response.data.ended_at);
        setDurationSeconds(response.data.duration_seconds);
        setValveState('OFF');
        await loadManualLogs();
      }

    } catch (error) {
      console.log('Failed to turn OFF valve:', error);
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
          <Text style={styles.headerTitle}>Solenoid Valves</Text>
          <Text style={styles.headerSubtitle}>Manual Control</Text>
        </View>
        <View style={styles.backButton} />
      </View>
      <View style={styles.headerBorder} />

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Valve Status Card */}
        <View style={styles.card}>
          <View style={styles.statusCardContent}>
            <Image
              source={require('@/assets/images/solenoid.png')}
              style={styles.valveLargeIcon}
              resizeMode="contain"
            />
            <View style={styles.statusTextContainer}>
              <Text style={styles.statusTitle}>Valve Status</Text>
              <View style={styles.statusRow}>
                <View style={styles.statusDotGreen} />
                <Text style={styles.statusTextGreen}>Connected</Text>
              </View>
              <Text style={styles.statusSubtitle}>2 valves online</Text>
            </View>
            <View style={styles.activeBadge}>
              <Text style={styles.activeBadgeText}>ACTIVE</Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'VALVE 1' && styles.tabButtonActive]}
            onPress={() => setActiveTab('VALVE 1')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'VALVE 1' && styles.tabButtonTextActive]}>
              VALVE 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'VALVE 2' && styles.tabButtonActive]}
            onPress={() => setActiveTab('VALVE 2')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'VALVE 2' && styles.tabButtonTextActive]}>
              VALVE 2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'VALVE 3' && styles.tabButtonActive,
            ]}
            onPress={() => setActiveTab('VALVE 3')}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'VALVE 3' && styles.tabButtonTextActive,
              ]}
            >
              VALVE 3
            </Text>
          </TouchableOpacity>
        </View>

        {/* Manual Control Card */}
        <View style={styles.card}>
          {/* <Text style={styles.cardTitle}>Solenoid Valve {activeTab === 'VALVE 1' ? '1' : '2'}</Text> */}
          <Text style={styles.cardTitle}>
            Solenoid Valve {activeTab.replace('VALVE ', '')}
          </Text>
          <Text style={styles.cardSubtitle}>Manual flow control</Text>
          <View style={styles.actionButtonsContainer}>
            {/* <TouchableOpacity style={styles.openButton}>
              <MaterialCommunityIcons name="pipe-valve" size={24} color="#FFFFFF" />
              <Text style={styles.openButtonText}>OPEN VALVE</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={styles.openButton}
              onPress={handleOpenValve}
              disabled={loading}
            >
              <MaterialCommunityIcons
                name="pipe-valve"
                size={24}
                color="#FFFFFF"
              />

              <Text style={styles.openButtonText}>
                {loading ? 'OPENING...' : 'OPEN VALVE'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleCloseValve}
              disabled={loading}
            >
              <MaterialCommunityIcons name="stop-circle-outline" size={24} color="#DC2626" />
              <Text style={styles.closeButtonText}>
                {loading ? 'CLOSING...' : 'CLOSE VALVE'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Valve Schedule Card */}


        <View style={styles.card}>
          <Text style={styles.cardTitle}>Valve Schedule</Text>

          <Text style={styles.cardSubtitle}>
            Set the pump operation window
          </Text>

          {/* After OPEN VALVE */}
          {valveState === 'ON' && (
            <View style={styles.scheduleRow}>
              <View style={styles.scheduleLabelContainer}>
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={22}
                  color="#1A5B9C"
                />

                <Text style={styles.scheduleLabel}>
                  Open Time
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

          {/* After CLOSE VALVE */}
          {valveState === 'OFF' && endedAt && (
            <>
              <View style={styles.scheduleRow}>
                <View style={styles.scheduleLabelContainer}>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    size={22}
                    color="#DC2626"
                  />

                  <Text style={styles.scheduleLabel}>
                    Close Time
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
                    name="timer-outline"
                    size={22}
                    color="#1A5B9C"
                  />

                  <Text style={styles.scheduleLabel}>
                    Open Duration
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

        <View style={styles.infoRow}>
          <MaterialCommunityIcons name="information-outline" size={16} color="#6B7280" />
          <Text style={styles.infoText}>Switch to Valve 2 to view its schedule and history.</Text>
        </View>

        {/* Valve Activity Log Card */}
       <View style={styles.card}>
  <View style={styles.logHeader}>
    <Text style={styles.cardTitle}>Valve Activity Log</Text>

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
                ? 'Valve Opened'
                : 'Valve Closed'}
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
  valveLargeIcon: {
    width: 50,
    height: 50,
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
  activeBadge: {
    backgroundColor: '#0D9488',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  activeBadgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
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
  openButton: {
    flex: 1,
    backgroundColor: '#0D9488',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  openButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
    marginLeft: 6,
  },
  closeButton: {
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
  closeButtonText: {
    color: '#DC2626',
    fontWeight: '600',
    fontSize: 13,
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
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  infoText: {
    fontSize: 13,
    color: '#6B7280',
    marginLeft: 6,
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
});