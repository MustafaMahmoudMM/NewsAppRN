import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../store/themeSlice";

import { Colors } from "../constants/colors";

const FallbackText = ({ children }) => {
  const darkMode = useSelector(selectDarkMode);

  return (
    <View
      style={[
        styles.fallbackContainer,
        { backgroundColor: darkMode ? Colors.gray700 : Colors.primary50 },
      ]}
    >
      <Text style={styles.fallbackText}>{children}</Text>
    </View>
  );
};

export default FallbackText;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary400,
  },
});
