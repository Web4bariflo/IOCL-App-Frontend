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
// import { getSensors } from '../../../../../api/inletApi';

// export default function ContactorSensorScreen() {
//   const [activeTab, setActiveTab] = useState<'SENSOR 1' | 'SENSOR 2'>(
//     'SENSOR 1'
//   );

//   // const [sensor3Status, setSensor3Status] = useState('INACTIVE');
//   // const [sensor4Status, setSensor4Status] = useState('INACTIVE');

//   const [sensors, setSensors] = useState<any[]>([]);
// const [activeSensorCount, setActiveSensorCount] = useState(0);

//   // useFocusEffect(
//   //   useCallback(() => {
//   //     const loadSensorStatus = async () => {
//   //       try {
//   //         const sensor3 = await AsyncStorage.getItem('sensor3Status');
//   //         const sensor4 = await AsyncStorage.getItem('sensor4Status');

//   //         console.log('Sensor 3 Status:', sensor3);
//   //         console.log('Sensor 4 Status:', sensor4);

//   //         setSensor3Status(sensor3 || 'INACTIVE');
//   //         setSensor4Status(sensor4 || 'INACTIVE');
//   //       } catch (error) {
//   //         console.error('Error loading sensor status:', error);
//   //       }
//   //     };

//   //     loadSensorStatus();
//   //   }, [])
//   // );

// //   useFocusEffect(
// //   useCallback(() => {
// //     const loadSensors = async () => {
// //       try {
// //         // Get selected stage ID
// //         const stageId = await AsyncStorage.getItem('cleanWaterStageId');

// //         console.log('Selected Stage ID:', stageId);

// //         if (!stageId) {
// //           console.log('Stage ID not found');
// //           return;
// //         }

// //         // Call Sensors API
// //         const response = await getSensors(Number(stageId));

// //         console.log('Sensors API Response:', response);

// //         // API response:
// //         // {
// //         //   success: true,
// //         //   count: 2,
// //         //   data: [...]
// //         // }

// //         const sensorData = response.data || [];

// //         // Store sensor data
// //         setSensors(sensorData);

// //         // Count ACTIVE sensors from API
// //         const activeCount = sensorData.filter(
// //           (sensor: any) => sensor.status === 'ACTIVE'
// //         ).length;

// //         setActiveSensorCount(activeCount);

// //         console.log('Total Sensors:', sensorData.length);
// //         console.log('Active Sensors:', activeCount);

// //       } catch (error) {
// //         console.error('Error fetching sensors:', error);
// //       }
// //     };

// //     loadSensors();
// //   }, [])
// // );

// useFocusEffect(
//   useCallback(() => {
//     const loadSensors = async () => {
//       try {
//         const stageId = await AsyncStorage.getItem('cleanWaterStageId');

//         console.log('Selected Stage ID:', stageId);

//         if (!stageId) {
//           console.log('Stage ID not found');
//           return;
//         }

//         const response = await getSensors(Number(stageId));

//         console.log('Sensors API Response:', response);

//         // API returns sensors directly
//         const sensorData = response.sensors || [];

//         setSensors(sensorData);

//         // Count sensors whose current_state is ON
//         const activeCount = sensorData.filter(
//           (sensor: any) => sensor.current_state === 'ON'
//         ).length;

//         setActiveSensorCount(activeCount);

//         console.log('Total Sensors:', sensorData.length);
//         console.log('Active Sensors:', activeCount);

//       } catch (error) {
//         console.error('Error fetching sensors:', error);
//       }
//     };

//     loadSensors();
//   }, [])
// );


//   // const activeSensorCount = [
//   //   sensor3Status,
//   //   sensor4Status,
//   // ].filter(status => status === 'ACTIVE').length;

//   return (
//     <SafeAreaView style={styles.container}>

//       {/* ================= HEADER ================= */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.navigate('/(tabs)/inlet/cleanwater/settings')}
//         >
//           <MaterialCommunityIcons
//             name="arrow-left"
//             size={24}
//             color="#1E3A8A"
//           />
//         </TouchableOpacity>

//         <View style={styles.headerTitleContainer}>
//           <Text style={styles.headerTitle}>
//             Contactless Sensors
//           </Text>

//           <Text style={styles.headerSubtitle}>
//             Manual Control
//           </Text>
//         </View>

//         {/* Empty space for alignment */}
//         <View style={styles.backButton} />
//       </View>

//       <View style={styles.headerBorder} />

//       <ScrollView contentContainerStyle={styles.scrollContent}>

//         {/* ================= SENSOR STATUS CARD ================= */}
//         <View style={styles.card}>
//           <View style={styles.statusCardContent}>

//             <Image
//               source={require('@/assets/images/contactor.png')}
//               style={styles.sensorLargeIcon}
//               resizeMode="contain"
//             />

//             <View style={styles.statusTextContainer}>
//               <Text style={styles.statusTitle}>
//                 Sensor Status
//               </Text>

//               {/* <View style={styles.statusRow}>
//                 <View
//                   style={[
//                     styles.statusDotGreen,
//                     {
//                       backgroundColor:
//                         activeSensorCount > 0
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
//                         activeSensorCount > 0
//                           ? '#10B981'
//                           : '#6B7280',
//                     },
//                   ]}
//                 >
//                   {activeSensorCount > 0 ? 'Connected' : 'Offline'}
//                 </Text>
//               </View>

//               <Text style={styles.statusSubtitle}>
//                 {activeSensorCount === 2
//                   ? '2 sensors online'
//                   : activeSensorCount === 1
//                     ? '1 sensor online'
//                     : '2 sensors offline'}
//               </Text> */}

//               <View style={styles.statusRow}>
//                 <View
//                   style={[
//                     styles.statusDotGreen,
//                     {
//                       backgroundColor:
//                         activeSensorCount === 2
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
//                         activeSensorCount === 2
//                           ? '#10B981'
//                           : '#6B7280',
//                     },
//                   ]}
//                 >
//                   {activeSensorCount === 2 ? 'Connected' : 'Offline'}
//                 </Text>
//               </View>

//               <Text style={styles.statusSubtitle}>
//                 {activeSensorCount === 2
//                   ? '2 sensors online'
//                   : '2 sensors offline'}
//               </Text>
//             </View>

//             {/* <View
//               style={[
//                 styles.statusBadge,
//                 {
//                   backgroundColor:
//                     activeSensorCount > 0
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
//                       activeSensorCount > 0
//                         ? '#FFFFFF'
//                         : '#6B7280',
//                   },
//                 ]}
//               >
//                 {activeSensorCount > 0 ? 'ACTIVE' : 'OFF'}
//               </Text>
//             </View> */}

//                  <View
//               style={[
//                 styles.statusBadge,
//                 {
//                   backgroundColor:
//                     activeSensorCount === 2
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
//                       activeSensorCount === 2
//                         ? '#FFFFFF'
//                         : '#6B7280',
//                   },
//                 ]}
//               >
//                 {activeSensorCount === 2 ? 'ACTIVE' : 'OFF'}
//               </Text>
//             </View>

//           </View>
//         </View>

//         {/* ================= SENSOR TABS ================= */}
//         <View style={styles.tabsContainer}>

//           <TouchableOpacity
//             style={[
//               styles.tabButton,
//               activeTab === 'SENSOR 1' &&
//               styles.tabButtonActive,
//             ]}
//             onPress={() => setActiveTab('SENSOR 1')}
//           >
//             <Text
//               style={[
//                 styles.tabButtonText,
//                 activeTab === 'SENSOR 1' &&
//                 styles.tabButtonTextActive,
//               ]}
//             >
//               SENSOR 1
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[
//               styles.tabButton,
//               activeTab === 'SENSOR 2' &&
//               styles.tabButtonActive,
//             ]}
//             onPress={() => setActiveTab('SENSOR 2')}
//           >
//             <Text
//               style={[
//                 styles.tabButtonText,
//                 activeTab === 'SENSOR 2' &&
//                 styles.tabButtonTextActive,
//               ]}
//             >
//               SENSOR 2
//             </Text>
//           </TouchableOpacity>

//         </View>

//         {/* ================= POWER CONTROL =================
//         <View style={styles.card}>

//           <Text style={styles.cardTitle}>
//             Sensor Power Control
//           </Text>

//           <Text style={styles.cardSubtitle}>
//             Turn the selected sensor ON or OFF
//           </Text>

//           <TouchableOpacity
//             style={[
//               styles.powerButton,
//               isPowerOn && styles.powerButtonOn,
//             ]}
//             onPress={() => setIsPowerOn(!isPowerOn)}
//             activeOpacity={0.8}
//           >
//             <MaterialCommunityIcons
//               name="power"
//               size={26}
//               color="#FFFFFF"
//             />

//             <Text style={styles.powerButtonText}>
//               {isPowerOn ? 'POWER ON' : 'POWER OFF'}
//             </Text>
//           </TouchableOpacity>

//         </View> */}

//         {/* ================= DETECTION LOG ================= */}
//         <View style={styles.card}>

//           <View style={styles.logHeader}>
//             <Text style={styles.cardTitle}>
//               Detection Log
//             </Text>

//             <TouchableOpacity style={styles.viewAllRow}>
//               <Text style={styles.viewAllText}>
//                 View All
//               </Text>

//               <MaterialCommunityIcons
//                 name="chevron-right"
//                 size={20}
//                 color="#0D9488"
//               />
//             </TouchableOpacity>
//           </View>

//           {/* Log 1 */}
//           <View style={styles.logRow}>
//             <Text style={styles.logTime}>
//               Today, 09:42 AM
//             </Text>

//             <View style={styles.logStatusContainer}>
//               <Text style={styles.logStatusText}>
//                 Object Detected
//               </Text>

//               <View
//                 style={[
//                   styles.logStatusDot,
//                   { backgroundColor: '#10B981' },
//                 ]}
//               />
//             </View>
//           </View>

//           <View style={styles.logDivider} />

//           {/* Log 2 */}
//           <View style={styles.logRow}>
//             <Text style={styles.logTime}>
//               Today, 08:15 AM
//             </Text>

//             <View style={styles.logStatusContainer}>
//               <Text style={styles.logStatusText}>
//                 Monitoring Started
//               </Text>

//               <View
//                 style={[
//                   styles.logStatusDot,
//                   { backgroundColor: '#10B981' },
//                 ]}
//               />
//             </View>
//           </View>

//           <View style={styles.logDivider} />

//           {/* Log 3 */}
//           <View style={styles.logRow}>
//             <Text style={styles.logTime}>
//               Yesterday, 06:15 PM
//             </Text>

//             <View style={styles.logStatusContainer}>
//               <Text style={styles.logStatusText}>
//                 Monitoring Stopped
//               </Text>

//               <View
//                 style={[
//                   styles.logStatusDot,
//                   { backgroundColor: '#6B7280' },
//                 ]}
//               />
//             </View>
//           </View>

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

//   /* ================= HEADER ================= */

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

//   /* ================= SCROLL ================= */

//   scrollContent: {
//     padding: 16,
//     paddingBottom: 40,
//   },

//   /* ================= CARD ================= */

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

//   /* ================= SENSOR STATUS ================= */

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

//   /* ================= TABS ================= */

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

//   /* ================= POWER CONTROL ================= */

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

//   powerButton: {
//     height: 48,
//     backgroundColor: '#DC2626',
//     borderRadius: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   powerButtonOn: {
//     backgroundColor: '#0D9488',
//   },

//   powerButtonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: '700',
//     marginLeft: 8,
//   },

//   /* ================= LOG ================= */

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

// } from '../../../../../api/inletApi';


// export default function ContactorSensorScreen() {

//   const [activeTab, setActiveTab] = useState<'SENSOR 1' | 'SENSOR 2'>(

//     'SENSOR 1'

//   );


//   // const [sensor3Status, setSensor3Status] = useState('INACTIVE');

//   // const [sensor4Status, setSensor4Status] = useState('INACTIVE');


//   const [sensors, setSensors] = useState<any[]>([]);

//   const [activeSensorCount, setActiveSensorCount] = useState(0);


//   const [detectionLogs, setDetectionLogs] = useState<any[]>([]);

//   const [logsLoading, setLogsLoading] = useState(false);

//   const [logsError, setLogsError] = useState<string | null>(null);


//   // useFocusEffect(

//   // useCallback(() => {

//   // const loadSensorStatus = async () => {

//   // try {

//   // const sensor3 = await AsyncStorage.getItem('sensor3Status');

//   // const sensor4 = await AsyncStorage.getItem('sensor4Status');


//   // console.log('Sensor 3 Status:', sensor3);

//   // console.log('Sensor 4 Status:', sensor4);


//   // setSensor3Status(sensor3 || 'INACTIVE');

//   // setSensor4Status(sensor4 || 'INACTIVE');

//   // } catch (error) {

//   // console.error('Error loading sensor status:', error);

//   // }

//   // };


//   // loadSensorStatus();

//   // }, [])

//   // );


//   const fetchDetectionLogs = async () => {

//     try {

//       setLogsLoading(true);

//       setLogsError(null);


//       const stageId = await AsyncStorage.getItem('cleanWaterStageId');


//       if (!stageId) {

//         console.log('Clean Water Stage ID not found');

//         setDetectionLogs([]);

//         return;

//       }


//       // SENSOR 1 = Equipment ID 7

//       // SENSOR 2 = Equipment ID 8

//       const equipmentId = activeTab === 'SENSOR 1' ? 7 : 8;


//       console.log('Fetching Clean Water Detection Logs');

//       console.log('Equipment ID:', equipmentId);

//       console.log('Stage ID:', Number(stageId));


//       const response = await getEquipmentManualLogs(

//         equipmentId,

//         Number(stageId)

//       );


//       console.log(

//         'Clean Water Detection Logs Response:',

//         JSON.stringify(response, null, 2)

//       );


//       if (response?.success && Array.isArray(response?.data)) {

//         const latestLogs = [...response.data]

//           .sort(

//             (a: any, b: any) =>

//               new Date(b.created_at).getTime() -

//               new Date(a.created_at).getTime()

//           )

//           .slice(0, 3);


//         setDetectionLogs(latestLogs);

//       } else {

//         setDetectionLogs([]);

//       }

//     } catch (error: any) {

//       console.error(

//         'Failed to fetch clean water detection logs:',

//         error?.response?.data || error

//       );


//       setDetectionLogs([]);

//       setLogsError('Unable to load detection logs');

//     } finally {

//       setLogsLoading(false);

//     }

//   };




//   const formatDateTime = (dateString: string) => {

//     if (!dateString) return '--';


//     const date = new Date(dateString);


//     return date.toLocaleString([], {

//       day: '2-digit',

//       month: 'short',

//       hour: '2-digit',

//       minute: '2-digit',

//     });

//   };


//   useFocusEffect(

//     useCallback(() => {

//       const loadSensors = async () => {

//         try {

//           const stageId = await AsyncStorage.getItem(

//             'cleanWaterStageId'

//           );


//           console.log('Selected Stage ID:', stageId);


//           if (!stageId) {

//             console.log('Stage ID not found');

//             return;

//           }


//           const response = await getSensors(Number(stageId));


//           console.log('Sensors API Response:', response);


//           const sensorData = response.data || [];


//           setSensors(sensorData);


//           const activeCount = sensorData.filter(

//             (sensor: any) => sensor.status === 'ACTIVE'

//           ).length;


//           setActiveSensorCount(activeCount);


//           console.log('Total Sensors:', sensorData.length);

//           console.log('Active Sensors:', activeCount);

//         } catch (error) {

//           console.error('Error fetching sensors:', error);

//         }

//       };


//       loadSensors();

//       fetchDetectionLogs();

//     }, [activeTab])

//   );


//   // const activeSensorCount = [

//   // sensor3Status,

//   // sensor4Status,

//   // ].filter(status => status === 'ACTIVE').length;


//   return (

//     <SafeAreaView style={styles.container}>


//       {/* ================= HEADER ================= */}

//       <View style={styles.header}>

//         <TouchableOpacity

//           style={styles.backButton}

//           onPress={() => router.navigate('/(tabs)/inlet/cleanwater/settings')}

//         >

//           <MaterialCommunityIcons

//             name="arrow-left"

//             size={24}

//             color="#1E3A8A"

//           />

//         </TouchableOpacity>


//         <View style={styles.headerTitleContainer}>

//           <Text style={styles.headerTitle}>

//             Contactless Sensors

//           </Text>


//           <Text style={styles.headerSubtitle}>

//             Manual Control

//           </Text>

//         </View>


//         {/* Empty space for alignment */}

//         <View style={styles.backButton} />

//       </View>


//       <View style={styles.headerBorder} />


//       <ScrollView contentContainerStyle={styles.scrollContent}>


//         {/* ================= SENSOR STATUS CARD ================= */}

//         <View style={styles.card}>

//           <View style={styles.statusCardContent}>


//             <Image

//               source={require('@/assets/images/contactor.png')}

//               style={styles.sensorLargeIcon}

//               resizeMode="contain"

//             />


//             <View style={styles.statusTextContainer}>

//               <Text style={styles.statusTitle}>

//                 Sensor Status

//               </Text>


//               <View style={styles.statusRow}>

//                 <View

//                   style={[

//                     styles.statusDotGreen,

//                     {

//                       backgroundColor:

//                         activeSensorCount > 0

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

//                         activeSensorCount > 0

//                           ? '#10B981'

//                           : '#6B7280',

//                     },

//                   ]}

//                 >

//                   {activeSensorCount > 0 ? 'Connected' : 'Offline'}

//                 </Text>

//               </View>


//               <Text style={styles.statusSubtitle}>

//                 {activeSensorCount === 2

//                   ? '2 sensors online'

//                   : activeSensorCount === 1

//                     ? '1 sensor online'

//                     : '2 sensors offline'}

//               </Text>

//             </View>


//             <View

//               style={[

//                 styles.statusBadge,

//                 {

//                   backgroundColor:

//                     activeSensorCount > 0

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

//                       activeSensorCount > 0

//                         ? '#FFFFFF'

//                         : '#6B7280',

//                   },

//                 ]}

//               >

//                 {activeSensorCount > 0 ? 'ACTIVE' : 'OFF'}

//               </Text>

//             </View>


//           </View>

//         </View>


//         {/* ================= SENSOR TABS ================= */}

//         <View style={styles.tabsContainer}>


//           <TouchableOpacity

//             style={[

//               styles.tabButton,

//               activeTab === 'SENSOR 1' &&

//               styles.tabButtonActive,

//             ]}

//             onPress={() => setActiveTab('SENSOR 1')}

//           >

//             <Text

//               style={[

//                 styles.tabButtonText,

//                 activeTab === 'SENSOR 1' &&

//                 styles.tabButtonTextActive,

//               ]}

//             >

//               SENSOR 1

//             </Text>

//           </TouchableOpacity>


//           <TouchableOpacity

//             style={[

//               styles.tabButton,

//               activeTab === 'SENSOR 2' &&

//               styles.tabButtonActive,

//             ]}

//             onPress={() => setActiveTab('SENSOR 2')}

//           >

//             <Text

//               style={[

//                 styles.tabButtonText,

//                 activeTab === 'SENSOR 2' &&

//                 styles.tabButtonTextActive,

//               ]}

//             >

//               SENSOR 2

//             </Text>

//           </TouchableOpacity>


//         </View>


//         {/* ================= POWER CONTROL =================

// <View style={styles.card}>


// <Text style={styles.cardTitle}>

// Sensor Power Control

// </Text>


// <Text style={styles.cardSubtitle}>

// Turn the selected sensor ON or OFF

// </Text>


// <TouchableOpacity

// style={[

// styles.powerButton,

// isPowerOn && styles.powerButtonOn,

// ]}

// onPress={() => setIsPowerOn(!isPowerOn)}

// activeOpacity={0.8}

// >

// <MaterialCommunityIcons

// name="power"

// size={26}

// color="#FFFFFF"

// />


// <Text style={styles.powerButtonText}>

// {isPowerOn ? 'POWER ON' : 'POWER OFF'}

// </Text>

// </TouchableOpacity>


// </View> */}


//         {/* ================= DETECTION LOG ================= */}

//         {/* ================= DETECTION LOG ================= */}

//         <View style={styles.card}>


//           <View style={styles.logHeader}>

//             <Text style={styles.cardTitle}>

//               Detection Log

//             </Text>


//             <TouchableOpacity style={styles.viewAllRow}>

//               <Text style={styles.viewAllText}>

//                 View All

//               </Text>


//               <MaterialCommunityIcons

//                 name="chevron-right"

//                 size={20}

//                 color="#0D9488"

//               />

//             </TouchableOpacity>

//           </View>


//           {/* Loading */}

//           {logsLoading && (

//             <View style={styles.emptyLogContainer}>

//               <Text style={styles.emptyLogText}>

//                 Loading detection logs...

//               </Text>

//             </View>

//           )}


//           {/* Error */}

//           {!logsLoading && logsError && (

//             <View style={styles.emptyLogContainer}>

//               <Text style={styles.errorLogText}>

//                 {logsError}

//               </Text>

//             </View>

//           )}


//           {/* No Logs */}

//           {!logsLoading &&

//             !logsError &&

//             detectionLogs.length === 0 && (

//               <View style={styles.emptyLogContainer}>


//                 <MaterialCommunityIcons

//                   name="history"

//                   size={28}

//                   color="#9CA3AF"

//                 />


//                 <Text style={styles.emptyLogText}>

//                   No detection logs found

//                 </Text>


//               </View>

//             )}


//           {/* API Logs */}

//           {!logsLoading &&

//             !logsError &&

//             detectionLogs.map((log, index) => {


//               const isStarted = log.action === 'ON';


//               const logTime = isStarted

//                 ? log.started_at

//                 : log.ended_at;


//               return (

//                 <React.Fragment key={log.id}>


//                   <View style={styles.logRow}>


//                     <View style={{ flex: 1 }}>


//                       <Text style={styles.logTime}>

//                         {formatDateTime(logTime)}

//                       </Text>


//                       <Text style={styles.logStage}>

//                         {log.stage?.name ?? '--'}

//                       </Text>


//                     </View>


//                     <View style={styles.logStatusContainer}>


//                       <Text

//                         style={[

//                           styles.logStatusText,

//                           {

//                             color: isStarted

//                               ? '#10B981'

//                               : '#6B7280',

//                           },

//                         ]}

//                       >

//                         {isStarted

//                           ? 'Monitoring Started'

//                           : 'Monitoring Stopped'}

//                       </Text>


//                       <View

//                         style={[

//                           styles.logStatusDot,

//                           {

//                             backgroundColor: isStarted

//                               ? '#10B981'

//                               : '#6B7280',

//                           },

//                         ]}

//                       />


//                     </View>


//                   </View>


//                   {/* Duration for OFF log */}

//                   {!isStarted &&

//                     log.duration_seconds !== null &&

//                     log.duration_seconds !== undefined && (

//                       <Text style={styles.logDuration}>

//                         Duration:{' '}

//                         {Math.floor(

//                           Number(log.duration_seconds) / 60

//                         )}{' '}

//                         min{' '}

//                         {Number(log.duration_seconds) % 60} sec

//                       </Text>

//                     )}


//                   {index < detectionLogs.length - 1 && (

//                     <View style={styles.logDivider} />

//                   )}


//                 </React.Fragment>

//               );

//             })}


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


//   /* ================= HEADER ================= */


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


//   /* ================= SCROLL ================= */


//   scrollContent: {

//     padding: 16,

//     paddingBottom: 40,

//   },


//   /* ================= CARD ================= */


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


//   /* ================= SENSOR STATUS ================= */


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


//   /* ================= TABS ================= */


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


//   /* ================= POWER CONTROL ================= */


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


//   powerButton: {

//     height: 48,

//     backgroundColor: '#DC2626',

//     borderRadius: 8,

//     flexDirection: 'row',

//     alignItems: 'center',

//     justifyContent: 'center',

//   },


//   powerButtonOn: {

//     backgroundColor: '#0D9488',

//   },


//   powerButtonText: {

//     color: '#FFFFFF',

//     fontSize: 14,

//     fontWeight: '700',

//     marginLeft: 8,

//   },


//   /* ================= LOG ================= */


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


//   logStage: {

//     fontSize: 11,

//     color: '#9CA3AF',

//     marginTop: 3,

//   },


//   logDuration: {

//     fontSize: 11,

//     color: '#6B7280',

//     marginTop: -4,

//     marginBottom: 6,

//   },

// });

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

import {
  getSensors,
  getEquipmentManualLogs,
} from '../../../../../api/inletApi';

export default function ContactorSensorScreen() {
  const [activeTab, setActiveTab] = useState<
    'SENSOR 1' | 'SENSOR 2'
  >('SENSOR 1');

  const [sensors, setSensors] = useState<any[]>([]);

  const [activeSensorCount, setActiveSensorCount] =
    useState(0);

  const [detectionLogs, setDetectionLogs] = useState<any[]>(
    []
  );

  const [logsLoading, setLogsLoading] =
    useState(false);

  const [logsError, setLogsError] = useState<string | null>(
    null
  );

  // =========================================================
  // FETCH DETECTION LOGS
  // =========================================================

  const fetchDetectionLogs = async () => {
    try {
      setLogsLoading(true);
      setLogsError(null);

      const stageId =
        await AsyncStorage.getItem(
          'cleanWaterStageId'
        );

      if (!stageId) {
        console.log(
          'Clean Water Stage ID not found'
        );

        setDetectionLogs([]);

        return;
      }

      // SENSOR 1 = Equipment ID 7
      // SENSOR 2 = Equipment ID 8

      const equipmentId =
        activeTab === 'SENSOR 1' ? 7 : 8;

      console.log(
        'Fetching Clean Water Detection Logs'
      );

      console.log(
        'Equipment ID:',
        equipmentId
      );

      console.log(
        'Stage ID:',
        Number(stageId)
      );

      const response =
        await getEquipmentManualLogs(
          equipmentId,
          Number(stageId)
        );

      console.log(
        'Clean Water Detection Logs Response:',
        JSON.stringify(response, null, 2)
      );

      if (
        response?.success &&
        Array.isArray(response?.data)
      ) {
        const latestLogs = [...response.data]
          .sort(
            (a: any, b: any) =>
              new Date(
                b.created_at
              ).getTime() -
              new Date(
                a.created_at
              ).getTime()
          )
          .slice(0, 3);

        setDetectionLogs(
          latestLogs
        );
      } else {
        setDetectionLogs([]);
      }
    } catch (error: any) {
      console.error(
        'Failed to fetch clean water detection logs:',
        error?.response?.data || error
      );

      setDetectionLogs([]);

      setLogsError(
        'Unable to load detection logs'
      );
    } finally {
      setLogsLoading(false);
    }
  };

  // =========================================================
  // FORMAT DATE TIME
  // =========================================================

  const formatDateTime = (
    dateString: string
  ) => {
    if (!dateString) return '--';

    const date = new Date(
      dateString
    );

    return date.toLocaleString(
      [],
      {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      }
    );
  };

  // =========================================================
  // FETCH SENSORS
  // =========================================================

  useFocusEffect(
    useCallback(() => {
      const loadSensors = async () => {
        try {
          // Get Clean Water Stage ID
          const stageId =
            await AsyncStorage.getItem(
              'cleanWaterStageId'
            );

          console.log(
            'Selected Stage ID:',
            stageId
          );

          if (!stageId) {
            console.log(
              'Clean Water Stage ID not found'
            );

            setSensors([]);
            setActiveSensorCount(0);

            return;
          }

          // =================================================
          // CALL SENSOR API
          //
          // GET
          // /equipment/stage/{stageId}/sensors/
          // =================================================

          const response =
            await getSensors(
              Number(stageId)
            );

          console.log(
            'Sensors API Response:',
            JSON.stringify(
              response,
              null,
              2
            )
          );

          // =================================================
          // IMPORTANT
          //
          // API response:
          //
          // {
          //   success: true,
          //   sensor_count: 2,
          //   sensors: [...]
          // }
          //
          // Therefore use response.sensors
          // =================================================

          const sensorData =
            response?.sensors || [];

          setSensors(
            sensorData
          );

          // =================================================
          // CHECK CURRENT STATE
          //
          // We ONLY use:
          //
          // current_state === "ON"
          //
          // We DO NOT use:
          //
          // status
          // =================================================

          const sensor1 = sensorData.find(
            (sensor: any) =>
              sensor.equipment_id === 7
          );

          const sensor2 = sensorData.find(
            (sensor: any) =>
              sensor.equipment_id === 8
          );

          console.log(
            'Sensor 1 current_state:',
            sensor1?.current_state
          );

          console.log(
            'Sensor 2 current_state:',
            sensor2?.current_state
          );

          // =================================================
          // BOTH SENSORS MUST BE ON
          // =================================================

          const bothSensorsOnline =
            sensor1?.current_state === 'ON' &&
            sensor2?.current_state === 'ON';

          console.log(
            'Both Sensors Online:',
            bothSensorsOnline
          );

          // =================================================
          // 2 = ONLINE
          // 0 = OFFLINE
          // =================================================

          if (bothSensorsOnline) {
            setActiveSensorCount(2);
          } else {
            setActiveSensorCount(0);
          }

          console.log(
            'Sensor Display Count:',
            bothSensorsOnline ? 2 : 0
          );
        } catch (error: any) {
          console.error(
            'Error fetching sensors:',
            error?.response?.data ||
            error
          );

          setSensors([]);
          setActiveSensorCount(0);
        }
      };

      loadSensors();

      fetchDetectionLogs();
    }, [activeTab])
  );

  // =========================================================
  // RETURN UI
  // =========================================================

  return (
    <SafeAreaView
      style={styles.container}
    >
      {/* ================= HEADER ================= */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() =>
            router.navigate(
              '/(tabs)/inlet/cleanwater/settings'
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
          style={
            styles.headerTitleContainer
          }
        >
          <Text
            style={styles.headerTitle}
          >
            Contactless Sensors
          </Text>

          <Text
            style={styles.headerSubtitle}
          >
            Manual Control
          </Text>
        </View>

        <View
          style={styles.backButton}
        />
      </View>

      <View
        style={styles.headerBorder}
      />

      <ScrollView
        contentContainerStyle={
          styles.scrollContent
        }
      >
        {/* ================= SENSOR STATUS CARD ================= */}

        <View style={styles.card}>
          <View
            style={
              styles.statusCardContent
            }
          >
            <Image
              source={require('@/assets/images/contactor.png')}
              style={
                styles.sensorLargeIcon
              }
              resizeMode="contain"
            />

            <View
              style={
                styles.statusTextContainer
              }
            >
              <Text
                style={
                  styles.statusTitle
                }
              >
                Sensor Status
              </Text>

              {/* ================= CONNECTION STATUS ================= */}

              <View
                style={styles.statusRow}
              >
                <View
                  style={[
                    styles.statusDotGreen,
                    {
                      backgroundColor:
                        activeSensorCount ===
                          2
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
                        activeSensorCount ===
                          2
                          ? '#10B981'
                          : '#6B7280',
                    },
                  ]}
                >
                  {activeSensorCount ===
                    2
                    ? 'Connected'
                    : 'Offline'}
                </Text>
              </View>

              {/* ================= SENSOR COUNT ================= */}

              <Text
                style={
                  styles.statusSubtitle
                }
              >
                {activeSensorCount ===
                  2
                  ? '2 sensors online'
                  : '2 sensors offline'}
              </Text>
            </View>

            {/* ================= ACTIVE / OFF ================= */}

            <View
              style={[
                styles.statusBadge,
                {
                  backgroundColor:
                    activeSensorCount ===
                      2
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
                      activeSensorCount ===
                        2
                        ? '#FFFFFF'
                        : '#6B7280',
                  },
                ]}
              >
                {activeSensorCount ===
                  2
                  ? 'ACTIVE'
                  : 'OFF'}
              </Text>
            </View>
          </View>
        </View>

        {/* ================= SENSOR TABS ================= */}

        <View
          style={
            styles.tabsContainer
          }
        >
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab ===
              'SENSOR 1' &&
              styles.tabButtonActive,
            ]}
            onPress={() =>
              setActiveTab(
                'SENSOR 1'
              )
            }
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab ===
                'SENSOR 1' &&
                styles.tabButtonTextActive,
              ]}
            >
              SENSOR 1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab ===
              'SENSOR 2' &&
              styles.tabButtonActive,
            ]}
            onPress={() =>
              setActiveTab(
                'SENSOR 2'
              )
            }
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab ===
                'SENSOR 2' &&
                styles.tabButtonTextActive,
              ]}
            >
              SENSOR 2
            </Text>
          </TouchableOpacity>
        </View>

        {/* ================= DETECTION LOG ================= */}

        <View style={styles.card}>
          <View
            style={styles.logHeader}
          >
            <Text
              style={styles.cardTitle}
            >
              Detection Log
            </Text>

            <TouchableOpacity
              style={
                styles.viewAllRow
              }
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

          {/* ================= LOADING ================= */}

          {logsLoading && (
            <View
              style={
                styles.emptyLogContainer
              }
            >
              <Text
                style={
                  styles.emptyLogText
                }
              >
                Loading detection logs...
              </Text>
            </View>
          )}

          {/* ================= ERROR ================= */}

          {!logsLoading &&
            logsError && (
              <View
                style={
                  styles.emptyLogContainer
                }
              >
                <Text
                  style={
                    styles.errorLogText
                  }
                >
                  {logsError}
                </Text>
              </View>
            )}

          {/* ================= NO LOGS ================= */}

          {!logsLoading &&
            !logsError &&
            detectionLogs.length ===
            0 && (
              <View
                style={
                  styles.emptyLogContainer
                }
              >
                <MaterialCommunityIcons
                  name="history"
                  size={28}
                  color="#9CA3AF"
                />

                <Text
                  style={
                    styles.emptyLogText
                  }
                >
                  No detection logs found
                </Text>
              </View>
            )}

          {/* ================= API LOGS ================= */}

          {!logsLoading &&
            !logsError &&
            detectionLogs.map(
              (log, index) => {
                const isStarted =
                  log.action ===
                  'ON';

                const logTime =
                  isStarted
                    ? log.started_at
                    : log.ended_at;

                return (
                  <React.Fragment
                    key={log.id}
                  >
                    <View
                      style={
                        styles.logRow
                      }
                    >
                      <View
                        style={{
                          flex: 1,
                        }}
                      >
                        <Text
                          style={
                            styles.logTime
                          }
                        >
                          {formatDateTime(
                            logTime
                          )}
                        </Text>

                        <Text
                          style={
                            styles.logStage
                          }
                        >
                          {log.stage
                            ?.name ??
                            '--'}
                        </Text>
                      </View>

                      <View
                        style={
                          styles.logStatusContainer
                        }
                      >
                        <Text
                          style={[
                            styles.logStatusText,
                            {
                              color:
                                isStarted
                                  ? '#10B981'
                                  : '#6B7280',
                            },
                          ]}
                        >
                          {isStarted
                            ? 'Monitoring Started'
                            : 'Monitoring Stopped'}
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

                    {/* Duration for OFF log */}

                    {!isStarted &&
                      log.duration_seconds !==
                      null &&
                      log.duration_seconds !==
                      undefined && (
                        <Text
                          style={
                            styles.logDuration
                          }
                        >
                          Duration:{' '}
                          {Math.floor(
                            Number(
                              log.duration_seconds
                            ) / 60
                          )}{' '}
                          min{' '}
                          {Number(
                            log.duration_seconds
                          ) % 60}{' '}
                          sec
                        </Text>
                      )}

                    {index <
                      detectionLogs.length -
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
            )}
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