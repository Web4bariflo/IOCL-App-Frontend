// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { router } from 'expo-router';

// export default function Motor1Screen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/desludging/settings')}>
//           <MaterialCommunityIcons name="arrow-left" size={24} color="#1E3A8A" />
//         </TouchableOpacity>
//         <View style={styles.headerTitleContainer}>
//           <Text style={styles.headerTitle}>Stepper Motor 1</Text>
//           <Text style={styles.headerSubtitle}>Manual Control</Text>
//         </View>
//         <View style={styles.backButton} />
//       </View>
//       <View style={styles.headerBorder} />

//       <ScrollView contentContainerStyle={styles.scrollContent}>
        
//         {/* Motor Status Card */}
//         <View style={styles.card}>
//           <View style={styles.statusCardContent}>
//             <Image 
//               source={require('@/assets/images/motor.png')} 
//               style={styles.pumpLargeIcon} 
//               resizeMode="contain" 
//             />
//             <View style={styles.statusTextContainer}>
//               <Text style={styles.statusTitle}>Motor Status</Text>
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
//               <Text style={styles.startButtonText}>START MOTOR</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.stopButton}>
//               <MaterialCommunityIcons name="stop-circle-outline" size={24} color="#DC2626" />
//               <Text style={styles.stopButtonText}>STOP MOTOR</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Operating Schedule Card */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Operating Schedule</Text>
//           <Text style={styles.cardSubtitle}>Set the motor operation window</Text>
          
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

//           <View style={styles.divider} />

//           <View style={styles.scheduleRow}>
//             <View style={styles.scheduleLabelContainer}>
//               <MaterialCommunityIcons name="speedometer" size={22} color="#1A5B9C" />
//               <Text style={styles.scheduleLabel}>Set RPM</Text>
//             </View>
//             <View style={styles.rpmControlContainer}>
//               <TouchableOpacity style={styles.rpmButton}>
//                 <MaterialCommunityIcons name="minus" size={20} color="#1A5B9C" />
//               </TouchableOpacity>
//               <View style={styles.rpmValueBox}>
//                 <Text style={styles.timeInputText}>120 RPM</Text>
//               </View>
//               <TouchableOpacity style={styles.rpmButton}>
//                 <MaterialCommunityIcons name="plus" size={20} color="#1A5B9C" />
//               </TouchableOpacity>
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
//               <Text style={styles.logStatusText}>Motor Started</Text>
//               <View style={[styles.logStatusDot, { backgroundColor: '#10B981' }]} />
//             </View>
//           </View>

//           <View style={styles.logDivider} />

//           <View style={styles.logRow}>
//             <Text style={styles.logTime}>Yesterday, 06:15 PM</Text>
//             <View style={styles.logStatusContainer}>
//               <Text style={styles.logStatusText}>Motor Stopped</Text>
//               <View style={[styles.logStatusDot, { backgroundColor: '#6B7280' }]} />
//             </View>
//           </View>

//           <View style={styles.logDivider} />

//           <View style={styles.logRow}>
//             <Text style={styles.logTime}>Yesterday, 08:15 AM</Text>
//             <View style={styles.logStatusContainer}>
//               <Text style={styles.logStatusText}>Motor Started</Text>
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
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
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
//   rpmControlContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderRadius: 6,
//     overflow: 'hidden',
//   },
//   rpmButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   rpmValueBox: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderLeftWidth: 1,
//     borderRightWidth: 1,
//     borderColor: '#E5E7EB',
//     justifyContent: 'center',
//     alignItems: 'center',
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



import React, { useEffect, useState } from 'react';
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

import {
  turnOnCoagulantMotor,
  turnOffCoagulantMotor,
  getCoagulantManualLogs,
} from '../../api/coagulantApi';

export default function Motor1Screen() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [runningTime, setRunningTime] = useState('');
  const [loading, setLoading] = useState(false);

  const [manualLogs, setManualLogs] = useState<any[]>([]);
  const [logsLoading, setLogsLoading] = useState(false);

  // =========================================================
  // FETCH MOTOR MANUAL LOGS
  // =========================================================

  const fetchManualLogs = async () => {
    try {
      setLogsLoading(true);

      // Get Desludging Motor ID
      const motorId = await AsyncStorage.getItem(
        'desludgingMotorId'
      );

      console.log(
        'Desludging Motor ID:',
        motorId
      );

      if (!motorId) {
        console.log(
          'Desludging Motor ID not found'
        );
        return;
      }

      // Get manual logs
      const response = await getCoagulantManualLogs(
        Number(motorId)
      );

      console.log(
        'Desludging Motor Manual Logs Response:',
        response
      );

      if (response?.success) {
        // API already returns latest logs first
        setManualLogs(
          response?.data?.slice(0, 3) || []
        );
      }
    } catch (error) {
      console.log(
        'Failed to fetch Desludging motor manual logs:',
        error
      );
    } finally {
      setLogsLoading(false);
    }
  };

  // =========================================================
  // LOAD LOGS
  // =========================================================

  useEffect(() => {
    fetchManualLogs();
  }, []);

  // =========================================================
  // START DESLUDGING MOTOR
  // =========================================================

  const handleStartMotor = async () => {
    try {
      setLoading(true);

      // Get Desludging Stage ID
      const stageId = await AsyncStorage.getItem(
        'desludgingStageId'
      );

      // Get Desludging Motor ID
      const motorId = await AsyncStorage.getItem(
        'desludgingMotorId'
      );

      console.log(
        'Desludging Stage ID:',
        stageId
      );

      console.log(
        'Desludging Motor ID:',
        motorId
      );

      if (!stageId || !motorId) {
        console.log(
          'Desludging Stage ID or Motor ID not found'
        );
        return;
      }

      // Turn ON motor
      const response = await turnOnCoagulantMotor(
        Number(motorId),
        Number(stageId)
      );

      console.log(
        'Desludging Motor ON Response:',
        response
      );

      if (response?.success) {
        const startedAt =
          response?.data?.started_at;

        if (startedAt) {
          const date = new Date(startedAt);

          const formattedTime =
            date.toLocaleTimeString('en-IN', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            });

          setStartTime(formattedTime);

          // Clear previous stop information
          setEndTime('');
          setRunningTime('');

          // Refresh latest logs
          await fetchManualLogs();
        }
      }
    } catch (error) {
      console.log(
        'Failed to start Desludging motor:',
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // STOP DESLUDGING MOTOR
  // =========================================================

  const handleStopMotor = async () => {
    try {
      setLoading(true);

      // Get Desludging Stage ID
      const stageId = await AsyncStorage.getItem(
        'desludgingStageId'
      );

      // Get Desludging Motor ID
      const motorId = await AsyncStorage.getItem(
        'desludgingMotorId'
      );

      console.log(
        'Desludging Stage ID:',
        stageId
      );

      console.log(
        'Desludging Motor ID:',
        motorId
      );

      if (!stageId || !motorId) {
        console.log(
          'Desludging Stage ID or Motor ID not found'
        );
        return;
      }

      // Turn OFF motor
      const response = await turnOffCoagulantMotor(
        Number(motorId),
        Number(stageId)
      );

      console.log(
        'Desludging Motor OFF Response:',
        response
      );

      if (response?.success) {
        const endedAt =
          response?.data?.ended_at;

        const durationSeconds =
          response?.data?.duration_seconds;

        // ===================================================
        // END TIME
        // ===================================================

        if (endedAt) {
          const date = new Date(endedAt);

          const formattedTime =
            date.toLocaleTimeString('en-IN', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            });

          setEndTime(formattedTime);
        }

        // ===================================================
        // RUNNING TIME
        // ===================================================

        if (
          durationSeconds !== null &&
          durationSeconds !== undefined
        ) {
          const hours = Math.floor(
            durationSeconds / 3600
          );

          const minutes = Math.floor(
            (durationSeconds % 3600) / 60
          );

          const seconds =
            durationSeconds % 60;

          let durationText = '';

          if (hours > 0) {
            durationText += `${hours} hr `;
          }

          if (minutes > 0) {
            durationText += `${minutes} min `;
          }

          if (seconds > 0) {
            durationText += `${seconds} sec`;
          }

          // If duration is 0 seconds
          if (!durationText) {
            durationText = '0 sec';
          }

          setRunningTime(
            durationText.trim()
          );
        }

        // Motor stopped
        setStartTime('');

        // Refresh latest logs
        await fetchManualLogs();
      }
    } catch (error) {
      console.log(
        'Failed to stop Desludging motor:',
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <SafeAreaView style={styles.container}>

      {/* =====================================================
          HEADER
      ===================================================== */}

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
            Stepper Motor 1
          </Text>

          <Text style={styles.headerSubtitle}>
            Manual Control
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

        {/* ===================================================
            MOTOR STATUS CARD
        =================================================== */}

        <View style={styles.card}>
          <View
            style={styles.statusCardContent}
          >

            <Image
              source={require(
                '@/assets/images/motor.png'
              )}
              style={styles.pumpLargeIcon}
              resizeMode="contain"
            />

            <View
              style={styles.statusTextContainer}
            >
              <Text style={styles.statusTitle}>
                Motor Status
              </Text>

              <View
                style={styles.statusRow}
              >
                <View
                  style={styles.statusDotGreen}
                />

                <Text
                  style={styles.statusTextGreen}
                >
                  Ready
                </Text>
              </View>

              <Text
                style={styles.statusSubtitle}
              >
                PLC connection active
              </Text>
            </View>

            <View
              style={styles.offBadge}
            >
              <Text
                style={styles.offBadgeText}
              >
                OFF
              </Text>
            </View>

          </View>
        </View>

        {/* ===================================================
            MANUAL CONTROL CARD
        =================================================== */}

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Manual Control
          </Text>

          <View
            style={
              styles.actionButtonsContainer
            }
          >

            {/* START MOTOR */}

            <TouchableOpacity
              style={styles.startButton}
              onPress={
                handleStartMotor
              }
              disabled={loading}
            >
              <MaterialCommunityIcons
                name="power"
                size={24}
                color="#FFFFFF"
              />

              <Text
                style={styles.startButtonText}
              >
                START MOTOR
              </Text>
            </TouchableOpacity>

            {/* STOP MOTOR */}

            <TouchableOpacity
              style={styles.stopButton}
              onPress={
                handleStopMotor
              }
              disabled={loading}
            >
              <MaterialCommunityIcons
                name="stop-circle-outline"
                size={24}
                color="#DC2626"
              />

              <Text
                style={styles.stopButtonText}
              >
                STOP MOTOR
              </Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* ===================================================
            OPERATING SCHEDULE
        =================================================== */}

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Operating Schedule
          </Text>

          <Text style={styles.cardSubtitle}>
            Set the motor operation window
          </Text>

          {/* MOTOR RUNNING */}

          {startTime && !endTime && (
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
                  style={styles.scheduleLabel}
                >
                  Start Time
                </Text>
              </View>

              <View
                style={styles.timeInputBox}
              >
                <Text
                  style={styles.timeInputText}
                >
                  {startTime}
                </Text>
              </View>

            </View>
          )}

          {/* MOTOR STOPPED */}

          {endTime && (
            <>

              {/* END TIME */}

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
                    {endTime}
                  </Text>
                </View>

              </View>

              <View
                style={styles.divider}
              />

              {/* RUNNING TIME */}

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
                    {runningTime}
                  </Text>
                </View>

              </View>

            </>
          )}

          <TouchableOpacity
            style={styles.saveButton}
          >
            <Text
              style={styles.saveButtonText}
            >
              SAVE SCHEDULE
            </Text>
          </TouchableOpacity>

        </View>

        {/* ===================================================
            OPERATION LOG
        =================================================== */}

        <View style={styles.card}>

          <View style={styles.logHeader}>

            <Text style={styles.cardTitle}>
              Operation Log
            </Text>

            <TouchableOpacity
              style={styles.viewAllRow}
            >
              <Text
                style={styles.viewAllText}
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

          {/* LOADING */}

          {logsLoading ? (
            <Text style={styles.logTime}>
              Loading logs...
            </Text>
          ) : manualLogs.length === 0 ? (

            /* NO LOGS */

            <Text style={styles.logTime}>
              No operation logs available
            </Text>

          ) : (

            /* LOG LIST */

            manualLogs.map(
              (log, index) => {

                const logDate =
                  log.created_at ||
                  log.started_at;

                const date = logDate
                  ? new Date(logDate)
                  : null;

                const formattedDate =
                  date
                    ? date.toLocaleDateString(
                        'en-IN',
                        {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        }
                      )
                    : '';

                const formattedTime =
                  date
                    ? date.toLocaleTimeString(
                        'en-IN',
                        {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        }
                      )
                    : '';

                const isStarted =
                  log.action === 'ON';

                return (
                  <React.Fragment
                    key={log.id}
                  >

                    <View
                      style={styles.logRow}
                    >

                      <Text
                        style={
                          styles.logTime
                        }
                      >
                        {formattedDate},{' '}
                        {formattedTime}
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
                          {isStarted
                            ? 'Motor Started'
                            : 'Motor Stopped'}
                        </Text>

                        <View
                          style={[
                            styles.logStatusDot,
                            {
                              backgroundColor:
                                isStarted
                                  ? '#10B981'
                                  : '#6B7280',
                            },
                          ]}
                        />

                      </View>

                    </View>

                    {index <
                      manualLogs.length -
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

// =========================================================
// STYLES
// =========================================================

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
    borderWidth: 1,
    borderColor: '#E5E7EB',
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