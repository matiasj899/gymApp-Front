import { lang } from "../env"

export const  groupByKey = (list, key) => list.reduce((hash, obj) => ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)}), [])

export const filterByLang=(data)=>{
   const filteredData= data.map((levels)=>{

        const objectKeys=Object.keys(levels).filter((item)=>item!=="_id" && item!=="__v")
        const res=objectKeys.map((key)=>{
           if(key!=="_id" & key!=="__v"){

            const filterByKey= levels[key]?.filter((level)=>{
                if(level.lang===lang){
                    return level
                }
            })
           
            return filterByKey[0]
           }
           
        })
      return res
      
    }) 
    return filteredData[0] 
}