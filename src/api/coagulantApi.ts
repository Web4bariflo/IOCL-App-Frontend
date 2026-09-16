import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const getTreatmentStages = async (stageId: number) => {
  try {
    const token = await AsyncStorage.getItem('accessToken');

    const response = await axios.get(
      `${BASE_URL}/treatment-process/stages/${stageId}/equipments/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching treatment stages:', error);
    throw error;
  }
};


export const turnOnCoagulantMotor = async (
  equipmentId: number,
  stageId: number
) => {
  try {
    const token = await AsyncStorage.getItem('accessToken');

    const response = await axios.post(
      `${BASE_URL}/equipment/coagulant-dosing/motor/${equipmentId}/on/`,
      {
        stage_id: stageId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      'Error turning ON Coagulant Dosing Motor:',
      error
    );
    throw error;
  }
};


export const turnOffCoagulantMotor = async (
  equipmentId: number,
  stageId: number
) => {
  try {
    const token = await AsyncStorage.getItem('accessToken');

    const response = await axios.post(
      `${BASE_URL}/equipment/coagulant-dosing/motor/${equipmentId}/off/`,
      {
        stage_id: stageId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      'Error turning OFF Coagulant Dosing Motor:',
      error
    );
    throw error;
  }
};

export const getCoagulantMotorManualLogs = async (equipmentId: number
) => {
  try {
    const token = await AsyncStorage.getItem("accessToken");
    const response = await axios.get(`${BASE_URL}/equipment/manual-logs/${equipmentId}`,
      {
      headers: {
      Authorization: `Bearer ${token}`,
      },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      'Error fetching Coagulant Dosing Motor manual logs:',
      error
    );
    throw error;

  }
}