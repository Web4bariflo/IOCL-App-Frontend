import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const MOCK_DATA = [
  { id: '1', date: '14 May 2025', start: '08:00 AM', stop: '09:30 AM', duration: '01:30:00', count: '12 / 12' },
  { id: '2', date: '13 May 2025', start: '08:05 AM', stop: '09:40 AM', duration: '01:35:00', count: '11 / 11' },
  { id: '3', date: '12 May 2025', start: '08:10 AM', stop: '09:38 AM', duration: '01:28:00', count: '10 / 10' },
  { id: '4', date: '11 May 2025', start: '08:00 AM', stop: '09:32 AM', duration: '01:32:00', count: '12 / 12' },
  { id: '5', date: '10 May 2025', start: '08:00 AM', stop: '09:28 AM', duration: '01:28:00', count: '9 / 9' },
  { id: '6', date: '09 May 2025', start: '07:55 AM', stop: '09:20 AM', duration: '01:25:00', count: '8 / 8' },
  { id: '7', date: '08 May 2025', start: '08:05 AM', stop: '09:30 AM', duration: '01:25:00', count: '10 / 10' },
];

export default function HistoryScreen() {
  const [activeTab, setActiveTab] = useState('wastewater');

  const renderItem = ({ item }: { item: typeof MOCK_DATA[0] }) => (
    <View style={styles.tableRow}>
      <Text style={[styles.tableCell, { flex: 1.5 }]}>{item.date}</Text>
      <Text style={styles.tableCell}>{item.start}</Text>
      <Text style={styles.tableCell}>{item.stop}</Text>
      <Text style={styles.tableCell}>{item.duration}</Text>
      <Text style={[styles.tableCell, { flex: 0.8, textAlign: 'center' }]}>{item.count}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>History / Records</Text>
        </View>
        <View style={styles.backButton} />
      </View>

      <View style={styles.content}>
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

        {/* Table */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderCell, { flex: 1.5 }]}>Date</Text>
            <Text style={styles.tableHeaderCell}>Start Time</Text>
            <Text style={styles.tableHeaderCell}>Stop Time</Text>
            <Text style={styles.tableHeaderCell}>Filling Time</Text>
            <Text style={[styles.tableHeaderCell, { flex: 0.8, textAlign: 'center' }]}>Start/Stop{"\n"}(Count)</Text>
          </View>
          <FlatList
            data={MOCK_DATA}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <TouchableOpacity style={styles.exportButton}>
          <MaterialCommunityIcons name="export-variant" size={20} color="#208AEF" />
          <Text style={styles.exportButtonText}>EXPORT CSV</Text>
        </TouchableOpacity>
      </View>
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
  content: {
    flex: 1,
    padding: 16,
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 4,
    marginBottom: 20,
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
  tableContainer: {
    flex: 1,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 8,
    marginBottom: 8,
  },
  tableHeaderCell: {
    flex: 1,
    fontSize: 10,
    fontWeight: '700',
    color: '#6B7280',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
  },
  tableCell: {
    flex: 1,
    fontSize: 11,
    color: '#111827',
  },
  separator: {
    height: 1,
    backgroundColor: '#F3F4F6',
  },
  exportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 16,
  },
  exportButtonText: {
    color: '#208AEF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
