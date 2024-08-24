// @expo
import { Redirect, Stack } from "expo-router";

// ----------------------------------------------------------------------

export default function PostRedirectScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!", headerShown: false }} />

      <Redirect href="/" />
    </>
  );
}
