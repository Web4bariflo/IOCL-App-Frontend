import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Image } from 'react-native';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type HistoryType = 'Powder Dosing' | 'Water Dosing' | 'Pump';

interface HistoryItem {
  id: number;
  type: HistoryType;
  title: string;
  start: string;
  stop: string;
  onDuration: string;
  offDuration: string;
  cycleTime: string;
  date: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: string;
}

const historyData: HistoryItem[] = [
  {
    id: 1,
    type: 'Powder Dosing',
    title: 'Powder Dosing (Stepper)',
    start: '14 May 2025 10:15:30 AM',
    stop: '14 May 2025 10:16:45 AM',
    onDuration: '00:01:15',
    offDuration: '00:03:00',
    cycleTime: '00:04:15',
    date: '14 May 2025',
    icon: 'flask',
    iconColor: '#8B6F47',
  },
  {
    id: 2,
    type: 'Water Dosing',
    title: 'Water Dosing (Stepper)',
    start: '14 May 2025 10:20:00 AM',
    stop: '14 May 2025 10:21:10 AM',
    onDuration: '00:01:10',
    offDuration: '00:02:00',
    cycleTime: '00:03:10',
    date: '14 May 2025',
    icon: 'water',
    iconColor: '#208AEF',
  },
  {
    id: 3,
    type: 'Pump',
    title: 'Transfer Pump (To Mixing Tank)',
    start: '14 May 2025 10:25:20 AM',
    stop: '14 May 2025 10:25:45 AM',
    onDuration: '00:00:25',
    offDuration: '00:05:00',
    cycleTime: '00:05:25',
    date: '14 May 2025',
    icon: 'water-pump',
    iconColor: '#40566B',
  },
];

export default function ManualHistoryScreen() {
  const router = useRouter();

  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showFilter, setShowFilter] = useState(false);

  const filteredData = useMemo(() => {
    if (selectedFilter === 'All') {
      return historyData;
    }

    return historyData.filter((item) => {
      if (selectedFilter === 'Pump') {
        return item.type === 'Pump';
      }

      return item.type === selectedFilter;
    });
  }, [selectedFilter]);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

      {/* ================= HEADER ================= */}

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={22}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Manual Mode - History
        </Text>

      </View>


      {/* ================= DATE + FILTER ================= */}

      <View style={styles.filterRow}>

        <TouchableOpacity style={styles.dateButton}>
          <Text style={styles.dateText}>
            14 May 2025
          </Text>

          <Ionicons
            name="calendar-outline"
            size={15}
            color="#6B7280"
          />
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowFilter(true)}
          activeOpacity={0.7}
        >
          <Ionicons
            name="filter-outline"
            size={14}
            color="#374151"
          />

          <Text style={styles.filterText}>
            Filter
          </Text>
        </TouchableOpacity>

      </View>


      {/* ================= FILTER TABS ================= */}

      {/* ================= FILTER TABS ================= */}

{/* ================= FILTER TABS ================= */}

<View style={styles.tabsWrapper}>
  <View style={styles.tabsContainer}>
    {['All', 'Powder Dosing', 'Water Dosing', 'Pump'].map((filter) => (
      <TouchableOpacity
        key={filter}
        style={[
          styles.filterTab,
          selectedFilter === filter && styles.activeFilterTab,
        ]}
        onPress={() => setSelectedFilter(filter)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.filterTabText,
            selectedFilter === filter && styles.activeFilterTabText,
          ]}
        >
          {filter}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
</View>


      {/* ================= HISTORY LIST ================= */}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {filteredData.length === 0 ? (
          <View style={styles.emptyContainer}>
            <MaterialCommunityIcons
              name="history"
              size={40}
              color="#9CA3AF"
            />

            <Text style={styles.emptyTitle}>
              No History Found
            </Text>

            <Text style={styles.emptyText}>
              There are no records for the selected filter.
            </Text>
          </View>
        ) : (
          filteredData.map((item) => (
            <HistoryCard
              key={item.id}
              item={item}
            />
          ))
        )}

      </ScrollView>


      {/* ================= FILTER MODAL ================= */}

      <Modal
        visible={showFilter}
        transparent
        animationType="fade"
        onRequestClose={() => setShowFilter(false)}
      >

        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowFilter(false)}
        >

          <View style={styles.filterModal}>

            <View style={styles.modalHeader}>

              <Text style={styles.modalTitle}>
                Filter History
              </Text>

              <TouchableOpacity
                onPress={() => setShowFilter(false)}
              >
                <Ionicons
                  name="close"
                  size={22}
                  color="#6B7280"
                />
              </TouchableOpacity>

            </View>


            {['All', 'Powder Dosing', 'Water Dosing', 'Pump'].map(
              (filter) => (
                <TouchableOpacity
                  key={filter}
                  style={styles.modalOption}
                  onPress={() => {
                    setSelectedFilter(filter);
                    setShowFilter(false);
                  }}
                >

                  <Text
                    style={[
                      styles.modalOptionText,
                      selectedFilter === filter &&
                        styles.selectedModalOptionText,
                    ]}
                  >
                    {filter}
                  </Text>

                  {selectedFilter === filter && (
                    <Ionicons
                      name="checkmark"
                      size={20}
                      color="#1769AA"
                    />
                  )}

                </TouchableOpacity>
              )
            )}

          </View>

        </TouchableOpacity>

      </Modal>

 

    </SafeAreaView>
  );
}


/* ========================================================= */
/*                    HISTORY CARD                           */
/* ========================================================= */

function HistoryCard({ item }: { item: HistoryItem }) {
  return (
    <View style={styles.historyCard}>

      {/* Card title */}

      <View style={styles.historyTitleRow}>

        <Image
  source={
    item.type === 'Powder Dosing'
      ? require('../../../../assets/images/powderdosing.png')
      : item.type === 'Water Dosing'
      ? require('../../../../assets/images/waterdosing.png')
      : require('../../../../assets/images/transferpump.png')
  }
  style={styles.historyImage}
/>

        <Text style={styles.historyTitle}>
          {item.title}
        </Text>

      </View>


      {/* START */}

      <View style={styles.dataRow}>

        <Text style={styles.dataLabel}>
          START
        </Text>

        <Text style={styles.dataValue}>
          {item.start}
        </Text>

      </View>


      {/* STOP */}

      <View style={styles.dataRow}>

        <Text style={styles.dataLabel}>
          STOP
        </Text>

        <Text style={styles.dataValue}>
          {item.stop}
        </Text>

      </View>


      {/* ON DURATION */}

      <View style={styles.dataRow}>

        <Text style={styles.dataLabel}>
          ON Duration
        </Text>

        <Text style={styles.dataValue}>
          {item.onDuration}
        </Text>

      </View>


      {/* OFF DURATION */}

      <View style={styles.dataRow}>

        <Text style={styles.dataLabel}>
          OFF Duration
        </Text>

        <Text style={styles.dataValue}>
          {item.offDuration}
        </Text>

      </View>


      {/* CYCLE TIME */}

      <View style={styles.dataRow}>

        <Text style={styles.dataLabel}>
          Cycle Time
        </Text>

        <Text style={styles.dataValue}>
          {item.cycleTime}
        </Text>

      </View>

    </View>
  );
}


/* ========================================================= */
/*                         STYLES                            */
/* ========================================================= */

const styles = StyleSheet.create({

  /* ================= CONTAINER ================= */

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },


  /* ================= HEADER ================= */

  header: {
    height: 58,
    backgroundColor: '#0F1E30',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  backButton: {
    padding: 6,
    marginRight: 6,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },


  /* ================= FILTER ROW ================= */

  filterRow: {
    height: 50,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  dateButton: {
    height: 30,
    minWidth: 145,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dateText: {
    fontSize: 10,
    color: '#374151',
  },

  filterButton: {
    height: 30,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  filterText: {
    fontSize: 10,
    color: '#374151',
    fontWeight: '600',
  },


  /* ================= FILTER TABS ================= */

  tabsWrapper: {
  height: 42,
  justifyContent: 'center',
},

tabsContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  paddingHorizontal: 10,
},

filterTab: {
  width: 80,
  height: 32,
  backgroundColor: '#E8F3FF',
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
},

activeFilterTab: {
  backgroundColor: '#1769AA',
},

filterTabText: {
  fontSize: 8,
  color: '#4B5563',
  fontWeight: '600',
  textAlign: 'center',
},

activeFilterTabText: {
  color: '#FFFFFF',
},

  /* ================= SCROLL ================= */

  scrollView: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 20,
  },


  /* ================= HISTORY CARD ================= */

  historyCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 8,
    marginBottom: 8,
  },

  historyTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },

  historyTitle: {
    fontSize: 9,
    color: '#1F2937',
    fontWeight: '700',
    marginLeft: 5,
  },

  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 17,
  },

  dataLabel: {
    fontSize: 8,
    color: '#6B7280',
    fontWeight: '500',
  },

  dataValue: {
    fontSize: 8,
    color: '#374151',
    textAlign: 'right',
  },


  /* ================= EMPTY ================= */

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },

  emptyTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
    marginTop: 10,
  },

  emptyText: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 5,
  },


  /* ================= FILTER MODAL ================= */

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  filterModal: {
    width: '82%',
    maxWidth: 340,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    elevation: 10,
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  modalTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },

  modalOption: {
    minHeight: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  modalOptionText: {
    fontSize: 12,
    color: '#374151',
  },

  selectedModalOptionText: {
    color: '#1769AA',
    fontWeight: '700',
  },
  historyImage: {
  width: 16,
  height: 16,
  resizeMode: 'contain',
},


});