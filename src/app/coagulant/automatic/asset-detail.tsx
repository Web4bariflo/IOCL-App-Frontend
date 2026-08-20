
import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function AssetDetailScreen() {

  /* ================================================= */
  /* GET ASSET ID FROM URL */
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
      elapsedTime: '00:02:35',
      nextOffTime: '09:05:00 AM',
      cycleTime: '00:05:00',

      todaysCycles: '3',
      totalOnTime: '00:15:12',
    },

    P2: {
      image: require('../../../../assets/images/water-dosing.png'),
      title: 'Water Dosing',
      subtitle: 'Stepper Motor (P2)',

      startTime: '09:00:30 AM',
      elapsedTime: '00:02:05',
      nextOffTime: '09:06:30 AM',
      cycleTime: '00:06:00',

      todaysCycles: '3',
      totalOnTime: '00:18:12',
    },

    P3: {
      image: require('../../../../assets/images/transfer-pump.png'),
      title: 'Transfer / Mix Pump',
      subtitle: 'Pump (P3)',

      startTime: '09:01:00 AM',
      elapsedTime: '00:01:35',
      nextOffTime: '09:11:00 AM',
      cycleTime: '00:10:00',

      todaysCycles: '3',
      totalOnTime: '00:30:12',
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


        {/* Header Title */}

        <View style={styles.headerTitleContainer}>

          <Text style={styles.headerTitle}>
            Asset Detail
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
        {/* ASSET CARD */}
        {/* ================================================= */}

        <View style={styles.assetCard}>

          <View style={styles.assetTopRow}>

            {/* Asset Image */}

            <Image
              source={currentAsset.image}
              style={styles.assetImage}
              resizeMode="contain"
            />


            {/* Asset Information */}

            <View style={styles.assetInfo}>

              <Text style={styles.assetTitle}>
                {currentAsset.title}
              </Text>

              <Text style={styles.assetSubtitle}>
                {currentAsset.subtitle}
              </Text>

            </View>


            {/* Running Badge */}

            <View style={styles.runningBadge}>

              <Text style={styles.runningText}>
                RUNNING
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
        {/* CURRENT STATUS */}
        {/* ================================================= */}

        <Text style={styles.sectionTitle}>
          CURRENT STATUS
        </Text>


        <View style={styles.statusCard}>

          <StatusRow
            label="Start Time"
            value={currentAsset.startTime}
          />

          <StatusRow
            label="Elapsed Time"
            value={currentAsset.elapsedTime}
          />

          <StatusRow
            label="Next Off Time"
            value={currentAsset.nextOffTime}
          />

          <StatusRow
            label="Cycle (On Duration)"
            value={currentAsset.cycleTime}
          />

          <StatusRow
            label="Today's Cycles"
            value={currentAsset.todaysCycles}
          />

          <StatusRow
            label="Total ON Time Today"
            value={currentAsset.totalOnTime}
          />

        </View>


        {/* ================================================= */}
        {/* QUICK ACTIONS */}
        {/* ================================================= */}

        <Text style={styles.sectionTitle}>
          QUICK ACTIONS
        </Text>


        {/* Edit Timing */}

       <TouchableOpacity
  style={styles.actionButton}
  activeOpacity={0.8}
  onPress={() =>
    router.push(
      `/coagulant/automatic/edit-timing?asset=${asset}` 
    )
  }
>
          <MaterialCommunityIcons
            name="pencil-outline"
            size={23}
            color="#1769D2"
          />

          <Text style={styles.actionText}>
            Edit Timing
          </Text>

        </TouchableOpacity>


        {/* Time History */}

       <TouchableOpacity
  style={styles.actionButton}
  activeOpacity={0.8}
  onPress={() =>
    router.push(
      `/coagulant/automatic/TimeHistory?asset=${asset}`
    )
  }
>

          <MaterialCommunityIcons
            name="clock-outline"
            size={23}
            color="#1769D2"
          />

          <Text style={styles.actionText}>
            Time History
          </Text>

        </TouchableOpacity>


        {/* Stop Asset */}

        <TouchableOpacity
          style={styles.stopButton}
          onPress={() => {
            // Stop asset action
          }}
        >

          <MaterialCommunityIcons
            name="stop"
            size={23}
            color="#E84C4C"
          />

          <Text style={styles.stopText}>
            Stop Asset
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}


/* ================================================= */
/* STATUS ROW */
/* ================================================= */

function StatusRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {

  return (
    <View style={styles.statusRow}>

      <Text style={styles.statusLabel}>
        {label}
      </Text>

      <Text style={styles.statusValue}>
        {value}
      </Text>

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
  /* ASSET CARD */
  /* ================================================= */

  assetCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    borderWidth: 1,

    borderColor: '#E5E7EB',

    padding: 14,

    marginBottom: 18,

    elevation: 2,

    shadowColor: '#000',

    shadowOpacity: 0.05,

    shadowRadius: 3,
  },


  assetTopRow: {
    flexDirection: 'row',

    alignItems: 'center',
  },


  assetImage: {
    width: 52,

    height: 52,
  },


  assetInfo: {
    flex: 1,

    marginLeft: 10,
  },


  assetTitle: {
    fontSize: 13,

    fontWeight: '700',

    color: '#333333',
  },


  assetSubtitle: {
    fontSize: 11,

    color: '#555555',

    marginTop: 4,
  },


  runningBadge: {
    backgroundColor: '#D8F6E3',

    paddingHorizontal: 10,

    paddingVertical: 6,

    borderRadius: 15,
  },


  runningText: {
    color: '#20A65A',

    fontSize: 9,

    fontWeight: '800',
  },


  modeRow: {
    flexDirection: 'row',

    marginTop: 12,
  },


  modeLabel: {
    width: 60,

    fontSize: 11,

    color: '#333333',

    fontWeight: '600',
  },


  modeValue: {
    fontSize: 11,

    color: '#20A65A',

    fontWeight: '700',
  },


  /* ================================================= */
  /* SECTION */
  /* ================================================= */

  sectionTitle: {
    color: '#1756A2',

    fontSize: 13,

    fontWeight: '800',

    marginBottom: 10,

    marginTop: 3,
  },


  /* ================================================= */
  /* STATUS */
  /* ================================================= */

  statusCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    borderWidth: 1,

    borderColor: '#E5E7EB',

    padding: 12,

    marginBottom: 22,

    elevation: 2,
  },


  statusRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    paddingVertical: 6,
  },


  statusLabel: {
    fontSize: 11,

    color: '#444444',
  },


  statusValue: {
    fontSize: 11,

    color: '#222222',

    fontWeight: '600',
  },


  /* ================================================= */
  /* ACTIONS */
  /* ================================================= */

  actionButton: {
    height: 52,

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    borderWidth: 1,

    borderColor: '#AFC9E8',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 20,

    marginBottom: 10,
  },


  actionText: {
    marginLeft: 20,

    color: '#1756A2',

    fontSize: 12,

    fontWeight: '700',
  },


  /* ================================================= */
  /* STOP */
  /* ================================================= */

  stopButton: {
    height: 52,

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    borderWidth: 1,

    borderColor: '#F3AAAA',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 20,

    marginBottom: 10,
  },


  stopText: {
    marginLeft: 20,

    color: '#E84C4C',

    fontSize: 12,

    fontWeight: '700',
  },

});
