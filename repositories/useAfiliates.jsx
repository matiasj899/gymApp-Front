import React, { useState, useEffect } from "react";
import { usersEndPoint } from "../env";
import { getDataFromLocalStorage } from "../services/loginService";

const useAfiliates = () => {
  const [data, setData] = useState([]);

  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
   
   
    const fetchData = async () => {
      try {
        const token=await getDataFromLocalStorage('token')
   
        const response = await fetch(
          usersEndPoint,{
            method:'GET',
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${token}`, // notice the Bearer before your token
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
    afiliates: data,
    loadingAfiliates: loading,
  };
};

export default useAfiliates