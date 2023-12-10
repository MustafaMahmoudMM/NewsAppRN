import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../store/themeSlice";

import { Colors } from "../constants/colors";

function LoadingOverlay() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? Colors.gray700 : Colors.primary50 },
      ]}
    >
      <ActivityIndicator size="large" color={Colors.primary400} />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
