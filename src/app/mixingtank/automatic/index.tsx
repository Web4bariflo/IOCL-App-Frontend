import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';

export default function MixingAutomaticScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('Overview');

    return (
        <SafeAreaView style={styles.container}>

            {/* ================= HEADER ================= */}
            <View style={styles.header}>

                <TouchableOpacity onPress={() => router.push({ pathname: '/dashboard', params: { menu: 'open' } })} style={styles.backButton}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>

                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>Mixing Tank</Text>

                    <View style={styles.subtitleRow}>
                        <Text style={styles.headerSubtitle}>Automatic Mode</Text>
                        <View style={styles.greenSmallDot} />
                    </View>
                </View>

                <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.notificationButton}>
                        <Ionicons
                            name="notifications-outline"
                            size={24}
                            color="#111827"
                        />

                        <View style={styles.notificationBadge}>
                            <Text style={styles.notificationText}>3</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons
                            name="settings-outline"
                            size={23}
                            color="#111827"
                        />
                    </TouchableOpacity>
                </View>

            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >

                {/* ================= MODE + STATUS ================= */}
                <View style={styles.statusRowTop}>

                    <View style={styles.automaticBadge}>
                        <MaterialCommunityIcons
                            name="robot-outline"
                            size={16}
                            color="#15803D"
                        />

                        <Text style={styles.automaticText}>
                            AUTOMATIC MODE
                        </Text>
                    </View>

                    <View style={styles.systemStatus}>

                        <View style={styles.statusGreenDot} />

                        <Text style={styles.systemStatusLabel}>
                            System Status
                        </Text>

                        <Text style={styles.normalText}>
                            Normal
                        </Text>

                    </View>

                </View>

                {/* ================= TABS ================= */}
                <View style={styles.tabs}>

                    {[
                        {
                            name: 'Overview',
                            icon: 'speedometer-outline',
                        },
                        {
                            name: 'Stages',
                            icon: 'list-outline',
                        },
                        {
                            name: 'Assets',
                            icon: 'hardware-chip-outline',
                        },
                        {
                            name: 'Logs',
                            icon: 'document-text-outline',
                        },
                        {
                            name: 'Trends',
                            icon: 'trending-up-outline',
                        },
                    ].map((tab) => (

                        <TouchableOpacity
                            key={tab.name}
                            style={styles.tab}
                            onPress={() => setActiveTab(tab.name)}
                        >

                            <Ionicons
                                name={tab.icon as any}
                                size={18}
                                color={
                                    activeTab === tab.name
                                        ? '#1769AA'
                                        : '#6B7280'
                                }
                            />

                            <Text
                                style={[
                                    styles.tabText,
                                    activeTab === tab.name &&
                                    styles.activeTabText,
                                ]}
                            >
                                {tab.name}
                            </Text>

                            {activeTab === tab.name && (
                                <View style={styles.activeLine} />
                            )}

                        </TouchableOpacity>

                    ))}

                </View>

                {/* ================================================= */}
                {/* ================= OVERVIEW ====================== */}
                {/* ================================================= */}

                {activeTab === 'Overview' && (
                    <>

                        {/* MIXING TANK CARD */}
                        <View style={styles.mainCard}>

                            <View style={styles.tankSection}>

                                {/* Tank illustration */}
                                {/* Tank illustration */}
                                <View style={styles.tankWrapper}>
                                    <Image
                                        source={require('@/assets/images/mixingtank.png')}
                                        style={styles.tankImage}
                                        resizeMode="contain"
                                    />
                                </View>
                                {/* Tank Information */}
                                <View style={styles.tankInfo}>

                                    <View style={styles.infoHeader}>
                                        <Text style={styles.tankTitle}>
                                            Mixing Tank
                                        </Text>
                                    </View>

                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>
                                            Mode
                                        </Text>

                                        <Text style={styles.infoValue}>
                                            Automatic
                                        </Text>
                                    </View>

                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>
                                            Current Stage
                                        </Text>

                                        <Text style={styles.infoValue}>
                                            Stage 1
                                        </Text>
                                    </View>

                                    <View style={styles.progressHeader}>
                                        <Text style={styles.infoLabel}>
                                            Stage Progress
                                        </Text>

                                        <Text style={styles.infoValue}>
                                            45%
                                        </Text>
                                    </View>

                                    <View style={styles.progressBar}>
                                        <View
                                            style={[
                                                styles.progressFill,
                                                { width: '45%' },
                                            ]}
                                        />
                                    </View>

                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>
                                            Elapsed Time
                                        </Text>

                                        <Text style={styles.infoValue}>
                                            05:24 / 12:00
                                        </Text>
                                    </View>

                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>
                                            Next Stage
                                        </Text>

                                        <Text style={styles.infoValue}>
                                            Stage 2 (Flocculant Entry)
                                        </Text>
                                    </View>

                                    <View style={styles.normalSystemRow}>

                                        <View style={styles.checkCircle}>
                                            <Ionicons
                                                name="checkmark"
                                                size={10}
                                                color="#FFFFFF"
                                            />
                                        </View>

                                        <Text style={styles.allSystemsText}>
                                            All Systems Normal
                                        </Text>

                                    </View>

                                </View>

                            </View>

                        </View>

                        {/* ================= STAGE CONTROL ================= */}

                        <View style={styles.sectionHeader}>
                            <View style={styles.blueCircle} />
                            <Text style={styles.sectionHeaderText}>
                                STAGE CONTROL
                            </Text>
                        </View>

                        {/* STAGE 1 */}
                        <View style={styles.stageContainer}>

                            <View style={styles.stageLeft}>

                                <View style={styles.stageNumberActive}>
                                    <Text style={styles.stageNumberText}>
                                        1
                                    </Text>
                                </View>

                                <View>
                                    <Text style={styles.stageTitle}>
                                        Stage 1
                                    </Text>

                                    <Text style={styles.stageSubtitle}>
                                        After Coagulant Entry
                                    </Text>

                                    <View style={styles.runningBadge}>
                                        <View style={styles.badgeDot} />

                                        <Text style={styles.runningText}>
                                            RUNNING
                                        </Text>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.stageDetails}>

                                {/* Motor */}
                                <View style={styles.motorDetails}>

                                    <Text style={styles.motorTitle}>
                                        Motor
                                    </Text>

                                    <Text style={styles.motorSubtitle}>
                                        Stepper/Cylinder 1
                                    </Text>

                                    <Text style={styles.presetLabel}>
                                        Preset Time
                                    </Text>

                                    <Text style={styles.presetTime}>
                                        12 min
                                    </Text>

                                    <Text style={styles.remainingLabel}>
                                        Remaining Time
                                    </Text>

                                    <Text style={styles.remainingTime}>
                                        06:36
                                    </Text>

                                </View>

                                {/* Timing */}
                                <View style={styles.timingBox}>

                                    <Text style={styles.timingTitle}>
                                        Timing (Editable)
                                    </Text>

                                    <Text style={styles.timeLabel}>
                                        Start Time
                                    </Text>

                                    <View style={styles.timeInput}>
                                        <Text style={styles.timeText}>
                                            09:30 AM
                                        </Text>

                                        <Ionicons
                                            name="time-outline"
                                            size={15}
                                            color="#6B7280"
                                        />
                                    </View>

                                    <Text style={styles.timeLabel}>
                                        Off Time
                                    </Text>

                                    <View style={styles.timeInput}>
                                        <Text style={styles.timeText}>
                                            09:42 AM
                                        </Text>

                                        <Ionicons
                                            name="time-outline"
                                            size={15}
                                            color="#6B7280"
                                        />
                                    </View>

                                    <Text style={styles.durationText}>
                                        Duration: 12 min
                                    </Text>

                                </View>

                            </View>

                        </View>

                        {/* STAGE 2 */}
                        <View style={styles.stageContainer}>

                            <View style={styles.stageLeft}>

                                <View style={styles.stageNumberPending}>
                                    <Text style={styles.stageNumberPendingText}>
                                        2
                                    </Text>
                                </View>

                                <View>
                                    <Text style={styles.stageTitle}>
                                        Stage 2
                                    </Text>

                                    <Text style={styles.stageSubtitle}>
                                        After Flocculant Entry
                                    </Text>

                                    <View style={styles.pendingBadge}>

                                        <Ionicons
                                            name="hourglass-outline"
                                            size={11}
                                            color="#6B7280"
                                        />

                                        <Text style={styles.pendingText}>
                                            PENDING
                                        </Text>

                                    </View>
                                </View>

                            </View>

                            <View style={styles.stageDetails}>

                                {/* Motor */}
                                <View style={styles.motorDetails}>
                                    <Text style={styles.motorTitle}>
                                        Motor
                                    </Text>

                                    <Text style={styles.motorSubtitle}>
                                        Stepper/Cylinder 1
                                    </Text>

                                    <Text style={styles.presetLabel}>
                                        Preset Time
                                    </Text>

                                    <Text style={styles.presetTime}>
                                        45 min
                                    </Text>

                                    <Text style={styles.startAfterText}>
                                        Start After
                                    </Text>

                                    <Text style={styles.startAfterValue}>
                                        Stage 1 Complete
                                    </Text>

                                </View>

                                {/* Timing */}
                                <View style={styles.timingBox}>

                                    <Text style={styles.timingTitle}>
                                        Timing (Editable)
                                    </Text>

                                    <Text style={styles.timeLabel}>
                                        Start Time
                                    </Text>

                                    <View style={styles.timeInput}>
                                        <Text style={styles.timeText}>
                                            09:42 AM
                                        </Text>

                                        <Ionicons
                                            name="time-outline"
                                            size={15}
                                            color="#6B7280"
                                        />
                                    </View>

                                    <Text style={styles.timeLabel}>
                                        Off Time
                                    </Text>

                                    <View style={styles.timeInput}>
                                        <Text style={styles.timeText}>
                                            10:27 AM
                                        </Text>

                                        <Ionicons
                                            name="time-outline"
                                            size={15}
                                            color="#6B7280"
                                        />
                                    </View>

                                    <Text style={styles.durationText}>
                                        Duration: 45 min
                                    </Text>

                                </View>

                            </View>

                        </View>

                        {/* ================= MOTOR STATUS ================= */}

                        <View style={styles.motorStatusCard}>

  {/* Motor Image + ON */}
  <View style={styles.motorColumn}>

    <Image
      source={require('@/assets/images/motor.png')}
      style={styles.motorImage}
      resizeMode="contain"
    />

    <View style={styles.onRow}>
      <View style={styles.motorOnDot} />
      <Text style={styles.onText}>ON</Text>
    </View>

  </View>

  {/* Asset */}
  <View style={styles.assetColumn}>
    <Text style={styles.assetHeader}>
      Asset
    </Text>

    <Text style={styles.assetValue}>
      Stepper/Cylinder 1
    </Text>
  </View>

  {/* Status */}
  <View style={styles.statusColumn}>
    <Text style={styles.assetHeader}>
      Status
    </Text>

    <Text style={styles.runningValue}>
      Running
    </Text>
  </View>

  {/* Last Started */}
  <View style={styles.lastStartedColumn}>
    <Text style={styles.assetHeader}>
      Last Started
    </Text>

    <Text style={styles.assetValue}>
      09:30 AM
    </Text>
  </View>

  {/* Total Run Time */}
  <View style={styles.totalColumn}>
    <Text style={styles.assetHeader}>
      Total Run Time
    </Text>

    <Text style={styles.assetValue}>
      05:24
    </Text>
  </View>

</View>
                        {/* ================= TIME RECORD ================= */}

                        <View style={styles.timeRecordHeader}>

                            <Text style={styles.timeRecordTitle}>
                                TIME RECORD
                            </Text>

                            <Text style={styles.autoRecorded}>
                                (Auto Recorded)
                            </Text>

                            <TouchableOpacity style={styles.historyButton}>
                                <Text style={styles.historyText}>
                                    VIEW HISTORY
                                </Text>

                                <Ionicons
                                    name="chevron-forward"
                                    size={15}
                                    color="#1769AA"
                                />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.tableCard}>

                            {/* Table Header */}
                            <View style={styles.tableHeader}>

                                <Text style={styles.tableHeaderText}>
                                    Stage
                                </Text>

                                <Text style={styles.tableHeaderText}>
                                    Start Time
                                </Text>

                                <Text style={styles.tableHeaderText}>
                                    Off Time
                                </Text>

                                <Text style={styles.tableHeaderText}>
                                    Duration
                                </Text>

                                <Text style={styles.tableHeaderText}>
                                    Date
                                </Text>

                            </View>

                            {/* Row 1 */}
                            <View style={styles.tableRow}>

                                <Text style={styles.tableText}>
                                    Stage 1 (Coagulant)
                                </Text>

                                <Text style={styles.tableText}>
                                    09:18 AM
                                </Text>

                                <Text style={styles.tableText}>
                                    09:30 AM
                                </Text>

                                <Text style={styles.tableText}>
                                    12 min
                                </Text>

                                <Text style={styles.tableText}>
                                    14 May 2025
                                </Text>

                            </View>

                            {/* Row 2 */}
                            <View style={styles.tableRow}>

                                <Text style={styles.tableText}>
                                    Stage 2 (Flocculant)
                                </Text>

                                <Text style={styles.tableText}>
                                    09:30 AM
                                </Text>

                                <Text style={styles.tableText}>
                                    10:15 AM
                                </Text>

                                <Text style={styles.tableText}>
                                    45 min
                                </Text>

                                <Text style={styles.tableText}>
                                    14 May 2025
                                </Text>

                            </View>

                        </View>

                    </>
                )}

                {/* ================= STAGES TAB ================= */}

                {activeTab === 'Stages' && (
                    <View style={styles.tabPage}>

                        <Text style={styles.tabPageTitle}>
                            Stage Control
                        </Text>

                        <Text style={styles.tabPageDescription}>
                            View and manage the mixing tank process stages.
                        </Text>

                    </View>
                )}

                {/* ================= ASSETS TAB ================= */}

                {activeTab === 'Assets' && (
                    <View style={styles.tabPage}>

                        <Text style={styles.tabPageTitle}>
                            Assets
                        </Text>

                        <View style={styles.assetTabCard}>

                            <MaterialCommunityIcons
                                name="engine-outline"
                                size={30}
                                color="#1769AA"
                            />

                            <View>
                                <Text style={styles.assetTabTitle}>
                                    Stepper/Cylinder 1
                                </Text>

                                <Text style={styles.runningValue}>
                                    Running
                                </Text>
                            </View>

                        </View>

                    </View>
                )}

                {/* ================= LOGS TAB ================= */}

                {activeTab === 'Logs' && (
                    <View style={styles.tabPage}>

                        <Text style={styles.tabPageTitle}>
                            Logs
                        </Text>

                        <Text style={styles.tabPageDescription}>
                            No new logs available.
                        </Text>

                    </View>
                )}

                {/* ================= TRENDS TAB ================= */}

                {activeTab === 'Trends' && (
                    <View style={styles.tabPage}>

                        <Text style={styles.tabPageTitle}>
                            Trends
                        </Text>

                        <View style={styles.trendPlaceholder}>
                            <Ionicons
                                name="trending-up-outline"
                                size={40}
                                color="#1769AA"
                            />

                            <Text style={styles.tabPageDescription}>
                                Process trend data will appear here.
                            </Text>
                        </View>

                    </View>
                )}

            </ScrollView>

            {/* ================= BOTTOM BUTTONS ================= */}

            <View style={styles.bottomButtons}>

                <TouchableOpacity
                    style={styles.manualButton}
                    onPress={() => router.push('/mixingtank/manual')}
                >

                    <Ionicons
                        name="sync-outline"
                        size={17}
                        color="#1769AA"
                    />

                    <Text style={styles.manualButtonText}>
                        Manual Mode
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.stopButton}>

                    <Ionicons
                        name="stop-circle"
                        size={17}
                        color="#FFFFFF"
                    />

                    <Text style={styles.stopButtonText}>
                        Stop Process
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.saveButton}>

                    <Ionicons
                        name="save-outline"
                        size={17}
                        color="#FFFFFF"
                    />

                    <Text style={styles.saveButtonText}>
                        Save Changes
                    </Text>

                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
    },

    scrollContent: {
        paddingBottom: 15,
    },

    /* ================= HEADER ================= */

    header: {
    height: 120,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
},

    headerButton: {
        width: 40,
    },

    headerTitleContainer: {
        flex: 1,
    },

    headerTitle: {
        fontSize: 17,
        fontWeight: '700',
        color: '#111827',
    },

    subtitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },

    headerSubtitle: {
        fontSize: 11,
        color: '#6B7280',
    },

    greenSmallDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#10B981',
        marginLeft: 6,
    },

    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },

    notificationButton: {
        position: 'relative',
    },

    notificationBadge: {
        position: 'absolute',
        right: -5,
        top: -6,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#D93A2B',
        alignItems: 'center',
        justifyContent: 'center',
    },

    notificationText: {
        color: '#FFFFFF',
        fontSize: 9,
        fontWeight: '700',
    },

    /* ================= STATUS ================= */

    statusRowTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
    },

    automaticBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E8F6EC',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 15,
    },

    automaticText: {
        fontSize: 10,
        fontWeight: '700',
        color: '#166534',
        marginLeft: 5,
    },

    systemStatus: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 7,
        elevation: 1,
    },

    statusGreenDot: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: '#4CAF50',
        marginRight: 6,
    },

    systemStatusLabel: {
        fontSize: 9,
        color: '#6B7280',
        marginRight: 8,
    },

    normalText: {
        fontSize: 9,
        color: '#16A34A',
        fontWeight: '700',
    },

    /* ================= TABS ================= */

    tabs: {
        height: 57,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 8,
        marginHorizontal: 8,
        elevation: 1,
    },

    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    tabText: {
        fontSize: 9,
        color: '#6B7280',
        marginTop: 3,
    },

    activeTabText: {
        color: '#1769AA',
        fontWeight: '700',
    },

    activeLine: {
        position: 'absolute',
        bottom: 0,
        height: 2,
        width: '65%',
        backgroundColor: '#1769AA',
    },

    /* ================= MAIN CARD ================= */

    mainCard: {
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 10,
        borderRadius: 8,
        elevation: 2,
    },

    tankSection: {
        flexDirection: 'row',
    },

    tankWrapper: {
        width: 105,
        height: 145,
        alignItems: 'center',
        justifyContent: 'center',
    },

    tankImage: {
        width: 100,
        height: 140,
    },

    tankInfo: {
        flex: 1,
        paddingLeft: 8,
    },

    infoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    tankTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#111827',
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },

    infoLabel: {
        fontSize: 9,
        color: '#6B7280',
    },

    infoValue: {
        fontSize: 9,
        color: '#374151',
        fontWeight: '600',
        maxWidth: '65%',
        textAlign: 'right',
    },

    greenValue: {
        fontSize: 9,
        color: '#16A34A',
        fontWeight: '700',
    },

    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },

    progressBar: {
        height: 5,
        backgroundColor: '#E5E7EB',
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 3,
    },

    progressFill: {
        height: '100%',
        backgroundColor: '#1769AA',
        borderRadius: 5,
    },

    normalSystemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
    },

    checkCircle: {
        width: 13,
        height: 13,
        borderRadius: 7,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center',
    },

    allSystemsText: {
        fontSize: 9,
        color: '#16A34A',
        fontWeight: '600',
        marginLeft: 5,
    },

    /* ================= SECTION ================= */

    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 12,
        marginTop: 5,
        marginBottom: 5,
    },

    blueCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#1769AA',
        marginRight: 3,
    },

    sectionHeaderText: {
        fontSize: 10,
        color: '#1769AA',
        fontWeight: '700',
    },

    /* ================= STAGES ================= */

    stageContainer: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        marginBottom: 8,
        padding: 8,
        borderRadius: 8,
        elevation: 1,
    },

    stageLeft: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 7,
    },

    stageNumberActive: {
        width: 23,
        height: 23,
        borderRadius: 12,
        backgroundColor: '#1769AA',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },

    stageNumberText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '700',
    },

    stageNumberPending: {
        width: 23,
        height: 23,
        borderRadius: 12,
        backgroundColor: '#6B7280',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },

    stageNumberPendingText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '700',
    },

    stageTitle: {
        fontSize: 11,
        fontWeight: '700',
        color: '#374151',
    },

    stageSubtitle: {
        fontSize: 8,
        color: '#6B7280',
        marginTop: 2,
    },

    runningBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EAF8EF',
        paddingHorizontal: 7,
        paddingVertical: 4,
        borderRadius: 10,
        alignSelf: 'flex-start',
        marginTop: 5,
    },

    badgeDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#16A34A',
        marginRight: 4,
    },

    runningText: {
        fontSize: 7,
        color: '#16A34A',
        fontWeight: '700',
    },

    pendingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        paddingHorizontal: 7,
        paddingVertical: 4,
        borderRadius: 10,
        alignSelf: 'flex-start',
        marginTop: 5,
    },

    pendingText: {
        fontSize: 7,
        color: '#6B7280',
        fontWeight: '700',
        marginLeft: 3,
    },

    stageDetails: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
        paddingTop: 7,
    },

    motorDetails: {
        flex: 1,
        paddingLeft: 8,
    },

    motorTitle: {
        fontSize: 8,
        fontWeight: '700',
        color: '#374151',
        marginTop: 2,
    },

    motorSubtitle: {
        fontSize: 7,
        color: '#6B7280',
        marginTop: 2,
    },

    presetLabel: {
        fontSize: 7,
        color: '#6B7280',
        marginTop: 8,
    },

    presetTime: {
        fontSize: 9,
        color: '#1769AA',
        fontWeight: '700',
        marginTop: 2,
    },

    remainingLabel: {
        fontSize: 7,
        color: '#6B7280',
        marginTop: 6,
    },

    remainingTime: {
        fontSize: 9,
        color: '#1769AA',
        fontWeight: '700',
        marginTop: 2,
    },

    startAfterText: {
        fontSize: 7,
        color: '#6B7280',
        marginTop: 8,
    },

    startAfterValue: {
        fontSize: 8,
        color: '#374151',
        fontWeight: '600',
        marginTop: 2,
    },

    timingBox: {
        width: '48%',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 6,
        padding: 7,
    },

    timingTitle: {
        fontSize: 8,
        fontWeight: '700',
        color: '#374151',
        marginBottom: 5,
    },

    timeLabel: {
        fontSize: 7,
        color: '#6B7280',
        marginTop: 3,
        marginBottom: 2,
    },

    timeInput: {
        height: 27,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 7,
    },

    timeText: {
        fontSize: 8,
        color: '#374151',
    },

    durationText: {
        fontSize: 7,
        color: '#9CA3AF',
        textAlign: 'right',
        marginTop: 3,
    },

    /* ================= MOTOR STATUS ================= */

    motorStatusCard: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
    },

    /* Motor image + ON */
    motorColumn: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    motorImage: {
        width: 30,
        height: 30,
    },

    onRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },

    motorOnDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#22C55E',
        marginRight: 3,
    },

    onText: {
        fontSize: 7,
        color: '#16A34A',
        fontWeight: '700',
    },

    assetColumn: {
        flex: 1.3,
        paddingLeft: 8,
    },

    statusColumn: {
        flex: 0.9,
    },

    lastStartedColumn: {
        flex: 1,
    },

    totalColumn: {
        flex: 1,
    },

    assetHeader: {
        fontSize: 7,
        color: '#9CA3AF',
    },

    assetValue: {
        fontSize: 8,
        color: '#374151',
        fontWeight: '600',
        marginTop: 3,
    },

    runningValue: {
        fontSize: 8,
        color: '#16A34A',
        fontWeight: '700',
        marginTop: 3,
    },

    /* ================= TIME RECORD ================= */

    timeRecordHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 12,
        marginTop: 12,
        marginBottom: 5,
    },

    timeRecordTitle: {
        fontSize: 9,
        color: '#1769AA',
        fontWeight: '700',
    },

    autoRecorded: {
        fontSize: 8,
        color: '#1769AA',
        marginLeft: 3,
    },

    historyButton: {
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
    },

    historyText: {
        fontSize: 8,
        color: '#1769AA',
        fontWeight: '600',
    },

    tableCard: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        borderRadius: 7,
        overflow: 'hidden',
        elevation: 1,
    },

    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#F9FAFB',
        paddingVertical: 7,
        paddingHorizontal: 5,
    },

    tableHeaderText: {
        flex: 1,
        fontSize: 6,
        color: '#6B7280',
        fontWeight: '700',
    },

    tableRow: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
    },

    tableText: {
        flex: 1,
        fontSize: 6,
        color: '#374151',
    },

    /* ================= BOTTOM ================= */

    bottomButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },

    manualButton: {
        flex: 1,
        height: 38,
        borderWidth: 1,
        borderColor: '#1769AA',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    manualButtonText: {
        fontSize: 9,
        color: '#1769AA',
        fontWeight: '600',
        marginLeft: 4,
    },

    stopButton: {
        flex: 1,
        height: 38,
        backgroundColor: '#D92D20',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    stopButtonText: {
        fontSize: 9,
        color: '#FFFFFF',
        fontWeight: '600',
        marginLeft: 4,
    },

    saveButton: {
        flex: 1,
        height: 38,
        backgroundColor: '#1769AA',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    saveButtonText: {
        fontSize: 9,
        color: '#FFFFFF',
        fontWeight: '600',
        marginLeft: 4,
    },

    /* ================= OTHER TABS ================= */

    tabPage: {
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 20,
        borderRadius: 8,
    },

    tabPageTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 8,
    },

    tabPageDescription: {
        fontSize: 11,
        color: '#6B7280',
    },

    assetTabCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#F9FAFB',
        borderRadius: 8,
    },

    assetTabTitle: {
        fontSize: 12,
        fontWeight: '700',
        marginLeft: 12,
    },

    trendPlaceholder: {
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },

});