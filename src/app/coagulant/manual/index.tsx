// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import React from 'react';
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function CoagulantManualScreen() {
//   const router = useRouter();

//   return (
//     <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

//       {/* ================= HEADER ================= */}
//       <View style={styles.header}>

//         <TouchableOpacity
//           onPress={() => router.back()}
//           style={styles.backButton}
//         >
//           <MaterialCommunityIcons
//             name="arrow-left"
//             size={25}
//             color="#FFFFFF"
//           />
//         </TouchableOpacity>

//         <Text style={styles.headerTitle}>
//           Coagulant Dosing
//         </Text>

//         <View style={styles.manualBadge}>
//           <Text style={styles.manualText}>
//             Manual Mode
//           </Text>
//         </View>

//       </View>


//       {/* ================= MAIN CONTENT ================= */}
//       <ScrollView
//         style={styles.scrollView}
//         contentContainerStyle={styles.content}
//         showsVerticalScrollIndicator={false}
//       >

//         <Text style={styles.description}>
//           Powder dosing, Water dosing and solution
//           {'\n'}
//           transfer from mixing tank
//         </Text>


//         {/* ================= PROCESS FLOW ================= */}
//         <View style={styles.processCard}>

//           {/* POWDER */}
//           <View style={styles.processItem}>

//             <Text style={styles.processTitle}>
//               Powder
//             </Text>

//             <Text style={styles.processSubtitle}>
//               Dosing
//             </Text>

//             <Text style={styles.processSubtitle}>
//               (Stepper)
//             </Text>

//             <View style={styles.processIcon}>
//               <MaterialCommunityIcons
//                 name="flask"
//                 size={40}
//                 color="#8B6F47"
//               />
//             </View>

//           </View>


//           {/* ARROW */}
//           <MaterialCommunityIcons
//             name="arrow-right"
//             size={20}
//             color="#1769AA"
//           />


//           {/* WATER */}
//           <View style={styles.processItem}>

//             <Text style={styles.processTitle}>
//               Water
//             </Text>

//             <Text style={styles.processSubtitle}>
//               Dosing
//             </Text>

//             <Text style={styles.processSubtitle}>
//               (Stepper)
//             </Text>

//             <View style={styles.processIcon}>
//               <MaterialCommunityIcons
//                 name="water"
//                 size={40}
//                 color="#208AEF"
//               />
//             </View>

//           </View>


//           {/* ARROW */}
//           <MaterialCommunityIcons
//             name="arrow-right"
//             size={20}
//             color="#1769AA"
//           />


//           {/* TRANSFER PUMP */}
//           <View style={styles.processItem}>

//             <Text style={styles.processTitle}>
//               Transfer Pump
//             </Text>

//             <Text style={styles.processSubtitle}>
//               (To Mixing Tank)
//             </Text>

//             <View style={styles.processIcon}>
//               <MaterialCommunityIcons
//                 name="water-pump"
//                 size={40}
//                 color="#40566B"
//               />
//             </View>

//           </View>


//           {/* ARROW */}
//           <MaterialCommunityIcons
//             name="arrow-right"
//             size={20}
//             color="#1769AA"
//           />


//           {/* MIXING TANK */}
//           <View style={styles.processItem}>

//             <Text style={styles.processTitle}>
//               Mixing
//             </Text>

//             <Text style={styles.processSubtitle}>
//               Tank
//             </Text>

//             <View style={styles.processIcon}>
//               <MaterialCommunityIcons
//                 name="database"
//                 size={40}
//                 color="#208AEF"
//               />
//             </View>

//           </View>

//         </View>


//         {/* ================= ASSETS STATUS ================= */}
//         <View style={styles.card}>

//           <Text style={styles.sectionTitle}>
//             ASSETS STATUS
//           </Text>


//           {/* POWDER DOSING */}
//           <TouchableOpacity 
//           style={styles.asset}
//           onPress={() => router.push('/coagulant/manual/powder-dosing')}
//           >

//             <View style={styles.assetIcon}>
//               <MaterialCommunityIcons
//                 name="flask"
//                 size={27}
//                 color="#40566B"
//               />
//             </View>

//             <View style={styles.assetInfo}>

//               <Text style={styles.assetTitle}>
//                 Powder Dosing (Stepper)
//               </Text>

//               <View style={styles.statusRow}>

//                 <Text style={styles.statusLabel}>
//                   Status
//                 </Text>

//                 <View style={styles.offBadge}>
//                   <Text style={styles.offText}>
//                     OFF
//                   </Text>
//                 </View>

//               </View>

//             </View>

//             <MaterialCommunityIcons
//               name="chevron-right"
//               size={22}
//               color="#9CA3AF"
//             />

//           </TouchableOpacity>


//           {/* WATER DOSING */}
//           <TouchableOpacity 
//           style={styles.asset}
//           onPress={() => router.push('/coagulant/manual/water-dosing') }
//           >

//             <View style={styles.assetIcon}>
//               <MaterialCommunityIcons
//                 name="water"
//                 size={27}
//                 color="#208AEF"
//               />
//             </View>

//             <View style={styles.assetInfo}>

//               <Text style={styles.assetTitle}>
//                 Water Dosing (Stepper)
//               </Text>

//               <View style={styles.statusRow}>

//                 <Text style={styles.statusLabel}>
//                   Status
//                 </Text>

//                 <View style={styles.offBadge}>
//                   <Text style={styles.offText}>
//                     OFF
//                   </Text>
//                 </View>

//               </View>

//             </View>

//             <MaterialCommunityIcons
//               name="chevron-right"
//               size={22}
//               color="#9CA3AF"
//             />

//           </TouchableOpacity>


//           {/* TRANSFER PUMP */}
//           <TouchableOpacity 
//           style={styles.asset}
//           onPress={() => router.push('/coagulant/manual/transfer-pump') }
//           >

//             <View style={styles.assetIcon}>
//               <MaterialCommunityIcons
//                 name="water-pump"
//                 size={27}
//                 color="#40566B"
//               />
//             </View>

//             <View style={styles.assetInfo}>

//               <Text style={styles.assetTitle}>
//                 Transfer Pump
//               </Text>

//               <View style={styles.statusRow}>

//                 <Text style={styles.statusLabel}>
//                   Status
//                 </Text>

//                 <View style={styles.offBadge}>
//                   <Text style={styles.offText}>
//                     OFF
//                   </Text>
//                 </View>

//               </View>

//             </View>

//             <MaterialCommunityIcons
//               name="chevron-right"
//               size={22}
//               color="#9CA3AF"
//             />

//           </TouchableOpacity>

//         </View>


//         {/* ================= QUICK ACTIONS ================= */}
//         <View style={styles.card}>

//           <Text style={styles.sectionTitle}>
//             QUICK ACTIONS
//           </Text>

//           <View style={styles.buttons}>

//             {/* START */}
//             <TouchableOpacity style={styles.startButton}>

//               <MaterialCommunityIcons
//                 name="play-circle"
//                 size={17}
//                 color="#FFFFFF"
//               />

//               <Text style={styles.buttonText}>
//                 START ALL
//               </Text>

//             </TouchableOpacity>


//             {/* STOP */}
//             <TouchableOpacity style={styles.stopButton}>

//               <MaterialCommunityIcons
//                 name="stop"
//                 size={17}
//                 color="#EF4444"
//               />

//               <Text style={styles.stopText}>
//                 STOP ALL
//               </Text>

//             </TouchableOpacity>


//             {/* RESET */}
//             <TouchableOpacity style={styles.resetButton}>

//               <MaterialCommunityIcons
//                 name="restart"
//                 size={17}
//                 color="#1769AA"
//               />

//               <Text style={styles.resetText}>
//                 RESET ALL
//               </Text>

//             </TouchableOpacity>

//           </View>

//         </View>

//       </ScrollView>


//       {/* ================================================= */}
//       {/*                    BOTTOM NAVIGATION              */}
//       {/* ================================================= */}

//       <View style={styles.bottomNav}>

//         {/* HOME */}
//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => router.push('/(tabs)/dashboard')}
//           activeOpacity={0.7}
//         >
//           <Ionicons
//             name="home-outline"
//             size={24}
//             color="#6B7280"
//           />

//           <Text style={styles.navText}>
//             Home
//           </Text>
//         </TouchableOpacity>


//         {/* PROCESS */}
//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => router.push('/(tabs)/control')}
//           activeOpacity={0.7}
//         >
//           <Ionicons
//             name="git-network-outline"
//             size={24}
//             color="#6B7280"
//           />

//           <Text style={styles.navText}>
//             Process
//           </Text>
//         </TouchableOpacity>


//         {/* MANUAL */}
//         <TouchableOpacity
//           style={styles.navItem}
//           activeOpacity={0.7}
//         >
//           <Ionicons
//             name="hand-left-outline"
//             size={24}
//             color="#1769AA"
//           />

//           <Text style={styles.navTextActive}>
//             Manual
//           </Text>

//         </TouchableOpacity>


//         {/* HISTORY */}
//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => router.push('/coagulant/manual/history')}
//           activeOpacity={0.7}
//         >
//           <Ionicons
//             name="time-outline"
//             size={24}
//             color="#6B7280"
//           />

//           <Text style={styles.navText}>
//             History
//           </Text>
//         </TouchableOpacity>


//         {/* SETTINGS */}
//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => router.push('/(tabs)/settings')}
//           activeOpacity={0.7}
//         >
//           <Ionicons
//             name="settings-outline"
//             size={24}
//             color="#6B7280"
//           />

//           <Text style={styles.navText}>
//             Settings
//           </Text>
//         </TouchableOpacity>

//       </View>

//     </SafeAreaView>
//   );
// }


// const styles = StyleSheet.create({

//   /* ================= CONTAINER ================= */

//   container: {
//     flex: 1,
//     backgroundColor: '#F5F7FA',
//   },

//   scrollView: {
//     flex: 1,
//   },


//   /* ================= HEADER ================= */

//   header: {
//     height: 58,
//     backgroundColor: '#0F1E30',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//   },

//   backButton: {
//     paddingRight: 8,
//     paddingVertical: 8,
//   },

//   headerTitle: {
//     flex: 1,
//     color: '#FFFFFF',
//     fontSize: 17,
//     fontWeight: '700',
//     marginLeft: 8,
//   },

//   manualBadge: {
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 9,
//     paddingVertical: 7,
//     borderRadius: 4,
//   },

//   manualText: {
//     color: '#1769AA',
//     fontSize: 10,
//     fontWeight: '600',
//   },


//   /* ================= CONTENT ================= */

//   content: {
//     padding: 15,
//     paddingBottom: 25,
//   },

//   description: {
//     fontSize: 13,
//     color: '#1F2937',
//     lineHeight: 18,
//     marginBottom: 12,
//   },


//   /* ================= PROCESS FLOW ================= */

//   processCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 9,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     paddingVertical: 12,
//     paddingHorizontal: 6,
//     marginBottom: 12,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },

//   processItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   processTitle: {
//     fontSize: 8,
//     color: '#1F2937',
//     fontWeight: '700',
//     textAlign: 'center',
//   },

//   processSubtitle: {
//     fontSize: 7,
//     color: '#6B7280',
//     textAlign: 'center',
//   },

//   processIcon: {
//     width: 55,
//     height: 55,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 5,
//   },


//   /* ================= CARD ================= */

//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 9,
//     padding: 10,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//   },

//   sectionTitle: {
//     fontSize: 10,
//     color: '#1769AA',
//     fontWeight: '800',
//     marginBottom: 8,
//   },


//   /* ================= ASSET ================= */

//   asset: {
//     minHeight: 60,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderRadius: 7,
//     paddingHorizontal: 9,
//     marginBottom: 7,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   assetIcon: {
//     width: 42,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   assetInfo: {
//     flex: 1,
//     marginLeft: 5,
//   },

//   assetTitle: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#1F2937',
//     marginBottom: 5,
//   },

//   statusRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   statusLabel: {
//     fontSize: 9,
//     color: '#6B7280',
//     marginRight: 7,
//   },

//   offBadge: {
//     backgroundColor: '#E9F7EF',
//     paddingHorizontal: 9,
//     paddingVertical: 3,
//     borderRadius: 10,
//   },

//   offText: {
//     fontSize: 8,
//     color: '#16A34A',
//     fontWeight: '700',
//   },


//   /* ================= QUICK ACTIONS ================= */

//   buttons: {
//     flexDirection: 'row',
//     gap: 6,
//   },

//   startButton: {
//     flex: 1,
//     backgroundColor: '#22C55E',
//     paddingVertical: 11,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },

//   stopButton: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#EF4444',
//     paddingVertical: 11,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },

//   resetButton: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#1769AA',
//     paddingVertical: 11,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },

//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 9,
//     fontWeight: '700',
//     marginLeft: 4,
//   },

//   stopText: {
//     color: '#EF4444',
//     fontSize: 9,
//     fontWeight: '700',
//     marginLeft: 4,
//   },

//   resetText: {
//     color: '#1769AA',
//     fontSize: 9,
//     fontWeight: '700',
//     marginLeft: 4,
//   },


//   /* ================================================= */
//   /*                 BOTTOM NAVIGATION                 */
//   /* ================================================= */

//   bottomNav: {
//     height: 70,
//     backgroundColor: '#FFFFFF',
//     borderTopWidth: 1,
//     borderTopColor: '#E5E7EB',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     paddingHorizontal: 4,
//   },

//   navItem: {
//     flex: 1,
//     height: 70,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   navText: {
//     fontSize: 10,
//     color: '#6B7280',
//     marginTop: 4,
//     fontWeight: '500',
//   },

//   navTextActive: {
//     fontSize: 10,
//     color: '#1769AA',
//     marginTop: 4,
//     fontWeight: '700',
//   },

// });


import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';

export default function CoagulantManualScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

      {/* ================= HEADER ================= */}
      <View style={styles.header}>

        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={25}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Coagulant Dosing
        </Text>

        <View style={styles.manualBadge}>
          <Text style={styles.manualText}>
            Manual Mode
          </Text>
        </View>

      </View>


      {/* ================= MAIN CONTENT ================= */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.description}>
          Powder dosing, Water dosing and solution
          {'\n'}
          transfer from mixing tank
        </Text>


        {/* ================= PROCESS FLOW ================= */}
        <View style={styles.processCard}>

          {/* POWDER */}
          <View style={styles.processItem}>

            <Text style={styles.processTitle}>
              Powder
            </Text>

            <Text style={styles.processSubtitle}>
              Dosing
            </Text>

            <Text style={styles.processSubtitle}>
              (Stepper)
            </Text>

            <View style={styles.processIcon}>
              <Image
                source={require('../../../../assets/images/powderdosing.png')}
                style={styles.processImage}
              />
            </View>

          </View>


          {/* ARROW */}
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color="#1769AA"
          />


          {/* WATER */}
          <View style={styles.processItem}>

            <Text style={styles.processTitle}>
              Water
            </Text>

            <Text style={styles.processSubtitle}>
              Dosing
            </Text>

            <Text style={styles.processSubtitle}>
              (Stepper)
            </Text>

            <View style={styles.processIcon}>
              <Image
                source={require('../../../../assets/images/waterdosing.png')}
                style={styles.processImage}
              />
            </View>

          </View>


          {/* ARROW */}
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color="#1769AA"
          />


          {/* TRANSFER PUMP */}
          <View style={styles.processItem}>

            <Text style={styles.processTitle}>
              Transfer Pump
            </Text>

            <Text style={styles.processSubtitle}>
              (To Mixing Tank)
            </Text>

            <View style={styles.processIcon}>
              <Image
                source={require('../../../../assets/images/transferpump.png')}
                style={styles.processImage}
              />
            </View>

          </View>


          {/* ARROW */}
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color="#1769AA"
          />


          {/* MIXING TANK */}
          <View style={styles.processItem}>

            <Text style={styles.processTitle}>
              Mixing
            </Text>

            <Text style={styles.processSubtitle}>
              Tank
            </Text>

            <View style={styles.processIcon}>
              <Image
                source={require('../../../../assets/images/mixingtank.png')}
                style={styles.processImage}
              />
            </View>

          </View>

        </View>


        {/* ================= ASSETS STATUS ================= */}
        <View style={styles.card}>

          <Text style={styles.sectionTitle}>
            ASSETS STATUS
          </Text>


          {/* POWDER DOSING */}
          <TouchableOpacity
            style={styles.asset}
            onPress={() => router.push('/coagulant/manual/powder-dosing')}
          >

            <View style={styles.assetIcon}>
              <Image
                source={require('../../../../assets/images/powderdosing.png')}
                style={styles.assetImage}
              />
            </View>

            <View style={styles.assetInfo}>

              <Text style={styles.assetTitle}>
                Powder Dosing (Stepper)
              </Text>

              <View style={styles.statusRow}>

                <Text style={styles.statusLabel}>
                  Status
                </Text>

                <View style={styles.offBadge}>
                  <Text style={styles.offText}>
                    OFF
                  </Text>
                </View>

              </View>

            </View>

            <MaterialCommunityIcons
              name="chevron-right"
              size={22}
              color="#9CA3AF"
            />

          </TouchableOpacity>


          {/* WATER DOSING */}
          <TouchableOpacity
            style={styles.asset}
            onPress={() => router.push('/coagulant/manual/water-dosing')}
          >

            <View style={styles.assetIcon}>
              <Image
                source={require('../../../../assets/images/waterdosing.png')}
                style={styles.assetImage}
              />
            </View>

            <View style={styles.assetInfo}>

              <Text style={styles.assetTitle}>
                Water Dosing (Stepper)
              </Text>

              <View style={styles.statusRow}>

                <Text style={styles.statusLabel}>
                  Status
                </Text>

                <View style={styles.offBadge}>
                  <Text style={styles.offText}>
                    OFF
                  </Text>
                </View>

              </View>

            </View>

            <MaterialCommunityIcons
              name="chevron-right"
              size={22}
              color="#9CA3AF"
            />

          </TouchableOpacity>


          {/* TRANSFER PUMP */}
          <TouchableOpacity
            style={styles.asset}
            onPress={() => router.push('/coagulant/manual/transfer-pump')}
          >

            <View style={styles.assetIcon}>
              <Image
                source={require('../../../../assets/images/transferpump.png')}
                style={styles.assetImage}
              />
            </View>

            <View style={styles.assetInfo}>

              <Text style={styles.assetTitle}>
                Transfer Pump
              </Text>

              <View style={styles.statusRow}>

                <Text style={styles.statusLabel}>
                  Status
                </Text>

                <View style={styles.offBadge}>
                  <Text style={styles.offText}>
                    OFF
                  </Text>
                </View>

              </View>

            </View>

            <MaterialCommunityIcons
              name="chevron-right"
              size={22}
              color="#9CA3AF"
            />

          </TouchableOpacity>

        </View>


        {/* ================= QUICK ACTIONS ================= */}
        <View style={styles.card}>

          <Text style={styles.sectionTitle}>
            QUICK ACTIONS
          </Text>

          <View style={styles.buttons}>

            {/* START */}
            <TouchableOpacity style={styles.startButton}>

              <MaterialCommunityIcons
                name="play-circle"
                size={17}
                color="#FFFFFF"
              />

              <Text style={styles.buttonText}>
                START ALL
              </Text>

            </TouchableOpacity>


            {/* STOP */}
            <TouchableOpacity style={styles.stopButton}>

              <MaterialCommunityIcons
                name="stop"
                size={17}
                color="#EF4444"
              />

              <Text style={styles.stopText}>
                STOP ALL
              </Text>

            </TouchableOpacity>


            {/* RESET */}
            <TouchableOpacity style={styles.resetButton}>

              <MaterialCommunityIcons
                name="restart"
                size={17}
                color="#1769AA"
              />

              <Text style={styles.resetText}>
                RESET ALL
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>



    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  /* ================= CONTAINER ================= */

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  scrollView: {
    flex: 1,
  },


  /* ================= HEADER ================= */

  header: {
    height: 70,
    backgroundColor: '#0F1E30',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 14,
  },

  backButton: {
    paddingRight: 8,
    paddingVertical: 8,
  },

  headerTitle: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 8,
  },

  manualBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 9,
    paddingVertical: 7,
    borderRadius: 4,
  },

  manualText: {
    color: '#1769AA',
    fontSize: 10,
    fontWeight: '600',
  },


  /* ================= CONTENT ================= */

  content: {
    padding: 15,
    paddingBottom: 100,
  },

  description: {
    fontSize: 13,
    color: '#1F2937',
    lineHeight: 18,
    marginBottom: 12,
  },


  /* ================= PROCESS FLOW ================= */

  processCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 12,
    paddingHorizontal: 6,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  processItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  processTitle: {
    fontSize: 8,
    color: '#1F2937',
    fontWeight: '700',
    textAlign: 'center',
  },

  processSubtitle: {
    fontSize: 7,
    color: '#6B7280',
    textAlign: 'center',
  },

  processIcon: {
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },


  /* ================= CARD ================= */

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  sectionTitle: {
    fontSize: 10,
    color: '#1769AA',
    fontWeight: '800',
    marginBottom: 8,
  },


  /* ================= ASSET ================= */

  asset: {
    minHeight: 60,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 7,
    paddingHorizontal: 9,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },

  assetIcon: {
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },

  assetInfo: {
    flex: 1,
    marginLeft: 5,
  },

  assetTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 5,
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusLabel: {
    fontSize: 9,
    color: '#6B7280',
    marginRight: 7,
  },

  offBadge: {
    backgroundColor: '#E9F7EF',
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 10,
  },

  offText: {
    fontSize: 8,
    color: '#16A34A',
    fontWeight: '700',
  },


  /* ================= QUICK ACTIONS ================= */

  buttons: {
    flexDirection: 'row',
    gap: 6,
  },

  startButton: {
    flex: 1,
    backgroundColor: '#22C55E',
    paddingVertical: 11,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  stopButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#EF4444',
    paddingVertical: 11,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  resetButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#1769AA',
    paddingVertical: 11,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
    marginLeft: 4,
  },

  stopText: {
    color: '#EF4444',
    fontSize: 9,
    fontWeight: '700',
    marginLeft: 4,
  },

  resetText: {
    color: '#1769AA',
    fontSize: 9,
    fontWeight: '700',
    marginLeft: 4,
  },

  processImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  assetImage: {
  width: 30,
  height: 30,
  resizeMode: 'contain',
},

});
