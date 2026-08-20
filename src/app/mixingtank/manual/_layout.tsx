
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Stack, Slot } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ManualLayout() {
const router = useRouter();

return (
<View style={{ flex: 1 }}>

{/* Hide the default Expo Router header */}
<Stack.Screen
options={{
headerShown: false,
}}
/>

{/* This renders all child screens */}
<Slot />

{/* ================= BOTTOM NAV ================= */}
<View style={styles.bottomNav}>

{/* OVERVIEW */}
<TouchableOpacity
style={styles.navItem}
onPress={() => router.push('/mixingtank/manual')}
>
<Ionicons
name="grid-outline"
size={24}
color="#6B7280"
/>
<Text style={styles.navText}>Overview</Text>
</TouchableOpacity>

{/* MANUAL */}
<TouchableOpacity
style={styles.navItem}
onPress={() => router.push('/mixingtank/manual/manual-mode')}
>
<Ionicons
name="hand-left-outline"
size={24}
color="#6B7280"
/>
<Text style={styles.navText}>Manual</Text>
</TouchableOpacity>

{/* HISTORY */}
<TouchableOpacity
style={styles.navItem}
onPress={() => router.push('/mixingtank/manual/history')}
>
<Ionicons
name="time-outline"
size={24}
color="#6B7280"
/>
<Text style={styles.navText}>History</Text>
</TouchableOpacity>

{/* SETTINGS */}
<TouchableOpacity
style={styles.navItem}
onPress={() => router.push('/(tabs)/settings')}
>
<Ionicons
name="settings-outline"
size={24}
color="#6B7280"
/>
<Text style={styles.navText}>Settings</Text>
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
justifyContent: 'space-around',
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