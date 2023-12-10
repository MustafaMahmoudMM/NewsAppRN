import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "../constants/colors";

function NewsItem({ item, onSelect }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={onSelect.bind(this, item.title)}
    >
      <Image
        style={styles.image}
        source={{ uri: item.urlToImage }}
        defaultSource={require("../assets/News.png")}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </Pressable>
  );
}

export default NewsItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    flex: 2,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: "100%",
  },
  info: {
    flex: 3,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.gray700,
  },
});
