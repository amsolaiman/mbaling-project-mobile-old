import { useEffect, useState } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
// @expo
import { router } from "expo-router";
// _mock
import { _landlordDetails, _posts, _users } from "@/_mock";
// hooks
import { useParams } from "@/routes/hook";
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
import { ArrowIconBold } from "@/assets/icons";

// ----------------------------------------------------------------------

export default function ProfileView() {
  const theme = useColorScheme() ?? "light";

  const { id } = useParams();

  const keyDetails = _users.find((_) => _.id === id);

  const keyHousing = _landlordDetails.find((_) => _.userId === id);

  const [refreshing, setRefreshing] = useState(false);

  const [data, setData] = useState<UserInfoProps>();

  const [loading, setLoading] = useState<boolean>(false);

  const onRefresh = async () => {
    setRefreshing(true);

    await new Promise(() =>
      setTimeout(() => {
        setRefreshing(false);
        console.log("Profile Refreshed");
      }, 1000)
    );
  };

  useEffect(() => {
    setLoading(true);

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
        setLoading(false);
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
    return <SpinnerOverlay state={loading} />;
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
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={<UserInfoSection info={data} />}
        ListHeaderComponentStyle={styles.header}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={styles.footer}
      />

      <View style={styles.bottomAction}>
        <View style={styles.bottomActionLeft}>
          <ArrowIconBold color="black" size={24} />
        </View>
        <View style={styles.bottomActionMain}>
          <ArrowIconBold color="black" size={24} />
        </View>
        <View style={styles.bottomActionRight}>
          <ArrowIconBold color="black" size={24} />
        </View>
      </View>
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
  bottomAction: {
    paddingHorizontal: 12,
    minHeight: 64,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: Colors.grey[200],
    borderTopWidth: 1,
  },
  bottomActionMain: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomActionLeft: {
    minWidth: "20%",
    maxWidth: "33%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  bottomActionRight: {
    minWidth: "20%",
    maxWidth: "33%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
