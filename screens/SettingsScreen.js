import { View, Text, Switch, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { toggleDarkMode, selectDarkMode } from "../store/themeSlice";
import { toggleLanguage, selectLanguage } from "../store/languageSlice";

import { Colors } from "../constants/colors";

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  const language = useSelector(selectLanguage);

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  const handleLanguageToggle = () => {
    dispatch(toggleLanguage());
    i18n.changeLanguage(language ? "ger" : "en");
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? Colors.gray700 : Colors.primary50 },
      ]}
    >
      <View style={styles.toggleContainer}>
        <Text style={styles.text}>{t("language")}</Text>
        <Switch
          trackColor={{ false: "gray", true: Colors.primary500 }}
          ios_backgroundColor="gray"
          value={language}
          onValueChange={handleLanguageToggle}
        />
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.text}>{t("darkMode")}</Text>
        <Switch
          trackColor={{ false: "gray", true: Colors.primary500 }}
          ios_backgroundColor="gray"
          value={darkMode}
          onValueChange={handleDarkModeToggle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    width: "80%",
  },
  text: {
    fontSize: 20,
    color: Colors.primary500,
  },
});

export default SettingsScreen;
