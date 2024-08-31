import { useEffect, useState } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
// @expo
import { router, useLocalSearchParams } from "expo-router";
// _mock
import { _landlordDetails, _posts, _users } from "@/_mock";
// hooks
import { useBoolean } from "@/hooks/use-boolean";
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// components
import { View } from "@/components/custom-native";
import BackButton from "@/components/back-button";
import SpinnerOverlay from "@/components/spinner-overlay";
//
import { PostCard, UserInfoSection } from "@/sections/_common";
import { UserInfoProps } from "@/sections/_common/user-info-section";
import ProfileFooter from "../profile-footer";

// ----------------------------------------------------------------------

export default function ProfileView() {
  const theme = useColorScheme() ?? "light";

  const { id } = useLocalSearchParams();

  const keyDetails = _users.find((_) => _.id === id);

  const keyHousing = _landlordDetails.find((_) => _.userId === id);

  const refreshing = useBoolean();

  const [data, setData] = useState<UserInfoProps>();

  const loading = useBoolean();

  const onRefresh = async () => {
    refreshing.onTrue();

    await new Promise(() =>
      setTimeout(() => {
        refreshing.onFalse();
        console.log("Profile Refreshed");
      }, 1000)
    );
  };

  useEffect(() => {
    loading.onTrue();

    if (keyDetails && keyHousing) {
      const data = {
        username: keyDetails.username,
        fullName: keyHousing.housingName,
        detailLine1: `${keyDetails.addressLine1}, ${keyDetails.addressLine2}`,
        detailLine2: `${keyDetails.addressLine3}, ${keyDetails.addressLine4}`,
        avatarUrl: keyDetails.avatarUrl,
      };

      try {
        setData(data);
        loading.onFalse();
        console.info("DATA", data);
      } catch (error) {
        router.back();
        console.error(error);
      }
    }
  }, []);

  const posts = _posts
    .filter((_) => _.housingId === id)
    .map((post) => {
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

  if (!data) {
    return <SpinnerOverlay state={loading.value} />;
  }

  return (
    <View style={styles.cotainer}>
      <BackButton />

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
          <RefreshControl refreshing={refreshing.value} onRefresh={onRefresh} />
        }
        ListHeaderComponent={<UserInfoSection info={data} />}
        ListHeaderComponentStyle={styles.header}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={styles.footer}
      />

      <ProfileFooter
        id={id as string}
        mapLink={keyHousing?.mapLink}
        chatLink={keyHousing?.chatLink}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cotainer: {
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
