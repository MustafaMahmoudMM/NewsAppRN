import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import { Colors } from "../constants/colors";

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: item.urlToImage }}
        defaultSource={require("../assets/News.png")}
      />
      <View style={styles.dtailsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  dtailsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    padding: 20,
  },
  title: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    color: Colors.primary400,
    textAlign: "justify",
    fontSize: 18,
    paddingTop: 10,
  },
});
