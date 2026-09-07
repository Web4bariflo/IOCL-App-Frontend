// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useColorScheme } from 'react-native';
// import { useEffect } from 'react';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   useEffect(() => {
//     SplashScreen.hideAsync();
//   }, []);

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="index" options={{ headerShown: false }} />
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen
//     name="SignUp"
//     options={{
//       headerShown: false,
//     }}
//   />
//       </Stack>
//     </ThemeProvider>
//   );
// }

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import { useEffect } from 'react';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
    name="SignUp"
    options={{
      headerShown: false,
    }}
  />
    
        
         <Stack.Screen name="coagulant/dosing" options={{ headerShown: false }} />
         <Stack.Screen name="coagulant/mixing" options={{ headerShown: false }} />
         <Stack.Screen name="coagulant" options={{ headerShown: false }} />
         <Stack.Screen name="flocculation/dosing" options={{ headerShown: false }} />
         <Stack.Screen name="flocculation/mixing" options={{ headerShown: false }} />
         <Stack.Screen name="flocculation" options={{ headerShown: false }} />
         <Stack.Screen name="desludging/settings" options={{ headerShown: false }} />
         <Stack.Screen
  name="desludging/solenoid"
  options={{
    headerShown: false,
  }}
/>
<Stack.Screen
  name="desludging/inletpump"
  options={{
    headerShown: false,
  }}
/>
<Stack.Screen
  name="desludging/contactorsensors"
  options={{
    headerShown: false,
  }}
/>
<Stack.Screen
  name="desludging/blower"
  options={{
    headerShown: false,
  }}
/>

<Stack.Screen
  name="desludging/motor1"
  options={{
    headerShown: false,
  }}
/>

<Stack.Screen
  name="desludging/motor2"
  options={{
    headerShown: false,
  }}
/>

<Stack.Screen
  name="desludging/auto"
  options={{
    headerShown: false,
  }}
/>

<Stack.Screen
  name="inlet/cleanwater/inletroutes/inletpump"
  options={{
    headerShown: false,
  }}
/>

    <Stack.Screen
          name="mixingtank"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
