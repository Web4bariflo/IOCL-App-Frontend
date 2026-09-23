import React, { useState, useEffect } from 'react';
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
import {
    getStageEquipments,
    mergeStageDuration,
} from '../../../../api/inletApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen() {
    const { module } = useLocalSearchParams<{
        module?: string;
    }>();

    const selectedModule =
        module === 'Clean Water' ? 'Clean Water' : 'Waste Water';

    const [operatingMode, setOperatingMode] =
        useState<'AUTO' | 'MANUAL'>('MANUAL');

    const [notifications, setNotifications] = useState(true);
    const [equipmentTypes, setEquipmentTypes] = useState<any[]>([]);

    const [loading, setLoading] = useState(false);

    const [merging, setMerging] = useState(false);

    const handleMerge = async () => {
        try {
            setMerging(true);

            // Get stage ID according to selected module
            const stageIdKey =
                selectedModule === 'Waste Water'
                    ? 'selectedStageId'
                    : 'cleanWaterStageId';

            const stageId = await AsyncStorage.getItem(stageIdKey);

            console.log(
                `${selectedModule} Stage ID:`,
                stageId
            );

            if (!stageId) {
                console.log(
                    `${selectedModule} Stage ID not found`
                );
                return;
            }

            // Call Merge Duration API
            const response = await mergeStageDuration(
                Number(stageId)
            );

            console.log(
                'Merge Duration Response:',
                JSON.stringify(response, null, 2)
            );

            if (response?.success) {
                console.log(
                    'Stage equipment durations merged successfully'
                );

                console.log(
                    'Merged Equipment Count:',
                    response.count
                );

                console.log(
                    'Merged Equipment Data:',
                    response.data
                );
            }
        } catch (error: any) {
            console.error(
                'Merge Duration Failed:',
                error?.response?.data || error?.message
            );
        } finally {
            setMerging(false);
        }
    };

    useEffect(() => {
        fetchStageEquipments();
    }, []);

    const fetchStageEquipments = async () => {
        try {
            setLoading(true);

            const stageId = await AsyncStorage.getItem('selectedStageId');

            console.log('Selected Stage ID:', stageId);

            if (!stageId) {
                console.log('No stage ID found in AsyncStorage');
                return;
            }

            const response = await getStageEquipments(Number(stageId));

            console.log('Stage Equipment Response:', response);

            // if (response.success) {
            //     // Store the stage ID from API response
            //     await AsyncStorage.setItem(
            //         'selectedStageId',
            //         String(response.data.stage.id)
            //     );

            //     console.log(
            //         'Stored Stage ID:',
            //         response.data.stage.id
            //     );

            //     // Store equipment types
            //     setEquipmentTypes(
            //         response.data.equipment_types || []
            //     );
            // }
            if (response.success) {
                const stage = response.data.stage;
                const equipmentTypes = response.data.equipment_types || [];

                // Store Stage ID
                await AsyncStorage.setItem(
                    'selectedStageId',
                    String(stage.id)
                );

                console.log('Stored Stage ID:', stage.id);

                // Find Inlet Pump
                const inletPumpType = equipmentTypes.find(
                    (item: any) =>
                        item.equipment_type?.name === 'Inlet Pump 1'
                );

                if (inletPumpType?.equipments?.length > 0) {
                    const inletPumpId = inletPumpType.equipments[0].id;

                    await AsyncStorage.setItem(
                        'inletPumpId',
                        String(inletPumpId)
                    );

                    console.log(
                        'Stored Inlet Pump ID:',
                        inletPumpId
                    );
                }

                // Find Contactor Sensors
                const contactorType = equipmentTypes.find(
                    (item: any) =>
                        item.equipment_type?.name === 'Contactor Sensors'
                );

                if (contactorType?.equipments?.length > 0) {
                    const contactorIds =
                        contactorType.equipments.map(
                            (equipment: any) => equipment.id
                        );

                    await AsyncStorage.setItem(
                        'contactorSensorIds',
                        JSON.stringify(contactorIds)
                    );

                    console.log(
                        'Stored Contactor Sensor IDs:',
                        contactorIds
                    );
                }

                // Find Solenoid Valves
                const solenoidType = equipmentTypes.find(
                    (item: any) =>
                        item.equipment_type?.name === 'Solenoid Valves'
                );

                if (solenoidType?.equipments?.length > 0) {
                    const solenoidValveId =
                        solenoidType.equipments[0].id;

                    await AsyncStorage.setItem(
                        'solenoidValveId',
                        String(solenoidValveId)
                    );

                    console.log(
                        'Stored Solenoid Valve ID:',
                        solenoidValveId
                    );
                }

                // Store equipment types for UI
                setEquipmentTypes(equipmentTypes);
            }
        } catch (error) {
            console.error('Failed to fetch stage equipments:', error);
        } finally {
            setLoading(false);
        }
    };

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
                    style={[
                        styles.mergeButton,
                        merging && styles.mergeButtonDisabled,
                    ]}
                    onPress={handleMerge}
                    disabled={merging}
                    activeOpacity={0.8}
                >
                    <MaterialCommunityIcons
                        name="merge"
                        size={22}
                        color="#FFFFFF"
                    />

                    <Text style={styles.mergeButtonText}>
                        {merging ? 'MERGING...' : 'MERGE'}
                    </Text>
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

                                    router.push('/inlet/wastewater');
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
                            router.push('/inlet/wastewater/inletroutes/solenoid')
                        }
                        activeOpacity={0.7}
                    >
                        <Image
                            source={require('@/assets/images/solenoid.png')}
                            style={styles.deviceIcon}
                            resizeMode="contain"
                        />

                        <View style={styles.settingTextContainer}>
                            {/* <Text style={styles.settingTitle}>
                Solenoid Valves
              </Text> */}
                            <Text style={styles.settingTitle}>
                                {equipmentTypes.find(
                                    item => item.equipment_type?.name === 'Solenoid Valves'
                                )?.equipment_type?.name || 'Solenoid Valves'}
                            </Text>

                            <Text style={styles.settingSubtitle}>
                                {equipmentTypes.find(
                                    item => item.equipment_type?.name === 'Solenoid Valves'
                                )?.count || 0} Valves
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
                            router.push('/inlet/wastewater/inletroutes/inletpump')
                        }
                        activeOpacity={0.7}
                    >
                        <Image
                            source={require('@/assets/images/inletpump.png')}
                            style={styles.deviceIcon}
                            resizeMode="contain"
                        />

                        <View style={styles.settingTextContainer}>
                            {/* <Text style={styles.settingTitle}>
                Inlet Pump 1
              </Text> */}
                            <Text style={styles.settingTitle}>
                                {equipmentTypes.find(
                                    item => item.equipment_type?.name === 'Inlet Pump 1'
                                )?.equipment_type?.name || 'Inlet Pump 1'}
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
                                '/inlet/wastewater/inletroutes/contactorsensor'
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
                            {/* <Text style={styles.settingTitle}>
                Contactor Sensors
              </Text> */}
                            <Text style={styles.settingTitle}>
                                {equipmentTypes.find(
                                    item => item.equipment_type?.name === 'Contactor Sensors'
                                )?.equipment_type?.name || 'Contactor Sensors'}
                            </Text>

                            <Text style={styles.settingSubtitle}>
                                {equipmentTypes.find(
                                    item => item.equipment_type?.name === 'Contactor Sensors'
                                )?.count || 0} Sensors
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
    mergeButtonDisabled: {
        opacity: 0.6,
    },
});