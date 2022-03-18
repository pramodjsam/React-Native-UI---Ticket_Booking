import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonicIcons from "@expo/vector-icons/Ionicons";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Details from "../screens/Details";
import Notification from "../screens/Notification";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FB7200",
        tabBarInactiveTintColor: "#464962",
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <IonicIcons name="home" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <IonicIcons name="heart" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <IonicIcons name="pricetag" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <IonicIcons name="notifications" size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
