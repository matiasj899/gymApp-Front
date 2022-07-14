import React, { useEffect,useState } from 'react';
import { getDataFromLocalStorage } from '../services/loginService';

const useUserRole=()=>{
    const [userRole,setUserRole]=useState(null)

    useEffect(() => {
     getDataFromLocalStorage('userData').then((res)=>setUserRole(res['roleId'].name)).catch((err)=>console.error(err))
    }, [])
    return {userRole}
}
export default useUserRole