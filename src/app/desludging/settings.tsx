import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Switch,
  useWindowDimensions,
  Image,
  ImageSourcePropType,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

/* ============================================================
   DEVICE IMAGES

   Current file:
   src/app/desludging/settings.tsx

   Images:
   assets/images/
============================================================ */

import solenoidImage from "../../../assets/images/solenoid.png";
import inletPumpImage from "../../../assets/images/inletpump.png";
import contactorImage from "../../../assets/images/contactor.png";
import blowerImage from "../../../assets/images/blower.png";
import motorImage from "../../../assets/images/motor.png";

/* ============================================================
   TYPES
============================================================ */

type Mode = "AUTO" | "MANUAL";

interface DeviceRowProps {
  image: ImageSourcePropType;
  title: string;
  subtitle?: string;
  imageSize: number;
  titleSize: number;
  subtitleSize?: number;
  rowHeight: number;
  onPress?: () => void;
}

interface BottomNavItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  active?: boolean;
  size: number;
  onPress?: () => void;
}

/* ============================================================
   SETTINGS SCREEN
============================================================ */

export default function Settings(): React.JSX.Element {
  const router = useRouter();

  const { width } = useWindowDimensions();

  /* ==========================================================
     MANUAL SELECTED BY DEFAULT
  ========================================================== */

  const [mode, setMode] = useState<Mode>("MANUAL");

  /* ==========================================================
     NOTIFICATIONS ENABLED BY DEFAULT
  ========================================================== */

  const [notifications, setNotifications] =
    useState<boolean>(true);

  /* ==========================================================
     RESPONSIVE SCALE
  ========================================================== */

  const scale = Math.min(width / 864, 1.15);

  const s = (value: number): number => {
    return Math.round(value * scale);
  };

  const horizontalPadding = Math.max(
    s(20),
    Math.min(s(40), width * 0.046)
  );

  const cardRadius = s(19);

  /* ==========================================================
     NAVIGATION
  ========================================================== */

  const openAuto = (): void => {
    setMode("AUTO");
    router.push("/desludging/auto");
  };

  const openSolenoid = (): void => {
    router.push("/desludging/solenoid");
  };

  const openInletPump = (): void => {
    router.push("/desludging/inletpump");
  };

  const openContactorSensors = (): void => {
    router.push("/desludging/contactorsensors");
  };

  const openBlower = (): void => {
    router.push("/desludging/blower");
  };

  const openMotor1 = (): void => {
    router.push("/desludging/motor1");
  };

  const openMotor2 = (): void => {
    router.push("/desludging/motor2");
  };

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["top", "left", "right"]}
    >
      <View style={styles.container}>

        {/* ==================================================
            HEADER
        ================================================== */}

        <View
          style={[
            styles.header,
            {
              height: s(70),
              paddingHorizontal:
                horizontalPadding / 2,
            },
          ]}
        >

          {/* BACK BUTTON */}

          <Pressable
            style={styles.backButton}
            onPress={() => {
              router.back();
            }}
            android_ripple={{
              color: "#E5E7EB",
            }}
          >
            <Ionicons
              name="arrow-back"
              size={s(29)}
              color="#0B1D3A"
            />
          </Pressable>

          {/* HEADER TITLE */}

          <Text
            style={[
              styles.headerTitle,
              {
                fontSize: s(29),
              },
            ]}
          >
            Settings
          </Text>

          {/* RIGHT SPACE */}

          <View
            style={styles.headerPlaceholder}
          />

        </View>


        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.contentContainer,
            {
              paddingHorizontal:
                horizontalPadding,

              paddingTop: s(35),

              paddingBottom: s(30),
            },
          ]}
          showsVerticalScrollIndicator={false}
          bounces
        >

          {/* ==================================================
              GENERAL
          ================================================== */}

          <Text
            style={[
              styles.sectionTitle,
              {
                fontSize: s(23),
                marginBottom: s(23),
              },
            ]}
          >
            GENERAL
          </Text>


          {/* ==================================================
              OPERATING MODE CARD
          ================================================== */}

          <View
            style={[
              styles.generalCard,
              {
                borderRadius: cardRadius,

                paddingHorizontal: s(30),

                paddingVertical: s(24),
              },
            ]}
          >

            {/* TEXT */}

            <View style={styles.generalText}>

              <Text
                style={[
                  styles.cardTitle,
                  {
                    fontSize: s(26),
                  },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit
              >
                Operating Mode
              </Text>

              <Text
                style={[
                  styles.description,
                  {
                    fontSize: s(19),
                    marginTop: s(8),
                  },
                ]}
                numberOfLines={2}
              >
                Select automatic or manual control
              </Text>

            </View>


            {/* ==================================================
                AUTO / MANUAL
            ================================================== */}

            <View
              style={[
                styles.modeSelector,
                {
                  height: s(74),

                  width:
                    width >= 600
                      ? s(300)
                      : Math.min(
                          s(300),
                          width * 0.39
                        ),

                  borderRadius: s(15),
                },
              ]}
            >

              {/* ==================================================
                  AUTO
              ================================================== */}

              <Pressable
                onPress={openAuto}
                style={[
                  styles.modeButton,

                  mode === "AUTO"
                    ? styles.activeMode
                    : styles.inactiveMode,
                ]}
              >

                <Text
                  style={[
                    styles.modeText,

                    {
                      fontSize: s(21),
                    },

                    mode === "AUTO"
                      ? styles.activeModeText
                      : styles.inactiveModeText,
                  ]}
                >
                  AUTO
                </Text>

              </Pressable>


              {/* ==================================================
                  MANUAL
              ================================================== */}

              <Pressable
                onPress={() => {
                  setMode("MANUAL");
                }}
                style={[
                  styles.modeButton,

                  mode === "MANUAL"
                    ? styles.activeMode
                    : styles.inactiveMode,
                ]}
              >

                <Text
                  style={[
                    styles.modeText,

                    {
                      fontSize: s(21),
                    },

                    mode === "MANUAL"
                      ? styles.activeModeText
                      : styles.inactiveModeText,
                  ]}
                >
                  MANUAL
                </Text>

              </Pressable>

            </View>

          </View>


          {/* ==================================================
              DEVICES
          ================================================== */}

          <Text
            style={[
              styles.sectionTitle,
              {
                fontSize: s(23),

                marginTop: s(42),

                marginBottom: s(23),
              },
            ]}
          >
            DEVICES
          </Text>


          {/* ==================================================
              DEVICES CARD
          ================================================== */}

          <View
            style={[
              styles.devicesCard,
              {
                borderRadius: cardRadius,
              },
            ]}
          >

            {/* ==================================================
                1. SOLENOID VALVES
            ================================================== */}

            <DeviceRow
              image={solenoidImage}
              title="Solenoid Valves"
              subtitle="2 Valves"
              imageSize={s(55)}
              titleSize={s(25)}
              subtitleSize={s(20)}
              rowHeight={s(130)}
              onPress={openSolenoid}
            />


            <View style={styles.divider} />


            {/* ==================================================
                2. INLET PUMP 1
            ================================================== */}

            <DeviceRow
              image={inletPumpImage}
              title="Inlet Pump 1"
              imageSize={s(55)}
              titleSize={s(25)}
              rowHeight={s(130)}
              onPress={openInletPump}
            />


            <View style={styles.divider} />


            {/* ==================================================
                3. CONTACTOR SENSORS
            ================================================== */}

            <DeviceRow
              image={contactorImage}
              title="Contactor Sensors"
              subtitle="2 Sensors"
              imageSize={s(55)}
              titleSize={s(25)}
              subtitleSize={s(20)}
              rowHeight={s(130)}
              onPress={openContactorSensors}
            />


            <View style={styles.divider} />


            {/* ==================================================
                4. BLOWER
            ================================================== */}

            <DeviceRow
              image={blowerImage}
              title="Blower"
              imageSize={s(55)}
              titleSize={s(25)}
              rowHeight={s(130)}
              onPress={openBlower}
            />


            <View style={styles.divider} />


            {/* ==================================================
                5. MOTOR 1
            ================================================== */}

            <DeviceRow
              image={motorImage}
              title="Motor 1"
              imageSize={s(55)}
              titleSize={s(25)}
              rowHeight={s(130)}
              onPress={openMotor1}
            />


            <View style={styles.divider} />


            {/* ==================================================
                6. MOTOR 2
            ================================================== */}

            <DeviceRow
              image={motorImage}
              title="Motor 2"
              imageSize={s(55)}
              titleSize={s(25)}
              rowHeight={s(130)}
              onPress={openMotor2}
            />

          </View>


          {/* ==================================================
              ALERTS & NOTIFICATIONS
          ================================================== */}

          <Text
            style={[
              styles.sectionTitle,
              {
                fontSize: s(23),

                marginTop: s(42),

                marginBottom: s(23),
              },
            ]}
          >
            ALERTS & NOTIFICATIONS
          </Text>


          {/* NOTIFICATION CARD */}

          <View
            style={[
              styles.notificationCard,
              {
                borderRadius: cardRadius,

                paddingHorizontal: s(30),

                paddingVertical: s(22),
              },
            ]}
          >

            <View
              style={styles.notificationText}
            >

              <Text
                style={[
                  styles.cardTitle,
                  {
                    fontSize: s(26),
                  },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit
              >
                Enable Notifications
              </Text>


              <Text
                style={[
                  styles.description,
                  {
                    fontSize: s(19),

                    marginTop: s(8),
                  },
                ]}
              >
                Receive alerts for status changes
              </Text>

            </View>


            {/* SWITCH */}

            <Switch
              value={notifications}
              onValueChange={
                setNotifications
              }
              trackColor={{
                false: "#D1D5DB",
                true: "#20B5AE",
              }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#D1D5DB"
              style={{
                transform: [
                  {
                    scaleX:
                      scale > 0.9
                        ? 1.15
                        : 1,
                  },
                  {
                    scaleY:
                      scale > 0.9
                        ? 1.15
                        : 1,
                  },
                ],
              }}
            />

          </View>


          {/* ==================================================
              ABOUT
          ================================================== */}

          <Text
            style={[
              styles.sectionTitle,
              {
                fontSize: s(23),

                marginTop: s(42),

                marginBottom: s(23),
              },
            ]}
          >
            ABOUT
          </Text>


          {/* ABOUT CARD */}

          <View
            style={[
              styles.aboutCard,
              {
                borderRadius: cardRadius,
              },
            ]}
          >

            {/* APP VERSION */}

            <View
              style={[
                styles.aboutRow,
                {
                  minHeight: s(88),

                  paddingHorizontal: s(30),
                },
              ]}
            >

              <Text
                style={[
                  styles.aboutLabel,
                  {
                    fontSize: s(23),
                  },
                ]}
              >
                App Version
              </Text>


              <Text
                style={[
                  styles.aboutValue,
                  {
                    fontSize: s(20),
                  },
                ]}
              >
                1.0.0
              </Text>

            </View>


            <View
              style={styles.divider}
            />


            {/* PLC / CONTROLLER */}

            <View
              style={[
                styles.aboutRow,
                {
                  minHeight: s(88),

                  paddingHorizontal: s(30),
                },
              ]}
            >

              <Text
                style={[
                  styles.aboutLabel,
                  {
                    fontSize: s(23),
                  },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit
              >
                PLC / Controller
              </Text>


              <View
                style={styles.connectionStatus}
              >

                <Text
                  style={[
                    styles.connectedText,
                    {
                      fontSize: s(21),
                    },
                  ]}
                >
                  Connected
                </Text>


                <View
                  style={[
                    styles.statusDot,
                    {
                      width: s(17),

                      height: s(17),

                      borderRadius: s(9),

                      marginLeft: s(10),
                    },
                  ]}
                />

              </View>

            </View>

          </View>


          {/* FINAL SPACE */}

          <View
            style={{
              height: s(30),
            }}
          />

        </ScrollView>


        {/* ==================================================
            BOTTOM NAVIGATION
        ================================================== */}

        <View
          style={[
            styles.bottomNav,
            {
              height:
                Platform.OS === "ios"
                  ? s(93)
                  : s(78),

              paddingBottom:
                Platform.OS === "ios"
                  ? s(8)
                  : 0,
            },
          ]}
        >

          {/* DASHBOARD */}

          <BottomNavItem
            icon="home-outline"
            label="Dashboard"
            size={s(31)}
          />


          {/* CONTROL */}

          <BottomNavItem
            icon="options-outline"
            label="Control"
            size={s(31)}
          />


          {/* TIMING */}

          <BottomNavItem
            icon="time-outline"
            label="Timing"
            size={s(31)}
          />


          {/* ALARMS */}

          <BottomNavItem
            icon="notifications-outline"
            label="Alarms"
            size={s(31)}
          />


          {/* SETTINGS */}

          <BottomNavItem
            icon="settings"
            label="Settings"
            active
            size={s(31)}
          />

        </View>

      </View>
    </SafeAreaView>
  );
}


/* ============================================================
   DEVICE ROW
============================================================ */

function DeviceRow({
  image,
  title,
  subtitle,
  imageSize,
  titleSize,
  subtitleSize = 20,
  rowHeight,
  onPress,
}: DeviceRowProps): React.JSX.Element {
  return (
    <Pressable
      style={[
        styles.deviceRow,
        {
          minHeight: rowHeight,
        },
      ]}
      onPress={onPress}
      android_ripple={{
        color: "#E5E7EB",
      }}
    >

      {/* ==================================================
          DEVICE IMAGE
      ================================================== */}

      <View
        style={styles.deviceIcon}
      >

        <Image
          source={image}
          style={{
            width: imageSize,
            height: imageSize,
          }}
          resizeMode="contain"
        />

      </View>


      {/* ==================================================
          DEVICE TEXT
      ================================================== */}

      <View
        style={styles.deviceText}
      >

        <Text
          style={[
            styles.deviceTitle,
            {
              fontSize: titleSize,
            },
          ]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {title}
        </Text>


        {subtitle && (
          <Text
            style={[
              styles.deviceSubtitle,
              {
                fontSize:
                  subtitleSize,
              },
            ]}
          >
            {subtitle}
          </Text>
        )}

      </View>


      {/* ==================================================
          RIGHT ARROW
      ================================================== */}

      <Ionicons
        name="chevron-forward"
        size={28}
        color="#0B1D3A"
      />

    </Pressable>
  );
}


/* ============================================================
   BOTTOM NAVIGATION ITEM
============================================================ */

function BottomNavItem({
  icon,
  label,
  active = false,
  size,
  onPress,
}: BottomNavItemProps): React.JSX.Element {
  return (
    <Pressable
      style={styles.navItem}
      onPress={onPress}
    >

      <Ionicons
        name={icon}
        size={size}
        color={
          active
            ? "#159F9B"
            : "#707988"
        }
      />


      <Text
        style={[
          styles.navLabel,
          {
            fontSize: Math.max(
              13,
              size * 0.52
            ),
          },

          active &&
            styles.activeNavLabel,
        ]}
      >
        {label}
      </Text>

    </Pressable>
  );
}


/* ============================================================
   STYLES
============================================================ */

const styles = StyleSheet.create({

  /* ==========================================================
     MAIN
  ========================================================== */

  safeArea: {
    flex: 1,

    backgroundColor: "#F7F8FA",
  },

  container: {
    flex: 1,

    backgroundColor: "#F7F8FA",
  },


  /* ==========================================================
     HEADER
  ========================================================== */

  header: {
    backgroundColor: "#FFFFFF",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    borderBottomWidth:
      StyleSheet.hairlineWidth,

    borderBottomColor:
      "#D9DDE2",
  },

  backButton: {
    width: 46,

    height: 36,

    alignItems: "center",

    justifyContent: "center",

    borderRadius: 23,
  },

  headerTitle: {
    position: "absolute",

    left: 0,

    right: 0,

    textAlign: "center",

    fontWeight: "900",

    color: "#0B1D3A",
  },

  headerPlaceholder: {
    width: 46,
  },


  /* ==========================================================
     CONTENT
  ========================================================== */

  scrollView: {
    flex: 1,
  },

  contentContainer: {
    flexGrow: 1,
  },


  /* ==========================================================
     SECTION TITLES
  ========================================================== */

  sectionTitle: {
    fontWeight: "600",

    letterSpacing: 0.3,

    color: "#465365",
  },


  /* ==========================================================
     GENERAL CARD
  ========================================================== */

  generalCard: {
    width: "100%",

    backgroundColor: "#FFFFFF",

    flexDirection: "row",

    alignItems: "center",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,

      height: 3,
    },

    shadowOpacity: 0.08,

    shadowRadius: 8,

    elevation: 3,
  },

  generalText: {
    flex: 1,

    minWidth: 0,

    paddingRight: 15,
  },

  cardTitle: {
    fontWeight: "700",

    color: "#0B1D3A",
  },

  description: {
    color: "#737D8D",

    lineHeight: 26,
  },


  /* ==========================================================
     MODE SELECTOR
  ========================================================== */

  modeSelector: {
    flexDirection: "row",

    overflow: "hidden",

    borderWidth: 1,

    borderColor: "#C9CDD3",

    flexShrink: 1,
  },

  modeButton: {
    flex: 1,

    alignItems: "center",

    justifyContent: "center",

    minWidth: 0,
  },

  activeMode: {
    backgroundColor: "#20B5AE",
  },

  inactiveMode: {
    backgroundColor: "#FFFFFF",
  },

  modeText: {
    fontWeight: "600",
  },

  activeModeText: {
    color: "#FFFFFF",
  },

  inactiveModeText: {
    color: "#0B1D3A",
  },


  /* ==========================================================
     DEVICES
  ========================================================== */

  devicesCard: {
    width: "100%",

    backgroundColor: "#FFFFFF",

    overflow: "hidden",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,

      height: 3,
    },

    shadowOpacity: 0.08,

    shadowRadius: 8,

    elevation: 3,
  },

  deviceRow: {
    width: "100%",

    paddingHorizontal: 30,

    flexDirection: "row",

    alignItems: "center",
  },

  deviceIcon: {
    width: 75,

    alignItems: "flex-start",

    justifyContent: "center",

    marginRight: 10,
  },

  deviceText: {
    flex: 1,

    minWidth: 0,
  },

  deviceTitle: {
    fontWeight: "600",

    color: "#0B1D3A",
  },

  deviceSubtitle: {
    marginTop: 5,

    color: "#737D8D",
  },

  divider: {
    height:
      StyleSheet.hairlineWidth,

    backgroundColor: "#D9DDE2",
  },


  /* ==========================================================
     NOTIFICATIONS
  ========================================================== */

  notificationCard: {
    width: "100%",

    backgroundColor: "#FFFFFF",

    flexDirection: "row",

    alignItems: "center",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,

      height: 3,
    },

    shadowOpacity: 0.08,

    shadowRadius: 8,

    elevation: 3,
  },

  notificationText: {
    flex: 1,

    minWidth: 0,

    paddingRight: 10,
  },


  /* ==========================================================
     ABOUT
  ========================================================== */

  aboutCard: {
    width: "100%",

    backgroundColor: "#FFFFFF",

    overflow: "hidden",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,

      height: 3,
    },

    shadowOpacity: 0.08,

    shadowRadius: 8,

    elevation: 3,
  },

  aboutRow: {
    width: "100%",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },

  aboutLabel: {
    fontWeight: "500",

    color: "#0B1D3A",

    flexShrink: 1,
  },

  aboutValue: {
    color: "#737D8D",
  },

  connectionStatus: {
    flexDirection: "row",

    alignItems: "center",

    marginLeft: 10,
  },

  connectedText: {
    fontWeight: "600",

    color: "#159F78",
  },

  statusDot: {
    backgroundColor: "#20B27A",
  },


  /* ==========================================================
     BOTTOM NAVIGATION
  ========================================================== */

  bottomNav: {
    width: "100%",

    backgroundColor: "#FFFFFF",

    borderTopWidth:
      StyleSheet.hairlineWidth,

    borderTopColor:
      "#D9DDE2",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-around",
  },

  navItem: {
    flex: 1,

    height: "100%",

    alignItems: "center",

    justifyContent: "center",
  },

  navLabel: {
    marginTop: 4,

    fontWeight: "500",

    color: "#707988",
  },

  activeNavLabel: {
    fontWeight: "600",

    color: "#159F9B",
  },

});