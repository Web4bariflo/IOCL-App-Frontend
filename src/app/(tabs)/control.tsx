import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ControlScreen() {
  const [valve1Open, setValve1Open] = useState(true);
  const [valve2Open, setValve2Open] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Manual Control</Text>
          <Text style={styles.headerSubtitle}>Inlet / Sensors</Text>
        </View>
        <View style={styles.backButton} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Pump Control */}
        <Text style={styles.sectionTitle}>Inlet Pump 1</Text>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIconContainer}>
              <Image source={require('@/assets/images/inletpump.png')} style={{ width: 32, height: 32 }} resizeMode="contain" />
            </View>
            <View>
              <Text style={styles.statusLabel}>Status</Text>
              <Text style={styles.statusTextGreen}>Running</Text>
            </View>
          </View>
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.btnStart}>
              <Text style={styles.btnStartText}>START</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStop}>
              <Text style={styles.btnStopText}>STOP</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Valves Control */}
        <Text style={styles.sectionTitle}>Solenoid Valves</Text>
        <View style={styles.card}>
          <View style={styles.valveRow}>
            <View>
              <Text style={styles.valveTitle}>Valve 1</Text>
              <Text style={valve1Open ? styles.statusTextGreen : styles.statusTextRed}>
                {valve1Open ? 'Open' : 'Closed'}
              </Text>
            </View>
            <View style={styles.toggleGroup}>
              <TouchableOpacity
                style={valve1Open ? styles.toggleActive : styles.toggleInactive}
                onPress={() => setValve1Open(true)}
              >
                <Text style={valve1Open ? styles.toggleActiveText : styles.toggleInactiveText}>OPEN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={!valve1Open ? styles.toggleActiveRed : styles.toggleInactive}
                onPress={() => setValve1Open(false)}
              >
                <Text style={!valve1Open ? styles.toggleActiveText : styles.toggleInactiveText}>CLOSE</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.valveRow}>
            <View>
              <Text style={styles.valveTitle}>Valve 2</Text>
              <Text style={valve2Open ? styles.statusTextGreen : styles.statusTextRed}>
                {valve2Open ? 'Open' : 'Closed'}
              </Text>
            </View>
            <View style={styles.toggleGroup}>
              <TouchableOpacity
                style={valve2Open ? styles.toggleActive : styles.toggleInactive}
                onPress={() => setValve2Open(true)}
              >
                <Text style={valve2Open ? styles.toggleActiveText : styles.toggleInactiveText}>OPEN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={!valve2Open ? styles.toggleActiveRed : styles.toggleInactive}
                onPress={() => setValve2Open(false)}
              >
                <Text style={!valve2Open ? styles.toggleActiveText : styles.toggleInactiveText}>CLOSE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Contactor Sensors */}
        <Text style={styles.sectionTitle}>Contactor Sensors</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Contactor Sensor 1</Text>
            <View style={styles.statusRow}>
              <Text style={styles.statusTextGreen}>Active</Text>
              <View style={styles.statusDotGreen} />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Contactor Sensor 2</Text>
            <View style={styles.statusRow}>
              <Text style={styles.statusTextGreen}>Active</Text>
              <View style={styles.statusDotGreen} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardIconContainer: {
    marginRight: 16,
  },
  statusLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  statusTextGreen: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '500',
  },
  statusTextRed: {
    fontSize: 14,
    color: '#EF4444',
    fontWeight: '500',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnStart: {
    flex: 1,
    backgroundColor: '#10B981',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 8,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  btnStartText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnStop: {
    flex: 1,
    backgroundColor: '#EF4444',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginLeft: 8,
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  btnStopText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  valveRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  valveTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  toggleGroup: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 4,
  },
  toggleActive: {
    backgroundColor: '#10B981',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  toggleActiveRed: {
    backgroundColor: '#EF4444',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  toggleActiveText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  toggleInactive: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  toggleInactiveText: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  rowLabel: {
    fontSize: 15,
    color: '#374151',
    fontWeight: '500',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDotGreen: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginLeft: 8,
  },
});
