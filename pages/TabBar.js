import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import HomeByRole from "./HomeByRole";
import RightDrawerScreen from "./DrawnerMenu";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewRutine from "./NewRutine/NewRutine";
import DrawerMenuScreen from "./DrawnerMenu";
import useCurrentRoute from "../hooks/useCurrentRoute";
import Icon from "react-native-vector-icons/Entypo";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Inicio" component={DrawerMenuScreen} />
      <HomeStack.Screen name="NewRutine" component={NewRutine} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabBar = () => {
  const currentRouteName=useSelector((state)=>state.currentRoute.name)
  const navigation=useNavigation()
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
          headerShown: currentRouteName==='Home'?false:true,
          headerTitleAlign:'center',
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Afiliados"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Icon
                  name={"clipboard"}
                  color={focused ? "white" : "gray"}
                  size={25}
                ></Icon>
              );
            },
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeByRole}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Icon
                  name={"home"}
                  color={focused ? "white" : "gray"}
                  size={25}
                ></Icon>
              );
            },
          }}
        />
        <Tab.Screen
          name="Mi cuenta"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <MaterialIcon
                  name={"account-circle"}
                  color={focused ? "white" : "gray"}
                  size={25}
                ></MaterialIcon>
              );
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{ paddingHorizontal: 10 }}
              >
               <MaterialIcon
                 name={"arrow-back"}
                  color={"black"}
                  size={25}
                ></MaterialIcon>
              </TouchableOpacity>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabBar;
