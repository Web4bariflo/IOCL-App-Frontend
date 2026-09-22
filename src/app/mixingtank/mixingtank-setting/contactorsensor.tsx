import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { getSensors, getEquipmentManualLogs } from '../../../api/mixingTankApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ContactorSensorScreen() {
  const [activeTab, setActiveTab] = useState<'SENSOR 1' | 'SENSOR 2'>('SENSOR 1');
  const [sensorCount, setSensorCount] = useState(0);
  const [onlineSensorCount, setOnlineSensorCount] = useState(0);
  const [sensors, setSensors] = useState<any[]>([]);
  const [sensorLogs, setSensorLogs] = useState<any[]>([]);

  const loadSensorLogs = async () => {
    try {
      const storedStageId = await AsyncStorage.getItem(
        'mixingTankStageId'
      );

      const storedSensorIds = await AsyncStorage.getItem(
        'mixingTankContactorSensorIds'
      );

      if (!storedStageId) {
        console.log('Mixing Tank Stage ID not found');
        return;
      }

      if (!storedSensorIds) {
        console.log('Contactor Sensor IDs not found');
        return;
      }

      const stageId = Number(storedStageId);
      const sensorIds = JSON.parse(storedSensorIds);

      const equipmentId =
        activeTab === 'SENSOR 1'
          ? sensorIds[0]
          : sensorIds[1];

      if (!equipmentId) {
        console.log('Equipment ID not found for:', activeTab);
        return;
      }

      console.log('Active Sensor:', activeTab);
      console.log('Stage ID:', stageId);
      console.log('Equipment ID:', equipmentId);

      const response = await getEquipmentManualLogs(
        equipmentId,
        stageId
      );

      if (response.success) {
        setSensorLogs(response.data.slice(0, 3));
      }
    } catch (error) {
      console.log('Failed to load sensor logs:', error);
    }
  };

  // useEffect(() => {
  //   const loadSensors = async () => {
  //     try {
  //       const storedStageId = await AsyncStorage.getItem(
  //         'mixingTankStageId'
  //       );

  //       if (!storedStageId) {
  //         console.log('Mixing Tank Stage ID not found');
  //         return;
  //       }

  //       const stageId = Number(storedStageId);

  //       const response = await getSensors(stageId);

  //       if (response.success) {
  //         setSensors(response.sensors);
  //         setSensorCount(response.sensor_count);

  //         const onlineCount = response.sensors.filter(
  //           (sensor: any) => sensor.current_state === 'ON'
  //         ).length;

  //         setOnlineSensorCount(onlineCount);
  //       }
  //     } catch (error) {
  //       console.log('Failed to load sensors:', error);
  //     }
  //   };

  //   // Call immediately
  //   loadSensors();

  //   // Call every 5 seconds
  //   const interval = setInterval(() => {
  //     loadSensors();
  //   }, 5000);

  //   // Clear interval when screen is removed
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    const loadSensors = async () => {
      try {
        const storedStageId = await AsyncStorage.getItem(
          'mixingTankStageId'
        );

        if (!storedStageId) {
          console.log('Mixing Tank Stage ID not found');
          return;
        }

        const stageId = Number(storedStageId);

        const response = await getSensors(stageId);

        if (response.success) {
          setSensors(response.sensors);
          setSensorCount(response.sensor_count);

          const onlineCount = response.sensors.filter(
            (sensor: any) => sensor.current_state === 'ON'
          ).length;

          setOnlineSensorCount(onlineCount);
        }
      } catch (error) {
        console.log('Failed to load sensors:', error);
      }
    };

    // Call immediately
    loadSensors();
    loadSensorLogs();

    // Call every 5 seconds
    const interval = setInterval(() => {
      loadSensors();
      loadSensorLogs();
    }, 5000);

    // Clear interval
    return () => {
      clearInterval(interval);
    };
  }, [activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/mixingtank/settings')}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#1E3A8A" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Contactless Sensors</Text>
          <Text style={styles.headerSubtitle}>Manual Control</Text>
        </View>
        <View style={styles.backButton} />
      </View>
      <View style={styles.headerBorder} />

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Sensor Status Card */}
        <View style={styles.card}>
          <View style={styles.statusCardContent}>
            <Image
              source={require('@/assets/images/contactor.png')}
              style={styles.sensorLargeIcon}
              resizeMode="contain"
            />
            <View style={styles.statusTextContainer}>
              <Text style={styles.statusTitle}>Sensor Status</Text>
              <View style={styles.statusRow}>
                <View
                  style={[
                    styles.statusDotGreen,
                    {
                      backgroundColor:
                        onlineSensorCount > 0 ? '#10B981' : '#6B7280',
                    },
                  ]}
                />

                <Text
                  style={[
                    styles.statusTextGreen,
                    {
                      color:
                        onlineSensorCount > 0 ? '#10B981' : '#6B7280',
                    },
                  ]}
                >
                  {onlineSensorCount > 0 ? 'Connected' : 'Disconnected'}
                </Text>
              </View>
              <Text style={styles.statusSubtitle}>
                {onlineSensorCount === sensorCount
                  ? `${sensorCount} sensors online`
                  : `${sensorCount} sensors offline`}
              </Text>
            </View>
            <View
              style={[
                styles.activeBadge,
                {
                  backgroundColor:
                    onlineSensorCount > 0 ? '#0D9488' : '#6B7280',
                },
              ]}
            >
              <Text style={styles.activeBadgeText}>
                {onlineSensorCount > 0 ? 'ACTIVE' : 'OFFLINE'}
              </Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'SENSOR 1' && styles.tabButtonActive]}
            onPress={() => setActiveTab('SENSOR 1')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'SENSOR 1' && styles.tabButtonTextActive]}>
              SENSOR 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'SENSOR 2' && styles.tabButtonActive]}
            onPress={() => setActiveTab('SENSOR 2')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'SENSOR 2' && styles.tabButtonTextActive]}>
              SENSOR 2
            </Text>
          </TouchableOpacity>
        </View>

        {/* Detection Log Card */}
        <View style={styles.card}>
          <View style={styles.logHeader}>
            <Text style={styles.cardTitle}>Detection Log</Text>
            <TouchableOpacity style={styles.viewAllRow}>
              <Text style={styles.viewAllText}>View All</Text>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#0D9488" />
            </TouchableOpacity>
          </View>

          {/* <View style={styles.logRow}>
            <Text style={styles.logTime}>Today, 09:42 AM</Text>
            <View style={styles.logStatusContainer}>
              <Text style={styles.logStatusText}>Object Detected</Text>
              <View style={[styles.logStatusDot, { backgroundColor: '#10B981' }]} />
            </View>
          </View>

          <View style={styles.logDivider} />

          <View style={styles.logRow}>
            <Text style={styles.logTime}>Today, 08:15 AM</Text>
            <View style={styles.logStatusContainer}>
              <Text style={styles.logStatusText}>Monitoring Started</Text>
              <View style={[styles.logStatusDot, { backgroundColor: '#10B981' }]} />
            </View>
          </View>

          <View style={styles.logDivider} />

          <View style={styles.logRow}>
            <Text style={styles.logTime}>Yesterday, 06:15 PM</Text>
            <View style={styles.logStatusContainer}>
              <Text style={styles.logStatusText}>Monitoring Stopped</Text>
              <View style={[styles.logStatusDot, { backgroundColor: '#6B7280' }]} />
            </View>
          </View> */}

          {sensorLogs.map((log, index) => (
            <React.Fragment key={log.id}>
              <View style={styles.logRow}>
                <Text style={styles.logTime}>
                  {new Date(log.created_at).toLocaleDateString([], {
                    day: '2-digit',
                    month: 'short',
                  })}{' '}
                  {new Date(log.created_at).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                  })}
                </Text>

                <View style={styles.logStatusContainer}>
                  <Text style={styles.logStatusText}>
                    {log.action === 'ON'
                      ? 'Monitoring Started'
                      : 'Monitoring Stopped'}
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

              {index < sensorLogs.length - 1 && (
                <View style={styles.logDivider} />
              )}
            </React.Fragment>
          ))}

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
  sensorLargeIcon: {
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
    backgroundColor: '#FFFFFF',
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
    fontSize: 13,
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
  logDate: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 2,
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