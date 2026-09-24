// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import React, { useState } from 'react';
// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useRouter } from 'expo-router'

// export default function MixingTankScreen() {
//   const router = useRouter();
//   const [systemRunning, setSystemRunning] = useState(false);
//   const [valvesActive, setValvesActive] = useState(false);
//   const [pumpActive, setPumpActive] = useState(false);
//   const [contactorsActive, setContactorsActive] = useState(false);

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* HEADER */}
//       {/* <View style={styles.header}>
//         <Text style={styles.headerTitle}>Mixing System</Text>
//         <Text style={styles.subtitle}>Automatic Mode</Text>
//         <View style={styles.offlineBadge}>
//           <Text style={styles.offlineText}>Offline</Text>
//         </View>
//       </View> */}

//       <View style={styles.header}>

//   <TouchableOpacity
//   style={styles.backButton}
//   onPress={() => router.replace('/(tabs)/dashboard')}
// >
//     <MaterialCommunityIcons
//       name="arrow-left"
//       size={26}
//       color="#1E3A5F"
//     />
//   </TouchableOpacity>

//   <View style={styles.headerCenter}>
//     <Text style={styles.headerTitle}>Mixing System</Text>
//     <Text style={styles.subtitle}>Automatic Mode</Text>
//   </View>

//   <View style={styles.offlineBadge}>
//     <Text style={styles.offlineText}>Offline</Text>
//   </View>

// </View>

//       <ScrollView contentContainerStyle={{ padding: 16 }}>
//         {/* SYSTEM OVERVIEW */}
//         <View style={styles.card}>
//           <Text style={styles.sectionTitle}>System Overview</Text>
//           <TouchableOpacity
//             style={styles.startBtn}
//             onPress={() => setSystemRunning(true)}
//           >
//             <View style={styles.startContent}>
//   <MaterialCommunityIcons
//     name="power"
//     size={22}
//     color="#fff"
//   />
//   <Text style={styles.startText}>START SYSTEM</Text>
// </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.stopBtn}
//             onPress={() => setSystemRunning(false)}
//           >
//             <Text style={styles.stopText}>■  STOP</Text>
//           </TouchableOpacity>
//         </View>

//         {/* SOLENOID VALVES */}
//      <Card
//   title="Solenoid Valves"
//   subtitle="3 Valves"
//   image={require('../../../assets/images/solenoid.png')}
//   active={false}
//   hideStatus
// >
//   <ValveRow
//     label="Valve 1"
//     value={valvesActive ? 'Open' : 'Closed'}
//     active={valvesActive}
//   />

//   <ValveRow
//     label="Valve 2"
//     value={valvesActive ? 'Open' : 'Closed'}
//     active={valvesActive}
//   />

//   <ValveRow
//     label="Valve 3"
//     value={valvesActive ? 'Open' : 'Closed'}
//     active={valvesActive}
//   />
// </Card>

//         {/* INLET PUMP */}
//     <Card
//   title="Inlet Pump"
//   subtitle="3 Pumps"
//   image={require('../../../assets/images/inletpump.png')}
//   active={false}
//   hideStatus
// >
//   {/* Column Headers */}
//   <View style={styles.pumpHeaderRow}>
//     <View style={styles.pumpHeaderSpacer} />

//     <Text style={styles.pumpHeaderStatus}>
//       STATUS
//     </Text>

//     <Text style={styles.pumpHeaderSince}>
//       SINCE
//     </Text>
//   </View>

//   {/* Pump Rows */}
//   <PumpRow
//     label="Pump 1"
//     status="ON"
//     time="08:15 AM"
//     active={true}
//   />

//   <PumpRow
//     label="Pump 2"
//     status="ON"
//     time="08:15 AM"
//     active={true}
//   />

//   <PumpRow
//     label="Pump 3"
//     status="OFF"
//     time="08:15 AM"
//     active={false}
//   />
// </Card>

//         {/* CONTACTOR SENSORS */}
//         <Card
//           title="Contactor Sensors"
//           subtitle="2 Sensors"
//           image={require('../../../assets/images/contactor.png')}
//           active={contactorsActive}
//         >
//           <Row label="Contactor 1" value="Inactive" active={false} />
//           <Row label="Contactor 2" value="Inactive" active={false} />
//         </Card>

//         {/* STEPPER MOTOR */}
//         {/* <Card
//           title="Stepper Motor"
//           subtitle="Motor Monitoring"
//           image={require('../../../assets/images/StepperMotor.png')}
//           active={false}
//         >
//           <Row label="Inductive Sensor" value="Inactive" active={false} />
//           <Row label="Reed Sensor" value="Inactive" active={false} />
//           <View style={styles.motorStatus}>
//             <Text style={styles.statusLabel}>Motor Status</Text>
//             <Text style={[styles.statusValue, { color: '#EF4444' }]}>Stopped</Text>
//           </View>
//         </Card> */}

//         {/* ================= MOTOR SECTION ================= */}

// <View style={styles.card}>

//   {/* MOTOR HEADER */}
//   <View style={styles.motorHeader}>

//     <View style={styles.motorTitleContainer}>

//       <Image
//         source={require('@/assets/images/motor.png')}
//         style={styles.motorImage}
//         resizeMode="contain"
//       />

//       <View>
//         {/* equipment.equipment_type */}
//         <Text style={styles.motorTitle}>
//           Motor
//         </Text>

//         {/* equipment.name */}
//         <Text style={styles.motorSubtitle}>
//           Motor 1
//         </Text>
//       </View>

//     </View>

//     {/* equipment.status */}
//     <View style={styles.motorStatusBadge}>
//       <Text style={styles.motorStatusText}>
//         DEACTIVE
//       </Text>
//     </View>

//   </View>

//   {/* DIVIDER */}
//   <View style={styles.motorDivider} />

//   {/* STATUS + SINCE */}
//   <View style={styles.motorInfoRow}>

//     {/* CURRENT STATE */}
//     <View style={styles.motorInfoItem}>

//       <Text style={styles.motorInfoLabel}>
//         Status
//       </Text>

//       {/* equipment.current_state */}
//       <View style={styles.motorStateRow}>

//         <Text style={styles.motorStateText}>
//           OFF
//         </Text>

//         <View style={styles.motorOffDot} />

//       </View>

//     </View>

//     {/* START / END TIME */}
//     <View style={styles.motorInfoItemRight}>

//       <Text style={styles.motorInfoLabel}>
//         Since
//       </Text>

//       {/* OFF → equipment.end_time */}
//       <Text style={styles.motorTimeText}>
//         08:15 AM
//       </Text>

//     </View>

//   </View>

// </View>

//         {/* ==================== AUTOMATIC PROCESS ==================== */}
//         <View style={styles.card}>
//           <Text style={styles.sectionTitle}>Automatic Process</Text>

//           <ProcessRow
//             number="01"
//             text="Solenoid Valve"
//             image={require('../../../assets/images/solenoid.png')}
//             active
//           />
//           <ProcessRow
//             number="02"
//             text="Inlet Pump"
//             image={require('../../../assets/images/inletpump.png')}
//             active
//           />
//           <ProcessRow
//             number="03"
//             text="Control Sensor"
//             image={require('../../../assets/images/contactor.png')} // using contactor as closest
//             active
//             status="Detection ON"
//           />
//           <ProcessRow
//             number="04"
//             text="Contactor Sensor"
//             image={require('../../../assets/images/contactor.png')}
//             active
//             status="Detection ON"
//           />
//           <ProcessRow
//             number="06"
//             text="Stepper Motor"
//             image={require('../../../assets/images/StepperMotor.png')}
//             active
//             status="Running"
//           />
//           <ProcessRow
//             number="05"
//             text="Inlet Pump 1"
//             image={require('../../../assets/images/inletpump.png')}
//             active={false}
//           />
//         </View>

//         {/* TANK FILLING */}
//         <View style={styles.card}>
//           <Text style={styles.sectionTitle}>Tank Filling</Text>
//           <TankRow label="Wastewater Tank" percent={65} color="#3B82F6" />
//           <TankRow label="Normal Water Tank" percent={42} color="#14B8A6" />
//         </View>

//         {/* LOG */}
//         <View style={styles.card}>
//           <View style={styles.logHeader}>
//             <Text style={styles.sectionTitle}>Log</Text>
//             <Text style={styles.viewAll}>View All ›</Text>
//           </View>
//           <Text style={styles.recentActivity}>Recent Activity</Text>
//           <LogRow time="9:15 AM" message="Inlet Pump 1 Started" />
//           <LogRow time="9:12 AM" message="Valve 1 Opened" />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// /* ==================== COMPONENTS ==================== */

// function Card({
//   title,
//   subtitle,
//   image,
//   active,
//   children,
//   hideStatus = false,
// }: any) {
//   return (
//     <View style={styles.card}>
//       <View style={styles.cardHeader}>
//         <View style={styles.cardTitleRow}>
//           {image && (
//             <Image
//               source={image}
//               style={styles.cardIcon}
//               resizeMode="contain"
//             />
//           )}

//           <View>
//             <Text style={styles.sectionTitle}>{title}</Text>

//             {subtitle && (
//               <Text style={styles.cardSubtitle}>
//                 {subtitle}
//               </Text>
//             )}
//           </View>
//         </View>

//         {!hideStatus && (
//           <View
//             style={[
//               styles.deactiveBtn,
//               active && styles.activeBtn,
//             ]}
//           >
//             <Text
//               style={[
//                 styles.deactiveText,
//                 active && styles.activeText,
//               ]}
//             >
//               {active ? 'ACTIVE' : 'DEACTIVE'}
//             </Text>
//           </View>
//         )}
//       </View>

//       {children}
//     </View>
//   );
// }

// function ValveRow({ label, value, active }: any) {
//   return (
//     <View style={styles.valveRow}>
//       <Text style={styles.rowLabel}>{label}</Text>

//       <View style={styles.valveRightSection}>

//         {/* DEACTIVE Button */}
//         <TouchableOpacity
//           style={styles.valveDeactiveButton}
//           onPress={() => {
//             console.log(`${label} Deactivated`);
//           }}
//           activeOpacity={0.7}
//         >
//           <Text style={styles.valveDeactiveText}>
//             DEACTIVE
//           </Text>
//         </TouchableOpacity>

//         {/* Status */}
//         <View style={styles.rowValueContainer}>
//           <Text
//             style={[
//               styles.rowValue,
//               {
//                 color: active
//                   ? '#10B981'
//                   : '#6B7280',
//               },
//             ]}
//           >
//             {value}
//           </Text>

//           <View
//             style={[
//               styles.dot,
//               {
//                 backgroundColor: active
//                   ? '#10B981'
//                   : '#9CA3AF',
//               },
//             ]}
//           />
//         </View>

//       </View>
//     </View>
//   );
// }
// function PumpRow({
//   label,
//   status,
//   time,
//   active,
// }: any) {
//   return (
//     <View style={styles.pumpRow}>

//       {/* Pump Name */}
//       <Text style={styles.pumpLabel}>
//         {label}
//       </Text>

//       {/* Right Side */}
//       <View style={styles.pumpRightSection}>

//         {/* Deactive Button */}
//         <TouchableOpacity
//           style={styles.pumpDeactiveButton}
//           onPress={() => {
//             console.log(`${label} Deactivated`);
//           }}
//           activeOpacity={0.7}
//         >
//           <Text style={styles.pumpDeactiveText}>
//             DEACTIVE
//           </Text>
//         </TouchableOpacity>

//         {/* Status */}
//         <Text
//           style={[
//             styles.pumpStatusText,
//             {
//               color: active
//                 ? '#10B981'
//                 : '#EF4444',
//             },
//           ]}
//         >
//           {status}
//         </Text>

//         {/* Since */}
//         <Text style={styles.pumpTime}>
//           {time}
//         </Text>

//       </View>
//     </View>
//   );
// }


// function Row({ label, value, active }: any) {
//   return (
//     <View style={styles.row}>
//       <Text style={styles.rowLabel}>{label}</Text>
//       <View style={styles.rowValueContainer}>
//         <Text style={[styles.rowValue, { color: active ? '#10B981' : '#6B7280' }]}>
//           {value}
//         </Text>
//         <View style={[styles.dot, { backgroundColor: active ? '#10B981' : '#9CA3AF' }]} />
//       </View>
//     </View>
//   );
// }

// function ProcessRow({ number, text, image, active, status }: any) {
//   return (
//     <View style={styles.processRow}>
//       <View style={styles.processLeft}>
//         {/* Number Circle */}
//         <View
//           style={[
//             styles.processNumber,
//             active ? styles.processNumberActive : styles.processNumberInactive,
//           ]}
//         >
//           <Text style={styles.processNumberText}>{number}</Text>
//         </View>

//         {/* Icon + Text */}
//         <View style={styles.processIconText}>
//           {image && (
//             <Image source={image} style={styles.processIcon} resizeMode="contain" />
//           )}
//           <Text style={styles.processText}>{text}</Text>
//         </View>
//       </View>

//       <View style={styles.processRight}>
//         <Text style={{ color: active ? '#10B981' : '#EF4444', fontWeight: '600' }}>
//           {status || (active ? 'ON' : 'OFF')}
//         </Text>
//         <View
//           style={[
//             styles.dot,
//             { backgroundColor: active ? '#10B981' : '#EF4444' },
//           ]}
//         />
//       </View>
//     </View>
//   );
// }

// function TankRow({ label, percent, color }: any) {
//   return (
//     <View style={styles.tankRow}>
//       <Text style={styles.tankLabel}>{label}</Text>
//       <View style={styles.progressBarBackground}>
//         <View
//           style={[
//             styles.progressBarFill,
//             { width: `${percent}%`, backgroundColor: color },
//           ]}
//         />
//       </View>
//       <Text style={styles.tankPercent}>{percent}%</Text>
//     </View>
//   );
// }

// function LogRow({ time, message }: any) {
//   return (
//     <View style={styles.logRow}>
//       <Text style={styles.logTime}>{time}</Text>
//       <Text style={styles.logMessage}>{message}</Text>
//       <Text style={styles.logArrow}>›</Text>
//     </View>
//   );
// }

// /* ==================== STYLES ==================== */
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F5F7FA' },
// header: {
//   padding: 16,
//   backgroundColor: '#fff',
//   alignItems: 'center',
//   justifyContent: 'center',
//   position: 'relative',
//   minHeight: 75,
// },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#1E3A5F',
//   },
//   subtitle: {
//     color: '#10B981',
//     marginTop: 4,
//     fontWeight: '500',
//   },
//   offlineBadge: {
//     position: 'absolute',
//     right: 16,
//     top: 16,
//     backgroundColor: '#E5E7EB',
//     paddingHorizontal: 12,
//     paddingVertical: 4,
//     borderRadius: 20,
//   },
//   offlineText: {
//     color: '#6B7280',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 12,
//   },
//   cardTitleRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   cardIcon: {
//     width: 32,
//     height: 32,
//     marginRight: 12,
//   },
//   sectionTitle: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: '#1F2937',
//   },
//   cardSubtitle: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginTop: 2,
//   },
//   deactiveBtn: {
//     backgroundColor: '#E5E7EB',
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   activeBtn: {
//     backgroundColor: '#D1FAE5',
//   },
//   deactiveText: {
//     fontSize: 11,
//     fontWeight: '600',
//     color: '#6B7280',
//   },
//   activeText: {
//     color: '#059669',
//   },
//   startBtn: {
//     marginTop: 16,
//     backgroundColor: '#10B981',
//     padding: 14,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   startText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 15,
//   },
//   stopBtn: {
//     borderWidth: 1.5,
//     borderColor: '#EF4444',
//     padding: 14,
//     borderRadius: 8,
//   },
//   stopText: {
//     color: '#EF4444',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 15,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   rowLabel: {
//     color: '#374151',
//     fontSize: 14,
//   },
//   rowValueContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   rowValue: {
//     fontSize: 14,
//     marginRight: 8,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//   },
//   statusRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 4,
//   },
//   statusLabel: {
//     fontSize: 12,
//     color: '#9CA3AF',
//   },
//   statusValue: {
//     fontSize: 14,
//     color: '#374151',
//     marginTop: 2,
//   },
//   motorStatus: {
//     marginTop: 8,
//     paddingTop: 8,
//     borderTopWidth: 1,
//     borderTopColor: '#F3F4F6',
//   },

//   // ===== Process Row Styles =====
//   processRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   processLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   processNumber: {
//     width: 28,
//     height: 28,
//     borderRadius: 14,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   processNumberActive: {
//     backgroundColor: '#10B981',
//   },
//   processNumberInactive: {
//     backgroundColor: '#F3F4F6',
//   },
//   processNumberText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 12,
//   },
//   processIconText: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   processIcon: {
//     width: 22,
//     height: 22,
//     marginRight: 8,
//   },
//   processText: {
//     fontSize: 14,
//     color: '#374151',
//   },
//   processRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 6,
//   },

//   // ===== Tank & Log =====
//   tankRow: {
//     marginVertical: 10,
//   },
//   tankLabel: {
//     fontSize: 14,
//     color: '#374151',
//     marginBottom: 6,
//   },
//   progressBarBackground: {
//     height: 8,
//     backgroundColor: '#E5E7EB',
//     borderRadius: 4,
//     overflow: 'hidden',
//   },
//   progressBarFill: {
//     height: '100%',
//     borderRadius: 4,
//   },
//   tankPercent: {
//     position: 'absolute',
//     right: 0,
//     top: 0,
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#374151',
//   },
//   logHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   viewAll: {
//     color: '#3B82F6',
//     fontSize: 13,
//   },
//   recentActivity: {
//     fontSize: 12,
//     color: '#9CA3AF',
//     marginBottom: 12,
//   },
//   logRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#F3F4F6',
//   },
//   logTime: {
//     width: 70,
//     fontSize: 13,
//     color: '#6B7280',
//   },
//   logMessage: {
//     flex: 1,
//     fontSize: 14,
//     color: '#374151',
//   },
//   logArrow: {
//     fontSize: 18,
//     color: '#9CA3AF',
//   },
//   backButton: {
//   position: 'absolute',
//   left: 16,
//   top: 20,
//   padding: 4,
//   zIndex: 10,
// },

// headerCenter: {
//   alignItems: 'center',
// },
// startContent: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
//   gap: 8,
// },
// valveRow: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   paddingVertical: 10,
// },

// valveRightSection: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   gap: 10,
// },

// valveDeactiveButton: {
//   backgroundColor: '#E5E7EB',
//   paddingHorizontal: 10,
//   paddingVertical: 5,
//   borderRadius: 12,
// },

// valveDeactiveText: {
//   fontSize: 10,
//   fontWeight: '600',
//   color: '#6B7280',
// },
// pumpHeaderRow: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   marginBottom: 4,
// },

// pumpHeaderSpacer: {
//   flex: 1,
// },

// pumpHeaderStatus: {
//   width: 45,
//   textAlign: 'center',
//   fontSize: 10,
//   fontWeight: '600',
//   color: '#9CA3AF',
//   marginRight: 12,
// },

// pumpHeaderSince: {
//   width: 65,
//   textAlign: 'right',
//   fontSize: 10,
//   fontWeight: '600',
//   color: '#9CA3AF',
// },

// pumpRow: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   paddingVertical: 10,
// },

// pumpLabel: {
//   flex: 1,
//   fontSize: 14,
//   color: '#374151',
// },

// pumpRightSection: {
//   flexDirection: 'row',
//   alignItems: 'center',
// },

// pumpDeactiveButton: {
//   backgroundColor: '#E5E7EB',
//   paddingHorizontal: 10,
//   paddingVertical: 5,
//   borderRadius: 12,
//   marginRight: 12,
// },

// pumpDeactiveText: {
//   fontSize: 10,
//   fontWeight: '600',
//   color: '#6B7280',
// },

// pumpStatusText: {
//   width: 45,
//   textAlign: 'center',
//   fontSize: 13,
//   fontWeight: '600',
//   marginRight: 12,
// },

// pumpTime: {
//   width: 65,
//   textAlign: 'right',
//   fontSize: 13,
//   color: '#6B7280',
// },
// /* ================= MOTOR SECTION ================= */

// motorHeader: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-between',
// },

// motorTitleContainer: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   flex: 1,
// },

// motorImage: {
//   width: 40,
//   height: 40,
//   marginRight: 12,
// },

// motorTitle: {
//   fontSize: 16,
//   fontWeight: '700',
//   color: '#1F2937',
// },

// motorSubtitle: {
//   fontSize: 13,
//   color: '#6B7280',
//   marginTop: 3,
// },

// motorStatusBadge: {
//   backgroundColor: '#E5E7EB',
//   paddingHorizontal: 12,
//   paddingVertical: 6,
//   borderRadius: 8,
// },

// motorStatusText: {
//   fontSize: 11,
//   fontWeight: '700',
//   color: '#6B7280',
// },

// motorDivider: {
//   height: 1,
//   backgroundColor: '#E5E7EB',
//   marginVertical: 14,
// },

// motorInfoRow: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// },

// motorInfoItem: {
//   flex: 1,
// },

// motorInfoItemRight: {
//   alignItems: 'flex-end',
// },

// motorInfoLabel: {
//   fontSize: 12,
//   color: '#9CA3AF',
//   marginBottom: 4,
// },

// motorStateRow: {
//   flexDirection: 'row',
//   alignItems: 'center',
// },

// motorStateText: {
//   fontSize: 14,
//   fontWeight: '600',
//   color: '#EF4444',
// },

// motorOffDot: {
//   width: 8,
//   height: 8,
//   borderRadius: 4,
//   backgroundColor: '#EF4444',
//   marginLeft: 7,
// },

// motorTimeText: {
//   fontSize: 14,
//   fontWeight: '500',
//   color: '#374151',
// },
// });




import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {
  useCallback,
  useState,
  useEffect
} from 'react';

import { useFocusEffect } from '@react-navigation/native';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import {
  getStageStatus,
  startTreatmentStage,
  stopTreatmentStage,
  getStageProcessLogs,
} from '../../api/inletApi';

export default function MixingTankScreen() {
  const router = useRouter();

  const [systemRunning, setSystemRunning] = useState(false);
  const [valvesActive, setValvesActive] = useState(false);
  const [pumpActive, setPumpActive] = useState(false);
  const [contactorsActive, setContactorsActive] = useState(false);

  // ================= API DATA =================

  const [stageData, setStageData] = useState<any>(null);
  const [processLogs, setProcessLogs] =
  useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  // ================= GET MIXING TANK DATA =================

// =====================================================
// FETCH MIXING TANK STAGE STATUS
// =====================================================

const fetchMixingTankStatus =
  useCallback(async () => {
    try {
      setLoading(true);

      const stageId =
        await AsyncStorage.getItem(
          'mixingTankStageId'
        );

      console.log(
        'Stored Mixing Tank Stage ID:',
        stageId
      );

      if (!stageId) {
        console.log(
          '❌ Mixing Tank Stage ID not found'
        );
        return;
      }

      const numericStageId =
        Number(stageId);

      if (isNaN(numericStageId)) {
        console.log(
          '❌ Invalid Mixing Tank Stage ID:',
          stageId
        );
        return;
      }

      console.log(
        'Calling Mixing Tank Stage Status API:',
        numericStageId
      );

      const response =
        await getStageStatus(
          numericStageId
        );

      console.log(
        'Mixing Tank Stage Status:',
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
          'Current Mixing Tank Status:',
          stageStatus
        );

        if (
          stageStatus === 'RUNNING' ||
          stageStatus === 'IN_PROGRESS'
        ) {
          setSystemRunning(true);
        }

        if (
          stageStatus === 'COMPLETED' ||
          stageStatus === 'STOPPED'
        ) {
          setSystemRunning(false);
        }

        console.log(
          'Mixing Tank Equipment:',
          JSON.stringify(
            response.data?.equipment,
            null,
            2
          )
        );

        console.log(
          'Mixing Tank Processes:',
          JSON.stringify(
            response.data?.processes,
            null,
            2
          )
        );
      }
    } catch (error: any) {
      console.log(
        '❌ Mixing Tank Stage Status Error:',
        error.response?.data ||
          error.message
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // =====================================================
// FETCH MIXING TANK PROCESS LOGS
// =====================================================

const fetchStageProcessLogs =
  useCallback(async () => {
    try {
      const stageId =
        await AsyncStorage.getItem(
          'mixingTankStageId'
        );

      console.log(
        'Mixing Tank Process Logs Stage ID:',
        stageId
      );

      if (!stageId) {
        console.log(
          '❌ Mixing Tank Stage ID not found'
        );
        return;
      }

      const numericStageId =
        Number(stageId);

      if (isNaN(numericStageId)) {
        console.log(
          '❌ Invalid Mixing Tank Stage ID:',
          stageId
        );
        return;
      }

      const response =
        await getStageProcessLogs(
          numericStageId
        );

      console.log(
        'Mixing Tank Process Logs:',
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
        '❌ Mixing Tank Process Logs Error:',
        error.response?.data ||
          error.message
      );
    }
  }, []);


  // =====================================================
// START MIXING TANK SYSTEM
// =====================================================

const handleStartSystem =
  async () => {
    try {
      if (systemRunning) {
        return;
      }

      const stageId =
        await AsyncStorage.getItem(
          'mixingTankStageId'
        );

      console.log(
        'Start Mixing Tank Stage ID:',
        stageId
      );

      if (!stageId) {
        console.log(
          '❌ Mixing Tank Stage ID not found'
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
        '🚀 Starting Mixing Tank Stage:',
        numericStageId
      );

      const response =
        await startTreatmentStage(
          numericStageId
        );

      console.log(
        'Start Mixing Tank Response:',
        JSON.stringify(
          response,
          null,
          2
        )
      );

      if (response?.success) {
        setSystemRunning(true);

        await fetchMixingTankStatus();
        await fetchStageProcessLogs();
      }
    } catch (error: any) {
      console.log(
        '❌ Start Mixing Tank Error:',
        error.response?.data ||
          error.message
      );
    }
  };


  // =====================================================
// STOP MIXING TANK SYSTEM
// =====================================================

const handleStopSystem =
  async () => {
    try {
      const stageId =
        await AsyncStorage.getItem(
          'mixingTankStageId'
        );

      if (!stageId) {
        console.log(
          '❌ Mixing Tank Stage ID not found'
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
        '🛑 Stopping Mixing Tank Stage:',
        numericStageId
      );

      const response =
        await stopTreatmentStage(
          numericStageId
        );

      console.log(
        'Stop Mixing Tank Response:',
        JSON.stringify(
          response,
          null,
          2
        )
      );

      if (response?.success) {
        setSystemRunning(false);

        await fetchMixingTankStatus();
        await fetchStageProcessLogs();
      }
    } catch (error: any) {
      console.log(
        '❌ Stop Mixing Tank Error:',
        error.response?.data ||
          error.message
      );
    }
  };

  

  // ================= POLLING =================

// =====================================================
// POLLING
// =====================================================

useFocusEffect(
  useCallback(() => {
    fetchMixingTankStatus();

    fetchStageProcessLogs();

    const interval =
      setInterval(() => {
        fetchMixingTankStatus();

        fetchStageProcessLogs();
      }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [
    fetchMixingTankStatus,
    fetchStageProcessLogs,
  ])
);
  

  // ================= EQUIPMENT DATA =================

  const equipments =
    stageData?.equipment || [];

  // Solenoid Valves

  const solenoidValves =
    equipments.filter(
      (equipment: any) =>
        equipment.equipment_type ===
        'Solenoid Valves'
    );

  // Inlet Pumps

  const inletPumps =
    equipments.filter(
      (equipment: any) =>
        equipment.equipment_type
          ?.toLowerCase()
          .includes('inlet pump')
    );

  // Contactor Sensors

  const contactorSensors =
    equipments.filter(
      (equipment: any) =>
        equipment.equipment_type ===
        'Contactor Sensors'
    );

  // Motor

  const motor =
    equipments.find(
      (equipment: any) =>
        equipment.equipment_type ===
        'Motor'
    );

  // ================= TIME FORMAT =================

  const formatTime = (
    timestamp?: string | null
  ) => {
    if (!timestamp) {
      return '--';
    }

    const date = new Date(timestamp);

    if (isNaN(date.getTime())) {
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

  // ================= HH:MM:SS TIME FORMAT =================

  const formatOnlyTime = (
    time?: string
  ) => {
    if (!time) {
      return '--';
    }

    try {
      const parts = time.split(':');

      if (parts.length < 2) {
        return time;
      }

      let hours = Number(parts[0]);
      const minutes = Number(parts[1]);

      const ampm =
        hours >= 12
          ? 'PM'
          : 'AM';

      hours = hours % 12;

      if (hours === 0) {
        hours = 12;
      }

      return `${String(hours).padStart(
        2,
        '0'
      )}:${String(minutes).padStart(
        2,
        '0'
      )} ${ampm}`;
    } catch (error) {
      return time;
    }
  };

  // ================= EQUIPMENT TIME =================

  const getEquipmentTime = (
    equipment: any
  ) => {
    if (!equipment) {
      return '--';
    }

    const currentState =
      String(
        equipment.current_state || ''
      ).toUpperCase();

    if (currentState === 'ON') {
      return formatOnlyTime(
        equipment.start_time
      );
    }

    if (currentState === 'OFF') {
      return formatOnlyTime(
        equipment.end_time
      );
    }

    return '--';
  };

  return (
    <SafeAreaView
      style={styles.container}
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() =>
            router.replace(
              '/(tabs)/dashboard'
            )
          }
        >

          <MaterialCommunityIcons
            name="arrow-left"
            size={26}
            color="#1E3A5F"
          />

        </TouchableOpacity>

        <View
          style={styles.headerCenter}
        >

          <Text
            style={styles.headerTitle}
          >
            Mixing System
          </Text>

          <Text
            style={styles.subtitle}
          >
            Automatic Mode
          </Text>

        </View>

        <View
          style={styles.offlineBadge}
        >

          <Text
            style={styles.offlineText}
          >
            Offline
          </Text>

        </View>

      </View>

      <ScrollView
        contentContainerStyle={{
          padding: 16,
        }}
      >

      {/* =================================================
    SYSTEM OVERVIEW
================================================= */}

<View style={styles.card}>

  <Text
    style={styles.sectionTitle}
  >
    System Overview
  </Text>

  <TouchableOpacity
    style={[
      styles.startBtn,
      systemRunning &&
        styles.startBtnDisabled,
    ]}
    activeOpacity={0.85}
    onPress={
      handleStartSystem
    }
    disabled={
      systemRunning
    }
  >

    <View
      style={styles.startContent}
    >

      <Ionicons
        name="power"
        size={20}
        color="#fff"
      />

      <Text
        style={styles.startText}
      >
        {systemRunning
          ? 'SYSTEM RUNNING'
          : 'START SYSTEM'}
      </Text>

    </View>

  </TouchableOpacity>

  <TouchableOpacity
    style={styles.stopBtn}
    activeOpacity={0.85}
    onPress={
      handleStopSystem
    }
    disabled={
      !systemRunning
    }
  >

    <Text
      style={styles.stopText}
    >
      ■ STOP
    </Text>

  </TouchableOpacity>

</View>

        {/* =================================================
            SOLENOID VALVES
        ================================================= */}

        <Card
          title={
            solenoidValves[0]
              ?.equipment_type ||
            'Solenoid Valves'
          }
          subtitle={`${solenoidValves.length || 3} Valves`}
          image={require('../../../assets/images/solenoid.png')}
          active={false}
          hideStatus
        >

          {solenoidValves.length > 0 ? (

            solenoidValves.map(
              (
                equipment: any,
                index: number
              ) => (

                <ValveRow
                  key={
                    equipment.id ||
                    index
                  }
                  label={
                    equipment.name ||
                    `Valve ${
                      index + 1
                    }`
                  }
                  value={
                    equipment.current_state ||
                    '--'
                  }
                  active={
                    String(
                      equipment.current_state
                    ).toUpperCase() ===
                    'ON'
                  }
                  status={
                    equipment.status ||
                    '--'
                  }
                />

              )
            )

          ) : (

            <>

              <ValveRow
                label="Valve 1"
                value="--"
                active={false}
                status="--"
              />

              <ValveRow
                label="Valve 2"
                value="--"
                active={false}
                status="--"
              />

              <ValveRow
                label="Valve 3"
                value="--"
                active={false}
                status="--"
              />

            </>

          )}

        </Card>

        {/* =================================================
            INLET PUMP
        ================================================= */}

        <Card
          title={
            inletPumps[0]
              ?.equipment_type ||
            'Inlet Pump'
          }
          subtitle={`${inletPumps.length || 3} Pumps`}
          image={require('../../../assets/images/inletpump.png')}
          active={false}
          hideStatus
        >

          {/* Column Headers */}

          <View
            style={
              styles.pumpHeaderRow
            }
          >

            <View
              style={
                styles.pumpHeaderSpacer
              }
            />

            <Text
              style={
                styles.pumpHeaderStatus
              }
            >
              STATUS
            </Text>

            <Text
              style={
                styles.pumpHeaderSince
              }
            >
              SINCE
            </Text>

          </View>

          {/* Pump Rows */}

          {inletPumps.length > 0 ? (

            inletPumps.map(
              (
                equipment: any,
                index: number
              ) => (

                <PumpRow
                  key={
                    equipment.id ||
                    index
                  }
                  label={
                    equipment.name ||
                    `Pump ${
                      index + 1
                    }`
                  }
                  status={
                    equipment.current_state ||
                    '--'
                  }
                  time={getEquipmentTime(
                    equipment
                  )}
                  active={
                    String(
                      equipment.current_state
                    ).toUpperCase() ===
                    'ON'
                  }
                  equipmentStatus={
                    equipment.status ||
                    '--'
                  }
                />

              )
            )

          ) : (

            <>

              <PumpRow
                label="Pump 1"
                status="--"
                time="--"
                active={false}
                equipmentStatus="--"
              />

              <PumpRow
                label="Pump 2"
                status="--"
                time="--"
                active={false}
                equipmentStatus="--"
              />

              <PumpRow
                label="Pump 3"
                status="--"
                time="--"
                active={false}
                equipmentStatus="--"
              />

            </>

          )}

        </Card>


        {/* =================================================
    CONTACTOR SENSORS
================================================= */}

<Card
  title={
    contactorSensors[0]?.equipment_type ||
    'Contactor Sensors'
  }
  subtitle={`${contactorSensors.length || 2} Sensors`}
  image={require('../../../assets/images/contactor.png')}
  active={
    String(
      contactorSensors[0]?.status || ''
    ).toUpperCase() === 'ACTIVE'
  }
  status={
    contactorSensors[0]?.status || '--'
  }
>
  {contactorSensors.length > 0 ? (

    contactorSensors.map(
      (
        equipment: any,
        index: number
      ) => (

        <Row
          key={
            equipment.id ||
            index
          }
          label={
            equipment.name ||
            `Sensor ${index + 1}`
          }
          value={
            equipment.current_state ||
            '--'
          }
          active={
            String(
              equipment.current_state || ''
            ).toUpperCase() === 'ON'
          }
          status={
            equipment.status ||
            '--'
          }
        />

      )
    )

  ) : (

    <>
      <Row
        label="Sensor 1"
        value="--"
        active={false}
        status="--"
      />

      <Row
        label="Sensor 2"
        value="--"
        active={false}
        status="--"
      />
    </>

  )}

</Card>

        {/* =================================================
            MOTOR SECTION
        ================================================= */}

        <View style={styles.card}>

          {/* MOTOR HEADER */}

          <View
            style={styles.motorHeader}
          >

            <View
              style={
                styles.motorTitleContainer
              }
            >

              <Image
                source={require('@/assets/images/motor.png')}
                style={
                  styles.motorImage
                }
                resizeMode="contain"
              />

              <View>

                <Text
                  style={
                    styles.motorTitle
                  }
                >
                  {motor?.equipment_type ||
                    'Motor'}
                </Text>

                <Text
                  style={
                    styles.motorSubtitle
                  }
                >
                  {motor?.name ||
                    'Motor 1'}
                </Text>

              </View>

            </View>

            {/* <View
              style={
                styles.motorStatusBadge
              }
            >

              <Text
                style={
                  styles.motorStatusText
                }
              >
                {motor?.status ||
                  'DEACTIVE'}
              </Text>

            </View> */}
            <View
  style={[
    styles.deactiveBtn,
    String(motor?.status || '').toUpperCase() === 'ACTIVE' &&
      styles.activeBtn,
  ]}
>
  <Text
    style={[
      styles.deactiveText,
      String(motor?.status || '').toUpperCase() === 'ACTIVE' &&
        styles.activeText,
    ]}
  >
    {motor?.status || '--'}
  </Text>
</View>

          </View>

          {/* DIVIDER */}

          <View
            style={styles.motorDivider}
          />

          {/* STATUS + SINCE */}

          <View
            style={styles.motorInfoRow}
          >

            {/* CURRENT STATE */}

            <View
              style={styles.motorInfoItem}
            >

              <Text
                style={
                  styles.motorInfoLabel
                }
              >
                Status
              </Text>

              <View
                style={
                  styles.motorStateRow
                }
              >

                <Text
                  style={[
                    styles.motorStateText,
                    {
                      color:
                        String(
                          motor?.current_state
                        ).toUpperCase() ===
                        'ON'
                          ? '#10B981'
                          : '#EF4444',
                    },
                  ]}
                >
                  {motor?.current_state ||
                    '--'}
                </Text>

                <View
                  style={[
                    styles.motorOffDot,
                    {
                      backgroundColor:
                        String(
                          motor?.current_state
                        ).toUpperCase() ===
                        'ON'
                          ? '#10B981'
                          : '#EF4444',
                    },
                  ]}
                />

              </View>

            </View>

            {/* START / END TIME */}

            <View
              style={
                styles.motorInfoItemRight
              }
            >

              <Text
                style={
                  styles.motorInfoLabel
                }
              >
                Since
              </Text>

              <Text
                style={
                  styles.motorTimeText
                }
              >
                {getEquipmentTime(
                  motor
                )}
              </Text>

            </View>

          </View>

        </View>

        {/* =================================================
            AUTOMATIC PROCESS
        ================================================= */}

        <View style={styles.card}>

          <Text
            style={styles.sectionTitle}
          >
            Automatic Process
          </Text>

          {(() => {

            let stepNumber = 0;

            return stageData?.processes?.map(
              (
                process: any,
                index: number
              ) => {

                const processEquipment =
                  process?.equipment ||
                  [];

                return (
                  <React.Fragment
                    key={
                      process?.execution_id ||
                      index
                    }
                  >

                    {processEquipment.map(
                      (item: any) => {

                        stepNumber += 1;

                        const equipmentName =
                          item?.name ||
                          '--';

                        const equipmentType =
                          item?.equipment_type ||
                          '--';

                        const equipmentState =
                          String(
                            item?.state ?? ''
                          ).toUpperCase();

                        return (
                          <View
                            key={`${process?.execution_id}-${item?.id || stepNumber}`}
                            style={
                              styles.processRow
                            }
                          >

                            {/* STEP NUMBER */}

                            <View
                              style={
                                styles.processNumber
                              }
                            >

                              <Text
                                style={
                                  styles.processNumberText
                                }
                              >
                                {String(
                                  stepNumber
                                ).padStart(
                                  2,
                                  '0'
                                )}
                              </Text>

                            </View>

                            {/* ICON */}

                            <View
                              style={
                                styles.processIcon
                              }
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

                                <MaterialCommunityIcons
                                  name="access-point"
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

                                <MaterialCommunityIcons
                                  name="cog-outline"
                                  size={20}
                                  color="#1e88e5"
                                />

                              )}

                            </View>

                            {/* PROCESS + EQUIPMENT */}

                            <View
                              style={
                                styles.processInfo
                              }
                            >

                              <Text
                                style={
                                  styles.processTitle
                                }
                              >
                                {equipmentName}
                              </Text>

                              <Text
                                style={
                                  styles.processType
                                }
                              >
                                {equipmentType}
                              </Text>

                            </View>

                            {/* STATE + TIME */}

                            <View
                              style={
                                styles.processStatusContainer
                              }
                            >

                              <Text
                                style={[
                                  styles.processState,
                                  {
                                    color:
                                      equipmentState ===
                                      'ON'
                                        ? '#16A34A'
                                        : equipmentState ===
                                          'OFF'
                                        ? '#DC2626'
                                        : '#6B7280',
                                  },
                                ]}
                              >
                                {equipmentState ||
                                  '--'}
                              </Text>

                              <Text
                                style={
                                  styles.processTimeLabel
                                }
                              >
                                {equipmentState ===
                                'ON'
                                  ? 'Start Time'
                                  : equipmentState ===
                                    'OFF'
                                  ? 'End Time'
                                  : '--'}
                              </Text>

                              <Text
                                style={
                                  styles.processTime
                                }
                              >
                                {equipmentState ===
                                'ON'
                                  ? formatTime(
                                      item?.started_at
                                    )
                                  : equipmentState ===
                                    'OFF'
                                  ? formatTime(
                                      item?.completed_at
                                    )
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
            stageData.processes.length ===
              0) && (

            <Text
              // style={
              //   styles.noDataText
              // }
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
            style={styles.sectionTitle}
          >
            Tank Filling
          </Text>

          <View
            style={styles.tankRow}
          >

            <Text
              style={styles.tankLabel}
            >
              Wastewater Tank
            </Text>

            <Text
              style={styles.tankPercent}
            >
              65%
            </Text>

          </View>

          <View
            style={
              styles.progressBarBackground
            }
          >

            <View
              style={[
                styles.progressBarFill,
                {
                  width: '65%',
                  backgroundColor:
                    '#3B82F6',
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
              style={styles.tankLabel}
            >
              Normal Water Tank
            </Text>

            <Text
              style={styles.tankPercent}
            >
              42%
            </Text>

          </View>

          <View
            style={
              styles.progressBarBackground
            }
          >

            <View
              style={[
                styles.progressBarFill,
                {
                  width: '42%',
                  backgroundColor:
                    '#14B8A6',
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
    style={styles.logHeader}
  >

    <View>
      <Text
        style={styles.sectionTitle}
      >
        Log
      </Text>

      <Text
        style={styles.recentActivity}
      >
        Recent Activity
      </Text>
    </View>

    <TouchableOpacity>
      <Text
        style={styles.viewAll}
      >
        View All ›
      </Text>
    </TouchableOpacity>

  </View>

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
          style={styles.logRow}
          key={
            log?.id ||
            log?.execution_id ||
            index
          }
        >

          <Text
            style={styles.logTime}
          >
            {formatTime(
              logTime
            )}
          </Text>

          <Text
            style={styles.logMessage}
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
      // style={styles.noDataText}
    >
      No recent activity
    </Text>
  )}

</View>
      </ScrollView>

    </SafeAreaView>
  );
}

/* ======================================================
   COMPONENTS
====================================================== */


function Card({
  title,
  subtitle,
  image,
  active,
  status,
  children,
  hideStatus = false,
}: any) {
  return (
    <View style={styles.card}>

      <View style={styles.cardHeader}>

        <View style={styles.cardTitleRow}>

          {image && (
            <Image
              source={image}
              style={styles.cardIcon}
              resizeMode="contain"
            />
          )}

          <View>

            <Text style={styles.sectionTitle}>
              {title}
            </Text>

            {subtitle && (
              <Text style={styles.cardSubtitle}>
                {subtitle}
              </Text>
            )}

          </View>

        </View>

        {!hideStatus && (

          <View
            style={[
              styles.deactiveBtn,
              String(status || '').toUpperCase() ===
                'ACTIVE' &&
                styles.activeBtn,
            ]}
          >

            <Text
              style={[
                styles.deactiveText,
                String(status || '').toUpperCase() ===
                  'ACTIVE' &&
                  styles.activeText,
              ]}
            >
              {status || '--'}
            </Text>

          </View>

        )}

      </View>

      {children}

    </View>
  );
}

/* ==================== VALVE ROW ==================== */

// function ValveRow({
//   label,
//   value,
//   active,
//   status,
// }: any) {
//   return (
//     <View
//       style={styles.valveRow}
//     >

//       <Text
//         style={styles.rowLabel}
//       >
//         {label}
//       </Text>

//       <View
//         style={
//           styles.valveRightSection
//         }
//       >

//         <View
//           style={
//             styles.valveDeactiveButton
//           }
//         >

//           <Text
//             style={
//               styles.valveDeactiveText
//             }
//           >
//             {status || '--'}
//           </Text>

//         </View>

//         <View
//           style={
//             styles.rowValueContainer
//           }
//         >

//           <Text
//             style={[
//               styles.rowValue,
//               {
//                 color: active
//                   ? '#10B981'
//                   : '#6B7280',
//               },
//             ]}
//           >
//             {value || '--'}
//           </Text>

//           <View
//             style={[
//               styles.dot,
//               {
//                 backgroundColor:
//                   active
//                     ? '#10B981'
//                     : '#9CA3AF',
//               },
//             ]}
//           />

//         </View>

//       </View>

//     </View>
//   );
// }

function ValveRow({
  label,
  value,
  active,
  status,
}: any) {
  const isActive =
    String(status || '').toUpperCase() === 'ACTIVE';

  return (
    <View style={styles.valveRow}>

      <Text style={styles.rowLabel}>
        {label}
      </Text>

      <View style={styles.valveRightSection}>

        {/* STATUS BUTTON */}
        <View
          style={[
            styles.deactiveBtn,
            isActive && styles.activeBtn,
          ]}
        >
          <Text
            style={[
              styles.deactiveText,
              isActive && styles.activeText,
            ]}
          >
            {status || '--'}
          </Text>
        </View>

        {/* CURRENT STATE */}
        <View style={styles.rowValueContainer}>

          <Text
            style={[
              styles.rowValue,
              {
                color: active
                  ? '#10B981'
                  : '#6B7280',
              },
            ]}
          >
            {value || '--'}
          </Text>

          <View
            style={[
              styles.dot,
              {
                backgroundColor: active
                  ? '#10B981'
                  : '#9CA3AF',
              },
            ]}
          />

        </View>

      </View>

    </View>
  );
}

/* ==================== PUMP ROW ==================== */

// function PumpRow({
//   label,
//   status,
//   time,
//   active,
//   equipmentStatus,
// }: any) {
//   return (
//     <View
//       style={styles.pumpRow}
//     >

//       <Text
//         style={styles.pumpLabel}
//       >
//         {label}
//       </Text>

//       <View
//         style={
//           styles.pumpRightSection
//         }
//       >

//         <View
//           style={
//             styles.pumpDeactiveButton
//           }
//         >

//           <Text
//             style={
//               styles.pumpDeactiveText
//             }
//           >
//             {equipmentStatus ||
//               '--'}
//           </Text>

//         </View>

//         <Text
//           style={[
//             styles.pumpStatusText,
//             {
//               color: active
//                 ? '#10B981'
//                 : '#EF4444',
//             },
//           ]}
//         >
//           {status || '--'}
//         </Text>

//         <Text
//           style={styles.pumpTime}
//         >
//           {time || '--'}
//         </Text>

//       </View>

//     </View>
//   );
// }

function PumpRow({
  label,
  status,
  time,
  active,
  equipmentStatus,
}: any) {
  const isActive =
    String(equipmentStatus || '').toUpperCase() === 'ACTIVE';

  return (
    <View style={styles.pumpRow}>

      <Text style={styles.pumpLabel}>
        {label}
      </Text>

      <View style={styles.pumpRightSection}>

        {/* STATUS BUTTON */}
        <View
          style={[
            styles.deactiveBtn,
            isActive && styles.activeBtn,
          ]}
        >
          <Text
            style={[
              styles.deactiveText,
              isActive && styles.activeText,
            ]}
          >
            {equipmentStatus || '--'}
          </Text>
        </View>

        {/* ON / OFF */}
        <Text
          style={[
            styles.pumpStatusText,
            {
              color: active
                ? '#10B981'
                : '#EF4444',
            },
          ]}
        >
          {status || '--'}
        </Text>

        {/* TIME */}
        <Text style={styles.pumpTime}>
          {time || '--'}
        </Text>

      </View>

    </View>
  );
}

function Row({
  label,
  value,
  active,
}: any) {
  return (
    <View style={styles.row}>

      <Text style={styles.rowLabel}>
        {label}
      </Text>

      <View style={styles.rowValueContainer}>

        <Text
          style={[
            styles.rowValue,
            {
              color: active
                ? '#10B981'
                : '#6B7280',
            },
          ]}
        >
          {value || '--'}
        </Text>

        <View
          style={[
            styles.dot,
            {
              backgroundColor: active
                ? '#10B981'
                : '#9CA3AF',
            },
          ]}
        />

      </View>

    </View>
  );
}

/* ==================== PROCESS ROW ==================== */

function ProcessRow({
  number,
  text,
  image,
  active,
  status,
}: any) {
  return (
    <View
      style={styles.processRow}
    >

      <View
        // style={styles.processLeft}
      >

        <View
          style={[
            styles.processNumber,
            // active
            //   ? styles.processNumberActive
            //   : styles.processNumberInactive,
          ]}
        >

          <Text
            style={
              styles.processNumberText
            }
          >
            {number}
          </Text>

        </View>

        <View
          style={
            styles.processIconText
          }
        >

          {image && (
            <Image
              source={image}
              style={
                styles.processIconImage
              }
              resizeMode="contain"
            />
          )}

          <Text
            // style={styles.processText}
          >
            {text}
          </Text>

        </View>

      </View>

      <View
        // style={styles.processRight}
      >

        <Text
          style={{
            color: active
              ? '#10B981'
              : '#EF4444',
            fontWeight: '600',
          }}
        >
          {status ||
            (active
              ? 'ON'
              : 'OFF')}
        </Text>

        <View
          style={[
            styles.dot,
            {
              backgroundColor:
                active
                  ? '#10B981'
                  : '#EF4444',
            },
          ]}
        />

      </View>

    </View>
  );
}

/* ==================== TANK ROW ==================== */

function TankRow({
  label,
  percent,
  color,
}: any) {
  return (
    <View
      style={styles.tankRow}
    >

      <Text
        style={styles.tankLabel}
      >
        {label}
      </Text>

      <View
        style={
          styles.progressBarBackground
        }
      >

        <View
          style={[
            styles.progressBarFill,
            {
              width: `${percent}%`,
              backgroundColor:
                color,
            },
          ]}
        />

      </View>

      <Text
        style={styles.tankPercent}
      >
        {percent}%
      </Text>

    </View>
  );
}

/* ==================== LOG ROW ==================== */

function LogRow({
  time,
  message,
}: any) {
  return (
    <View
      style={styles.logRow}
    >

      <Text
        style={styles.logTime}
      >
        {time}
      </Text>

      <Text
        style={styles.logMessage}
      >
        {message}
      </Text>

      <Text
        style={styles.logArrow}
      >
        ›
      </Text>

    </View>
  );
}

/* ======================================================
   STYLES
====================================================== */

const styles =
  StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:
        '#F5F7FA',
    },

    header: {
      padding: 16,
      backgroundColor:
        '#fff',
      alignItems:
        'center',
      justifyContent:
        'center',
      position:
        'relative',
      minHeight: 75,
    },

    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#1E3A5F',
    },

    subtitle: {
      color: '#10B981',
      marginTop: 4,
      fontWeight: '500',
    },

    offlineBadge: {
      position:
        'absolute',
      right: 16,
      top: 16,
      backgroundColor:
        '#E5E7EB',
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 20,
    },

    offlineText: {
      color: '#6B7280',
      fontSize: 12,
      fontWeight: '500',
    },

    card: {
      backgroundColor:
        '#fff',
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.05,
      shadowRadius: 3,
      elevation: 2,
    },

    cardHeader: {
      flexDirection:
        'row',
      justifyContent:
        'space-between',
      alignItems:
        'flex-start',
      marginBottom: 12,
    },

    cardTitleRow: {
      flexDirection:
        'row',
      alignItems:
        'center',
      flex: 1,
    },

    cardIcon: {
      width: 32,
      height: 32,
      marginRight: 12,
    },

    sectionTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#1F2937',
    },

    cardSubtitle: {
      fontSize: 13,
      color: '#6B7280',
      marginTop: 2,
    },

    deactiveBtn: {
      backgroundColor:
        '#E5E7EB',
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 12,
    },

    activeBtn: {
      backgroundColor:
        '#D1FAE5',
    },

    deactiveText: {
      fontSize: 11,
      fontWeight: '600',
      color: '#6B7280',
    },

    activeText: {
      color: '#059669',
    },

    startBtn: {
      marginTop: 16,
      backgroundColor:
        '#10B981',
      padding: 14,
      borderRadius: 8,
      marginBottom: 10,
    },

    startText: {
      color: '#fff',
      textAlign:
        'center',
      fontWeight:
        'bold',
      fontSize: 15,
    },

    stopBtn: {
      borderWidth: 1.5,
      borderColor:
        '#EF4444',
      padding: 14,
      borderRadius: 8,
    },

    stopText: {
      color: '#EF4444',
      textAlign:
        'center',
      fontWeight:
        'bold',
      fontSize: 15,
    },

    row: {
      flexDirection:
        'row',
      justifyContent:
        'space-between',
      alignItems:
        'center',
      marginVertical: 8,
    },

    rowLabel: {
      color: '#374151',
      fontSize: 14,
    },

    rowValueContainer: {
      flexDirection:
        'row',
      alignItems:
        'center',
    },

    rowValue: {
      fontSize: 14,
      marginRight: 8,
    },

    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
    },

    statusRow: {
      flexDirection:
        'row',
      justifyContent:
        'space-between',
      marginTop: 4,
    },

    statusLabel: {
      fontSize: 12,
      color: '#9CA3AF',
    },

    statusValue: {
      fontSize: 14,
      color: '#374151',
      marginTop: 2,
    },

    motorStatus: {
      marginTop: 8,
      paddingTop: 8,
      borderTopWidth: 1,
      borderTopColor:
        '#F3F4F6',
    },

    /* ===== Process Row ===== */

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

    processIconText: {
      flexDirection:
        'row',
      alignItems:
        'center',
    },

    processIconImage: {
      width: 22,
      height: 22,
      marginRight: 8,
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

    /* ===== Tank & Log ===== */

    tankRow: {
      marginVertical: 10,
    },

    tankLabel: {
      fontSize: 14,
      color: '#374151',
      marginBottom: 6,
    },

    progressBarBackground: {
      height: 8,
      backgroundColor:
        '#E5E7EB',
      borderRadius: 4,
      overflow:
        'hidden',
    },

    progressBarFill: {
      height: '100%',
      borderRadius: 4,
    },

    tankPercent: {
      position:
        'absolute',
      right: 0,
      top: 0,
      fontSize: 14,
      fontWeight: '600',
      color: '#374151',
    },

    logHeader: {
      flexDirection:
        'row',
      justifyContent:
        'space-between',
      alignItems:
        'center',
    },

    viewAll: {
      color: '#3B82F6',
      fontSize: 13,
    },

    recentActivity: {
      fontSize: 12,
      color: '#9CA3AF',
      marginBottom: 12,
    },

    logRow: {
      flexDirection:
        'row',
      alignItems:
        'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor:
        '#F3F4F6',
    },

    logTime: {
      width: 70,
      fontSize: 13,
      color: '#6B7280',
    },

    logMessage: {
      flex: 1,
      fontSize: 14,
      color: '#374151',
    },

    logArrow: {
      fontSize: 18,
      color: '#9CA3AF',
    },

    backButton: {
      position:
        'absolute',
      left: 16,
      top: 20,
      padding: 4,
      zIndex: 10,
    },

    headerCenter: {
      alignItems:
        'center',
    },

    startContent: {
      flexDirection:
        'row',
      alignItems:
        'center',
      justifyContent:
        'center',
      gap: 8,
    },

    /* ===== Valve ===== */

    valveRow: {
      flexDirection:
        'row',
      alignItems:
        'center',
      justifyContent:
        'space-between',
      paddingVertical: 10,
    },

    valveRightSection: {
      flexDirection:
        'row',
      alignItems:
        'center',
      gap: 10,
    },

    valveDeactiveButton: {
      backgroundColor:
        '#E5E7EB',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 12,
    },

    valveDeactiveText: {
      fontSize: 10,
      fontWeight: '600',
      color: '#6B7280',
    },

    /* ===== Pump Header ===== */

    pumpHeaderRow: {
      flexDirection:
        'row',
      alignItems:
        'center',
      justifyContent:
        'flex-end',
      marginBottom: 4,
    },

    pumpHeaderSpacer: {
      flex: 1,
    },

    pumpHeaderStatus: {
      width: 45,
      textAlign:
        'center',
      fontSize: 10,
      fontWeight:
        '600',
      color: '#9CA3AF',
      marginRight: 12,
    },

    pumpHeaderSince: {
      width: 65,
      textAlign:
        'right',
      fontSize: 10,
      fontWeight:
        '600',
      color: '#9CA3AF',
    },

    /* ===== Pump ===== */

    pumpRow: {
      flexDirection:
        'row',
      alignItems:
        'center',
      justifyContent:
        'space-between',
      paddingVertical: 10,
    },

    pumpLabel: {
      flex: 1,
      fontSize: 14,
      color: '#374151',
    },

    pumpRightSection: {
      flexDirection:
        'row',
      alignItems:
        'center',
    },

    pumpDeactiveButton: {
      backgroundColor:
        '#E5E7EB',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 12,
      marginRight: 12,
    },

    pumpDeactiveText: {
      fontSize: 10,
      fontWeight:
        '600',
      color: '#6B7280',
    },

    pumpStatusText: {
      width: 45,
      textAlign:
        'center',
      fontSize: 13,
      fontWeight:
        '600',
      marginRight: 12,
    },

    pumpTime: {
      width: 65,
      textAlign:
        'right',
      fontSize: 13,
      color: '#6B7280',
    },

    /* ================= MOTOR SECTION ================= */

    motorHeader: {
      flexDirection:
        'row',
      alignItems:
        'center',
      justifyContent:
        'space-between',
    },

    motorTitleContainer: {
      flexDirection:
        'row',
      alignItems:
        'center',
      flex: 1,
    },

    motorImage: {
      width: 40,
      height: 40,
      marginRight: 12,
    },

    motorTitle: {
      fontSize: 16,
      fontWeight:
        '700',
      color: '#1F2937',
    },

    motorSubtitle: {
      fontSize: 13,
      color: '#6B7280',
      marginTop: 3,
    },

    motorStatusBadge: {
      backgroundColor:
        '#E5E7EB',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
    },

    motorStatusText: {
      fontSize: 11,
      fontWeight:
        '700',
      color: '#6B7280',
    },

    motorDivider: {
      height: 1,
      backgroundColor:
        '#E5E7EB',
      marginVertical: 14,
    },

    motorInfoRow: {
      flexDirection:
        'row',
      justifyContent:
        'space-between',
      alignItems:
        'center',
    },

    motorInfoItem: {
      flex: 1,
    },

    motorInfoItemRight: {
      alignItems:
        'flex-end',
    },

    motorInfoLabel: {
      fontSize: 12,
      color: '#9CA3AF',
      marginBottom: 4,
    },

    motorStateRow: {
      flexDirection:
        'row',
      alignItems:
        'center',
    },

    motorStateText: {
      fontSize: 14,
      fontWeight:
        '600',
      color: '#EF4444',
    },

    motorOffDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor:
        '#EF4444',
      marginLeft: 7,
    },

    motorTimeText: {
      fontSize: 14,
      fontWeight:
        '500',
      color: '#374151',
    },
    startBtnDisabled: {
  backgroundColor: '#9CA3AF',
  opacity: 0.6,
},

  });