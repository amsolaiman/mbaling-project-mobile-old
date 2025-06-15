import { useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
// @expo
import { useFocusEffect } from "expo-router";
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
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        enable.onFalse();
        console.info("DATA", data);
      } catch (error) {
        console.error(error);
      }
    },
    [enable]
  );

  // useFocusEffect(
  //   useCallback(() => {
  //     reset(defaultValues);
  //     enable.onFalse();

  //     return () => {
  //       reset(defaultValues);
  //       enable.onFalse();
  //     };
  //   }, [defaultValues, reset, enable])
  // );

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

        {enable.value ? (
          <Button
            onPress={handleSubmit(onSubmit)}
            variant="contained"
            label="Save"
            style={formStyles.button}
            //
            labelStyle={formStyles.buttonLabel}
          />
        ) : (
          <Button
            onPress={enable.onTrue}
            variant="outlined"
            label="Edit"
            style={formStyles.button}
            //
            labelStyle={formStyles.buttonLabel}
          />
        )}
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
