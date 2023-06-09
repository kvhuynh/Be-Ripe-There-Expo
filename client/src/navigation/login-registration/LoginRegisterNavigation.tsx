import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "../../views/login-registration/Register";
import { SplashScreen } from "../../views/SplashScreen";
import { Login } from "../../views/login-registration/Login";

export type RootStackParamList= {
    SplashScreen: undefined;
    Register: undefined;
    Login: undefined;
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
            <Stack.Screen 
            name="SplashScreen" 
            component={SplashScreen}

            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      );
}

export default LoginRegisterStack;