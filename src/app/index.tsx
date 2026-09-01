// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useRouter } from 'expo-router';
// import React, { useState } from 'react';
// import {
//   Dimensions,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const { width, height } = Dimensions.get('window');

// export default function LoginScreen() {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = () => {
//     setIsLoading(true);
//     // Simulate network request
//     setTimeout(() => {
//       setIsLoading(false);
//       // Navigate to the main dashboard layout
//       router.replace('/(tabs)/dashboard');
//     }, 1000);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.keyboardView}
//       >
//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           showsVerticalScrollIndicator={false}
//           bounces={false}
//         >
//           {/* ================= BACKGROUND ================= */}
//           <LinearGradient
//             colors={['#E8F2FB', '#F5F7FA', '#FFFFFF']}
//             style={styles.backgroundGradient}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 0, y: 1 }}
//           />

//           <View style={styles.content}>

//             {/* ================= HEADER & LOGO ================= */}
//             <View style={styles.logoContainer}>
//               <Image
//                 source={require('../../assets/images/logo.png')}
//                 style={styles.logo}
//                 resizeMode="contain"
//               />

//               <Text style={styles.welcomeText}>IOCL</Text>
//               <Text style={styles.subtitleText}>Sign in to access your dashboard</Text>
//             </View>

//             {/* ================= FORM ================= */}
//             <View style={styles.formContainer}>

//               {/* Username Input */}
//               <View style={styles.inputGroup}>
//                 <Text style={styles.inputLabel}>Username / Email</Text>
//                 <View style={styles.inputContainer}>
//                   <MaterialCommunityIcons name="email-outline" size={20} color="#7B8088" style={styles.inputIcon} />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Enter your email"
//                     placeholderTextColor="#A0A5AC"
//                     value={username}
//                     onChangeText={setUsername}
//                     autoCapitalize="none"
//                     keyboardType="email-address"
//                   />
//                 </View>
//               </View>

//               {/* Password Input */}
//               <View style={styles.inputGroup}>
//                 <Text style={styles.inputLabel}>Password</Text>
//                 <View style={styles.inputContainer}>
//                   <MaterialCommunityIcons name="lock-outline" size={20} color="#7B8088" style={styles.inputIcon} />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Enter your password"
//                     placeholderTextColor="#A0A5AC"
//                     value={password}
//                     onChangeText={setPassword}
//                     secureTextEntry={!showPassword}
//                     autoCapitalize="none"
//                   />
//                   <TouchableOpacity
//                     onPress={() => setShowPassword(!showPassword)}
//                     style={styles.eyeIcon}
//                   >
//                     <MaterialCommunityIcons
//                       name={showPassword ? 'eye-off-outline' : 'eye-outline'}
//                       size={20}
//                       color="#7B8088"
//                     />
//                   </TouchableOpacity>
//                 </View>
//               </View>

//               {/* Forgot Password */}
//               <TouchableOpacity style={styles.forgotPasswordContainer}>
//                 <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//               </TouchableOpacity>

//               {/* Login Button */}
//               <TouchableOpacity
//                 style={[
//                   styles.loginButton,
//                   (isLoading || !username || !password) && styles.loginButtonDisabled
//                 ]}
//                 onPress={handleLogin}
//                 disabled={isLoading || !username || !password}
//               >
//                 <LinearGradient
//                   colors={['#1769AA', '#0F4D8A']}
//                   style={styles.loginButtonGradient}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 0 }}
//                 >
//                   <Text style={styles.loginButtonText}>
//                     {isLoading ? 'Signing In...' : 'Sign In'}
//                   </Text>
//                 </LinearGradient>
//               </TouchableOpacity>

//             </View>

//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   keyboardView: {
//     flex: 1,
//   },
//   scrollContent: {
//     flexGrow: 1,
//   },
//   backgroundGradient: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     height: height * 0.4,
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingTop: height * 0.12,
//   },

//   /* ================= LOGO & HEADER ================= */
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   logo: {
//     width: 240,
//     height: 80,
//     marginBottom: 24,
//   },
//   logoPlaceholder: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 30,
//   },
//   logoTextBlue: {
//     fontSize: 28,
//     fontWeight: '800',
//     color: '#3278B8', // matches the logo blue color approx
//     marginRight: 6,
//   },
//   logoTextBlack: {
//     fontSize: 28,
//     fontWeight: '800',
//     color: '#000000',
//   },
//   welcomeText: {
//     fontSize: 32,
//     fontWeight: '900',
//     color: '#1769AA',
//     marginBottom: 8,
//     letterSpacing: 1,
//   },
//   subtitleText: {
//     fontSize: 14,
//     color: '#6B7280',
//     fontWeight: '500',
//   },

//   /* ================= FORM ================= */
//   formContainer: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 20,
//     padding: 24,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.05,
//     shadowRadius: 20,
//     elevation: 5,
//     borderWidth: 1,
//     borderColor: '#F3F4F6',
//   },
//   inputGroup: {
//     marginBottom: 20,
//   },
//   inputLabel: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#374151',
//     marginBottom: 8,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F9FAFB',
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderRadius: 12,
//     height: 52,
//     paddingHorizontal: 16,
//   },
//   inputIcon: {
//     marginRight: 12,
//   },
//   input: {
//     flex: 1,
//     fontSize: 15,
//     color: '#111827',
//     height: '100%',
//   },
//   eyeIcon: {
//     padding: 8,
//   },
//   forgotPasswordContainer: {
//     alignSelf: 'flex-end',
//     marginBottom: 28,
//   },
//   forgotPasswordText: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#1769AA',
//   },

//   /* ================= BUTTON ================= */
//   loginButton: {
//     height: 52,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#1769AA',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   loginButtonDisabled: {
//     opacity: 0.6,
//   },
//   loginButtonGradient: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loginButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '700',
//   },
// });


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { loginUser } from '../api/authApi'

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const handleLogin = () => {
  //   setIsLoading(true);
  //   // Simulate network request
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     // Navigate to the main dashboard layout
  //     router.replace('/(tabs)/dashboard');
  //   }, 1000);
  // };

  const handleLogin = async () => {
    if (!username || !password) return;

    setIsLoading(true);

    try {
      const res = await loginUser({
        email: username,
        password: password,
      });

      console.log('Login Success:', res);

      const accessToken = res.tokens?.access;
      const refreshToken = res.tokens?.refresh;

      // ✅ Store both tokens
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);

      console.log('Access Token:', accessToken);
      console.log('Refresh Token:', refreshToken);

      // Navigate
      router.replace('/(tabs)/dashboard');

    } catch (error: any) {
      console.log('Login Failed:', error.response?.data || error.message);
      alert('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* ================= BACKGROUND ================= */}
          <LinearGradient
            colors={['#E8F2FB', '#F5F7FA', '#FFFFFF']}
            style={styles.backgroundGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />

          <View style={styles.content}>

            {/* ================= HEADER & LOGO ================= */}
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />

              <Text style={styles.welcomeText}>IOCL</Text>
              <Text style={styles.subtitleText}>Sign in to access your dashboard</Text>
            </View>

            {/* ================= FORM ================= */}
            <View style={styles.formContainer}>

              {/* Username Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Username / Email</Text>
                <View style={styles.inputContainer}>
                  <MaterialCommunityIcons name="email-outline" size={20} color="#7B8088" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#A0A5AC"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    keyboardType="email-address"
                  />
                </View>
              </View>

              {/* Password Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.inputContainer}>
                  <MaterialCommunityIcons name="lock-outline" size={20} color="#7B8088" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#A0A5AC"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                  >
                    <MaterialCommunityIcons
                      name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                      size={20}
                      color="#7B8088"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Forgot Password */}
              <TouchableOpacity
                style={styles.forgotPasswordContainer}
                onPress={() => router.push('/forgot-password')}
              >
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>

              {/* Login Button */}
              <TouchableOpacity
                style={[
                  styles.loginButton,
                  (isLoading || !username || !password) && styles.loginButtonDisabled
                ]}
                onPress={handleLogin}
                disabled={isLoading || !username || !password}
              >
                <LinearGradient
                  colors={['#1769AA', '#0F4D8A']}
                  style={styles.loginButtonGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={styles.loginButtonText}>
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  backgroundGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: height * 0.4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: height * 0.12,
  },

  /* ================= LOGO & HEADER ================= */
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 240,
    height: 80,
    marginBottom: 24,
  },
  logoPlaceholder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  logoTextBlue: {
    fontSize: 28,
    fontWeight: '800',
    color: '#3278B8', // matches the logo blue color approx
    marginRight: 6,
  },
  logoTextBlack: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000000',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '900',
    color: '#1769AA',
    marginBottom: 8,
    letterSpacing: 1,
  },
  subtitleText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },

  /* ================= FORM ================= */
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    height: 52,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
    height: '100%',
  },
  eyeIcon: {
    padding: 8,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 28,
  },
  forgotPasswordText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1769AA',
  },

  /* ================= BUTTON ================= */
  loginButton: {
    height: 52,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#1769AA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
  loginButtonGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
