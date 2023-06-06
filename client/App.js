import { useEffect } from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from "./src/navigation/TabNavigation"
import SplashScreen from "./src/views/SplashScreen";


const Stack = createNativeStackNavigator();

export const App = () => {

  // useEffect(() => {
  //   // check session
  // })


  return (
    <>
      <SplashScreen></SplashScreen>
      {/* <NavigationContainer>
        <TabNavigation></TabNavigation>
      </NavigationContainer> */}
    </>
    
  );
}

export default App;

