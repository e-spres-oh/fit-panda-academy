import "react-native-gesture-handler";
import React from "react";
import WelcomeScreen from "./src/screens/stack/Welcome";
import RootStackNavigation from "./src/routers/StackRouter";
import RootDrawerNavigation from "./src/routers/DrawerRouter";
import RootTabNavigation from "./src/routers/TabRouter";
import DummyNavigation from "./src/routers/NestedRouter";
import FetchScreen from "./src/components/FetchExample";
import InputsScreen from "./src/components/Inputs";
import ConditionalScreen from "./src/components/Conditional";

export default function App() {
  return (
    // phase 1
    // <WelcomeScreen />

    //phase 2
    // <ConditionalScreen />

    //phase 3
    <RootStackNavigation />

    //phase 4
    // <RootDrawerNavigation />

    //phase 5
    // <RootTabNavigation />

    //phase 6
    // <DummyNavigation />

    //phase 7
    // <InputsScreen />

    //phase 8
    // <FetchScreen />
  );
}
