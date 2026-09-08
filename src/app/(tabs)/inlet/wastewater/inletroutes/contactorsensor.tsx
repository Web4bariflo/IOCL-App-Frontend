import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function ContactorSensorScreen() {
  const [activeTab, setActiveTab] = useState<'SENSOR 1' | 'SENSOR 2'>(
    'SENSOR 1'
  );

  //   const [isPowerOn, setIsPowerOn] = useState(false);
  //   const [sensor1Status, setSensor1Status] = useState('INACTIVE');
  // const [sensor2Status, setSensor2Status] = useState('INACTIVE');
  const [sensor1Status, setSensor1Status] = useState('INACTIVE');
  const [sensor2Status, setSensor2Status] = useState('INACTIVE')

  // const handlePowerOn = async () => {
  //   try {
  //     const stageId = await AsyncStorage.getItem('selectedStageId');

  //     console.log('Selected Stage ID:', stageId);

  //     if (!stageId) {
  //       console.log('Stage ID not found');
  //       return;
  //     }

  //     const motorId = 2;

  //     const response = await turnOnMotor(
  //       motorId,
  //       Number(stageId)
  //     );

  //     console.log('Motor ON Response:', response);

  //     if (response.status === 'ACTIVE') {
  //       setIsPowerOn(true);

  //       const sensors = response.sensors || [];

  //       const sensor1 = sensors.find(
  //         (sensor: any) => sensor.id === 3
  //       );

  //       const sensor2 = sensors.find(
  //         (sensor: any) => sensor.id === 4
  //       );

  //       setSensor1Status(
  //         sensor1?.status || 'INACTIVE'
  //       );

  //       setSensor2Status(
  //         sensor2?.status || 'INACTIVE'
  //       );
  //     }
  //   } catch (error) {
  //     console.error('Failed to power on:', error);
  //   }
  // };

  useFocusEffect(
    useCallback(() => {
      const loadSensorStatus = async () => {
        try {
          const sensor1 = await AsyncStorage.getItem('sensor1Status');
          const sensor2 = await AsyncStorage.getItem('sensor2Status');

          console.log('Sensor 1 Status:', sensor1);
          console.log('Sensor 2 Status:', sensor2);

          setSensor1Status(sensor1 || 'INACTIVE');
          setSensor2Status(sensor2 || 'INACTIVE');
        } catch (error) {
          console.error('Error loading sensor status:', error);
        }
      };

      loadSensorStatus();
    }, [])
  );

  const activeSensorCount = [
    sensor1Status,
    sensor2Status,
  ].filter(status => status === 'ACTIVE').length;

  const selectedSensorStatus =
    activeTab === 'SENSOR 1'
      ? sensor1Status
      : sensor2Status;


  return (
    <SafeAreaView style={styles.container}>

      {/* ================= HEADER ================= */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.navigate('/inlet/wastewater/settings')}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="#1E3A8A"
          />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>
            Contactless Sensors
          </Text>

          <Text style={styles.headerSubtitle}>
            Manual Control
          </Text>
        </View>

        {/* Empty space for alignment */}
        <View style={styles.backButton} />
      </View>

      <View style={styles.headerBorder} />

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* ================= SENSOR STATUS CARD ================= */}
        <View style={styles.card}>
          <View style={styles.statusCardContent}>

            <Image
              source={require('@/assets/images/contactor.png')}
              style={styles.sensorLargeIcon}
              resizeMode="contain"
            />

            <View style={styles.statusTextContainer}>
              <Text style={styles.statusTitle}>
                Sensor Status
              </Text>

              {/* <View style={styles.statusRow}>
                <View
                  style={[
                    styles.statusDotGreen,
                    {
                      backgroundColor: isPowerOn
                        ? '#10B981'
                        : '#9CA3AF',
                    },
                  ]}
                />

                <Text
                  style={[
                    styles.statusTextGreen,
                    {
                      color: isPowerOn
                        ? '#10B981'
                        : '#6B7280',
                    },
                  ]}
                >
                  {isPowerOn ? 'Connected' : 'Offline'}
                </Text>
              </View>

              <Text style={styles.statusSubtitle}>
                {isPowerOn
                  ? '2 sensors online'
                  : '2 sensors offline'}
              </Text> */}

              <View style={styles.statusRow}>
                <View
                  style={[
                    styles.statusDotGreen,
                    {
                      backgroundColor:
                        activeSensorCount > 0
                          ? '#10B981'
                          : '#9CA3AF',
                    },
                  ]}
                />

                <Text
                  style={[
                    styles.statusTextGreen,
                    {
                      color:
                        activeSensorCount > 0
                          ? '#10B981'
                          : '#6B7280',
                    },
                  ]}
                >
                  {activeSensorCount > 0 ? 'Connected' : 'Offline'}
                </Text>
              </View>

              <Text style={styles.statusSubtitle}>
                {activeSensorCount === 2
                  ? '2 sensors online'
                  : activeSensorCount === 1
                    ? '1 sensor online'
                    : '2 sensors offline'}
              </Text>
            </View>
            {/* 
            <View
              style={[
                styles.statusBadge,
                {
                  backgroundColor: isPowerOn
                    ? '#0D9488'
                    : '#F3F4F6',
                },
              ]}
            >
              <Text
                style={[
                  styles.statusBadgeText,
                  {
                    color: isPowerOn
                      ? '#FFFFFF'
                      : '#6B7280',
                  },
                ]}
              >
                {isPowerOn ? 'ACTIVE' : 'OFF'}
              </Text>
            </View> */}

            <View
              style={[
                styles.statusBadge,
                {
                  backgroundColor:
                    activeSensorCount > 0
                      ? '#0D9488'
                      : '#F3F4F6',
                },
              ]}
            >
              <Text
                style={[
                  styles.statusBadgeText,
                  {
                    color:
                      activeSensorCount > 0
                        ? '#FFFFFF'
                        : '#6B7280',
                  },
                ]}
              >
                {activeSensorCount > 0 ? 'ACTIVE' : 'OFF'}
              </Text>
            </View>

          </View>
        </View>

        {/* ================= SENSOR TABS ================= */}
        <View style={styles.tabsContainer}>

          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'SENSOR 1' &&
              styles.tabButtonActive,
            ]}
            onPress={() => setActiveTab('SENSOR 1')}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'SENSOR 1' &&
                styles.tabButtonTextActive,
              ]}
            >
              SENSOR 1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'SENSOR 2' &&
              styles.tabButtonActive,
            ]}
            onPress={() => setActiveTab('SENSOR 2')}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'SENSOR 2' &&
                styles.tabButtonTextActive,
              ]}
            >
              SENSOR 2
            </Text>
          </TouchableOpacity>

        </View>

        {/* ================= POWER CONTROL ================= */}
        {/* <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Sensor Power Control
          </Text>

          <Text style={styles.cardSubtitle}>
            Turn the selected sensor ON or OFF
          </Text>

          <TouchableOpacity
            style={[
              styles.powerButton,
              isPowerOn && styles.powerButtonOn,
            ]}
            onPress={() => setIsPowerOn(!isPowerOn)}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons
              name="power"
              size={26}
              color="#FFFFFF"
            />

            <Text style={styles.powerButtonText}>
              {isPowerOn ? 'POWER ON' : 'POWER OFF'}
            </Text>
          </TouchableOpacity>

        </View> */}

        {/* ================= DETECTION LOG ================= */}
        <View style={styles.card}>

          <View style={styles.logHeader}>
            <Text style={styles.cardTitle}>
              Detection Log
            </Text>

            <TouchableOpacity style={styles.viewAllRow}>
              <Text style={styles.viewAllText}>
                View All
              </Text>

              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color="#0D9488"
              />
            </TouchableOpacity>
          </View>

          {/* Log 1 */}
          <View style={styles.logRow}>
            <Text style={styles.logTime}>
              Today, 09:42 AM
            </Text>

            <View style={styles.logStatusContainer}>
              <Text style={styles.logStatusText}>
                Object Detected
              </Text>

              <View
                style={[
                  styles.logStatusDot,
                  { backgroundColor: '#10B981' },
                ]}
              />
            </View>
          </View>

          <View style={styles.logDivider} />

          {/* Log 2 */}
          <View style={styles.logRow}>
            <Text style={styles.logTime}>
              Today, 08:15 AM
            </Text>

            <View style={styles.logStatusContainer}>
              <Text style={styles.logStatusText}>
                Monitoring Started
              </Text>

              <View
                style={[
                  styles.logStatusDot,
                  { backgroundColor: '#10B981' },
                ]}
              />
            </View>
          </View>

          <View style={styles.logDivider} />

          {/* Log 3 */}
          <View style={styles.logRow}>
            <Text style={styles.logTime}>
              Yesterday, 06:15 PM
            </Text>

            <View style={styles.logStatusContainer}>
              <Text style={styles.logStatusText}>
                Monitoring Stopped
              </Text>

              <View
                style={[
                  styles.logStatusDot,
                  { backgroundColor: '#6B7280' },
                ]}
              />
            </View>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
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

  /* ================= SCROLL ================= */

  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },

  /* ================= CARD ================= */

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

  /* ================= SENSOR STATUS ================= */

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
    marginRight: 6,
  },

  statusTextGreen: {
    fontSize: 14,
    fontWeight: '500',
  },

  statusSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },

  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },

  statusBadgeText: {
    fontSize: 13,
    fontWeight: '600',
  },

  /* ================= TABS ================= */

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

  /* ================= POWER CONTROL ================= */

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

  powerButton: {
    height: 48,
    backgroundColor: '#DC2626',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  powerButtonOn: {
    backgroundColor: '#0D9488',
  },

  powerButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 8,
  },

  /* ================= LOG ================= */

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