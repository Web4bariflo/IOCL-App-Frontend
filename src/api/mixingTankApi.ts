import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const getStageEquipments = async (stageId: number) => {
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




export const turnOnValve = async (valveId: number, stageId: number) => {
  try {
    const token = await AsyncStorage.getItem("accessToken")
    const response = await axios.post(`${BASE_URL}/equipment/valve/${valveId}/on/`,
      {
        stage_id: stageId
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      },
    );
    return response.data
  } catch (error: any) {
    console.log('Valve API Status:', error.response?.status);
    console.log('Valve API Error:', error.response?.data);
    console.log('Valve API Message:', error.message);

    throw error;
  }
}

export const turnOffValve = async (valveId: number, stageId: number) => {
  try {
    const token = await AsyncStorage.getItem("accessToken")
    const response = await axios.post(`${BASE_URL}/equipment/valve/${valveId}/off/`,
      {
        stage_id: stageId
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
    );
    return response.data
  } catch (error: any) {
    console.log('Valve OFF API Status:', error.response?.status);
    console.log('Valve OFF API Error:', error.response?.data);
    console.log('Valve OFF API Message:', error.message);

    throw error;
  }
}

export const turnOnMotor = async (motorId: number, stageId: number) => {

  try {

    const token = await AsyncStorage.getItem('accessToken');


    const response = await axios.post(

      `${BASE_URL}/equipment/pump/${motorId}/on/`,

      {

        stage_id: stageId,

      },

      {

        headers: {

          Authorization: `Bearer ${token}`,

        },

      }

    );


    console.log('Motor ON API Response:', response.data);


    return response.data;

  } catch (error: any) {

    console.log('Motor ON API Status:', error.response?.status);

    console.log('Motor ON API Error:', error.response?.data);

    console.log('Motor ON API Message:', error.message);


    throw error;

  }

};


export const turnOffMotor = async (motorId: number, stageId: number) => {

  try {

    const token = await AsyncStorage.getItem('accessToken');


    const response = await axios.post(

      `${BASE_URL}/equipment/pump/${motorId}/off/`,

      {

        stage_id: stageId,

      },

      {

        headers: {

          Authorization: `Bearer ${token}`,

        },

      }

    );


    console.log('Motor OFF API Response:', response.data);
    return response.data;

  } catch (error: any) {
    console.log('Motor OFF API Status:', error.response?.status);
    console.log('Motor OFF API Error:', error.response?.data);
    console.log('Motor OFF API Message:', error.message);

    throw error;

  }
};

export const getEquipmentManualLogs = async (equipmentId: number, stageId: number) => {

  try {

    const token = await AsyncStorage.getItem('accessToken');


    const response = await axios.get(

      `${BASE_URL}/equipment/manual-logs/${equipmentId}/`,

      {

        params: {

          stage_id: stageId,

        },

        headers: {

          Authorization: `Bearer ${token}`,

        },

      }

    );


    console.log('Equipment Manual Logs Response:', response.data);


    return response.data;

  } catch (error: any) {

    console.log(

      'Equipment Manual Logs API Status:',

      error.response?.status

    );


    console.log(

      'Equipment Manual Logs API Error:',

      error.response?.data

    );


    console.log(

      'Equipment Manual Logs API Message:',

      error.message

    );


    throw error;

  }

};

export const getSensors = async (stageId: number) => {
  try {
    const token = await AsyncStorage.getItem('accessToken');

    const response = await axios.get(
      `${BASE_URL}/equipment/stage/${stageId}/sensors/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('Sensors API Response:', response.data);

    return response.data;
  } catch (error: any) {
    console.log('Sensors API Status:', error.response?.status);
    console.log('Sensors API Error:', error.response?.data);
    console.log('Sensors API Message:', error.message);

    throw error;
  }
};

export const turnOnMixTankMotor = async (
  equipmentId: number,
  stageId: number
) => {
  try {
    const token = await AsyncStorage.getItem('accessToken');

    const response = await axios.post(
      `${BASE_URL}/equipment/motor/${equipmentId}/on/`,
      {
        stage_id: stageId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('Motor ON Response:', response.data);

    return response.data;
  } catch (error: any) {
    console.log('Motor ON Status:', error.response?.status);
    console.log('Motor ON Error:', error.response?.data);
    console.log('Motor ON Message:', error.message);

    throw error;
  }
};

export const turnOffMixTankMotor = async (
  equipmentId: number,
  stageId: number
) => {
  try {
    const token = await AsyncStorage.getItem('accessToken');

    const response = await axios.post(
      `${BASE_URL}/equipment/motor/${equipmentId}/off/`,
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

export const mergeStageDuration = async (stageId: number) => {

  try {

    const token = await AsyncStorage.getItem('accessToken');


    const response = await axios.post(

      `${BASE_URL}/equipment/stages/${stageId}/merge-duration/`,

      {},

      {

        headers: {

          Authorization: `Bearer ${token}`,

          'Content-Type': 'application/json',

        },

      }

    );


    console.log(

      'Merge Duration API Response:',

      JSON.stringify(response.data, null, 2)

    );


    return response.data;

  } catch (error: any) {

    console.log(

      'Merge Duration API Status:',

      error.response?.status

    );


    console.log(

      'Merge Duration API Error:',

      error.response?.data

    );


    console.log(

      'Merge Duration API Message:',

      error.message

    );


    throw error;

  }

};

//==============================
//           Automatic
//==============================


export const getStageStatus = async (stageId: number) => {

  try {

    const token = await AsyncStorage.getItem('accessToken');


    console.log('API BASE URL:', BASE_URL);

    console.log('Stage ID:', stageId);

    console.log('Token exists:', !!token);


    const response = await axios.get(

      `${BASE_URL}/treatment-process/stages/${stageId}/status/`,

      {

        headers: {

          Authorization: `Bearer ${token}`,

        },

      }

    );


    console.log(

      'Stage Status API Response:',

      JSON.stringify(response.data, null, 2)

    );


    return response.data;

  } catch (error: any) {

    console.log(

      'Stage Status API Status:',

      error.response?.status

    );


    console.log(

      'Stage Status API Error:',

      error.response?.data

    );


    console.log(

      'Stage Status API Message:',

      error.message

    );


    throw error;

  }

};
