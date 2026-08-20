import React, { useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Alert,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';


export default function EditTimingScreen() {

  /* ================================================= */
  /* GET ASSET ID */
  /* ================================================= */

  const { asset } = useLocalSearchParams<{
    asset?: string;
  }>();


  /* ================================================= */
  /* ASSET DATA */
  /* ================================================= */

  const assetData = {

    P1: {
      image: require('../../../../assets/images/powder-dosing.png'),
      title: 'Power Dosing',
      subtitle: 'Stepper Motor (P1)',

      startTime: '09:00:00 AM',
      offTime: '09:05:00 AM',
      cycleTime: '00:05:00',
    },

    P2: {
      image: require('../../../../assets/images/water-dosing.png'),
      title: 'Water Dosing',
      subtitle: 'Stepper Motor (P2)',

      startTime: '09:00:30 AM',
      offTime: '09:06:30 AM',
      cycleTime: '00:06:00',
    },

    P3: {
      image: require('../../../../assets/images/transfer-pump.png'),
      title: 'Transfer / Mix Pump',
      subtitle: 'Pump (P3)',

      startTime: '09:01:00 AM',
      offTime: '09:11:00 AM',
      cycleTime: '00:10:00',
    },

  };


  /* ================================================= */
  /* CURRENT ASSET */
  /* ================================================= */

  const currentAsset =
    assetData[asset as keyof typeof assetData] || assetData.P3;


  /* ================================================= */
  /* FORM STATE */
  /* ================================================= */

  const [startTime, setStartTime] = useState(
    currentAsset.startTime
  );

  const [offTime, setOffTime] = useState(
    currentAsset.offTime
  );

  const [cycleTime, setCycleTime] = useState(
    currentAsset.cycleTime
  );

  const [repeat, setRepeat] = useState('Daily');


  /* ================================================= */
  /* SAVE */
  /* ================================================= */

  const handleSave = () => {

    Alert.alert(
      'Timing Saved',
      `${currentAsset.title} timing has been updated.`,
      [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]
    );

  };


  return (
    <View style={styles.container}>

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <View style={styles.header}>

        {/* Back */}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >

          <MaterialCommunityIcons
            name="arrow-left"
            size={26}
            color="#FFFFFF"
          />

        </TouchableOpacity>


        {/* Header Text */}

        <View style={styles.headerTitleContainer}>

          <Text style={styles.headerTitle}>
            Edit Timing
          </Text>

          <Text style={styles.headerSubtitle}>
            {currentAsset.title} ({asset})
          </Text>

        </View>

      </View>


      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* ================================================= */}
        {/* ASSET INFORMATION */}
        {/* ================================================= */}

        <Text style={styles.sectionTitle}>
          ASSET INFORMATION
        </Text>


        <View style={styles.assetCard}>

          <View style={styles.assetTopRow}>

            {/* Image */}

            <Image
              source={currentAsset.image}
              style={styles.assetImage}
              resizeMode="contain"
            />


            {/* Name */}

            <View style={styles.assetInfo}>

              <Text style={styles.assetTitle}>
                {currentAsset.title}
              </Text>

              <Text style={styles.assetSubtitle}>
                {currentAsset.subtitle}
              </Text>

            </View>

          </View>


          {/* Mode */}

          <View style={styles.modeRow}>

            <Text style={styles.modeLabel}>
              Mode
            </Text>

            <Text style={styles.modeValue}>
              Automatic
            </Text>

          </View>

        </View>


        {/* ================================================= */}
        {/* TIMING SETTINGS */}
        {/* ================================================= */}

        <Text style={styles.sectionTitle}>
          TIMING SETTINGS
        </Text>


        {/* ================================================= */}
        {/* START TIME */}
        {/* ================================================= */}

        <Text style={styles.fieldLabel}>
          Start Time
        </Text>


        <View style={styles.inputContainer}>

          <TextInput
            style={styles.input}
            value={startTime}
            onChangeText={setStartTime}
            placeholder="09:00:00 AM"
            placeholderTextColor="#777777"
          />

          <MaterialCommunityIcons
            name="clock-outline"
            size={21}
            color="#777777"
          />

        </View>


        {/* ================================================= */}
        {/* OFF TIME */}
        {/* ================================================= */}

        <Text style={styles.fieldLabel}>
          Off Time
        </Text>


        <View style={styles.inputContainer}>

          <TextInput
            style={styles.input}
            value={offTime}
            onChangeText={setOffTime}
            placeholder="09:05:00 AM"
            placeholderTextColor="#777777"
          />

          <MaterialCommunityIcons
            name="clock-outline"
            size={21}
            color="#777777"
          />

        </View>


        {/* ================================================= */}
        {/* CYCLE TIME */}
        {/* ================================================= */}

        <Text style={styles.fieldLabel}>
          Cycle (On Duration)
        </Text>


        <View style={styles.cycleRow}>

          <View style={styles.cycleInputContainer}>

            <TextInput
              style={styles.cycleInput}
              value={cycleTime}
              onChangeText={setCycleTime}
              placeholder="00:05:00"
              placeholderTextColor="#777777"
            />

          </View>


          <Text style={styles.formatText}>
            hh:mm:ss
          </Text>

        </View>


        {/* ================================================= */}
        {/* REPEAT */}
        {/* ================================================= */}

        <Text style={styles.fieldLabel}>
          Repeat
        </Text>


        <TouchableOpacity
          style={styles.repeatContainer}
          activeOpacity={0.8}
          onPress={() => {

            setRepeat(
              repeat === 'Daily'
                ? 'Weekly'
                : 'Daily'
            );

          }}
        >

          <Text style={styles.repeatText}>
            {repeat}
          </Text>


          <MaterialCommunityIcons
            name="chevron-down"
            size={22}
            color="#555555"
          />

        </TouchableOpacity>


        {/* ================================================= */}
        {/* NEXT RUN */}
        {/* ================================================= */}

        <Text style={styles.nextRunText}>
          Next Run: Tomorrow, {startTime}
        </Text>


        {/* ================================================= */}
        {/* INFORMATION BOX */}
        {/* ================================================= */}

        <View style={styles.infoBox}>

          <View style={styles.infoIconContainer}>

            <MaterialCommunityIcons
              name="information-outline"
              size={21}
              color="#1769D2"
            />

          </View>


          <Text style={styles.infoText}>
            Motor will start at Start Time and
            {'\n'}
            stop at Off Time daily.
          </Text>

        </View>


        {/* ================================================= */}
        {/* BUTTONS */}
        {/* ================================================= */}

        <View style={styles.buttonRow}>

          {/* Cancel */}

          <TouchableOpacity
            style={styles.cancelButton}
            activeOpacity={0.8}
            onPress={() => router.back()}
          >

            <Text style={styles.cancelText}>
              CANCEL
            </Text>

          </TouchableOpacity>


          {/* Save */}

          <TouchableOpacity
            style={styles.saveButton}
            activeOpacity={0.8}
            onPress={handleSave}
          >

            <Text style={styles.saveText}>
              SAVE
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </View>
  );
}


/* ================================================= */
/* STYLES */
/* ================================================= */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },


  /* ================================================= */
  /* HEADER */
  /* ================================================= */

  header: {
    height: 94,

    paddingTop: 38,

    backgroundColor: '#0753A6',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 14,
  },


  backButton: {
    width: 42,
    height: 42,

    alignItems: 'center',
    justifyContent: 'center',
  },


  headerTitleContainer: {
    flex: 1,

    marginLeft: 8,

    justifyContent: 'center',
  },


  headerTitle: {
    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: '700',
  },


  headerSubtitle: {
    color: '#D9E8F8',

    fontSize: 12,

    marginTop: 3,
  },


  /* ================================================= */
  /* CONTENT */
  /* ================================================= */

  content: {
    paddingHorizontal: 21,

    paddingTop: 20,

    paddingBottom: 35,
  },


  /* ================================================= */
  /* SECTION TITLE */
  /* ================================================= */

  sectionTitle: {
    color: '#1756A2',

    fontSize: 13,

    fontWeight: '800',

    marginBottom: 10,

    marginTop: 0,
  },


  /* ================================================= */
  /* ASSET CARD */
  /* ================================================= */

  assetCard: {
    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor: '#E1E4E8',

    borderRadius: 11,

    padding: 13,

    marginBottom: 22,

    shadowColor: '#000',

    shadowOpacity: 0.04,

    shadowRadius: 3,

    elevation: 2,
  },


  assetTopRow: {
    flexDirection: 'row',

    alignItems: 'center',
  },


  assetImage: {
    width: 48,

    height: 48,
  },


  assetInfo: {
    flex: 1,

    marginLeft: 12,
  },


  assetTitle: {
    color: '#222222',

    fontSize: 15,

    fontWeight: '700',
  },


  assetSubtitle: {
    color: '#555555',

    fontSize: 12,

    marginTop: 3,
  },


  modeRow: {
    flexDirection: 'row',

    marginTop: 13,

    alignItems: 'center',
  },


  modeLabel: {
    color: '#444444',

    fontSize: 12,

    width: 68,
  },


  modeValue: {
    color: '#20A65A',

    fontSize: 12,

    fontWeight: '700',
  },


  /* ================================================= */
  /* FORM LABEL */
  /* ================================================= */

  fieldLabel: {
    color: '#555555',

    fontSize: 12,

    marginBottom: 6,

    marginTop: 1,
  },


  /* ================================================= */
  /* INPUT */
  /* ================================================= */

  inputContainer: {
    height: 40,

    width: 180,

    borderWidth: 1,

    borderColor: '#D6DADF',

    borderRadius: 7,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 11,

    marginBottom: 17,
  },


  input: {
    flex: 1,

    color: '#333333',

    fontSize: 12,

    paddingVertical: 0,
  },


  /* ================================================= */
  /* CYCLE */
  /* ================================================= */

  cycleRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 17,
  },


  cycleInputContainer: {
    height: 40,

    width: 180,

    borderWidth: 1,

    borderColor: '#D6DADF',

    borderRadius: 7,

    backgroundColor: '#FFFFFF',
  },


  cycleInput: {
    flex: 1,

    color: '#333333',

    fontSize: 12,

    paddingHorizontal: 11,

    paddingVertical: 0,
  },


  formatText: {
    color: '#777777',

    fontSize: 10,

    marginLeft: 5,
  },


  /* ================================================= */
  /* REPEAT */
  /* ================================================= */

  repeatContainer: {
    height: 40,

    width: 180,

    borderWidth: 1,

    borderColor: '#D6DADF',

    borderRadius: 7,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingHorizontal: 12,

    marginBottom: 8,
  },


  repeatText: {
    color: '#444444',

    fontSize: 12,
  },


  /* ================================================= */
  /* NEXT RUN */
  /* ================================================= */

  nextRunText: {
    color: '#666666',

    fontSize: 10,

    marginBottom: 20,
  },


  /* ================================================= */
  /* INFORMATION BOX */
  /* ================================================= */

  infoBox: {
    minHeight: 56,

    backgroundColor: '#EDF5FF',

    borderWidth: 1,

    borderColor: '#C7DCF7',

    borderRadius: 10,

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 11,

    marginBottom: 32,
  },


  infoIconContainer: {
    marginRight: 10,

    justifyContent: 'center',

    alignItems: 'center',
  },


  infoText: {
    color: '#2865A8',

    fontSize: 11,

    lineHeight: 16,

    fontWeight: '500',
  },


  /* ================================================= */
  /* BUTTONS */
  /* ================================================= */

  buttonRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    gap: 13,
  },


  cancelButton: {
    flex: 1,

    height: 46,

    borderWidth: 1.5,

    borderColor: '#1769D2',

    borderRadius: 8,

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: '#FFFFFF',
  },


  cancelText: {
    color: '#1769D2',

    fontSize: 12,

    fontWeight: '800',
  },


  saveButton: {
    flex: 1,

    height: 46,

    borderRadius: 8,

    backgroundColor: '#1769D2',

    alignItems: 'center',

    justifyContent: 'center',
  },


  saveText: {
    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: '800',
  },

});