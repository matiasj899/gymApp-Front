import React, { useState, useEffect } from "react";
import { objectivesEndPoint } from "../env";

const useObjectives = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch(
            objectivesEndPoint
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
    objectives: data,
    loadingObjectives: loading,
  };
};

export default useObjectives