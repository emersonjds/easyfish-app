import React from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from "./src/pages/HomeScreen ";
import Notification from "./src/pages/Notification";
import Analises from "./src/pages/Analises";



import { Foundation } from '@expo/vector-icons';
import Store from "./src/pages/Store";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            color: "#000",
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }} />

      <Tab.Screen name="Analises" component={Analises}
        options={{
          tabBarLabel: "Analises",
          tabBarLabelStyle: {
            color: "#000",
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Foundation name="graph-bar" size={24} color="black" />
          ),
        }} />

      <Tab.Screen name="Notification" component={Notification}
        options={{
          tabBarLabel: "Notificações",
          tabBarLabelStyle: {
            color: "#000",
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="notification" size={24} color="black" />
          ),
        }} />

      <Tab.Screen name="Loja" component={Store}
        options={{
          tabBarLabel: "Loja",
          tabBarLabelStyle: {
            color: "#000",
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="store" size={24} color="black" />
          ),
        }} />

    </Tab.Navigator>
  )
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;


