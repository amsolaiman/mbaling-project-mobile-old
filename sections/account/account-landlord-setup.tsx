import * as Yup from "yup";
import { useCallback, useMemo } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @expo
import { router } from "expo-router";
// hooks
import { useBoolean } from "@/hooks/use-boolean";
// components
import InfoHelper from "@/components/info-helper";
import { Button, View } from "@/components/custom-native";
import FormProvider, { RHFTextField } from "@/components/hook-form";

// ----------------------------------------------------------------------

type Props = {
  chatLink?: string | null;
  mapLink?: string | null;
};

export default function AccountLandlordSetup({ chatLink, mapLink }: Props) {
  return (
    <View style={styles.container}>
      <ChatLinkForm link={chatLink} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
});

// ----------------------------------------------------------------------

type FormValuesProps = {
  link: string | null | undefined;
};

type LinkFormProps = {
  link?: string | null;
};

function ChatLinkForm({ link = null }: LinkFormProps) {
  const enable = useBoolean();

  const defaultValues = useMemo(
    () => ({
      link: link ?? null,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const methods = useForm<FormValuesProps>({
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = useCallback(
    async (data: FormValuesProps) => {
      if (enable.value) {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          enable.onFalse();
          console.info("DATA", data);
        } catch (error) {
          console.error(error);
        }
      } else {
        enable.onTrue();
      }
    },
    [router]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={formStyles.container}
          loadingState={isSubmitting}
          loadingCaption="Updating..."
        >
          <InfoHelper
            title="Set chat link"
            caption="Please input below your Facebook Messenger link to connect it with your account."
            instruction="Click the icon on the right for tutorial."
          />

          <RHFTextField
            name="link"
            placeholder="Enter link..."
            disabled={!enable.value}
            style={{ height: 48 }}
          />

          <Button
            onPress={handleSubmit(onSubmit)}
            variant={enable.value ? "contained" : "outlined"}
            label={enable.value ? "Save" : "Edit"}
            style={formStyles.button}
            //
            labelStyle={formStyles.buttonLabel}
          />
        </View>
      </TouchableWithoutFeedback>
    </FormProvider>
  );
}

const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },
  button: {
    alignSelf: "flex-end",
  },
  buttonLabel: {
    marginVertical: 6,
  },
});
