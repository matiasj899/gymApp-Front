import React, { useEffect, useState } from 'react';
import { getDataFromLocalStorage } from '../services/loginService';

const useCurrentRoute=()=>{
    const [routeName, setRouteName] = useState();
    useEffect(() => {
        getDataFromLocalStorage('currentRoute').then((res)=>setRouteName(res)).catch((err)=>console.error(err))
       }, [])
    return {
        routeName,
        setRouteName
    }
}
export default useCurrentRoute