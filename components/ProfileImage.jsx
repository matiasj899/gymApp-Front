import React from 'react'
import { View,Image } from 'react-native'

const ProfileImage=({profilePic,width=40,height=40})=>{
   return ( <View>
    <Image
      source={{uri:profilePic}}
      style={{
        height: height,
        width: width,
        borderRadius: 50,
      }}
    ></Image>
  </View>)
}
export default ProfileImage