import React from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';
import Trips from "./src/pages/Trips";
import HomeScreen from "./src/pages/HomeScreen ";
import Notification from "./src/pages/Notification";

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

      <Tab.Screen name="Travel" component={Trips}
        options={{
          tabBarLabel: "Viagens",
          tabBarLabelStyle: {
            color: "#000",
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plane" size={24} color="black" />
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

