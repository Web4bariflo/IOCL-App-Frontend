import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logoutUser } from '../../api/authApi';

export default function DashboardScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSystem, setExpandedSystem] = useState<string | null>(null);
  const [expandedSubSystem, setExpandedSubSystem] = useState<string | null>(null);

  const [showCoagulantDropdown, setShowCoagulantDropdown] = useState(false);
  const [showMixingDropdown, setShowMixingDropdown] = useState(false);
  const [showFlocculationDropdown, setShowFlocculationDropdown] =
    useState(false);
  const [showDesludgingDropdown, setShowDesludgingDropdown] =
    useState(false);

  const [systemRunning, setSystemRunning] = useState(false);
  const [valvesActive, setValvesActive] = useState(false);
  const [pumpActive, setPumpActive] = useState(false);
  const [contactorsActive, setContactorsActive] = useState(false);

  useEffect(() => {
    if (params.menu === 'open') {
      setIsMenuOpen(true);
    }
  }, [params.menu]);

  const handleLogout = async () => {
    try {
      await logoutUser();

      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('refreshToken');

      router.replace('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // =========================================================
  // SYSTEM CLICK
  // =========================================================

  const handleSystemPress = (systemName: string) => {
    if (expandedSystem === systemName) {
      // Close current system
      setExpandedSystem(null);
      setExpandedSubSystem(null);
    } else {
      // Open selected system
      setExpandedSystem(systemName);
      setExpandedSubSystem(null);
    }
  };

  // =========================================================
  // SUB SYSTEM CLICK
  // =========================================================

  const handleSubSystemPress = (subSystemName: string) => {
    if (expandedSubSystem === subSystemName) {
      setExpandedSubSystem(null);
    } else {
      setExpandedSubSystem(subSystemName);
    }
  };

  // =========================================================
  // SETTINGS CLICK
  // =========================================================

  const handleSettingsPress = (settingName: string) => {
    setIsMenuOpen(false);
    setExpandedSystem(null);
    setExpandedSubSystem(null);

    switch (settingName) {
      // -----------------------------------------------------
      // INLET SYSTEM
      // -----------------------------------------------------
      case 'Inlet System':
        router.push('/(tabs)/settings');
        break;

      // -----------------------------------------------------
      // COAGULANT DOSING
      // -----------------------------------------------------
      case 'Coagulant Dosing':
        router.push('/coagulant/dosing/settings');
        break;

      // -----------------------------------------------------
      // COAGULANT MIXING
      // -----------------------------------------------------
      case 'Coagulant Mixing':
        router.push('/coagulant/mixing/settings');
        break;

      // -----------------------------------------------------
      // MIXING TANK SYSTEM
      // -----------------------------------------------------
      case 'Mixing Tank System':
        router.push('/mixingtank/settings');
        break;

      // -----------------------------------------------------
      // FLOCULATION DOSING
      // -----------------------------------------------------
      case 'Flocculation Dosing':
        // router.push('/flocculation/dosing/setting');
        break;

      // -----------------------------------------------------
      // FLOCULATION MIXING
      // -----------------------------------------------------
      case 'Flocculation Mixing':
        // router.push('/flocculation/mixing/setting');
        break;

      // -----------------------------------------------------
      // DESLUDGING SYSTEM
      // -----------------------------------------------------
      case 'Desludging System':
        // router.push('/settings/desludging');
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>

      {/* ================= HEADER ================= */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setIsMenuOpen(true)}
          style={styles.headerButton}
        >
          <MaterialCommunityIcons
            name="menu"
            size={28}
            color="#111827"
          />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Inlet / Sensors</Text>
          <Text style={styles.headerSubtitle}>Automatic Mode</Text>
        </View>

        <View style={styles.offlineBadge}>
          <Text style={styles.offlineText}>Offline</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* ================= SYSTEM OVERVIEW ================= */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>System Overview</Text>

          <TouchableOpacity
            style={[
              styles.startButton,
              systemRunning && styles.startButtonRunning,
            ]}
            onPress={() => setSystemRunning(true)}
          >
            <MaterialCommunityIcons
              name="power"
              size={25}
              color="#FFFFFF"
            />

            <Text style={styles.startButtonText}>
              {systemRunning ? 'SYSTEM RUNNING' : 'START SYSTEM'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.stopButton}
            onPress={() => setSystemRunning(false)}
          >
            <MaterialCommunityIcons
              name="stop"
              size={20}
              color="#DC2626"
            />

            <Text style={styles.stopButtonText}>STOP</Text>
          </TouchableOpacity>
        </View>

        {/* ================= SOLENOID VALVES ================= */}
        <View style={styles.card}>
          <View style={styles.deviceHeader}>
            <View style={styles.deviceIconBox}>
              <Image
                source={require('@/assets/images/solenoid.png')}
                style={styles.deviceImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.deviceTitleContainer}>
              <Text style={styles.deviceTitle}>Solenoid Valves</Text>
              <Text style={styles.deviceSubtitle}>2 Valves</Text>
            </View>

            <View style={styles.segmentContainer}>
              <TouchableOpacity
                style={[
                  styles.segmentActive,
                  valvesActive && styles.segmentSelected,
                ]}
                onPress={() => setValvesActive(true)}
              >
                <Text
                  style={[
                    styles.segmentActiveText,
                    !valvesActive && styles.segmentNormalText,
                  ]}
                >
                  ACTIVE
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.segmentInactive,
                  !valvesActive && styles.segmentSelectedInactive,
                ]}
                onPress={() => setValvesActive(false)}
              >
                <Text style={styles.segmentInactiveText}>DEACTIVE</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.divider} />

          <StatusRow
            label="Valve 1"
            status={valvesActive ? 'Open' : 'Closed'}
            active={valvesActive}
          />

          <StatusRow
            label="Valve 2"
            status={valvesActive ? 'Open' : 'Closed'}
            active={valvesActive}
          />
        </View>

        {/* ================= INLET PUMP ================= */}
        <View style={styles.card}>
          <View style={styles.deviceHeader}>
            <View style={styles.deviceIconBox}>
              <Image
                source={require('@/assets/images/inletpump.png')}
                style={styles.deviceImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.deviceTitleContainer}>
              <Text style={styles.deviceTitle}>Inlet Pump 1</Text>
              <Text style={styles.deviceSubtitle}>
                {pumpActive ? 'Running' : 'Disabled'}
              </Text>
            </View>

            <View style={styles.segmentContainer}>
              <TouchableOpacity
                style={[
                  styles.segmentActive,
                  pumpActive && styles.segmentSelected,
                ]}
                onPress={() => setPumpActive(true)}
              >
                <Text
                  style={[
                    styles.segmentActiveText,
                    !pumpActive && styles.segmentNormalText,
                  ]}
                >
                  ACTIVE
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.segmentInactive,
                  !pumpActive && styles.segmentSelectedInactive,
                ]}
                onPress={() => setPumpActive(false)}
              >
                <Text style={styles.segmentInactiveText}>DEACTIVE</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.pumpStatusRow}>
            <View>
              <Text style={styles.smallLabel}>Status</Text>
              <Text
                style={[
                  styles.statusValue,
                  { color: pumpActive ? '#16A34A' : '#6B7280' },
                ]}
              >
                {pumpActive ? 'Running' : 'Disabled'}
              </Text>
            </View>

            <View>
              <Text style={styles.smallLabel}>Since</Text>
              <Text style={styles.timeText}>08:15 AM</Text>
            </View>
          </View>
        </View>

        {/* ================= CONTACTOR SENSORS ================= */}
        <View style={styles.card}>
          <View style={styles.deviceHeader}>
            <View style={styles.deviceIconBox}>
              <MaterialCommunityIcons
                name="arrow-up-down"
                size={28}
                color="#1261A0"
              />
            </View>

            <View style={styles.deviceTitleContainer}>
              <Text style={styles.deviceTitle}>Contactor Sensors</Text>
              <Text style={styles.deviceSubtitle}>2 Sensors</Text>
            </View>

            <View style={styles.segmentContainer}>
              <TouchableOpacity
                style={[
                  styles.segmentActive,
                  contactorsActive && styles.segmentSelected,
                ]}
                onPress={() => setContactorsActive(true)}
              >
                <Text
                  style={[
                    styles.segmentActiveText,
                    !contactorsActive && styles.segmentNormalText,
                  ]}
                >
                  ACTIVE
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.segmentInactive,
                  !contactorsActive && styles.segmentSelectedInactive,
                ]}
                onPress={() => setContactorsActive(false)}
              >
                <Text style={styles.segmentInactiveText}>DEACTIVE</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.divider} />

          <StatusRow
            label="Contactor 1"
            status={contactorsActive ? 'Active' : 'Inactive'}
            active={contactorsActive}
          />

          <StatusRow
            label="Contactor 2"
            status={contactorsActive ? 'Active' : 'Inactive'}
            active={contactorsActive}
          />
        </View>

        {/* ================= AUTOMATIC PROCESS ================= */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Automatic Process</Text>

          <ProcessRow
            number="01"
            icon="valve"
            title="Solenoid Valve"
            status="ON"
            active
          />

          <ProcessRow
            number="02"
            icon="pump"
            title="Inlet Pump"
            status="ON"
            active
          />

          <ProcessRow
            number="03"
            icon="access-point"
            title="Control Sensor"
            status="Detection ON"
            active
          />

          <ProcessRow
            number="04"
            icon="view-list"
            title="Contactor Sensor"
            status="Detection ON"
            active
          />

          <ProcessRow
            number="05"
            icon="pump"
            title="Inlet Pump 1"
            status="OFF"
            active={false}
            last
          />
        </View>

        {/* ================= TANK FILLING ================= */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Tank Filling</Text>

          <ProgressItem
            title="Wastewater Tank"
            value={65}
            progressColor="#2188E8"
          />

          <ProgressItem
            title="Normal Water Tank"
            value={42}
            progressColor="#18A6A6"
          />
        </View>

        {/* ================= LOG ================= */}
        <View style={styles.card}>
          <View style={styles.logHeader}>
            <View style={styles.logTitleContainer}>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={28}
                color="#2B8FA3"
              />

              <View>
                <Text style={styles.deviceTitle}>Log</Text>
                <Text style={styles.deviceSubtitle}>Recent Activity</Text>
              </View>
            </View>

            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All ›</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <LogRow time="9:15 AM" text="Inlet Pump 1 Started" />
          <LogRow time="9:12 AM" text="Valve 1 Opened" />
        </View>

      </ScrollView>

      {/* ================= SIDE DRAWER ================= */}
      <Modal
        visible={isMenuOpen}
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>

          <TouchableOpacity
            style={StyleSheet.absoluteFill}
            onPress={() => setIsMenuOpen(false)}
            activeOpacity={1}
          />

          <View style={styles.sideDrawer}>

            <View style={styles.drawerHeader}>
              <Text style={styles.drawerTitle}>Modules</Text>

              <TouchableOpacity
                onPress={() => setIsMenuOpen(false)}
              >
                <MaterialCommunityIcons
                  name="close"
                  size={24}
                  color="#6B7280"
                />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.drawerContent}>

              {[
                'Inlet System',
                'Coagulant System',
                'Mixing Tank System',
                'Flocculation System',
                'Desludging System',
              ].map((item, index) => (

                <View key={index}>

                  <TouchableOpacity
                    style={styles.drawerMenuItem}
                    onPress={() => {

                      // if (item === 'Coagulant System') {
                      //   setShowCoagulantDropdown(
                      //     !showCoagulantDropdown
                      //   );
                      //   setShowMixingDropdown(false);
                      //   setShowFlocculationDropdown(false);
                      //   setShowDesludgingDropdown(false);
                      // }

                      if (item === 'Coagulant System') {
                        setShowCoagulantDropdown(!showCoagulantDropdown);
                        setExpandedSubSystem(null);

                        setShowMixingDropdown(false);
                        setShowFlocculationDropdown(false);
                        setShowDesludgingDropdown(false);
                      }


                      else if (item === 'Mixing Tank System') {
                        handleSystemPress('Mixing Tank System');
                      }

                      else if (item === 'Flocculation System') {
                        setShowFlocculationDropdown(
                          !showFlocculationDropdown
                        );
                        setShowCoagulantDropdown(false);
                        setShowMixingDropdown(false);
                        setShowDesludgingDropdown(false);
                      }



                      else if (item === 'Desludging System') {
                        setShowDesludgingDropdown(
                          !showDesludgingDropdown
                        );
                        setShowCoagulantDropdown(false);
                        setShowMixingDropdown(false);
                        setShowFlocculationDropdown(false);
                      }

                      else if (item === 'Inlet System') {
                        handleSystemPress('Inlet System');
                      }

                    }}
                  >
                    <Text style={styles.drawerMenuText}>
                      {item}
                    </Text>

                    <MaterialCommunityIcons
                      name={
                        expandedSystem === item
                          ? 'chevron-up'
                          : 'chevron-down'
                      }
                      size={20}
                      color="#6B7280"
                    />
                  </TouchableOpacity>

                  {/* INLET SETTINGS */}
                  {item === 'Inlet System' &&
                    expandedSystem === 'Inlet System' && (
                      <TouchableOpacity
                        style={styles.settingsMenuItem}
                        onPress={() =>
                          handleSettingsPress('Inlet System')
                        }
                      >
                        <MaterialCommunityIcons
                          name="cog-outline"
                          size={21}
                          color="#159AA3"
                        />

                        <Text style={styles.settingsMenuText}>
                          Settings
                        </Text>
                      </TouchableOpacity>
                    )}

                  

                  {/* COAGULANT */}
                  {item === 'Coagulant System' &&
                    showCoagulantDropdown && (
                      <View style={styles.dropdownContainer}>

                        {/* COAGULANT DOSING */}
                        <TouchableOpacity
                          style={styles.subSystemMenuItem}
                          onPress={() =>
                            handleSubSystemPress('Coagulant Dosing')
                          }
                        >
                          <Text style={styles.subSystemMenuText}>
                            Coagulant Dosing
                          </Text>

                          <MaterialCommunityIcons
                            name={
                              expandedSubSystem === 'Coagulant Dosing'
                                ? 'chevron-up'
                                : 'chevron-down'
                            }
                            size={19}
                            color="#6B7280"
                          />
                        </TouchableOpacity>

                        {/* DOSING SETTINGS */}
                        {expandedSubSystem === 'Coagulant Dosing' && (
                          <TouchableOpacity
                            style={styles.settingsMenuItem}
                            onPress={() =>
                              handleSettingsPress('Coagulant Dosing')
                            }
                          >
                            <MaterialCommunityIcons
                              name="cog-outline"
                              size={21}
                              color="#159AA3"
                            />

                            <Text style={styles.settingsMenuText}>
                              Settings
                            </Text>
                          </TouchableOpacity>
                        )}

                        {/* COAGULANT MIXING */}
                        <TouchableOpacity
                          style={styles.subSystemMenuItem}
                          onPress={() =>
                            handleSubSystemPress('Coagulant Mixing')
                          }
                        >
                          <Text style={styles.subSystemMenuText}>
                            Coagulant Mixing
                          </Text>

                          <MaterialCommunityIcons
                            name={
                              expandedSubSystem === 'Coagulant Mixing'
                                ? 'chevron-up'
                                : 'chevron-down'
                            }
                            size={19}
                            color="#6B7280"
                          />
                        </TouchableOpacity>

                        {/* MIXING SETTINGS */}
                        {expandedSubSystem === 'Coagulant Mixing' && (
                          <TouchableOpacity
                            style={styles.settingsMenuItem}
                            onPress={() =>
                              handleSettingsPress('Coagulant Mixing')
                            }
                          >
                            <MaterialCommunityIcons
                              name="cog-outline"
                              size={21}
                              color="#159AA3"
                            />

                            <Text style={styles.settingsMenuText}>
                              Settings
                            </Text>
                          </TouchableOpacity>
                        )}

                      </View>
                    )}

                  {/* MIXING TANK SETTINGS */}
                  {item === 'Mixing Tank System' &&
                    expandedSystem === 'Mixing Tank System' && (
                      <TouchableOpacity
                        style={styles.settingsMenuItem}
                        onPress={() =>
                          handleSettingsPress('Mixing Tank System')
                        }
                      >
                        <MaterialCommunityIcons
                          name="cog-outline"
                          size={21}
                          color="#159AA3"
                        />

                        <Text style={styles.settingsMenuText}>
                          Settings
                        </Text>
                      </TouchableOpacity>
                    )}


                  {/* FLOCULATION */}
                  {item === 'Flocculation System' &&
                    showFlocculationDropdown && (
                      <View style={styles.dropdownContainer}>

                        <TouchableOpacity
                          style={styles.dropdownItem}
                          onPress={() => {
                            setIsMenuOpen(false);
                            router.push('/flocculation/manual');
                          }}
                        >
                          <Text style={styles.dropdownText}>
                            Manual Mode
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.dropdownItem}
                          onPress={() => {
                            setIsMenuOpen(false);
                            router.push('/flocculation/automatic');
                          }}
                        >
                          <Text style={styles.dropdownText}>
                            Automatic Mode
                          </Text>
                        </TouchableOpacity>

                      </View>
                    )}

                  {/* DESLUDGING */}
                  {item === 'Desludging System' &&
                    showDesludgingDropdown && (
                      <View style={styles.dropdownContainer}>

                        <TouchableOpacity
                          style={styles.dropdownItem}
                          onPress={() => {
                            setIsMenuOpen(false);
                            router.push('/desludging/manual');
                          }}
                        >
                          <Text style={styles.dropdownText}>
                            Manual Mode
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.dropdownItem}
                          onPress={() => {
                            setIsMenuOpen(false);
                            router.push('/desludging/automatic');
                          }}
                        >
                          <Text style={styles.dropdownText}>
                            Automatic Mode
                          </Text>
                        </TouchableOpacity>

                      </View>
                    )}

                </View>
              ))}

            </ScrollView>

            <View style={styles.drawerFooter}>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
              >
                <MaterialCommunityIcons
                  name="logout"
                  size={24}
                  color="#EF4444"
                />

                <Text style={styles.logoutText}>
                  Log Out
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

/* ========================================================= */
/* COMPONENTS */
/* ========================================================= */

function StatusRow({
  label,
  status,
  active,
}: {
  label: string;
  status: string;
  active: boolean;
}) {
  return (
    <View style={styles.statusRow}>
      <Text style={styles.rowLabel}>{label}</Text>

      <View style={styles.statusRight}>
        <Text
          style={[
            styles.statusText,
            { color: active ? '#16A34A' : '#6B7280' },
          ]}
        >
          {status}
        </Text>

        <View
          style={[
            styles.statusDot,
            {
              backgroundColor: active
                ? '#6B7280'
                : '#6B7280',
            },
          ]}
        />
      </View>
    </View>
  );
}

function ProcessRow({
  number,
  icon,
  title,
  status,
  active,
  last,
}: {
  number: string;
  icon: any;
  title: string;
  status: string;
  active: boolean;
  last?: boolean;
}) {
  return (
    <View style={styles.processRow}>

      <View
        style={[
          styles.processNumber,
          {
            borderColor: active ? '#20A464' : '#DC2626',
          },
        ]}
      >
        <Text
          style={[
            styles.processNumberText,
            {
              color: active ? '#20A464' : '#DC2626',
            },
          ]}
        >
          {number}
        </Text>
      </View>

      <View style={styles.processIcon}>
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color="#1261A0"
        />
      </View>

      <Text style={styles.processTitle}>{title}</Text>

      <View style={styles.processStatus}>
        <Text
          style={[
            styles.processStatusText,
            {
              color: active ? '#16A34A' : '#DC2626',
            },
          ]}
        >
          {status}
        </Text>

        <View
          style={[
            styles.processDot,
            {
              backgroundColor: active
                ? '#16A34A'
                : '#DC2626',
            },
          ]}
        />
      </View>
    </View>
  );
}

function ProgressItem({
  title,
  value,
  progressColor,
}: {
  title: string;
  value: number;
  progressColor: string;
}) {
  return (
    <View style={styles.progressItem}>

      <View style={styles.progressHeader}>
        <Text style={styles.progressTitle}>{title}</Text>

        <Text style={styles.progressPercentage}>
          {value}%
        </Text>
      </View>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${value}%`,
              backgroundColor: progressColor,
            },
          ]}
        />
      </View>

    </View>
  );
}

function LogRow({
  time,
  text,
}: {
  time: string;
  text: string;
}) {
  return (
    <TouchableOpacity style={styles.logRow}>

      <Text style={styles.logTime}>{time}</Text>

      <Text style={styles.logText}>{text}</Text>

      <MaterialCommunityIcons
        name="chevron-right"
        size={20}
        color="#6B7280"
      />

    </TouchableOpacity>
  );
}

function BottomNavItem({
  icon,
  label,
  active,
  onPress,
}: {
  icon: any;
  label: string;
  active?: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.bottomNavItem}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={active ? '#159AA3' : '#4B5563'}
      />

      <Text
        style={[
          styles.bottomNavText,
          {
            color: active ? '#159AA3' : '#4B5563',
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

/* ========================================================= */
/* STYLES */
/* ========================================================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },

  header: {
    height: 78,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  headerButton: {
    width: 40,
    alignItems: 'flex-start',
  },

  headerCenter: {
    alignItems: 'center',
    flex: 1,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },

  headerSubtitle: {
    fontSize: 13,
    color: '#159AA3',
    fontWeight: '600',
    marginTop: 2,
  },

  offlineBadge: {
    backgroundColor: '#737373',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  offlineText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },

  scrollContent: {
    padding: 18,
    paddingBottom: 100,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#172033',
    marginBottom: 12,
  },

  startButton: {
    height: 42,
    backgroundColor: '#12A454',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  startButtonRunning: {
    backgroundColor: '#159A52',
  },

  startButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 10,
  },

  stopButton: {
    height: 42,
    marginTop: 12,
    borderWidth: 1.5,
    borderColor: '#D97777',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  stopButtonText: {
    color: '#DC2626',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 8,
  },

  deviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  deviceIconBox: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  deviceImage: {
    width: 34,
    height: 34,
  },

  deviceTitleContainer: {
    flex: 1,
  },

  deviceTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#172033',
  },

  deviceSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 3,
  },

  segmentContainer: {
    flexDirection: 'row',
    borderRadius: 7,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },

  segmentActive: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
  },

  segmentSelected: {
    backgroundColor: '#E9F8F2',
  },

  segmentInactive: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#D1D5DB',
  },

  segmentSelectedInactive: {
    backgroundColor: '#9CA3AF',
  },

  segmentActiveText: {
    color: '#159AA3',
    fontSize: 11,
    fontWeight: '700',
  },

  segmentNormalText: {
    color: '#6B7280',
  },

  segmentInactiveText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },

  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },

  rowLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#172033',
  },

  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusText: {
    fontSize: 13,
    fontWeight: '500',
  },

  statusDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginLeft: 8,
  },

  pumpStatusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  smallLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 5,
  },

  statusValue: {
    fontSize: 14,
    fontWeight: '700',
  },

  timeText: {
    fontSize: 14,
    color: '#172033',
    fontWeight: '600',
  },

  processRow: {
    minHeight: 47,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  processNumber: {
    width: 28,
    height: 28,
    borderWidth: 1.5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  processNumberText: {
    fontSize: 11,
    fontWeight: '700',
  },

  processIcon: {
    width: 35,
    alignItems: 'center',
  },

  processTitle: {
    flex: 1,
    fontSize: 13,
    color: '#374151',
    fontWeight: '500',
  },

  processStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  processStatusText: {
    fontSize: 12,
    fontWeight: '700',
  },

  processDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 7,
  },

  progressItem: {
    marginTop: 8,
    marginBottom: 12,
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },

  progressTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#374151',
  },

  progressPercentage: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '600',
  },

  progressBackground: {
    height: 7,
    backgroundColor: '#E5E7EB',
    borderRadius: 5,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 5,
  },

  logHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  viewAllText: {
    color: '#159AA3',
    fontSize: 13,
    fontWeight: '600',
  },

  logRow: {
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  logTime: {
    width: 65,
    fontSize: 11,
    color: '#374151',
  },

  logText: {
    flex: 1,
    fontSize: 12,
    color: '#374151',
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 5,
  },

  bottomNavItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 55,
  },

  bottomNavText: {
    fontSize: 10,
    marginTop: 3,
    fontWeight: '500',
  },

  /* ================= DRAWER ================= */

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
  },

  sideDrawer: {
    width: '75%',
    maxWidth: 320,
    height: '100%',
    backgroundColor: '#FFFFFF',
    elevation: 20,
  },

  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  drawerTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#111827',
  },

  drawerContent: {
    padding: 16,
  },

  drawerMenuItem: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  drawerMenuText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
  },

  dropdownContainer: {
    paddingLeft: 20,
    backgroundColor: '#F9FAFB',
  },

  dropdownItem: {
    paddingVertical: 13,
  },

  dropdownText: {
    fontSize: 14,
    color: '#4B5563',
  },

  drawerFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },

  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EF4444',
    marginLeft: 12,
  },

  settingsMenuItem: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    backgroundColor: '#F8FAFA',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  settingsMenuText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#159AA3',
    marginLeft: 12,
  },

  subSystemMenuItem: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  subSystemMenuText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },
});