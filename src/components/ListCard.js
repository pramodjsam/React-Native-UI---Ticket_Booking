import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import mocks from "../assets/homeMocks.json";

const w = Dimensions.get("window").width;

const Item = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageBg}>
        <Image style={styles.itemImage} source={{ uri: item.image }} />
        <View style={styles.itemInner}>
          <View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemTime}>{item.time}</Text>
          </View>
          <View style={{ borderRadius: 30, overflow: "hidden" }}>
            <Text style={styles.itemSaleOff}>{item.saleoff}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const ListCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>Currently Watched Items</Text>
        <Text style={[styles.textHeader, { color: "#FB7200" }]}>
          VIEW ALL (12)
        </Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {mocks.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 20,
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#222",
  },
  itemImage: {
    width: (w - 60) / 2,
    height: (w - 40) / 2,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  itemContainer: {
    marginRight: 20,
  },
  imageBg: {
    flex: 1,
    borderRadius: 10,
  },
  itemInner: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 12,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  itemTime: {
    color: "#eee",
    fontWeight: "600",
    fontSize: 14,
  },
  itemSaleOff: {
    fontWeight: "bold",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    paddingHorizontal: 10,
  },
});
