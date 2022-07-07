import React, { useState,useEffect } from 'react'
import { trainingLevelsEndPoint } from '../env'

const useTrainingLevel=()=>{
const [data,setData]=useState([])
const [loading,setLoading]=useState(false)

useEffect(() => {

    const fetchData=async()=>{
        try {
           const response=await fetch(trainingLevelsEndPoint)
           const res=await response.json()
           setData(res)
        } catch (error) {
            console.log(err)
        }
    }
fetchData()
}, [])


return {
    trainingLevels:data,
    loadingTrainingLevels:loading
}
}
export default useTrainingLevel