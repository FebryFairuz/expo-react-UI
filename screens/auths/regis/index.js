import { View, Text } from 'react-native'
import React from 'react'
import mystyles from '../../../utils/static_style'
import { BtnTouchableOpacity } from '../../../components/Buttons'

export function Register({navigation}) {
    const HandlerGoto = () => {
        navigation.navigate("OTP");
      };
  return (
    <View style={mystyles.container}>
      <Text style={mystyles.title}>Ini Register Page</Text>
      <BtnTouchableOpacity onpress={HandlerGoto}>
        <View>
          <Text style={mystyles.btntext}>Ke OTP nyok</Text>
        </View>
      </BtnTouchableOpacity>
    </View>
  )
}