import React from 'react'
import { createDrawerNavigator,useDrawerStatus  } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useEffect,useState } from 'react';
import { View,Text, StyleSheet,TouchableOpacity  } from 'react-native';
import { getDataFromLocalStorage, removeDataFromLocalStorage } from '../services/loginService';
import ProfileImage from './ProfileImage';
import { spanishDict } from '../language/esp';

 const DrawnerMenuContent=()=>{
    const [user,setUser]=useState()
    const navigation = useNavigation()
    const isDrawerOpen = useDrawerStatus() === 'open';
  
    const getUser=async()=>{
      const userData=await getDataFromLocalStorage('userData')
     return userData
       }
  
  useEffect(() => {
   if(isDrawerOpen){
   getUser().then((res)=>setUser(res)).catch((err)=>console.log(err))
   }
  }, [isDrawerOpen])
  
    const handleLogout=async()=>{
      await removeDataFromLocalStorage('token')
      await removeDataFromLocalStorage('userData')
      navigation.push('Login')
       }
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around',backgroundColor:'#363535' }}>
            <View style={{height:'75%',width:'85%'}}>
            <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:15}}>
            <ProfileImage profilePic={user?.profilePic} width={105} height={105}></ProfileImage>
            <View style={{paddingTop:10,paddingBottom:5}}>
                <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>{user?.userName + ' ' + user?.lastName}</Text>
            </View>
            <View>
                <Text style={{color:'#B4B4B4',fontSize:14}}>{spanishDict[user?.roleId.name]}</Text>
            </View>
            </View>
          <View>
          <View >
            <TouchableOpacity
              
              activeOpacity={0.7}
              onPress={() => {
               handleLogout()
              }}
            >
              <Text style={[styles.text, {color:'white'}]}>
              Mi Cuenta
              </Text>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity
              
              activeOpacity={0.7}
              onPress={() => {
               handleLogout()
              }}
            >
              <Text style={[styles.text, {color:'white'}]}>
              Crear Rutina Personalizada
              </Text>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity
              
              activeOpacity={0.7}
              onPress={() => {
               handleLogout()
              }}
            >
              <Text style={[styles.text, {color:'white'}]}>
              Crear Reto
              </Text>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity
              
              activeOpacity={0.7}
              onPress={() => {
               handleLogout()
              }}
            >
              <Text style={[styles.text, {color:'white'}]}>
              Ayuda
              </Text>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity
              
              activeOpacity={0.7}
              onPress={() => {
               handleLogout()
              }}
            >
              <Text style={[styles.text, {color:'white'}]}>
                Cerrar sesion
              </Text>
            </TouchableOpacity>
          </View>
          </View>
            </View>
           
          
        </View>
      );
    }
    export default DrawnerMenuContent
    const styles = StyleSheet.create({
  
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