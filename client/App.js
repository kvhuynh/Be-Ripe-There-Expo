import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from "./src/navigation/TabNavigation"


const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation></TabNavigation>
    </NavigationContainer>
    
  );
}

export default App;

