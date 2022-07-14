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
import { useNavigation, useRoute } from '@react-navigation/native'
import { removeDataFromLocalStorage } from "../services/loginService";

const Afiliate = () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
  });
  const navigation = useNavigation()
  const handleLogout=async()=>{
 await removeDataFromLocalStorage('token')
 await removeDataFromLocalStorage('userData')
 navigation.push('Login')
  }
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={[styles.container,{paddingHorizontal:20}]}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 50,
            paddingHorizontal: 5,
          }}
        >
          <View>
            <Text>Menu</Text>
          </View>
          <View style={styles.btnCn}>
          <TouchableOpacity
            style={[styles.btn, styles.blueBtn, { height: 70 }]}
            activeOpacity={0.7}
            onPress={() => {
             handleLogout()
            }}
          >
            <Text style={[styles.text, styles.blueBtnText]}>
              Cerrar sesion
            </Text>
          </TouchableOpacity>
        </View>
          <View
            style={{
              width: "80%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>SPORTFIT</Text>
          </View>
          <View style={{ width: "10%" }}></View>
        </View>

        <View style={styles.btnCn}>
          <TouchableOpacity
            style={[styles.btn, styles.blueBtn, { height: 70 }]}
            activeOpacity={0.7}
            onPress={() => {
              navigation.push('NewRutine')
            }}
          >
            <Text style={[styles.text, styles.blueBtnText]}>
              VER RUTINA
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
          style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}
          ><View style={{marginVertical:20}}><Text>NUEVO RETO</Text></View>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.boxChallenge}>
            <Text>5 DIAS</Text>
          </View>
          <View style={styles.boxChallenge}>
            <Text>7 DIAS</Text>
          </View>
          <View style={styles.boxChallenge}>
            <Text>15 DIAS</Text>
          </View>
          <View style={styles.boxChallenge}>
            <Text>+</Text>
          </View>
          </View></View>
          
        </View>
        <View>
        <View style={{marginVertical:20}}><Text>TIPS</Text></View>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto_400Regular",
  },
  imageCn: {
    width: "100%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxChallenge:{height:75,width:75,borderWidth:1,borderColor:'lightgray',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center'}
  ,imageCnWithForm: {
    width: "100%",
    height: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageAndTextCn: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "45%",
  },
  image: {
    width: 100,
    height: 100,
  },
  firstText: {
    color: "#B4B4B4",
  },
  container: {
    height: "100%",
    //display: 'flex',
    backgroundColor: "#fff",
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  btnCn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
    height: 50,
  },
  blueBtn: {
    backgroundColor: "#08318B",
  },
  transparentBtn: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  blueBtnText: {
    color: "#FFFFFF",
    fontSize: 10,
  },
  transparentBtnText: {
    color: "#08318B",
    fontSize: 10,
  },
  linesAndTextCn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  linesCn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
  },
  line: {
    backgroundColor: "#B4B4B4",
    height: 1,
    width: "45%",
  },
  inputCn: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  inputCnFocused: {
    borderColor: "#08318B",
  },
  input: {
    width: "100%",
    marginLeft: 16,
  },
});
export default Afiliate