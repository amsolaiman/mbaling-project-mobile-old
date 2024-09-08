import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
// hooks
import { useBoolean } from "@/hooks/use-boolean";
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// components
import { Spinner } from "@/components/spinner-overlay";
import { View, Text } from "@/components/custom-native";
// types
import { PostResponse } from "@/types/posts";
//
import { PostCard } from "@/sections/_common";
import { PostCardProps } from "@/sections/_common/post-card";
import HomePostButton from "../home-post-button";

// ----------------------------------------------------------------------

export default function HomeView() {
  const theme = useColorScheme() ?? "light";

  const refreshing = useBoolean();

  const [data, setData] = useState<PostCardProps[]>();

  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_HOST_API}/api/post/list`
      );

      const posts: PostResponse[] = await response.json();

      const _data = posts.map((post) => {
        const { id, title, uploads, user_id, housing_name, avatar_url } = post;

        return {
          id,
          title,
          imageUrl: uploads[0].img_url,
          userId: user_id,
          name: housing_name,
          avatarUrl: avatar_url,
        };
      });

      setData(shuffle(_data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = async () => {
    refreshing.onTrue();

    await new Promise(async () => {
      await getData();
      refreshing.onFalse();
    });
  };

  return (
    <View style={styles.container}>
      <HomePostButton />

      <FlatList
        data={data}
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
          <RefreshControl refreshing={refreshing.value} onRefresh={onRefresh} />
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
  container: {
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
