import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";





const Profile = () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
  });

  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <View>
            <Text>algoo</Text>
        </View>
      );
  }
};
export default Profile