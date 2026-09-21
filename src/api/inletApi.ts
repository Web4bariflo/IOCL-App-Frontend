// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

// export const getTreatmentStages = async () => {
//   try {
//     const token = await AsyncStorage.getItem('accessToken');

//     const response = await axios.get(
//       `${BASE_URL}/treatment-process/stages/`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error('Error fetching treatment stages:', error);
//     throw error;
//   }
// };

// export const getStageEquipments = async (stageId: number) => {
//   try {
//     const token = await AsyncStorage.getItem('accessToken');

//     const response = await axios.get(
//       `${BASE_URL}/treatment-process/stages/${stageId}/equipments/`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error('Error fetching stage equipments:', error);
//     throw error;
//   }
// };

// export const turnOnValve = async (valveId: number, stageId: number) => {
//   try {
//     const token = await AsyncStorage.getItem('accessToken');

//     const response = await axios.post(
//       `${BASE_URL}/equipment/valve/${valveId}/on/`,
//       {
//         stage_id: stageId,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log('Valve API Response:', response.data);

//     return response.data;
//   } catch (error: any) {
//     console.log('Valve API Status:', error.response?.status);
//     console.log('Valve API Error:', error.response?.data);
//     console.log('Valve API Message:', error.message);

//     throw error;
//   }
// };

// export const turnOffValve = async (valveId: number, stageId: number) => {
//   try {
//     const token = await AsyncStorage.getItem('accessToken');

//     const response = await axios.post(
//       `${BASE_URL}/equipment/valve/${valveId}/off/`,
//       {
//         stage_id: stageId,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log('Valve OFF API Response:', response.data);

//     return response.data;
//   } catch (error: any) {
//     console.log('Valve OFF API Status:', error.response?.status);
//     console.log('Valve OFF API Error:', error.response?.data);
//     console.log('Valve OFF API Message:', error.message);

//     throw error;
//   }
// };

// export const turnOnMotor = async (motorId: number, stageId: number) => {
//   try {
//     const token = await AsyncStorage.getItem('accessToken');

//     const response = await axios.post(
//       `${BASE_URL}/equipment/motor/${motorId}/on/`,
//       {
//         stage_id: stageId,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log('Motor ON API Response:', response.data);

//     return response.data;
//   } catch (error: any) {
//     console.log('Motor ON API Status:', error.response?.status);
//     console.log('Motor ON API Error:', error.response?.data);
//     console.log('Motor ON API Message:', error.message);

//     throw error;
//   }
// };

// export const turnOffMotor = async (motorId: number, stageId: number) => {
//   try {
//     const token = await AsyncStorage.getItem('accessToken');

//     const response = await axios.post(
//       `${BASE_URL}/equipment/motor/${motorId}/off/`,
//       {
//         stage_id: stageId,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log('Motor OFF API Response:', response.data);

//     return response.data;
//   } catch (error: any) {
//     console.log('Motor OFF API Status:', error.response?.status);
//     console.log('Motor OFF API Error:', error.response?.data);
//     console.log('Motor OFF API Message:', error.message);

//     throw error;
//   }
// };

// // export const getSensors = async (stageId: number) => {
// //   try {
// //     const token = await AsyncStorage.getItem('accessToken');

// //     const response = await axios.get(
// //       `${BASE_URL}/equipment/sensors/`,
// //       {
// //         params: {
// //           stage_id: stageId,
// //         },
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       }
// //     );

// //     console.log('Sensors API Response:', response.data);

// //     return response.data;
// //   } catch (error: any) {
// //     console.log('Sensors API Status:', error.response?.status);
// //     console.log('Sensors API Error:', error.response?.data);
// //     console.log('Sensors API Message:', error.message);

// //     throw error;
// //   }
// // };

// export const getSensors = async (stageId: number) => {
//   try {
//     const token = await AsyncStorage.getItem('accessToken');

//     const response = await axios.get(
//       `${BASE_URL}/equipment/stage/${stageId}/sensors/`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log('Sensors API Response:', response.data);

//     return response.data;
//   } catch (error: any) {
//     console.log('Sensors API Status:', error.response?.status);
//     console.log('Sensors API Error:', error.response?.data);
//     console.log('Sensors API Message:', error.message);

//     throw error;
//   }
// };


import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;


export const getTreatmentStages = async () => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    const response = await axios.get(

      `${BASE_URL}/treatment-process/stages/`,

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
  } catch (error: any) {
    console.error('Error fetching stage equipments status:', error.response?.status);
    console.error('Error fetching stage equipments data:', error.response?.data);
    throw error;
  }
};


export const turnOnValve = async (valveId: number, stageId: number) => {

  try {

    const token = await AsyncStorage.getItem('accessToken');


    const response = await axios.post(

      `${BASE_URL}/equipment/valve/${valveId}/on/`,

      {

        stage_id: stageId,

      },

      {

        headers: {

          Authorization: `Bearer ${token}`,

        },

      }

    );


    console.log('Valve API Response:', response.data);


    return response.data;

  } catch (error: any) {

    console.log('Valve API Status:', error.response?.status);

    console.log('Valve API Error:', error.response?.data);

    console.log('Valve API Message:', error.message);


    throw error;

  }

};


export const turnOffValve = async (valveId: number, stageId: number) => {

  try {

    const token = await AsyncStorage.getItem('accessToken');


    const response = await axios.post(

      `${BASE_URL}/equipment/valve/${valveId}/off/`,

      {

        stage_id: stageId,

      },

      {

        headers: {

          Authorization: `Bearer ${token}`,

        },

      }

    );


    console.log('Valve OFF API Response:', response.data);


    return response.data;

  } catch (error: any) {

    console.log('Valve OFF API Status:', error.response?.status);

    console.log('Valve OFF API Error:', error.response?.data);

    console.log('Valve OFF API Message:', error.message);


    throw error;

  }

};


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




//==============================

//Automatic

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




export const startTreatmentStage = async (stageId: number) => {

  try {

    const token = await AsyncStorage.getItem('accessToken');


    const response = await axios.post(

      `${BASE_URL}/treatment-process/stages/${stageId}/start/`,

      {},

      {

        headers: {

          Authorization: `Bearer ${token}`,

          'Content-Type': 'application/json',

        },

      }

    );


    console.log(

      'Start Stage API Response:',

      JSON.stringify(response.data, null, 2)

    );


    return response.data;

  } catch (error: any) {

    console.log('Start Stage API Status:', error.response?.status);

    // console.log('Start Stage API Error:', error.response?.data);

    // console.log('Start Stage API Message:', error.message);


    throw error;

  }

};




export const stopTreatmentStage = async (stageId: number) => {

  try {

    const token = await AsyncStorage.getItem('accessToken');


    const response = await axios.post(

      `${BASE_URL}/treatment-process/stages/${stageId}/stop/`,

      {},

      {

        headers: {

          Authorization: `Bearer ${token}`,

          'Content-Type': 'application/json',

        },

      }

    );


    console.log(

      'Stop Stage API Response:',

      JSON.stringify(response.data, null, 2)

    );


    return response.data;

  } catch (error: any) {

    console.log('Stop Stage API Status:', error.response?.status);

    console.log('Stop Stage API Error:', error.response?.data);


    throw error;

  }

};


export const getStageProcessLogs = async (stageId: number) => {

  try {

    const token = await AsyncStorage.getItem('accessToken');


    const response = await axios.get(

      `${BASE_URL}/treatment-process/stages/${stageId}/process-logs/`,

      {

        headers: {

          Authorization: `Bearer ${token}`,

        },

      }

    );


    console.log(

      'Stage Process Logs API Response:',

      JSON.stringify(response.data, null, 2)

    );


    return response.data;

  } catch (error: any) {

    console.log(

      'Stage Process Logs API Status:',

      error.response?.status

    );


    console.log(

      'Stage Process Logs API Error:',

      error.response?.data

    );


    console.log(

      'Stage Process Logs API Message:',

      error.message

    );


    throw error;

  }

};


// merge stage duration


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