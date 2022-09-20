import { createNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Trainer from "../pages/Trainer";
import {
  NavigationContainer
} from "@react-navigation/native";
import NewRutine from "../pages/NewRutine/NewRutine";
import TabBar from "../pages/TabBar";
import RightDrawerScreen from "../pages/DrawnerMenu";
import { useState } from "react";
import { setDataToLocalStorage } from "../services/loginService";
import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentRouteName } from "../store/reducer";

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  const navigationRef = createNavigationContainerRef();
const dispatch=useDispatch()
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        dispatch(setCurrentRouteName( navigationRef.getCurrentRoute().name))
        setDataToLocalStorage(
          "currentRoute",
          navigationRef.getCurrentRoute().name
        );
      }}
      onStateChange={async () => {
        const currentRouteName = navigationRef.getCurrentRoute().name;

dispatch(setCurrentRouteName(currentRouteName))
        setDataToLocalStorage("currentRoute", currentRouteName);
      }}
    >
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
  
        <Stack.Screen name="RightDrawerScreen" component={RightDrawerScreen} />

        <Stack.Screen name="Trainer" component={Trainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
