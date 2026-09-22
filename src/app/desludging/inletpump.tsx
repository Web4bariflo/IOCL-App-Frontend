// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { router } from 'expo-router';

// export default function InletPumpScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/desludging/settings')}>
//           <MaterialCommunityIcons name="arrow-left" size={24} color="#1E3A8A" />
//         </TouchableOpacity>
//         <View style={styles.headerTitleContainer}>
//           <Text style={styles.headerTitle}>Inlet Pump 1</Text>
//           <Text style={styles.headerSubtitle}>Manual Control</Text>
//         </View>
//         <View style={styles.backButton} />
//       </View>
//       <View style={styles.headerBorder} />

//       <ScrollView contentContainerStyle={styles.scrollContent}>
        
//         {/* Pump Status Card */}
//         <View style={styles.card}>
//           <View style={styles.statusCardContent}>
//             <Image 
//               source={require('@/assets/images/inletpump.png')} 
//               style={styles.pumpLargeIcon} 
//               resizeMode="contain" 
//             />
//             <View style={styles.statusTextContainer}>
//               <Text style={styles.statusTitle}>Pump Status</Text>
//               <View style={styles.statusRow}>
//                 <View style={styles.statusDotGreen} />
//                 <Text style={styles.statusTextGreen}>Ready</Text>
//               </View>
//               <Text style={styles.statusSubtitle}>PLC connection active</Text>
//             </View>
//             <View style={styles.offBadge}>
//               <Text style={styles.offBadgeText}>OFF</Text>
//             </View>
//           </View>
//         </View>

//         {/* Manual Control Card */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Manual Control</Text>
//           <View style={styles.actionButtonsContainer}>
//             <TouchableOpacity style={styles.startButton}>
//               <MaterialCommunityIcons name="power" size={24} color="#FFFFFF" />
//               <Text style={styles.startButtonText}>START PUMP</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.stopButton}>
//               <MaterialCommunityIcons name="stop-circle-outline" size={24} color="#DC2626" />
//               <Text style={styles.stopButtonText}>STOP PUMP</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Operating Schedule Card */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Operating Schedule</Text>
//           <Text style={styles.cardSubtitle}>Set the pump operation window</Text>
          
//           <View style={styles.scheduleRow}>
//             <View style={styles.scheduleLabelContainer}>
//               <MaterialCommunityIcons name="clock-outline" size={22} color="#1A5B9C" />
//               <Text style={styles.scheduleLabel}>Start Time</Text>
//             </View>
//             <View style={styles.timeInputBox}>
//               <Text style={styles.timeInputText}>08:15 AM</Text>
//             </View>
//           </View>

//           <View style={styles.divider} />

//           <View style={styles.scheduleRow}>
//             <View style={styles.scheduleLabelContainer}>
//               <MaterialCommunityIcons name="clock-outline" size={22} color="#1A5B9C" />
//               <Text style={styles.scheduleLabel}>End Time</Text>
//             </View>
//             <View style={styles.timeInputBox}>
//               <Text style={styles.timeInputText}>06:15 PM</Text>
//             </View>
//           </View>

//           <View style={styles.divider} />

//           <View style={styles.scheduleRow}>
//             <View style={styles.scheduleLabelContainer}>
//               <MaterialCommunityIcons name="clock-outline" size={22} color="#1A5B9C" />
//               <Text style={styles.scheduleLabel}>Running Time</Text>
//             </View>
//             <View style={styles.timeInputBox}>
//               <Text style={styles.timeInputText}>10 hr</Text>
//             </View>
//           </View>

//           <TouchableOpacity style={styles.saveButton}>
//             <Text style={styles.saveButtonText}>SAVE SCHEDULE</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Operation Log Card */}
//         <View style={styles.card}>
//           <View style={styles.logHeader}>
//             <Text style={styles.cardTitle}>Operation Log</Text>
//             <TouchableOpacity style={styles.viewAllRow}>
//               <Text style={styles.viewAllText}>View All</Text>
//               <MaterialCommunityIcons name="chevron-right" size={20} color="#0D9488" />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.logRow}>
//             <Text style={styles.logTime}>Today, 08:15 AM</Text>
//             <View style={styles.logStatusContainer}>
//               <Text style={styles.logStatusText}>Pump Started</Text>
//               <View style={[styles.logStatusDot, { backgroundColor: '#10B981' }]} />
//             </View>
//           </View>

//           <View style={styles.logDivider} />

//           <View style={styles.logRow}>
//             <Text style={styles.logTime}>Yesterday, 06:15 PM</Text>
//             <View style={styles.logStatusContainer}>
//               <Text style={styles.logStatusText}>Pump Stopped</Text>
//               <View style={[styles.logStatusDot, { backgroundColor: '#6B7280' }]} />
//             </View>
//           </View>

//           <View style={styles.logDivider} />

//           <View style={styles.logRow}>
//             <Text style={styles.logTime}>Yesterday, 08:15 AM</Text>
//             <View style={styles.logStatusContainer}>
//               <Text style={styles.logStatusText}>Pump Started</Text>
//               <View style={[styles.logStatusDot, { backgroundColor: '#10B981' }]} />
//             </View>
//           </View>

//         </View>

//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F9FA',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     paddingTop: 16,
//     paddingBottom: 16,
//     backgroundColor: '#FFFFFF',
//   },
//   headerBorder: {
//     height: 1,
//     backgroundColor: '#E5E7EB',
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//   },
//   headerTitleContainer: {
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#1E3A8A',
//   },
//   headerSubtitle: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginTop: 2,
//   },
//   scrollContent: {
//     padding: 16,
//     paddingBottom: 40,
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 16,
//     borderWidth: 1,
//     borderColor: '#F3F4F6',
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   statusCardContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   pumpLargeIcon: {
//     width: 56,
//     height: 56,
//     marginRight: 16,
//   },
//   statusTextContainer: {
//     flex: 1,
//   },
//   statusTitle: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#111827',
//   },
//   statusRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 4,
//     marginBottom: 2,
//   },
//   statusDotGreen: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#10B981',
//     marginRight: 6,
//   },
//   statusTextGreen: {
//     fontSize: 14,
//     color: '#10B981',
//     fontWeight: '500',
//   },
//   statusSubtitle: {
//     fontSize: 12,
//     color: '#6B7280',
//   },
//   offBadge: {
//     backgroundColor: '#F3F4F6',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//   },
//   offBadgeText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#4B5563',
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#111827',
//     marginBottom: 4,
//   },
//   cardSubtitle: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginBottom: 16,
//   },
//   actionButtonsContainer: {
//     flexDirection: 'row',
//     gap: 12,
//     marginTop: 8,
//   },
//   startButton: {
//     flex: 1,
//     backgroundColor: '#0D9488',
//     borderRadius: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 14,
//   },
//   startButtonText: {
//     color: '#FFFFFF',
//     fontWeight: '600',
//     fontSize: 14,
//     marginLeft: 6,
//   },
//   stopButton: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#DC2626',
//     borderRadius: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 14,
//   },
//   stopButtonText: {
//     color: '#DC2626',
//     fontWeight: '600',
//     fontSize: 14,
//     marginLeft: 6,
//   },
//   scheduleRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 8,
//   },
//   scheduleLabelContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   scheduleLabel: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#111827',
//     marginLeft: 12,
//   },
//   timeInputBox: {
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderRadius: 6,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     minWidth: 100,
//     alignItems: 'center',
//   },
//   timeInputText: {
//     fontSize: 14,
//     color: '#4B5563',
//     fontWeight: '500',
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#F3F4F6',
//     marginVertical: 4,
//   },
//   saveButton: {
//     backgroundColor: '#0D9488',
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 14,
//     marginTop: 16,
//   },
//   saveButtonText: {
//     color: '#FFFFFF',
//     fontWeight: '600',
//     fontSize: 14,
//   },
//   logHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   viewAllRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   viewAllText: {
//     fontSize: 13,
//     color: '#0D9488',
//     fontWeight: '500',
//   },
//   logRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   logTime: {
//     fontSize: 14,
//     color: '#4B5563',
//   },
//   logStatusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logStatusText: {
//     fontSize: 14,
//     color: '#4B5563',
//     marginRight: 8,
//   },
//   logStatusDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//   },
//   logDivider: {
//     height: 1,
//     backgroundColor: '#F3F4F6',
//     marginVertical: 4,
//   },
// });




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
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  turnOnCoagulantMotor,
  turnOffCoagulantMotor,
  getCoagulantManualLogs,
} from '../../api/coagulantApi';

export default function InletPumpScreen() {
  const [motorState, setMotorState] = useState<'ON' | 'OFF'>('OFF');

  const [loading, setLoading] = useState(false);

  const [motorStartTime, setMotorStartTime] = useState<string | null>(null);
  const [motorEndTime, setMotorEndTime] = useState<string | null>(null);
  const [motorDuration, setMotorDuration] = useState<number | null>(null);

  const [operationLogs, setOperationLogs] = useState<any[]>([]);
  const [logsLoading, setLogsLoading] = useState(false);

  // ============================================================
  // START DESLUDGING INLET PUMP
  // ============================================================
  const handleStartPump = async () => {
    try {
      setLoading(true);

      const stageId = await AsyncStorage.getItem(
        'desludgingStageId'
      );

      const equipmentId = await AsyncStorage.getItem(
        'desludgingInletPumpId'
      );

      console.log(
        'Desludging Stage ID:',
        stageId
      );

      console.log(
        'Desludging Inlet Pump ID:',
        equipmentId
      );

      if (!stageId) {
        console.log(
          'Desludging Stage ID not found'
        );
        return;
      }

      if (!equipmentId) {
        console.log(
          'Desludging Inlet Pump ID not found'
        );
        return;
      }

      const response = await turnOnCoagulantMotor(
        Number(equipmentId),
        Number(stageId)
      );

      console.log(
        'Desludging Inlet Pump ON Response:',
        response
      );

      if (
        response?.success &&
        response?.data?.current_state === 'ON'
      ) {
        setMotorState('ON');

        // Show start time
        setMotorStartTime(
          response.data.started_at
        );

        // Clear previous end time and duration
        setMotorEndTime(null);
        setMotorDuration(null);

        // Refresh operation logs
        await fetchOperationLogs();
      }
    } catch (error) {
      console.error(
        'Error starting Desludging Inlet Pump:',
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // ============================================================
  // STOP DESLUDGING INLET PUMP
  // ============================================================
  const handleStopPump = async () => {
    try {
      setLoading(true);

      const stageId = await AsyncStorage.getItem(
        'desludgingStageId'
      );

      const equipmentId = await AsyncStorage.getItem(
        'desludgingInletPumpId'
      );

      console.log(
        'Desludging Stage ID:',
        stageId
      );

      console.log(
        'Desludging Inlet Pump ID:',
        equipmentId
      );

      if (!stageId) {
        console.log(
          'Desludging Stage ID not found'
        );
        return;
      }

      if (!equipmentId) {
        console.log(
          'Desludging Inlet Pump ID not found'
        );
        return;
      }

      const response = await turnOffCoagulantMotor(
        Number(equipmentId),
        Number(stageId)
      );

      console.log(
        'Desludging Inlet Pump OFF Response:',
        response
      );

      if (
        response?.success &&
        response?.data?.current_state === 'OFF'
      ) {
        // Change pump state to OFF
        setMotorState('OFF');

        // Show end time
        setMotorEndTime(
          response.data.ended_at
        );

        // Show running duration
        setMotorDuration(
          response.data.duration_seconds
        );

        // Refresh operation logs
        await fetchOperationLogs();

        console.log(
          'Pump End Time:',
          response.data.ended_at
        );

        console.log(
          'Pump Duration:',
          response.data.duration_seconds
        );
      }
    } catch (error) {
      console.error(
        'Error stopping Desludging Inlet Pump:',
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // ============================================================
  // FETCH OPERATION LOGS
  // ============================================================
  const fetchOperationLogs = async () => {
    try {
      setLogsLoading(true);

      const equipmentId =
        await AsyncStorage.getItem(
          'desludgingInletPumpId'
        );

      if (!equipmentId) {
        console.log(
          'Desludging Inlet Pump ID not found'
        );
        return;
      }

      const response =
        await getCoagulantManualLogs(
          Number(equipmentId)
        );

      console.log(
        'Desludging Inlet Pump Manual Logs Response:',
        response
      );

      if (
        response?.success &&
        response?.data
      ) {
        // API returns latest logs first
        setOperationLogs(
          response.data.slice(0, 3)
        );
      }
    } catch (error) {
      console.error(
        'Error fetching Desludging operation logs:',
        error
      );
    } finally {
      setLogsLoading(false);
    }
  };

  // ============================================================
  // INITIAL LOAD
  // ============================================================
  useEffect(() => {
    fetchOperationLogs();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      {/* ======================================================
          HEADER
      ====================================================== */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() =>
            router.navigate(
              '/desludging/settings'
            )
          }
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="#1E3A8A"
          />
        </TouchableOpacity>

        <View
          style={styles.headerTitleContainer}
        >
          <Text style={styles.headerTitle}>
            Inlet Pump 1
          </Text>

          <Text style={styles.headerSubtitle}>
            Desludging - Manual Control
          </Text>
        </View>

        <View style={styles.backButton} />
      </View>

      <View style={styles.headerBorder} />

      <ScrollView
        contentContainerStyle={
          styles.scrollContent
        }
      >

        {/* ====================================================
            PUMP STATUS CARD
        ==================================================== */}
        <View style={styles.card}>
          <View
            style={
              styles.statusCardContent
            }
          >
            <Image
              source={require('@/assets/images/inletpump.png')}
              style={styles.pumpLargeIcon}
              resizeMode="contain"
            />

            <View
              style={
                styles.statusTextContainer
              }
            >
              <Text
                style={styles.statusTitle}
              >
                Pump Status
              </Text>

              <View
                style={styles.statusRow}
              >
                <View
                  style={
                    styles.statusDotGreen
                  }
                />

                <Text
                  style={
                    styles.statusTextGreen
                  }
                >
                  Ready
                </Text>
              </View>

              <Text
                style={
                  styles.statusSubtitle
                }
              >
                PLC connection active
              </Text>
            </View>

            <View style={styles.offBadge}>
              <Text
                style={
                  styles.offBadgeText
                }
              >
                {motorState}
              </Text>
            </View>
          </View>
        </View>

        {/* ====================================================
            MANUAL CONTROL CARD
        ==================================================== */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Manual Control
          </Text>

          <View
            style={
              styles.actionButtonsContainer
            }
          >
            {/* START PUMP */}
            <TouchableOpacity
              style={styles.startButton}
              onPress={handleStartPump}
              disabled={loading}
            >
              <MaterialCommunityIcons
                name="power"
                size={24}
                color="#FFFFFF"
              />

              <Text
                style={
                  styles.startButtonText
                }
              >
                {loading
                  ? 'PROCESSING...'
                  : 'START PUMP'}
              </Text>
            </TouchableOpacity>

            {/* STOP PUMP */}
            <TouchableOpacity
              style={styles.stopButton}
              onPress={handleStopPump}
              disabled={loading}
            >
              <MaterialCommunityIcons
                name="stop-circle-outline"
                size={24}
                color="#DC2626"
              />

              <Text
                style={
                  styles.stopButtonText
                }
              >
                STOP PUMP
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ====================================================
            OPERATING SCHEDULE CARD
        ==================================================== */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Operating Schedule
          </Text>

          <Text
            style={styles.cardSubtitle}
          >
            Set the pump operation window
          </Text>

          {/* START TIME */}
          {motorState === 'ON' &&
            motorStartTime && (
              <View
                style={styles.scheduleRow}
              >
                <View
                  style={
                    styles.scheduleLabelContainer
                  }
                >
                  <MaterialCommunityIcons
                    name="clock-outline"
                    size={22}
                    color="#1A5B9C"
                  />

                  <Text
                    style={
                      styles.scheduleLabel
                    }
                  >
                    Start Time
                  </Text>
                </View>

                <View
                  style={
                    styles.timeInputBox
                  }
                >
                  <Text
                    style={
                      styles.timeInputText
                    }
                  >
                    {new Date(
                      motorStartTime
                    ).toLocaleTimeString(
                      [],
                      {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                      }
                    )}
                  </Text>
                </View>
              </View>
            )}

          {/* END TIME + RUNNING TIME */}
          {motorState === 'OFF' &&
            motorEndTime && (
              <>
                <View
                  style={styles.scheduleRow}
                >
                  <View
                    style={
                      styles.scheduleLabelContainer
                    }
                  >
                    <MaterialCommunityIcons
                      name="clock-outline"
                      size={22}
                      color="#1A5B9C"
                    />

                    <Text
                      style={
                        styles.scheduleLabel
                      }
                    >
                      End Time
                    </Text>
                  </View>

                  <View
                    style={
                      styles.timeInputBox
                    }
                  >
                    <Text
                      style={
                        styles.timeInputText
                      }
                    >
                      {new Date(
                        motorEndTime
                      ).toLocaleTimeString(
                        [],
                        {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        }
                      )}
                    </Text>
                  </View>
                </View>

                <View
                  style={styles.divider}
                />

                <View
                  style={styles.scheduleRow}
                >
                  <View
                    style={
                      styles.scheduleLabelContainer
                    }
                  >
                    <MaterialCommunityIcons
                      name="timer-outline"
                      size={22}
                      color="#1A5B9C"
                    />

                    <Text
                      style={
                        styles.scheduleLabel
                      }
                    >
                      Running Time
                    </Text>
                  </View>

                  <View
                    style={
                      styles.timeInputBox
                    }
                  >
                    <Text
                      style={
                        styles.timeInputText
                      }
                    >
                      {motorDuration !== null
                        ? `${Math.floor(
                            motorDuration / 60
                          )} min ${
                            motorDuration % 60
                          } sec`
                        : '--'}
                    </Text>
                  </View>
                </View>
              </>
            )}

          <TouchableOpacity
            style={styles.saveButton}
          >
            <Text
              style={
                styles.saveButtonText
              }
            >
              SAVE SCHEDULE
            </Text>
          </TouchableOpacity>
        </View>

        {/* ====================================================
            OPERATION LOG CARD
        ==================================================== */}
        <View style={styles.card}>
          <View style={styles.logHeader}>
            <Text
              style={styles.cardTitle}
            >
              Operation Log
            </Text>

            <TouchableOpacity
              style={styles.viewAllRow}
            >
              <Text
                style={
                  styles.viewAllText
                }
              >
                View All
              </Text>

              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color="#0D9488"
              />
            </TouchableOpacity>
          </View>

          {logsLoading ? (
            <Text
              style={styles.logTime}
            >
              Loading...
            </Text>
          ) : operationLogs.length === 0 ? (
            <Text
              style={styles.logTime}
            >
              No operation logs found.
            </Text>
          ) : (
            operationLogs.map(
              (log, index) => {
                const logDate =
                  new Date(
                    log.created_at
                  );

                return (
                  <React.Fragment
                    key={log.id}
                  >
                    <View
                      style={
                        styles.logRow
                      }
                    >
                      <Text
                        style={
                          styles.logTime
                        }
                      >
                        {logDate.toLocaleDateString(
                          [],
                          {
                            day: '2-digit',
                            month: 'short',
                          }
                        )}{' '}
                        {logDate.toLocaleTimeString(
                          [],
                          {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                          }
                        )}
                      </Text>

                      <View
                        style={
                          styles.logStatusContainer
                        }
                      >
                        <Text
                          style={
                            styles.logStatusText
                          }
                        >
                          {log.action ===
                          'ON'
                            ? 'Pump Started'
                            : 'Pump Stopped'}
                        </Text>

                        <View
                          style={[
                            styles.logStatusDot,
                            {
                              backgroundColor:
                                log.action ===
                                'ON'
                                  ? '#10B981'
                                  : '#6B7280',
                            },
                          ]}
                        />
                      </View>
                    </View>

                    {index <
                      operationLogs.length -
                        1 && (
                      <View
                        style={
                          styles.logDivider
                        }
                      />
                    )}
                  </React.Fragment>
                );
              }
            )
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
});