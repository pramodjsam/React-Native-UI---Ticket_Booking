import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackgroundCurve from "../components/BackgroundCurve";
import Entypo from "@expo/vector-icons/Entypo";
import BoxItem from "../components/BoxItem";
import ListSearch from "../components/ListSearch";

const w = Dimensions.get("window").width;

const Search = () => {
  return (
    <View style={styles.container}>
      <BackgroundCurve style={styles.svg} />
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Entypo name="chevron-left" color="#fff" size={30} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Search Result</Text>
        </View>
        <BoxItem />
        <ListSearch />
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
  },
  svg: {
    position: "absolute",
    top: -170,
    width: w,
  },
  bodyContainer: {
    marginTop: 40,
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "700",
    flex: 1,
    textAlign: "center",
    marginEnd: 30,
  },
});
