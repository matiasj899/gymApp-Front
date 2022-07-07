import React, { useState, useEffect } from "react";
import { usersEndPoint } from "../env";

const useAfiliates = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          usersEndPoint
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