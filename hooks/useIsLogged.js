import React, { useState, useEffect } from "react";
import { getDataFromLocalStorage } from "../services/loginService";

const useIsLogged = () => {
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    getDataFromLocalStorage("token")
      .then((res) => {
        if (res !== null) {
          setIsLogged(true);
        }else{
            setIsLogged(false)
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return {
    isLogged,
  };
};
export default useIsLogged;
