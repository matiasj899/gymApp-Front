import React from 'react'
import { View } from 'react-native';

const TopMenu=({buttons,children})=>{
    return (
        <View>
          
            {buttons}
       
          {children}
        </View>
      );
}
export default TopMenu