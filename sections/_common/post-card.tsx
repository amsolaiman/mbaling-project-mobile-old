import { useRef } from "react";
import {
  View,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
import { Iconify } from "react-native-iconify";
// @expo
import { router } from "expo-router";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Fonts from "@/theme/Fonts";
import Colors from "@/theme/Colors";
// components
import { Text } from "@/components/custom-native";
import ActionSheet, { ActionSheetRef } from "@/components/action-sheet";

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  userId: string;
  name: string;
  avatarUrl: string;
};

type Props = {
  item: ItemProps;
  hideProfile?: boolean;
};

// ----------------------------------------------------------------------

export default function PostCard({ item, hideProfile = false }: Props) {
  const { id, title, imageUrl, userId, name, avatarUrl } = item;

  const sheetRef = useRef<ActionSheetRef>(null);

  const theme = useColorScheme() ?? "light";

  const handlePressPost = () => {
    router.push(`/post/${id}`);
  };

  const handlePressProfile = () => {
    router.push(`/profile/${userId}`);
  };

  const meta = {
    title,
    imageUrl,
    link: `http://localhost:8081/post/${id}`,
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={handlePressPost} style={styles.imageWrapper}>
          <Image source={{ uri: imageUrl }} style={styles.image} />

          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
        </Pressable>

        {!hideProfile && (
          <View style={styles.infoWrapper}>
            <TouchableOpacity
              onPress={handlePressProfile}
              style={styles.profile}
            >
              <Avatar.Image
                source={{ uri: avatarUrl }}
                size={24}
                style={styles.profileImage}
              />

              <Text font="600" numberOfLines={1} style={styles.profileName}>
                {name}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => sheetRef.current?.show()}>
              <Iconify
                icon="solar:menu-dots-bold"
                size={24}
                color={Colors[theme].text}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <ActionSheet
        ref={sheetRef}
        meta={meta}
        onClose={() => sheetRef.current?.hide()}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    width: "100%",
    height: 280,
    position: "relative",
    backgroundColor: Colors.secondary,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    ...Fonts[500],
    padding: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    fontSize: 16,
    color: Colors.common.white.main,
    lineHeight: 16 * 1.2,
    backgroundColor: Colors.common.black[600],
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  infoWrapper: {
    width: "100%",
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  profileImage: {
    backgroundColor: Colors.secondary,
  },
  profileName: {
    flex: 1,
    fontSize: 14,
  },
});
