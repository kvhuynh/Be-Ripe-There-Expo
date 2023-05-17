import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { MealStack } from "../navigation/MealStack";
import { HomeStack } from "../navigation/HomeStack"
import { MealDetails } from "../views/MealDetails";
import { CalendarStack } from "../navigation/CalendarStack"


const leftToRightAnimation = {
	cardStyleInterpolator: ({ current, layouts }) => {
	  return {
		cardStyle: {
		  transform: [
			{
			  translateX: current.progress.interpolate({
				inputRange: [0, 1],
				outputRange: [-layouts.screen.width, 0],
			  }),
			},
		  ],
		},
	  };
	},
  };

const Tab = createBottomTabNavigator();
export const TabNavigation = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					unmountOnBlur: true,
					headerShown: false,
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<>
								<Image
									style={{ width: 25, height: 25 }}
									source={require("../images/tab-navigation-icons/selected/home-selected.png")}
								/>
								<Image
									style={{ width: 65, height: 5, marginTop: "5%", marginLeft: "2%" }}
									source={require("../images/tab-navigation-icons/selected/selected-underline.png")}
								/>
							</>
						) : (
							<Image
								style={{ width: 25, height: 25 }}
								source={require("../images/tab-navigation-icons/unselected/home-unselected.png")}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Meals"
				component={MealStack}
				options={{
					unmountOnBlur: true,
					headerShown: false,
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<>
								<Image
									style={{ width: 25, height: 25 }}
									source={require("../images/tab-navigation-icons/selected/meals-selected.png")}
								/>
								<Image
									style={{ width: 65, height: 5, marginTop: "5%", marginLeft: "2%" }}

									source={require("../images/tab-navigation-icons/selected/selected-underline.png")}
								/>
							</>
						) : (
							<Image
								style={{ width: 25, height: 25 }}
								source={require("../images/tab-navigation-icons/unselected/meals-unselected.png")}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="CalendarStack"
				component={CalendarStack}
				options={{
					unmountOnBlur: true,
					headerShown: false,
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<>
								<Image
									style={{ width: 25, height: 25 }}
									source={require("../images/tab-navigation-icons/selected/calendar-selected.png")}
								/>
								<Image
									style={{ width: 65, height: 5, marginTop: "5%", marginLeft: "2%" }}

									source={require("../images/tab-navigation-icons/selected/selected-underline.png")}
								/>
							</>
						) : (
							<Image
								style={{ width: 25, height: 25 }}
								source={require("../images/tab-navigation-icons/unselected/calendar-unselected.png")}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Cart"
				component={MealDetails}
				options={{
					unmountOnBlur: true,
					headerShown: false,
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<>
								<Image
									style={{ width: 25, height: 25 }}
									source={require("../images/tab-navigation-icons/selected/cart-selected.png")}
								/>
								<Image
									style={{ width: 65, height: 5, marginTop: "5%", marginLeft: "2%" }}

									source={require("../images/tab-navigation-icons/selected/selected-underline.png")}
								/>
							</>
						) : (
							<Image
								style={{ width: 25, height: 25 }}
								source={require("../images/tab-navigation-icons/unselected/cart-unselected.png")}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={MealDetails}
				options={{
					unmountOnBlur: true,
					headerShown: false,
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<>
								<Image
									style={{ width: 25, height: 25 }}
									source={require("../images/tab-navigation-icons/selected/user-selected.png")}
								/>
								<Image
									style={{ width: 65, height: 5, marginTop: "5%", marginLeft: "2%" }}

									source={require("../images/tab-navigation-icons/selected/selected-underline.png")}
								/>
							</>
						) : (
							<Image
								style={{ width: 25, height: 25 }}
								source={require("../images/tab-navigation-icons/unselected/user-unselected.png")}
							/>
						),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigation;
