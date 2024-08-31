import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import PagerView from "react-native-pager-view";
// _mock
import { _landlordDetails, _users } from "@/_mock";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// components
import InfoHelper from "@/components/info-helper";
import { Text } from "@/components/custom-native";
//
import UserItemCard from "../_common/user-item-card";

// ----------------------------------------------------------------------
type TabProps = {
  title: string;
  index: number;
  setIndex: (index: number) => void;
  isActive: boolean;
};

const Tab: React.FC<TabProps> = ({ title, index, setIndex, isActive }) => (
  <TouchableOpacity
    style={[styles.tabButton, isActive && styles.activeTab]}
    onPress={() => setIndex(index)}
  >
    <Text style={[styles.tabText, isActive && styles.activeTabText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default function AccountLandlordDisplay() {
  const theme = useColorScheme() ?? "light";

  const [selectedIndex, setSelectedIndex] = useState(0);

  console.log(selectedIndex)

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {["Setup", "List"].map((title, index) => (
          <Tab
            key={title}
            title={title}
            index={index}
            setIndex={setSelectedIndex}
            isActive={selectedIndex === index}
          />
        ))}
      </View>

      <PagerView
        style={styles.pagerView}
        initialPage={0}
        // onPageSelected={(e) => setSelectedIndex(e.nativeEvent.position)}
      >
        <View key="1" style={[styles.page, { backgroundColor: "red" }]}>
          <Text>Content for Tab 1</Text>
        </View>
        <View key="2" style={[styles.page, { backgroundColor: "blue" }]}>
          <Text>Content for Tab 2</Text>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#f8f8f8",
  },
  tabButton: {
    padding: 10,
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#007aff",
  },
  activeTabText: {
    color: "#007aff",
  },
  pagerView: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
