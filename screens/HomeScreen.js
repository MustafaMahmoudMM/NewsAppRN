import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { selectDarkMode } from "../store/themeSlice";

import NewsList from "../components/NewsList";
import FallbackText from "../components/FallbackText";
import LoadingOverlay from "../components/LoadingOverlay";
import useApi from "../util/useApi";
import { Colors } from "../constants/colors";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const apiConfig = {
    method: "get",
    url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=05113e24313641d091a6f7f9ecf226bd",
  };
  const { data, isLoading, error } = useApi(apiConfig);

  const darkMode = useSelector(selectDarkMode);

  const { t } = useTranslation();

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (error) {
    return <FallbackText>{t("errorLoadingData")}</FallbackText>;
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? Colors.gray700 : Colors.primary50 },
      ]}
    >
      <TextInput
        style={styles.inputText}
        placeholder="Search by title"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      {data && (
        <NewsList
          news={data.articles.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  inputText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 5,
    color: Colors.gray700,
    backgroundColor: "white",
  },
});
