import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import BaseRoutes from "./BaseRoutes";
import AuthRoutes from "./AuthRoutes";

const AppNavigator = () =>{
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={"white"} barStyle="dark-content" />
            <Stack.Navigator>
                <Stack.Screen name="AuthRoutes" component={AuthRoutes} options={{ headerShown: false }} />  
                <Stack.Screen name="BaseRoutes" component={BaseRoutes} options={{ headerShown: false, gestureEnabled:false }}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;