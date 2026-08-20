import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ImageSourcePropType } from 'react-native';

interface EquipmentCardProps {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  startTime: string;
  elapsedTime: string;
  nextOffTime: string;
  progress: string;
  cycleTime: string;
  onPress?: () => void;
}

export default function EquipmentCard({
  image,
  title,
  subtitle,
  startTime,
  elapsedTime,
  nextOffTime,
  progress,
  cycleTime,
  onPress,
}: EquipmentCardProps) {
  return (
    <TouchableOpacity
      style={styles.statusCard}
      activeOpacity={0.8}
      onPress={onPress}
    >

      {/* ================= CARD HEADER ================= */}
      <View style={styles.statusHeader}>

        {/* Equipment Image */}
        <View style={styles.statusIconContainer}>
          <Image
            source={image}
            style={styles.statusImage}
            resizeMode="contain"
          />
        </View>

        {/* Title and Subtitle */}
        <View style={styles.statusTitleContainer}>

          <Text style={styles.statusTitle}>
            {title}
          </Text>

          <Text style={styles.statusSubtitle}>
            {subtitle}
          </Text>

        </View>

        {/* Running + Arrow */}
        <View style={styles.statusRightContainer}>

          {/* Running Badge */}
          <View style={styles.runningContainer}>
            <Text style={styles.runningText}>
              RUNNING
            </Text>
          </View>

          {/* Separate Arrow */}
          <View style={styles.arrowContainer}>
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#777777"
            />
          </View>

        </View>

      </View>


      {/* ================= TIME INFORMATION ================= */}
      <View style={styles.timeRow}>

        {/* Start Time */}
        <View style={styles.timeItem}>
          <Text style={styles.timeLabel}>
            Start Time
          </Text>

          <Text style={styles.timeValue}>
            {startTime}
          </Text>
        </View>


        {/* Elapsed Time */}
        <View style={styles.timeItem}>
          <Text style={styles.timeLabel}>
            Elapsed Time
          </Text>

          <Text style={styles.timeValue}>
            {elapsedTime}
          </Text>
        </View>


        {/* Next Off Time */}
        <View style={styles.timeItem}>
          <Text style={styles.timeLabel}>
            Next Off Time
          </Text>

          <Text style={styles.timeValue}>
            {nextOffTime}
          </Text>
        </View>

      </View>


      {/* ================= PROGRESS BAR ================= */}
      <View style={styles.progressBackground}>

        <View
          style={[
            styles.progressFill,
            {
              width: progress as any,
            },
          ]}
        />

      </View>


      {/* ================= CYCLE TIME ================= */}
      <Text style={styles.cycleText}>
        Cycle Time (On Duration):{' '}

        <Text style={styles.cycleValue}>
          {cycleTime}
        </Text>
      </Text>

    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({

  /* ================= CARD ================= */

  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,

    borderWidth: 1,
    borderColor: '#E8E8E8',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 2,
  },


  /* ================= HEADER ================= */

  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },


  /* ================= IMAGE ================= */

  statusIconContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  statusImage: {
    width: 48,
    height: 48,
  },


  /* ================= TITLE ================= */

  statusTitleContainer: {
    flex: 1,
  },

  statusTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#222222',
  },

  statusSubtitle: {
    fontSize: 10,
    color: '#777777',
    marginTop: 2,
  },


  /* ================= RIGHT SIDE ================= */

  statusRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },


  /* ================= RUNNING ================= */

  runningContainer: {
    backgroundColor: '#D8F6E3',
    borderRadius: 15,

    paddingHorizontal: 10,
    paddingVertical: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },

  runningText: {
    color: '#22A45A',
    fontSize: 9,
    fontWeight: '800',
  },


  /* ================= ARROW ================= */

  arrowContainer: {
    width: 28,
    height: 32,

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 4,
  },



/* ================= TIME ================= */

timeRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginTop: 17,
  marginBottom: 13,
  gap: 40, 
},

timeItem: {
  flex: 1,
  alignItems: 'center',
},

timeLabel: {
  fontSize: 9,
  color: '#777777',
  marginBottom: 3,
  textAlign: 'center',
},

timeValue: {
  fontSize: 10,
  color: '#222222',
  fontWeight: '600',
  textAlign: 'center',
},


  /* ================= PROGRESS ================= */

  progressBackground: {
    height: 5,
    borderRadius: 5,

    backgroundColor: '#E5E7EB',

    overflow: 'hidden',
  },

  progressFill: {
    height: 5,
    borderRadius: 5,

    backgroundColor: '#19B866',
  },


  /* ================= CYCLE ================= */

  cycleText: {
    fontSize: 9,
    color: '#555555',
    marginTop: 7,
  },

  cycleValue: {
    fontWeight: '700',
    color: '#333333',
  },

});