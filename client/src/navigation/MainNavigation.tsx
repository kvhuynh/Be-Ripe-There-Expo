import { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginRegisterStack } from "./login-registration/LoginRegisterNavigation";
import TabNavigation from "./tabs/TabNavigation";
export const MainNavigation: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        // check if user is logged in
    }, [])

    return(
    <NavigationContainer>
        {isLoggedIn ? <TabNavigation></TabNavigation>: <LoginRegisterStack></LoginRegisterStack>}
    </NavigationContainer>
    )
}

export default MainNavigation;