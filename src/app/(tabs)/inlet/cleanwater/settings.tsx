import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { getStageEquipments } from '../../../../api/inletApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen() {
  const { module } = useLocalSearchParams<{
    module?: string;
  }>();

  const selectedModule =
    module === 'Waste Water' ? 'Waste Water' : 'Clean Water';

  const [operatingMode, setOperatingMode] =
    useState<'AUTO' | 'MANUAL'>('MANUAL');

   const [notifications, setNotifications] = useState(true);
  const [equipmentTypes, setEquipmentTypes] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
  fetchStageEquipments();
}, []);

  const fetchStageEquipments = async () => {
  try {
    setLoading(true);

    const cleanWaterStageId =
      await AsyncStorage.getItem('cleanWaterStageId');

    console.log(
      'Clean Water Stage ID from AsyncStorage:',
      cleanWaterStageId
    );

    if (!cleanWaterStageId) {
      console.log('Clean Water Stage ID not found');
      return;
    }

    const response = await getStageEquipments(
      Number(cleanWaterStageId)
    );

    console.log('Stage Equipment Response:', response);

    if (response.success) {
      const stage = response.data.stage;
      const equipmentTypes = response.data.equipment_types || [];

      // Store Clean Water Stage ID
      await AsyncStorage.setItem(
        'cleanWaterStageId',
        String(stage.id)
      );

      console.log(
        'Clean Water Stage ID stored:',
        stage.id
      );

      // Find Inlet Pump
      const inletPump = equipmentTypes.find(
        (item: any) =>
          item.equipment_type?.name === 'Inlet Pump 1'
      );

      // Find Solenoid Valve
      const solenoidValves = equipmentTypes.find(
        (item: any) =>
          item.equipment_type?.name === 'Solenoid Valves'
      );

      // Store Pump Motor Equipment ID
      const pumpMotorId =
        inletPump?.equipments?.[0]?.id;

      if (pumpMotorId) {
        await AsyncStorage.setItem(
          'cleanWaterPumpMotorId',
          String(pumpMotorId)
        );

        console.log(
          'Clean Water Pump Motor ID stored:',
          pumpMotorId
        );
      }

      // Store Solenoid Valve Equipment ID
      const valveId =
        solenoidValves?.equipments?.[0]?.id;

      if (valveId) {
        await AsyncStorage.setItem(
          'cleanWaterValveId',
          String(valveId)
        );

        console.log(
          'Clean Water Valve ID stored:',
          valveId
        );
      }

      // Store equipment types for UI
      setEquipmentTypes(equipmentTypes);
    }
  } catch (error) {
    console.error(
      'Failed to fetch stage equipments:',
      error
    );
  } finally {
    setLoading(false);
  }
};

  const inletPump = equipmentTypes.find(
  item => item.equipment_type?.name === 'Inlet Pump 1'
);

const contactorSensors = equipmentTypes.find(
  item => item.equipment_type?.name === 'Contactor Sensors'
);

const solenoidValves = equipmentTypes.find(
  item => item.equipment_type?.name === 'Solenoid Valves'
);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="#111827"
          />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Settings</Text>
          <Text style={styles.headerSubtitle}>
            {selectedModule}
          </Text>
        </View>

        <View style={styles.backButton} />
      </View>

      <View style={styles.headerBorder} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Merge Button */}
        <TouchableOpacity
          style={styles.mergeButton}
          onPress={() => {
            // Add merge action here
          }}
          activeOpacity={0.8}
        >
          <MaterialCommunityIcons
            name="merge"
            size={22}
            color="#FFFFFF"
          />
          <Text style={styles.mergeButtonText}>MERGE</Text>
        </TouchableOpacity>
        {/* General */}
        <Text style={styles.sectionTitle}>GENERAL</Text>

        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>
                Operating Mode
              </Text>

              <Text style={styles.settingSubtitle}>
                Select automatic or manual control
              </Text>
            </View>

            <View style={styles.toggleContainer}>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  operatingMode === 'AUTO' &&
                  styles.toggleButtonActive,
                ]}
               onPress={() => {
    setOperatingMode('AUTO');

    router.push('/inlet/cleanwater');
  }}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.toggleText,
                    operatingMode === 'AUTO' &&
                    styles.toggleTextActive,
                  ]}
                >
                  AUTO
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  operatingMode === 'MANUAL' &&
                  styles.toggleButtonActive,
                ]}
                onPress={() => setOperatingMode('MANUAL')}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.toggleText,
                    operatingMode === 'MANUAL' &&
                    styles.toggleTextActive,
                  ]}
                >
                  MANUAL
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Devices */}
        <Text style={styles.sectionTitle}>DEVICES</Text>

        <View style={styles.card}>

          <TouchableOpacity
            style={styles.deviceRow}
            onPress={() =>
              router.push('/inlet/cleanwater/inletroutes/solenoid')
            }
            activeOpacity={0.7}
          >
            <Image
              source={require('@/assets/images/solenoid.png')}
              style={styles.deviceIcon}
              resizeMode="contain"
            />

            <View style={styles.settingTextContainer}>
             <Text style={styles.settingTitle}>
  {solenoidValves?.equipment_type?.name || 'Solenoid Valves'}
</Text>

<Text style={styles.settingSubtitle}>
  {solenoidValves?.count || 0} Valves
</Text>
            </View>

            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#111827"
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.deviceRow}
            onPress={() =>
              router.push('/inlet/cleanwater/inletroutes/inletpump')
            }
            activeOpacity={0.7}
          >
            <Image
              source={require('@/assets/images/inletpump.png')}
              style={styles.deviceIcon}
              resizeMode="contain"
            />

            <View style={styles.settingTextContainer}>
             <Text style={styles.settingTitle}>
  {inletPump?.equipment_type?.name || 'Inlet Pump 1'}
</Text>
            </View>

            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#111827"
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.deviceRow}
            onPress={() =>
              router.push(
                '/inlet/cleanwater/inletroutes/contactorsensor'
              )
            }
            activeOpacity={0.7}
          >
            <Image
              source={require('@/assets/images/contactor.png')}
              style={styles.deviceIcon}
              resizeMode="contain"
            />

            <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>
  {contactorSensors?.equipment_type?.name || 'Contactor Sensors'}
</Text>

<Text style={styles.settingSubtitle}>
  {contactorSensors?.count || 0} Sensors
</Text>
            </View>

            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#111827"
            />
          </TouchableOpacity>

          

          
        </View>

        {/* Alerts & Notifications */}
        <Text style={styles.sectionTitle}>
          ALERTS & NOTIFICATIONS
        </Text>

        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>
                Enable Notifications
              </Text>

              <Text style={styles.settingSubtitle}>
                Receive alerts for status changes
              </Text>
            </View>

            <Switch
              trackColor={{
                false: '#E5E7EB',
                true: '#14B8A6',
              }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#E5E7EB"
              onValueChange={setNotifications}
              value={notifications}
            />
          </View>
        </View>

        {/* About */}
        <Text style={styles.sectionTitle}>ABOUT</Text>

        <View style={styles.card}>
          <View style={styles.aboutRow}>
            <Text style={styles.aboutLabel}>
              App Version
            </Text>

            <Text style={styles.aboutValue}>
              1.0.0
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.aboutRow}>
            <Text style={styles.aboutLabel}>
              PLC / Controller
            </Text>

            <View style={styles.statusRow}>
              <Text style={styles.statusTextGreen}>
                Connected
              </Text>

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

  headerSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#159AA3',
    marginTop: 3,
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
    width: 24,
    height: 24,
    marginRight: 16,
  },

  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginLeft: 40,
  },

  aboutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },

  aboutLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
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
    fontWeight: '500',
    color: '#10B981',
  },

  statusDotGreen: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginLeft: 8,
  },
  mergeButton: {
    backgroundColor: '#14B8A6',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    marginBottom: 8,
  },

  mergeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
});


// import React, { useState, useEffect } from 'react';
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
// import { router, useLocalSearchParams } from 'expo-router';
// import { getStageEquipments } from '../../../../api/inletApi';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function SettingsScreen() {
//   const { module } = useLocalSearchParams<{
//     module?: string;
//   }>();

//   const selectedModule =
//     module === 'Clean Water' ? 'Clean Water' : 'Waste Water';

//   const [operatingMode, setOperatingMode] =
//     useState<'AUTO' | 'MANUAL'>('MANUAL');

  // const [notifications, setNotifications] = useState(true);
  // const [equipmentTypes, setEquipmentTypes] = useState<any[]>([]);

  // const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchStageEquipments();
//   }, []);

//   // const fetchStageEquipments = async () => {
//   //     try {
//   //         setLoading(true);

//   //         const stageId = await AsyncStorage.getItem('cleanWaterStageId');

//   //         console.log('Selected Stage ID:', stageId);

//   //         if (!stageId) {
//   //             console.log('No stage ID found in AsyncStorage');
//   //             return;
//   //         }

//   //         const response = await getStageEquipments(Number(stageId));

//   //         console.log('Stage Equipment Response:', response);

//   //         if (response.success) {
//   //             // Store the stage ID from API response
//   //             await AsyncStorage.setItem(
//   //                 'selectedStageId',
//   //                 String(response.data.stage.id)
//   //             );

//   //             console.log(
//   //                 'Stored Stage ID:',
//   //                 response.data.stage.id
//   //             );

//   //             // Store equipment types
//   //             setEquipmentTypes(
//   //                 response.data.equipment_types || []
//   //             );
//   //         }
//   //     } catch (error) {
//   //         console.error('Failed to fetch stage equipments:', error);
//   //     } finally {
//   //         setLoading(false);
//   //     }
//   // };

  // const fetchStageEquipments = async () => {
  //   try {
  //     setLoading(true);

  //     // Get Clean Water stage ID
  //     const cleanWaterStageId =
  //       await AsyncStorage.getItem('cleanWaterStageId');

  //     console.log(
  //       'Clean Water Stage ID from AsyncStorage:',
  //       cleanWaterStageId
  //     );

  //     if (!cleanWaterStageId) {
  //       console.log('Clean Water Stage ID not found');
  //       return;
  //     }

  //     // Call API using Clean Water stage ID
  //     const response = await getStageEquipments(
  //       Number(cleanWaterStageId)
  //     );

  //     console.log('Stage Equipment Response:', response);

  //     if (response.success) {

  //       // Get stage information from API response
  //       const stage = response.data.stage;

  //       console.log('Stage ID from API:', stage.id);
  //       console.log('Stage Name from API:', stage.name);

  //       // Store Clean Water stage ID
  //       await AsyncStorage.setItem(
  //         'cleanWaterStageId',
  //         String(stage.id)
  //       );

  //       console.log(
  //         'Clean Water Stage ID stored:',
  //         stage.id
  //       );

  //       // Store equipment types
  //       setEquipmentTypes(
  //         response.data.equipment_types || []
  //       );
  //     }
  //   } catch (error) {
  //     console.error(
  //       'Failed to fetch stage equipments:',
  //       error
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.back()}
//           activeOpacity={0.7}
//         >
//           <MaterialCommunityIcons
//             name="arrow-left"
//             size={24}
//             color="#111827"
//           />
//         </TouchableOpacity>

//         <View style={styles.headerTitleContainer}>
//           <Text style={styles.headerTitle}>Settings</Text>
//           <Text style={styles.headerSubtitle}>
//             {selectedModule}
//           </Text>
//         </View>

//         <View style={styles.backButton} />
//       </View>

//       <View style={styles.headerBorder} />

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >

//         {/* Merge Button */}
//         <TouchableOpacity
//           style={styles.mergeButton}
//           onPress={() => {
//             // Add merge action here
//           }}
//           activeOpacity={0.8}
//         >
//           <MaterialCommunityIcons
//             name="merge"
//             size={22}
//             color="#FFFFFF"
//           />
//           <Text style={styles.mergeButtonText}>MERGE</Text>
//         </TouchableOpacity>
//         {/* General */}
//         <Text style={styles.sectionTitle}>GENERAL</Text>

//         <View style={styles.card}>
//           <View style={styles.settingRow}>
//             <View style={styles.settingTextContainer}>
//               <Text style={styles.settingTitle}>
//                 Operating Mode
//               </Text>

//               <Text style={styles.settingSubtitle}>
//                 Select automatic or manual control
//               </Text>
//             </View>

//             <View style={styles.toggleContainer}>
//               <TouchableOpacity
//                 style={[
//                   styles.toggleButton,
//                   operatingMode === 'AUTO' &&
//                   styles.toggleButtonActive,
//                 ]}
//                 onPress={() => {
//                   setOperatingMode('AUTO');

//                   router.push('/inlet/cleanwater');
//                 }}
//                 activeOpacity={0.7}
//               >
//                 <Text
//                   style={[
//                     styles.toggleText,
//                     operatingMode === 'AUTO' &&
//                     styles.toggleTextActive,
//                   ]}
//                 >
//                   AUTO
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[
//                   styles.toggleButton,
//                   operatingMode === 'MANUAL' &&
//                   styles.toggleButtonActive,
//                 ]}
//                 onPress={() => setOperatingMode('MANUAL')}
//                 activeOpacity={0.7}
//               >
//                 <Text
//                   style={[
//                     styles.toggleText,
//                     operatingMode === 'MANUAL' &&
//                     styles.toggleTextActive,
//                   ]}
//                 >
//                   MANUAL
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>

//         {/* Devices */}
//         <Text style={styles.sectionTitle}>DEVICES</Text>

//         <View style={styles.card}>

//           <TouchableOpacity
//             style={styles.deviceRow}
//             onPress={() =>
//               router.push('/inlet/cleanwater/inletroutes/solenoid')
//             }
//             activeOpacity={0.7}
//           >
//             <Image
//               source={require('@/assets/images/solenoid.png')}
//               style={styles.deviceIcon}
//               resizeMode="contain"
//             />

//             <View style={styles.settingTextContainer}>
//               {/* <Text style={styles.settingTitle}>
//                 Solenoid Valves
//               </Text> */}
//               <Text style={styles.settingTitle}>
//                 {equipmentTypes.find(
//                   item => item.equipment_type?.name === 'Solenoid Valves'
//                 )?.equipment_type?.name || 'Solenoid Valves'}
//               </Text>

//               <Text style={styles.settingSubtitle}>
//                 {equipmentTypes.find(
//                   item => item.equipment_type?.name === 'Solenoid Valves'
//                 )?.count || 0} Valves
//               </Text>
//             </View>

//             <MaterialCommunityIcons
//               name="chevron-right"
//               size={24}
//               color="#111827"
//             />
//           </TouchableOpacity>

//           <View style={styles.divider} />

//           <TouchableOpacity
//             style={styles.deviceRow}
//             onPress={() =>
//               router.push('/inlet/cleanwater/inletroutes/inletpump')
//             }
//             activeOpacity={0.7}
//           >
//             <Image
//               source={require('@/assets/images/inletpump.png')}
//               style={styles.deviceIcon}
//               resizeMode="contain"
//             />

//             <View style={styles.settingTextContainer}>
//               {/* <Text style={styles.settingTitle}>
//                 Inlet Pump 1
//               </Text> */}
//               <Text style={styles.settingTitle}>
//                 {equipmentTypes.find(
//                   item => item.equipment_type?.name === 'Inlet Pump 1'
//                 )?.equipment_type?.name || 'Inlet Pump 1'}
//               </Text>
//             </View>

//             <MaterialCommunityIcons
//               name="chevron-right"
//               size={24}
//               color="#111827"
//             />
//           </TouchableOpacity>

//           <View style={styles.divider} />

//           <TouchableOpacity
//             style={styles.deviceRow}
//             onPress={() =>
//               router.push(
//                 '/inlet/cleanwater/inletroutes/contactorsensor'
//               )
//             }
//             activeOpacity={0.7}
//           >
//             <Image
//               source={require('@/assets/images/contactor.png')}
//               style={styles.deviceIcon}
//               resizeMode="contain"
//             />

//             <View style={styles.settingTextContainer}>
//               {/* <Text style={styles.settingTitle}>
//                 Contactor Sensors
//               </Text> */}
//               <Text style={styles.settingTitle}>
//                 {equipmentTypes.find(
//                   item => item.equipment_type?.name === 'Contactor Sensors'
//                 )?.equipment_type?.name || 'Contactor Sensors'}
//               </Text>

//               <Text style={styles.settingSubtitle}>
//                 {equipmentTypes.find(
//                   item => item.equipment_type?.name === 'Contactor Sensors'
//                 )?.count || 0} Sensors
//               </Text>
//             </View>

//             <MaterialCommunityIcons
//               name="chevron-right"
//               size={24}
//               color="#111827"
//             />
//           </TouchableOpacity>







//         </View>

//         {/* Alerts & Notifications */}
//         <Text style={styles.sectionTitle}>
//           ALERTS & NOTIFICATIONS
//         </Text>

//         <View style={styles.card}>
//           <View style={styles.settingRow}>
//             <View style={styles.settingTextContainer}>
//               <Text style={styles.settingTitle}>
//                 Enable Notifications
//               </Text>

//               <Text style={styles.settingSubtitle}>
//                 Receive alerts for status changes
//               </Text>
//             </View>

//             <Switch
//               trackColor={{
//                 false: '#E5E7EB',
//                 true: '#14B8A6',
//               }}
//               thumbColor="#FFFFFF"
//               ios_backgroundColor="#E5E7EB"
//               onValueChange={setNotifications}
//               value={notifications}
//             />
//           </View>
//         </View>

//         {/* About */}
//         <Text style={styles.sectionTitle}>ABOUT</Text>

//         <View style={styles.card}>
//           <View style={styles.aboutRow}>
//             <Text style={styles.aboutLabel}>
//               App Version
//             </Text>

//             <Text style={styles.aboutValue}>
//               1.0.0
//             </Text>
//           </View>

//           <View style={styles.divider} />

//           <View style={styles.aboutRow}>
//             <Text style={styles.aboutLabel}>
//               PLC / Controller
//             </Text>

//             <View style={styles.statusRow}>
//               <Text style={styles.statusTextGreen}>
//                 Connected
//               </Text>

//               <View style={styles.statusDotGreen} />
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
//     fontWeight: '600',
//     color: '#111827',
//   },

//   headerSubtitle: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#159AA3',
//     marginTop: 3,
//   },

//   scrollContent: {
//     padding: 16,
//     paddingBottom: 40,
//   },

//   sectionTitle: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#6B7280',
//     marginTop: 24,
//     marginBottom: 8,
//     marginLeft: 4,
//   },

//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     paddingHorizontal: 16,
//     borderWidth: 1,
//     borderColor: '#F3F4F6',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.05,
//     shadowRadius: 2,
//     elevation: 2,
//   },

//   settingRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 16,
//   },

//   settingTextContainer: {
//     flex: 1,
//     paddingRight: 16,
//   },

//   settingTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#111827',
//   },

//   settingSubtitle: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginTop: 4,
//   },

//   toggleContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     overflow: 'hidden',
//   },

//   toggleButton: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     backgroundColor: '#FFFFFF',
//   },

//   toggleButtonActive: {
//     backgroundColor: '#14B8A6',
//   },

//   toggleText: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#111827',
//   },

//   toggleTextActive: {
//     color: '#FFFFFF',
//   },

//   deviceRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 16,
//   },

//   deviceIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 16,
//   },

//   divider: {
//     height: 1,
//     backgroundColor: '#F3F4F6',
//     marginLeft: 40,
//   },

//   aboutRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 16,
//   },

//   aboutLabel: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#111827',
//   },

//   aboutValue: {
//     fontSize: 14,
//     color: '#6B7280',
//   },

//   statusRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   statusTextGreen: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#10B981',
//   },

//   statusDotGreen: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#10B981',
//     marginLeft: 8,
//   },
//   mergeButton: {
//     backgroundColor: '#14B8A6',
//     borderRadius: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 13,
//     marginBottom: 8,
//   },

//   mergeButtonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: '600',
//     marginLeft: 8,
//   },
// });