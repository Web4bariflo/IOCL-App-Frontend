import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
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

   Project structure:

   assets/
   └── images/
       ├── blower.png
       ├── inletpump.png
       └── motor.png

   Current file:

   src/app/desludging/auto.tsx

   Correct relative path:
   ../../../assets/images/
============================================================ */

import motorImage from "../../../assets/images/motor.png";
import blowerImage from "../../../assets/images/blower.png";
import pumpImage from "../../../assets/images/inletpump.png";

/* ============================================================
   TYPES
============================================================ */

interface DeviceCardProps {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  status: string;
  since: string;
  scale: number;
  marginTop: number;
}

interface ProcessRowProps {
  step: string;
  image: ImageSourcePropType;
  title: string;
  status: "ON" | "OFF";
  scale: number;
  last?: boolean;
}

interface BottomNavItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  active?: boolean;
  size: number;
  onPress?: () => void;
}

/* ============================================================
   AUTO SCREEN
============================================================ */

export default function Auto(): React.JSX.Element {
  const router = useRouter();

  const { width } = useWindowDimensions();

  /* ==========================================================
     RESPONSIVE SCALE
  ========================================================== */

  const scale = Math.min(width / 853, 1.12);

  const s = (value: number): number => {
    return Math.round(value * scale);
  };

  /* ==========================================================
     IMPORTANT:
     HORIZONTAL PADDING IS DEFINED HERE
  ========================================================== */

  const horizontalPadding = s(27);

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
              paddingHorizontal: s(38),
              paddingTop: s(5),
              paddingBottom: s(8),
            },
          ]}
        >

          {/* MENU BUTTON */}

          <Pressable
            style={styles.menuButton}
            onPress={() => {}}
          >
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </Pressable>


          {/* HEADER CENTER */}

          <View style={styles.headerCenter}>

            <Text
              style={[
                styles.headerTitle,
                {
                  fontSize: s(29),
                },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              Dissolved Aeration System
            </Text>

            <Text
              style={[
                styles.headerMode,
                {
                  fontSize: s(23),
                  marginTop: s(4),
                },
              ]}
            >
              Automatic Mode
            </Text>

          </View>


          {/* OFFLINE BADGE */}

          <View
            style={[
              styles.offlineBadge,
              {
                paddingHorizontal: s(19),
                paddingVertical: s(9),
                borderRadius: s(25),
              },
            ]}
          >
            <Text
              style={[
                styles.offlineText,
                {
                  fontSize: s(19),
                },
              ]}
            >
              Offline
            </Text>
          </View>

        </View>


        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.contentContainer,
            {
              paddingHorizontal: horizontalPadding,
              paddingBottom: s(25),
            },
          ]}
          showsVerticalScrollIndicator={false}
          bounces
        >

          {/* ==================================================
              SYSTEM OVERVIEW
          ================================================== */}

          <View
            style={[
              styles.overviewCard,
              {
                marginTop: s(16),
                borderRadius: s(14),
                padding: s(32),
              },
            ]}
          >

            <Text
              style={[
                styles.overviewTitle,
                {
                  fontSize: s(25),
                  marginBottom: s(22),
                },
              ]}
            >
              System Overview
            </Text>


            {/* START SYSTEM */}

            <Pressable
              style={[
                styles.startButton,
                {
                  height: s(58),
                  borderRadius: s(10),
                },
              ]}
              onPress={() => {}}
            >

              <Ionicons
                name="power"
                size={s(35)}
                color="#FFFFFF"
              />

              <Text
                style={[
                  styles.startText,
                  {
                    fontSize: s(22),
                    marginLeft: s(25),
                  },
                ]}
              >
                START SYSTEM
              </Text>

            </Pressable>


            {/* STOP */}

            <Pressable
              style={[
                styles.stopButton,
                {
                  height: s(58),
                  borderRadius: s(10),
                  marginTop: s(14),
                },
              ]}
              onPress={() => {}}
            >

              <View
                style={[
                  styles.stopSquare,
                  {
                    width: s(20),
                    height: s(20),
                    borderRadius: s(2),
                  },
                ]}
              />

              <Text
                style={[
                  styles.stopText,
                  {
                    fontSize: s(21),
                    marginLeft: s(22),
                  },
                ]}
              >
                STOP
              </Text>

            </Pressable>

          </View>


          {/* ==================================================
              MOTOR 1
          ================================================== */}

          <DeviceCard
            image={motorImage}
            title="Motor 1"
            subtitle="Disabled"
            status="Disabled"
            since="08:15 AM"
            scale={scale}
            marginTop={s(14)}
          />


          {/* ==================================================
              MOTOR 2
          ================================================== */}

          <DeviceCard
            image={motorImage}
            title="Motor 2"
            subtitle="Disabled"
            status="Disabled"
            since="08:15 AM"
            scale={scale}
            marginTop={s(14)}
          />


          {/* ==================================================
              BLOWER 1
          ================================================== */}

          <DeviceCard
            image={blowerImage}
            title="Blower 1"
            subtitle="Stopped"
            status="Stopped"
            since="08:15 AM"
            scale={scale}
            marginTop={s(14)}
          />


          {/* ==================================================
              PUMP 1
          ================================================== */}

          <DeviceCard
            image={pumpImage}
            title="Pump 1"
            subtitle="Stopped"
            status="Stopped"
            since="08:15 AM"
            scale={scale}
            marginTop={s(14)}
          />


          {/* ==================================================
              AUTOMATIC PROCESS
          ================================================== */}

          <View
            style={[
              styles.processCard,
              {
                marginTop: s(14),
                borderRadius: s(14),
                paddingHorizontal: s(32),
                paddingTop: s(18),
                paddingBottom: s(12),
              },
            ]}
          >

            <Text
              style={[
                styles.processTitle,
                {
                  fontSize: s(23),
                  marginBottom: s(5),
                },
              ]}
            >
              Automatic Process
            </Text>


            {/* STEP 01 */}

            <ProcessRow
              step="01"
              image={pumpImage}
              title="Pump 1"
              status="OFF"
              scale={scale}
            />


            {/* STEP 02 */}

            <ProcessRow
              step="02"
              image={motorImage}
              title="Motor 1"
              status="ON"
              scale={scale}
            />


            {/* STEP 03 */}

            <ProcessRow
              step="03"
              image={motorImage}
              title="Motor 2"
              status="ON"
              scale={scale}
            />


            {/* STEP 04 */}

            <ProcessRow
              step="04"
              image={blowerImage}
              title="Blower 1"
              status="OFF"
              scale={scale}
              last
            />

          </View>


          {/* ==================================================
              TANK FILLING
          ================================================== */}

          <View
            style={[
              styles.tankCard,
              {
                marginTop: s(14),
                borderRadius: s(14),
                paddingHorizontal: s(32),
                paddingVertical: s(18),
              },
            ]}
          >

            <Text
              style={[
                styles.tankTitle,
                {
                  fontSize: s(22),
                  marginBottom: s(8),
                },
              ]}
            >
              Tank Filling
            </Text>


            {/* WASTEWATER TANK */}

            <View style={styles.tankLabelRow}>

              <Text
                style={[
                  styles.tankLabel,
                  {
                    fontSize: s(20),
                  },
                ]}
              >
                Wastewater Tank
              </Text>

              <Text
                style={[
                  styles.tankPercentage,
                  {
                    fontSize: s(20),
                  },
                ]}
              >
                65%
              </Text>

            </View>


            <ProgressBar
              percentage={65}
              scale={scale}
            />


            {/* NORMAL WATER TANK */}

            <View
              style={[
                styles.tankLabelRow,
                {
                  marginTop: s(11),
                },
              ]}
            >

              <Text
                style={[
                  styles.tankLabel,
                  {
                    fontSize: s(20),
                  },
                ]}
              >
                Normal Water Tank
              </Text>

              <Text
                style={[
                  styles.tankPercentage,
                  {
                    fontSize: s(20),
                  },
                ]}
              >
                42%
              </Text>

            </View>


            <ProgressBar
              percentage={42}
              scale={scale}
              second
            />

          </View>


          {/* ==================================================
              LOG
          ================================================== */}

          <View
            style={[
              styles.logCard,
              {
                marginTop: s(14),
                borderRadius: s(14),
                paddingHorizontal: s(30),
                paddingTop: s(17),
                paddingBottom: s(7),
              },
            ]}
          >

            {/* LOG HEADER */}

            <View style={styles.logHeader}>

              <View
                style={styles.logTitleContainer}
              >

                <Ionicons
                  name="document-text-outline"
                  size={s(39)}
                  color="#168BE5"
                />

                <View
                  style={{
                    marginLeft: s(16),
                  }}
                >

                  <Text
                    style={[
                      styles.logTitle,
                      {
                        fontSize: s(22),
                      },
                    ]}
                  >
                    Log
                  </Text>

                  <Text
                    style={[
                      styles.logSubtitle,
                      {
                        fontSize: s(17),
                      },
                    ]}
                  >
                    Recent Activity
                  </Text>

                </View>

              </View>


              {/* VIEW ALL */}

              <Pressable
                style={styles.viewAllButton}
                onPress={() => {}}
              >

                <Text
                  style={[
                    styles.viewAllText,
                    {
                      fontSize: s(17),
                    },
                  ]}
                >
                  View All
                </Text>

                <Ionicons
                  name="chevron-forward"
                  size={s(25)}
                  color="#159F9B"
                />

              </Pressable>

            </View>


            <View
              style={styles.logDivider}
            />


            {/* LOG 1 */}

            <View style={styles.logRow}>

              <Text
                style={[
                  styles.logTime,
                  {
                    fontSize: s(17),
                  },
                ]}
              >
                9:15 AM
              </Text>

              <Text
                style={[
                  styles.logActivity,
                  {
                    fontSize: s(18),
                  },
                ]}
              >
                Motor 1 Started
              </Text>

              <Ionicons
                name="chevron-forward"
                size={s(24)}
                color="#0B1D3A"
              />

            </View>


            <View
              style={styles.logDivider}
            />


            {/* LOG 2 */}

            <View style={styles.logRow}>

              <Text
                style={[
                  styles.logTime,
                  {
                    fontSize: s(17),
                  },
                ]}
              >
                9:12 AM
              </Text>

              <Text
                style={[
                  styles.logActivity,
                  {
                    fontSize: s(18),
                  },
                ]}
              >
                Blower 1 Stopped
              </Text>

              <Ionicons
                name="chevron-forward"
                size={s(24)}
                color="#0B1D3A"
              />

            </View>

          </View>


          {/* BOTTOM SPACE */}

          <View
            style={{
              height: s(20),
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
                  ? s(94)
                  : s(82),
            },
          ]}
        >

          {/* HOME */}

          <BottomNavItem
            icon="home-outline"
            label="Home"
            active
            size={s(32)}
          />


          {/* SYSTEM */}

          <BottomNavItem
            icon="options-outline"
            label="System"
            size={s(32)}
          />


          {/* HISTORY */}

          <BottomNavItem
            icon="time-outline"
            label="History"
            size={s(32)}
          />


          {/* ALARMS */}

          <BottomNavItem
            icon="notifications-outline"
            label="Alarms"
            size={s(32)}
          />


          {/* SETTINGS */}

          <BottomNavItem
            icon="settings-outline"
            label="Settings"
            size={s(32)}
            onPress={() => {
              router.push("/desludging/settings");
            }}
          />

        </View>

      </View>
    </SafeAreaView>
  );
}


/* ============================================================
   DEVICE CARD
============================================================ */

function DeviceCard({
  image,
  title,
  subtitle,
  status,
  since,
  scale,
  marginTop,
}: DeviceCardProps): React.JSX.Element {
  return (
    <View
      style={[
        styles.deviceCard,
        {
          marginTop,
          borderRadius: Math.round(
            14 * scale
          ),
          paddingHorizontal:
            Math.round(32 * scale),
          paddingTop:
            Math.round(13 * scale),
          paddingBottom:
            Math.round(12 * scale),
        },
      ]}
    >

      {/* TOP AREA */}

      <View style={styles.deviceTop}>

        {/* IMAGE */}

        <Image
          source={image}
          style={{
            width: Math.round(
              82 * scale
            ),
            height: Math.round(
              68 * scale
            ),
          }}
          resizeMode="contain"
        />


        {/* NAME */}

        <View
          style={[
            styles.deviceNameContainer,
            {
              marginLeft:
                Math.round(16 * scale),
            },
          ]}
        >

          <Text
            style={[
              styles.deviceName,
              {
                fontSize:
                  Math.round(23 * scale),
              },
            ]}
          >
            {title}
          </Text>


          <Text
            style={[
              styles.deviceSubName,
              {
                fontSize:
                  Math.round(20 * scale),
                marginTop:
                  Math.round(4 * scale),
              },
            ]}
          >
            {subtitle}
          </Text>

        </View>


        {/* DEACTIVE */}

        <View
          style={[
            styles.deactiveBadge,
            {
              paddingHorizontal:
                Math.round(17 * scale),

              paddingVertical:
                Math.round(8 * scale),

              borderRadius:
                Math.round(22 * scale),
            },
          ]}
        >

          <Text
            style={[
              styles.deactiveText,
              {
                fontSize:
                  Math.round(16 * scale),
              },
            ]}
          >
            DEACTIVE
          </Text>

        </View>

      </View>


      {/* DIVIDER */}

      <View
        style={styles.deviceDivider}
      />


      {/* BOTTOM STATUS */}

      <View
        style={styles.deviceBottom}
      >

        {/* STATUS */}

        <View>

          <Text
            style={[
              styles.statusLabel,
              {
                fontSize:
                  Math.round(16 * scale),
              },
            ]}
          >
            Status
          </Text>

          <Text
            style={[
              styles.statusValue,
              {
                fontSize:
                  Math.round(19 * scale),
              },
            ]}
          >
            {status}
          </Text>

        </View>


        {/* SINCE */}

        <View>

          <Text
            style={[
              styles.statusLabel,
              {
                fontSize:
                  Math.round(16 * scale),
              },
            ]}
          >
            Since
          </Text>

          <Text
            style={[
              styles.statusValue,
              {
                fontSize:
                  Math.round(19 * scale),
              },
            ]}
          >
            {since}
          </Text>

        </View>

      </View>

    </View>
  );
}


/* ============================================================
   AUTOMATIC PROCESS ROW
============================================================ */

function ProcessRow({
  step,
  image,
  title,
  status,
  scale,
  last = false,
}: ProcessRowProps): React.JSX.Element {
  const isOn = status === "ON";

  return (
    <View
      style={[
        styles.processRow,
        {
          height:
            Math.round(57 * scale),
        },
      ]}
    >

      {/* STEP NUMBER */}

      <View
        style={[
          styles.stepContainer,
          {
            width:
              Math.round(68 * scale),
          },
        ]}
      >

        <View
          style={[
            styles.stepCircle,
            {
              width:
                Math.round(43 * scale),

              height:
                Math.round(43 * scale),

              borderRadius:
                Math.round(22 * scale),

              borderWidth:
                Math.max(
                  1,
                  Math.round(2 * scale)
                ),
            },
          ]}
        >

          <Text
            style={[
              styles.stepText,
              {
                fontSize:
                  Math.round(16 * scale),
              },
            ]}
          >
            {step}
          </Text>

        </View>


        {/* CONNECTING LINE */}

        {!last && (
          <>
            <View
              style={[
                styles.stepLine,
                {
                  height:
                    Math.round(18 * scale),
                },
              ]}
            />

            <Text
              style={[
                styles.downArrow,
                {
                  fontSize:
                    Math.round(23 * scale),
                },
              ]}
            >
              ↓
            </Text>
          </>
        )}

      </View>


      {/* DEVICE IMAGE */}

      <View
        style={[
          styles.processImageContainer,
          {
            width:
              Math.round(82 * scale),
          },
        ]}
      >

        <Image
          source={image}
          style={{
            width:
              Math.round(55 * scale),

            height:
              Math.round(48 * scale),
          }}
          resizeMode="contain"
        />

      </View>


      {/* DEVICE NAME */}

      <Text
        style={[
          styles.processDeviceTitle,
          {
            fontSize:
              Math.round(18 * scale),
          },
        ]}
        numberOfLines={1}
      >
        {title}
      </Text>


      {/* ON / OFF */}

      <View
        style={[
          styles.processStatus,
          {
            width:
              Math.round(82 * scale),
          },
        ]}
      >

        <Text
          style={[
            styles.processStatusText,
            {
              color: isOn
                ? "#159F4A"
                : "#EF2025",

              fontSize:
                Math.round(18 * scale),
            },
          ]}
        >
          {status}
        </Text>


        <View
          style={[
            styles.processStatusDot,
            {
              width:
                Math.round(15 * scale),

              height:
                Math.round(15 * scale),

              borderRadius:
                Math.round(8 * scale),

              backgroundColor: isOn
                ? "#159F4A"
                : "#EF2025",
            },
          ]}
        />

      </View>

    </View>
  );
}


/* ============================================================
   PROGRESS BAR
============================================================ */

function ProgressBar({
  percentage,
  scale,
  second = false,
}: {
  percentage: number;
  scale: number;
  second?: boolean;
}): React.JSX.Element {
  return (
    <View
      style={[
        styles.progressBackground,
        {
          height:
            Math.round(7 * scale),

          borderRadius:
            Math.round(5 * scale),

          marginTop:
            Math.round(6 * scale),
        },
      ]}
    >

      <View
        style={[
          styles.progressFill,
          {
            width: `${percentage}%`,

            height:
              Math.round(7 * scale),

            borderRadius:
              Math.round(5 * scale),

            backgroundColor: second
              ? "#159E9D"
              : "#1989E6",
          },
        ]}
      />

    </View>
  );
}


/* ============================================================
   BOTTOM NAV ITEM
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
            : "#0B1D3A"
        }
      />

      <Text
        style={[
          styles.navLabel,
          {
            fontSize: Math.max(
              15,
              size * 0.5
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

    backgroundColor: "#F9FAFB",
  },

  container: {
    flex: 1,

    backgroundColor: "#F9FAFB",
  },

  scrollView: {
    flex: 1,
  },

  contentContainer: {
    flexGrow: 1,
  },


  /* ==========================================================
     HEADER
  ========================================================== */

  header: {
    minHeight: 76,

    backgroundColor: "#FFFFFF",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },

  menuButton: {
    width: 42,

    height: 42,

    justifyContent: "center",
  },

  menuLine: {
    width: 35,

    height: 4,

    backgroundColor: "#0B1D3A",

    borderRadius: 3,

    marginVertical: 3,
  },

  headerCenter: {
    flex: 1,

    alignItems: "center",

    justifyContent: "center",

    paddingHorizontal: 10,
  },

  headerTitle: {
    color: "#0B1D3A",

    fontWeight: "700",

    textAlign: "center",
  },

  headerMode: {
    color: "#159F9B",

    fontWeight: "400",

    textAlign: "center",
  },

  offlineBadge: {
    backgroundColor: "#A1A1A5",

    alignItems: "center",

    justifyContent: "center",
  },

  offlineText: {
    color: "#FFFFFF",

    fontWeight: "500",
  },


  /* ==========================================================
     SYSTEM OVERVIEW
  ========================================================== */

  overviewCard: {
    backgroundColor: "#FFFFFF",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,

      height: 2,
    },

    shadowOpacity: 0.08,

    shadowRadius: 7,

    elevation: 3,
  },

  overviewTitle: {
    color: "#0B1D3A",

    fontWeight: "700",
  },

  startButton: {
    width: "100%",

    backgroundColor: "#00B341",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "center",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,

      height: 2,
    },

    shadowOpacity: 0.08,

    shadowRadius: 3,

    elevation: 2,
  },

  startText: {
    color: "#FFFFFF",

    fontWeight: "600",
  },

  stopButton: {
    width: "100%",

    backgroundColor: "#FFFFFF",

    borderWidth: 2,

    borderColor: "#EF2025",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "center",
  },

  stopSquare: {
    backgroundColor: "#EF2025",
  },

  stopText: {
    color: "#E51F24",

    fontWeight: "600",
  },


  /* ==========================================================
     DEVICE CARD
  ========================================================== */

  deviceCard: {
    width: "100%",

    backgroundColor: "#FFFFFF",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,

      height: 2,
    },

    shadowOpacity: 0.07,

    shadowRadius: 7,

    elevation: 3,
  },

  deviceTop: {
    flexDirection: "row",

    alignItems: "center",

    minHeight: 75,
  },

  deviceNameContainer: {
    flex: 1,

    minWidth: 0,
  },

  deviceName: {
    color: "#0B1D3A",

    fontWeight: "700",
  },

  deviceSubName: {
    color: "#687084",

    fontWeight: "400",
  },

  deactiveBadge: {
    backgroundColor: "#A1A1A5",

    alignItems: "center",

    justifyContent: "center",

    marginLeft: 8,
  },

  deactiveText: {
    color: "#FFFFFF",

    fontWeight: "500",
  },

  deviceDivider: {
    height: StyleSheet.hairlineWidth,

    backgroundColor: "#D8DCE1",

    marginTop: 6,

    marginBottom: 9,
  },

  deviceBottom: {
    flexDirection: "row",

    justifyContent: "space-between",

    paddingHorizontal: 1,
  },

  statusLabel: {
    color: "#6E7788",

    fontWeight: "400",
  },

  statusValue: {
    color: "#0B1D3A",

    marginTop: 4,

    fontWeight: "400",
  },


  /* ==========================================================
     AUTOMATIC PROCESS
  ========================================================== */

  processCard: {
    backgroundColor: "#FFFFFF",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,

      height: 2,
    },

    shadowOpacity: 0.07,

    shadowRadius: 7,

    elevation: 3,
  },

  processTitle: {
    color: "#0B1D3A",

    fontWeight: "700",
  },

  processRow: {
    flexDirection: "row",

    alignItems: "center",

    borderBottomWidth:
      StyleSheet.hairlineWidth,

    borderBottomColor: "#D8DCE1",
  },

  stepContainer: {
    height: "100%",

    alignItems: "center",

    justifyContent: "center",
  },

  stepCircle: {
    borderColor: "#159F4A",

    alignItems: "center",

    justifyContent: "center",

    backgroundColor: "#FFFFFF",
  },

  stepText: {
    color: "#159F4A",

    fontWeight: "600",
  },

  stepLine: {
    position: "absolute",

    top: "50%",

    width: 2,

    backgroundColor: "#159F4A",

    zIndex: -1,
  },

  downArrow: {
    position: "absolute",

    bottom: -3,

    color: "#159F4A",

    fontWeight: "700",

    backgroundColor: "#FFFFFF",
  },

  processImageContainer: {
    alignItems: "center",

    justifyContent: "center",
  },

  processDeviceTitle: {
    flex: 1,

    color: "#0B1D3A",

    fontWeight: "400",
  },

  processStatus: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "flex-end",
  },

  processStatusText: {
    fontWeight: "500",

    marginRight: 8,
  },

  processStatusDot: {
    flexShrink: 0,
  },


  /* ==========================================================
     TANK FILLING
  ========================================================== */

  tankCard: {
    backgroundColor: "#FFFFFF",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,

      height: 2,
    },

    shadowOpacity: 0.07,

    shadowRadius: 7,

    elevation: 3,
  },

  tankTitle: {
    color: "#0B1D3A",

    fontWeight: "700",
  },

  tankLabelRow: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },

  tankLabel: {
    color: "#0B1D3A",
  },

  tankPercentage: {
    color: "#0B1D3A",
  },

  progressBackground: {
    width: "100%",

    backgroundColor: "#E2E4E8",

    overflow: "hidden",
  },

  progressFill: {
    maxWidth: "100%",
  },


  /* ==========================================================
     LOG
  ========================================================== */

  logCard: {
    backgroundColor: "#FFFFFF",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,

      height: 2,
    },

    shadowOpacity: 0.07,

    shadowRadius: 7,

    elevation: 3,
  },

  logHeader: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },

  logTitleContainer: {
    flexDirection: "row",

    alignItems: "center",
  },

  logTitle: {
    color: "#0B1D3A",

    fontWeight: "700",
  },

  logSubtitle: {
    color: "#737D8D",

    marginTop: 1,
  },

  viewAllButton: {
    flexDirection: "row",

    alignItems: "center",
  },

  viewAllText: {
    color: "#159F9B",

    marginRight: 4,
  },

  logDivider: {
    height: StyleSheet.hairlineWidth,

    backgroundColor: "#D8DCE1",

    marginTop: 9,
  },

  logRow: {
    minHeight: 50,

    flexDirection: "row",

    alignItems: "center",
  },

  logTime: {
    width: "17%",

    color: "#0B1D3A",
  },

  logActivity: {
    flex: 1,

    color: "#0B1D3A",
  },


  /* ==========================================================
     BOTTOM NAVIGATION
  ========================================================== */

  bottomNav: {
    width: "100%",

    backgroundColor: "#FFFFFF",

    borderTopWidth:
      StyleSheet.hairlineWidth,

    borderTopColor: "#D9DDE2",

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

    color: "#0B1D3A",

    fontWeight: "400",
  },

  activeNavLabel: {
    color: "#159F9B",

    fontWeight: "500",
  },

});