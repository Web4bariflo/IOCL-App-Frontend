import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type StageFilter = 'Stage 1' | 'Stage 2' | 'All';

interface HistoryItem {
  id: string;
  status: string;
  startTime: string;
  stopTime: string;
  runTime: string;
  stage: 'Stage 1' | 'Stage 2';
}

export default function History() {
  const router = useRouter();

  const [selectedFilter, setSelectedFilter] =
    useState<StageFilter>('Stage 1');

  const historyData: HistoryItem[] = [
    {
      id: '#6',
      status: 'Completed',
      startTime: '09:15 AM',
      stopTime: '09:27 AM',
      runTime: '12 min 00 sec',
      stage: 'Stage 1',
    },
    {
      id: '#5',
      status: 'Completed',
      startTime: '07:50 AM',
      stopTime: '08:02 AM',
      runTime: '12 min 00 sec',
      stage: 'Stage 1',
    },
    {
      id: '#4',
      status: 'Completed',
      startTime: '06:20 AM',
      stopTime: '06:32 AM',
      runTime: '12 min 00 sec',
      stage: 'Stage 1',
    },
    {
      id: '#3',
      status: 'Completed',
      startTime: '05:10 AM',
      stopTime: '05:55 AM',
      runTime: '45 min 00 sec',
      stage: 'Stage 2',
    },
    {
      id: '#2',
      status: 'Completed',
      startTime: '03:40 AM',
      stopTime: '04:25 AM',
      runTime: '45 min 00 sec',
      stage: 'Stage 2',
    },
  ];

  const filteredData =
    selectedFilter === 'All'
      ? historyData
      : historyData.filter(
          item => item.stage === selectedFilter
        );

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
          Run History
        </Text>

        {/* Filter */}
        <TouchableOpacity
          style={styles.headerButton}
          activeOpacity={0.7}
        >
          <Ionicons
            name="filter-outline"
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
            STAGE FILTER
        ================================================= */}

        <View style={styles.filterContainer}>

          {/* Stage 1 */}
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === 'Stage 1' &&
                styles.filterButtonActive,
            ]}
            onPress={() => setSelectedFilter('Stage 1')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === 'Stage 1' &&
                  styles.filterTextActive,
              ]}
            >
              Stage 1
            </Text>
          </TouchableOpacity>


          {/* Stage 2 */}
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === 'Stage 2' &&
                styles.filterButtonActive,
            ]}
            onPress={() => setSelectedFilter('Stage 2')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === 'Stage 2' &&
                  styles.filterTextActive,
              ]}
            >
              Stage 2
            </Text>
          </TouchableOpacity>


          {/* All */}
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === 'All' &&
                styles.filterButtonActive,
            ]}
            onPress={() => setSelectedFilter('All')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === 'All' &&
                  styles.filterTextActive,
              ]}
            >
              All
            </Text>
          </TouchableOpacity>

        </View>


        {/* =================================================
            DATE
        ================================================= */}

        <Text style={styles.dateTitle}>
          Today - 14 May 2025
        </Text>


        {/* =================================================
            HISTORY CARDS
        ================================================= */}

        {filteredData.map((item) => (

          <TouchableOpacity
            key={item.id}
            style={styles.historyCard}
            activeOpacity={0.9}
          >

            {/* =================================================
                TOP ROW
            ================================================= */}

            <View style={styles.cardTopRow}>

              {/* Run ID */}
              <Text style={styles.runId}>
                {item.id}
              </Text>


              {/* Status */}
              <View style={styles.completedBadge}>

                <Text style={styles.completedText}>
                  {item.status}
                </Text>

              </View>


              {/* Time */}
              <View style={styles.cardTime}>

                <Ionicons
                  name="time-outline"
                  size={16}
                  color="#6B7280"
                />

                <Text style={styles.cardTimeText}>
                  {item.startTime}
                </Text>

              </View>

            </View>


            {/* =================================================
                START / STOP
            ================================================= */}

            <View style={styles.timeDetails}>

              {/* Start */}
              <View style={styles.timeColumn}>

                <Text style={styles.detailLabel}>
                  Start Time
                </Text>

                <Text style={styles.detailValue}>
                  {item.startTime}
                </Text>

              </View>


              {/* Stop */}
              <View style={styles.timeColumn}>

                <Text style={styles.detailLabel}>
                  Stop Time
                </Text>

                <Text style={styles.detailValue}>
                  {item.stopTime}
                </Text>

              </View>

            </View>


            {/* =================================================
                RUN TIME
            ================================================= */}

            <View style={styles.runTimeContainer}>

              <Text style={styles.detailLabel}>
                Run Time
              </Text>

              <Text style={styles.runTimeValue}>
                {item.runTime}
              </Text>

            </View>

          </TouchableOpacity>

        ))}


        {/* Bottom spacing */}
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


  /* ==========================================================
     SCROLL
  ========================================================== */

  scrollView: {
    flex: 1,

    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 13,

    paddingTop: 17,

    paddingBottom: 20,
  },


  /* ==========================================================
     FILTER
  ========================================================== */

  filterContainer: {
    height: 45,

    backgroundColor: '#F1F2F4',

    borderRadius: 9,

    flexDirection: 'row',

    alignItems: 'center',

    overflow: 'hidden',

    marginBottom: 28,
  },

  filterButton: {
    flex: 1,

    height: 45,

    alignItems: 'center',

    justifyContent: 'center',

    borderRadius: 9,
  },

  filterButtonActive: {
    backgroundColor: '#0866E8',

    margin: 0,
  },

  filterText: {
    color: '#111827',

    fontSize: 14,

    fontWeight: '500',
  },

  filterTextActive: {
    color: '#FFFFFF',

    fontWeight: '600',
  },


  /* ==========================================================
     DATE
  ========================================================== */

  dateTitle: {
    color: '#374151',

    fontSize: 14,

    fontWeight: '600',

    marginBottom: 16,
  },


  /* ==========================================================
     HISTORY CARD
  ========================================================== */

  historyCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    paddingHorizontal: 16,

    paddingVertical: 17,

    marginBottom: 10,

    borderWidth: 1,

    borderColor: '#F0F0F0',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.08,

    shadowRadius: 5,

    elevation: 3,
  },


  /* ==========================================================
     TOP ROW
  ========================================================== */

  cardTopRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 22,
  },

  runId: {
    color: '#111827',

    fontSize: 16,

    fontWeight: '500',

    width: 45,
  },

  completedBadge: {
    backgroundColor: '#EAF8EF',

    borderRadius: 12,

    paddingHorizontal: 10,

    paddingVertical: 5,

    marginLeft: 0,
  },

  completedText: {
    color: '#26934A',

    fontSize: 12,

    fontWeight: '500',
  },

  cardTime: {
    flexDirection: 'row',

    alignItems: 'center',

    marginLeft: 'auto',
  },

  cardTimeText: {
    color: '#4B5563',

    fontSize: 13,

    marginLeft: 5,
  },


  /* ==========================================================
     START / STOP
  ========================================================== */

  timeDetails: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 17,
  },

  timeColumn: {
    width: '45%',
  },

  detailLabel: {
    color: '#6B7280',

    fontSize: 13,

    marginBottom: 5,
  },

  detailValue: {
    color: '#1F2937',

    fontSize: 16,

    fontWeight: '500',
  },


  /* ==========================================================
     RUN TIME
  ========================================================== */

  runTimeContainer: {
    width: '60%',
  },

  runTimeValue: {
    color: '#1F2937',

    fontSize: 16,

    fontWeight: '500',
  },


  /* ==========================================================
     BOTTOM
  ========================================================== */

  bottomSpace: {
    height: 20,
  },

});