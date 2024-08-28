import * as Yup from "yup";
import { useCallback, useMemo } from "react";
import {
  Text,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "react-native-paper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @expo
import { router } from "expo-router";
// theme
import Fonts from "@/theme/Fonts";
import Colors from "@/theme/Colors";
// components
import { LogoVertical } from "@/components/logo";
import { View } from "@/components/custom-native";
import FormProvider from "@/components/hook-form";
//
import LoginFootnote from "../login-footnote";
import LoginInputField from "../login-input-field";

// ----------------------------------------------------------------------

type FormValuesProps = {
  username: string;
  password: string;
};

export default function LoginView() {
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  const defaultValues = useMemo(
    () => ({
      username: "",
      password: "",
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = useCallback(
    async (data: FormValuesProps) => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        reset();
        router.push("/(main)/home");
        console.info("DATA", data);
      } catch (error) {
        console.error(error);
      }
    },
    [reset, router]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={styles.container}
          loadingState={isSubmitting}
          loadingCaption="Logging in..."
        >
          <LogoVertical disabledLink color="dark" style={styles.logo} />

          <LoginInputField name="username" label="username" />

          <LoginInputField name="password" label="password" secureTextEntry />

          <Button
            onPress={handleSubmit(onSubmit)}
            style={styles.button}
            //
            buttonColor="#FFF"
            textColor={Colors.primary}
            labelStyle={{
              marginVertical: 6,
            }}
          >
            <Text style={{ ...Fonts[600] }}>log-in</Text>
          </Button>

          <LoginFootnote />
        </View>
      </TouchableWithoutFeedback>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  logo: {
    marginBottom: 48,
    alignSelf: "center",
  },
  button: {
    marginTop: 20,
    width: 110,
    alignSelf: "center",
    borderRadius: 50,
  },
});
