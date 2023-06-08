import { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../views/SplashScreen";
import TabNavigation from "./tabs/TabNavigation";
import {LoginRegisterStack} from "./login-registration/LoginRegisterStack"
import Header from "../components/Header"
const Stack = createNativeStackNavigator();

export const MainNavigation: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        // check if user is logged in
    }, [])

    return(
    <NavigationContainer>
        <SplashScreen></SplashScreen>
        {/* <Header name="tesdfsdfsdfsdfsdfsdfst"></Header> */}
        {/* {isLoggedIn ? <TabNavigation></TabNavigation>: <LoginRegisterStack></LoginRegisterStack>} */}
    </NavigationContainer>
    )
}

export default MainNavigation;