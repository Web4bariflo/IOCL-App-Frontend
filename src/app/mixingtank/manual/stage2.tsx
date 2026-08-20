import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Stage2Timing() {
  const router = useRouter();

  const [startDuration, setStartDuration] = useState('45');
  const [stopDuration, setStopDuration] = useState('45');

  const handleSave = () => {
    console.log('Stage 2 Start Duration:', startDuration);
    console.log('Stage 2 Stop Duration:', stopDuration);

    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons
            name="arrow-back"
            size={25}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Stage 2 Timing
        </Text>

      </View>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* =================================================
            STAGE 2
        ================================================= */}

        <View style={styles.stageSection}>

          <Text style={styles.stageTitle}>
            Stage 2
          </Text>

          <Text style={styles.description}>
            After Flocculant Entry
          </Text>

          <Text style={styles.motorText}>
            (Same Motor)
          </Text>


          {/* =================================================
              START DURATION
          ================================================= */}

          <Text style={styles.fieldLabel}>
            Start Duration (min)
          </Text>

          <View style={styles.inputContainer}>

            <Ionicons
              name="time-outline"
              size={21}
              color="#4B5563"
            />

            <TextInput
              style={styles.input}
              value={startDuration}
              onChangeText={setStartDuration}
              keyboardType="numeric"
              textAlign="right"
              placeholder="0"
              placeholderTextColor="#9CA3AF"
            />

          </View>


          {/* =================================================
              STOP DURATION
          ================================================= */}

          <Text style={styles.fieldLabel}>
            Stop Duration (min)
          </Text>

          <View style={styles.inputContainer}>

            <Ionicons
              name="time-outline"
              size={21}
              color="#4B5563"
            />

            <TextInput
              style={styles.input}
              value={stopDuration}
              onChangeText={setStopDuration}
              keyboardType="numeric"
              textAlign="right"
              placeholder="0"
              placeholderTextColor="#9CA3AF"
            />

          </View>


          {/* =================================================
              INFORMATION
          ================================================= */}

          <Text style={styles.infoText}>
            Motor will run for {startDuration || '0'} minutes in Stage 2
          </Text>

          <Text style={styles.infoText}>
            after Flocculant Entry.
          </Text>

        </View>


        {/* =================================================
            SAVE BUTTON
        ================================================= */}

        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
          activeOpacity={0.8}
        >
          <Text style={styles.saveButtonText}>
            Save Changes
          </Text>
        </TouchableOpacity>


        <View style={styles.bottomSpace} />

      </ScrollView>

    </KeyboardAvoidingView>
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
    backgroundColor: '#FFFFFF',
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

    paddingHorizontal: 16,
  },

  backButton: {
    width: 40,
    height: 40,

    alignItems: 'center',

    justifyContent: 'center',

    marginRight: 5,
  },

  headerTitle: {
    color: '#FFFFFF',

    fontSize: 20,

    fontWeight: '600',
  },


  /* ==========================================================
     SCROLL VIEW
  ========================================================== */

  scrollView: {
    flex: 1,

    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 16,

    paddingTop: 21,

    paddingBottom: 20,
  },


  /* ==========================================================
     STAGE
  ========================================================== */

  stageSection: {
    marginBottom: 25,
  },

  stageTitle: {
    color: '#111827',

    fontSize: 19,

    fontWeight: '700',

    marginBottom: 8,
  },

  description: {
    color: '#374151',

    fontSize: 16,

    marginBottom: 5,
  },

  motorText: {
    color: '#374151',

    fontSize: 16,

    marginBottom: 32,
  },


  /* ==========================================================
     FIELD LABEL
  ========================================================== */

  fieldLabel: {
    color: '#374151',

    fontSize: 14,

    marginBottom: 6,
  },


  /* ==========================================================
     INPUT
  ========================================================== */

  inputContainer: {
    height: 46,

    borderWidth: 1,

    borderColor: '#D1D5DB',

    borderRadius: 9,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 10,

    marginBottom: 21,
  },

  input: {
    flex: 1,

    height: 44,

    color: '#111827',

    fontSize: 16,

    paddingHorizontal: 8,

    paddingVertical: 0,
  },


  /* ==========================================================
     INFORMATION TEXT
  ========================================================== */

  infoText: {
    color: '#374151',

    fontSize: 15,

    lineHeight: 23,
  },


  /* ==========================================================
     SAVE BUTTON
  ========================================================== */

  saveButton: {
    height: 45,

    backgroundColor: '#0866E8',

    borderRadius: 8,

    alignItems: 'center',

    justifyContent: 'center',

    marginTop: 0,
  },

  saveButtonText: {
    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: '600',
  },


  /* ==========================================================
     BOTTOM
  ========================================================== */

  bottomSpace: {
    height: 20,
  },

});