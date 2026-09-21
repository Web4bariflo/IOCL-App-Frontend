import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getStageEquipments } from '../../../api/inletApi';

export default function DosingSettingsScreen() {
  const [operatingMode, setOperatingMode] = useState<'AUTO' | 'MANUAL'>('MANUAL');
  const [notifications, setNotifications] = useState(true);

  // Dynamic API state
  const [, setStageData] = useState<any>(null);
  const [equipmentData, setEquipmentData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Dynamic fetch on screen focus
  useFocusEffect(
    useCallback(() => {
      const loadFlocculationDosingData = async () => {
        try {
          setLoading(true);

          // 1. Get stored stage ID from AsyncStorage
          let stageId = await AsyncStorage.getItem('flocculationDosingStageId');
          if (!stageId) {
            stageId = await AsyncStorage.getItem('flocluationDosingStageId');
          }
          if (!stageId) {
            stageId = await AsyncStorage.getItem('selectedStageId');
          }
          if (!stageId) {
            stageId = '6'; // Default fallback matching Flocculation Dosing stage ID
          }

          console.log('Flocculation Dosing Stage ID:', stageId);

          // 2. Call dynamic API: /treatment-process/stages/{stageId}/equipments/
          const response = await getStageEquipments(Number(stageId));
          console.log('Flocculation Dosing Equipments API Response:', response);

          if (response && response.success && response.data) {
            setStageData(response.data.stage);
            const equipmentTypes = response.data.equipment_types || [];
            setEquipmentData(equipmentTypes);

            // Store stage ID in AsyncStorage
            if (response.data.stage?.id) {
              await AsyncStorage.setItem(
                'flocculationDosingStageId',
                String(response.data.stage.id)
              );
              await AsyncStorage.setItem(
                'selectedStageId',
                String(response.data.stage.id)
              );
            }

            // Store full equipment types in AsyncStorage
            await AsyncStorage.setItem(
              'flocculationDosingEquipments',
              JSON.stringify(equipmentTypes)
            );

            // 3. Find and store Motor (Primary equipment for Stage 6 Flocculation Dosing)
            const motorType = equipmentTypes.find(
              (item: any) =>
                item.equipment_type?.name?.toLowerCase().includes('motor') ||
                item.equipment_type?.id === 4
            );

            if (motorType && motorType.equipments?.length > 0) {
              const primaryMotor = motorType.equipments[0];

              // Primary equipment ID & Motor ID
              await AsyncStorage.setItem(
                'flocculationDosingEquipmentId',
                String(primaryMotor.id)
              );
              await AsyncStorage.setItem(
                'flocculationDosingMotorId',
                String(primaryMotor.id)
              );
              await AsyncStorage.setItem(
                'flocculationDosingEquipmentName',
                primaryMotor.name || 'Motor 1'
              );
              // Legacy fallback key for backward compatibility
              await AsyncStorage.setItem(
                'flocculationDosingInletPumpId',
                String(primaryMotor.id)
              );

              // Individual motor IDs & names
              for (let i = 0; i < motorType.equipments.length; i++) {
                await AsyncStorage.setItem(
                  `flocculationDosingMotorId_${i + 1}`,
                  String(motorType.equipments[i].id)
                );
                await AsyncStorage.setItem(
                  `flocculationDosingMotorName_${i + 1}`,
                  String(motorType.equipments[i].name)
                );
              }

              console.log('Stored Flocculation Motor ID:', primaryMotor.id);
            }

            // 4. Find Inlet Pump (if present)
            const inletPumpType = equipmentTypes.find(
              (item: any) =>
                item.equipment_type?.name?.toLowerCase().includes('inlet pump') ||
                item.equipment_type?.id === 2
            );

            if (inletPumpType && inletPumpType.equipments?.length > 0) {
              await AsyncStorage.setItem(
                'flocculationDosingInletPumpId',
                String(inletPumpType.equipments[0].id)
              );
              for (let i = 0; i < inletPumpType.equipments.length; i++) {
                await AsyncStorage.setItem(
                  `flocculationDosingInletPumpId_${i + 1}`,
                  String(inletPumpType.equipments[i].id)
                );
              }
            }

            // 5. Find Contactor Sensors (if present)
            const contactorType = equipmentTypes.find(
              (item: any) =>
                item.equipment_type?.name?.toLowerCase().includes('contactor') ||
                item.equipment_type?.id === 3
            );

            if (contactorType && contactorType.equipments?.length > 0) {
              await AsyncStorage.setItem(
                'flocculationDosingContactorId',
                String(contactorType.equipments[0].id)
              );
              for (let i = 0; i < contactorType.equipments.length; i++) {
                await AsyncStorage.setItem(
                  `flocculationDosingContactorId_${i + 1}`,
                  String(contactorType.equipments[i].id)
                );
              }
            }

            // 6. Find Solenoid Valves (if present)
            const solenoidType = equipmentTypes.find(
              (item: any) =>
                item.equipment_type?.name?.toLowerCase().includes('solenoid') ||
                item.equipment_type?.id === 1
            );

            if (solenoidType && solenoidType.equipments?.length > 0) {
              await AsyncStorage.setItem(
                'flocculationDosingSolenoidId',
                String(solenoidType.equipments[0].id)
              );
              for (let i = 0; i < solenoidType.equipments.length; i++) {
                await AsyncStorage.setItem(
                  `flocculationDosingSolenoidId_${i + 1}`,
                  String(solenoidType.equipments[i].id)
                );
              }
            }
          }
        } catch (error: any) {
          console.error(
            'Error fetching Flocculation Dosing equipments:',
            error.response?.data || error.message
          );
        } finally {
          setLoading(false);
        }
      };

      loadFlocculationDosingData();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.navigate('/(tabs)/dashboard')}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#111827" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>1.Dosing Settings</Text>
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
                style={[
                  styles.toggleButton,
                  operatingMode === 'AUTO' && styles.toggleButtonActive,
                ]}
                onPress={() => {
                  setOperatingMode('AUTO');
                  router.push('/flocculation/dosing');
                }}
              >
                <Text
                  style={[
                    styles.toggleText,
                    operatingMode === 'AUTO' && styles.toggleTextActive,
                  ]}
                >
                  AUTO
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  operatingMode === 'MANUAL' && styles.toggleButtonActive,
                ]}
                onPress={() => {
                  setOperatingMode('MANUAL');
                }}
              >
                <Text
                  style={[
                    styles.toggleText,
                    operatingMode === 'MANUAL' && styles.toggleTextActive,
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
          {loading && equipmentData.length === 0 ? (
            <View style={styles.emptyDevicesContainer}>
              <ActivityIndicator size="small" color="#14B8A6" />
              <Text style={styles.emptyDevicesText}>Loading devices...</Text>
            </View>
          ) : equipmentData.length === 0 ? (
            <View style={styles.emptyDevicesContainer}>
              <Text style={styles.emptyDevicesText}>No devices available</Text>
            </View>
          ) : (
            equipmentData.map((item: any, index: number) => {
              const typeName = item.equipment_type?.name || 'Device';
              const isMotor =
                typeName.toLowerCase().includes('motor') ||
                item.equipment_type?.id === 4;
              const isInletPump =
                typeName.toLowerCase().includes('pump') ||
                item.equipment_type?.id === 2;
              const isContactor =
                typeName.toLowerCase().includes('contactor') ||
                item.equipment_type?.id === 3;
              const isSolenoid =
                typeName.toLowerCase().includes('solenoid') ||
                item.equipment_type?.id === 1;

              // Determine icon
              let iconSource = require('@/assets/images/motor.png');
              if (isMotor) {
                iconSource = require('@/assets/images/motor.png');
              } else if (isInletPump) {
                iconSource = require('@/assets/images/inletpump.png');
              } else if (isContactor) {
                iconSource = require('@/assets/images/contactor.png');
              } else if (isSolenoid) {
                iconSource = require('@/assets/images/solenoid.png');
              }

              // Determine route
              let routePath = '/flocculation/dosing/inletpump';
              if (isMotor || isInletPump) {
                routePath = '/flocculation/dosing/inletpump';
              } else if (isContactor) {
                routePath = '/flocculation/dosing/contactorsensors';
              } else if (isSolenoid) {
                routePath = '/flocculation/dosing/solenoid';
              }

              // Determine title & subtitle
              const title = item.equipments?.[0]?.name || typeName;
              const count = item.count || item.equipments?.length || 1;
              const unitLabel = isMotor
                ? 'Motor'
                : isInletPump
                ? 'Pump'
                : isContactor
                ? 'Sensor'
                : isSolenoid
                ? 'Valve'
                : typeName;
              const subtitle = `${count} ${unitLabel}${count > 1 && !unitLabel.endsWith('s') ? 's' : ''}`;

              return (
                <View key={item.equipment_type?.id || index}>
                  {index > 0 && <View style={styles.divider} />}
                  <TouchableOpacity
                    style={styles.deviceRow}
                    onPress={() => router.push(routePath as any)}
                    activeOpacity={0.7}
                  >
                    <Image
                      source={iconSource}
                      style={[styles.deviceIcon, { width: 24, height: 24 }]}
                      resizeMode="contain"
                    />

                    <View style={styles.settingTextContainer}>
                      <Text style={styles.settingTitle}>{title}</Text>
                      <Text style={styles.settingSubtitle}>{subtitle}</Text>
                    </View>

                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={24}
                      color="#111827"
                    />
                  </TouchableOpacity>
                </View>
              );
            })
          )}
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
    shadowOffset: { width: 0, height: 1 },
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
  emptyDevicesContainer: {
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyDevicesText: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 6,
  },
});