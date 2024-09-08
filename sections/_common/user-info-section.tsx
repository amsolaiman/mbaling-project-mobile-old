import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
// theme
import Colors from "@/theme/Colors";
// components
import { Text } from "@/components/custom-native";

// ----------------------------------------------------------------------

export type UserInfoSectionProps = {
  username: string;
  fullName: string;
  detailLine1: string;
  detailLine2: string;
  avatarUrl: string;
};

type Props = {
  info: UserInfoSectionProps;
  hideUsername?: boolean;
};

// ----------------------------------------------------------------------

export default function UserInfoSection({ info, hideUsername = false }: Props) {
  const { username, fullName, detailLine1, detailLine2, avatarUrl } = info;

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        {!hideUsername && (
          <Text font="600" numberOfLines={1} style={styles.username}>
            {"@" + username}
          </Text>
        )}

        <Avatar.Image
          source={{ uri: avatarUrl }}
          size={160}
          style={styles.avatar}
        />

        <View>
          <Text font="700" style={styles.name}>
            {fullName}
          </Text>
          <Text font="400" style={styles.detail}>
            {detailLine1 + "\n" + detailLine2}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  contentWrapper: {
    paddingVertical: 26,
    paddingHorizontal: 4,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 22,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  username: {
    textAlign: "center",
    fontSize: 18,
    color: Colors.primary,
    textTransform: "lowercase",
  },
  avatar: {
    backgroundColor: Colors.secondary,
  },
  name: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 18,
    textTransform: "uppercase",
  },
  detail: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: 14 * 1.2,
  },
});
