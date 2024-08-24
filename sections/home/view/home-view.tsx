import { useState } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// components
import { View, Text } from "@/components/custom-native";
import { Spinner } from "@/components/spinner-overlay";
//
import { PostCard } from "@/sections/_common";
import HomePostButton from "../home-post-button";

// ----------------------------------------------------------------------

export default function HomeView() {
  const theme = useColorScheme() ?? "light";

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);

    await new Promise(() =>
      setTimeout(() => {
        setRefreshing(false);
        console.log("Home Refreshed");
      }, 1000)
    );
  };

  return (
    <View style={styles.cotainer}>
      <HomePostButton />

      <FlatList
        data={_mock}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <PostCard item={item} />
          </View>
        )}
        //
        style={{
          backgroundColor: Colors[theme].background,
        }}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        //
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          <Text font="700" style={{ fontSize: 20 }}>
            FOR YOU
          </Text>
        }
        ListHeaderComponentStyle={styles.header}
        ListFooterComponent={<Spinner size={42} />}
        ListFooterComponentStyle={styles.footer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    position: "relative",
  },
  columnWrapper: {
    paddingHorizontal: 8,
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    marginBottom: 8,
    marginHorizontal: 4,
  },
  header: {
    padding: 16,
  },
  footer: {
    paddingTop: 30,
    paddingBottom: 106,
    paddingHorizontal: 12,
    alignItems: "center",
  },
});

const _mock = [...Array(20)].map((_, index) => ({
  id: `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  title: "Pellentesque vel mauris lacinia, aliquam nibh non",
  imageUrl: `https://api-prod-minimal-v610.pages.dev/assets/images/cover/cover-${
    index + 1
  }.webp`,
  userId: `93af56ef-54fd-22a5-b19d-ff8e2da963f${index + 1}`,
  name: "Nam Blandit Bibendum",
  avatarUrl: `https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-${
    index + 1
  }.webp`,
}));
