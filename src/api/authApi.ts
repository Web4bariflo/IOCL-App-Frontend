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