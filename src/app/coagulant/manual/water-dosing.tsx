import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WaterDosingScreen() {
  const router = useRouter();

  // Timing values
  const [startHour, setStartHour] = useState('00');
  const [startMin, setStartMin] = useState('01');
  const [startSec, setStartSec] = useState('30');

  const [stopHour, setStopHour] = useState('00');
  const [stopMin, setStopMin] = useState('03');
  const [stopSec, setStopSec] = useState('00');

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'left', 'right']}
    >

      {/* ================= HEADER ================= */}

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={23}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Asset Control
        </Text>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            console.log('Water dosing settings saved');
          }}
        >
          <Text style={styles.saveText}>
            Save
          </Text>
        </TouchableOpacity>

      </View>


      {/* ================= MAIN CONTENT ================= */}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* ================= ASSET ================= */}

        <View style={styles.assetCard}>

          <View style={styles.assetImageContainer}>
            <Image
              source={require('../../../../assets/images/waterdosing.png')}
              style={styles.assetMainImage}
            />
          </View>

          <View style={styles.assetInfo}>

            <Text style={styles.assetName}>
              Water Dosing (Stepper)
            </Text>

            <Text style={styles.assetStatusLabel}>
              Status
            </Text>

          </View>

          <View style={styles.onOffBadge}>
            <Text style={styles.onOffText}>
              OFF
            </Text>
          </View>

        </View>


        {/* ================= MANUAL CONTROL ================= */}

        <View style={styles.card}>

          <Text style={styles.sectionTitle}>
            MANUAL CONTROL
          </Text>

          <View style={styles.controlButtons}>

            {/* START */}

            <TouchableOpacity
              style={styles.startButton}
              onPress={() => {
                console.log('Water dosing START');
              }}
              activeOpacity={0.8}
            >

              <Ionicons
                name="play"
                size={14}
                color="#FFFFFF"
              />

              <Text style={styles.startButtonText}>
                START
              </Text>

            </TouchableOpacity>


            {/* STOP */}

            <TouchableOpacity
              style={styles.stopButton}
              onPress={() => {
                console.log('Water dosing STOP');
              }}
              activeOpacity={0.8}
            >

              <Ionicons
                name="square"
                size={13}
                color="#FFFFFF"
              />

              <Text style={styles.stopButtonText}>
                STOP
              </Text>

            </TouchableOpacity>

          </View>

        </View>


        {/* ================= TIMING SETTINGS ================= */}

        <View style={styles.card}>

          <Text style={styles.sectionTitle}>
            TIMING SETTINGS
          </Text>


          {/* START DURATION */}

          <Text style={styles.timingTitle}>
            Start Duration (ON Time)
          </Text>

          <View style={styles.timingRow}>

            {/* HOURS */}

            <View style={styles.timeGroup}>

              <TextInput
                style={styles.timeInput}
                value={startHour}
                onChangeText={setStartHour}
                keyboardType="numeric"
                maxLength={2}
              />

              <Text style={styles.timeUnit}>
                hr
              </Text>

            </View>


            {/* MINUTES */}

            <View style={styles.timeGroup}>

              <TextInput
                style={styles.timeInput}
                value={startMin}
                onChangeText={setStartMin}
                keyboardType="numeric"
                maxLength={2}
              />

              <Text style={styles.timeUnit}>
                min
              </Text>

            </View>


            {/* SECONDS */}

            <View style={styles.timeGroup}>

              <TextInput
                style={styles.timeInput}
                value={startSec}
                onChangeText={setStartSec}
                keyboardType="numeric"
                maxLength={2}
              />

              <Text style={styles.timeUnit}>
                sec
              </Text>

            </View>

          </View>


          {/* STOP DURATION */}

          <Text
            style={[
              styles.timingTitle,
              { marginTop: 12 },
            ]}
          >
            Stop Duration (OFF Time)
          </Text>

          <View style={styles.timingRow}>

            {/* HOURS */}

            <View style={styles.timeGroup}>

              <TextInput
                style={styles.timeInput}
                value={stopHour}
                onChangeText={setStopHour}
                keyboardType="numeric"
                maxLength={2}
              />

              <Text style={styles.timeUnit}>
                hr
              </Text>

            </View>


            {/* MINUTES */}

            <View style={styles.timeGroup}>

              <TextInput
                style={styles.timeInput}
                value={stopMin}
                onChangeText={setStopMin}
                keyboardType="numeric"
                maxLength={2}
              />

              <Text style={styles.timeUnit}>
                min
              </Text>

            </View>


            {/* SECONDS */}

            <View style={styles.timeGroup}>

              <TextInput
                style={styles.timeInput}
                value={stopSec}
                onChangeText={setStopSec}
                keyboardType="numeric"
                maxLength={2}
              />

              <Text style={styles.timeUnit}>
                sec
              </Text>

            </View>

          </View>

        </View>


        {/* ================= RECORDING ================= */}

        <View style={styles.card}>

          <Text style={styles.sectionTitle}>
            RECORDING (LAST CYCLE)
          </Text>


          <View style={styles.recordRow}>

            <Text style={styles.recordLabel}>
              Started At
            </Text>

            <Text style={styles.recordValue}>
              --
            </Text>

          </View>


          <View style={styles.recordRow}>

            <Text style={styles.recordLabel}>
              Stopped At
            </Text>

            <Text style={styles.recordValue}>
              --
            </Text>

          </View>


          <View style={styles.recordRow}>

            <Text style={styles.recordLabel}>
              ON Duration
            </Text>

            <Text style={styles.recordValue}>
              --
            </Text>

          </View>


          <View style={styles.recordRow}>

            <Text style={styles.recordLabel}>
              OFF Duration
            </Text>

            <Text style={styles.recordValue}>
              --
            </Text>

          </View>


          <View style={styles.recordRow}>

            <Text style={styles.recordLabel}>
              Cycle Time (ON + OFF)
            </Text>

            <Text style={styles.recordValue}>
              --
            </Text>

          </View>

        </View>

      </ScrollView>


    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  /* ================= CONTAINER ================= */

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  scrollView: {
    flex: 1,
  },

  content: {
    padding: 12,
    paddingBottom: 20,
  },


  /* ================= HEADER ================= */

  header: {
    height: 70,
    paddingTop: 14,
    backgroundColor: '#0F1E30',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  backButton: {
    width: 35,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  headerTitle: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 3,
  },

  saveButton: {
    paddingHorizontal: 4,
    paddingVertical: 5,
  },

  saveText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },


  /* ================= ASSET CARD ================= */

  assetCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    minHeight: 62,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  assetImageContainer: {
    width: 43,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  assetInfo: {
    flex: 1,
    marginLeft: 7,
  },

  assetName: {
    fontSize: 11,
    color: '#1F2937',
    fontWeight: '600',
  },

  assetStatusLabel: {
    fontSize: 9,
    color: '#6B7280',
    marginTop: 5,
  },

  onOffBadge: {
    backgroundColor: '#16A34A',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },

  onOffText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },


  /* ================= CARD ================= */

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 10,
    marginBottom: 10,
  },

  sectionTitle: {
    color: '#1769AA',
    fontSize: 9,
    fontWeight: '800',
    marginBottom: 8,
  },


  /* ================= MANUAL CONTROL ================= */

  controlButtons: {
    flexDirection: 'row',
    gap: 10,
  },

  startButton: {
    flex: 1,
    height: 34,
    backgroundColor: '#22A447',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  stopButton: {
    flex: 1,
    height: 34,
    backgroundColor: '#EF3038',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  startButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    marginLeft: 6,
  },

  stopButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    marginLeft: 6,
  },


  /* ================= TIMING ================= */

  timingTitle: {
    fontSize: 8,
    color: '#374151',
    marginBottom: 5,
  },

  timingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  timeGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  timeInput: {
    width: 48,
    height: 32,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: 11,
    color: '#111827',
    padding: 0,
  },

  timeUnit: {
    fontSize: 8,
    color: '#6B7280',
    marginLeft: 5,
  },


  /* ================= RECORDING ================= */

  recordRow: {
    minHeight: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  recordLabel: {
    fontSize: 8,
    color: '#374151',
  },

  recordValue: {
    fontSize: 9,
    color: '#6B7280',
    paddingRight: 10,
  },

  assetMainImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

});
