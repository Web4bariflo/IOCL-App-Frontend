import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Slot, usePathname, useRouter } from 'expo-router';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CoagulantLayout() {
  const router = useRouter();
  const pathname = usePathname();

  const isSettings =
    pathname.includes('/settings');

  return (
    <View style={styles.container}>

      {/* ================= PAGE CONTENT ================= */}
      <View style={styles.content}>
        <Slot />
      </View>

      {/* ================= BOTTOM BAR ================= */}
      <SafeAreaView
        edges={['bottom']}
        style={styles.bottomSafeArea}
      >
        <View style={styles.bottomBar}>

          {/* DASHBOARD */}
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => router.push('/coagulant/dosing')}
          >
            <MaterialCommunityIcons
              name="home-outline"
              size={25}
              color="#64748B"
            />

            <Text style={styles.bottomText}>
              Dashboard
            </Text>
          </TouchableOpacity>

          {/* CONTROL */}
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => {
              // Add your Control route here
            }}
          >
            <MaterialCommunityIcons
              name="tune-variant"
              size={25}
              color="#64748B"
            />

            <Text style={styles.bottomText}>
              Control
            </Text>
          </TouchableOpacity>

          {/* TIMING */}
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => {
              // Add your Timing route here
            }}
          >
            <MaterialCommunityIcons
              name="clock-outline"
              size={25}
              color="#64748B"
            />

            <Text style={styles.bottomText}>
              Timing
            </Text>
          </TouchableOpacity>

          {/* ALARMS */}
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => {
              // Add your Alarms route here
            }}
          >
            <MaterialCommunityIcons
              name="bell-outline"
              size={25}
              color="#64748B"
            />

            <Text style={styles.bottomText}>
              Alarms
            </Text>
          </TouchableOpacity>

          {/* SETTINGS */}
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => {
              if (pathname.includes('/mixing')) {
                router.push('/coagulant/mixing/settings');
              } else {
                router.push('/coagulant/dosing/settings');
              }
            }}
          >
            <MaterialCommunityIcons
              name="cog-outline"
              size={25}
              color={isSettings ? '#009688' : '#64748B'}
            />

            <Text
              style={[
                styles.bottomText,
                isSettings && styles.activeBottomText,
              ]}
            >
              Settings
            </Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },

  content: {
    flex: 1,
    paddingBottom: 70,
  },

  bottomSafeArea: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },

  bottomBar: {
    height: 62,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  bottomItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomText: {
    fontSize: 10,
    color: '#64748B',
    marginTop: 3,
  },

  activeBottomText: {
    color: '#009688',
    fontWeight: '600',
  },
});