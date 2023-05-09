import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Meals } from "./../views/Meals"
import { MealOptionPage } from "./../views/MealOptionPage";
import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();
export const BottomTabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={MealOptionPage}
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
				component={Meals}
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
				name="Calendar"
				component={MealOptionPage}
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
				component={MealOptionPage}
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
				component={MealOptionPage}
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

export default BottomTabs;
