import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import HomeByRole from "./HomeByRole";
import RightDrawerScreen from "./DrawnerMenu";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewRutine from "./NewRutine/NewRutine";
import DrawerMenuScreen from "./DrawnerMenu";
import useCurrentRoute from "../hooks/useCurrentRoute";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
 
  const {routeName}=useCurrentRoute()

 
 
  
  return (
    <HomeStack.Navigator  screenOptions={{
          headerShown: false,
        }}>
      <HomeStack.Screen name="Inicio" component={DrawerMenuScreen} />
      <HomeStack.Screen  name="NewRutine" component={NewRutine} />
      
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabBar = () => {
  
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#fff",
          inactiveTintColor: "lightgray",
          activeBackgroundColor: "#363535",
          inactiveBackgroundColor: "#363535",
        }}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Cuenta" component={Profile} />
        
      </Tab.Navigator>
    </>
  );
};

export default TabBar;
