import { useState } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
// _mock
import { _landlordDetails, _posts, _users } from "@/_mock";
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

  const _data = _posts.map((post) => {
    const { id, title, photos, housingId } = post;

    const user = _users.find((user) => user.id === housingId);

    const landlordDetail = _landlordDetails.find(
      (detail) => detail.userId === user?.id
    );

    return {
      id,
      title,
      imageUrl: photos[0],
      userId: housingId,
      name: landlordDetail ? landlordDetail.housingName : "",
      avatarUrl: user ? user.avatarUrl : "",
    };
  });

  return (
    <View style={styles.cotainer}>
      <HomePostButton />

      <FlatList
        data={_data}
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
