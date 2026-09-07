// // // import { Tabs } from 'expo-router';
// // // import { MaterialCommunityIcons } from '@expo/vector-icons';
// // // import { StyleSheet } from 'react-native';

// // // export default function TabLayout() {
// // //   return (
// // //     <Tabs
// // //       screenOptions={{
// // //         headerShown: false,
// // //         tabBarActiveTintColor: '#208AEF',
// // //         tabBarInactiveTintColor: '#8E8E93',
// // //         tabBarStyle: {
// // //           backgroundColor: '#FFFFFF',
// // //           borderTopWidth: 1,
// // //           borderTopColor: '#E5E5EA',
// // //           height: 60,
// // //           paddingBottom: 8,
// // //           paddingTop: 8,
// // //         },
// // //         headerStyle: {
// // //           backgroundColor: '#FFFFFF',
// // //         },
// // //         headerTitleStyle: {
// // //           fontWeight: '600',
// // //         },
// // //         headerTitleAlign: 'center',
// // //       }}>
// // //       {/* ================= DASHBOARD ================= */}
// // //       <Tabs.Screen
// // //         name="dashboard"
// // //         options={{
// // //           title: 'Dashboard',
// // //           tabBarIcon: ({ color, size }) => (
// // //             <MaterialCommunityIcons
// // //               name="home-outline"
// // //               size={size}
// // //               color={isWastewater ? '#208AEF' : color} // force active color
// // //             />
// // //           ),
// // //           // When user presses the Dashboard tab
// // //           tabBarButton: (props) => (
// // //             <Tabs.Screen.TabBarButton
// // //               {...props}
// // //               onPress={() => {
// // //                 router.push('/inlet/wastewater');
// // //               }}
// // //             />
// // //           ),
// // //         }}
// // //       />
// // //       <Tabs.Screen
// // //         name="control"
// // //         options={{
// // //           title: 'Control',
// // //           tabBarIcon: ({ color, size }) => (
// // //             <MaterialCommunityIcons name="tune" size={size} color={color} />
// // //           ),
// // //         }}
// // //       />
// // //       <Tabs.Screen
// // //         name="timing"
// // //         options={{
// // //           title: 'Timing',
// // //           tabBarIcon: ({ color, size }) => (
// // //             <MaterialCommunityIcons name="clock-outline" size={size} color={color} />
// // //           ),
// // //         }}
// // //       />
// // //       <Tabs.Screen
// // //         name="history"
// // //         options={{
// // //           title: 'History',
// // //           tabBarIcon: ({ color, size }) => (
// // //             <MaterialCommunityIcons name="text-box-outline" size={size} color={color} />
// // //           ),
// // //         }}
// // //       />
// // //     <Tabs.Screen
// // //         name="settings"
// // //         options={{
// // //           title: 'Settings',
// // //           href: '/inlet/wastewater/settings',
// // //           tabBarIcon: ({ color, size }) => (
// // //             <MaterialCommunityIcons name="cog-outline" size={size} color={color} />
// // //           ),
// // //         }}
// // //       />
// // //       <Tabs.Screen
// // //         name="inletroutes/inletpump"
// // //         options={{
// // //           href: null,
// // //           headerShown: false,
// // //         }}
// // //       />
// // //       <Tabs.Screen
// // //         name="inletroutes/contactorsensor"
// // //         options={{
// // //           href: null,
// // //           headerShown: false,
// // //         }}
// // //       />
// // //       <Tabs.Screen
// // //         name="inletroutes/solenoid"
// // //         options={{
// // //           href: null,
// // //           headerShown: false,
// // //         }}
// // //       />
// // //     </Tabs>
// // //   );
// // // }

// // import { Tabs } from 'expo-router';
// // import { MaterialCommunityIcons } from '@expo/vector-icons';

// // export default function WastewaterLayout() {
// //   return (
// //     <Tabs
// //       screenOptions={{
// //         headerShown: false,
// //         tabBarActiveTintColor: '#208AEF',
// //         tabBarInactiveTintColor: '#8E8E93',
// //         tabBarStyle: {
// //           backgroundColor: '#FFFFFF',
// //           borderTopWidth: 1,
// //           borderTopColor: '#E5E5EA',
// //           height: 60,
// //           paddingBottom: 8,
// //           paddingTop: 8,
// //         },
// //       }}
// //     >
// //       {/* Dashboard → index.tsx */}
// //       <Tabs.Screen
// //         name="index"
// //         options={{
// //           title: 'Dashboard',
// //           tabBarIcon: ({ color, size }) => (
// //             <MaterialCommunityIcons name="home-outline" size={size} color={color} />
// //           ),
// //         }}
// //       />

// //       {/* Control */}
// //       <Tabs.Screen
// //         name="control"
// //         options={{
// //           title: 'Control',
// //           tabBarIcon: ({ color, size }) => (
// //             <MaterialCommunityIcons name="tune" size={size} color={color} />
// //           ),
// //         }}
// //       />

// //       {/* Timing */}
// //       <Tabs.Screen
// //         name="timing"
// //         options={{
// //           title: 'Timing',
// //           tabBarIcon: ({ color, size }) => (
// //             <MaterialCommunityIcons name="clock-outline" size={size} color={color} />
// //           ),
// //         }}
// //       />

// //       {/* History */}
// //       <Tabs.Screen
// //         name="history"
// //         options={{
// //           title: 'History',
// //           tabBarIcon: ({ color, size }) => (
// //             <MaterialCommunityIcons name="text-box-outline" size={size} color={color} />
// //           ),
// //         }}
// //       />

// //       {/* Settings */}
// //       <Tabs.Screen
// //         name="settings"
// //         options={{
// //           title: 'Settings',
// //           tabBarIcon: ({ color, size }) => (
// //             <MaterialCommunityIcons name="cog-outline" size={size} color={color} />
// //           ),
// //         }}
// //       />

// //       {/* Hide device detail screens from tab bar */}
// //       <Tabs.Screen
// //         name="inletroutes/inletpump"
// //         options={{ href: null }}
// //       />
// //       <Tabs.Screen
// //         name="inletroutes/contactorsensor"
// //         options={{ href: null }}
// //       />
// //       <Tabs.Screen
// //         name="inletroutes/solenoid"
// //         options={{ href: null }}
// //       />
// //       {/* Hide all other screens */}
// //       <Tabs.Screen name="control" options={{ href: null }} />
// //       <Tabs.Screen name="timing" options={{ href: null }} />
// //       <Tabs.Screen name="history" options={{ href: null }} />
// //       <Tabs.Screen name="inletroutes/inletpump" options={{ href: null }} />
// //       <Tabs.Screen name="inletroutes/contactorsensor" options={{ href: null }} />
// //       <Tabs.Screen name="inletroutes/solenoid" options={{ href: null }} />
// //     </Tabs>
// //   );
// // }

// // import { Tabs } from 'expo-router';
// // import { MaterialCommunityIcons } from '@expo/vector-icons';

// // export default function WastewaterLayout() {
// //   return (
// //     <Tabs
// //       screenOptions={{
// //         headerShown: false,
// //         tabBarActiveTintColor: '#208AEF',
// //         tabBarInactiveTintColor: '#8E8E93',
// //         tabBarStyle: {
// //           backgroundColor: '#FFFFFF',
// //           borderTopWidth: 1,
// //           borderTopColor: '#E5E5EA',
// //           height: 60,
// //           paddingBottom: 8,
// //           paddingTop: 8,
// //         },
// //       }}
// //     >
// //       {/* Only these two should appear in the tab bar */}
// //       <Tabs.Screen
// //         name="index"
// //         options={{
// //           title: 'Dashboard',
// //           tabBarIcon: ({ color, size }) => (
// //             <MaterialCommunityIcons name="home-outline" size={size} color={color} />
// //           ),
// //         }}
// //       />

// //       <Tabs.Screen
// //         name="settings"
// //         options={{
// //           title: 'Settings',
// //           tabBarIcon: ({ color, size }) => (
// //             <MaterialCommunityIcons name="cog-outline" size={size} color={color} />
// //           ),
// //         }}
// //       />

// //       {/* Hide everything else */}
// //       <Tabs.Screen name="control" options={{ href: null }} />
// //       <Tabs.Screen name="timing" options={{ href: null }} />
// //       <Tabs.Screen name="history" options={{ href: null }} />
// //       <Tabs.Screen name="inletroutes" options={{ href: null }} />
// //     </Tabs>
// //   );
// // }

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
//       {/* Dashboard */}
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Dashboard',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Control */}
//       <Tabs.Screen
//         name="control"
//         options={{
//           title: 'Control',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="tune" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Timing */}
//       <Tabs.Screen
//         name="timing"
//         options={{
//           title: 'Timing',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="clock-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* History */}
//       <Tabs.Screen
//         name="history"
//         options={{
//           title: 'History',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="text-box-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Settings */}
//       <Tabs.Screen
//         name="settings"
//         options={{
//           title: 'Settings',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="cog-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Hide device detail screens */}
//       <Tabs.Screen name="inletroutes" options={{ href: null }} />
//     </Tabs>
//   );
// }

// import { Tabs, router } from 'expo-router';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native';

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
//       {/* Dashboard → goes to Clean Water Dashboard */}
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Dashboard',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home-outline" size={size} color={color} />
//           ),
//           tabBarButton: (props) => (
//             <TouchableOpacity
//               {...props}
//               onPress={() => router.push('/inlet/cleanwater')}
//               style={props.style}
//             />
//           ),
//         }}
//       />

//       {/* Control */}
//       <Tabs.Screen
//         name="control"
//         options={{
//           title: 'Control',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="tune" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Timing */}
//       <Tabs.Screen
//         name="timing"
//         options={{
//           title: 'Timing',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="clock-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* History */}
//       <Tabs.Screen
//         name="history"
//         options={{
//           title: 'History',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="text-box-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Settings → goes to Clean Water Settings */}
//       <Tabs.Screen
//         name="settings"
//         options={{
//           title: 'Settings',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="cog-outline" size={size} color={color} />
//           ),
//           tabBarButton: (props) => (
//             <TouchableOpacity
//               {...props}
//               onPress={() => router.push('/inlet/cleanwater/settings')}
//               style={props.style}
//             />
//           ),
//         }}
//       />

//       {/* Hide device screens */}
//       <Tabs.Screen name="inletroutes" options={{ href: null }} />
//     </Tabs>
//   );
// }

// import { Tabs, router } from 'expo-router';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { TouchableOpacity, View } from 'react-native';

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
//       {/* Dashboard → goes to Clean Water */}
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Dashboard',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home-outline" size={size} color={color} />
//           ),
//           tabBarButton: (props) => (
//             <TouchableOpacity
//               onPress={() => router.push('/inlet/cleanwater')}
//               style={props.style}
//               activeOpacity={0.7}
//             >
//               {props.children}
//             </TouchableOpacity>
//           ),
//         }}
//       />

//       {/* Control */}
//       <Tabs.Screen
//         name="control"
//         options={{
//           title: 'Control',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="tune" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Timing */}
//       <Tabs.Screen
//         name="timing"
//         options={{
//           title: 'Timing',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="clock-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* History */}
//       <Tabs.Screen
//         name="history"
//         options={{
//           title: 'History',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="text-box-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Settings → goes to Clean Water Settings */}
//       <Tabs.Screen
//         name="settings"
//         options={{
//           title: 'Settings',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="cog-outline" size={size} color={color} />
//           ),
//           tabBarButton: (props) => (
//             <TouchableOpacity
//               onPress={() => router.push('/inlet/cleanwater/settings')}
//               style={props.style}
//               activeOpacity={0.7}
//             >
//               {props.children}
//             </TouchableOpacity>
//           ),
//         }}
//       />

//       {/* Hide device screens */}
//       <Tabs.Screen name="inletroutes" options={{ href: null }} />
//     </Tabs>
//   );
// }

import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CleanwaterLayout() {
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
          height: 60,
          paddingBottom: 8,
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