import 'react-native-gesture-handler';
import { StyleSheet, Text, View, } from 'react-native';
import { Provider } from 'react-redux';
import {store} from './store/store'
import AppNavigator from './navigators/App-navigator';




export default function App() {
  
  return (
    <Provider store={store}>
  <AppNavigator></AppNavigator>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: '#fff',
    
  },
});
