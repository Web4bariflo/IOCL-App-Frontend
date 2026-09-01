import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AutomaticLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#1769D2',
        tabBarInactiveTintColor: '#7B8088',

        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 65,
          paddingTop: 5,
          paddingBottom: 5,
        },

        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Assets"
        options={{
          title: 'Assets',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="file-document-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Alarms"
        options={{
          title: 'Alarms',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Trends"
        options={{
          title: 'Trends',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="chart-line"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="menu"
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* These are pages, NOT footer tabs */}
      <Tabs.Screen
        name="asset-detail"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="EquipmentCard"
        options={{
          href: null,
        }}
      />
       <Tabs.Screen
        name="edit-timing"
        options={{
          href: null,
        }}
      />
       <Tabs.Screen
        name="TimeHistory"
        options={{
          href: null,
        }}
      />
       <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
