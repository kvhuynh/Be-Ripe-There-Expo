import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalendarView from "../../views/CalendarView";
import { AddToCalendar, SelectDate } from "../../views/AddToCalendar";

const Stack = createNativeStackNavigator();
// TODO: make the animation transition smoothly from add to calendar to calendar view

export const CalendarStack = () => {
	return (
		<Stack.Navigator initialRouteName="CalendarView">
			<Stack.Screen
				name="CalendarView"
				component={CalendarView}
				options={{ headerShown: false }}
			></Stack.Screen>
			<Stack.Screen
				name="AddToCalendar"
				component={AddToCalendar}
				options={{ headerShown: false }}
			></Stack.Screen>
			<Stack.Screen
				name="SelectDate"
				component={SelectDate}
				options={{ headerShown: false }}
			></Stack.Screen>
		</Stack.Navigator>
	);
};

export default CalendarStack;
