import { ScrollView, StyleSheet } from "react-native";
// auth
import { useAuthContext } from "@/auth/hooks";
// components
import { View } from "@/components/custom-native";
//
import { UserInfoSection } from "@/sections/_common";
import AccountStudentDisplay from "../account-student-display";
import AccountLandlordDisplay from "../account-landlord-display";

// ----------------------------------------------------------------------

export default function AccountView() {
  const { user } = useAuthContext();

  const isLandlord = user?.role === "landlord";

  const _data = {
    username: user?.username,
    fullName: isLandlord ? user?.housing_name : user?.full_name,
    detailLine1: isLandlord
      ? `${user?.address_line_1}, ${user?.address_line_2}`
      : user?.degree,
    detailLine2: isLandlord
      ? `${user?.address_line_2}, ${user?.address_line_3}`
      : user?.college,
    avatarUrl: user?.avatar_url,
  };

  return (
    <ScrollView style={styles.container}>
      <UserInfoSection info={_data} />

      {user?.role === "student" && <AccountStudentDisplay />}

      {user?.role === "landlord" && <AccountLandlordDisplay />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
