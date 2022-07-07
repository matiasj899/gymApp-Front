import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import Login from './pages/Login';
import Trainer from './pages/Trainer';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewRutine from './pages/NewRutine/NewRutine';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login"  screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Trainer" component={Trainer} />
      <Stack.Screen name="NewRutine" component={NewRutine} />
    </Stack.Navigator>
  </NavigationContainer>
    //<View style={styles.container}>
      //<Login></Login>
  //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: '#fff',
    
  },
});
