import { useEffect, useState } from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from "./src/navigation/tabs/TabNavigation"
import SplashScreen from "./src/views/SplashScreen";
import MainNavigation from "./src/navigation/MainNavigation"

const Stack = createNativeStackNavigator();
export const App = () => {

  // useEffect(() => {
  //   console.log("yo");
  // }, [])


  return (
      <MainNavigation></MainNavigation>
    
  );
}

export default App;

