import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import { Iconify } from "react-native-iconify";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// components
import { Text } from "@/components/custom-native";

// ----------------------------------------------------------------------

type UserProps = {
  name: string;
  username: string;
  avatarUrl: string;
};

type Props = {
  data: UserProps;
  onApprove?: VoidFunction;
  onReject?: VoidFunction;
};

// ----------------------------------------------------------------------

export default function UserItemCard({ data, onApprove, onReject }: Props) {
  const { name, username, avatarUrl } = data;

  const theme = useColorScheme() ?? "light";

  return (
    <View
      style={[
        styles.card,
        styles.cardShadow,
        { backgroundColor: Colors[theme].card },
      ]}
    >
      <View style={styles.profileWrapper}>
        <Avatar.Image
          source={{ uri: avatarUrl }}
          size={48}
          style={styles.avatar}
        />

        <View style={{ flex: 1 }}>
          <Text font="600" numberOfLines={1} style={{ fontSize: 16 }}>
            {name}
          </Text>
          <Text font="400" numberOfLines={1} style={{ fontSize: 14 }}>
            {"@" + username}
          </Text>
        </View>
      </View>

      <View style={styles.actions}>
        {onApprove && (
          <TouchableOpacity onPress={onApprove}>
            <Iconify
              icon="solar:check-circle-linear"
              size={24}
              color={Colors[theme].text}
            />
          </TouchableOpacity>
        )}

        {onReject && (
          <TouchableOpacity onPress={onReject}>
            <Iconify
              icon="solar:close-circle-linear"
              size={24}
              color={Colors.primary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 8,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    borderRadius: 8,
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  profileWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    backgroundColor: Colors.secondary,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
