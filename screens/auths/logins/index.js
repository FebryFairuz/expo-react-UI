import { View, Text } from "react-native";
import React from "react";
import mystyles from "../../../utils/static_style";
import { BtnTouchableOpacity } from "../../../components/Buttons";

export function Login({ navigation }) {
  const HandlerGoto = (dir) => {
    navigation.navigate(dir);
  };
  return (
    <View style={mystyles.container}>
      <Text style={mystyles.title}>Ini Login Page</Text>
      <View>
        <BtnTouchableOpacity onpress={() => HandlerGoto("Daftar")}>
          <View>
            <Text style={mystyles.btntext}>Ke Daftar nyok</Text>
          </View>
        </BtnTouchableOpacity>
      </View>
      <View style={{ marginVertical: 10 }}>
        <BtnTouchableOpacity onpress={() => HandlerGoto("Lupa-Password")}>
          <View>
            <Text style={mystyles.btntext}>Ke Lupa Password</Text>
          </View>
        </BtnTouchableOpacity>
      </View>
      <View>
        <BtnTouchableOpacity onpress={() => HandlerGoto("BaseRoutes")}>
          <View>
            <Text style={mystyles.btntext}>Ke Main App Akh</Text>
          </View>
        </BtnTouchableOpacity>
      </View>
    </View>
  );
}
