import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_URL = process.env.EXPO_PUBLIC_API_URL

const getToken =async () => {
    return await AsyncStorage.getItem('accessToken');
}

export const loginUser = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/login/`, data,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export const logoutUser = async () => {
    try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        const response = await axios.post(`${BASE_URL}/users/logout/`, {
            "refresh": refreshToken
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            }  
        });
        return response.data;
    } catch (error: any) {
        console.error("Error logging out:", error.response?.data || error.message);
        throw error;
    }
}

export const sendOtp = async (email: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/send-otp/`, { email }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error: any) {
        console.error("Error sending OTP:", error.response?.data || error.message);
        throw error;
    }
}

export const resendOtp = async (email: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/resend-otp/`, {email}, {
            headers: {
                'Content-Type': 'application/json'
            
            }
        });
        return response.data;
    } catch (error: any) {
        console.error("Error resending OTP:", error.response?.data || error.message);
        throw error;
    }
}

export const verifyOtp = async (email: string, otp: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/verify-otp/`, {email, otp}, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.data;
    } catch (error: any) {
        console.error("Error verifying OTP:", error.response?.data || error.message);
        throw error;
    }
}

export const resetPassword = async (email: string, otp: string, new_password: string, confirm_password: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/reset-password/`, {email, otp, new_password, confirm_password}, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.data;
    } catch (error: any) {
        console.error("Error resetting password:", error.response?.data || error.message);
        throw error;
    }
}