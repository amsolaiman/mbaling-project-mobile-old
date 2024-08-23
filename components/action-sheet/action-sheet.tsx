import { forwardRef } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import {
  ActionSheetRef,
  default as DefaultActionSheet,
} from "react-native-actions-sheet";
import { Iconify } from "react-native-iconify";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// components
import { Text } from "@/components/custom-native";
//
import ActionSheetController from "./_actions";
import { DefaultActionSheetProps } from "./types";

// ----------------------------------------------------------------------

const ActionSheet = forwardRef<ActionSheetRef, DefaultActionSheetProps>(
  ({ meta, onClose }, ref) => {
    const { title, imageUrl, link } = meta;

    const theme = useColorScheme() ?? "light";

    const renderSeparator = () => <View style={styles.separator} />;

    const _actions = ActionSheetController(meta, onClose);

    return (
      <DefaultActionSheet
        ref={ref}
        onClose={onClose}
        containerStyle={{
          position: "relative",
          backgroundColor: Colors[theme].card,
        }}
      >
        <Iconify
          icon="solar:close-circle-linear"
          size={18}
          color={Colors[theme].text}
          onPress={onClose}
          style={styles.button}
        />

        <Text font="600" style={styles.title}>
          SHARE TO
        </Text>

        <View style={styles.metaContainer}>
          <Image source={{ uri: imageUrl }} style={styles.metaImage} />

          <View style={styles.metaInfo}>
            <Text font="500" style={styles.infoTitle}>
              {title}
            </Text>
            <Text font="400" style={styles.infoLink}>
              {link}
            </Text>
          </View>
        </View>

        <FlatList
          data={_actions}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => item.component}
          //
          contentContainerStyle={styles.container}
          horizontal
          showsHorizontalScrollIndicator={false}
          //
          ItemSeparatorComponent={renderSeparator}
        />
      </DefaultActionSheet>
    );
  }
);

export default ActionSheet;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingBottom: 24,
  },
  separator: {
    width: 12,
  },
  button: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  title: {
    padding: 10,
    textAlign: "center",
    color: Colors.primary,
  },
  metaContainer: {
    padding: 20,
    paddingTop: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey[300],
  },
  metaImage: {
    width: 80,
    minHeight: 80,
    height: "100%",
    resizeMode: "cover",
    borderRadius: 12,
    backgroundColor: Colors.secondary,
  },
  metaInfo: {
    flex: 1,
    marginLeft: 12,
    width: "100%",
  },
  infoTitle: {
    fontSize: 16,
  },
  infoLink: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 12 * 1.2,
  },
});
