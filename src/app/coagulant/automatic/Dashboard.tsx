import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';

import EquipmentCard from './EquipmentCard';

export default function CoagulantAutomaticScreen() {
  return (
    <View style={styles.container}>

      {/* ================= HEADER ================= */}

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
            Coagulant Dosing
          </Text>

          <Text style={styles.headerSubtitle}>
            Automatic Mode
          </Text>

        </View>


        {/* Settings Button */}
        <TouchableOpacity
          style={styles.headerButton}
        >
          <MaterialCommunityIcons
            name="cog-outline"
            size={24}
            color="#FFFFFF"
          />
        </TouchableOpacity>

      </View>


      {/* ================= CONTENT ================= */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* AUTO MODE */}

        <View style={styles.autoModeCard}>

          <View style={styles.autoModeBadge}>
            <Text style={styles.autoModeText}>
              AUTO MODE
            </Text>
          </View>

          <Text style={styles.autoModeDescription}>
            System is running automatically
          </Text>

          <View style={styles.greenDot} />

        </View>


        {/* ================= DOSING FLOW ================= */}

        <View style={styles.flowContainer}>

          {/* Powder Dosing */}

          <View style={styles.flowItem}>

            <Image
              source={require('../../../../assets/images/powder-dosing.png')}
              style={styles.flowImage}
              resizeMode="contain"
            />

            <Text style={styles.flowTitle}>
              Powder Dosing
            </Text>

            <Text style={styles.flowSubtitle}>
              Stepper Motor (P1)
            </Text>

          </View>


          {/* Arrow */}

          <View style={styles.arrowContainer}>

            <MaterialCommunityIcons
              name="arrow-right"
              size={26}
              color="#3278B8"
            />

          </View>


          {/* Water Dosing */}

          <View style={styles.flowItem}>

            <Image
              source={require('../../../../assets/images/water-dosing.png')}
              style={styles.flowImage}
              resizeMode="contain"
            />

            <Text style={styles.flowTitle}>
              Water Dosing
            </Text>

            <Text style={styles.flowSubtitle}>
              Stepper Motor (P2)
            </Text>

          </View>


          {/* Arrow */}

          <View style={styles.arrowContainer}>

            <MaterialCommunityIcons
              name="arrow-right"
              size={26}
              color="#3278B8"
            />

          </View>


          {/* Transfer Pump */}

          <View style={styles.flowItem}>

            <Image
              source={require('../../../../assets/images/transfer-pump.png')}
              style={styles.flowImage}
              resizeMode="contain"
            />

            <Text style={styles.flowTitle}>
              Transfer Pump
            </Text>

            <Text style={styles.flowSubtitle}>
              Pump (P3)
            </Text>

          </View>

        </View>


        {/* ================= SYSTEM STATUS ================= */}

        <Text style={styles.sectionTitle}>
          SYSTEM STATUS
        </Text>


        {/* Powder */}

        <EquipmentCard
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


        {/* Water */}

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


        {/* Transfer Pump */}

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
        />

      </ScrollView>

    </View>
  );
}

// /* ================================================= */
// /* BOTTOM NAV ITEM */
// /* ================================================= */

// function BottomItem({
//   icon,
//   label,
//   active = false,
// }: any) {

//   return (
//     <TouchableOpacity style={styles.bottomItem}>

//       <MaterialCommunityIcons
//         name={icon}
//         size={22}
//         color={active ? '#1769D2' : '#7B8088'}
//       />

//       <Text
//         style={[
//           styles.bottomLabel,
//           active && styles.bottomLabelActive,
//         ]}
//       >
//         {label}
//       </Text>

//     </TouchableOpacity>
//   );
// }


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
    fontSize: 17,
    fontWeight: '700',
  },

  headerSubtitle: {
    color: '#20C56A',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 2,
  },


  /* ================= SCROLL ================= */

  scrollContent: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 25,
  },


  /* ================= AUTO MODE ================= */

  autoModeCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',

    minHeight: 62,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,

    marginBottom: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,

    elevation: 2,
  },

  autoModeBadge: {
    backgroundColor: '#D8F6E3',

    paddingHorizontal: 12,
    paddingVertical: 7,

    borderRadius: 20,
  },

  autoModeText: {
    color: '#22A45A',
    fontSize: 11,
    fontWeight: '800',
  },

  autoModeDescription: {
    flex: 1,

    marginLeft: 10,

    fontSize: 12,
    color: '#555555',
    fontWeight: '500',
  },

  greenDot: {
    width: 10,
    height: 10,

    borderRadius: 5,

    backgroundColor: '#15A85A',
  },


  /* ================= FLOW ================= */

  flowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    width: '100%',

    marginBottom: 25,
  },

  flowItem: {
    width: 82,
    alignItems: 'center',
  },

  flowImage: {
    width: 70,
    height: 70,

    marginBottom: 7,
  },

  arrowContainer: {
    width: 25,
    height: 70,

    alignItems: 'center',
    justifyContent: 'center',
  },

  flowTitle: {
    fontSize: 10,
    fontWeight: '700',

    color: '#333333',

    textAlign: 'center',
  },

  flowSubtitle: {
    fontSize: 9,

    color: '#555555',

    textAlign: 'center',

    marginTop: 3,
  },


  /* ================= SECTION ================= */

  sectionTitle: {
    color: '#1756A2',

    fontSize: 13,
    fontWeight: '800',

    marginBottom: 14,
  },

});
