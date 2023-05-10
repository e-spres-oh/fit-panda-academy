import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/stack/Home";
import WelcomeScreen from "../screens/stack/Welcome";
import ProfileScreen from "../screens/stack/Profile";
import { Button, View, Text } from "react-native";
import ActivityScreen from "../screens/drawer/Activity";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const logged = true;

const RootTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
    </Tab.Navigator>
  );
};

const RootDrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="Profile"
        component={RootTabNavigation}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
};

const RootNestedNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!logged ? (
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        ) : (
          <Stack.Screen
            name="Home"
            component={RootDrawerNavigation}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNestedNavigation;
