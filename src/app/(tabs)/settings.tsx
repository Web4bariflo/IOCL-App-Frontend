// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Switch,
//   Image,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { router } from 'expo-router';

// export default function SettingsScreen() {
//   const [manualMode, setManualMode] = useState(false);
//   const [notifications, setNotifications] = useState(true);

//   return (
//     <SafeAreaView style={styles.container} edges={['top', 'bottom']}>

//       {/* ================= HEADER ================= */}
//       <View style={styles.header}>

//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.back()}
//         >
//           <MaterialCommunityIcons
//             name="arrow-left"
//             size={22}
//             color="#1F2937"
//           />
//         </TouchableOpacity>

//         <Text style={styles.headerTitle}>Settings</Text>

//         {/* Right side spacing */}
//         <View style={styles.headerRight} />

//       </View>

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >

//         {/* ================= GENERAL ================= */}
//         <Text style={styles.sectionTitle}>GENERAL</Text>

//         <View style={styles.card}>

//           <View style={styles.operatingModeRow}>

//             <View style={styles.settingTextContainer}>
//               <Text style={styles.settingTitle}>
//                 Operating Mode
//               </Text>

//               <Text style={styles.settingSubtitle}>
//                 Select automatic or manual control
//               </Text>
//             </View>

//             {/* AUTO / MANUAL */}
//             <View style={styles.modeContainer}>

//               <TouchableOpacity
//                 style={[
//                   styles.modeButton,
//                   !manualMode && styles.activeModeButton,
//                 ]}
//                 onPress={() => setManualMode(false)}
//               >
//                 <Text
//                   style={[
//                     styles.modeText,
//                     !manualMode && styles.activeModeText,
//                   ]}
//                 >
//                   AUTO
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[
//                   styles.modeButton,
//                   manualMode && styles.activeModeButton,
//                 ]}
//                 onPress={() => setManualMode(true)}
//               >
//                 <Text
//                   style={[
//                     styles.modeText,
//                     manualMode && styles.activeModeText,
//                   ]}
//                 >
//                   MANUAL
//                 </Text>
//               </TouchableOpacity>

//             </View>

//           </View>

//         </View>


//         {/* ================= DEVICES ================= */}
//         <Text style={styles.sectionTitle}>DEVICES</Text>

//         <View style={styles.card}>

//           {/* INLET PUMP */}
//           {/* <TouchableOpacity style={styles.deviceRow}> */}
//           <TouchableOpacity
//   style={styles.deviceRow}
//   onPress={() => router.push('/inlet-pump')}
// >

//             <View style={styles.deviceIconContainer}>
//               <Image
//                 source={require('@/assets/images/inletpump.png')}
//                 style={styles.deviceIcon}
//                 resizeMode="contain"
//               />
//             </View>

//             <View style={styles.deviceTextContainer}>
//               <Text style={styles.deviceTitle}>
//                 Inlet Pump 1
//               </Text>
//             </View>

//             <MaterialCommunityIcons
//               name="chevron-right"
//               size={22}
//               color="#374151"
//             />

//           </TouchableOpacity>


//           {/* CONTACTOR SENSORS */}
//           <TouchableOpacity style={styles.deviceRow}>

//             <View style={styles.deviceIconContainer}>
//               <Image
//                 source={require('@/assets/images/contactor.png')}
//                 style={styles.deviceIcon}
//                 resizeMode="contain"
//               />
//             </View>

//             <View style={styles.deviceTextContainer}>
//               <Text style={styles.deviceTitle}>
//                 Contactor Sensors
//               </Text>

//               <Text style={styles.deviceSubtitle}>
//                 2 Sensors
//               </Text>
//             </View>

//             <MaterialCommunityIcons
//               name="chevron-right"
//               size={22}
//               color="#374151"
//             />

//           </TouchableOpacity>


//           {/* SOLENOID VALVES */}
//           <TouchableOpacity
//             style={[styles.deviceRow, styles.lastDeviceRow]}
//           >

//             <View style={styles.deviceIconContainer}>
//               <Image
//                 source={require('@/assets/images/solenoid.png')}
//                 style={styles.deviceIcon}
//                 resizeMode="contain"
//               />
//             </View>

//             <View style={styles.deviceTextContainer}>
//               <Text style={styles.deviceTitle}>
//                 Solenoid Valves
//               </Text>

//               <Text style={styles.deviceSubtitle}>
//                 2 Valves
//               </Text>
//             </View>

//             <MaterialCommunityIcons
//               name="chevron-right"
//               size={22}
//               color="#374151"
//             />

//           </TouchableOpacity>

//         </View>


//         {/* ================= ALERTS ================= */}
//         <Text style={styles.sectionTitle}>
//           ALERTS & NOTIFICATIONS
//         </Text>

//         <View style={styles.card}>

//           <View style={styles.notificationRow}>

//             <View style={styles.settingTextContainer}>

//               <Text style={styles.settingTitle}>
//                 Enable Notifications
//               </Text>

//               <Text style={styles.settingSubtitle}>
//                 Receive alerts for status changes
//               </Text>

//             </View>

//             <Switch
//               value={notifications}
//               onValueChange={setNotifications}
//               trackColor={{
//                 false: '#D1D5DB',
//                 true: '#20A6A6',
//               }}
//               thumbColor="#FFFFFF"
//               ios_backgroundColor="#D1D5DB"
//             />

//           </View>

//         </View>


//         {/* ================= ABOUT ================= */}
//         <Text style={styles.sectionTitle}>ABOUT</Text>

//         <View style={styles.card}>

//           {/* APP VERSION */}
//           <View style={styles.aboutRow}>

//             <Text style={styles.aboutLabel}>
//               App Version
//             </Text>

//             <Text style={styles.aboutValue}>
//               1.0.0
//             </Text>

//           </View>


//           <View style={styles.aboutDivider} />


//           {/* PLC CONTROLLER */}
//           <View style={styles.aboutRow}>

//             <Text style={styles.aboutLabel}>
//               PLC / Controller
//             </Text>

//             <View style={styles.connectedContainer}>

//               <Text style={styles.connectedText}>
//                 Connected
//               </Text>

//               <View style={styles.connectedDot} />

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
//     backgroundColor: '#F7F8FA',
//   },

//   /* ================= HEADER ================= */

//   header: {
//     height: 52,
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E7EB',
//   },

//   backButton: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },

//   headerRight: {
//     width: 40,
//   },

//   headerTitle: {
//     fontSize: 17,
//     fontWeight: '700',
//     color: '#172033',
//   },


//   /* ================= CONTENT ================= */

//   scrollContent: {
//     paddingHorizontal: 18,
//     paddingTop: 18,
//     paddingBottom: 35,
//   },


//   /* ================= SECTION ================= */

//   sectionTitle: {
//     fontSize: 11,
//     fontWeight: '700',
//     color: '#4B5563',
//     marginTop: 10,
//     marginBottom: 9,
//     letterSpacing: 0.2,
//   },


//   /* ================= CARD ================= */

//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 11,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     overflow: 'hidden',

//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.06,
//     shadowRadius: 3,

//     elevation: 2,
//   },


//   /* ================= GENERAL ================= */

//   operatingModeRow: {
//     minHeight: 72,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 13,
//     paddingVertical: 10,
//   },

//   settingTextContainer: {
//     flex: 1,
//   },

//   settingTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#172033',
//   },

//   settingSubtitle: {
//     fontSize: 10.5,
//     color: '#7A8491',
//     marginTop: 4,
//   },


//   /* ================= AUTO / MANUAL ================= */

//   modeContainer: {
//     height: 38,
//     width: 132,
//     flexDirection: 'row',
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     borderRadius: 6,
//     overflow: 'hidden',
//     marginLeft: 8,
//   },

//   modeButton: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },

//   activeModeButton: {
//     backgroundColor: '#20A6A6',
//   },

//   modeText: {
//     fontSize: 10,
//     fontWeight: '700',
//     color: '#374151',
//   },

//   activeModeText: {
//     color: '#FFFFFF',
//   },


//   /* ================= DEVICES ================= */

//   deviceRow: {
//     height: 58,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 14,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E7EB',
//   },

//   lastDeviceRow: {
//     borderBottomWidth: 0,
//   },

//   deviceIconContainer: {
//     width: 42,
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//   },

//   deviceIcon: {
//     width: 27,
//     height: 27,
//   },

//   deviceTextContainer: {
//     flex: 1,
//   },

//   deviceTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#172033',
//   },

//   deviceSubtitle: {
//     fontSize: 10.5,
//     color: '#7A8491',
//     marginTop: 3,
//   },


//   /* ================= NOTIFICATIONS ================= */

//   notificationRow: {
//     minHeight: 72,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 13,
//     paddingVertical: 10,
//   },


//   /* ================= ABOUT ================= */

//   aboutRow: {
//     minHeight: 42,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 13,
//   },

//   aboutDivider: {
//     height: 1,
//     backgroundColor: '#E5E7EB',
//     marginHorizontal: 13,
//   },

//   aboutLabel: {
//     flex: 1,
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#172033',
//   },

//   aboutValue: {
//     fontSize: 11,
//     color: '#6B7280',
//   },


//   /* ================= PLC STATUS ================= */

//   connectedContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   connectedText: {
//     fontSize: 11,
//     fontWeight: '600',
//     color: '#269A91',
//   },

//   connectedDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#20A6A6',
//     marginLeft: 7,
//   },

// });

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function SettingsScreen() {
  const [operatingMode, setOperatingMode] = useState<'AUTO' | 'MANUAL'>('AUTO');
  const [notifications, setNotifications] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/dashboard')}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#111827" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>
        <View style={styles.backButton} />
      </View>
      <View style={styles.headerBorder} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* General */}
        <Text style={styles.sectionTitle}>GENERAL</Text>
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Operating Mode</Text>
              <Text style={styles.settingSubtitle}>Select automatic or manual control</Text>
            </View>
            <View style={styles.toggleContainer}>
              <TouchableOpacity
                style={[styles.toggleButton, operatingMode === 'AUTO' && styles.toggleButtonActive]}
                onPress={() => setOperatingMode('AUTO')}
              >
                <Text style={[styles.toggleText, operatingMode === 'AUTO' && styles.toggleTextActive]}>AUTO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.toggleButton, operatingMode === 'MANUAL' && styles.toggleButtonActive]}
                onPress={() => setOperatingMode('MANUAL')}
              >
                <Text style={[styles.toggleText, operatingMode === 'MANUAL' && styles.toggleTextActive]}>MANUAL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Devices */}
        <Text style={styles.sectionTitle}>DEVICES</Text>
        <View style={styles.card}>
          <TouchableOpacity 
            style={styles.deviceRow}
            onPress={() => router.push('/inlet setting/inletpump')}
          >
            <Image source={require('@/assets/images/inletpump.png')} style={[styles.deviceIcon, { width: 24, height: 24 }]} resizeMode="contain" />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Inlet Pump 1</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#111827" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity 
            style={styles.deviceRow}
            onPress={() => router.push('/inlet setting/contactorsensor')}
          >
            <Image source={require('@/assets/images/contactor.png')} style={[styles.deviceIcon, { width: 24, height: 24 }]} resizeMode="contain" />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Contactor Sensors</Text>
              <Text style={styles.settingSubtitle}>2 Sensors</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#111827" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity 
            style={styles.deviceRow}
            onPress={() => router.push('/inlet setting/solenoid')}
          >
            <Image source={require('@/assets/images/solenoid.png')} style={[styles.deviceIcon, { width: 24, height: 24 }]} resizeMode="contain" />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Solenoid Valves</Text>
              <Text style={styles.settingSubtitle}>2 Valves</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#111827" />
          </TouchableOpacity>
        </View>

        {/* Alerts & Notifications */}
        <Text style={styles.sectionTitle}>ALERTS & NOTIFICATIONS</Text>
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Enable Notifications</Text>
              <Text style={styles.settingSubtitle}>Receive alerts for status changes</Text>
            </View>
            <Switch
              trackColor={{ false: '#E5E7EB', true: '#14B8A6' }}
              thumbColor={'#FFFFFF'}
              onValueChange={setNotifications}
              value={notifications}
            />
          </View>
        </View>

        {/* About */}
        <Text style={styles.sectionTitle}>ABOUT</Text>
        <View style={styles.card}>
          <View style={styles.aboutRow}>
            <Text style={styles.aboutLabel}>App Version</Text>
            <Text style={styles.aboutValue}>1.0.0</Text>
          </View>
          
          <View style={styles.divider} />

          <View style={styles.aboutRow}>
            <Text style={styles.aboutLabel}>PLC / Controller</Text>
            <View style={styles.statusRow}>
              <Text style={styles.statusTextGreen}>Connected</Text>
              <View style={styles.statusDotGreen} />
            </View>
          </View>
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
    fontWeight: '600',
    color: '#111827',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
    marginTop: 24,
    marginBottom: 8,
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  settingTextContainer: {
    flex: 1,
    paddingRight: 16,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  settingSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  toggleButtonActive: {
    backgroundColor: '#14B8A6',
  },
  toggleText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
  },
  toggleTextActive: {
    color: '#FFFFFF',
  },
  deviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  deviceIcon: {
    marginRight: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginLeft: 40, // Aligns divider with text instead of edge
  },
  aboutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  aboutLabel: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '600',
  },
  aboutValue: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusTextGreen: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '500',
  },
  statusDotGreen: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginLeft: 8,
  },
});
