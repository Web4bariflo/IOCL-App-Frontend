// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';

// //Api Section
// import { sendOtp } from '../api/authApi';

// export default function ForgotPasswordScreen() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');

//   //   const handleSubmit = () => {
//   //     console.log("Reset link sent to:", email);
//   //     alert("Password reset link sent to your email");
//   //     router.back(); // go back to login
//   //   };

//   const handleSubmit = async () => {
//     if (!email) {
//       alert("Please enter your email");
//       return;
//     }
//     try {
//       const res = await sendOtp(email);
//       console.log("OTP sent successfully:", res);
//       alert("OTP sent to your email");
//       router.push(`/otp?email=${email}`);
//     } catch (error: any) {
//       console.error("Error sending OTP:", error.res?.data || error.message);
//       alert("Failed to send OTP");
//     }
//   }
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Forgot Password</Text>

//       <TextInput
//         placeholder="Enter your email"
//         style={styles.input}
//         value={email}
//         onChangeText={setEmail}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Send OTP</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
//   input: {
//     borderWidth: 1,
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#1769AA',
//     padding: 15,
//     borderRadius: 8,
//   },
//   buttonText: { color: '#fff', textAlign: 'center' },
// });

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { sendOtp } from '../api/authApi';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      const res = await sendOtp(email);
      console.log("OTP sent successfully:", res);
      alert("OTP sent to your email");

      router.push(`/otp?email=${email}`);
    } catch (error: any) {
      console.error("Error sending OTP:", error.response?.data || error.message);
      alert("Failed to send OTP");
    }
  };

  return (
    <View style={styles.container}>
      
      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Forgot Password</Text>

        <Text style={styles.subtitle}>
          Enter your registered email to receive OTP
        </Text>

        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#1769AA',
    padding: 14,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});