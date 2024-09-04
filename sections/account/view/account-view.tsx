import { ScrollView, StyleSheet } from "react-native";
// components
import { View } from "@/components/custom-native";
//
import { UserInfoSection } from "@/sections/_common";
import AccountStudentDisplay from "../account-student-display";
import AccountLandlordDisplay from "../account-landlord-display";

// ----------------------------------------------------------------------

export default function AccountView() {
  const role = "landlord";

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
      <ScrollView style={styles.container}>
        <UserInfoSection info={_data} />

        {role === "student" && <AccountStudentDisplay />}

        {role === "landlord" && <AccountLandlordDisplay />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
