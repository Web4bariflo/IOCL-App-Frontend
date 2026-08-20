import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ManualMode() {
  const router = useRouter();

  const [motorRunning, setMotorRunning] = useState(false);

  const [recording, setRecording] = useState(false);

  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const [lastRun, setLastRun] = useState({
    start: '09:15 AM',
    stop: '09:27 AM',
    duration: '12 min 00 sec',
  });

  const [currentStartTime, setCurrentStartTime] = useState('--:--:--');

  /* ==========================================================
     TIMER
  ========================================================== */

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;

    if (motorRunning) {
      timer = setInterval(() => {
        setElapsedSeconds((previous) => previous + 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [motorRunning]);


  /* ==========================================================
     FORMAT TIMER
  ========================================================== */

  const formatTimer = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);

    const minutes = Math.floor(
      (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')} : ${String(
      minutes
    ).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
  };


  /* ==========================================================
     CURRENT TIME
  ========================================================== */

  const getCurrentTime = () => {
    const now = new Date();

    let hours = now.getHours();

    const minutes = String(now.getMinutes()).padStart(2, '0');

    const seconds = String(now.getSeconds()).padStart(2, '0');

    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;

    hours = hours === 0 ? 12 : hours;

    return `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
  };


  /* ==========================================================
     START MOTOR
  ========================================================== */

  const startMotor = () => {
    if (motorRunning) {
      return;
    }

    setMotorRunning(true);

    setElapsedSeconds(0);

    setCurrentStartTime(getCurrentTime());

    if (recording) {
      console.log('Recording started');
    }
  };


  /* ==========================================================
     STOP MOTOR
  ========================================================== */

  const stopMotor = () => {
    if (!motorRunning) {
      return;
    }

    const stopTime = getCurrentTime();

    const durationMinutes = Math.floor(
      elapsedSeconds / 60
    );

    const durationSeconds = elapsedSeconds % 60;

    const duration = `${String(
      durationMinutes
    ).padStart(2, '0')} min ${String(
      durationSeconds
    ).padStart(2, '0')} sec`;

    setMotorRunning(false);

    setLastRun({
      start: currentStartTime,
      stop: stopTime,
      duration,
    });

    if (recording) {
      console.log('Recording stopped');
    }
  };


  /* ==========================================================
     RESET TIMER
  ========================================================== */

  const resetTimer = () => {
    setElapsedSeconds(0);

    if (!motorRunning) {
      setCurrentStartTime('--:--:--');
    }
  };


  return (
    <View style={styles.screen}>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <View style={styles.header}>

        {/* Back */}
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons
            name="arrow-back"
            size={25}
            color="#FFFFFF"
          />
        </TouchableOpacity>


        {/* Title */}
        <Text style={styles.headerTitle}>
          Manual Mode
        </Text>


        {/* Hand Icon */}
        <TouchableOpacity
          style={styles.handButton}
          activeOpacity={0.7}
        >
          <Ionicons
            name="hand-left"
            size={25}
            color="#FFFFFF"
          />
        </TouchableOpacity>

      </View>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* =================================================
            ASSET CARD
        ================================================= */}

        <View style={styles.assetCard}>

          <View style={styles.assetTopRow}>

            <Text style={styles.assetLabel}>
              Asset
            </Text>

            <View style={styles.onlineContainer}>

              <View style={styles.onlineDot} />

              <Text style={styles.onlineText}>
                Online
              </Text>

            </View>

          </View>


          <Text style={styles.assetName}>
            Stepper/Cylinder Motor 1
          </Text>


          <View style={styles.statusRow}>

            <Text style={styles.statusLabel}>
              Status
            </Text>

            <Text
              style={[
                styles.statusValue,
                motorRunning
                  ? styles.statusRunning
                  : styles.statusOff,
              ]}
            >
              {motorRunning ? 'RUNNING' : 'OFF'}
            </Text>

          </View>

        </View>


        {/* =================================================
            START / STOP BUTTONS
        ================================================= */}

        <View style={styles.motorButtons}>

          {/* START */}

          <TouchableOpacity
            style={[
              styles.startButton,
              motorRunning && styles.startButtonDisabled,
            ]}
            onPress={startMotor}
            disabled={motorRunning}
            activeOpacity={0.8}
          >

            <Ionicons
              name="play-circle"
              size={30}
              color="#FFFFFF"
            />

            <Text style={styles.buttonText}>
              START MOTOR
            </Text>

          </TouchableOpacity>


          {/* STOP */}

          <TouchableOpacity
            style={styles.stopButton}
            onPress={stopMotor}
            activeOpacity={0.8}
          >

            <View style={styles.stopCircle} />

            <Text style={styles.buttonText}>
              STOP MOTOR
            </Text>

          </TouchableOpacity>

        </View>


        {/* =================================================
            MANUAL TIMER CARD
        ================================================= */}

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Manual Timer
          </Text>


          <View style={styles.timerRow}>

            <View style={styles.timerDisplay}>

              <Text style={styles.timerText}>
                {formatTimer(elapsedSeconds)}
              </Text>

              <View style={styles.timerLabels}>

                <Text style={styles.timerLabel}>
                  HH
                </Text>

                <Text style={styles.timerLabel}>
                  MM
                </Text>

                <Text style={styles.timerLabel}>
                  SS
                </Text>

              </View>

            </View>


            <TouchableOpacity
              style={styles.resetButton}
              onPress={resetTimer}
              activeOpacity={0.8}
            >
              <Text style={styles.resetText}>
                Reset
              </Text>
            </TouchableOpacity>

          </View>

        </View>


        {/* =================================================
            RECORD TIME
        ================================================= */}

        <View style={styles.card}>

          <View style={styles.recordRow}>

            <View style={styles.recordInfo}>

              <Text style={styles.cardTitle}>
                Record Time
              </Text>

              <Text
                style={[
                  styles.recordDescription,
                  recording && styles.recordingText,
                ]}
              >
                {recording
                  ? 'Recording...'
                  : 'Record ON and OFF time for this run'}
              </Text>

            </View>


            <Switch
              value={recording}
              onValueChange={setRecording}
              trackColor={{
                false: '#D1D5DB',
                true: '#1672E8',
              }}
              thumbColor="#FFFFFF"
            />

          </View>

        </View>


        {/* =================================================
            CURRENT / LAST RUN
        ================================================= */}

        {!motorRunning ? (

          /* =================================================
             LAST RECORDED RUN
          ================================================= */

          <View style={styles.card}>

            <Text style={styles.cardTitle}>
              Last Recorded Run
            </Text>


            <View style={styles.runDetails}>

              <View style={styles.runColumn}>

                <Text style={styles.runLabel}>
                  Start
                </Text>

                <Text style={styles.runValue}>
                  {lastRun.start}
                </Text>

              </View>


              <View style={styles.runColumn}>

                <Text style={styles.runLabel}>
                  Stop
                </Text>

                <Text style={styles.runValue}>
                  {lastRun.stop}
                </Text>

              </View>


              <View style={styles.runColumn}>

                <Text style={styles.runLabel}>
                  Duration
                </Text>

                <Text style={styles.durationValue}>
                  {lastRun.duration}
                </Text>

              </View>

            </View>

          </View>

        ) : (

          /* =================================================
             CURRENT RUN
          ================================================= */

          <View style={styles.currentRunCard}>

            <Text style={styles.cardTitle}>
              Current Run
            </Text>


            {/* First row */}

            <View style={styles.currentRow}>

              <View style={styles.currentColumn}>

                <Text style={styles.runLabel}>
                  Start Time
                </Text>

                <Text style={styles.runValue}>
                  {currentStartTime}
                </Text>

              </View>


              <View style={styles.verticalDivider} />


              <View style={styles.currentColumn}>

                <Text style={styles.runLabel}>
                  Elapsed Time
                </Text>

                <Text style={styles.elapsedValue}>
                  {formatTimer(elapsedSeconds)}
                </Text>

              </View>

            </View>


            {/* Divider */}

            <View style={styles.horizontalDivider} />


            {/* Second row */}

            <View style={styles.currentRow}>

              <View style={styles.currentColumn}>

                <Text style={styles.runLabel}>
                  Stop Time
                </Text>

                <Text style={styles.placeholderValue}>
                  --:--:--
                </Text>

              </View>


              <View style={styles.verticalDivider} />


              <View style={styles.currentColumn}>

                <Text style={styles.runLabel}>
                  Duration
                </Text>

                <Text style={styles.placeholderValue}>
                  --:--:--
                </Text>

              </View>

            </View>

          </View>

        )}

        <View style={styles.bottomSpace} />

      </ScrollView>

    </View>
  );
}


/* ============================================================
   STYLES
============================================================ */

const styles = StyleSheet.create({

  /* ==========================================================
     SCREEN
  ========================================================== */

  screen: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },


  /* ==========================================================
     HEADER
  ========================================================== */

  header: {
     height: 90,
    paddingTop: 25,

    backgroundColor: '#061D41',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 15,
  },

  headerButton: {
    width: 40,
    height: 40,

    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    flex: 1,

    color: '#FFFFFF',

    fontSize: 20,

    fontWeight: '600',

    marginLeft: 8,
  },

  handButton: {
    width: 40,
    height: 40,

    alignItems: 'center',
    justifyContent: 'center',
  },


  /* ==========================================================
     SCROLL
  ========================================================== */

  scrollView: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 14,

    paddingTop: 12,

    paddingBottom: 20,
  },


  /* ==========================================================
     ASSET CARD
  ========================================================== */

  assetCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 9,

    paddingHorizontal: 16,

    paddingVertical: 14,

    marginBottom: 13,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.08,

    shadowRadius: 3,

    elevation: 2,
  },

  assetTopRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 5,
  },

  assetLabel: {
    color: '#4B5563',

    fontSize: 13,
  },

  onlineContainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  onlineDot: {
    width: 8,
    height: 8,

    borderRadius: 4,

    backgroundColor: '#20A04B',

    marginRight: 5,
  },

  onlineText: {
    color: '#26934A',

    fontSize: 13,

    fontWeight: '500',
  },

  assetName: {
    color: '#111827',

    fontSize: 15,

    fontWeight: '600',

    marginBottom: 20,
  },

  statusRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  statusLabel: {
    color: '#4B5563',

    fontSize: 13,
  },

  statusValue: {
    fontSize: 14,

    fontWeight: '700',
  },

  statusOff: {
    color: '#E14B4B',
  },

  statusRunning: {
    color: '#26934A',
  },


  /* ==========================================================
     MOTOR BUTTONS
  ========================================================== */

  motorButtons: {
    flexDirection: 'row',

    gap: 10,

    marginBottom: 14,
  },

  startButton: {
    flex: 1,

    height: 84,

    backgroundColor: '#18A94B',

    borderRadius: 8,

    alignItems: 'center',

    justifyContent: 'center',
  },

  startButtonDisabled: {
    backgroundColor: '#D8EBDD',
  },

  stopButton: {
    flex: 1,

    height: 84,

    backgroundColor: '#F33232',

    borderRadius: 8,

    alignItems: 'center',

    justifyContent: 'center',
  },

  stopCircle: {
    width: 27,
    height: 27,

    borderRadius: 14,

    backgroundColor: '#FFFFFF',

    marginBottom: 5,
  },

  buttonText: {
    color: '#FFFFFF',

    fontSize: 13,

    fontWeight: '600',

    marginTop: 3,
  },


  /* ==========================================================
     GENERAL CARD
  ========================================================== */

  card: {
    backgroundColor: '#FFFFFF',

    borderRadius: 9,

    paddingHorizontal: 16,

    paddingVertical: 14,

    marginBottom: 13,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.07,

    shadowRadius: 3,

    elevation: 2,
  },

  cardTitle: {
    color: '#1F2937',

    fontSize: 14,

    fontWeight: '600',

    marginBottom: 10,
  },


  /* ==========================================================
     TIMER
  ========================================================== */

  timerRow: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  timerDisplay: {
    flex: 1,
  },

  timerText: {
    color: '#111827',

    fontSize: 24,

    fontWeight: '500',

    letterSpacing: 2,
  },

  timerLabels: {
    flexDirection: 'row',

    marginTop: 2,
  },

  timerLabel: {
    color: '#6B7280',

    fontSize: 10,

    width: 40,

    textAlign: 'center',
  },

  resetButton: {
    width: 87,

    height: 38,

    backgroundColor: '#0866E8',

    borderRadius: 7,

    alignItems: 'center',

    justifyContent: 'center',
  },

  resetText: {
    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: '600',
  },


  /* ==========================================================
     RECORD
  ========================================================== */

  recordRow: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  recordInfo: {
    flex: 1,
  },

  recordDescription: {
    color: '#6B7280',

    fontSize: 12,

    marginTop: -3,
  },

  recordingText: {
    color: '#26934A',
  },


  /* ==========================================================
     LAST RUN
  ========================================================== */

  runDetails: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },

  runColumn: {
    flex: 1,
  },

  runLabel: {
    color: '#6B7280',

    fontSize: 12,

    marginBottom: 5,
  },

  runValue: {
    color: '#1F2937',

    fontSize: 14,

    fontWeight: '500',
  },

  durationValue: {
    color: '#26934A',

    fontSize: 14,

    fontWeight: '600',
  },


  /* ==========================================================
     CURRENT RUN
  ========================================================== */

  currentRunCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 9,

    paddingHorizontal: 16,

    paddingVertical: 14,

    marginBottom: 13,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.07,

    shadowRadius: 3,

    elevation: 2,
  },

  currentRow: {
    flexDirection: 'row',

    minHeight: 55,

    alignItems: 'center',
  },

  currentColumn: {
    flex: 1,
  },

  verticalDivider: {
    width: 1,

    height: 42,

    backgroundColor: '#E5E7EB',

    marginHorizontal: 15,
  },

  horizontalDivider: {
    height: 1,

    backgroundColor: '#E5E7EB',

    marginVertical: 5,
  },

  elapsedValue: {
    color: '#0866E8',

    fontSize: 16,

    fontWeight: '600',
  },

  placeholderValue: {
    color: '#6B7280',

    fontSize: 15,

    fontWeight: '500',
  },


  /* ==========================================================
     BOTTOM
  ========================================================== */

  bottomSpace: {
    height: 20,
  },

});