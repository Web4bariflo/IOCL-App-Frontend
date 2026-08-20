import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function TimingScreen() {
  const [activeTab, setActiveTab] = useState('wastewater');
  const [startCount, setStartCount] = useState(12);
  const [stopCount, setStopCount] = useState(12);
  const [startTime, setStartTime] = useState(new Date(new Date().setHours(8, 0, 0, 0)));
  const [stopTime, setStopTime] = useState(new Date(new Date().setHours(9, 30, 0, 0)));
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showStopPicker, setShowStopPicker] = useState(false);

  const onStartTimeChange = (event: any, selectedDate?: Date) => {
    setShowStartPicker(false);
    if (selectedDate) setStartTime(selectedDate);
  };

  const onStopTimeChange = (event: any, selectedDate?: Date) => {
    setShowStopPicker(false);
    if (selectedDate) setStopTime(selectedDate);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const incrementStart = () => setStartCount(prev => prev + 1);
  const decrementStart = () => setStartCount(prev => (prev > 0 ? prev - 1 : 0));

  const incrementStop = () => setStopCount(prev => prev + 1);
  const decrementStop = () => setStopCount(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Timing Setup</Text>
          <Text style={styles.headerSubtitle}>
            {activeTab === 'wastewater' ? 'Wastewater Tank' : 'Normal Water Tank'}
          </Text>
        </View>
        <View style={styles.backButton} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Segmented Control */}
        <View style={styles.segmentedControl}>
          <TouchableOpacity
            style={[styles.segmentButton, activeTab === 'wastewater' && styles.segmentActive]}
            onPress={() => setActiveTab('wastewater')}
          >
            <Text style={[styles.segmentText, activeTab === 'wastewater' && styles.segmentTextActive]}>
              Wastewater Tank
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.segmentButton, activeTab === 'normal' && styles.segmentActive]}
            onPress={() => setActiveTab('normal')}
          >
            <Text style={[styles.segmentText, activeTab === 'normal' && styles.segmentTextActive]}>
              Normal Water Tank
            </Text>
          </TouchableOpacity>
        </View>

        {/* Set Pump Start / Stop Time */}
        <Text style={styles.sectionTitle}>Set Pump Start / Stop Time</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Start Time</Text>
          <TouchableOpacity style={styles.inputContainer} onPress={() => setShowStartPicker(true)}>
            <Text style={styles.input}>{formatTime(startTime)}</Text>
            <MaterialCommunityIcons name="clock-outline" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Stop Time</Text>
          <TouchableOpacity style={styles.inputContainer} onPress={() => setShowStopPicker(true)}>
            <Text style={styles.input}>{formatTime(stopTime)}</Text>
            <MaterialCommunityIcons name="clock-outline" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {showStartPicker && (
          <DateTimePicker
            value={startTime}
            mode="time"
            is24Hour={false}
            display="default"
            onChange={onStartTimeChange}
          />
        )}
        
        {showStopPicker && (
          <DateTimePicker
            value={stopTime}
            mode="time"
            is24Hour={false}
            display="default"
            onChange={onStopTimeChange}
          />
        )}

        <View style={styles.estimateContainer}>
          <Text style={styles.estimateLabel}>Estimated Filling Time</Text>
          <View style={styles.estimateRow}>
            <MaterialCommunityIcons name="clock-outline" size={20} color="#111827" />
            <Text style={styles.estimateValue}>{activeTab === 'wastewater' ? "01 h 30 m" : "01 h 15 m"}</Text>
          </View>
        </View>

        {/* Start/Stop Rack (Count) */}
        <Text style={styles.sectionTitle}>Start/Stop Rack (Count)</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Start Count</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counterValue}>{startCount}</Text>
            <View style={styles.counterActions}>
              <TouchableOpacity style={styles.counterBtn} onPress={decrementStart}>
                <MaterialCommunityIcons name="minus" size={20} color="#6B7280" />
              </TouchableOpacity>
              <View style={styles.counterDivider} />
              <TouchableOpacity style={styles.counterBtn} onPress={incrementStart}>
                <MaterialCommunityIcons name="plus" size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Stop Count</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counterValue}>{stopCount}</Text>
            <View style={styles.counterActions}>
              <TouchableOpacity style={styles.counterBtn} onPress={decrementStop}>
                <MaterialCommunityIcons name="minus" size={20} color="#6B7280" />
              </TouchableOpacity>
              <View style={styles.counterDivider} />
              <TouchableOpacity style={styles.counterBtn} onPress={incrementStop}>
                <MaterialCommunityIcons name="plus" size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>SAVE SETTINGS</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 15,
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
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 4,
    marginBottom: 24,
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  segmentActive: {
    backgroundColor: '#208AEF',
  },
  segmentText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  segmentTextActive: {
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
  },
  estimateContainer: {
    marginTop: 8,
    marginBottom: 24,
  },
  estimateLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 8,
  },
  estimateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 48,
    backgroundColor: '#F9FAFB',
  },
  estimateValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
    marginLeft: 8,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingLeft: 16,
    height: 48,
  },
  counterValue: {
    fontSize: 15,
    color: '#111827',
  },
  counterActions: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  counterBtn: {
    width: 48,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#E5E7EB',
  },
  saveButton: {
    backgroundColor: '#208AEF',
    borderRadius: 8,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
