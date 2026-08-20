import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

import EquipmentCard from './EquipmentCard';

export default function AssetsScreen() {
  return (
    <View style={styles.container}>

      {/* ================= STATUS BAR ================= */}

      {/* <StatusBar style="light" backgroundColor="#0753A6" /> */}

      {/* ================= ASSETS HEADER ================= */}

      <View style={styles.header}>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.headerButton}
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
            Assets
          </Text>
        </View>


        {/* Settings Button */}
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            // Add settings navigation here later
          }}
        >
          <MaterialCommunityIcons
            name="cog-outline"
            size={24}
            color="#FFFFFF"
          />
        </TouchableOpacity>

      </View>


      {/* ================= ASSETS CONTENT ================= */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* <EquipmentCard
          image={require('../../../../assets/images/powder-dosing.png')}
          title="Powder Dosing"
          subtitle="Stepper Motor (P1)"
          startTime="09:00:00 AM"
          elapsedTime="00:02:35"
          nextOffTime="09:05:00 AM"
          progress="70%"
          cycleTime="00:05:00"
          onPress={() => router.push('/coagulant/automatic/asset-detail')}
        />

        <EquipmentCard
          image={require('../../../../assets/images/water-dosing.png')}
          title="Water Dosing"
          subtitle="Stepper Motor (P2)"
          startTime="09:00:30 AM"
          elapsedTime="00:02:05"
          nextOffTime="09:06:30 AM"
          progress="65%"
          cycleTime="00:06:00"
          onPress={() => router.push('/coagulant/automatic/asset-detail')}
        />

     <EquipmentCard
  image={require('../../../../assets/images/transfer-pump.png')}
  title="Transfer / Mix Pump"
  subtitle="Pump (P3)"
  startTime="09:01:00 AM"
  elapsedTime="00:01:35"
  nextOffTime="09:11:00 AM"
  progress="55%"
  cycleTime="00:10:00"
  onPress={() => router.push('/coagulant/automatic/asset-detail')}
/> */}
<EquipmentCard
  image={require('../../../../assets/images/powder-dosing.png')}
  title="Power Dosing"
  subtitle="Stepper Motor (P1)"
  startTime="09:00:00 AM"
  elapsedTime="00:02:35"
  nextOffTime="09:05:00 AM"
  progress="70%"
  cycleTime="00:05:00"
  onPress={() =>
    router.push('/coagulant/automatic/asset-detail?asset=P1' as any)
  }
/>

<EquipmentCard
  image={require('../../../../assets/images/water-dosing.png')}
  title="Water Dosing"
  subtitle="Stepper Motor (P2)"
  startTime="09:00:30 AM"
  elapsedTime="00:02:05"
  nextOffTime="09:06:30 AM"
  progress="65%"
  cycleTime="00:06:00"
  onPress={() =>
    router.push('/coagulant/automatic/asset-detail?asset=P2' as any)
  }
/>

<EquipmentCard
  image={require('../../../../assets/images/transfer-pump.png')}
  title="Transfer / Mix Pump"
  subtitle="Pump (P3)"
  startTime="09:01:00 AM"
  elapsedTime="00:01:35"
  nextOffTime="09:11:00 AM"
  progress="55%"
  cycleTime="00:10:00"
  onPress={() =>
    router.push('/coagulant/automatic/asset-detail?asset=P3' as any)
  }
/>
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


  /* ================= HEADER ================= */

  header: {
    height: 100,
    paddingTop: 40,

    backgroundColor: '#0753A6',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 14,
  },

  headerButton: {
    width: 42,
    height: 42,

    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitleContainer: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    color: '#FFFFFF',

    fontSize: 18,
    fontWeight: '700',
  },


  /* ================= CONTENT ================= */

  content: {
    padding: 15,

    // Extra space so last card is not hidden behind tab bar
    paddingBottom: 90,
  },

});
