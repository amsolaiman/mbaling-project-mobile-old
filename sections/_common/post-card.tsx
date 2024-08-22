import { Image, StyleSheet, Text as DefaultText, View } from "react-native";
import { Avatar, IconButton } from "react-native-paper";
// theme
import Fonts from "@/theme/Fonts";
import Colors from "@/theme/Colors";
// components
import { Text } from "@/components/custom-default";
import { Iconify } from "react-native-iconify";
import { useColorScheme } from "@/hooks/use-color-scheme";

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  name: string;
  avatarUrl: string;
};

type Props = {
  item: ItemProps;
  hideProfile?: boolean;
};

// ----------------------------------------------------------------------

export default function PostCard({ item, hideProfile = false }: Props) {
  const { id, title, imageUrl, name, avatarUrl } = item;

  const theme = useColorScheme() ?? "light";

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <DefaultText numberOfLines={2} style={styles.title}>
          {title}
        </DefaultText>
      </View>

      {!hideProfile && (
        <View style={styles.infoWrapper}>
          <View style={styles.profile}>
            <Avatar.Image source={{ uri: avatarUrl }} size={24} />

            <Text font="600" numberOfLines={1} style={styles.profileName}>
              {name}
            </Text>
          </View>

          <Iconify
            icon="solar:menu-dots-bold"
            size={24}
            color={Colors[theme].text}
          />
        </View>
      )}
    </View>
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
    color: Colors.common.white,
    lineHeight: 16 * 1.2,
    backgroundColor: Colors.common.blackVariant,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  infoWrapper: {
    width: "100%",
    marginTop: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
  },
  profile: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  profileName: {
    flex: 1,
    fontSize: 14,
  },
});
