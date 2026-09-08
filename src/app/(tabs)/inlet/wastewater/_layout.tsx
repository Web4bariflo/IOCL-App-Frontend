// import { Tabs } from 'expo-router';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// export default function WastewaterLayout() {
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
//       }}
//     >
//       <Tabs.Screen
//         name="index"
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
// <Tabs.Screen name="inletroutes/inletpump" options={{ href: null }} />
//        <Tabs.Screen name="inletroutes/contactorsensor" options={{ href: null }} />
//        <Tabs.Screen name="inletroutes/solenoid" options={{ href: null }} />
//       <Tabs.Screen name="inletroutes" options={{ href: null }} />
//     </Tabs>
//   );
// }


import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function WastewaterLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#208AEF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
          height: 60 + insets.bottom,
          paddingBottom: 8 + insets.bottom,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
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

      <Tabs.Screen name="inletroutes/inletpump" options={{ href: null }} />
      <Tabs.Screen name="inletroutes/contactorsensor" options={{ href: null }} />
      <Tabs.Screen name="inletroutes/solenoid" options={{ href: null }} />
      <Tabs.Screen name="inletroutes" options={{ href: null }} />
    </Tabs>
  );
}