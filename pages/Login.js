import React, { useState,useEffect } from "react";
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
import LoginForm from "../components/LoginForm/LoginForm";
import useIsLogged from "../hooks/useIsLogged";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
 const {isLogged}= useIsLogged()
 console.log(isLogged)
  const [wantLogin, setWantLogin] = useState(false);
  const navigation = useNavigation();
useEffect(() => {
if(isLogged){
  navigation.push("TabBar");
}
}, [isLogged])


  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={!wantLogin?styles.imageCn:styles.imageCnWithForm}>
          <View style={styles.imageAndTextCn}>
            <Image
              style={styles.image}
              source={require("../public/images/loginLogo.png")}
            ></Image>
            {!wantLogin && (
              <Text style={[styles.text, styles.firstText]}>
                ¿YA TENES CUENTA?
              </Text>
            )}
          </View>
        </View>
        {wantLogin ? (
          <LoginForm/>
        ) : (
          <View style={styles.btnCn}>
            <TouchableOpacity
              style={[styles.btn, styles.blueBtn]}
              activeOpacity={0.7}
              onPress={() => {
                setWantLogin(true);
              }}
            >
              <Text style={[styles.text, styles.blueBtnText]}>
                INICIAR SESIÓN
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.linesAndTextCn}>
          <View style={styles.linesCn}>
            <View style={styles.line}></View>
            <Text style={[styles.text, styles.firstText]}>O</Text>
            <View style={styles.line}></View>
          </View>
        </View>
        <View style={styles.btnCn}>
          <TouchableOpacity
            style={[styles.btn, styles.transparentBtn]}
            activeOpacity={0.7}
            onPress={() => {
              //setCount(count + 1)
            }}
          >
            <Text style={[styles.text, styles.transparentBtnText]}>
              REGISTRARSE
            </Text>
          </TouchableOpacity>
        </View>
        {/*<View style={styles.btnCn}>
          <TouchableOpacity
            style={[styles.btn, styles.transparentBtn]}
            activeOpacity={0.7}
            onPress={() => {
              //setCount(count + 1)
            }}
          >
            <Text style={[styles.text, styles.transparentBtnText]}>
              REGISTRARSE CON FACEBOOK
            </Text>
          </TouchableOpacity>
          </View>*/}
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
  imageCnWithForm: {
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
    width: "90%",
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
export default Login;
