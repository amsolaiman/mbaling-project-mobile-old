import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Badge } from "react-native-paper";
// _mock
import { _landlordDetails, _users } from "@/_mock";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Fonts from "@/theme/Fonts";
import Colors from "@/theme/Colors";
// assets
import { ListIcon, SettingIcon } from "@/assets/icons";
import AccountLandlordList from "./account-landlord-list";
import AccountLandlordSetup from "./account-landlord-setup";

// ----------------------------------------------------------------------

type TabProps = {
  title: string;
  isActive: boolean;
  onPress: VoidFunction;
  badgeCount: number | null;
};

const Tab: React.FC<TabProps> = ({ title, isActive, onPress, badgeCount }) => {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable onPress={onPress}>
      {title === "setup" && (
        <SettingIcon isActive={isActive} size={30} color={Colors[theme].text} />
      )}

      {title === "list" && (
        <ListIcon isActive={isActive} size={30} color={Colors[theme].text} />
      )}

      {badgeCount ? <Badge style={styles.badge}>{badgeCount}</Badge> : null}
    </Pressable>
  );
};

// ----------------------------------------------------------------------

export default function AccountLandlordDisplay() {
  const [currentTab, setCurrentTab] = useState<string>("setup");

  const _pending = [...Array(3)].map((item, index) => ({
    name: _landlordDetails[index].housingName,
    username: _users[index].username,
    avatarUrl: _users[index].avatarUrl,
  }));

  const _current = [...Array(5)].map((item, index) => ({
    name: _landlordDetails[index + 3].housingName,
    username: _users[index + 3].username,
    avatarUrl: _users[index + 3].avatarUrl,
  }));

  const TABS = [
    {
      name: "setup",
      badgeCount: null,
    },
    {
      name: "list",
      badgeCount: _pending.length,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {TABS.map((tab) => (
          <Tab
            key={tab.name}
            title={tab.name}
            isActive={currentTab === tab.name}
            onPress={() => setCurrentTab(tab.name)}
            badgeCount={tab.badgeCount}
          />
        ))}
      </View>

      <View style={styles.tabPage}>
        {currentTab === "setup" && (
          <AccountLandlordSetup
            chatLink={_landlordDetails[1].chatLink}
            mapLink={_landlordDetails[1].mapLink}
          />
        )}

        {currentTab === "list" && (
          <AccountLandlordList pendingList={_pending} currentList={_current} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    paddingTop: 12,
    paddingHorizontal: 22,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 12,
  },
  tabPage: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 102,
    paddingHorizontal: 16,
  },
  badge: {
    ...Fonts[500],
    position: "absolute",
    top: -5,
    right: -10,
  },
});
