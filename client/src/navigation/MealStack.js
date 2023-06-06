import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealDetails } from "./../views/MealDetails";
import { Meals } from "./../views/Meals";

const Stack = createNativeStackNavigator();

export const MealStack = () => {
	return (

		<Stack.Navigator>
			<Stack.Screen
				name="Meals"
				component={Meals}
                options={{headerShown:false}}
			></Stack.Screen>

			<Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen
                    name="MealDetails"
                    component={MealDetails}
                    options={{headerShown:false}}
                ></Stack.Screen>

            </Stack.Group>
		</Stack.Navigator>
	);
};

export default MealStack;
