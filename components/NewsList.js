import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";

import { Colors } from "../constants/colors";
import NewsItem from "./NewsItem";
import FallbackText from "./FallbackText";

function NewsList({ news }) {
  const navigation = useNavigation();

  const { t } = useTranslation();

  if (!news || news.length === 0) {
    return <FallbackText>{t("noNews")}</FallbackText>;
  }

  return (
    <FlatList
      style={styles.list}
      data={news}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <NewsItem
          item={item}
          onSelect={() => navigation.navigate("DetailsScreen", { item })}
        />
      )}
    />
  );
}

export default NewsList;

const styles = StyleSheet.create({
  list: {
    margin: 16,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
