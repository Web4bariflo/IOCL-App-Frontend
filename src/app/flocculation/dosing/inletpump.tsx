import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    getEquipmentManualLogs,
    turnOffMotor,
    turnOnMotor,
} from '../../../api/inletApi';

export default function InletPumpScreen() {
    const [equipmentName, setEquipmentName] = useState<string>('Motor 1');
    const [equipmentId, setEquipmentId] = useState<number>(37);
    const [stageId, setStageId] = useState<number>(6);

    const [isMotorRunning, setIsMotorRunning] = useState<boolean>(false);
    const [startTime, setStartTime] = useState<string | null>(null);
    const [endTime, setEndTime] = useState<string | null>(null);
    const [runningTime, setRunningTime] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [activityLogs, setActivityLogs] = useState<any[]>([]);

    const formatTimeOnly = (dateString?: string | null) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
    };

    const formatDuration = (seconds?: number | null) => {
        if (seconds == null || isNaN(seconds)) return '';
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        const parts: string[] = [];
        if (hrs > 0) parts.push(`${hrs} hr`);
        if (mins > 0) parts.push(`${mins} min`);
        if (secs > 0 || parts.length === 0) parts.push(`${secs} sec`);
        return parts.join(' ');
    };

    const fetchLogsAndState = async (mId: number, sId: number) => {
        try {
            const response = await getEquipmentManualLogs(mId, sId);
            console.log('Flocculation Motor Manual Logs:', response);

            if (response?.success && Array.isArray(response?.data)) {
                const logs = [...response.data].sort(
                    (a: any, b: any) =>
                        new Date(b.created_at || b.started_at).getTime() -
                        new Date(a.created_at || a.started_at).getTime()
                );
                setActivityLogs(logs.slice(0, 5));

                if (logs.length > 0) {
                    const latest = logs[0];
                    if (
                        latest.action === 'ON' ||
                        latest.current_state === 'ON' ||
                        (!latest.ended_at && latest.started_at)
                    ) {
                        setIsMotorRunning(true);
                        setStartTime(formatTimeOnly(latest.started_at));
                        setEndTime(null);
                        setRunningTime(null);
                    } else if (latest.ended_at) {
                        setIsMotorRunning(false);
                        setEndTime(formatTimeOnly(latest.ended_at));
                        if (latest.started_at) {
                            setStartTime(formatTimeOnly(latest.started_at));
                        }
                        if (latest.duration_seconds != null) {
                            setRunningTime(formatDuration(latest.duration_seconds));
                        }
                    }
                }
            }
        } catch (error) {
            console.log('Error fetching motor logs:', error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            const loadEquipmentInfo = async () => {
                try {
                    const name = await AsyncStorage.getItem('flocculationDosingEquipmentName');
                    let id = await AsyncStorage.getItem('flocculationDosingMotorId');
                    if (!id) id = await AsyncStorage.getItem('flocculationDosingEquipmentId');
                    if (!id) id = await AsyncStorage.getItem('flocculationDosingInletPumpId');

                    let sId = await AsyncStorage.getItem('flocculationDosingStageId');
                    if (!sId) sId = await AsyncStorage.getItem('flocluationDosingStageId');
                    if (!sId) sId = await AsyncStorage.getItem('selectedStageId');

                    const resolvedEquipmentName = name || 'Motor 1';
                    const resolvedEquipmentId = id ? Number(id) : 37;
                    const resolvedStageId = sId ? Number(sId) : 6;

                    setEquipmentName(resolvedEquipmentName);
                    setEquipmentId(resolvedEquipmentId);
                    setStageId(resolvedStageId);

                    await fetchLogsAndState(resolvedEquipmentId, resolvedStageId);
                } catch (error) {
                    console.log('Error loading equipment info:', error);
                }
            };
            loadEquipmentInfo();
        }, [])
    );

    const isMotor = equipmentName.toLowerCase().includes('motor');
    const deviceIcon = isMotor
        ? require('@/assets/images/motor.png')
        : require('@/assets/images/inletpump.png');
    const deviceLabel = isMotor ? 'Motor' : 'Pump';

    // POST /equipment/motor/{equipmentId}/on/ with { stage_id: stageId }
    const handleStartMotor = async () => {
        try {
            setLoading(true);
            console.log(`Turning ON Motor: id=${equipmentId}, stage_id=${stageId}`);

            const response = await turnOnMotor(equipmentId, stageId);
            console.log('Motor ON Response:', response);

            if (response?.success) {
                setIsMotorRunning(true);

                const startedAt =
                    response?.data?.started_at ?? response?.started_at;

                if (startedAt) {
                    setStartTime(formatTimeOnly(startedAt));
                } else {
                    setStartTime(formatTimeOnly(new Date().toISOString()));
                }

                // Clear end time and running time while running
                setEndTime(null);
                setRunningTime(null);

                // Refresh logs
                await fetchLogsAndState(equipmentId, stageId);
            } else {
                Alert.alert('Notice', response?.message || 'Failed to start motor');
            }
        } catch (error: any) {
            console.error('Failed to start motor:', error?.response?.data || error.message);
            Alert.alert(
                'Error',
                error?.response?.data?.detail || error?.response?.data?.message || error.message || 'Failed to start motor'
            );
        } finally {
            setLoading(false);
        }
    };

    // POST /equipment/motor/{equipmentId}/off/ with { stage_id: stageId }
    const handleStopMotor = async () => {
        try {
            setLoading(true);
            console.log(`Turning OFF Motor: id=${equipmentId}, stage_id=${stageId}`);

            const response = await turnOffMotor(equipmentId, stageId);
            console.log('Motor OFF Response:', response);

            if (response?.success) {
                setIsMotorRunning(false);

                const endedAt =
                    response?.data?.ended_at ?? response?.ended_at;
                const startedAt =
                    response?.data?.started_at ?? response?.started_at;
                const durationSeconds =
                    response?.data?.duration_seconds ?? response?.duration_seconds;

                if (endedAt) {
                    setEndTime(formatTimeOnly(endedAt));
                } else {
                    setEndTime(formatTimeOnly(new Date().toISOString()));
                }

                if (durationSeconds != null) {
                    setRunningTime(formatDuration(Number(durationSeconds)));
                }

                if (startedAt && !startTime) {
                    setStartTime(formatTimeOnly(startedAt));
                }

                // Refresh logs
                await fetchLogsAndState(equipmentId, stageId);
            } else {
                Alert.alert('Notice', response?.message || 'Failed to stop motor');
            }
        } catch (error: any) {
            console.error('Failed to stop motor:', error?.response?.data || error.message);
            Alert.alert(
                'Error',
                error?.response?.data?.detail || error?.response?.data?.message || error.message || 'Failed to stop motor'
            );
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
                    onPress={() => router.navigate('/flocculation/dosing/settings')}
                >
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#1E3A8A" />
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>{equipmentName}</Text>
                    <Text style={styles.headerSubtitle}>Manual Control</Text>
                </View>
                <View style={styles.backButton} />
            </View>
            <View style={styles.headerBorder} />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Status Card */}
                <View style={styles.card}>
                    <View style={styles.statusCardContent}>
                        <Image
                            source={deviceIcon}
                            style={styles.pumpLargeIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.statusTextContainer}>
                            <Text style={styles.statusTitle}>{deviceLabel} Status</Text>
                            <View style={styles.statusRow}>
                                <View
                                    style={[
                                        styles.statusDotGreen,
                                        {
                                            backgroundColor: isMotorRunning
                                                ? '#10B981'
                                                : '#6B7280',
                                        },
                                    ]}
                                />
                                <Text
                                    style={[
                                        styles.statusTextGreen,
                                        {
                                            color: isMotorRunning
                                                ? '#10B981'
                                                : '#6B7280',
                                        },
                                    ]}
                                >
                                    {isMotorRunning ? 'Running' : 'Ready'}
                                </Text>
                            </View>
                            <Text style={styles.statusSubtitle}>PLC connection active</Text>
                        </View>
                        <View
                            style={[
                                styles.offBadge,
                                isMotorRunning && { backgroundColor: '#DCFCE7' },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.offBadgeText,
                                    isMotorRunning && { color: '#16A34A', fontWeight: '700' },
                                ]}
                            >
                                {isMotorRunning ? 'ON' : 'OFF'}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Manual Control Card */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Manual Control</Text>
                    <View style={styles.actionButtonsContainer}>
                        <TouchableOpacity
                            style={[
                                styles.startButton,
                                (isMotorRunning || loading) && { opacity: 0.6 },
                            ]}
                            onPress={handleStartMotor}
                            disabled={isMotorRunning || loading}
                            activeOpacity={0.8}
                        >
                            {loading && !isMotorRunning ? (
                                <ActivityIndicator size="small" color="#FFFFFF" style={{ marginRight: 6 }} />
                            ) : (
                                <MaterialCommunityIcons name="power" size={24} color="#FFFFFF" />
                            )}
                            <Text style={styles.startButtonText}>START MOTOR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.stopButton,
                                (!isMotorRunning || loading) && { opacity: 0.6 },
                            ]}
                            onPress={handleStopMotor}
                            disabled={!isMotorRunning || loading}
                            activeOpacity={0.8}
                        >
                            {loading && isMotorRunning ? (
                                <ActivityIndicator size="small" color="#DC2626" style={{ marginRight: 6 }} />
                            ) : (
                                <MaterialCommunityIcons
                                    name="stop-circle-outline"
                                    size={24}
                                    color="#DC2626"
                                />
                            )}
                            <Text style={styles.stopButtonText}>STOP MOTOR</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Operating Schedule Card */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Operating Schedule</Text>
                    <Text style={styles.cardSubtitle}>
                        {isMotorRunning
                            ? 'Motor currently running'
                            : 'Set the motor operation window'}
                    </Text>

                    {/* When Motor is Running: Show Start Time */}
                    {isMotorRunning && (
                        <View style={styles.scheduleRow}>
                            <View style={styles.scheduleLabelContainer}>
                                <MaterialCommunityIcons
                                    name="clock-outline"
                                    size={22}
                                    color="#1A5B9C"
                                />
                                <Text style={styles.scheduleLabel}>Start Time</Text>
                            </View>
                            <View style={styles.timeInputBox}>
                                <Text style={styles.timeInputText}>
                                    {startTime || 'Active'}
                                </Text>
                            </View>
                        </View>
                    )}

                    {/* When Motor is Stopped: Show Start Time, End Time & Running Time if available */}
                    {!isMotorRunning && (
                        <>
                            {startTime ? (
                                <>
                                    <View style={styles.scheduleRow}>
                                        <View style={styles.scheduleLabelContainer}>
                                            <MaterialCommunityIcons
                                                name="clock-outline"
                                                size={22}
                                                color="#1A5B9C"
                                            />
                                            <Text style={styles.scheduleLabel}>Start Time</Text>
                                        </View>
                                        <View style={styles.timeInputBox}>
                                            <Text style={styles.timeInputText}>{startTime}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.divider} />
                                </>
                            ) : null}

                            {endTime ? (
                                <View style={styles.scheduleRow}>
                                    <View style={styles.scheduleLabelContainer}>
                                        <MaterialCommunityIcons
                                            name="clock-outline"
                                            size={22}
                                            color="#1A5B9C"
                                        />
                                        <Text style={styles.scheduleLabel}>End Time</Text>
                                    </View>
                                    <View style={styles.timeInputBox}>
                                        <Text style={styles.timeInputText}>{endTime}</Text>
                                    </View>
                                </View>
                            ) : null}

                            {runningTime ? (
                                <>
                                    <View style={styles.divider} />
                                    <View style={styles.scheduleRow}>
                                        <View style={styles.scheduleLabelContainer}>
                                            <MaterialCommunityIcons
                                                name="timer-outline"
                                                size={22}
                                                color="#1A5B9C"
                                            />
                                            <Text style={styles.scheduleLabel}>Duration</Text>
                                        </View>
                                        <View style={styles.timeInputBox}>
                                            <Text style={styles.timeInputText}>{runningTime}</Text>
                                        </View>
                                    </View>
                                </>
                            ) : null}

                            {!startTime && !endTime && (
                                <View style={styles.scheduleRow}>
                                    <View style={styles.scheduleLabelContainer}>
                                        <MaterialCommunityIcons
                                            name="clock-outline"
                                            size={22}
                                            color="#9CA3AF"
                                        />
                                        <Text style={[styles.scheduleLabel, { color: '#9CA3AF' }]}>
                                            No recent run
                                        </Text>
                                    </View>
                                    <View style={styles.timeInputBox}>
                                        <Text style={[styles.timeInputText, { color: '#9CA3AF' }]}>
                                            -- : --
                                        </Text>
                                    </View>
                                </View>
                            )}
                        </>
                    )}

                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>SAVE SCHEDULE</Text>
                    </TouchableOpacity>
                </View>

                {/* Operation Log Card */}
                <View style={styles.card}>
                    <View style={styles.logHeader}>
                        <Text style={styles.cardTitle}>Operation Log</Text>
                        <TouchableOpacity style={styles.viewAllRow}>
                            <Text style={styles.viewAllText}>View All</Text>
                            <MaterialCommunityIcons
                                name="chevron-right"
                                size={20}
                                color="#0D9488"
                            />
                        </TouchableOpacity>
                    </View>

                    {activityLogs.length > 0 ? (
                        activityLogs.map((log: any, idx: number) => {
                            const isActionOn = log.action === 'ON';
                            const timeText =
                                log.started_at || log.ended_at || log.created_at;
                            const formattedLogTime = timeText
                                ? formatTimeOnly(timeText)
                                : 'Recent';

                            return (
                                <View key={log.id || log.log_id || idx}>
                                    {idx > 0 && <View style={styles.logDivider} />}
                                    <View style={styles.logRow}>
                                        <Text style={styles.logTime}>
                                            {formattedLogTime}
                                        </Text>
                                        <View style={styles.logStatusContainer}>
                                            <Text style={styles.logStatusText}>
                                                {deviceLabel} {isActionOn ? 'Started' : 'Stopped'}
                                            </Text>
                                            <View
                                                style={[
                                                    styles.logStatusDot,
                                                    {
                                                        backgroundColor: isActionOn
                                                            ? '#10B981'
                                                            : '#6B7280',
                                                    },
                                                ]}
                                            />
                                        </View>
                                    </View>
                                </View>
                            );
                        })
                    ) : (
                        <View style={styles.logRow}>
                            <Text style={styles.logTime}>Status</Text>
                            <View style={styles.logStatusContainer}>
                                <Text style={styles.logStatusText}>
                                    {deviceLabel} {isMotorRunning ? 'Started' : 'Ready'}
                                </Text>
                                <View
                                    style={[
                                        styles.logStatusDot,
                                        {
                                            backgroundColor: isMotorRunning
                                                ? '#10B981'
                                                : '#6B7280',
                                        },
                                    ]}
                                />
                            </View>
                        </View>
                    )}
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
});
