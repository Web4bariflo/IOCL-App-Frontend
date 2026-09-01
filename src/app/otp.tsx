// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useLocalSearchParams } from 'expo-router';
// import { resendOtp, verifyOtp } from '../api/authApi';

// export default function OtpScreen() {
//     const params = useLocalSearchParams();
//     const email = typeof params.email === 'string' ? params.email : '';

//     const [otp, setOtp] = useState('');
//     const [timer, setTimer] = useState(60);

//     useEffect(() => {
//         if (timer === 0) return;

//         const interval = setInterval(() => {
//             setTimer((prev) => prev - 1);
//         }, 1000);

//         return () => clearInterval(interval);
//     }, [timer]);

//     const handleVerify = async () => {
//         if (!otp) {
//             alert("Enter OTP");
//             return;
//         }

//         try {
//             await verifyOtp(email, otp);
//             alert("OTP Verified");
//         } catch (error: any) {
//             alert("Invalid OTP");
//         }
//     };

//     const handleResend = async () => {
//         if (timer > 0) return;
//         try {
//             const res = await resendOtp(email);
//             setTimer(60);
//         } catch (error: any) {
//             console.error("Resend error:", error.response?.data || error.message);
//             alert("Failed to resend OTP");
//         }
//     }

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Enter OTP</Text>

//             <Text>OTP sent to: {email}</Text>

//             <TextInput
//                 placeholder="Enter OTP"
//                 style={styles.input}
//                 value={otp}
//                 onChangeText={setOtp}
//                 keyboardType="numeric"
//             />

//             <TouchableOpacity style={styles.button} onPress={handleVerify}>
//                 <Text style={styles.buttonText}>Verify OTP</Text>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
//                 <Text style={styles.resendText}>
//                     {timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, justifyContent: 'center', padding: 20 },
//     title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
//     input: { borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 20 },
//     button: { backgroundColor: '#1769AA', padding: 15, borderRadius: 8, marginBottom: 15 },
//     buttonText: { color: '#fff', textAlign: 'center' },
//     resendText: { textAlign: 'center', color: '#1769AA' },
// });

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { resendOtp, verifyOtp } from '../api/authApi';
import { useRouter } from 'expo-router';

export default function OtpScreen() {
    const params = useLocalSearchParams();
    const email = typeof params.email === 'string' ? params.email : '';
    const router = useRouter();

    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(60);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (timer === 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

   

    const handleVerify = async () => {
        if (!otp) {
            alert("Enter OTP");
            return;
        }

        if (!email) {
            alert("Email Missing");
            return;
        }

        try {
            setLoading(true);
            const res = await verifyOtp(email, otp);
            console.log("Verify response:", res);
            alert("OTP Verified Successfully");
            router.push(`/reset-password?email=${email}&otp=${otp}`);
        } catch (error: any) {
            console.error("Error verifying OTP:", error.response?.data || error.message);
            alert("Invalid OTP");
        } finally {
            setLoading(false);
        }
    }
    const handleResend = async () => {
        if (timer > 0) return;

        if (!email) {
            alert("Email missing");
            return;
        }

        try {
            const res = await resendOtp(email);
            alert(res.message);
            setTimer(60);
        } catch (error: any) {
            console.error("Resend error:", error.response?.data || error.message);
            alert("Failed to resend OTP");
        }
    };

    return (
        <View style={styles.container}>

            {/* Card */}
            <View style={styles.card}>
                <Text style={styles.title}>Enter OTP</Text>

                <Text style={styles.subtitle}>
                    OTP sent to {email || "your email"}
                </Text>

                <TextInput
                    placeholder="Enter OTP"
                    style={styles.input}
                    value={otp}
                    onChangeText={setOtp}
                    keyboardType="numeric"
                />

                <TouchableOpacity
                    style={[styles.button, loading && { opacity: 0.6 }]}
                    onPress={handleVerify}
                    disabled={loading}
                >
                    <Text style={styles.buttonText}>
                        {loading ? "Verifying..." : "Verify OTP"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
                    <Text style={[styles.resendText, timer > 0 && styles.disabledText]}>
                        {timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}
                    </Text>
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
        elevation: 5,
        shadowColor: '#000',
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
        textAlign: 'center',
        fontSize: 16,
        letterSpacing: 5, // looks like OTP boxes
    },

    button: {
        backgroundColor: '#1769AA',
        padding: 14,
        borderRadius: 8,
        marginBottom: 15,
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
    },

    resendText: {
        textAlign: 'center',
        color: '#1769AA',
        fontWeight: '500',
    },

    disabledText: {
        color: 'gray',
    },
});