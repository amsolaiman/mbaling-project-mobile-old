import { useCallback, useEffect } from "react";
// @expo
import { router } from "expo-router";
// hooks
import { useAuthContext } from "@/auth/hooks";
// sections
import { LoginView } from "@/sections/login/view";

// ----------------------------------------------------------------------

export default function LoginScreen() {
  const { authenticated } = useAuthContext();

  if (authenticated) {
    router.replace("/(main)/home");
  }

  return <LoginView />;
}
