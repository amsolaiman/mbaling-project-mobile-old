import React, { useEffect, useCallback, useState } from "react";
// @expo
import { router } from "expo-router";
//
import { useAuthContext } from "../hooks";

// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { authenticated } = useAuthContext();

  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (!authenticated) {
      router.replace("/");
    } else {
      setChecked(true);
    }
  }, [authenticated]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}
