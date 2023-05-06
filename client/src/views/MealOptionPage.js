import {
	SafeAreaView,
	Text,
	StyleSheet,
	View,
	Image,
	StatusBar,
	Dimensions,
	Modal,
	Pressable,
	TouchableHighlight,
	ScrollView,
} from "react-native";

import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import SlideToggle from "../components/SlideToggle";

import ModalPopup from "../components/ModalPopup";

export const MealOptionPage = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);
	let ScreenHeight = Dimensions.get("window").height;
	let screenWidth = Dimensions.get("window").width;

	// TODO Touchable Highlight for image component to render modal popup
	// TODO Scroll up feature like uber eats

	const testData = {
		name: "Fried Rice",
		description:
			"This Nice and Fresh Fried Rice Is Made With Only 6 Easy Ingredients.",
		ingredients: [
			{
				quantity: "500g",
				name: "Rice",
				imageUri: "",
			},
			{
				quantity: "3",
				name: "Eggs",
				imageUri: "",
			},
			{
				quantity: "3",
				name: "Medium Carrots",
				imageUri: "",
			},
			{
				quantity: "2 tbsp",
				name: "Garlic",
				imageUri: "",
			},
			{
				quantity: "2 tbsp",
				name: "Soy Sauce",
				imageUri: "",
			},
			{
				quantity: "2 tbsp",
				name: "Scallions",
				imageUri: "",
			},
		],
	};

	return (
		<>
			<View>
				<View>
					<Image
						style={{ width: "100%" }}
						source={require("../images/istockphoto-672810138-612x612.png")}
					/>
				</View>

				<ScrollView
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
						<View style={{ marginTop: "5%", marginBottom: "10%" }}>
							<Text style={{ paddingHorizontal: "5%" }}>
								This Nice and Fresh Fried Rice Is Made With Only 6 Easy
								Ingredients.
							</Text>
						</View>

						<View style={{ flexDirection: "column" }}>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<View
									style={{
										flexDirection: "row",
										flex: 1,
										justifyContent: "space-evenly",
										// borderColor: "red",
										// borderWidth: 1,
									}}
								>
									<Image
										style={{
											resizeMode: "contain",
											flex: 0.4,
											height: 75,
											width: "100%",
										}}
										source={require("../images/nutrition-facts/carbohydrates.png")}
									></Image>
									<Text
										style={{
											alignSelf: "center",
											flex: 1,
											flexWrap: "wrap",
											marginLeft: "10%",
											color: "#5D5D5D",
										}}
									>
										14.7g Carbs
									</Text>
								</View>
								<View
									style={{
										flexDirection: "row",
										flex: 1,
										justifyContent: "space-evenly",
									}}
								>
									<Image
										style={{
											resizeMode: "contain",
											flex: 0.4,
											height: 75,
											width: "100%",
										}}
										source={require("../images/nutrition-facts/calories.png")}
									></Image>
									<Text
										style={{
											alignSelf: "center",
											flex: 1,
											flexWrap: "wrap",
											marginLeft: "10%",
											color: "#5D5D5D",
										}}
									>
										145 Calories
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginBottom: "10%",
									color: "#5D5D5D",
								}}
							>
								<View
									style={{
										flexDirection: "row",
										flex: 1,
										justifyContent: "space-evenly",
									}}
								>
									<Image
										style={{
											resizeMode: "contain",
											flex: 0.4,
											height: 75,
											width: 10,
										}}
										source={require("../images/nutrition-facts/protein.png")}
									></Image>
									<Text
										style={{
											alignSelf: "center",
											flex: 1,
											flexWrap: "wrap",
											marginLeft: "10%",
											color: "#5D5D5D",
										}}
									>
										2.5g Protein
									</Text>
								</View>
								<View
									style={{
										flexDirection: "row",
										flex: 1,
										justifyContent: "space-evenly",
									}}
								>
									<Image
										style={{
											resizeMode: "contain",
											flex: 0.4,
											height: 75,
											maxWidth: "100%",
										}}
										source={require("../images/nutrition-facts/fats.png")}
									></Image>
									<Text
										style={{
											alignSelf: "center",
											flex: 1,
											flexWrap: "wrap",
											marginLeft: "10%",
											color: "#5D5D5D",
										}}
									>
										3.2g Fats
									</Text>
								</View>
							</View>
							{/* <Ionicons name='md-checkmark-circle' size={60} color='green' /> */}
						</View>
						{/* Ingredients/Cart */}
						<View>
							<SlideToggle></SlideToggle>
							<View style={{ marginTop: "5%" }}>
								<Text>{testData.ingredients.length} items</Text>
								{testData.ingredients.map((item, i) => {
									return (
										<View
											style={{
												marginBottom: "1%",
												// borderWidth: 1,
												backgroundColor: "#F1F1F1",
												borderRadius: 5,
												padding: "2%",
											}}
										>
											<View style={{ 
												// borderWidth: 1,
												flexDirection: "row",
												flex: 0.3
										 }}>
												<Image
													style={{
														resizeMode: "contain",
														flex: 0.4,
														height: 35,
														width: "100%",

													}}
													source={require("../images/ingredients-test/rice.png")}
												></Image>
												<Text>
													{item.quantity} {item.name}
												</Text>
											</View>
										</View>
									);
								})}
							</View>
						</View>
						
					</View>
				</ScrollView>
			</View>
		</>
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

export default MealOptionPage;
