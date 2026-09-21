// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { router } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { turnOnValve, turnOffValve } from '../../../../../api/inletApi';

// export default function SolenoidScreen() {
//     const [activeTab, setActiveTab] = useState<'VALVE 1' | 'VALVE 2'>('VALVE 1');
//     const [valveStartTime, setValveStartTime] = useState<string | null>(null);
//     const [valveCloseTime, setValveCloseTime] = useState<string | null>(null);
//     const [valveDuration, setValveDuration] = useState<number | null>(null);

//     const handleOpenValve = async () => {
//         try {
//             const stageId = await AsyncStorage.getItem('selectedStageId');

//             console.log('Selected Stage ID:', stageId);

//             if (!stageId) {
//                 console.log('Stage ID not found');
//                 return;
//             }

//             const valveId = activeTab === 'VALVE 1' ? 1 : 2;

//             console.log('Valve ID:', valveId);
//             console.log('Stage ID:', Number(stageId));

//             const response = await turnOnValve(
//                 valveId,
//                 Number(stageId)
//             );


//             console.log('Valve ON Response:', response);
//           if (
//             response.success &&
//             response.data.current_state === 'ON'
//         ) {
//     setValveStartTime(response.data.started_at);

//     // Hide Close Time and Duration when valve is opened
//     setValveCloseTime(null);
//     setValveDuration(null);
// }


//         } catch (error) {
//             console.error('Failed to open valve:', error);
//         }
//     };

//     const handleCloseValve = async () => {
//     try {
//         const stageId = await AsyncStorage.getItem('selectedStageId');

//         console.log('Selected Stage ID:', stageId);

//         if (!stageId) {
//             console.log('Stage ID not found');
//             return;
//         }

//         const valveId = activeTab === 'VALVE 1' ? 1 : 2;

//         const response = await turnOffValve(
//             valveId,
//             Number(stageId)
//         );

//         console.log('Valve OFF Response:', response);

//         if (
//             response.success &&
//             response.data.current_state === 'OFF'
//         ) {
//             setValveCloseTime(response.data.ended_at);
//             setValveDuration(response.data.duration_seconds);

//             // Hide Open Time
//             setValveStartTime(null);
//         }

//     } catch (error) {
//         console.error('Failed to close valve:', error);
//     }
// };

//     return (
//         <SafeAreaView style={styles.container}>
//             {/* Header */}
//             <View style={styles.header}>
//                 <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/inlet/wastewater/settings')}>
//                     <MaterialCommunityIcons name="arrow-left" size={24} color="#1E3A8A" />
//                 </TouchableOpacity>
//                 <View style={styles.headerTitleContainer}>
//                     <Text style={styles.headerTitle}>Solenoid Valves</Text>
//                     <Text style={styles.headerSubtitle}>Manual Control</Text>
//                 </View>
//                 <View style={styles.backButton} />
//             </View>
//             <View style={styles.headerBorder} />

//             <ScrollView contentContainerStyle={styles.scrollContent}>

//                 {/* Valve Status Card */}
//                 <View style={styles.card}>
//                     <View style={styles.statusCardContent}>
//                         <Image
//                             source={require('@/assets/images/solenoid.png')}
//                             style={styles.valveLargeIcon}
//                             resizeMode="contain"
//                         />
//                         <View style={styles.statusTextContainer}>
//                             <Text style={styles.statusTitle}>Valve Status</Text>
//                             <View style={styles.statusRow}>
//                                 <View style={styles.statusDotGreen} />
//                                 <Text style={styles.statusTextGreen}>Connected</Text>
//                             </View>
//                             <Text style={styles.statusSubtitle}>2 valves online</Text>
//                         </View>
//                         <View style={styles.activeBadge}>
//                             <Text style={styles.activeBadgeText}>ACTIVE</Text>
//                         </View>
//                     </View>
//                 </View>

//                 {/* Tabs */}
//                 <View style={styles.tabsContainer}>
//                     <TouchableOpacity
//                         style={[styles.tabButton, activeTab === 'VALVE 1' && styles.tabButtonActive]}
//                         onPress={() => setActiveTab('VALVE 1')}
//                     >
//                         <Text style={[styles.tabButtonText, activeTab === 'VALVE 1' && styles.tabButtonTextActive]}>
//                             VALVE 1
//                         </Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={[styles.tabButton, activeTab === 'VALVE 2' && styles.tabButtonActive]}
//                         onPress={() => setActiveTab('VALVE 2')}
//                     >
//                         <Text style={[styles.tabButtonText, activeTab === 'VALVE 2' && styles.tabButtonTextActive]}>
//                             VALVE 2
//                         </Text>
//                     </TouchableOpacity>
//                 </View>

//                 {/* Manual Control Card */}
//                 <View style={styles.card}>
//                     <Text style={styles.cardTitle}>Solenoid Valve {activeTab === 'VALVE 1' ? '1' : '2'}</Text>
//                     <Text style={styles.cardSubtitle}>Manual flow control</Text>
//                     <View style={styles.actionButtonsContainer}>
//                         <TouchableOpacity
//                             style={styles.openButton}
//                             onPress={handleOpenValve}
//                         >
//                             <MaterialCommunityIcons name="pipe-valve" size={24} color="#FFFFFF" />
//                             <Text style={styles.openButtonText}>OPEN VALVE</Text>
//                         </TouchableOpacity>

//                     <TouchableOpacity
//     style={styles.closeButton}
//     onPress={handleCloseValve}
// >
//     <MaterialCommunityIcons
//         name="stop-circle-outline"
//         size={24}
//         color="#DC2626"
//     />
//     <Text style={styles.closeButtonText}>CLOSE VALVE</Text>
// </TouchableOpacity>
//                     </View>
//                 </View>

//                 {/* Valve Schedule Card */}
//                 {/* Valve Schedule Card */}
// <View style={styles.card}>
//     <Text style={styles.cardTitle}>Valve Schedule</Text>
//     <Text style={styles.cardSubtitle}>Set the valve operating window</Text>

//     {/* Show ONLY after OPEN */}
//     {valveStartTime && (
//         <View style={styles.scheduleRow}>
//             <View style={styles.scheduleLabelContainer}>
//                 <MaterialCommunityIcons
//                     name="clock-outline"
//                     size={22}
//                     color="#1A5B9C"
//                 />
//                 <Text style={styles.scheduleLabel}>Open Time</Text>
//             </View>

//             <View style={styles.timeInputBox}>
//                 <Text style={styles.timeInputText}>
//                     {new Date(valveStartTime).toLocaleTimeString([], {
//                         hour: '2-digit',
//                         minute: '2-digit',
//                     })}
//                 </Text>
//             </View>
//         </View>
//     )}

//     {/* Show ONLY after CLOSE */}
//     {valveCloseTime && (
//     <>
//         <View style={styles.scheduleRow}>
//             <View style={styles.scheduleLabelContainer}>
//                 <MaterialCommunityIcons
//                     name="clock-outline"
//                     size={22}
//                     color="#1A5B9C"
//                 />
//                 <Text style={styles.scheduleLabel}>Close Time</Text>
//             </View>

//             <View style={styles.timeInputBox}>
//                 <Text style={styles.timeInputText}>
//                     {new Date(valveCloseTime).toLocaleTimeString([], {
//                         hour: '2-digit',
//                         minute: '2-digit',
//                     })}
//                 </Text>
//             </View>
//         </View>

//         <View style={styles.divider} />

//         <View style={styles.scheduleRow}>
//             <View style={styles.scheduleLabelContainer}>
//                 <MaterialCommunityIcons
//                     name="timer-outline"
//                     size={22}
//                     color="#1A5B9C"
//                 />
//                 <Text style={styles.scheduleLabel}>Open Duration</Text>
//             </View>

//             <View style={styles.timeInputBox}>
//                 <Text style={styles.timeInputText}>
//                     {valveDuration !== null
//                         ? `${Math.floor(valveDuration / 60)} min ${valveDuration % 60} sec`
//                         : '--'}
//                 </Text>
//             </View>
//         </View>
//     </>
// )}

// </View>

//                 <View style={styles.infoRow}>
//                     <MaterialCommunityIcons name="information-outline" size={16} color="#6B7280" />
//                     <Text style={styles.infoText}>Switch to Valve 2 to view its schedule and history.</Text>
//                 </View>

//                 {/* Valve Activity Log Card */}
//                 <View style={styles.card}>
//                     <View style={styles.logHeader}>
//                         <Text style={styles.cardTitle}>Valve Activity Log</Text>
//                         <TouchableOpacity style={styles.viewAllRow}>
//                             <Text style={styles.viewAllText}>View All</Text>
//                             <MaterialCommunityIcons name="chevron-right" size={20} color="#0D9488" />
//                         </TouchableOpacity>
//                     </View>

//                     <View style={styles.logRow}>
//                         <Text style={styles.logTime}>Today, 08:15 AM</Text>
//                         <View style={styles.logStatusContainer}>
//                             <Text style={styles.logStatusText}>Valve Opened</Text>
//                             <View style={[styles.logStatusDot, { backgroundColor: '#10B981' }]} />
//                         </View>
//                     </View>

//                     <View style={styles.logDivider} />

//                     <View style={styles.logRow}>
//                         <Text style={styles.logTime}>Yesterday, 06:15 PM</Text>
//                         <View style={styles.logStatusContainer}>
//                             <Text style={styles.logStatusText}>Valve Closed</Text>
//                             <View style={[styles.logStatusDot, { backgroundColor: '#6B7280' }]} />
//                         </View>
//                     </View>

//                     <View style={styles.logDivider} />

//                     <View style={styles.logRow}>
//                         <Text style={styles.logTime}>Yesterday, 08:15 AM</Text>
//                         <View style={styles.logStatusContainer}>
//                             <Text style={styles.logStatusText}>Valve Opened</Text>
//                             <View style={[styles.logStatusDot, { backgroundColor: '#10B981' }]} />
//                         </View>
//                     </View>

//                 </View>

//             </ScrollView>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F8F9FA',
//     },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingHorizontal: 16,
//         paddingTop: 16,
//         paddingBottom: 16,
//         backgroundColor: '#FFFFFF',
//     },
//     headerBorder: {
//         height: 1,
//         backgroundColor: '#E5E7EB',
//     },
//     backButton: {
//         width: 40,
//         height: 40,
//         justifyContent: 'center',
//     },
//     headerTitleContainer: {
//         alignItems: 'center',
//     },
//     headerTitle: {
//         fontSize: 18,
//         fontWeight: '700',
//         color: '#1E3A8A',
//     },
//     headerSubtitle: {
//         fontSize: 13,
//         color: '#6B7280',
//         marginTop: 2,
//     },
//     scrollContent: {
//         padding: 16,
//         paddingBottom: 40,
//     },
//     card: {
//         backgroundColor: '#FFFFFF',
//         borderRadius: 12,
//         padding: 16,
//         borderWidth: 1,
//         borderColor: '#F3F4F6',
//         marginBottom: 16,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.05,
//         shadowRadius: 3,
//         elevation: 2,
//     },
//     statusCardContent: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     valveLargeIcon: {
//         width: 50,
//         height: 50,
//         marginRight: 16,
//     },
//     statusTextContainer: {
//         flex: 1,
//     },
//     statusTitle: {
//         fontSize: 16,
//         fontWeight: '700',
//         color: '#111827',
//     },
//     statusRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginTop: 4,
//         marginBottom: 2,
//     },
//     statusDotGreen: {
//         width: 8,
//         height: 8,
//         borderRadius: 4,
//         backgroundColor: '#10B981',
//         marginRight: 6,
//     },
//     statusTextGreen: {
//         fontSize: 14,
//         color: '#10B981',
//         fontWeight: '500',
//     },
//     statusSubtitle: {
//         fontSize: 12,
//         color: '#6B7280',
//     },
//     activeBadge: {
//         backgroundColor: '#0D9488',
//         paddingHorizontal: 12,
//         paddingVertical: 6,
//         borderRadius: 4,
//     },
//     activeBadgeText: {
//         fontSize: 13,
//         fontWeight: '600',
//         color: '#FFFFFF',
//     },
//     tabsContainer: {
//         flexDirection: 'row',
//         backgroundColor: '#FFFFFF',
//         borderRadius: 8,
//         borderWidth: 1,
//         borderColor: '#E5E7EB',
//         marginBottom: 16,
//         overflow: 'hidden',
//     },
//     tabButton: {
//         flex: 1,
//         paddingVertical: 12,
//         alignItems: 'center',
//         backgroundColor: '#FFFFFF',
//     },
//     tabButtonActive: {
//         backgroundColor: '#0D9488',
//     },
//     tabButtonText: {
//         fontSize: 14,
//         fontWeight: '600',
//         color: '#111827',
//     },
//     tabButtonTextActive: {
//         color: '#FFFFFF',
//     },
//     cardTitle: {
//         fontSize: 16,
//         fontWeight: '700',
//         color: '#111827',
//         marginBottom: 4,
//     },
//     cardSubtitle: {
//         fontSize: 13,
//         color: '#6B7280',
//         marginBottom: 16,
//     },
//     actionButtonsContainer: {
//         flexDirection: 'row',
//         gap: 12,
//         marginTop: 8,
//     },
//     openButton: {
//         flex: 1,
//         backgroundColor: '#0D9488',
//         borderRadius: 8,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 14,
//     },
//     openButtonText: {
//         color: '#FFFFFF',
//         fontWeight: '600',
//         fontSize: 13,
//         marginLeft: 6,
//     },
//     closeButton: {
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//         borderWidth: 1,
//         borderColor: '#DC2626',
//         borderRadius: 8,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 14,
//     },
//     closeButtonText: {
//         color: '#DC2626',
//         fontWeight: '600',
//         fontSize: 13,
//         marginLeft: 6,
//     },
//     scheduleRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingVertical: 8,
//     },
//     scheduleLabelContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     scheduleLabel: {
//         fontSize: 15,
//         fontWeight: '600',
//         color: '#111827',
//         marginLeft: 12,
//     },
//     timeInputBox: {
//         borderWidth: 1,
//         borderColor: '#E5E7EB',
//         borderRadius: 6,
//         paddingHorizontal: 16,
//         paddingVertical: 8,
//         minWidth: 100,
//         alignItems: 'center',
//     },
//     timeInputText: {
//         fontSize: 14,
//         color: '#4B5563',
//         fontWeight: '500',
//     },
//     divider: {
//         height: 1,
//         backgroundColor: '#F3F4F6',
//         marginVertical: 4,
//     },
//     saveButton: {
//         backgroundColor: '#0D9488',
//         borderRadius: 8,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 14,
//         marginTop: 16,
//     },
//     saveButtonText: {
//         color: '#FFFFFF',
//         fontWeight: '600',
//         fontSize: 14,
//     },
//     infoRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 16,
//         paddingHorizontal: 4,
//     },
//     infoText: {
//         fontSize: 13,
//         color: '#6B7280',
//         marginLeft: 6,
//     },
//     logHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 16,
//     },
//     viewAllRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     viewAllText: {
//         fontSize: 13,
//         color: '#0D9488',
//         fontWeight: '500',
//     },
//     logRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingVertical: 10,
//     },
//     logTime: {
//         fontSize: 14,
//         color: '#4B5563',
//     },
//     logStatusContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     logStatusText: {
//         fontSize: 14,
//         color: '#4B5563',
//         marginRight: 8,
//     },
//     logStatusDot: {
//         width: 8,
//         height: 8,
//         borderRadius: 4,
//     },
//     logDivider: {
//         height: 1,
//         backgroundColor: '#F3F4F6',
//         marginVertical: 4,
//     },
// });


import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { router } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {

    turnOnValve,

    turnOffValve,

    getEquipmentManualLogs,

} from '../../../../../api/inletApi';


export default function SolenoidScreen() {

    const [activeTab, setActiveTab] = useState<'VALVE 1' | 'VALVE 2'>('VALVE 1');

    const [valveStartTime, setValveStartTime] = useState<string | null>(null);

    const [valveCloseTime, setValveCloseTime] = useState<string | null>(null);

    const [valveDuration, setValveDuration] = useState<number | null>(null);


    const [activityLogs, setActivityLogs] = useState<any[]>([]);

    const [logsLoading, setLogsLoading] = useState(false);

    const [logsError, setLogsError] = useState<string | null>(null);


    const handleOpenValve = async () => {

        try {

            const stageId = await AsyncStorage.getItem('selectedStageId');


            console.log('Selected Stage ID:', stageId);


            if (!stageId) {

                console.log('Stage ID not found');

                return;

            }


            const valveId = activeTab === 'VALVE 1' ? 1 : 2;


            console.log('Valve ID:', valveId);

            console.log('Stage ID:', Number(stageId));


            const response = await turnOnValve(

                valveId,

                Number(stageId)

            );



            console.log('Valve ON Response:', response);



            if (response.success) {

                setValveStartTime(response.data.started_at);


                // Hide Close Time and Duration when valve is opened

                setValveCloseTime(null);

                setValveDuration(null);


                await fetchActivityLogs();

            }




        } catch (error) {

            console.error('Failed to open valve:', error);

        }

    };


    // const handleCloseValve = async () => {

    // try {

    // const stageId = await AsyncStorage.getItem('selectedStageId');


    // console.log('Selected Stage ID:', stageId);


    // if (!stageId) {

    // console.log('Stage ID not found');

    // return;

    // }


    // const valveId = activeTab === 'VALVE 1' ? 1 : 2;


    // const response = await turnOffValve(

    // valveId,

    // Number(stageId)

    // );


    // console.log('Valve OFF Response:', response);


    // if (response.status === 'INACTIVE') {

    // setValveCloseTime(response.ended_at);

    // setValveDuration(response.duration_seconds);


    // // Hide Open Time

    // setValveStartTime(null);


    // await fetchActivityLogs();


    // }


    // } catch (error) {

    // console.error('Failed to close valve:', error);

    // }

    // };


    const handleCloseValve = async () => {

        try {

            const stageId = await AsyncStorage.getItem('selectedStageId');


            console.log('Selected Stage ID:', stageId);


            if (!stageId) {

                console.log('Stage ID not found');

                return;

            }


            const valveId = activeTab === 'VALVE 1' ? 1 : 2;


            console.log('Closing Valve ID:', valveId);

            console.log('Stage ID:', Number(stageId));


            const response = await turnOffValve(

                valveId,

                Number(stageId)

            );


            console.log('Valve OFF Response:', response);

            console.log('Valve OFF Response Data:', response?.data);


            // Check status from different possible response structures

            const status =

                response?.data?.status ??

                response?.status ??

                response?.data?.equipment?.status;


            const endedAt =

                response?.data?.ended_at ??

                response?.ended_at;


            const duration =

                response?.data?.duration_seconds ??

                response?.duration_seconds;


            // console.log('Close Status:', status);

            // console.log('Ended At:', endedAt);

            // console.log('Duration:', duration);


            if (status === 'INACTIVE') {


                // Show Close Time

                setValveCloseTime(endedAt ?? null);


                // Show Duration

                setValveDuration(

                    duration !== undefined && duration !== null

                        ? Number(duration)

                        : null

                );


                // Hide Open Time

                setValveStartTime(null);


                // Refresh activity log

                await fetchActivityLogs();






            } else {

                console.log(

                    'Valve close response did not return INACTIVE:',

                    response

                );

            }


        } catch (error: any) {

            console.error('Failed to close valve:', error);

            console.error('Close error response:', error?.response?.data);

        }

    };


    const fetchActivityLogs = async () => {

        try {

            setLogsLoading(true);

            setLogsError(null);

            const stageId = await AsyncStorage.getItem('selectedStageId');


            const equipmentId = activeTab === 'VALVE 1' ? 1 : 2;


            console.log('Fetching logs for Equipment ID:', equipmentId);


            const response = await getEquipmentManualLogs(equipmentId, Number(stageId));


            console.log('Manual Logs:', response);


            if (response?.success && Array.isArray(response?.data)) {

                // Show only latest 3 records

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

            console.error('Failed to fetch activity logs:', error);


            setActivityLogs([]);

            setLogsError('Unable to load activity logs');

        } finally {

            setLogsLoading(false);

        }

    };


    useEffect(() => {

        fetchActivityLogs();

    }, [activeTab]);


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


    return (

        <SafeAreaView style={styles.container}>

            {/* Header */}

            <View style={styles.header}>

                <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/inlet/wastewater/settings')}>

                    <MaterialCommunityIcons name="arrow-left" size={24} color="#1E3A8A" />

                </TouchableOpacity>

                <View style={styles.headerTitleContainer}>

                    <Text style={styles.headerTitle}>Solenoid Valves</Text>

                    <Text style={styles.headerSubtitle}>Manual Control</Text>

                </View>

                <View style={styles.backButton} />

            </View>

            <View style={styles.headerBorder} />


            <ScrollView contentContainerStyle={styles.scrollContent}>


                {/* Valve Status Card */}

                <View style={styles.card}>

                    <View style={styles.statusCardContent}>

                        <Image

                            source={require('@/assets/images/solenoid.png')}

                            style={styles.valveLargeIcon}

                            resizeMode="contain"

                        />

                        <View style={styles.statusTextContainer}>

                            <Text style={styles.statusTitle}>Valve Status</Text>

                            <View style={styles.statusRow}>

                                <View style={styles.statusDotGreen} />

                                <Text style={styles.statusTextGreen}>Connected</Text>

                            </View>

                            <Text style={styles.statusSubtitle}>2 valves online</Text>

                        </View>

                        <View style={styles.activeBadge}>

                            <Text style={styles.activeBadgeText}>ACTIVE</Text>

                        </View>

                    </View>

                </View>


                {/* Tabs */}

                <View style={styles.tabsContainer}>

                    <TouchableOpacity

                        style={[styles.tabButton, activeTab === 'VALVE 1' && styles.tabButtonActive]}

                        onPress={() => setActiveTab('VALVE 1')}

                    >

                        <Text style={[styles.tabButtonText, activeTab === 'VALVE 1' && styles.tabButtonTextActive]}>

                            VALVE 1

                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity

                        style={[styles.tabButton, activeTab === 'VALVE 2' && styles.tabButtonActive]}

                        onPress={() => setActiveTab('VALVE 2')}

                    >

                        <Text style={[styles.tabButtonText, activeTab === 'VALVE 2' && styles.tabButtonTextActive]}>

                            VALVE 2

                        </Text>

                    </TouchableOpacity>

                </View>


                {/* Manual Control Card */}

                <View style={styles.card}>

                    <Text style={styles.cardTitle}>Solenoid Valve {activeTab === 'VALVE 1' ? '1' : '2'}</Text>

                    <Text style={styles.cardSubtitle}>Manual flow control</Text>

                    <View style={styles.actionButtonsContainer}>

                        <TouchableOpacity

                            style={styles.openButton}

                            onPress={handleOpenValve}

                        >

                            <MaterialCommunityIcons name="pipe-valve" size={24} color="#FFFFFF" />

                            <Text style={styles.openButtonText}>OPEN VALVE</Text>

                        </TouchableOpacity>


                        <TouchableOpacity

                            style={styles.closeButton}

                            onPress={handleCloseValve}

                        >

                            <MaterialCommunityIcons

                                name="stop-circle-outline"

                                size={24}

                                color="#DC2626"

                            />

                            <Text style={styles.closeButtonText}>CLOSE VALVE</Text>

                        </TouchableOpacity>

                    </View>

                </View>


                {/* Valve Schedule Card */}

                {/* Valve Schedule Card */}

                <View style={styles.card}>

                    <Text style={styles.cardTitle}>Valve Schedule</Text>

                    <Text style={styles.cardSubtitle}>Set the valve operating window</Text>


                    {/* Show ONLY after OPEN */}

                    {valveStartTime && (

                        <View style={styles.scheduleRow}>

                            <View style={styles.scheduleLabelContainer}>

                                <MaterialCommunityIcons

                                    name="clock-outline"

                                    size={22}

                                    color="#1A5B9C"

                                />

                                <Text style={styles.scheduleLabel}>Open Time</Text>

                            </View>


                            <View style={styles.timeInputBox}>

                                <Text style={styles.timeInputText}>

                                    {new Date(valveStartTime).toLocaleTimeString([], {

                                        hour: '2-digit',

                                        minute: '2-digit',

                                    })}

                                </Text>

                            </View>

                        </View>

                    )}


                    {/* Show ONLY after CLOSE */}

                    {valveCloseTime && (

                        <>

                            <View style={styles.scheduleRow}>

                                <View style={styles.scheduleLabelContainer}>

                                    <MaterialCommunityIcons

                                        name="clock-outline"

                                        size={22}

                                        color="#1A5B9C"

                                    />

                                    <Text style={styles.scheduleLabel}>Close Time</Text>

                                </View>


                                <View style={styles.timeInputBox}>

                                    <Text style={styles.timeInputText}>

                                        {new Date(valveCloseTime).toLocaleTimeString([], {

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

                                        name="timer-outline"

                                        size={22}

                                        color="#1A5B9C"

                                    />

                                    <Text style={styles.scheduleLabel}>Open Duration</Text>

                                </View>


                                <View style={styles.timeInputBox}>

                                    <Text style={styles.timeInputText}>

                                        {valveDuration !== null

                                            ? `${Math.floor(valveDuration / 60)} min ${valveDuration % 60} sec`

                                            : '--'}

                                    </Text>

                                </View>

                            </View>

                        </>

                    )}


                </View>


                <View style={styles.infoRow}>

                    <MaterialCommunityIcons name="information-outline" size={16} color="#6B7280" />

                    <Text style={styles.infoText}>Switch to Valve 2 to view its schedule and history.</Text>

                </View>


                {/* Valve Activity Log Card */}


                <View style={styles.card}>


                    {/* Header */}

                    <View style={styles.logHeader}>

                        <Text style={styles.cardTitle}>

                            Valve Activity Log

                        </Text>


                        <TouchableOpacity

                            style={styles.viewAllRow}

                            onPress={() => {

                                // Add your View All navigation here

                            }}

                        >

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

                                Loading activity logs...

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

                                    No activity logs found

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


                                        <Text style={styles.logTime}>

                                            {formatDateTime(log.started_at)}

                                        </Text>


                                        {/* IMPORTANT: stage is an object */}

                                        <Text style={styles.logStage}>

                                            {log.stage?.name ?? '--'}

                                        </Text>


                                    </View>


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

                                                ? 'Valve Opened'

                                                : 'Valve Closed'}

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

                                            Duration:{' '}

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

    valveLargeIcon: {

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

    activeBadge: {

        backgroundColor: '#0D9488',

        paddingHorizontal: 12,

        paddingVertical: 6,

        borderRadius: 4,

    },

    activeBadgeText: {

        fontSize: 13,

        fontWeight: '600',

        color: '#FFFFFF',

    },

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

    openButton: {

        flex: 1,

        backgroundColor: '#0D9488',

        borderRadius: 8,

        flexDirection: 'row',

        alignItems: 'center',

        justifyContent: 'center',

        paddingVertical: 14,

    },

    openButtonText: {

        color: '#FFFFFF',

        fontWeight: '600',

        fontSize: 13,

        marginLeft: 6,

    },

    closeButton: {

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

    closeButtonText: {

        color: '#DC2626',

        fontWeight: '600',

        fontSize: 13,

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

    infoRow: {

        flexDirection: 'row',

        alignItems: 'center',

        marginBottom: 16,

        paddingHorizontal: 4,

    },

    infoText: {

        fontSize: 13,

        color: '#6B7280',

        marginLeft: 6,

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