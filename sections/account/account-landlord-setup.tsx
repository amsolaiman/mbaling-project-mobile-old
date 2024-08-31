import { useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
// @expo
import { useFocusEffect, usePathname } from "expo-router";
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
      <LinkForm type="chat" link={chatLink} />

      <LinkForm type="map" link={mapLink} />
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
  input: string | null | undefined;
};

type LinkFormProps = {
  link?: string | null;
  type: "chat" | "map";
};

function LinkForm({ link = null, type }: LinkFormProps) {
  const pathname = usePathname();

  const isChatType = type === "chat";

  const enable = useBoolean();

  const defaultValues = useMemo(
    () => ({
      input: link ?? null,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [link]
  );

  const methods = useForm<FormValuesProps>({
    defaultValues,
  });

  const {
    reset,
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
    [enable]
  );

  useFocusEffect(
    useCallback(() => {
      return () => {
        reset();
        enable.onFalse();
      };
    }, [])
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <View
        style={formStyles.container}
        loadingState={isSubmitting}
        loadingCaption="Updating..."
      >
        <InfoHelper
          title={`Set ${type} link`}
          caption={`Please input below your ${
            isChatType ? "Facebook Messenger" : "Google Map"
          } link to connect it with your account.`}
          instruction="Click the icon on the right for tutorial."
        />

        <RHFTextField
          name="input"
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
    </FormProvider>
  );
}

const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },
  button: {
    width: 85,
    alignSelf: "flex-end",
  },
  buttonLabel: {
    marginVertical: 6,
  },
});
