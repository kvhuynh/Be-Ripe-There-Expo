import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../views/Home";
const Stack = createNativeStackNavigator();

export const HomeStack = () => {
	return (
		<Stack.Navigator
			name="HomeScreen"
			component={Home}
			options={{ headerShown: false }}
			initialRouteName="HomeScreen"
		>
			<Stack.Screen
				name="HomeScreen"
				component={Home}
				options={{ headerShown: false }}
			></Stack.Screen>
		</Stack.Navigator>
	);
};

export default HomeStack;
