import { loginEndpoint } from "../env";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginService = async ({ email, password }) => {
  try {
    const response = await fetch(loginEndpoint, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const res = await response.json();

    return res;
  } catch (error) {

    console.log(error);
  }
};

export const setDataToLocalStorage=async (key,value)=>{
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
      } catch (e) {
       console.log(e)
      }
}
export const getDataFromLocalStorage = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
     console.log(e)
    }
  }
export const removeDataFromLocalStorage=async(key)=>{
    try {
        await AsyncStorage.removeItem(key)
      } catch(e) {
        console.error(e)
      }
}