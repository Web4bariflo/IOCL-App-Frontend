import axios from 'axios';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const signupUser = async (data: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/signup/`, data,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
}
