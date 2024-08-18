import { useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
// hooks
import { useColorScheme } from "@/hooks/useColorScheme";

// ----------------------------------------------------------------------

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "login",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Metropolis100: require("../assets/fonts/Metropolis-100.ttf"),
    Metropolis200: require("../assets/fonts/Metropolis-200.ttf"),
    Metropolis300: require("../assets/fonts/Metropolis-300.ttf"),
    Metropolis400: require("../assets/fonts/Metropolis-400.ttf"),
    Metropolis500: require("../assets/fonts/Metropolis-500.ttf"),
    Metropolis600: require("../assets/fonts/Metropolis-600.ttf"),
    Metropolis700: require("../assets/fonts/Metropolis-700.ttf"),
    Metropolis800: require("../assets/fonts/Metropolis-800.ttf"),
    Metropolis900: require("../assets/fonts/Metropolis-900.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
