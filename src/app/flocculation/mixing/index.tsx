
import React, {
  useCallback,
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { router } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFocusEffect } from '@react-navigation/native';

import {
  getStageStatus,
  startTreatmentStage,
  stopTreatmentStage,
  getStageProcessLogs,
} from '@/api/inletApi';

export default function FlocculationMixingScreen() {
  // =====================================================
  // UI TOGGLE STATES
  // =====================================================

  const [solenoidActive, setSolenoidActive] =
    useState(false);

  const [inletPumpActive, setInletPumpActive] =
    useState(false);

  const [contactorActive, setContactorActive] =
    useState(false);

  const [motorActive, setMotorActive] =
    useState(false);

  // =====================================================
  // SYSTEM RUNNING
  // =====================================================

  const [isSystemRunning, setIsSystemRunning] =
    useState(false);

  // =====================================================
  // API DATA
  // =====================================================

  const [stageData, setStageData] =
    useState<any>(null);

  const [processLogs, setProcessLogs] =
    useState<any[]>([]);

  // =====================================================
  // FETCH STAGE STATUS
  // =====================================================

  const fetchStageStatus =
    useCallback(async () => {
      try {
        const stageId =
          await AsyncStorage.getItem(
            'flocculationMixingStageId'
          );

      
        console.log(
          'Stored Flocculation Mixing Stage ID:',
          stageId
        );


        if (!stageId) {
          console.log(
            '❌ Flocculation Mixing Stage ID not found'
          );

          return;
        }

        const numericStageId =
          Number(stageId);

        if (isNaN(numericStageId)) {
          console.log(
            '❌ Invalid Stage ID:',
            stageId
          );

          return;
        }

        console.log(
          'Calling Flocculation Mixing Stage Status API:',
          numericStageId
        );

        const response =
          await getStageStatus(
            numericStageId
          );

        console.log(
          'Flocculation Mixing Stage Status:',
          JSON.stringify(
            response,
            null,
            2
          )
        );

        if (
          response?.success &&
          response?.data
        ) {
          setStageData(
            response.data
          );

          const stageStatus =
            String(
              response.data?.status || ''
            ).toUpperCase();

          console.log(
            'Current Flocculation Mixing Status:',
            stageStatus
          );

          // ==========================================
          // SYSTEM STATUS
          // ==========================================

          if (
            stageStatus === 'RUNNING' ||
            stageStatus === 'IN_PROGRESS'
          ) {
            setIsSystemRunning(true);
          }

          if (
            stageStatus === 'COMPLETED' ||
            stageStatus === 'STOPPED'
          ) {
            setIsSystemRunning(false);
          }

          // ==========================================
          // EQUIPMENT LOG
          // ==========================================

          console.log(
            'Flocculation Mixing Equipment:',
            JSON.stringify(
              response.data?.equipment,
              null,
              2
            )
          );

          console.log(
            'Flocculation Mixing Processes:',
            JSON.stringify(
              response.data?.processes,
              null,
              2
            )
          );
        }
      } catch (error: any) {
        console.log(
          '❌ Flocculation Mixing Stage Status Error:',
          error.response?.data ||
            error.message
        );
      }
    }, []);

  // =====================================================
  // FETCH PROCESS LOGS
  // =====================================================

  const fetchStageProcessLogs =
    useCallback(async () => {
      try {
        const stageId =
          await AsyncStorage.getItem(
            'flocculationMixingStageId'
          );

        console.log(
          'Flocculation Mixing Process Logs Stage ID:',
          stageId
        );

        if (!stageId) {
          console.log(
            '❌ Stage ID not found'
          );

          return;
        }

        const numericStageId =
          Number(stageId);

        if (isNaN(numericStageId)) {
          console.log(
            '❌ Invalid Stage ID:',
            stageId
          );

          return;
        }

        const response =
          await getStageProcessLogs(
            numericStageId
          );

        console.log(
          'Coagulation Mixing Process Logs:',
          JSON.stringify(
            response,
            null,
            2
          )
        );

        if (
          response?.success &&
          Array.isArray(
            response?.data
          )
        ) {
          setProcessLogs(
            response.data
          );
        } else {
          setProcessLogs([]);
        }
      } catch (error: any) {
        console.log(
          '❌ Coagulation Mixing Process Logs Error:',
          error.response?.data ||
            error.message
        );
      }
    }, []);

  // =====================================================
  // START SYSTEM
  // =====================================================

  const handleStartSystem =
    async () => {
      try {
        if (isSystemRunning) {
          return;
        }

        const stageId =
          await AsyncStorage.getItem(
            'flocculationMixingStageId'
          );

        console.log(
          'Start Flocculation Mixing Stage ID:',
          stageId
        );

        if (!stageId) {
          console.log(
            '❌ Stage ID not found'
          );

          return;
        }

        const numericStageId =
          Number(stageId);

        if (isNaN(numericStageId)) {
          console.log(
            '❌ Invalid Stage ID'
          );

          return;
        }

        console.log(
          '🚀 Starting Flocculation Mixing Stage:',
          numericStageId
        );

        const response =
          await startTreatmentStage(
            numericStageId
          );

        console.log(
          'Start Flocculation Mixing Response:',
          JSON.stringify(
            response,
            null,
            2
          )
        );

        if (response?.success) {
          setIsSystemRunning(true);

          await fetchStageProcessLogs();
        }
      } catch (error: any) {
        console.log(
          '❌ Start Coagulation Mixing Error:',
          error.response?.data ||
            error.message
        );
      }
    };

  // =====================================================
  // STOP SYSTEM
  // =====================================================

  const handleStopSystem =
    async () => {
      try {
        const stageId =
          await AsyncStorage.getItem(
            'flocculationMixingStageId'
          );

        if (!stageId) {
          console.log(
            '❌ Stage ID not found'
          );

          return;
        }

        const numericStageId =
          Number(stageId);

        if (isNaN(numericStageId)) {
          console.log(
            '❌ Invalid Stage ID'
          );

          return;
        }

        console.log(
          '🛑 Stopping Coagulation Mixing Stage:',
          numericStageId
        );

        const response =
          await stopTreatmentStage(
            numericStageId
          );

        console.log(
          'Stop Coagulation Mixing Response:',
          JSON.stringify(
            response,
            null,
            2
          )
        );

        if (response?.success) {
          setIsSystemRunning(false);

          await fetchStageStatus();

          await fetchStageProcessLogs();
        }
      } catch (error: any) {
        console.log(
          '❌ Stop Coagulation Mixing Error:',
          error.response?.data ||
            error.message
        );
      }
    };

  // =====================================================
  // FORMAT ISO TIME
  // =====================================================

  const formatTime = (
    timestamp?: string | null
  ) => {
    if (!timestamp) {
      return '--';
    }

    const date =
      new Date(timestamp);

    if (
      isNaN(
        date.getTime()
      )
    ) {
      return '--';
    }

    return date.toLocaleTimeString(
      'en-IN',
      {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
    );
  };

  // =====================================================
  // FORMAT HH:MM:SS TIME
  // =====================================================

  const formatOnlyTime = (
    time?: string | null
  ) => {
    if (!time) {
      return '--';
    }

    const parts =
      time.split(':');

    if (parts.length < 2) {
      return '--';
    }

    const hours =
      Number(parts[0]);

    const minutes =
      Number(parts[1]);

    const seconds =
      Number(parts[2] || 0);

    if (
      isNaN(hours) ||
      isNaN(minutes) ||
      isNaN(seconds)
    ) {
      return '--';
    }

    const date =
      new Date();

    date.setHours(
      hours,
      minutes,
      seconds,
      0
    );

    return date.toLocaleTimeString(
      'en-IN',
      {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
    );
  };

  // =====================================================
  // POLLING
  // =====================================================

  useFocusEffect(
    useCallback(() => {
      fetchStageStatus();

      fetchStageProcessLogs();

      const interval =
        setInterval(() => {
          fetchStageStatus();

          fetchStageProcessLogs();
        }, 3000);

      return () => {
        clearInterval(
          interval
        );
      };
    }, [
      fetchStageStatus,
      fetchStageProcessLogs,
    ])
  );

  // =====================================================
  // EQUIPMENT
  // =====================================================

  const equipment =
    stageData?.equipment || [];

  // Solenoid Valve
  const valves =
    equipment.filter(
      (item: any) =>
        item.equipment_type ===
        'Solenoid Valves'
    );

  // Inlet Pump
  const inletPump =
    equipment.find(
      (item: any) =>
        item.equipment_type ===
        'Inlet Pump 1'
    );

  // Sensors
  const contactorSensors =
    equipment.filter(
      (item: any) =>
        item.equipment_type ===
        'Contactor Sensors'
    );

  // Motor
  const motor =
    equipment.find(
      (item: any) =>
        item.equipment_type ===
        'Motor'
    );

  // =====================================================
  // GET PROCESS EQUIPMENT
  // =====================================================
  //
  // process.equipment is empty in your API response.
  // Therefore we identify equipment from process_name.
  //

 const getProcessEquipment =
  (processName: string) => {
    const name =
      processName
        .toLowerCase()
        .trim();

    if (
      name === 'valve open' ||
      name === 'valve close'
    ) {
      return valves;
    }

    if (
      name === 'pump motor start' ||
      name === 'pump motor stop'
    ) {
      return inletPump
        ? [inletPump]
        : [];
    }

    if (
      name === 'sensor on' ||
      name === 'sensor off'
    ) {
      // Return BOTH sensors
      return contactorSensors;
    }

    if (
      name === 'motor on' ||
      name === 'motor off'
    ) {
      return motor
        ? [motor]
        : [];
    }

    return [];
  };
  // =====================================================
  // TOGGLE
  // =====================================================

  const Toggle = ({
    active,
    onPress,
  }: {
    active: boolean;
    onPress: () => void;
  }) => (
    <TouchableOpacity
      style={
        styles.toggleContainer
      }
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.toggleSide,
          active &&
            styles.toggleSideActive,
        ]}
      >
        <Text
          style={[
            styles.toggleText,
            active &&
              styles.toggleTextActive,
          ]}
        >
          ACTIVE
        </Text>
      </View>

      <View
        style={[
          styles.toggleSide,
          !active &&
            styles.toggleSideActive,
        ]}
      >
        <Text
          style={[
            styles.toggleText,
            !active &&
              styles.toggleTextActive,
          ]}
        >
          DEACTIVE
        </Text>
      </View>
    </TouchableOpacity>
  );

  // =====================================================
  // UI
  // =====================================================

  return (
    <SafeAreaView
      style={styles.container}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
      />

      {/* =================================================
          HEADER
      ================================================= */}

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() =>
            router.replace(
              '/(tabs)/dashboard'
            )
          }
          activeOpacity={0.7}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#1a1a1a"
          />
        </TouchableOpacity>

        <View
          style={
            styles.headerTitle
          }
        >
          <Text
            style={styles.title}
          >
            Coagulant Mixing
          </Text>

          <Text
            style={styles.subtitle}
          >
            Automatic Mode
          </Text>
        </View>

        <View
          style={
            styles.offlineBadge
          }
        >
          <Text
            style={
              styles.offlineText
            }
          >
            Offline
          </Text>
        </View>

      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={
          styles.scrollContent
        }
        showsVerticalScrollIndicator={
          false
        }
      >

        {/* =================================================
            SYSTEM OVERVIEW
        ================================================= */}

        <View style={styles.card}>

          <Text
            style={
              styles.cardTitle
            }
          >
            System Overview
          </Text>

          <TouchableOpacity
            style={[
              styles.startBtn,
              isSystemRunning &&
                styles.startBtnDisabled,
            ]}
            activeOpacity={0.85}
            onPress={
              handleStartSystem
            }
            disabled={
              isSystemRunning
            }
          >
            <Ionicons
              name="power"
              size={20}
              color="#fff"
            />

            <Text
              style={
                styles.startBtnText
              }
            >
              {isSystemRunning
                ? 'SYSTEM RUNNING'
                : 'START SYSTEM'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              styles.stopBtn
            }
            activeOpacity={0.85}
            onPress={
              handleStopSystem
            }
            disabled={
              !isSystemRunning
            }
          >
            <Ionicons
              name="stop"
              size={20}
              color="#ef5350"
            />

            <Text
              style={
                styles.stopBtnText
              }
            >
              STOP SYSTEM
            </Text>
          </TouchableOpacity>

        </View>

        {/* =================================================
            SOLENOID VALVES
        ================================================= */}

        <View style={styles.card}>

          <View
            style={
              styles.rowBetween
            }
          >

            <View
              style={styles.row}
            >

              <MaterialCommunityIcons
                name="pipe-valve"
                size={28}
                color="#1e88e5"
              />

              <View
                style={{
                  marginLeft: 12,
                }}
              >

                <Text
                  style={
                    styles.sectionTitle
                  }
                >
                  Solenoid Valves
                </Text>

                <Text
                  style={
                    styles.sectionSub
                  }
                >
                  {valves.length}{' '}
                  Valve
                  {valves.length !== 1
                    ? 's'
                    : ''}
                </Text>

              </View>

            </View>

            <Toggle
              active={valves.some(
                (valve: any) =>
                  String(
                    valve.status
                  ).toUpperCase() ===
                  'ACTIVE'
              )}
              onPress={() =>
                setSolenoidActive(
                  !solenoidActive
                )
              }
            />

          </View>

          <View
            style={
              styles.divider
            }
          />

          {valves.map(
            (valve: any) => {
              const isOn =
                String(
                  valve.current_state
                ).toUpperCase() ===
                'ON';

              return (
                <View
                  key={valve.id}
                  style={
                    styles.itemRow
                  }
                >

                  <Text
                    style={
                      styles.itemLabel
                    }
                  >
                    {valve.name}
                  </Text>

                  <View
                    style={
                      styles.statusRight
                    }
                  >

                    <Text
                      style={[
                        styles.statusText,
                        {
                          color: isOn
                            ? '#2e7d32'
                            : '#616161',
                        },
                      ]}
                    >
                      {isOn
                        ? 'Open'
                        : 'Closed'}
                    </Text>

                    <View
                      style={[
                        styles.dot,
                        {
                          backgroundColor:
                            isOn
                              ? '#2e7d32'
                              : '#9e9e9e',
                        },
                      ]}
                    />

                  </View>

                </View>
              );
            }
          )}

        </View>

        {/* =================================================
            INLET PUMP
        ================================================= */}

        <View style={styles.card}>

          <View
            style={
              styles.rowBetween
            }
          >

            <View
              style={styles.row}
            >

              <MaterialCommunityIcons
                name="pump"
                size={28}
                color="#1e88e5"
              />

              <View
                style={{
                  marginLeft: 12,
                }}
              >

                <Text
                  style={
                    styles.sectionTitle
                  }
                >
                  Inlet Pump 1
                </Text>

                <Text
                  style={
                    styles.sectionSub
                  }
                >
                  {inletPump?.status ||
                    'INACTIVE'}
                </Text>

              </View>

            </View>

            <Toggle
              active={
                String(
                  inletPump?.status
                ).toUpperCase() ===
                'ACTIVE'
              }
              onPress={() =>
                setInletPumpActive(
                  !inletPumpActive
                )
              }
            />

          </View>

          <View
            style={
              styles.divider
            }
          />

          <View
            style={
              styles.itemRow
            }
          >

            <View>

              <Text
                style={
                  styles.itemLabelSmall
                }
              >
                Status
              </Text>

              <Text
                style={
                  styles.itemLabel
                }
              >
                {inletPump?.current_state ||
                  '--'}
              </Text>

            </View>

            <View
              style={{
                alignItems:
                  'flex-end',
              }}
            >

              <Text
                style={
                  styles.itemLabelSmall
                }
              >
                {String(
                  inletPump?.current_state
                ).toUpperCase() ===
                'ON'
                  ? 'Start Time'
                  : 'End Time'}
              </Text>

              <Text
                style={
                  styles.itemLabel
                }
              >
                {String(
                  inletPump?.current_state
                ).toUpperCase() ===
                'ON'
                  ? formatOnlyTime(
                      inletPump?.start_time
                    )
                  : formatOnlyTime(
                      inletPump?.end_time
                    )}
              </Text>

            </View>

          </View>

        </View>

        {/* =================================================
            CONTACTOR SENSORS
        ================================================= */}

        <View style={styles.card}>

          <View
            style={
              styles.rowBetween
            }
          >

            <View
              style={styles.row}
            >

              <Ionicons
                name="swap-vertical"
                size={28}
                color="#1e88e5"
              />

              <View
                style={{
                  marginLeft: 12,
                }}
              >

                <Text
                  style={
                    styles.sectionTitle
                  }
                >
                  Contactor Sensors
                </Text>

                <Text
                  style={
                    styles.sectionSub
                  }
                >
                  {contactorSensors.length}{' '}
                  Sensors
                </Text>

              </View>

            </View>

            <Toggle
              active={contactorSensors.some(
                (sensor: any) =>
                  String(
                    sensor.status
                  ).toUpperCase() ===
                  'ACTIVE'
              )}
              onPress={() =>
                setContactorActive(
                  !contactorActive
                )
              }
            />

          </View>

          <View
            style={
              styles.divider
            }
          />

          {contactorSensors.map(
            (sensor: any) => {

              const isOn =
                String(
                  sensor.current_state
                ).toUpperCase() ===
                'ON';

              return (
                <View
                  key={sensor.id}
                  style={
                    styles.itemRow
                  }
                >

                  <Text
                    style={
                      styles.itemLabel
                    }
                  >
                    {sensor.name}
                  </Text>

                  <View
                    style={
                      styles.statusRight
                    }
                  >

                    <Text
                      style={[
                        styles.statusText,
                        {
                          color: isOn
                            ? '#2e7d32'
                            : '#616161',
                        },
                      ]}
                    >
                      {sensor.current_state ||
                        '--'}
                    </Text>

                    <View
                      style={[
                        styles.dot,
                        {
                          backgroundColor:
                            isOn
                              ? '#2e7d32'
                              : '#9e9e9e',
                        },
                      ]}
                    />

                  </View>

                </View>
              );
            }
          )}

        </View>

        {/* =================================================
            MOTOR 1
        ================================================= */}

        <View style={styles.card}>

          <View
            style={
              styles.rowBetween
            }
          >

            <View
              style={styles.row}
            >

              <MaterialCommunityIcons
                name="engine"
                size={28}
                color="#1e88e5"
              />

              <View
                style={{
                  marginLeft: 12,
                }}
              >

                <Text
                  style={
                    styles.sectionTitle
                  }
                >
                  Motor 1
                </Text>

                <Text
                  style={
                    styles.sectionSub
                  }
                >
                  {motor?.status ||
                    'INACTIVE'}
                </Text>

              </View>

            </View>

            <Toggle
              active={
                String(
                  motor?.status
                ).toUpperCase() ===
                'ACTIVE'
              }
              onPress={() =>
                setMotorActive(
                  !motorActive
                )
              }
            />

          </View>

          <View
            style={
              styles.divider
            }
          />

          <View
            style={
              styles.itemRow
            }
          >

            <View>

              <Text
                style={
                  styles.itemLabelSmall
                }
              >
                Status
              </Text>

              <Text
                style={
                  styles.itemLabel
                }
              >
                {motor?.current_state ||
                  '--'}
              </Text>

            </View>

            <View
              style={{
                alignItems:
                  'flex-end',
              }}
            >

              <Text
                style={
                  styles.itemLabelSmall
                }
              >
                {String(
                  motor?.current_state
                ).toUpperCase() ===
                'ON'
                  ? 'Start Time'
                  : 'End Time'}
              </Text>

              <Text
                style={
                  styles.itemLabel
                }
              >
                {String(
                  motor?.current_state
                ).toUpperCase() ===
                'ON'
                  ? formatOnlyTime(
                      motor?.start_time
                    )
                  : formatOnlyTime(
                      motor?.end_time
                    )}
              </Text>

            </View>

          </View>

        </View>

        {/* =================================================
            AUTOMATIC PROCESS
        ================================================= */}
<View style={styles.card}>
  <Text style={styles.cardTitle}>
    Automatic Process
  </Text>

  {(() => {
    let stepNumber = 0;

    return stageData?.processes?.map(
      (process: any, index: number) => {
        const processName =
          process?.process_name || '--';

        // Use equipment directly from process.equipment
        const processEquipment =
          process?.equipment || [];

        const processStatus =
          String(
            process?.status || ''
          ).toUpperCase();

        const isRunning =
          processStatus === 'RUNNING' ||
          processStatus === 'IN_PROGRESS';

        const displayTime =
          isRunning
            ? process?.started_at
            : process?.completed_at;

        return (
          <React.Fragment
            key={
              process?.execution_id ||
              index
            }
          >
            {processEquipment.map(
              (item: any) => {
                // Continuous step number
                stepNumber += 1;

                const equipmentName =
                  item?.name || '--';

                const equipmentType =
                  item?.equipment_type || '--';

                // Use process.equipment.state
                const equipmentState =
                  String(
                    item?.state ?? ''
                  ).toUpperCase();

                return (
                  <View
                    key={`${process?.execution_id}-${item?.id || stepNumber}`}
                    style={styles.processRow}
                  >
                    {/* STEP NUMBER */}
                    <View
                      style={styles.processNumber}
                    >
                      <Text
                        style={
                          styles.processNumberText
                        }
                      >
                        {String(
                          stepNumber
                        ).padStart(2, '0')}
                      </Text>
                    </View>

                    {/* ICON */}
                    <View
                      style={styles.processIcon}
                    >
                      {equipmentType ===
                      'Solenoid Valves' ? (
                        <MaterialCommunityIcons
                          name="pipe-valve"
                          size={20}
                          color="#1e88e5"
                        />
                      ) : equipmentType ===
                        'Inlet Pump 1' ? (
                        <MaterialCommunityIcons
                          name="pump"
                          size={20}
                          color="#1e88e5"
                        />
                      ) : equipmentType ===
                        'Contactor Sensors' ? (
                        <Ionicons
                          name="wifi"
                          size={20}
                          color="#1e88e5"
                        />
                      ) : equipmentType ===
                        'Motor' ? (
                        <MaterialCommunityIcons
                          name="engine"
                          size={20}
                          color="#1e88e5"
                        />
                      ) : (
                        <Ionicons
                          name="hardware-chip-outline"
                          size={20}
                          color="#1e88e5"
                        />
                      )}
                    </View>

                    {/* PROCESS + EQUIPMENT */}
                    <View
                      style={styles.processInfo}
                    >
                      {/* <Text
                        style={
                          styles.processTitle
                        }
                      >
                        {processName}
                      </Text> */}

                      <Text
                        // style={
                        //   styles.processType
                        // }
                        style={
                          styles.processTitle
                        }
                      >
                        {equipmentName}
                      </Text>

                      <Text
                        // style={
                        //   styles.processEquipmentType
                        // }
                        style={
                          styles.processType
                        }
                      >
                        {equipmentType}
                      </Text>
                    </View>

                    {/* STATE + TIME */}
                    {/* STATE + TIME */}
<View style={styles.processStatusContainer}>
  <Text
    style={[
      styles.processState,
      {
        color:
          equipmentState === 'ON'
            ? '#16A34A'
            : equipmentState === 'OFF'
              ? '#DC2626'
              : '#6B7280',
      },
    ]}
  >
    {equipmentState || '--'}
  </Text>

  {/* TIME LABEL BASED ON EQUIPMENT STATE */}
  <Text style={styles.processTimeLabel}>
    {equipmentState === 'ON'
      ? 'Start Time'
      : equipmentState === 'OFF'
        ? 'End Time'
        : '--'}
  </Text>

  {/* TIME BASED ON EQUIPMENT STATE */}
  <Text style={styles.processTime}>
    {equipmentState === 'ON'
      ? formatTime(item?.started_at)
      : equipmentState === 'OFF'
        ? formatTime(item?.completed_at)
        : '--'}
  </Text>
</View>
                  </View>
                );
              }
            )}
          </React.Fragment>
        );
      }
    );
  })()}

  {/* NO DATA */}
  {(!stageData?.processes ||
    stageData.processes.length === 0) && (
    <Text
      style={styles.noDataText}
    >
      No automatic process data
    </Text>
  )}
</View>

        {/* =================================================
            TANK FILLING
        ================================================= */}

        <View style={styles.card}>

          <Text
            style={
              styles.cardTitle
            }
          >
            Tank Filling
          </Text>

          <View
            style={
              styles.tankRow
            }
          >
            <Text
              style={
                styles.tankLabel
              }
            >
              Wastewater Tank
            </Text>

            <Text
              style={
                styles.tankPercent
              }
            >
              65%
            </Text>
          </View>

          <View
            style={
              styles.progressBg
            }
          >
            <View
              style={[
                styles.progressFill,
                {
                  width: '65%',
                  backgroundColor:
                    '#1e88e5',
                },
              ]}
            />
          </View>

          <View
            style={[
              styles.tankRow,
              {
                marginTop: 18,
              },
            ]}
          >

            <Text
              style={
                styles.tankLabel
              }
            >
              Normal Water Tank
            </Text>

            <Text
              style={
                styles.tankPercent
              }
            >
              42%
            </Text>

          </View>

          <View
            style={
              styles.progressBg
            }
          >

            <View
              style={[
                styles.progressFill,
                {
                  width: '42%',
                  backgroundColor:
                    '#26a69a',
                },
              ]}
            />

          </View>

        </View>

        {/* =================================================
            LOG
        ================================================= */}

        <View style={styles.card}>

          <View
            style={
              styles.rowBetween
            }
          >

            <View
              style={styles.row}
            >

              <Ionicons
                name="document-text-outline"
                size={22}
                color="#00897b"
              />

              <View
                style={{
                  marginLeft: 10,
                }}
              >

                <Text
                  style={
                    styles.sectionTitle
                  }
                >
                  Log
                </Text>

                <Text
                  style={
                    styles.sectionSub
                  }
                >
                  Recent Activity
                </Text>

              </View>

            </View>

            <TouchableOpacity>
              <Text
                style={
                  styles.viewAll
                }
              >
                View All ›
              </Text>
            </TouchableOpacity>

          </View>

          <View
            style={
              styles.divider
            }
          />

          {processLogs.map(
            (
              log: any,
              index: number
            ) => {

              const processName =
                log?.process_name ||
                '--';

              const logTime =
                log?.started_at ||
                log?.completed_at ||
                null;

              return (
                <TouchableOpacity
                  style={
                    styles.logRow
                  }
                  key={
                    log?.id ||
                    log?.execution_id ||
                    index
                  }
                >

                  <Text
                    style={
                      styles.logTime
                    }
                  >
                    {formatTime(
                      logTime
                    )}
                  </Text>

                  <Text
                    style={
                      styles.logText
                    }
                  >
                    {processName}
                  </Text>

                  <Ionicons
                    name="chevron-forward"
                    size={18}
                    color="#bdbdbd"
                  />

                </TouchableOpacity>
              );
            }
          )}

          {processLogs.length ===
            0 && (
            <Text
              style={
                styles.noDataText
              }
            >
              No recent activity
            </Text>
          )}

        </View>

        <View
          style={{
            height: 40,
          }}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

// ======================================================
// STYLES
// ======================================================

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        '#f5f7fa',
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor:
        '#eee',
    },

    menuBtn: {
      padding: 4,
    },

    headerTitle: {
      flex: 1,
      alignItems:
        'center',
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
      backgroundColor:
        '#616161',
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
      shadowOffset: {
        width: 0,
        height: 1,
      },
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
      backgroundColor:
        '#2e7d32',
      borderRadius: 10,
      height: 52,
      flexDirection:
        'row',
      alignItems:
        'center',
      justifyContent:
        'center',
      marginBottom: 12,
    },

    startBtnDisabled: {
      backgroundColor:
        '#9e9e9e',
      opacity: 0.7,
    },

    startBtnText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '700',
      marginLeft: 8,
    },

    stopBtn: {
      borderWidth: 1.5,
      borderColor:
        '#ef5350',
      borderRadius: 10,
      height: 48,
      flexDirection:
        'row',
      alignItems:
        'center',
      justifyContent:
        'center',
    },

    stopBtnText: {
      color: '#ef5350',
      fontSize: 15,
      fontWeight: '700',
      marginLeft: 8,
    },

    row: {
      flexDirection:
        'row',
      alignItems:
        'center',
    },

    rowBetween: {
      flexDirection:
        'row',
      alignItems:
        'center',
      justifyContent:
        'space-between',
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
      flexDirection:
        'row',
      borderRadius: 8,
      overflow:
        'hidden',
      borderWidth: 1,
      borderColor:
        '#e0e0e0',
    },

    toggleSide: {
      paddingHorizontal: 10,
      paddingVertical: 6,
      backgroundColor:
        '#f5f5f5',
    },

    toggleSideActive: {
      backgroundColor:
        '#00897b',
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
      backgroundColor:
        '#eee',
      marginVertical: 14,
    },

    itemRow: {
      flexDirection:
        'row',
      justifyContent:
        'space-between',
      alignItems:
        'center',
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
      flexDirection:
        'row',
      alignItems:
        'center',
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

    // ==================================================
    // AUTOMATIC PROCESS
    // ==================================================

    processRow: {
      flexDirection:
        'row',
      alignItems:
        'center',
      marginBottom: 18,
    },

    processNumber: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor:
        '#F3F4F6',
      alignItems:
        'center',
      justifyContent:
        'center',
      marginRight: 10,
    },

    processNumberText: {
      fontSize: 12,
      fontWeight: '700',
      color: '#6B7280',
    },

    processIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor:
        '#F3F4F6',
      alignItems:
        'center',
      justifyContent:
        'center',
      marginRight: 12,
    },

    processInfo: {
      flex: 1,
      justifyContent:
        'center',
    },

    processTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: '#111827',
      marginBottom: 3,
    },

    processType: {
      fontSize: 12,
      color: '#374151',
    },

    processEquipmentType: {
      fontSize: 11,
      color: '#9CA3AF',
      marginTop: 2,
    },

    processStatusContainer: {
      width: 100,
      alignItems:
        'flex-end',
      justifyContent:
        'center',
    },

    processState: {
      fontSize: 13,
      fontWeight: '700',
    },

    processTimeLabel: {
      fontSize: 11,
      color: '#9CA3AF',
      marginTop: 5,
      marginBottom: 2,
    },

    processTime: {
      fontSize: 12,
      color: '#374151',
      fontWeight: '500',
    },

    // ==================================================
    // TANK
    // ==================================================

    tankRow: {
      flexDirection:
        'row',
      justifyContent:
        'space-between',
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
      backgroundColor:
        '#e0e0e0',
      borderRadius: 4,
      overflow:
        'hidden',
    },

    progressFill: {
      height: '100%',
      borderRadius: 4,
    },

    // ==================================================
    // LOG
    // ==================================================

    viewAll: {
      fontSize: 13,
      color: '#00897b',
      fontWeight: '600',
    },

    logRow: {
      flexDirection:
        'row',
      alignItems:
        'center',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor:
        '#f0f0f0',
    },

    logTime: {
      width: 90,
      fontSize: 12,
      color: '#757575',
    },

    logText: {
      flex: 1,
      fontSize: 14,
      color: '#424242',
    },

    noDataText: {
      fontSize: 13,
      color: '#9CA3AF',
      paddingVertical: 10,
    },
  });