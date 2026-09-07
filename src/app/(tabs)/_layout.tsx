// import { Tabs } from 'expo-router';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { StyleSheet } from 'react-native';

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#208AEF',
//         tabBarInactiveTintColor: '#8E8E93',
//         tabBarStyle: {
//           backgroundColor: '#FFFFFF',
//           borderTopWidth: 1,
//           borderTopColor: '#E5E5EA',
//           height: 60,
//           paddingBottom: 8,
//           paddingTop: 8,
//         },
//         headerStyle: {
//           backgroundColor: '#FFFFFF',
//         },
//         headerTitleStyle: {
//           fontWeight: '600',
//         },
//         headerTitleAlign: 'center',
//       }}>
//       <Tabs.Screen
//         name="dashboard"
//         options={{
//           title: 'Dashboard',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="control"
//         options={{
//           title: 'Control',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="tune" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="timing"
//         options={{
//           title: 'Timing',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="clock-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="history"
//         options={{
//           title: 'History',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="text-box-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="settings"
//         options={{
//           title: 'Settings',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="cog-outline" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// import { Tabs } from 'expo-router';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { StyleSheet } from 'react-native';

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#208AEF',
//         tabBarInactiveTintColor: '#8E8E93',
//         tabBarStyle: {
//           backgroundColor: '#FFFFFF',
//           borderTopWidth: 1,
//           borderTopColor: '#E5E5EA',
//           height: 60,
//           paddingBottom: 8,
//           paddingTop: 8,
//         },
//         headerStyle: {
//           backgroundColor: '#FFFFFF',
//         },
//         headerTitleStyle: {
//           fontWeight: '600',
//         },
//         headerTitleAlign: 'center',
//       }}>
//       <Tabs.Screen
//         name="dashboard"
//         options={{
//           title: 'Dashboard',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="control"
//         options={{
//           title: 'Control',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="tune" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="timing"
//         options={{
//           title: 'Timing',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="clock-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="history"
//         options={{
//           title: 'History',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="text-box-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="settings"
//         options={{
//           title: 'Settings',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="cog-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="inlet setting/inletpump"
//         options={{
//           href: null,
//           headerShown: false,
//         }}
//       />
//       <Tabs.Screen
//         name="inlet setting/contactorsensor"
//         options={{
//           href: null,
//           headerShown: false,
//         }}
//       />
//       <Tabs.Screen
//         name="inlet setting/solenoid"
//         options={{
//           href: null,
//           headerShown: false,
//         }}
//       />
//       {/* Hide the whole inlet folder from the main tab bar */}
//       <Tabs.Screen
//         name="inlet"
//         options={{
//           href: null,
//         }}
//       />
//     </Tabs>
    

    
//   );
// }

// import { Tabs } from 'expo-router';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { usePathname } from 'expo-router';

// export default function TabLayout() {
//   const pathname = usePathname();

//   const hideTabBar = pathname.includes('/inlet/wastewater');

//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#208AEF',
//         tabBarInactiveTintColor: '#8E8E93',
//         tabBarStyle: hideTabBar
//           ? { display: 'none' }
//           : {
//               backgroundColor: '#FFFFFF',
//               borderTopWidth: 1,
//               borderTopColor: '#E5E5EA',
//               height: 60,
//               paddingBottom: 8,
//               paddingTop: 8,
//             },
//       }}
//     >
//       <Tabs.Screen
//         name="dashboard"
//         options={{
//           title: 'Dashboard',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="control"
//         options={{
//           title: 'Control',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="tune" size={size} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="timing"
//         options={{
//           title: 'Timing',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="clock-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="history"
//         options={{
//           title: 'History',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="text-box-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="settings"
//         options={{
//           title: 'Settings',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="cog-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Hide these folders from the tab bar */}
//       <Tabs.Screen name="inlet" options={{ href: null }} />
//       <Tabs.Screen name="inlet setting" options={{ href: null }} />
//     </Tabs>
//   );
// }


import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { usePathname } from 'expo-router';

export default function TabLayout() {
  const pathname = usePathname();

  // Hide main tab bar when inside inlet (cleanwater or wastewater)
  const hideTabBar =
    pathname.includes('/inlet/cleanwater') ||
    pathname.includes('/inlet/wastewater');

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#208AEF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: hideTabBar
          ? { display: 'none' } // ← hides the main tab bar
          : {
              backgroundColor: '#FFFFFF',
              borderTopWidth: 1,
              borderTopColor: '#E5E5EA',
              height: 60,
              paddingBottom: 8,
              paddingTop: 8,
            },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="control"
        options={{
          title: 'Control',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tune" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="timing"
        options={{
          title: 'Timing',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clock-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="text-box-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" size={size} color={color} />
          ),
        }}
      />
<Tabs.Screen name="inlet/cleanwater" options={{ href: null }} />
      <Tabs.Screen name="inlet/wastewater" options={{ href: null }} />
      <Tabs.Screen name="inlet setting/solenoid" options={{ href: null }} />
      <Tabs.Screen name="inlet setting/contactorsensor" options={{ href: null }} />
      <Tabs.Screen name="inlet setting/inletpump" options={{ href: null }} />
      {/* Hide inlet folder from main tab bar */}
      <Tabs.Screen name="inlet" options={{ href: null }} />
    </Tabs>
  );
}