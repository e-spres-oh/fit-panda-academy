import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/drawer/Home";
import ProfileScreen from "../screens/drawer/Profile";
import ActivityScreen from "../screens/drawer/Activity";

const Drawer = createDrawerNavigator();

const RootDrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Activity" component={ActivityScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootDrawerNavigation;
