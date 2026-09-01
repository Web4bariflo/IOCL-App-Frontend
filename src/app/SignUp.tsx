import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { signupUser } from '../api/SignUpApi';
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

const { height } = Dimensions.get('window');

export default function SignUp() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // ================= SEND OTP =================

  // const handleSendOTP = () => {
  //   if (!email || !phone || !password || !confirmPassword) {
  //     alert('Please fill all fields');
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     alert('Passwords do not match');
  //     return;
  //   }

  //   setIsLoading(true);

  //   // API integration will be added later
  //   setTimeout(() => {
  //     setIsLoading(false);

  //     alert('OTP will be sent to your email');

  //     // Add OTP navigation later
  //     router.push('/otp');
  //   }, 800);
  // };

  const handleSignUp = async () => {
  if (!email || !phone || !password || !confirmPassword) {
    alert('Please fill all fields');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  try {
    setIsLoading(true);

    const signupData = {
      email: email,
      phone: phone,
      password: password,
      confirm_password: confirmPassword,
    };

    const response = await signupUser(signupData);

    console.log('Signup Response:', response);

    if (response.success) {
      alert(response.message || 'Account created successfully');

      // Navigate directly to Dashboard
       router.replace('/(tabs)/dashboard');
       
    } else {
      alert(response.message || 'Signup failed');
    }

  } catch (error: any) {
    console.error('Signup Error:', error);

    if (error.response) {
      alert(
        error.response.data?.message ||
        'Signup failed. Please try again.'
      );
    } else if (error.request) {
      alert(
        'Unable to connect to the server. Please check your network connection.'
      );
    } else {
      alert('Something went wrong. Please try again.');
    }

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
          keyboardShouldPersistTaps="handled"
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

              <Text style={styles.welcomeText}>
                IOCL
              </Text>

              <Text style={styles.subtitleText}>
                Create your account to access your dashboard
              </Text>

            </View>


            {/* ================= SIGN UP FORM ================= */}

            <View style={styles.formContainer}>

              {/* ================= EMAIL ================= */}

              <View style={styles.inputGroup}>

                <Text style={styles.inputLabel}>
                  Email
                </Text>

                <View style={styles.inputContainer}>

                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color="#7B8088"
                    style={styles.inputIcon}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#A0A5AC"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                  />

                </View>

              </View>


              {/* ================= PHONE ================= */}

              <View style={styles.inputGroup}>

                <Text style={styles.inputLabel}>
                  Phone Number
                </Text>

                <View style={styles.inputContainer}>

                  <MaterialCommunityIcons
                    name="phone-outline"
                    size={20}
                    color="#7B8088"
                    style={styles.inputIcon}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Enter your phone number"
                    placeholderTextColor="#A0A5AC"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    maxLength={10}
                  />

                </View>

              </View>


              {/* ================= PASSWORD ================= */}

              <View style={styles.inputGroup}>

                <Text style={styles.inputLabel}>
                  Password
                </Text>

                <View style={styles.inputContainer}>

                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color="#7B8088"
                    style={styles.inputIcon}
                  />

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
                    onPress={() =>
                      setShowPassword(!showPassword)
                    }
                    style={styles.eyeIcon}
                  >

                    <MaterialCommunityIcons
                      name={
                        showPassword
                          ? 'eye-off-outline'
                          : 'eye-outline'
                      }
                      size={20}
                      color="#7B8088"
                    />

                  </TouchableOpacity>

                </View>

              </View>


              {/* ================= CONFIRM PASSWORD ================= */}

              <View style={styles.inputGroup}>

                <Text style={styles.inputLabel}>
                  Confirm Password
                </Text>

                <View style={styles.inputContainer}>

                  <MaterialCommunityIcons
                    name="lock-check-outline"
                    size={20}
                    color="#7B8088"
                    style={styles.inputIcon}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Confirm your password"
                    placeholderTextColor="#A0A5AC"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showConfirmPassword}
                    autoCapitalize="none"
                  />

                  <TouchableOpacity
                    onPress={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    style={styles.eyeIcon}
                  >

                    <MaterialCommunityIcons
                      name={
                        showConfirmPassword
                          ? 'eye-off-outline'
                          : 'eye-outline'
                      }
                      size={20}
                      color="#7B8088"
                    />

                  </TouchableOpacity>

                </View>

              </View>


              {/* ================= ACCOUNT LOGIN ================= */}

              <View style={styles.loginRow}>

                <Text style={styles.accountText}>
                  Already have an account?
                </Text>

                <TouchableOpacity
                  onPress={() => router.back()}
                >
                  <Text style={styles.signInText}>
                    Sign In
                  </Text>
                </TouchableOpacity>

              </View>


              {/* ================= SEND OTP BUTTON ================= */}
<TouchableOpacity
  style={[
    styles.signupButton,
    (
      isLoading ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) && styles.signupButtonDisabled,
  ]}
  onPress={handleSignUp}
  disabled={
    isLoading ||
    !email ||
    !phone ||
    !password ||
    !confirmPassword
  }
>
  <LinearGradient
    colors={['#1769AA', '#0F4D8A']}
    style={styles.signupButtonGradient}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
    <MaterialCommunityIcons
      name="account-plus-outline"
      size={20}
      color="#FFFFFF"
      style={styles.buttonIcon}
    />

    <Text style={styles.signupButtonText}>
      {isLoading ? 'Signing Up...' : 'Sign Up'}
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


/* ================================================= */
/* STYLES */
/* ================================================= */

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
    paddingTop: height * 0.08,
    paddingBottom: 30,
  },


  /* ================= LOGO ================= */

  logoContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },

  logo: {
    width: 240,
    height: 80,
    marginBottom: 20,
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
    textAlign: 'center',
  },


  /* ================= FORM ================= */

  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 20,

    elevation: 5,

    borderWidth: 1,
    borderColor: '#F3F4F6',
  },

  inputGroup: {
    marginBottom: 17,
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


  /* ================= LOGIN LINK ================= */

  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 2,
    marginBottom: 24,
  },

  accountText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },

  signInText: {
    fontSize: 12,
    color: '#1769AA',
    fontWeight: '700',
    marginLeft: 5,
  },


  /* ================= SEND OTP BUTTON ================= */

  signupButton: {
    height: 52,
    borderRadius: 12,

    overflow: 'hidden',

    shadowColor: '#1769AA',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 4,
  },

  signupButtonDisabled: {
    opacity: 0.6,
  },

  signupButtonGradient: {
    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonIcon: {
    marginRight: 8,
  },

  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

});