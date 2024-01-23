import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window')
const BaseRoutes = () =>{
    const Tab = createBottomTabNavigator();
    return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={HomeScreen} />
      <Tab.Screen name="Jadwal" component={SettingsScreen} />
      <Tab.Screen name="Akun" component={AkunScreen} />
    </Tab.Navigator>
    )
}

export default BaseRoutes;

const HomeScreen = () =>{
    return (
        <Text>Home</Text>
    )
}

const SettingsScreen = () =>{
    return (
        <Text>Setting</Text>
    )
}

const AkunScreen = () =>{
    return (
        <Text>Akun</Text>
    )
}