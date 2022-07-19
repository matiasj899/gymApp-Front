import React, { useState, useEffect } from "react";
import { daysEndpoint, usersEndPoint } from "../env";
import { getDataFromLocalStorage } from "../services/loginService";

const useDays = () => {
  const [data, setData] = useState([]);

  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
   
   
    const fetchData = async () => {
      try {
        const token=await getDataFromLocalStorage('token')
   
        const response = await fetch(
          daysEndpoint,{
            method:'GET',
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${token}`, 
          },
          }
        );
    
        const res= await response.json()
        setData(res)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData()
  }, []);

  return {
    days: data,
    loadingDays: loading,
  };
};

export default useDays