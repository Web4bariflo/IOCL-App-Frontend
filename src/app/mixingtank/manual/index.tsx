import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function ManualMixingTank() {
  const router = useRouter();

  return (
    <View style={styles.screen}>

      {/* =====================================================
          HEADER
      ===================================================== */}
      <View style={styles.header}>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons
            name="arrow-back"
            size={26}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        {/* Header Title */}
        <Text style={styles.headerTitle}>
          Mixing Tank
        </Text>

        {/* Settings */}
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => router.push('/(tabs)/settings')}
          activeOpacity={0.7}
        >
          <Ionicons
            name="settings"
            size={24}
            color="#FFFFFF"
          />
        </TouchableOpacity>

      </View>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* =====================================================
            MIXING TANK IMAGE
        ===================================================== */}
        <View style={styles.tankImageContainer}>

          <Image
            source={require('../../../../assets/images/mixing-tank.png')}
            style={styles.tankImage}
            resizeMode="contain"
          />

        </View>


        {/* =====================================================
            MIXING TANK OVERVIEW
        ===================================================== */}
        <Text style={styles.overviewTitle}>
          Mixing Tank Overview
        </Text>


        {/* =====================================================
            RUNNING STAGE BADGE
        ===================================================== */}
        <View style={styles.runningBadge}>
          <Text style={styles.runningBadgeText}>
            Running - Stage 1
          </Text>
        </View>


        {/* =====================================================
            STAGE 1 CARD
        ===================================================== */}
        <TouchableOpacity
  style={styles.stageCard}
  activeOpacity={0.8}
  onPress={() => router.push('/mixingtank/manual/stage1')}
>

  <View style={styles.stageHeader}>

    <View style={styles.stageDetails}>

      <Text style={styles.stageTitle}>
        Stage 1
      </Text>

      <Text style={styles.stageDescription}>
        After Coagulant Entry
      </Text>

    </View>

    {/* Running */}
    <View style={styles.runningStatus}>
      <Text style={styles.runningStatusText}>
        Running
      </Text>
    </View>

  </View>


  {/* Time */}
  <View style={styles.timeRow}>

    <Ionicons
      name="time-outline"
      size={18}
      color="#4B5563"
    />

    <Text style={styles.timeText}>
      12 min
    </Text>

    <Text style={styles.editableText}>
      (Editable)
    </Text>

  </View>

</TouchableOpacity>


        {/* =====================================================
            STAGE 2 CARD
        ===================================================== */}
       <TouchableOpacity
  style={styles.stageCard}
  activeOpacity={0.8}
  onPress={() => router.push('/mixingtank/manual/stage2')}
>

  <View style={styles.stageHeader}>

    <View style={styles.stageDetails}>

      <Text style={styles.stageTitle}>
        Stage 2
      </Text>

      <Text style={styles.stageDescription}>
        After Flocculant Entry
      </Text>

    </View>

    {/* Pending */}
    <View style={styles.pendingStatus}>
      <Text style={styles.pendingStatusText}>
        Pending
      </Text>
    </View>

  </View>


  {/* Time */}
  <View style={styles.timeRow}>

    <Ionicons
      name="time-outline"
      size={18}
      color="#4B5563"
    />

    <Text style={styles.timeText}>
      45 min
    </Text>

    <Text style={styles.editableText}>
      (Editable)
    </Text>

  </View>

</TouchableOpacity>


        {/* =====================================================
            MOTOR CARD
        ===================================================== */}
        <TouchableOpacity
          style={styles.motorCard}
          activeOpacity={0.8}
        >

          {/* Motor Icon */}
          <View style={styles.motorIcon}>

            <Ionicons
              name="disc-outline"
              size={30}
              color="#4B5563"
            />

          </View>


          {/* Motor Information */}
          <View style={styles.motorInfo}>

            <Text style={styles.motorTitle}>
              Stepper/Cylinder Motor 1
            </Text>

            <Text style={styles.motorStatus}>
              Motor Status:{' '}
              <Text style={styles.motorOn}>
                ON
              </Text>
            </Text>

          </View>


          {/* Arrow */}
          <Ionicons
            name="chevron-forward"
            size={24}
            color="#111827"
          />

        </TouchableOpacity>


        {/* =====================================================
            CURRENT STAGE PROGRESS
        ===================================================== */}
        <View style={styles.progressCard}>

          <Text style={styles.progressTitle}>
            Current Stage Progress
          </Text>


          <View style={styles.progressContent}>

            {/* =================================================
                PROGRESS CIRCLE
            ================================================= */}
            <View style={styles.progressCircleContainer}>

              <View style={styles.progressCircle}>

                <View style={styles.progressCircleInner}>
                  <Text style={styles.progressPercent}>
                    35%
                  </Text>
                </View>

              </View>

            </View>


            {/* Divider */}
            <View style={styles.progressDivider} />


            {/* =================================================
                ELAPSED
            ================================================= */}
            <View style={styles.progressItem}>

              <Text style={styles.progressLabel}>
                Elapsed
              </Text>

              <Text style={styles.progressValue}>
                04:12
              </Text>

            </View>


            {/* Divider */}
            <View style={styles.progressDivider} />


            {/* =================================================
                REMAINING
            ================================================= */}
            <View style={styles.progressItem}>

              <Text style={styles.progressLabel}>
                Remaining
              </Text>

              <Text style={styles.progressValue}>
                07:48
              </Text>

            </View>

          </View>

        </View>


        {/* Bottom spacing so last card isn't too close */}
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
    backgroundColor: '#061D41',
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
     SCROLL VIEW
  ========================================================== */

  scrollView: {
    flex: 1,
    backgroundColor: '#061D41',
  },

  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },


  /* ==========================================================
     TANK IMAGE
  ========================================================== */

  tankImageContainer: {
    width: '100%',
    height: 170,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 0,
  },

  tankImage: {
    width: width * 0.75,
    height: 165,
  },


  /* ==========================================================
     OVERVIEW TITLE
  ========================================================== */

  overviewTitle: {
    color: '#FFFFFF',

    fontSize: 18,
    fontWeight: '700',

    textAlign: 'left',

    marginLeft: 72,
    marginTop: 0,
  },


  /* ==========================================================
     RUNNING BADGE
  ========================================================== */

  runningBadge: {
    alignSelf: 'center',

    backgroundColor: '#E8F7E9',

    borderRadius: 6,

    paddingHorizontal: 10,
    paddingVertical: 4,

    marginTop: 7,
    marginBottom: 9,
  },

  runningBadgeText: {
    color: '#20863A',

    fontSize: 14,
    fontWeight: '600',
  },


  /* ==========================================================
     STAGE CARD
  ========================================================== */

  stageCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 9,

    paddingHorizontal: 16,
    paddingVertical: 12,

    marginBottom: 7,

    minHeight: 91,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,

    elevation: 2,
  },

  stageHeader: {
    flexDirection: 'row',

    alignItems: 'flex-start',

    justifyContent: 'space-between',
  },

  stageDetails: {
    flex: 1,
  },

  stageTitle: {
    color: '#111827',

    fontSize: 17,
    fontWeight: '700',
  },

  stageDescription: {
    color: '#4B5563',

    fontSize: 14,

    marginTop: 2,
  },


  /* ==========================================================
     RUNNING STATUS
  ========================================================== */

  runningStatus: {
    backgroundColor: '#EAF8ED',

    borderRadius: 15,

    paddingHorizontal: 11,
    paddingVertical: 6,

    marginLeft: 8,
  },

  runningStatusText: {
    color: '#24943C',

    fontSize: 13,
    fontWeight: '500',
  },


  /* ==========================================================
     PENDING STATUS
  ========================================================== */

  pendingStatus: {
    backgroundColor: '#F1F3F5',

    borderRadius: 15,

    paddingHorizontal: 11,
    paddingVertical: 6,

    marginLeft: 8,
  },

  pendingStatusText: {
    color: '#6B7280',

    fontSize: 13,
    fontWeight: '500',
  },


  /* ==========================================================
     TIME
  ========================================================== */

  timeRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 7,
  },

  timeText: {
    color: '#374151',

    fontSize: 15,

    marginLeft: 7,
  },

  editableText: {
    color: '#6B7280',

    fontSize: 12,

    marginLeft: 5,
  },


  /* ==========================================================
     MOTOR CARD
  ========================================================== */

  motorCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 9,

    minHeight: 70,

    paddingHorizontal: 15,

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 7,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,

    elevation: 2,
  },

  motorIcon: {
    width: 40,
    height: 40,

    borderRadius: 20,

    backgroundColor: '#E5E7EB',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  motorInfo: {
    flex: 1,
  },

  motorTitle: {
    color: '#374151',

    fontSize: 15,

    fontWeight: '500',
  },

  motorStatus: {
    color: '#6B7280',

    fontSize: 12,

    marginTop: 3,
  },

  motorOn: {
    color: '#26923D',

    fontWeight: '600',
  },


  /* ==========================================================
     PROGRESS CARD
  ========================================================== */

  progressCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 9,

    paddingHorizontal: 15,
    paddingVertical: 11,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,

    elevation: 2,
  },

  progressTitle: {
    color: '#374151',

    fontSize: 14,

    fontWeight: '500',

    marginBottom: 5,
  },

  progressContent: {
    flexDirection: 'row',

    alignItems: 'center',

    minHeight: 78,
  },


  /* ==========================================================
     PROGRESS CIRCLE
  ========================================================== */

  progressCircleContainer: {
    width: 76,
    height: 76,

    alignItems: 'center',
    justifyContent: 'center',
  },

  progressCircle: {
    width: 68,
    height: 68,

    borderRadius: 34,

    borderWidth: 4,

    borderColor: '#E2EEE9',

    borderTopColor: '#219653',
    borderRightColor: '#219653',

    alignItems: 'center',
    justifyContent: 'center',

    transform: [
      {
        rotate: '-45deg',
      },
    ],
  },

  progressCircleInner: {
    alignItems: 'center',
    justifyContent: 'center',

    transform: [
      {
        rotate: '45deg',
      },
    ],
  },

  progressPercent: {
    color: '#374151',

    fontSize: 16,

    fontWeight: '500',
  },


  /* ==========================================================
     PROGRESS DIVIDER
  ========================================================== */

  progressDivider: {
    width: 1,

    height: 52,

    backgroundColor: '#E5E7EB',

    marginHorizontal: 8,
  },


  /* ==========================================================
     PROGRESS INFORMATION
  ========================================================== */

  progressItem: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  progressLabel: {
    color: '#6B7280',

    fontSize: 12,

    marginBottom: 3,
  },

  progressValue: {
    color: '#374151',

    fontSize: 18,

    fontWeight: '500',
  },


  /* ==========================================================
     BOTTOM SPACE
  ========================================================== */

  bottomSpace: {
    height: 10,
  },

});