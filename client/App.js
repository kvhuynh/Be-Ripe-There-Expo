import { useState, useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { testBackEnd, testRegister } from "./src/services/internalApiService";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from "./src/components/Login"
import { MealOptionPage } from "./src/views/MealOptionPage"

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen 
          name="login"
          component={Login}
          options={{ unmountOnBlur: true, headerShown: false }}
        /> */}
        <Stack.Screen 
        name="mealOptionPage"
        component={MealOptionPage}
        options={{ unmountOnBlur: true, headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <MealOptionPage>
    // </MealOptionPage>
  );
}
