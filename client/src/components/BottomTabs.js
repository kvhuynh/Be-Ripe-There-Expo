import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MealOptionPage } from "./../views/MealOptionPage";

const Tab = createBottomTabNavigator();
export const BottomTabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={MealOptionPage}
				options={{ unmountOnBlur: true, headerShown: false }}
			/>
			<Tab.Screen
				name="Settings"
				component={MealOptionPage}
				options={{ unmountOnBlur: true, headerShown: false }}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabs;
