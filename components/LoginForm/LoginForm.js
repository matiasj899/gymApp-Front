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
import { loginService, setDataToLocalStorage } from "../../services/loginService";


const LoginForm=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    let [fontsLoaded] = useFonts({
      Roboto_400Regular,
      Roboto_400Regular_Italic,
    });
    const navigation = useNavigation()
    const route = useRoute()
const handleLogin=async()=>{
  const {token,userExists}=await loginService({email,password})

 if(token){
  await setDataToLocalStorage('token',token);
  await setDataToLocalStorage('userData',userExists);
  navigation.push('TabBar')
 }
}
  if (!fontsLoaded) {
    return <AppLoading />;
  } else{
    
    return  (
    <>
      <View style={styles.btnCn}>
        <View style={[styles.btn, styles.inputCn]}>
          <TextInput
           autoCapitalize="none"
            value={email}
            style={styles.input}
            placeholder="Ingresar correo electrónico"
            onChangeText={(email) => {
              setEmail(email);
            }}
          />
        </View>
      </View>
      <View style={styles.btnCn}>
        <View style={isFocused?[styles.btn, styles.inputCn,styles.inputCnFocused]:[styles.btn, styles.inputCn]} >
          <TextInput
          secureTextEntry={true}
          autoCapitalize="none"
            value={password}
            style={styles.input}
            placeholder="Ingresar contraseña"
            onFocus={()=>setIsFocused(true)}
            onBlur={()=>setIsFocused(false)}
            onChangeText={(password) => {
              setPassword(password);
            }}
          />
        </View>
      </View>
      <View style={styles.btnCn} pointerEvents={!email?'none':'auto'}>
            <TouchableOpacity
              style={!email?[styles.btn, styles.disableBtn]:[styles.btn, styles.blueBtn]}
              activeOpacity={0.7}
              onPress={() => {
                //navigation.push('Trainer')
                handleLogin()
               
                
                //setWantLogin(true);
              }}
            >
              <Text style={[styles.text, styles.blueBtnText]}>
                INICIAR SESIÓN
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnCn}>
              <View style={{width:'90%',margin:16}} ><View style={{borderBottomColor:'#7F7F7F',borderBottomWidth:1, alignSelf: 'flex-start' ,color:'#7F7F7F'}}><Text style={{fontSize:12,color:'#7F7F7F'}}>Olvidé mi contraseña</Text></View></View>
          </View>
    </>
  ) }
}

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
    disableBtn:{
        backgroundColor:'#E5E5E5',
        marginTop: 20,
    },
    blueBtn: {
      backgroundColor: "#08318B",
      marginTop: 20,
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
      marginTop: 30,
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
      height:'100%',
      paddingLeft: 16,
    },
  });

export default LoginForm