import { useEffect, useState } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
// @expo
import { router, useLocalSearchParams } from "expo-router";
// hooks
import { useBoolean } from "@/hooks/use-boolean";
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// components
import { View } from "@/components/custom-native";
import BackButton from "@/components/back-button";
// types
import { PostResponse } from "@/types/posts";
import { UserLandlordResponse } from "@/types/users";
//
import { PostCard, UserInfoSection } from "@/sections/_common";
import { PostCardProps } from "@/sections/_common/post-card";
import { UserInfoSectionProps } from "@/sections/_common/user-info-section";
import ProfileFooter from "../profile-footer";

// ----------------------------------------------------------------------

type LinkProps = {
  chatLink: string | null;
  mapLink: string | null;
};

export default function ProfileView() {
  const theme = useColorScheme() ?? "light";

  const { id } = useLocalSearchParams();

  const refreshing = useBoolean();

  const [data, setData] = useState<UserInfoSectionProps>();

  const [posts, setPosts] = useState<PostCardProps[]>();

  const [links, setLinks] = useState<LinkProps>();

  const loading = !data;

  const getData = async () => {
    try {
      const userResponse = await fetch(
        `${process.env.EXPO_PUBLIC_HOST_API}/api/landlord/list/${id as string}`
      );

      const postsResponse = await fetch(
        `${process.env.EXPO_PUBLIC_HOST_API}/api/post/search?userId=${
          id as string
        }`
      );

      const user: UserLandlordResponse = await userResponse.json();

      const posts: PostResponse[] = await postsResponse.json();

      const _userData = {
        username: user.username,
        fullName: user.housing_name,
        detailLine1: `${user.address_line_1}, ${user.address_line_2}`,
        detailLine2: `${user.address_line_3}, ${user.address_line_3}`,
        avatarUrl: user.avatar_url,
      };

      const _postsData = posts.map((post) => {
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

      const _linksData = {
        chatLink: user.chat_link,
        mapLink: user.map_link,
      };

      setData(_userData);
      setPosts(_postsData);
      setLinks(_linksData);
    } catch (error) {
      router.back();
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
    <View loadingState={loading} style={styles.container}>
      <BackButton />

      <View style={styles.container}>
        {!loading && (
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <PostCard item={item} hideProfile />
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
              <RefreshControl
                refreshing={refreshing.value}
                onRefresh={onRefresh}
              />
            }
            ListHeaderComponent={<UserInfoSection info={data} />}
            ListHeaderComponentStyle={styles.header}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={styles.footer}
          />
        )}
      </View>

      <ProfileFooter
        id={id as string}
        mapLink={links?.mapLink}
        chatLink={links?.chatLink}
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
    marginBottom: 26,
  },
  footer: {
    paddingBottom: 18,
  },
});
