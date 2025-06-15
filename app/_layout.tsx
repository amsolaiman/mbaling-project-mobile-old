import { useEffect } from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import {
  ThemeProvider,
  DarkTheme as NativeDarkTheme,
  DefaultTheme as NativeDefaultTheme,
} from "@react-navigation/native";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  configureFonts,
} from "react-native-paper";
// @expo
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// auth
import { AuthProvider, AuthConsumer } from "@/auth/context";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// styles
import "react-native-reanimated";

// ----------------------------------------------------------------------

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
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
  const colorScheme = useColorScheme() ?? "light";

  const NativePaperTheme =
    colorScheme === "light" ? MD3LightTheme : MD3DarkTheme;

  const paperTheme = {
    ...NativePaperTheme,
    colors: {
      ...NativePaperTheme.colors,
      primary: Colors.primary,
      secondary: Colors.secondary,
    },
    fonts: configureFonts({
      config: {
        fontFamily: "Metropolis400",
      },
    }),
  };

  const DefaultTheme = {
    ...NativeDefaultTheme,
    colors: {
      ...NativeDefaultTheme.colors,
      background: "rgb(255, 255, 255)",
    },
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <AuthProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? NativeDarkTheme : DefaultTheme}
        >
          <PaperProvider theme={paperTheme}>
            <AuthConsumer>
              <Routes />
            </AuthConsumer>
          </PaperProvider>
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaView>
  );
}

function Routes() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen name="(main)" options={{ headerShown: false }} />

      <Stack.Screen name="post/new" options={{ headerShown: false }} />

      <Stack.Screen name="post/[id]/index" options={{ headerShown: false }} />

      <Stack.Screen name="post/[id]/edit" options={{ headerShown: false }} />

      <Stack.Screen name="profile/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
