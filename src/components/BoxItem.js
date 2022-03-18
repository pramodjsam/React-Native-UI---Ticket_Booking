import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const BoxItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Text style={styles.headerText}>Boston (BOS)</Text>
        <Text style={[styles.headerText, { color: "#222", marginTop: 10 }]}>
          New York City (JFK)
        </Text>
      </View>
      <MaterialIcons color="#828595" name="swap-vert" size={30} />
    </View>
  );
};

export default BoxItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    margin: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 25,
  },

  headerText: {
    color: "#828595",
    fontSize: 16,
    fontWeight: "bold",
  },
});
