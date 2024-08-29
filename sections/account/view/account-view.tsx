import { ScrollView, StyleSheet } from "react-native";
// components
import { View } from "@/components/custom-native";
//
import { UserInfoSection } from "@/sections/_common";
import AccountStudentDisplay from "../account-student-display";

// ----------------------------------------------------------------------

export default function AccountView() {
  const _data = {
    username: "alex_sander",
    fullName: "Alex C. Sander",
    detailLine1: "BS Information Technology (Database Systems)",
    detailLine2: "College of Information and Computing Sciences",
    avatarUrl:
      "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-1.webp",
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <UserInfoSection info={_data} />

        <AccountStudentDisplay />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
