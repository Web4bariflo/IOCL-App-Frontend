// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { router } from 'expo-router';

// export default function ContactorSensorScreen() {
//   const [activeTab, setActiveTab] = useState<'SENSOR 1' | 'SENSOR 2'>('SENSOR 1');

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/desludging/settings')}>
//           <MaterialCommunityIcons name="arrow-left" size={24} color="#1E3A8A" />
//         </TouchableOpacity>
//         <View style={styles.headerTitleContainer}>
//           <Text style={styles.headerTitle}>Contactless Sensors</Text>
//           <Text style={styles.headerSubtitle}>Manual Control</Text>
//         </View>
//         <View style={styles.backButton} />
//       </View>
//       <View style={styles.headerBorder} />

//       <ScrollView contentContainerStyle={styles.scrollContent}>
        
//         {/* Sensor Status Card */}
//         <View style={styles.card}>
//           <View style={styles.statusCardContent}>
//             <Image 
//               source={require('@/assets/images/contactor.png')} 
//               style={styles.sensorLargeIcon} 
//               resizeMode="contain" 
//             />
//             <View style={styles.statusTextContainer}>
//               <Text style={styles.statusTitle}>Sensor Status</Text>
//               <View style={styles.statusRow}>
//                 <View style={styles.statusDotGreen} />
//                 <Text style={styles.statusTextGreen}>Connected</Text>
//               </View>
//               <Text style={styles.statusSubtitle}>2 sensors online</Text>
//             </View>
//             <View style={styles.activeBadge}>
//               <Text style={styles.activeBadgeText}>ACTIVE</Text>
//             </View>
//           </View>
//         </View>

//         {/* Tabs */}
//         <View style={styles.tabsContainer}>
//           <TouchableOpacity 
//             style={[styles.tabButton, activeTab === 'SENSOR 1' && styles.tabButtonActive]}
//             onPress={() => setActiveTab('SENSOR 1')}
//           >
//             <Text style={[styles.tabButtonText, activeTab === 'SENSOR 1' && styles.tabButtonTextActive]}>
//               SENSOR 1
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity 
//             style={[styles.tabButton, activeTab === 'SENSOR 2' && styles.tabButtonActive]}
//             onPress={() => setActiveTab('SENSOR 2')}
//           >
//             <Text style={[styles.tabButtonText, activeTab === 'SENSOR 2' && styles.tabButtonTextActive]}>
//               SENSOR 2
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Manual Control Card */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Contactless Sensor {activeTab === 'SENSOR 1' ? '1' : '2'}</Text>
//           <Text style={styles.cardSubtitle}>Manual monitoring control</Text>
//           <View style={styles.actionButtonsContainer}>
//             <TouchableOpacity style={styles.startButton}>
//               <MaterialCommunityIcons name="access-point" size={24} color="#FFFFFF" />
//               <Text style={styles.startButtonText}>START MONITORING</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.stopButton}>
//               <MaterialCommunityIcons name="stop-circle-outline" size={24} color="#DC2626" />
//               <Text style={styles.stopButtonText}>STOP MONITORING</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Monitoring Schedule Card */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Monitoring Schedule</Text>
//           <Text style={styles.cardSubtitle}>Set the sensor detection window</Text>
          
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

//         <View style={styles.infoRow}>
//           <MaterialCommunityIcons name="information-outline" size={16} color="#6B7280" />
//           <Text style={styles.infoText}>Switch to Sensor 2 to view its schedule and history.</Text>
//         </View>

//         {/* Detection Log Card */}
//         <View style={styles.card}>
//           <View style={styles.logHeader}>
//             <Text style={styles.cardTitle}>Detection Log</Text>
//             <TouchableOpacity style={styles.viewAllRow}>
//               <Text style={styles.viewAllText}>View All</Text>
//               <MaterialCommunityIcons name="chevron-right" size={20} color="#0D9488" />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.logRow}>
//             <Text style={styles.logTime}>Today, 09:42 AM</Text>
//             <View style={styles.logStatusContainer}>
//               <Text style={styles.logStatusText}>Object Detected</Text>
//               <View style={[styles.logStatusDot, { backgroundColor: '#10B981' }]} />
//             </View>
//           </View>

//           <View style={styles.logDivider} />

//           <View style={styles.logRow}>
//             <Text style={styles.logTime}>Today, 08:15 AM</Text>
//             <View style={styles.logStatusContainer}>
//               <Text style={styles.logStatusText}>Monitoring Started</Text>
//               <View style={[styles.logStatusDot, { backgroundColor: '#10B981' }]} />
//             </View>
//           </View>

//           <View style={styles.logDivider} />

//           <View style={styles.logRow}>
//             <Text style={styles.logTime}>Yesterday, 06:15 PM</Text>
//             <View style={styles.logStatusContainer}>
//               <Text style={styles.logStatusText}>Monitoring Stopped</Text>
//               <View style={[styles.logStatusDot, { backgroundColor: '#6B7280' }]} />
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
//   sensorLargeIcon: {
//     width: 50,
//     height: 50,
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
//   activeBadge: {
//     backgroundColor: '#0D9488',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//   },
//   activeBadgeText: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     marginBottom: 16,
//     overflow: 'hidden',
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   tabButtonActive: {
//     backgroundColor: '#0D9488',
//   },
//   tabButtonText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#111827',
//   },
//   tabButtonTextActive: {
//     color: '#FFFFFF',
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
//     fontSize: 13,
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
//     fontSize: 13,
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
//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//     paddingHorizontal: 4,
//   },
//   infoText: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginLeft: 6,
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




// import React, { useCallback, useState } from 'react';

// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from 'react-native';

// import { SafeAreaView } from 'react-native-safe-area-context';

// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { router } from 'expo-router';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { useFocusEffect } from '@react-navigation/native';

// import {
//   getSensors,
//   getEquipmentManualLogs,
// } from '../../api/inletApi';

// export default function ContactorSensorScreen() {
//   const [activeTab, setActiveTab] = useState<
//     'SENSOR 1' | 'SENSOR 2'
//   >('SENSOR 1');

//   const [sensors, setSensors] = useState<any[]>([]);

//   const [activeSensorCount, setActiveSensorCount] =
//     useState(0);

//   const [detectionLogs, setDetectionLogs] = useState<any[]>(
//     []
//   );

//   const [logsLoading, setLogsLoading] =
//     useState(false);

//   const [logsError, setLogsError] = useState<string | null>(
//     null
//   );

//   // =========================================================
//   // DESLUDGING SENSOR EQUIPMENT IDS
//   // =========================================================
//   // IMPORTANT:
//   // Replace these IDs with the actual Desludging
//   // Contactor Sensor equipment IDs returned by your API.
//   //
//   // Your Desludging stage currently has:
//   // [42, 43, 39, 40, 41, 38]
//   //
//   // Do NOT assume 7 and 8 belong to Desludging.
//   // =========================================================

//   const DESLUDGING_SENSOR_1_ID = 40;
//   const DESLUDGING_SENSOR_2_ID = 41;

//   // =========================================================
//   // FETCH DETECTION LOGS
//   // =========================================================

//   const fetchDetectionLogs = async () => {
//     try {
//       setLogsLoading(true);
//       setLogsError(null);

//       // Get Desludging Stage ID
//       const stageId =
//         await AsyncStorage.getItem(
//           'desludgingStageId'
//         );

//       console.log(
//         'Desludging Stage ID:',
//         stageId
//       );

//       if (!stageId) {
//         console.log(
//           'Desludging Stage ID not found'
//         );

//         setDetectionLogs([]);

//         return;
//       }

//       // =====================================================
//       // SELECT SENSOR EQUIPMENT ID
//       // =====================================================

//       const equipmentId =
//         activeTab === 'SENSOR 1'
//           ? DESLUDGING_SENSOR_1_ID
//           : DESLUDGING_SENSOR_2_ID;

//       console.log(
//         'Fetching Desludging Detection Logs'
//       );

//       console.log(
//         'Sensor:',
//         activeTab
//       );

//       console.log(
//         'Equipment ID:',
//         equipmentId
//       );

//       console.log(
//         'Stage ID:',
//         Number(stageId)
//       );

//       // =====================================================
//       // GET MANUAL LOGS
//       // =====================================================

//       const response =
//         await getEquipmentManualLogs(
//           equipmentId,
//           Number(stageId)
//         );

//       console.log(
//         'Desludging Detection Logs Response:',
//         JSON.stringify(
//           response,
//           null,
//           2
//         )
//       );

//       if (
//         response?.success &&
//         Array.isArray(response?.data)
//       ) {
//         const latestLogs = [...response.data]
//           .sort(
//             (a: any, b: any) =>
//               new Date(
//                 b.created_at
//               ).getTime() -
//               new Date(
//                 a.created_at
//               ).getTime()
//           )
//           .slice(0, 3);

//         setDetectionLogs(
//           latestLogs
//         );
//       } else {
//         setDetectionLogs([]);
//       }
//     } catch (error: any) {
//       console.error(
//         'Failed to fetch Desludging detection logs:',
//         error?.response?.data ||
//           error
//       );

//       setDetectionLogs([]);

//       setLogsError(
//         'Unable to load detection logs'
//       );
//     } finally {
//       setLogsLoading(false);
//     }
//   };

//   // =========================================================
//   // FORMAT DATE TIME
//   // =========================================================

//   const formatDateTime = (
//     dateString: string
//   ) => {
//     if (!dateString) {
//       return '--';
//     }

//     const date = new Date(
//       dateString
//     );

//     return date.toLocaleString(
//       [],
//       {
//         day: '2-digit',
//         month: 'short',
//         hour: '2-digit',
//         minute: '2-digit',
//       }
//     );
//   };

//   // =========================================================
//   // FETCH DESLUDGING SENSORS
//   // =========================================================

//   useFocusEffect(
//     useCallback(() => {
//       const loadSensors = async () => {
//         try {
//           // =================================================
//           // GET DESLUDGING STAGE ID
//           // =================================================

//           const stageId =
//             await AsyncStorage.getItem(
//               'desludgingStageId'
//             );

//           console.log(
//             'Desludging Stage ID:',
//             stageId
//           );

//           if (!stageId) {
//             console.log(
//               'Desludging Stage ID not found'
//             );

//             setSensors([]);
//             setActiveSensorCount(0);

//             return;
//           }

//           // =================================================
//           // CALL SENSOR API
//           //
//           // GET
//           // /equipment/stage/{stageId}/sensors/
//           // =================================================

//           const response =
//             await getSensors(
//               Number(stageId)
//             );

//           console.log(
//             'Desludging Sensors API Response:',
//             JSON.stringify(
//               response,
//               null,
//               2
//             )
//           );

//           // =================================================
//           // GET SENSOR DATA
//           // =================================================

//           const sensorData =
//             response?.sensors || [];

//           setSensors(
//             sensorData
//           );

//           // =================================================
//           // FIND DESLUDGING SENSOR 1
//           // =================================================

//           const sensor1 =
//             sensorData.find(
//               (sensor: any) =>
//                 Number(
//                   sensor.equipment_id
//                 ) ===
//                 DESLUDGING_SENSOR_1_ID
//             );

//           // =================================================
//           // FIND DESLUDGING SENSOR 2
//           // =================================================

//           const sensor2 =
//             sensorData.find(
//               (sensor: any) =>
//                 Number(
//                   sensor.equipment_id
//                 ) ===
//                 DESLUDGING_SENSOR_2_ID
//             );

//           console.log(
//             'Desludging Sensor 1:',
//             sensor1
//           );

//           console.log(
//             'Desludging Sensor 2:',
//             sensor2
//           );

//           console.log(
//             'Sensor 1 current_state:',
//             sensor1?.current_state
//           );

//           console.log(
//             'Sensor 2 current_state:',
//             sensor2?.current_state
//           );

//           // =================================================
//           // BOTH SENSORS MUST BE ON
//           // =================================================

//           const bothSensorsOnline =
//             sensor1?.current_state ===
//               'ON' &&
//             sensor2?.current_state ===
//               'ON';

//           console.log(
//             'Both Desludging Sensors Online:',
//             bothSensorsOnline
//           );

//           // =================================================
//           // DISPLAY COUNT
//           //
//           // 2 = BOTH ONLINE
//           // 0 = NOT BOTH ONLINE
//           // =================================================

//           if (bothSensorsOnline) {
//             setActiveSensorCount(2);
//           } else {
//             setActiveSensorCount(0);
//           }

//           console.log(
//             'Desludging Sensor Display Count:',
//             bothSensorsOnline
//               ? 2
//               : 0
//           );
//         } catch (error: any) {
//           console.error(
//             'Error fetching Desludging sensors:',
//             error?.response?.data ||
//               error
//           );

//           setSensors([]);
//           setActiveSensorCount(0);
//         }
//       };

//       loadSensors();

//       fetchDetectionLogs();
//     }, [activeTab])
//   );

//   // =========================================================
//   // RETURN UI
//   // =========================================================

//   return (
//     <SafeAreaView
//       style={styles.container}
//     >
//       {/* ================= HEADER ================= */}

//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() =>
//             router.navigate(
//               '/desludging/settings'
//             )
//           }
//         >
//           <MaterialCommunityIcons
//             name="arrow-left"
//             size={24}
//             color="#1E3A8A"
//           />
//         </TouchableOpacity>

//         <View
//           style={
//             styles.headerTitleContainer
//           }
//         >
//           <Text
//             style={styles.headerTitle}
//           >
//             Contactless Sensors
//           </Text>

//           <Text
//             style={styles.headerSubtitle}
//           >
//             Desludging - Manual Control
//           </Text>
//         </View>

//         <View
//           style={styles.backButton}
//         />
//       </View>

//       <View
//         style={styles.headerBorder}
//       />

//       <ScrollView
//         contentContainerStyle={
//           styles.scrollContent
//         }
//       >
//         {/* ================= SENSOR STATUS CARD ================= */}

//         <View style={styles.card}>
//           <View
//             style={
//               styles.statusCardContent
//             }
//           >
//             <Image
//               source={require('@/assets/images/contactor.png')}
//               style={
//                 styles.sensorLargeIcon
//               }
//               resizeMode="contain"
//             />

//             <View
//               style={
//                 styles.statusTextContainer
//               }
//             >
//               <Text
//                 style={
//                   styles.statusTitle
//                 }
//               >
//                 Sensor Status
//               </Text>

//               {/* ================= CONNECTION STATUS ================= */}

//               <View
//                 style={styles.statusRow}
//               >
//                 <View
//                   style={[
//                     styles.statusDotGreen,
//                     {
//                       backgroundColor:
//                         activeSensorCount ===
//                         2
//                           ? '#10B981'
//                           : '#9CA3AF',
//                     },
//                   ]}
//                 />

//                 <Text
//                   style={[
//                     styles.statusTextGreen,
//                     {
//                       color:
//                         activeSensorCount ===
//                         2
//                           ? '#10B981'
//                           : '#6B7280',
//                     },
//                   ]}
//                 >
//                   {activeSensorCount ===
//                   2
//                     ? 'Connected'
//                     : 'Offline'}
//                 </Text>
//               </View>

//               {/* ================= SENSOR COUNT ================= */}

//               <Text
//                 style={
//                   styles.statusSubtitle
//                 }
//               >
//                 {activeSensorCount ===
//                 2
//                   ? '2 sensors online'
//                   : '2 sensors offline'}
//               </Text>
//             </View>

//             {/* ================= ACTIVE / OFF ================= */}

//             <View
//               style={[
//                 styles.statusBadge,
//                 {
//                   backgroundColor:
//                     activeSensorCount ===
//                     2
//                       ? '#0D9488'
//                       : '#F3F4F6',
//                 },
//               ]}
//             >
//               <Text
//                 style={[
//                   styles.statusBadgeText,
//                   {
//                     color:
//                       activeSensorCount ===
//                       2
//                         ? '#FFFFFF'
//                         : '#6B7280',
//                   },
//                 ]}
//               >
//                 {activeSensorCount ===
//                 2
//                   ? 'ACTIVE'
//                   : 'OFF'}
//               </Text>
//             </View>
//           </View>
//         </View>

//         {/* ================= SENSOR TABS ================= */}

//         <View
//           style={
//             styles.tabsContainer
//           }
//         >
//           <TouchableOpacity
//             style={[
//               styles.tabButton,
//               activeTab ===
//                 'SENSOR 1' &&
//                 styles.tabButtonActive,
//             ]}
//             onPress={() =>
//               setActiveTab(
//                 'SENSOR 1'
//               )
//             }
//           >
//             <Text
//               style={[
//                 styles.tabButtonText,
//                 activeTab ===
//                   'SENSOR 1' &&
//                   styles.tabButtonTextActive,
//               ]}
//             >
//               SENSOR 1
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[
//               styles.tabButton,
//               activeTab ===
//                 'SENSOR 2' &&
//                 styles.tabButtonActive,
//             ]}
//             onPress={() =>
//               setActiveTab(
//                 'SENSOR 2'
//               )
//             }
//           >
//             <Text
//               style={[
//                 styles.tabButtonText,
//                 activeTab ===
//                   'SENSOR 2' &&
//                   styles.tabButtonTextActive,
//               ]}
//             >
//               SENSOR 2
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* ================= DETECTION LOG ================= */}

//         <View style={styles.card}>
//           <View
//             style={styles.logHeader}
//           >
//             <Text
//               style={styles.cardTitle}
//             >
//               Detection Log
//             </Text>

//             <TouchableOpacity
//               style={
//                 styles.viewAllRow
//               }
//             >
//               <Text
//                 style={
//                   styles.viewAllText
//                 }
//               >
//                 View All
//               </Text>

//               <MaterialCommunityIcons
//                 name="chevron-right"
//                 size={20}
//                 color="#0D9488"
//               />
//             </TouchableOpacity>
//           </View>

//           {/* ================= LOADING ================= */}

//           {logsLoading && (
//             <View
//               style={
//                 styles.emptyLogContainer
//               }
//             >
//               <Text
//                 style={
//                   styles.emptyLogText
//                 }
//               >
//                 Loading detection logs...
//               </Text>
//             </View>
//           )}

//           {/* ================= ERROR ================= */}

//           {!logsLoading &&
//             logsError && (
//               <View
//                 style={
//                   styles.emptyLogContainer
//                 }
//               >
//                 <Text
//                   style={
//                     styles.errorLogText
//                   }
//                 >
//                   {logsError}
//                 </Text>
//               </View>
//             )}

//           {/* ================= NO LOGS ================= */}

//           {!logsLoading &&
//             !logsError &&
//             detectionLogs.length ===
//               0 && (
//               <View
//                 style={
//                   styles.emptyLogContainer
//                 }
//               >
//                 <MaterialCommunityIcons
//                   name="history"
//                   size={28}
//                   color="#9CA3AF"
//                 />

//                 <Text
//                   style={
//                     styles.emptyLogText
//                   }
//                 >
//                   No detection logs found
//                 </Text>
//               </View>
//             )}

//           {/* ================= API LOGS ================= */}

//           {!logsLoading &&
//             !logsError &&
//             detectionLogs.map(
//               (log, index) => {
//                 const isStarted =
//                   log.action ===
//                   'ON';

//                 const logTime =
//                   isStarted
//                     ? log.started_at
//                     : log.ended_at;

//                 return (
//                   <React.Fragment
//                     key={log.id}
//                   >
//                     <View
//                       style={
//                         styles.logRow
//                       }
//                     >
//                       <View
//                         style={{
//                           flex: 1,
//                         }}
//                       >
//                         <Text
//                           style={
//                             styles.logTime
//                           }
//                         >
//                           {formatDateTime(
//                             logTime
//                           )}
//                         </Text>

//                         <Text
//                           style={
//                             styles.logStage
//                           }
//                         >
//                           {log.stage
//                             ?.name ??
//                             'Desludging'}
//                         </Text>
//                       </View>

//                       <View
//                         style={
//                           styles.logStatusContainer
//                         }
//                       >
//                         <Text
//                           style={[
//                             styles.logStatusText,
//                             {
//                               color:
//                                 isStarted
//                                   ? '#10B981'
//                                   : '#6B7280',
//                             },
//                           ]}
//                         >
//                           {isStarted
//                             ? 'Monitoring Started'
//                             : 'Monitoring Stopped'}
//                         </Text>

//                         <View
//                           style={[
//                             styles.logStatusDot,
//                             {
//                               backgroundColor:
//                                 isStarted
//                                   ? '#10B981'
//                                   : '#6B7280',
//                             },
//                           ]}
//                         />
//                       </View>
//                     </View>

//                     {/* ================= DURATION ================= */}

//                     {!isStarted &&
//                       log.duration_seconds !==
//                         null &&
//                       log.duration_seconds !==
//                         undefined && (
//                         <Text
//                           style={
//                             styles.logDuration
//                           }
//                         >
//                           Duration:{' '}
//                           {Math.floor(
//                             Number(
//                               log.duration_seconds
//                             ) / 60
//                           )}{' '}
//                           min{' '}
//                           {Number(
//                             log.duration_seconds
//                           ) % 60}{' '}
//                           sec
//                         </Text>
//                       )}

//                     {index <
//                       detectionLogs.length -
//                         1 && (
//                       <View
//                         style={
//                           styles.logDivider
//                         }
//                       />
//                     )}
//                   </React.Fragment>
//                 );
//               }
//             )}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// /* ========================================================= */
// /* STYLES */
// /* ========================================================= */

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

//   sensorLargeIcon: {
//     width: 50,
//     height: 50,
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
//     marginRight: 6,
//   },

//   statusTextGreen: {
//     fontSize: 14,
//     fontWeight: '500',
//   },

//   statusSubtitle: {
//     fontSize: 12,
//     color: '#6B7280',
//   },

//   statusBadge: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//   },

//   statusBadgeText: {
//     fontSize: 13,
//     fontWeight: '600',
//   },

//   tabsContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     marginBottom: 16,
//     overflow: 'hidden',
//   },

//   tabButton: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },

//   tabButtonActive: {
//     backgroundColor: '#0D9488',
//   },

//   tabButtonText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#111827',
//   },

//   tabButtonTextActive: {
//     color: '#FFFFFF',
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

//   logStage: {
//     fontSize: 11,
//     color: '#9CA3AF',
//     marginTop: 3,
//   },

//   logStatusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   logStatusText: {
//     fontSize: 14,
//     marginRight: 8,
//   },

//   logStatusDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//   },

//   logDuration: {
//     fontSize: 11,
//     color: '#6B7280',
//     marginTop: -4,
//     marginBottom: 6,
//   },

//   logDivider: {
//     height: 1,
//     backgroundColor: '#F3F4F6',
//     marginVertical: 4,
//   },

//   emptyLogContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 20,
//   },

//   emptyLogText: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginTop: 6,
//   },

//   errorLogText: {
//     fontSize: 13,
//     color: '#DC2626',
//     textAlign: 'center',
//   },
// });





