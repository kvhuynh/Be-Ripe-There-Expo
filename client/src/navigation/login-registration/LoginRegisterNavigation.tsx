import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Register } from "../../views/login-registration/Register";
import { SplashScreen } from "../../views/login-registration/SplashScreen";
import { Login } from "../../views/login-registration/Login";
import { UserDetails } from "../../views/login-registration/UserDetails";
import { SelectGoal } from "../../views/login-registration/SelectGoal"

import { TabNavigation } from "../tabs/TabNavigation"

export type RootStackParamList= {
    SplashScreen: undefined;
    Login: undefined;
    Register: undefined;
    UserDetails: undefined;
    SelectGoal: {name: string, firstChoice: boolean };
    TabNavigation: undefined;
}

// const Stack = createNativeStackNavigator<RootStackParamList>();

// export const LoginRegisterStack: React.FC = () => {
export const LoginRegisterStack: React.FC = () => {
        
    const Stack = createNativeStackNavigator<RootStackParamList>();

    

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="SplashScreen"
        >
            {/* start */}
            <Stack.Screen 
            name="SplashScreen" 
            component={SplashScreen}

            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="UserDetails" component={UserDetails}/>
            <Stack.Screen name="SelectGoal" component={SelectGoal}/>
            {/* end */}
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
        </Stack.Navigator>
      );
}

export default LoginRegisterStack;