
import { MaterialCommunityIcons } from '@expo/vector-icons';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {

  getStageStatus,

  startTreatmentStage,

  stopTreatmentStage,

  getStageProcessLogs,

} from '../../../api/inletApi';

import {

  Image,

  ScrollView,

  StyleSheet,

  Text,

  TouchableOpacity,

  View,

} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';


export default function FlocculationSystemScreen() {

  const router = useRouter();

  const [systemRunning, setSystemRunning] = useState(false);

  const [startingSystem, setStartingSystem] = useState(false);

  const [stoppingSystem, setStoppingSystem] = useState(false);

  const [stageData, setStageData] = useState<any>(null);

  const [loadingStatus, setLoadingStatus] = useState(true);


  const [processLogs, setProcessLogs] = useState<any[]>([]);


  const fetchStageStatus = async () => {

    try {

      const stageId = await AsyncStorage.getItem(

        'flocculationDosingStageId'

      );


      console.log('Flocculation Dosing Stage ID:', stageId);


      if (!stageId) {

        console.log('No Flocculation Dosing Stage ID found');

        return;

      }


      const response = await getStageStatus(Number(stageId));


      console.log(

        'Flocculation Dosing Stage Status:',

        JSON.stringify(response, null, 2)

      );


      if (response?.success) {

        const data = response.data;


        setStageData(data);


        const status = String(data?.status || '').toUpperCase();


        // RUNNING / IN PROGRESS

        if (status === 'RUNNING' || status === 'IN_PROGRESS') {

          setSystemRunning(true);

          setStartingSystem(false);

        }


        // Task completed

        if (status === 'COMPLETED') {

          setSystemRunning(false);

          setStartingSystem(false);

        }

      }

    } catch (error: any) {

      console.error(

        'Failed to fetch Coagulation Stage Status:',

        error.response?.data || error.message

      );

    } finally {

      setLoadingStatus(false);

    }

  };


  const fetchProcessLogs = async () => {

    try {

      const stageId = await AsyncStorage.getItem(

        'flocculationDosingStageId'

      );


      console.log('Process Logs Stage ID:', stageId);


      if (!stageId || isNaN(Number(stageId))) {

        console.log('No valid Flocculation Dosing Stage ID found');

        return;

      }


      const response = await getStageProcessLogs(Number(stageId));


      console.log(

        'Process Logs API Response:',

        JSON.stringify(response, null, 2)

      );


      if (response?.success) {

        setProcessLogs(response.data || []);

      }

    } catch (error: any) {

      console.error(

        'Failed to fetch process logs:',

        error.response?.data || error.message

      );

    }

  };


  useEffect(() => {

    fetchStageStatus();

    fetchProcessLogs();


    const interval = setInterval(() => {

      fetchStageStatus();

      fetchProcessLogs();

    }, 3000);


    return () => clearInterval(interval);

  }, []);


  const handleStartSystem = async () => {

    try {

      setStartingSystem(true);

      setSystemRunning(true);


      const stageId = await AsyncStorage.getItem(

        'flocculationDosingStageId'

      );


      console.log(

        'Start Flocculation Dosing Stage ID:',

        stageId

      );


      if (!stageId || isNaN(Number(stageId))) {

        console.log(

          'No valid Flocculation Dosing Stage ID found'

        );


        setStartingSystem(false);

        setSystemRunning(false);

        return;

      }


      const response = await startTreatmentStage(

        Number(stageId)

      );


      console.log(

        'Start Coagulation Dosing Response:',

        JSON.stringify(response, null, 2)

      );


      if (response?.success) {

        // Keep button disabled

        setSystemRunning(true);


        // Refresh backend status

        fetchStageStatus();

      } else {

        setSystemRunning(false);

        setStartingSystem(false);

      }

    } catch (error: any) {

      console.error(

        'Failed to start Coagulation Dosing:',

        error.response?.data || error.message

      );


      // API failed, allow user to try again

      setSystemRunning(false);

      setStartingSystem(false);

    }

  };


  const handleStopSystem = async () => {

    try {

      setStoppingSystem(true);


      const stageId = await AsyncStorage.getItem(

        'flocculationDosingStageId'

      );


      console.log(

        'Stop Coagulation Dosing Stage ID:',

        stageId

      );


      if (!stageId || isNaN(Number(stageId))) {

        console.log(

          'No valid Coagulation Dosing Stage ID found'

        );


        setStoppingSystem(false);

        return;

      }


      const response = await stopTreatmentStage(

        Number(stageId)

      );


      console.log(

        'Stop Coagulation Dosing Response:',

        JSON.stringify(response, null, 2)

      );


      if (response?.success) {

        // Stop the system

        setSystemRunning(false);


        // Stop button loading state

        setStoppingSystem(false);


        // Refresh latest backend status

        fetchStageStatus();

      } else {

        setStoppingSystem(false);

      }

    } catch (error: any) {

      console.error(

        'Failed to stop Coagulation Dosing:',

        error.response?.data || error.message

      );


      setStoppingSystem(false);

    }

  };


  const formatTime = (time?: string | null) => {

    if (!time) return '--';


    const [hours, minutes, seconds] = time.split(':').map(Number);


    if (

      Number.isNaN(hours) ||

      Number.isNaN(minutes) ||

      Number.isNaN(seconds)

    ) {

      return '--';

    }


    const date = new Date();


    date.setHours(hours, minutes, seconds, 0);


    return date.toLocaleTimeString('en-IN', {

      hour: '2-digit',

      minute: '2-digit',

      second: '2-digit',

      hour12: true,

    });

  };


  const formatProcessTime = (timestamp?: string | null) => {

    if (!timestamp) return '--';


    const date = new Date(timestamp);


    if (isNaN(date.getTime())) {

      return '--';

    }


    return date.toLocaleTimeString('en-IN', {

      hour: '2-digit',

      minute: '2-digit',

      second: '2-digit',

      hour12: true,

    });

  };


  return (

    <SafeAreaView style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>


        {/* BACK ARROW */}

        <TouchableOpacity

          style={styles.backButton}

          onPress={() => router.replace('/(tabs)/dashboard')}

        >

          <MaterialCommunityIcons

            name="arrow-left"

            size={26}

            color="#1E3A5F"

          />

        </TouchableOpacity>


        {/* TITLE */}

        <View style={styles.headerCenter}>

          <Text style={styles.headerTitle}>Flocculsation System</Text>

          <Text style={styles.subtitle}>Automatic Mode</Text>

        </View>


        {/* OFFLINE */}

        <View style={styles.offlineBadge}>

          <Text style={styles.offlineText}>Offline</Text>

        </View>


      </View>


      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 30 }}>

        {/* SYSTEM OVERVIEW */}

        <View style={styles.card}>

          <Text style={styles.sectionTitle}>System Overview</Text>


          <TouchableOpacity

            style={[

              styles.startBtn,

              systemRunning && styles.startBtnDisabled,

            ]}

            onPress={handleStartSystem}

            disabled={systemRunning || startingSystem}

            activeOpacity={0.8}

          >

            <MaterialCommunityIcons

              name="power"

              size={20}

              color="#fff"

              style={{ marginRight: 8 }}

            />


            <Text style={styles.startText}>

              {startingSystem

                ? 'STARTING...'

                : systemRunning

                  ? 'SYSTEM RUNNING'

                  : 'START SYSTEM'}

            </Text>

          </TouchableOpacity>


          <TouchableOpacity

            style={[

              styles.stopBtn,

              // (!systemRunning || stoppingSystem) &&

              // styles.stopBtnDisabled,

            ]}

            onPress={handleStopSystem}

            disabled={!systemRunning}

            activeOpacity={0.8}

          >

            <MaterialCommunityIcons

              name="stop"

              size={18}

              color="#EF4444"

              style={{ marginRight: 8 }}

            />


            <Text style={styles.stopText}>

              {stoppingSystem ? 'STOP' : 'STOP'}

            </Text>

          </TouchableOpacity>

        </View>


        {/* MOTOR 1 */}

        {/* <Card

title="Motor 1"

subtitle="Disabled"

image={require('@/assets/images/motor.png')} // change if needed

active={false}

>

<View style={styles.statusRow}>

<View>

<Text style={styles.statusLabel}>Status</Text>

<Text style={styles.statusValue}>Disabled</Text>

</View>

<View>

<Text style={styles.statusLabel}>Since</Text>

<Text style={styles.statusValue}>08:15 AM</Text>

</View>

</View>

</Card> */}


        {/* ================= MOTOR / EQUIPMENT ================= */}


        <View style={styles.card}>


          {(() => {

            const equipment = stageData?.equipment?.[0];


            const equipmentType = equipment?.equipment_type || '--';

            const equipmentName = equipment?.name || '--';


            const isActive =

              String(equipment?.status).toUpperCase() === 'ACTIVE';


            const currentState =

              String(equipment?.current_state || '').toUpperCase();


            // Show start_time when ON

            // Show end_time when OFF

            const displayTime =

              currentState === 'ON'

                ? equipment?.start_time

                : currentState === 'OFF'

                  ? equipment?.end_time

                  : null;


            return (

              <>

                {/* TOP ROW */}

                <View style={styles.rowBetween}>


                  <View style={styles.row}>


                    <Image

                      source={require('@/assets/images/motor.png')}

                      style={styles.equipmentImage}

                      resizeMode="contain"

                    />


                    <View style={{ marginLeft: 12 }}>


                      {/* equipment_type */}

                      <Text style={styles.sectionTitle}>

                        {equipmentType}

                      </Text>


                      {/* equipment name */}

                      <Text style={styles.sectionSub}>

                        {equipmentName}

                      </Text>


                    </View>

                  </View>


                  {/* STATUS TOGGLE */}

                  <Toggle

                    active={isActive}

                    onPress={() => { }}

                  />


                </View>


                {/* DIVIDER */}

                <View style={styles.divider} />


                {/* STATUS + SINCE */}

                <View style={styles.itemRow}>


                  <View>

                    <Text style={styles.itemLabelSmall}>

                      Status

                    </Text>


                    <Text style={styles.itemLabel}>

                      {currentState || '--'}

                    </Text>

                  </View>


                  <View style={{ alignItems: 'flex-end' }}>

                    <Text style={styles.itemLabelSmall}>

                      Since

                    </Text>


                    <Text style={styles.itemLabel}>

                      {formatTime(displayTime)}

                    </Text>

                  </View>


                </View>

              </>

            );

          })()}


        </View>

        {/* MOTOR 2 */}

        {/* <Card

title="Motor 2"

subtitle="Disabled"

image={require('@/assets/images/motor.png')}

active={false}

>

<View style={styles.statusRow}>

<View>

<Text style={styles.statusLabel}>Status</Text>

<Text style={styles.statusValue}>Disabled</Text>

</View>

<View>

<Text style={styles.statusLabel}>Since</Text>

<Text style={styles.statusValue}>08:15 AM</Text>

</View>

</View>

</Card> */}


        {/* BLOWER 1 */}

        {/* <Card

title="Blower 1"

subtitle="Stopped"

image={require('@/assets/images/blower.png')} // change if needed

active={false}

>

<View style={styles.statusRow}>

<View>

<Text style={styles.statusLabel}>Status</Text>

<Text style={styles.statusValue}>Stopped</Text>

</View>

<View>

<Text style={styles.statusLabel}>Since</Text>

<Text style={styles.statusValue}>08:15 AM</Text>

</View>

</View>

</Card> */}


        {/* AUTOMATIC PROCESS */}

        {/* <View style={styles.card}>

<Text style={styles.sectionTitle}>Automatic Process</Text>


<ProcessRow

number="01"

text="Motor 1"

image={require('@/assets/images/motor.png')}

active

/>

<ProcessRow

number="02"

text="Motor 2"

image={require('@/assets/images/motor.png')}

active

/>

<ProcessRow

number="03"

text="Blower 1"

image={require('@/assets/images/blower.png')}

active={false}

/>

</View> */}


        {/* AUTOMATIC PROCESS */}

        {/* AUTOMATIC PROCESS */}

        {/* <View style={styles.card}>

<Text style={styles.sectionTitle}>Automatic Process</Text>


{stageData?.processes?.map((process: any, index: number) => {

const equipment = process?.equipment?.[0];


if (!equipment) return null;


const equipmentName = equipment?.name || '--';


const state = String(

equipment?.state 

).toUpperCase();


const isOn = state === 'ON';


// ON -> started_at

// OFF -> completed_at

const processTime = isOn

? equipment?.started_at

: equipment?.completed_at;


return (

<ProcessRow

key={process?.execution_id || index}

number={String(index + 1).padStart(2, '0')}

text={equipmentName}

state={state || '--'}

time={formatProcessTime(processTime)}

image={require('@/assets/images/motor.png')}

/>

);

})}

</View> */}


        <View style={styles.card}>

          <Text style={styles.sectionTitle}>Automatic Process</Text>


          {stageData?.processes?.map((process: any, index: number) => {

            const equipment = process?.equipment?.[0];


            // If process equipment data is empty, use stage equipment data

            const stageEquipment = stageData?.equipment?.[0];


            const equipmentName =

              equipment?.name ||

              stageEquipment?.name ||

              '--';


            const equipmentType =

              equipment?.equipment_type ||

              stageEquipment?.equipment_type ||

              '--';


            // const state = String(

            // equipment?.state ||

            // equipment?.current_state ||

            // stageEquipment?.current_state ||

            // ''

            // ).toUpperCase();


            // const isOn = state === 'ON';


            // const processTime = isOn

            // ? equipment?.started_at

            // : equipment?.completed_at;


            const state = String(

              equipment?.state || '--'

            ).toUpperCase();


            const isOn = state === 'ON';


            // ON -> started_at

            // OFF -> completed_at

            const processTime = isOn

              ? equipment?.started_at

              : equipment?.completed_at;


            return (

              <ProcessRow

                key={process?.execution_id || index}

                number={String(index + 1).padStart(2, '0')}

                text={equipmentName}

                equipmentType={equipmentType}

                state={state || '--'}

                time={formatProcessTime(processTime)}

                image={require('@/assets/images/motor.png')}

              />

            );

          })}

        </View>


        {/* TANK FILLING */}

        <View style={styles.card}>

          <Text style={styles.sectionTitle}>Tank Filling</Text>

          <TankRow label="Wastewater Tank" percent={65} color="#3B82F6" />

          <TankRow label="Normal Water Tank" percent={42} color="#14B8A6" />

        </View>


        {/* LOG */}

        {/* <View style={styles.card}>

<View style={styles.logHeader}>

<View style={{ flexDirection: 'row', alignItems: 'center' }}>

<MaterialCommunityIcons

name="file-document-outline"

size={20}

color="#3B82F6"

style={{ marginRight: 8 }}

/>

<Text style={styles.sectionTitle}>Log</Text>

</View>

<Text style={styles.viewAll}>View All ›</Text>

</View>

<Text style={styles.recentActivity}>Recent Activity</Text>


<LogRow time="9:15 AM" message="Motor 1 Started" />

<LogRow time="9:12 AM" message="Blower 1 Stopped" />

</View> */}

        {/* LOG */}

        <View style={styles.card}>

          <View style={styles.logHeader}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

              <MaterialCommunityIcons

                name="file-document-outline"

                size={20}

                color="#3B82F6"

                style={{ marginRight: 8 }}

              />

              <Text style={styles.sectionTitle}>Log</Text>

            </View>


            <Text style={styles.viewAll}>View All ›</Text>

          </View>


          <Text style={styles.recentActivity}>

            Recent Activity

          </Text>


          {processLogs.map((process: any, index: number) => {

            const processName = process?.process_name || '--';


            let processTime = null;


            if (processName.toLowerCase() === 'motor on') {

              processTime = process?.started_at;

            } else if (processName.toLowerCase() === 'motor off') {

              processTime = process?.completed_at;

            }


            return (

              <LogRow

                key={process?.execution_id || index}

                time={formatProcessTime(processTime)}

                message={processName}

              />

            );

          })}

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}


/* ==================== COMPONENTS ==================== */

function Toggle({

  active,

  onPress,

}: {

  active: boolean;

  onPress: () => void;

}) {

  return (

    <TouchableOpacity

      style={styles.toggleContainer}

      onPress={onPress}

      activeOpacity={0.8}

    >

      {/* ACTIVE */}

      <View

        style={[

          styles.toggleSide,

          active && styles.toggleSideActive,

        ]}

      >

        <Text

          style={[

            styles.toggleText,

            active && styles.toggleTextActive,

          ]}

        >

          ACTIVE

        </Text>

      </View>


      {/* DEACTIVE */}

      <View

        style={[

          styles.toggleSide,

          !active && styles.toggleSideActive,

        ]}

      >

        <Text

          style={[

            styles.toggleText,

            !active && styles.toggleTextActive,

          ]}

        >

          DEACTIVE

        </Text>

      </View>

    </TouchableOpacity>

  );

}


function Card({ title, subtitle, image, active, children }: any) {

  return (

    <View style={styles.card}>

      <View style={styles.cardHeader}>

        <View style={styles.cardTitleRow}>

          {image && (

            <Image source={image} style={styles.cardIcon} resizeMode="contain" />

          )}

          <View>

            <Text style={styles.sectionTitle}>{title}</Text>

            {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}

          </View>

        </View>

        <View style={[styles.deactiveBtn, active && styles.activeBtn]}>

          <Text style={[styles.deactiveText, active && styles.activeText]}>

            {active ? 'ACTIVE' : 'DEACTIVE'}

          </Text>

        </View>

      </View>

      {children}

    </View>

  );

}


// function ProcessRow({

// number,

// text,

// image,

// state,

// time,

// }: any) {

// const isOn = String(state).toUpperCase() === 'ON';


// return (

// <View style={styles.processRow}>


// {/* LEFT SIDE */}

// <View style={styles.processLeft}>


// {/* NUMBER */}

// <View

// style={[

// styles.processNumber,


// ]}

// >

// <Text style={styles.processNumberText}>

// {number}

// </Text>

// </View>


// {/* IMAGE + NAME */}

// <View style={styles.processIconText}>

// {image && (

// <Image

// source={image}

// style={styles.processIcon}

// resizeMode="contain"

// />

// )}


// <Text style={styles.processText}>

// {text}

// </Text>

// </View>


// </View>


// {/* RIGHT SIDE */}

// <View style={styles.processRightColumn}>


// {/* CURRENT STATE */}

// <Text

// style={[

// styles.processState,

// {

// color: isOn ? '#10B981' : '#EF4444',

// },

// ]}

// >

// {state}

// </Text>


// {/* TIME BELOW STATE */}

// <Text style={styles.processTime}>

// {time}

// </Text>


// </View>


// </View>

// );

// }


function ProcessRow({

  number,

  text,

  equipmentType,

  image,

  state,

  time,

}: any) {

  const isOn = String(state).toUpperCase() === 'ON';


  return (

    <View style={styles.processRow}>


      {/* LEFT SIDE */}

      <View style={styles.processLeft}>


        {/* NUMBER */}

        <View style={styles.processNumber}>

          <Text style={styles.processNumberText}>

            {number}

          </Text>

        </View>


        {/* IMAGE + NAME + EQUIPMENT TYPE */}

        <View style={styles.processIconText}>

          {image && (

            <Image

              source={image}

              style={styles.processIcon}

              resizeMode="contain"

            />

          )}


          <View>

            {/* Equipment Name */}

            <Text style={styles.processText}>

              {text}

            </Text>


            {/* Equipment Type */}

            <Text style={styles.processEquipmentType}>

              {equipmentType}

            </Text>

          </View>

        </View>


      </View>


      {/* RIGHT SIDE */}

      <View style={styles.processRightColumn}>


        {/* CURRENT STATE */}

        <Text

          style={[

            styles.processState,

            {

              color: isOn ? '#10B981' : '#EF4444',

            },

          ]}

        >

          {state}

        </Text>


        {/* TIME */}

        <Text style={styles.processTime}>

          {time}

        </Text>


      </View>


    </View>

  );

}


function TankRow({ label, percent, color }: any) {

  return (

    <View style={styles.tankRow}>

      <Text style={styles.tankLabel}>{label}</Text>

      <View style={styles.progressBarBackground}>

        <View

          style={[

            styles.progressBarFill,

            { width: `${percent}%`, backgroundColor: color },

          ]}

        />

      </View>

      <Text style={styles.tankPercent}>{percent}%</Text>

    </View>

  );

}


function LogRow({ time, message }: any) {

  return (

    <View style={styles.logRow}>

      <Text style={styles.logTime}>{time}</Text>

      <Text style={styles.logMessage}>{message}</Text>

      <Text style={styles.logArrow}>›</Text>

    </View>

  );

}


/* ==================== STYLES ==================== */


const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F7FA',

  },

  header: {

    padding: 16,

    backgroundColor: '#fff',

    alignItems: 'center',

    justifyContent: 'center',

    position: 'relative',

    minHeight: 80,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#1E3A5F',

  },

  subtitle: {

    color: '#10B981',

    marginTop: 4,

    fontWeight: '500',

  },

  offlineBadge: {

    position: 'absolute',

    right: 16,

    top: 16,

    backgroundColor: '#E5E7EB',

    paddingHorizontal: 12,

    paddingVertical: 4,

    borderRadius: 20,

  },

  offlineText: {

    color: '#6B7280',

    fontSize: 12,

    fontWeight: '500',

  },

  card: {

    backgroundColor: '#fff',

    padding: 16,

    borderRadius: 12,

    marginBottom: 12,

    shadowColor: '#000',

    shadowOffset: { width: 0, height: 1 },

    shadowOpacity: 0.05,

    shadowRadius: 3,

    elevation: 2,

  },

  cardHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-start',

    marginBottom: 12,

  },

  cardTitleRow: {

    flexDirection: 'row',

    alignItems: 'center',

    flex: 1,

  },

  cardIcon: {

    width: 36,

    height: 36,

    marginRight: 12,

  },

  sectionTitle: {

    fontWeight: 'bold',

    fontSize: 16,

    color: '#1F2937',

    marginBottom: 16,

  },

  cardSubtitle: {

    fontSize: 13,

    color: '#6B7280',

    marginTop: 2,

  },

  deactiveBtn: {

    backgroundColor: '#E5E7EB',

    paddingHorizontal: 10,

    paddingVertical: 4,

    borderRadius: 12,

  },

  activeBtn: {

    backgroundColor: '#D1FAE5',

  },

  deactiveText: {

    fontSize: 11,

    fontWeight: '600',

    color: '#6B7280',

  },

  activeText: {

    color: '#059669',

  },

  startBtn: {

    backgroundColor: '#10B981',

    paddingVertical: 14,

    borderRadius: 8,

    marginBottom: 10,

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

  },

  startText: {

    color: '#fff',

    fontWeight: 'bold',

    fontSize: 15,

  },

  stopBtn: {

    borderWidth: 1.5,

    borderColor: '#EF4444',

    paddingVertical: 14,

    borderRadius: 8,

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

  },

  stopText: {

    color: '#EF4444',

    fontWeight: 'bold',

    fontSize: 15,

  },

  statusRow: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 4,

  },

  statusLabel: {

    fontSize: 12,

    color: '#9CA3AF',

  },

  statusValue: {

    fontSize: 14,

    color: '#374151',

    marginTop: 2,

  },

  processRow: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginVertical: 10,

  },

  processLeft: {

    flexDirection: 'row',

    alignItems: 'center',

    flex: 1,

  },

  // processNumber: {

  // width: 28,

  // height: 28,

  // borderRadius: 14,

  // justifyContent: 'center',

  // alignItems: 'center',

  // marginRight: 10,

  // },

  // processNumberActive: {

  // backgroundColor: '#ced2da',


  // },

  // processNumberInactive: {

  // backgroundColor: '#ced2da',


  // },

  // processNumberText: {

  // color: '#0000',

  // fontWeight: 'bold',

  // fontSize: 12,

  // },

  processNumber: {

    width: 32,

    height: 32,

    borderRadius: 16,

    backgroundColor: '#F3F4F6',

    alignItems: 'center',

    justifyContent: 'center',

    marginRight: 10,

  },


  processNumberText: {

    fontSize: 12,

    fontWeight: '700',

    color: '#6B7280',

  },

  processIconText: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  processIcon: {

    width: 24,

    height: 24,

    marginRight: 8,

  },

  processText: {

    fontSize: 14,

    color: '#374151',

  },

  processRight: {

    flexDirection: 'row',

    alignItems: 'center',

    gap: 6,

  },

  dot: {

    width: 8,

    height: 8,

    borderRadius: 4,

  },

  tankRow: {

    marginVertical: 10,

  },

  tankLabel: {

    fontSize: 14,

    color: '#374151',

    marginBottom: 6,

  },

  progressBarBackground: {

    height: 8,

    backgroundColor: '#E5E7EB',

    borderRadius: 4,

    overflow: 'hidden',

  },

  progressBarFill: {

    height: '100%',

    borderRadius: 4,

  },

  tankPercent: {

    position: 'absolute',

    right: 0,

    top: 0,

    fontSize: 14,

    fontWeight: '600',

    color: '#374151',

  },

  logHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  viewAll: {

    color: '#3B82F6',

    fontSize: 13,

  },

  recentActivity: {

    fontSize: 12,

    color: '#9CA3AF',

    marginBottom: 12,

  },

  logRow: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#F3F4F6',

  },

  logTime: {

    width: 70,

    fontSize: 13,

    color: '#6B7280',

  },

  logMessage: {

    flex: 1,

    fontSize: 14,

    color: '#374151',

  },

  logArrow: {

    fontSize: 18,

    color: '#9CA3AF',

  },


  backButton: {

    position: 'absolute',

    left: 16,

    top: 20,

    width: 40,

    height: 40,

    justifyContent: 'center',

    alignItems: 'center',

  },


  headerCenter: {

    alignItems: 'center',

  },

  row: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  rowBetween: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

  },

  // sectionTitle: {

  // fontSize: 15,

  // fontWeight: '600',

  // color: '#1a1a1a',

  // },

  sectionSub: {

    fontSize: 12,

    color: '#757575',

    marginTop: 2,

  },

  toggleContainer: {

    flexDirection: 'row',

    borderRadius: 8,

    overflow: 'hidden',

    borderWidth: 1,

    borderColor: '#e0e0e0',

  },

  toggleActive: {},

  toggleInactive: {},

  toggleSide: {

    paddingHorizontal: 10,

    paddingVertical: 6,

    backgroundColor: '#f5f5f5',

  },

  toggleSideActive: {

    backgroundColor: '#00897b',

  },

  toggleText: {

    fontSize: 11,

    fontWeight: '600',

    color: '#757575',

  },

  toggleTextActive: {

    color: '#fff',

  },

  divider: {

    height: 1,

    backgroundColor: '#eee',

    marginVertical: 14,

  },

  itemRow: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 12,

  },

  itemLabel: {

    fontSize: 14,

    color: '#424242',

  },

  itemLabelSmall: {

    fontSize: 12,

    color: '#9e9e9e',

    marginBottom: 2,

  },

  equipmentImage: {

    width: 40,

    height: 40,

    resizeMode: 'contain',

  },

  processStatusContainer: {

    alignItems: 'flex-end',

    justifyContent: 'center',

    minWidth: 90,

  },


  processStateText: {

    fontSize: 14,

    fontWeight: '600',

  },


  processTimeText: {

    fontSize: 11,

    color: '#9CA3AF',

    marginTop: 2,

  },


  processRightColumn: {

    alignItems: 'flex-end',

    justifyContent: 'center',

    minWidth: 90,

  },


  processState: {

    fontSize: 14,

    fontWeight: '600',

  },


  processTime: {

    fontSize: 13,

    color: '#000',

    marginTop: 3,

  },

  startBtnDisabled: {

    backgroundColor: '#9CA3AF',

    opacity: 0.7,

  },

  stopBtnDisabled: {

    borderColor: '#D1D5DB',

    opacity: 0.6,

  },

  processEquipmentType: {

    fontSize: 12,

    color: '#9CA3AF',

    marginTop: 2,

  },

});