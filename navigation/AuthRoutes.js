import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import { ForgetPassword, Login, Otp, Register } from "../screens/auths";

const AuthRoutes = ({ navigation }) => {
  const Stack = createStackNavigator();
  useEffect(() => {
    navigation.navigate("Login");
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Daftar" component={Register} />
      <Stack.Screen name="OTP" component={Otp} />
      <Stack.Screen name="Lupa-Password" component={ForgetPassword} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
