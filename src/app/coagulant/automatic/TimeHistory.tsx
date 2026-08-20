import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function TimeHistoryScreen() {

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
      title: 'Power Dosing',
      subtitle: 'Stepper Motor (P1)',

      totalCycles: '3',
      totalOnTime: '00:15:12',
      avgOnTime: '00:05:04',

      records: [
        {
          startTime: '08:00:00 AM',
          offTime: '08:05:00 AM',
          duration: '00:05:00',
        },
        {
          startTime: '08:10:00 AM',
          offTime: '08:15:00 AM',
          duration: '00:05:00',
        },
        {
          startTime: '08:20:00 AM',
          offTime: '08:25:12 AM',
          duration: '00:05:12',
        },
      ],
    },

    P2: {
      title: 'Water Dosing',
      subtitle: 'Stepper Motor (P2)',

      totalCycles: '5',
      totalOnTime: '00:30:12',
      avgOnTime: '00:06:02',

      records: [
        {
          startTime: '08:00:30 AM',
          offTime: '08:06:30 AM',
          duration: '00:06:00',
        },
        {
          startTime: '08:12:30 AM',
          offTime: '08:18:30 AM',
          duration: '00:06:00',
        },
        {
          startTime: '08:24:30 AM',
          offTime: '08:30:30 AM',
          duration: '00:06:00',
        },
        {
          startTime: '08:36:30 AM',
          offTime: '08:42:30 AM',
          duration: '00:06:00',
        },
        {
          startTime: '08:48:30 AM',
          offTime: '08:54:42 AM',
          duration: '00:06:12',
        },
      ],
    },

    P3: {
      title: 'Transfer / Mix Pump',
      subtitle: 'Pump (P3)',

      totalCycles: '3',
      totalOnTime: '00:30:12',
      avgOnTime: '00:10:04',

      records: [
        {
          startTime: '08:01:00 AM',
          offTime: '08:11:00 AM',
          duration: '00:10:00',
        },
        {
          startTime: '08:21:00 AM',
          offTime: '08:31:00 AM',
          duration: '00:10:00',
        },
        {
          startTime: '08:41:00 AM',
          offTime: '08:51:12 AM',
          duration: '00:10:12',
        },
      ],
    },

  };


  /* ================================================= */
  /* SELECT CURRENT ASSET */
  /* ================================================= */

  const currentAsset =
    assetData[asset as keyof typeof assetData] || assetData.P3;


  return (
    <View style={styles.container}>

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <View style={styles.header}>

        {/* Back Button */}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="#FFFFFF"
          />
        </TouchableOpacity>


        {/* Header */}

        <View style={styles.headerTitleContainer}>

          <Text style={styles.headerTitle}>
            Time History
          </Text>

          <Text style={styles.headerSubtitle}>
            {currentAsset.title} ({currentAsset.subtitle})
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
        {/* DATE SELECTOR */}
        {/* ================================================= */}

        <View style={styles.dateCard}>

          <Text style={styles.dateLabel}>
            DATE
          </Text>


          <View style={styles.dateValueContainer}>

            <MaterialCommunityIcons
              name="calendar-month-outline"
              size={18}
              color="#555555"
            />

            <Text style={styles.dateValue}>
              14 May 2025
            </Text>

          </View>


          <MaterialCommunityIcons
            name="chevron-down"
            size={22}
            color="#1756A2"
          />

        </View>


        {/* ================================================= */}
        {/* TODAY'S RECORDS */}
        {/* ================================================= */}

        <Text style={styles.sectionTitle}>
          TODAY'S RECORDS
        </Text>


        {/* ================================================= */}
        {/* SUMMARY CARDS */}
        {/* ================================================= */}

        <View style={styles.summaryRow}>

          {/* Total Cycles */}

          <View style={styles.summaryCard}>

            <Text style={styles.summaryLabel}>
              Total Cycles
            </Text>

            <Text style={styles.summaryValue}>
              {currentAsset.totalCycles}
            </Text>

          </View>


          {/* Total ON Time */}

          <View style={styles.summaryCard}>

            <Text style={styles.summaryLabel}>
              Total ON Time
            </Text>

            <Text style={styles.summaryValue}>
              {currentAsset.totalOnTime}
            </Text>

          </View>


          {/* Average ON Time */}

          <View style={styles.summaryCard}>

            <Text style={styles.summaryLabel}>
              Avg ON Time
            </Text>

            <Text style={styles.summaryValue}>
              {currentAsset.avgOnTime}
            </Text>

          </View>

        </View>


        {/* ================================================= */}
        {/* RECORD TABLE */}
        {/* ================================================= */}

        <View style={styles.tableCard}>

          {/* TABLE HEADER */}

          <View style={styles.tableHeader}>

            <View style={styles.numberColumn}>
              <Text style={styles.tableHeaderText}>
                #
              </Text>
            </View>

            <View style={styles.tableColumn}>
              <Text style={styles.tableHeaderText}>
                Start Time
              </Text>
            </View>

            <View style={styles.tableColumn}>
              <Text style={styles.tableHeaderText}>
                Off Time
              </Text>
            </View>

            <View style={styles.tableColumn}>
              <Text style={styles.tableHeaderText}>
                ON Duration
              </Text>
            </View>

          </View>


          {/* TABLE RECORDS */}

          {currentAsset.records.map((record, index) => (

            <View
              key={index}
              style={styles.tableRow}
            >

              <View style={styles.numberColumn}>
                <Text style={styles.tableText}>
                  {index + 1}
                </Text>
              </View>

              <View style={styles.tableColumn}>
                <Text style={styles.tableText}>
                  {record.startTime}
                </Text>
              </View>

              <View style={styles.tableColumn}>
                <Text style={styles.tableText}>
                  {record.offTime}
                </Text>
              </View>

              <View style={styles.tableColumn}>
                <Text style={styles.tableText}>
                  {record.duration}
                </Text>
              </View>

            </View>

          ))}

        </View>


        {/* ================================================= */}
        {/* EXPORT CSV */}
        {/* ================================================= */}

        <TouchableOpacity
          style={styles.exportButton}
          activeOpacity={0.8}
          onPress={() => {
            // Add CSV export functionality here
          }}
        >

          <MaterialCommunityIcons
            name="export-variant"
            size={21}
            color="#1769D2"
          />

          <Text style={styles.exportText}>
            EXPORT CSV
          </Text>

        </TouchableOpacity>

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
    backgroundColor: '#F5F7FA',
  },


  /* ================================================= */
  /* HEADER */
  /* ================================================= */

  header: {
    height: 100,

    paddingTop: 40,

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

    marginLeft: 5,

    justifyContent: 'center',
  },


  headerTitle: {
    color: '#FFFFFF',

    fontSize: 17,

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
    padding: 15,

    paddingBottom: 40,
  },


  /* ================================================= */
  /* DATE */
  /* ================================================= */

  dateCard: {
    height: 52,

    backgroundColor: '#FFFFFF',

    borderRadius: 9,

    borderWidth: 1,

    borderColor: '#E5E7EB',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 12,

    marginBottom: 20,
  },


  dateLabel: {
    color: '#1756A2',

    fontSize: 12,

    fontWeight: '800',

    width: 50,
  },


  dateValueContainer: {
    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',
  },


  dateValue: {
    marginLeft: 9,

    fontSize: 13,

    color: '#444444',

    fontWeight: '600',
  },


  /* ================================================= */
  /* SECTION */
  /* ================================================= */

  sectionTitle: {
    color: '#1756A2',

    fontSize: 13,

    fontWeight: '800',

    marginBottom: 10,
  },


  /* ================================================= */
  /* SUMMARY */
  /* ================================================= */

  summaryRow: {
    flexDirection: 'row',

    gap: 8,

    marginBottom: 12,
  },


  summaryCard: {
    flex: 1,

    minHeight: 64,

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    borderWidth: 1,

    borderColor: '#E5E7EB',

    alignItems: 'center',

    justifyContent: 'center',

    paddingHorizontal: 4,
  },


  summaryLabel: {
    fontSize: 9,

    color: '#666666',

    marginBottom: 5,

    textAlign: 'center',
  },


  summaryValue: {
    fontSize: 14,

    color: '#333333',

    fontWeight: '700',

    textAlign: 'center',
  },


  /* ================================================= */
  /* TABLE */
  /* ================================================= */

  tableCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    borderWidth: 1,

    borderColor: '#E5E7EB',

    overflow: 'hidden',

    marginBottom: 18,
  },


  tableHeader: {
    flexDirection: 'row',

    minHeight: 36,

    alignItems: 'center',

    backgroundColor: '#F2F5F8',

    borderBottomWidth: 1,

    borderBottomColor: '#DDE2E7',
  },


  tableRow: {
    flexDirection: 'row',

    minHeight: 38,

    alignItems: 'center',

    borderBottomWidth: 1,

    borderBottomColor: '#E5E7EB',
  },


  numberColumn: {
    width: 38,

    alignItems: 'center',

    justifyContent: 'center',
  },


  tableColumn: {
    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',

    paddingHorizontal: 2,
  },


  tableHeaderText: {
    fontSize: 9,

    fontWeight: '800',

    color: '#333333',

    textAlign: 'center',
  },


  tableText: {
    fontSize: 9,

    color: '#444444',

    textAlign: 'center',
  },


  /* ================================================= */
  /* EXPORT */
  /* ================================================= */

  exportButton: {
    height: 48,

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    borderWidth: 1.5,

    borderColor: '#8CB2DD',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',
  },


  exportText: {
    marginLeft: 10,

    color: '#1769D2',

    fontSize: 12,

    fontWeight: '800',
  },

});