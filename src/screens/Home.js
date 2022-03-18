import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackgroundCurve from "../components/BackgroundCurve";
import Feather from "@expo/vector-icons/Feather";
import IonIcons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ListCard from "../components/ListCard";

const w = Dimensions.get("window").width;

const Home = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <BackgroundCurve style={styles.svg} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.headerContainer}>
            <View style={styles.headerGroupIndicator}>
              <View style={styles.headerGroupIndicatorLeft}>
                <Feather color="#FFF" name="map-pin" size={16} />
                <Text style={styles.headerGroupIndicatorText}>
                  Boston (BOS)
                </Text>
                <Feather color="#FFF" name="chevron-down" size={16} />
              </View>
              <View style={styles.headerGroupIndicatorRight}>
                <Feather color="#FFF" name="settings" size={16} />
              </View>
            </View>
            <Text
              style={styles.heading}
            >{`Where would \nyou want to go?`}</Text>
            <View style={styles.groupInputContainer}>
              <View style={styles.inputSearchContainer}>
                <TextInput
                  style={styles.inputSearch}
                  placeholder="New York City (JFK)"
                />
                <TouchableOpacity style={styles.buttonSearch}>
                  <Feather color="gray" size={16} name="search" />
                </TouchableOpacity>
              </View>
              <View style={styles.listBtn}>
                <TouchableOpacity
                  onPress={() => setSelected(0)}
                  style={[
                    styles.button,
                    selected == 0 && { backgroundColor: "#F88C43" },
                  ]}
                >
                  <IonIcons name="ios-airplane" color="#FFF" size={16} />
                  <Text style={styles.buttonText}>Flights</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSelected(1)}
                  style={[
                    styles.button,
                    selected == 1 && { backgroundColor: "#F88C43" },
                  ]}
                >
                  <FontAwesome name="hotel" color="#FFF" size={16} />
                  <Text style={styles.buttonText}>Hotels</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ListCard />
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#FFF",
  },
  svg: {
    position: "absolute",
    width: w,
  },
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 30,
    padding: 15,
  },
  headerGroupIndicator: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerGroupIndicatorLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerGroupIndicatorText: {
    fontWeight: "bold",
    color: "#fff",
    marginHorizontal: 5,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginTop: 35,
  },
  groupInputContainer: {
    marginTop: 20,
    padding: 10,
  },
  inputSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 25,
  },
  inputSearch: {
    padding: 12,
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    color: "gray",
  },
  buttonSearch: {
    borderRadius: 25,
    padding: 13,
    backgroundColor: "#FFF",
    aspectRatio: 1,
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  listBtn: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    // backgroundColor: "#F88C43",
    backgroundColor: "transparent",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 15,
    padding: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "500",
    marginLeft: 10,
  },
});
