// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { router } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { turnOnMotor, turnOffMotor } from '../../../../../api/inletApi';

// export default function InletPumpScreen() {
//   const [pumpStartTime, setPumpStartTime] = useState<string | null>(null);
//   const [pumpEndTime, setPumpEndTime] = useState<string | null>(null);
//   const [pumpDuration, setPumpDuration] = useState<number | null>(null);
//   //    const handleStartPump = async () => {
//   //   try {
//   //     const stageId = await AsyncStorage.getItem('selectedStageId');

//   //     console.log('Selected Stage ID:', stageId);

//   //     if (!stageId) {
//   //       console.log('Stage ID not found');
//   //       return;
//   //     }

//   //     const motorId = 2;

//   //     console.log('Motor ID:', motorId);
//   //     console.log('Stage ID:', Number(stageId));

//   //     const response = await turnOnMotor(
//   //       motorId,
//   //       Number(stageId)
//   //     );

//   //     console.log('Motor ON Response:', response);

//   //     if (response.status === 'ACTIVE') {
//   //       // Show only Start Time
//   //       setPumpStartTime(response.started_at);

//   //       // Hide End Time and Running Time
//   //       setPumpEndTime(null);
//   //       setPumpDuration(null);
//   //     }

//   //   } catch (error) {
//   //     console.error('Failed to start pump:', error);
//   //   }
//   // };

//   const handleStartPump = async () => {
//     try {
//       const stageId = await AsyncStorage.getItem('selectedStageId');

//       console.log('Selected Stage ID:', stageId);

//       if (!stageId) {
//         console.log('Stage ID not found');
//         return;
//       }

//       const motorId = 2;

//       console.log('Motor ID:', motorId);
//       console.log('Stage ID:', Number(stageId));

//       const response = await turnOnMotor(
//         motorId,
//         Number(stageId)
//       );

//       console.log('Motor ON Response:', response);
//       console.log('Sensors from response:', response.sensors);

//       if (response.success && response.data.current_state === 'ON') {
//         // Show Start Time
//         setPumpStartTime(response.data.started_at);

//         // Hide End Time and Running Time
//         setPumpEndTime(null);
//         setPumpDuration(null);

//         // ================= SENSOR STATUS =================

//         // const sensors = response.sensors || [];

//         // const sensor1 = sensors.find(
//         //   (sensor: any) => sensor.id === 3
//         // );

//         // const sensor2 = sensors.find(
//         //   (sensor: any) => sensor.id === 4
//         // );

//         // // Store Sensor 1 status
//         // await AsyncStorage.setItem(
//         //   'sensor1Status',
//         //   sensor1?.status || 'INACTIVE'
//         // );

//         // // Store Sensor 2 status
//         // await AsyncStorage.setItem(
//         //   'sensor2Status',
//         //   sensor2?.status || 'INACTIVE'
//         // );

//         // console.log(
//         //   'Sensor 1 Status:',
//         //   sensor1?.status
//         // );

//         // console.log(
//         //   'Sensor 2 Status:',
//         //   sensor2?.status
//         // );
//       }

//     } catch (error) {
//       console.error('Failed to start pump:', error);
//     }
//   };

//   const handleStopPump = async () => {
//     try {
//       const stageId = await AsyncStorage.getItem('selectedStageId');

//       console.log('Selected Stage ID:', stageId);

//       if (!stageId) {
//         console.log('Stage ID not found');
//         return;
//       }

//       const motorId = 2;

//       console.log('Motor ID:', motorId);
//       console.log('Stage ID:', Number(stageId));

//       const response = await turnOffMotor(
//         motorId,
//         Number(stageId)
//       );

//       console.log('Motor OFF Response:', response);

//       if (response.success && response.data.current_state === 'OFF') {
//         // Hide Start Time
//         setPumpStartTime(null);

//         // Show End Time
//         setPumpEndTime(response.data.ended_at);

//         // Show Running Time
//         setPumpDuration(response.data.duration_seconds);

//         // Get sensors from OFF response
//         // const sensors = response.sensors || [];

//         // const sensor1 = sensors.find(
//         //   (sensor: any) => sensor.id === 3
//         // );

//         // const sensor2 = sensors.find(
//         //   (sensor: any) => sensor.id === 4
//         // );

//         // // Save sensor status as INACTIVE
//         // await AsyncStorage.setItem(
//         //   'sensor1Status',
//         //   sensor1?.status || 'INACTIVE'
//         // );

//         // await AsyncStorage.setItem(
//         //   'sensor2Status',
//         //   sensor2?.status || 'INACTIVE'
//         // );

//         // console.log('Sensor 1 Status:', sensor1?.status);
//         // console.log('Sensor 2 Status:', sensor2?.status);
//       }

//     } catch (error) {
//       console.error('Failed to stop pump:', error);
//     }
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/inlet/wastewater/settings')}>
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
//             {/* <TouchableOpacity style={styles.startButton}>
//               <MaterialCommunityIcons name="power" size={24} color="#FFFFFF" />
//               <Text style={styles.startButtonText}>START PUMP</Text>
//             </TouchableOpacity> */}
//             <TouchableOpacity
//               style={styles.startButton}
//               onPress={handleStartPump}
//             >
//               <MaterialCommunityIcons
//                 name="power"
//                 size={24}
//                 color="#FFFFFF"
//               />
//               <Text style={styles.startButtonText}>START PUMP</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.stopButton}
//               onPress={handleStopPump}
//             >
//               <MaterialCommunityIcons
//                 name="stop-circle-outline"
//                 size={24}
//                 color="#DC2626"
//               />
//               <Text style={styles.stopButtonText}>STOP PUMP</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Operating Schedule Card */}
//         {/* Start Time */}
//         {pumpStartTime && (
//           <>
//             <View style={styles.scheduleRow}>
//               <View style={styles.scheduleLabelContainer}>
//                 <MaterialCommunityIcons
//                   name="clock-outline"
//                   size={22}
//                   color="#1A5B9C"
//                 />

//                 <Text style={styles.scheduleLabel}>
//                   Start Time
//                 </Text>
//               </View>

//               <View style={styles.timeInputBox}>
//                 <Text style={styles.timeInputText}>
//                   {new Date(pumpStartTime).toLocaleTimeString([], {
//                     hour: '2-digit',
//                     minute: '2-digit',
//                   })}
//                 </Text>
//               </View>
//             </View>
//           </>
//         )}

//         {/* End Time + Running Time */}
//         {pumpEndTime && (
//           <>
//             <View style={styles.scheduleRow}>
//               <View style={styles.scheduleLabelContainer}>
//                 <MaterialCommunityIcons
//                   name="clock-outline"
//                   size={22}
//                   color="#1A5B9C"
//                 />

//                 <Text style={styles.scheduleLabel}>
//                   End Time
//                 </Text>
//               </View>

//               <View style={styles.timeInputBox}>
//                 <Text style={styles.timeInputText}>
//                   {new Date(pumpEndTime).toLocaleTimeString([], {
//                     hour: '2-digit',
//                     minute: '2-digit',
//                   })}
//                 </Text>
//               </View>
//             </View>

//             <View style={styles.divider} />

//             <View style={styles.scheduleRow}>
//               <View style={styles.scheduleLabelContainer}>
//                 <MaterialCommunityIcons
//                   name="clock-outline"
//                   size={22}
//                   color="#1A5B9C"
//                 />

//                 <Text style={styles.scheduleLabel}>
//                   Running Time
//                 </Text>
//               </View>

//               <View style={styles.timeInputBox}>
//                 <Text style={styles.timeInputText}>
//                   {pumpDuration !== null
//                     ? `${Math.floor(pumpDuration / 60)} min ${pumpDuration % 60} sec`
//                     : '--'}
//                 </Text>
//               </View>
//             </View>
//           </>
//         )}

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



import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { router } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {

  turnOnMotor,

  turnOffMotor,

  getEquipmentManualLogs,

} from '../../../../../api/inletApi';


export default function InletPumpScreen() {

  const [pumpStartTime, setPumpStartTime] = useState<string | null>(null);

  const [pumpEndTime, setPumpEndTime] = useState<string | null>(null);

  const [pumpDuration, setPumpDuration] = useState<number | null>(null);


  const [activityLogs, setActivityLogs] = useState<any[]>([]);

  const [logsLoading, setLogsLoading] = useState(false);

  const [logsError, setLogsError] = useState<string | null>(null);

  // const handleStartPump = async () => {

  // try {

  // const stageId = await AsyncStorage.getItem('selectedStageId');


  // console.log('Selected Stage ID:', stageId);


  // if (!stageId) {

  // console.log('Stage ID not found');

  // return;

  // }


  // const motorId = 2;


  // console.log('Motor ID:', motorId);

  // console.log('Stage ID:', Number(stageId));


  // const response = await turnOnMotor(

  // motorId,

  // Number(stageId)

  // );


  // console.log('Motor ON Response:', response);


  // if (response.status === 'ACTIVE') {

  // // Show only Start Time

  // setPumpStartTime(response.started_at);


  // // Hide End Time and Running Time

  // setPumpEndTime(null);

  // setPumpDuration(null);

  // }


  // } catch (error) {

  // console.error('Failed to start pump:', error);

  // }

  // };


  const fetchActivityLogs = async () => {

    try {

      setLogsLoading(true);

      setLogsError(null);


      const stageId = await AsyncStorage.getItem('selectedStageId');


      if (!stageId) {

        console.log('Stage ID not found');

        setActivityLogs([]);

        return;

      }


      // Inlet Pump 1 equipment ID

      const equipmentId = 2;

      // const equipmentId = activeTab === 'VALVE 1' ? 1 : 2;


      console.log('Fetching Pump Logs for Equipment ID:', equipmentId);

      console.log('Stage ID:', Number(stageId));


      const response = await getEquipmentManualLogs(

        equipmentId,

        Number(stageId)

      );


      console.log('Pump Manual Logs:', response);


      if (response?.success && Array.isArray(response?.data)) {

        const latestLogs = response.data

          .sort(

            (a: any, b: any) =>

              new Date(b.created_at).getTime() -

              new Date(a.created_at).getTime()

          )

          .slice(0, 3);


        setActivityLogs(latestLogs);

      } else {

        setActivityLogs([]);

      }

    } catch (error: any) {

      console.error('Failed to fetch pump activity logs:', error);


      setActivityLogs([]);

      setLogsError('Unable to load activity logs');

    } finally {

      setLogsLoading(false);

    }

  };


  useEffect(() => {

    fetchActivityLogs();

  }, []);


  const formatDateTime = (dateString: string) => {

    if (!dateString) return '--';


    const date = new Date(dateString);


    return date.toLocaleString([], {

      day: '2-digit',

      month: 'short',

      hour: '2-digit',

      minute: '2-digit',

    });

  };


  // const handleStartPump = async () => {

  // try {

  // const stageId = await AsyncStorage.getItem('selectedStageId');


  // console.log('Selected Stage ID:', stageId);


  // if (!stageId) {

  // console.log('Stage ID not found');

  // return;

  // }


  // const motorId = 2;


  // console.log('Motor ID:', motorId);

  // console.log('Stage ID:', Number(stageId));


  // const response = await turnOnMotor(

  // motorId,

  // Number(stageId)

  // );


  // console.log('Motor ON Response:', response);

  // console.log('Sensors from response:', response.sensors);


  // if (response.data.equipment.status === 'ACTIVE') {

  // // Show Start Time

  // setPumpStartTime(response.data.started_at);


  // // Hide End Time and Running Time

  // setPumpEndTime(null);

  // setPumpDuration(null);


  // // ================= SENSOR STATUS =================


  // // const sensors = response.sensors || [];


  // // const sensor1 = sensors.find(

  // // (sensor: any) => sensor.id === 3

  // // );


  // // const sensor2 = sensors.find(

  // // (sensor: any) => sensor.id === 4

  // // );


  // // // Store Sensor 1 status

  // // await AsyncStorage.setItem(

  // // 'sensor1Status',

  // // sensor1?.status || 'INACTIVE'

  // // );


  // // // Store Sensor 2 status

  // // await AsyncStorage.setItem(

  // // 'sensor2Status',

  // // sensor2?.status || 'INACTIVE'

  // // );


  // // console.log(

  // // 'Sensor 1 Status:',

  // // sensor1?.status

  // // );


  // // console.log(

  // // 'Sensor 2 Status:',

  // // sensor2?.status

  // // );


  // await fetchActivityLogs();

  // }


  // } catch (error) {

  // console.error('Failed to start pump:', error);

  // }

  // };




const handleStartPump = async () => {
  try {
    const stageId = await AsyncStorage.getItem('selectedStageId');

    console.log('Selected Stage ID:', stageId);

    if (!stageId) {
      console.log('Stage ID not found');
      return;
    }

    const motorId = 2;

    console.log('Motor ID:', motorId);
    console.log('Stage ID:', Number(stageId));

    const response = await turnOnMotor(
      motorId,
      Number(stageId)
    );

    console.log(
      'Motor ON Response:',
      JSON.stringify(response, null, 2)
    );

    // Check actual motor state
    const currentState =
      response?.data?.current_state ??
      response?.current_state;

    console.log('Motor Current State:', currentState);

    if (response?.success && currentState === 'ON') {

      // API gives started_at
      const startedAt =
        response?.data?.started_at ??
        response?.started_at;

      console.log('Pump Started At:', startedAt);

      // Show Start Time
      setPumpStartTime(startedAt ?? null);

      // Hide End Time and Running Time
      setPumpEndTime(null);
      setPumpDuration(null);

      console.log('Pump started successfully');

      // Refresh operation log
      await fetchActivityLogs();
    }

  } catch (error: any) {
    console.error(
      'Failed to start pump:',
      error?.response?.data || error
    );
  }
};


  // const handleStopPump = async () => {

  // try {

  // const stageId = await AsyncStorage.getItem('selectedStageId');


  // console.log('Selected Stage ID:', stageId);


  // if (!stageId) {

  // console.log('Stage ID not found');

  // return;

  // }


  // const motorId = 2;


  // console.log('Motor ID:', motorId);

  // console.log('Stage ID:', Number(stageId));


  // const response = await turnOffMotor(

  // motorId,

  // Number(stageId)

  // );


  // console.log('Motor OFF Response:', response);


  // if (response.data.equipment.status === 'INACTIVE') {

  // // Hide Start Time

  // setPumpStartTime(null);


  // // Show End Time

  // setPumpEndTime(response.data.ended_at);


  // // Show Running Time

  // setPumpDuration(response.data.duration_seconds);


  // await fetchActivityLogs();


  // // Get sensors from OFF response

  // const sensors = response.sensors || [];


  // const sensor1 = sensors.find(

  // (sensor: any) => sensor.id === 3

  // );


  // const sensor2 = sensors.find(

  // (sensor: any) => sensor.id === 4

  // );


  // // Save sensor status as INACTIVE

  // await AsyncStorage.setItem(

  // 'sensor1Status',

  // sensor1?.status || 'INACTIVE'

  // );


  // await AsyncStorage.setItem(

  // 'sensor2Status',

  // sensor2?.status || 'INACTIVE'

  // );


  // console.log('Sensor 1 Status:', sensor1?.status);

  // console.log('Sensor 2 Status:', sensor2?.status);

  // }


  // } catch (error) {

  // console.error('Failed to stop pump:', error);

  // }

  // };




  const handleStopPump = async () => {

    try {

      const stageId = await AsyncStorage.getItem('selectedStageId');


      console.log('Selected Stage ID:', stageId);


      if (!stageId) {

        console.log('Stage ID not found');

        return;

      }


      const motorId = 2;


      console.log('Motor ID:', motorId);

      console.log('Stage ID:', Number(stageId));


      const response = await turnOffMotor(

        motorId,

        Number(stageId)

      );


      console.log(

        'Motor OFF Response:',

        JSON.stringify(response, null, 2)

      );


      const status =

        response?.data?.equipment?.status ??

        response?.data?.status ??

        response?.status;


      console.log('Pump Status:', status);


      if (status === 'INACTIVE') {


        const endedAt =

          response?.data?.ended_at ??

          response?.ended_at;


        const duration =

          response?.data?.duration_seconds ??

          response?.duration_seconds;


        setPumpStartTime(null);


        setPumpEndTime(endedAt ?? null);


        setPumpDuration(duration ?? null);


        console.log('Pump stopped successfully');


        // Refresh operation log

        await fetchActivityLogs();


        // Fetch again after backend updates the log

        // setTimeout(() => {

        // fetchActivityLogs();

        // }, 800);


        // Sensor status

        const sensors =

          response?.data?.sensors ??

          response?.sensors ??

          [];


        const sensor1 = sensors.find(

          (sensor: any) => sensor.id === 3

        );


        const sensor2 = sensors.find(

          (sensor: any) => sensor.id === 4

        );


        await AsyncStorage.setItem(

          'sensor1Status',

          sensor1?.status || 'INACTIVE'

        );


        await AsyncStorage.setItem(

          'sensor2Status',

          sensor2?.status || 'INACTIVE'

        );


        console.log(

          'Sensor 1 Status:',

          sensor1?.status

        );


        console.log(

          'Sensor 2 Status:',

          sensor2?.status

        );

      }


    } catch (error: any) {

      console.error(

        'Failed to stop pump:',

        error?.response?.data || error

      );

    }

  };

  return (

    <SafeAreaView style={styles.container}>

      {/* Header */}

      <View style={styles.header}>

        <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/inlet/wastewater/settings')}>

          <MaterialCommunityIcons name="arrow-left" size={24} color="#1E3A8A" />

        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>

          <Text style={styles.headerTitle}>Inlet Pump 1</Text>

          <Text style={styles.headerSubtitle}>Manual Control</Text>

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

            <View style={styles.offBadge}>

              <Text style={styles.offBadgeText}>OFF</Text>

            </View>

          </View>

        </View>


        {/* Manual Control Card */}

        <View style={styles.card}>

          <Text style={styles.cardTitle}>Manual Control</Text>

          <View style={styles.actionButtonsContainer}>

            {/* <TouchableOpacity style={styles.startButton}>

<MaterialCommunityIcons name="power" size={24} color="#FFFFFF" />

<Text style={styles.startButtonText}>START PUMP</Text>

</TouchableOpacity> */}

            <TouchableOpacity

              style={styles.startButton}

              onPress={handleStartPump}

            >

              <MaterialCommunityIcons

                name="power"

                size={24}

                color="#FFFFFF"

              />

              <Text style={styles.startButtonText}>START PUMP</Text>

            </TouchableOpacity>


            <TouchableOpacity

              style={styles.stopButton}

              onPress={handleStopPump}

            >

              <MaterialCommunityIcons

                name="stop-circle-outline"

                size={24}

                color="#DC2626"

              />

              <Text style={styles.stopButtonText}>STOP PUMP</Text>

            </TouchableOpacity>

          </View>

        </View>


        {/* Operating Schedule Card */}

        {/* Start Time */}

        {pumpStartTime && (

          <>

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

                  {new Date(pumpStartTime).toLocaleTimeString([], {

                    hour: '2-digit',

                    minute: '2-digit',

                  })}

                </Text>

              </View>

            </View>

          </>

        )}


        {/* End Time + Running Time */}

        {pumpEndTime && (

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

                  {new Date(pumpEndTime).toLocaleTimeString([], {

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

                  {pumpDuration !== null

                    ? `${Math.floor(pumpDuration / 60)} min ${pumpDuration % 60} sec`

                    : '--'}

                </Text>

              </View>

            </View>

          </>

        )}


        {/* Operation Log Card */}

        {/* Operation Log Card */}

        <View style={styles.card}>


          {/* Log Header */}

          <View style={styles.logHeader}>

            <Text style={styles.cardTitle}>

              Operation Log

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


          {/* Loading */}

          {logsLoading && (

            <View style={styles.emptyLogContainer}>

              <Text style={styles.emptyLogText}>

                Loading operation logs...

              </Text>

            </View>

          )}


          {/* Error */}

          {!logsLoading && logsError && (

            <View style={styles.emptyLogContainer}>

              <Text style={styles.errorLogText}>

                {logsError}

              </Text>

            </View>

          )}


          {/* No Logs */}

          {!logsLoading &&

            !logsError &&

            activityLogs.length === 0 && (

              <View style={styles.emptyLogContainer}>


                <MaterialCommunityIcons

                  name="history"

                  size={28}

                  color="#9CA3AF"

                />


                <Text style={styles.emptyLogText}>

                  No operation logs found

                </Text>


              </View>

            )}


          {/* API Logs */}

          {!logsLoading &&

            !logsError &&

            activityLogs.map((log, index) => (

              <React.Fragment key={log.id}>


                <View style={styles.logRow}>


                  <View style={{ flex: 1 }}>


                    {/* Date / Time */}

                    <Text style={styles.logTime}>

                      {formatDateTime(log.started_at)}

                    </Text>


                    {/* Stage */}

                    <Text style={styles.logStage}>

                      {log.stage?.name ?? '--'}

                    </Text>


                  </View>


                  {/* Status */}

                  <View style={styles.logStatusContainer}>


                    <Text

                      style={[

                        styles.logStatusText,

                        {

                          color:

                            log.action === 'ON'

                              ? '#10B981'

                              : '#6B7280',

                        },

                      ]}

                    >

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


                {/* Duration */}

                {log.duration_seconds !== null &&

                  log.duration_seconds !== undefined && (

                    <Text style={styles.logDuration}>

                      Running Time:{' '}

                      {Math.floor(

                        log.duration_seconds / 60

                      )}{' '}

                      min{' '}

                      {log.duration_seconds % 60} sec

                    </Text>

                  )}


                {/* Divider */}

                {index < activityLogs.length - 1 && (

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

  emptyLogContainer: {

    alignItems: 'center',

    justifyContent: 'center',

    paddingVertical: 20,

  },


  emptyLogText: {

    fontSize: 13,

    color: '#6B7280',

    marginTop: 6,

  },


  errorLogText: {

    fontSize: 13,

    color: '#DC2626',

    textAlign: 'center',

  },


  logStage: {

    fontSize: 11,

    color: '#9CA3AF',

    marginTop: 3,

  },


  logDuration: {

    fontSize: 11,

    color: '#6B7280',

    marginTop: -4,

    marginBottom: 6,

  },

});