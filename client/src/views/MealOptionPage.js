import {
	SafeAreaView,
	Text,
	StyleSheet,
	View,
	Image,
	StatusBar,
	Dimensions,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

export const MealOptionPage = ({ navigation }) => {
	let ScreenHeight = Dimensions.get("window").height;

	return (
		<View>
			<View>
				<Image
					style={{ width: "100%" }}
					source={require("../images/istockphoto-672810138-612x612.png")}
				/>
			</View>

			{/* Box should overlap image above use absolute position */}
			<View
				style={{
					position: "absolute",
					top: "80%",
					borderTopLeftRadius: 25,
					borderTopRightRadius: 25,
					overflow: "hidden",
					backgroundColor: "#FFFFFF",
					width: "100%",
					height: ScreenHeight,
				}}
			>
				<View
					style={{
						marginBottom: "10%",
						padding: "5%",
					}}
				>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<View
							style={{ flexDirection: "row", justifyContent: "space-evenly" }}
						>
							<Text style={{ fontSize: "30%", fontWeight: "bold" }}>
								Fried Rice
							</Text>
							<Image
								style={{ alignSelf: "center", marginLeft: "5%" }}
								source={require("../images/Group-43.png")}
							/>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Image
								style={{ alignSelf: "center" }}
								source={require("../images/Time-Circle.png")}
							></Image>
							<Text
								style={{
									alignSelf: "center",
									fontSize: "10%",
									color: "#838383",
								}}
							>
								30 min Vegan
							</Text>
						</View>
					</View>
					<View style={{ marginTop: "5%" }}>
						<Text style={{ paddingHorizontal: "5%" }}>
							This Nice and Fresh Fried Rice Is Made With Only 6 Easy
							Ingredients.
						</Text>
					</View>

					{/* Nutrient facts */}
					<View
						style={{ flexDirection: "column", alignItems: "space-between"}}
					>                        
						<View
							style={{ flexDirection: "row", justifyContent: "space-between"}}
						>
							<View
								style={{
									flexDirection: "row",
									flex: 1,
									justifyContent: "space-around",
								}}
							>
								<Image
									style={{ resizeMode: "contain", flex: 0.4 }}
									source={require("../images/nutrition-facts/carbohydrates.png")}
								></Image>
								<Text style={{ alignSelf: "center" }}>14.7g Carbs</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									flex: 1,
									justifyContent: "space-around",
								}}
							>
								<Image
									style={{ resizeMode: "contain", flex: 0.4 }}
									source={require("../images/nutrition-facts/calories.png")}
								></Image>
								<Text style={{ alignSelf: "center" }}>145 calories</Text>
							</View>
						</View>
						<View
							style={{ flexDirection: "row", justifyContent: "space-between"}}
						>
							<View
								style={{
									flexDirection: "row",
									flex: 1,
									justifyContent: "space-around",
								}}
							>
								<Image
									style={{ resizeMode: "contain", flex: 0.4 }}
									// style={{ width: 50, height: 50 }}

									source={require("../images/nutrition-facts/protein.png")}
								></Image>
								<Text style={{ alignSelf: "center" }}>14.7g Carbs</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									flex: 1,
									justifyContent: "space-around",
								}}
							>
								<Image
									style={{ resizeMode: "contain", flex: 0.4 }}
									source={require("../images/nutrition-facts/fats.png")}
								></Image>
								<Text style={{ alignSelf: "center" }}>145 calories</Text>
							</View>
						</View>
						{/* <Ionicons name='md-checkmark-circle' size={60} color='green' /> */}
					</View>
				</View>
			</View>
		</View>
	);
};

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#FFF5DD",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		// backgroundColor: 'grey',
	},
	box: {
		width: 50,
		height: 50,
	},
	row: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	button: {
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderRadius: 4,
		backgroundColor: "oldlace",
		alignSelf: "flex-start",
		marginHorizontal: "1%",
		marginBottom: 6,
		minWidth: "48%",
		textAlign: "center",
	},
	selected: {
		backgroundColor: "coral",
		borderWidth: 0,
	},
	buttonLabel: {
		fontWeight: "500",
		color: "coral",
	},
	selectedLabel: {
		color: "white",
	},
	label: {
		textAlign: "center",
		marginBottom: 10,
	},
});
