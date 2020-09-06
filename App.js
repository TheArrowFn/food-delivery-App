import React from "react";
import FoodDeliveryLandingScreen from "./src/Screens/FoodDeliveryLandingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const Stack = createStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: '#ED4A60',
    background: '#ffffff',
    card: '#ffffff',
    text: 'rgb(28, 28, 30)',
    border: "#f8f8f8",
  },
};
const MainApp = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="New York" component={FoodDeliveryLandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
