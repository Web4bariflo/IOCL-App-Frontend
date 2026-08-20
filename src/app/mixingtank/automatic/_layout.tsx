import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter, Slot } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MixingAutomaticLayout() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>

      {/* Hide Expo Router default header */}
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      {/* Render child screens */}
      <Slot />

      {/* ================= BOTTOM NAV ================= */}
      <View style={styles.bottomNav}>

        {/* DASHBOARD */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/(tabs)/dashboard')}
        >
          <Ionicons
            name="speedometer-outline"
            size={24}
            color="#1769AA"
          />
          <Text style={styles.navTextActive}>Dashboard</Text>
        </TouchableOpacity>

        {/* MIXING TANK */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/mixingtank/automatic')}
        >
          <Ionicons
            name="water-outline"
            size={24}
            color="#6B7280"
          />
          <Text style={styles.navText}>Mixing</Text>
        </TouchableOpacity>

        {/* ALARMS */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/(tabs)/control')}
        >
          <Ionicons
            name="alert-circle-outline"
            size={24}
            color="#6B7280"
          />
          <Text style={styles.navText}>Alarms</Text>
        </TouchableOpacity>

        {/* REPORTS */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/(tabs)/settings')}
        >
          <Ionicons
            name="bar-chart-outline"
            size={24}
            color="#6B7280"
          />
          <Text style={styles.navText}>Reports</Text>
        </TouchableOpacity>

        {/* MORE */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/(tabs)/settings')}
        >
          <Ionicons
            name="menu-outline"
            size={24}
            color="#6B7280"
          />
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    height: 70,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
  },

  navText: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 4,
  },

  navTextActive: {
    fontSize: 10,
    color: '#1769AA',
    marginTop: 4,
    fontWeight: '700',
  },
});