import React, { useState,useEffect } from 'react'
import { trainingLevelsEndPoint } from '../env'

const useTrainingLevel=()=>{
const [data,setData]=useState([])
const [loading,setLoading]=useState(false)

useEffect(() => {
    setLoading(true)
    const fetchData=async()=>{
        try {
           const response=await fetch(trainingLevelsEndPoint)
           const res=await response.json()
           setData(res)
           setLoading(false)
        } catch (error) {
            console.log(err)
            setLoading(false)
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