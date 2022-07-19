import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
const Button=({buttonText,buttonOnPress,buttonTextStyles})=>{
return   <View >
<TouchableOpacity
  
  activeOpacity={0.7}
  onPress={() => {
    buttonOnPress()
  }}
>
  <Text style={buttonTextStyles}>
{buttonText}
  </Text>
</TouchableOpacity>
</View>
}
export default Button