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

export default function StageTiming() {
  const router = useRouter();

  const [stage1Start, setStage1Start] = useState('12');
  const [stage1Stop, setStage1Stop] = useState('12');

  const [stage2Start, setStage2Start] = useState('45');
  const [stage2Stop, setStage2Stop] = useState('45');

  const handleSave = () => {
    console.log('Stage 1 Start:', stage1Start);
    console.log('Stage 1 Stop:', stage1Stop);
    console.log('Stage 2 Start:', stage2Start);
    console.log('Stage 2 Stop:', stage2Stop);

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
          Stage Timing
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
            STAGE 1
        ================================================= */}

        <View style={styles.stageSection}>

          <Text style={styles.stageTitle}>
            Stage 1
          </Text>

          <Text style={styles.description}>
            After Coagulant Entry
          </Text>

          <Text style={styles.motorText}>
            (Stepper/Cylinder Motor 1)
          </Text>


          {/* START DURATION */}

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
              value={stage1Start}
              onChangeText={setStage1Start}
              keyboardType="numeric"
              textAlign="right"
              placeholder="0"
              placeholderTextColor="#9CA3AF"
            />

          </View>


          {/* STOP DURATION */}

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
              value={stage1Stop}
              onChangeText={setStage1Stop}
              keyboardType="numeric"
              textAlign="right"
              placeholder="0"
              placeholderTextColor="#9CA3AF"
            />

          </View>


          {/* STAGE 1 DESCRIPTION */}

          <Text style={styles.infoText}>
            Motor will run for {stage1Start || '0'} minutes in Stage 1
          </Text>

          <Text style={styles.infoText}>
            after Coagulant Entry.
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
     SCROLL
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
     STAGE SECTION
  ========================================================== */

  stageSection: {
    marginBottom: 30,
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
     LABEL
  ========================================================== */

  fieldLabel: {
    color: '#374151',

    fontSize: 14,

    marginBottom: 6,

    marginTop: 0,
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

    marginTop: -2,
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