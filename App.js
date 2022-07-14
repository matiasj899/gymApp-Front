import 'react-native-gesture-handler';
import { StyleSheet, Text, View, } from 'react-native';
import Login from './pages/Login';
import Trainer from './pages/Trainer';

import { NavigationContainer,createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewRutine from './pages/NewRutine/NewRutine';
import TabBar from './pages/TabBar';
import RightDrawerScreen from './pages/DrawnerMenu';
import { useState } from 'react';
import { setDataToLocalStorage } from './services/loginService';




const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();

export default function App() {
  
  return (
    <NavigationContainer  ref={navigationRef}
      onReady={() => {
        setDataToLocalStorage('currentRoute',navigationRef.getCurrentRoute().name)
      }}
      onStateChange={async () => {
      
        const currentRouteName = navigationRef.getCurrentRoute().name;
      
        setDataToLocalStorage('currentRoute',currentRouteName);
      }}>
    <Stack.Navigator initialRouteName="Login"  screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabBar" component={TabBar} />
      <Stack.Screen name="RightDrawerScreen" component={RightDrawerScreen} />
    
      <Stack.Screen name="Trainer" component={Trainer} />

    </Stack.Navigator>
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: '#fff',
    
  },
});
