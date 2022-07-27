import React, { useState, useEffect } from "react";
import { daysEndpoint, excercisesEndpoint, usersEndPoint } from "../env";
import { getDataFromLocalStorage } from "../services/loginService";

const useExcercises = () => {
  const [data, setData] = useState([]);

  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
   
    setLoading(true)
    const fetchData = async () => {
      try {
        const token=await getDataFromLocalStorage('token')
   
        const response = await fetch(
          excercisesEndpoint,{
            method:'GET',
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${token}`, 
          },
          }
        );
    
        const res= await response.json()
        setData(res)
        setLoading(false)
      } catch (err) {
        console.log(err);
        setLoading(false)
      }
    };
    fetchData()
    
  }, []);

  return {
    excercises: data,
    loadingExcercises: loading,
  };
};

export default useExcercises