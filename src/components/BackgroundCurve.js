import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const BackgroundCurve = ({ style }) => {
  return (
    <View style={style}>
      <View style={styles.viewAbove}>
        <Svg
          height="50%"
          width="100%"
          style={styles.svg}
          viewBox="0 0 1440 320"
        >
          <Path
            fill="#FB7200"
            d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,112C672,85,768,75,864,101.3C960,128,1056,192,1152,192C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  );
};

export default BackgroundCurve;

const styles = StyleSheet.create({
  viewAbove: {
    backgroundColor: "#FB7200",
    height: 350,
  },
  svg: {
    position: "absolute",
    top: 300,
  },
});
