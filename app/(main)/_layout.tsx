import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useClientOnlyValue } from "@/hooks/use-client-only-value";
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
  const theme = useColorScheme() ?? "light";

  const role = "student";

  const isStudent = role === "student";

  const tabItemsDisplay = (route: string) => {
    if (route === "search" && !isStudent) {
      return "none";
    } else if (route === "manage" && isStudent) {
      return "none";
    } else {
      return "flex";
    }
  };

  return (
    <Tabs
      initialRouteName={"(main)/home"}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.primary,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.tabs,
          styles.tabsShadow,
          { backgroundColor: Colors[theme].card },
        ],
        tabBarItemStyle: { display: tabItemsDisplay(route.name) },
        tabBarHideOnKeyboard: true,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <BaseIconHome isActive={focused} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <BaseIconSearch isActive={focused} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="manage"
        options={{
          title: "Manage",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <BaseIconManage isActive={focused} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <BaseIconUser isActive={focused} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
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
    borderRadius: 50,
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
