import React, { useEffect, useState } from "react";
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
import {styles} from './styles'
import ProfileImage from "../components/ProfileImage";
import { getDataFromLocalStorage } from "../services/loginService";
import { useSelector } from "react-redux";




const Profile = () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
  });
  const [user,setUser]=useState()
  const userD=useSelector((state)=>state.currentUser.userData)
  console.log('userD',userD)
  const getUser=async()=>{
    const userData=await getDataFromLocalStorage('userData')
   return userData
     }

useEffect(() => {

 getUser().then((res)=>setUser(res)).catch((err)=>console.log(err))

}, [])
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <View style={styles.container}>
          <ProfileImage profilePic={userD?.profilePic} width={105} height={105}></ProfileImage>
        </View>
      );
  }
};
export default Profile