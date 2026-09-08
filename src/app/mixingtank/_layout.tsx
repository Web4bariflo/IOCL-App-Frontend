
// import { Tabs } from 'expo-router';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// export default function MixingTankLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#159AA3',
//         tabBarInactiveTintColor: '#6B7280',
//         tabBarStyle: {
//           height: 65,
//           paddingBottom: 5,
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" size={24} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="system"
//         options={{
//           title: 'System',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="tune-vertical" size={24} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="history"
//         options={{
//           title: 'History',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="history" size={24} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="alarms"
//         options={{
//           title: 'Alarms',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="bell-outline" size={24} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="settings"
//         options={{
//           title: 'Settings',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="cog-outline" size={24} color={color} />
//           ),
//         }}
//       />

//       {/* These are pages, NOT footer tabs */}

// <Tabs.Screen
//   name="mixingtank-setting/inletpump"
//   options={{
//     href: null,
//   }}
// />

// <Tabs.Screen
//   name="mixingtank-setting/contactorsensor"
//   options={{
//     href: null,
//   }}
// />

// <Tabs.Screen
//   name="mixingtank-setting/solenoid"
//   options={{
//     href: null,
//   }}
// />

// <Tabs.Screen
//   name="mixingtank-setting/steppermotor"
//   options={{
//     href: null,
//   }}
// />
//     </Tabs>
//   );
// }


import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function MixingTankLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#159AA3',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: 65 + insets.bottom,
          paddingBottom: 5 + insets.bottom,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="system"
        options={{
          title: 'System',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="tune-vertical" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="alarms"
        options={{
          title: 'Alarms',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog-outline" size={24} color={color} />
          ),
        }}
      />

      {/* These are pages, NOT footer tabs */}

      <Tabs.Screen
        name="mixingtank-setting/inletpump"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="mixingtank-setting/contactorsensor"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="mixingtank-setting/solenoid"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="mixingtank-setting/steppermotor"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
