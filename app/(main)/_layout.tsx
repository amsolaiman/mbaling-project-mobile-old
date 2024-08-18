import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
// routes
import { paths } from "@/routes/paths";
// hooks
import { useClientOnlyValue } from "@/hooks/useClientOnlyValue";
// theme
import Colors from "@/theme/Colors";
// assets
import {
  BaseIconHome,
  BaseIconUser,
  BaseIconSearch,
  BaseIconManage,
  BaseIconSettings,
} from "@/assets/icons";

// ----------------------------------------------------------------------

export default function MainLayout() {
  const role = "student";

  const isStudent = role === "student";

  const tabItemsDisplay = (route: string) => {
    if (route === paths.search && !isStudent) {
      return "none";
    } else if (route === paths.manage && isStudent) {
      return "none";
    } else {
      return "flex";
    }
  };

  return (
    <Tabs
      initialRouteName={paths.home}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.primary,
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabs, styles.tabsShadow],
        tabBarItemStyle: { display: tabItemsDisplay(route.name) },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      })}
    >
      <Tabs.Screen
        name={paths.home}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <BaseIconHome isActive={focused} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={paths.search}
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <BaseIconSearch isActive={focused} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={paths.manage}
        options={{
          title: "Manage",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <BaseIconManage isActive={focused} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={paths.account}
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <BaseIconUser isActive={focused} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={paths.settings.root}
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <BaseIconSettings isActive={focused} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabs: {
    height: 56,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    elevation: 0,
    borderRadius: 100,
    borderTopWidth: 0,
  },
  tabsShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
});
