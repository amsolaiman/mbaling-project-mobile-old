import { StyleSheet } from "react-native";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// components
import { Text, View } from "@/components/custom-native";
//
import UserItemCard from "../_common/user-item-card";

// ----------------------------------------------------------------------

type ItemProps = {
  name: string;
  username: string;
  avatarUrl: string;
};

type Props = {
  pendingList?: ItemProps[];
  currentList?: ItemProps[];
};

export default function AccountLandlordList({
  pendingList,
  currentList,
}: Props) {
  const theme = useColorScheme() ?? "light";

  const pending = pendingList?.map((item) => (
    <UserItemCard
      key={item.name}
      data={item}
      onApprove={() => console.log(item.name)}
      onReject={() => console.log(item.name)}
    />
  ));

  const current = currentList?.map((item) => (
    <UserItemCard
      key={item.name}
      data={item}
      onReject={() => console.log(item.name)}
    />
  ));

  return (
    <View style={styles.container}>
      {pendingList && (
        <View style={styles.listWrapper}>
          <Text
            font="600"
            style={{
              fontSize: 16,
              color:
                theme === "light" ? Colors.grey[700] : Colors.common.white.main,
            }}
          >
            Pending
          </Text>

          {pending}
        </View>
      )}

      <View style={styles.listWrapper}>
        <Text
          font="600"
          style={{
            fontSize: 16,
            color:
              theme === "light" ? Colors.grey[700] : Colors.common.white.main,
          }}
        >
          Current
        </Text>

        {current}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  listWrapper: {
    flex: 1,
    gap: 10,
  },
});
