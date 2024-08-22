import { FlatList, StyleSheet } from "react-native";
// components
import { View, Text } from "@/components/custom-default";
import { Spinner } from "@/components/spinner-overlay";
//
import { PostCard } from "@/sections/_common";
import HomePostButton from "../home-post-button";

// ----------------------------------------------------------------------

export default function HomeView() {
  const _mock = [...Array(20)].map((_, index) => ({
    id: `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
    title: "Pellentesque vel mauris lacinia, aliquam nibh non",
    imageUrl: `https://api-prod-minimal-v610.pages.dev/assets/images/cover/cover-${
      index + 1
    }.webp`,
    name: "Nam Blandit Bibendum",
    avatarUrl: `https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-${
      index + 1
    }.webp`,
  }));

  return (
    <View style={styles.container}>
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
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        //
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
  container: {
    flex: 1,
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
