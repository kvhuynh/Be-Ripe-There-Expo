import {
	Dimensions,
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from "react-native";

import { useState } from "react";

import Carousel from "react-native-reanimated-carousel";
import SlideToggle from "../components/SlideToggle";

import ModalPopup from "../components/ModalPopup";
import { FloatingActionButton } from "../components/FloatingActionButton";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";



export const MealDetails = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);

	// TODO: When back end is set up useState is the value of whatever it is in the backend: object.isFavorited
	const [isFavorited, setIsFavorited] = useState(false);
	const [viewIngredients, setViewIngredients] = useState(true);
	let screenHeight = Dimensions.get("window").height;
	let screenWidth = Dimensions.get("window").width;

	const testData = {
		name: "Fried Rice",
		description:
			"This Nice and Fresh Fried Rice Is Made With Only 6 Easy Ingredients.",
		ingredients: [
			{
				quantity: "500g",
				name: "Rice",
				imageUri: "../images/ingredients-test/rice.png",
			},
			{
				quantity: "3",
				name: "Eggs",
				imageUri: "../images/ingredients-test/eggs.png",
			},
			{
				quantity: "3",
				name: "Medium Carrots",
				imageUri: "../images/ingredients-test/carrots.png",
			},
			{
				quantity: "500g",
				name: "Rice",
				imageUri: "../images/ingredients-test/rice.png",
			},
			{
				quantity: "3",
				name: "Eggs",
				imageUri: "../images/ingredients-test/eggs.png",
			},
			{
				quantity: "3",
				name: "Medium Carrots",
				imageUri: "../images/ingredients-test/carrots.png",
			},
			{
				quantity: "500g",
				name: "Rice",
				imageUri: "../images/ingredients-test/rice.png",
			},
			{
				quantity: "3",
				name: "Eggs",
				imageUri: "../images/ingredients-test/eggs.png",
			},
			{
				quantity: "3",
				name: "Medium Carrots",
				imageUri: "../images/ingredients-test/carrots.png",
			},
			{
				quantity: "500g",
				name: "Rice",
				imageUri: "../images/ingredients-test/rice.png",
			},
			{
				quantity: "3",
				name: "Eggs",
				imageUri: "../images/ingredients-test/eggs.png",
			},
			{
				quantity: "3",
				name: "Medium Carrots",
				imageUri: "../images/ingredients-test/carrots.png",
			},
			{
				quantity: "500g",
				name: "Rice",
				imageUri: "../images/ingredients-test/rice.png",
			},
			{
				quantity: "3",
				name: "Eggs",
				imageUri: "../images/ingredients-test/eggs.png",
			},
			{
				quantity: "3",
				name: "Medium Carrots",
				imageUri: "../images/ingredients-test/carrots.png",
			},
		],
	};

	const ingredients = (
		<ScrollView
			style={{
				paddingRight: "10%",
			}}
		>
			{testData.ingredients.map((item, i) => {
				let test = item.imageUri;
				// console.log("i am being rendered");
				return (
					<View
						style={{
							// borderWidth: 1,
							marginBottom: "1%",
							backgroundColor: "#F1F1F1",
							borderRadius: 5,
							padding: "2%",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
						key={i}
					>
						<View
							style={{
								// borderWidth: 1,
								flexDirection: "row",
								flex: 0.3,
								// justifyContent: "space-between"
							}}
						>
							<Image
								style={{
									// resizeMode: "contain",
									// flex: 0.4,
									height: 35,
									width: 55,
									borderRadius: 10,
									// borderWidth: 1,
								}}
								source={{ uri: "https://reactjs.org/logo-og.png" }}
							></Image>
							<Text
								style={{
									// borderWidth: 1,
									width: "200%",
									marginLeft: "10%",
									alignSelf: "center",
									flexWrap: "wrap",
								}}
							>
								{item.quantity} {item.name}
							</Text>
						</View>
						<View
							style={{
								alignSelf: "center",
							}}
						>
							<Text>yo</Text>
						</View>
					</View>
				);
			})}
		</ScrollView>
		
	);

	const wtf = [ingredients, <Text>instructions</Text>];

	const item = (
		<>
			<View>
				<View>
					<Image
						style={{
							width: "100%",
							// position: "absolute",
							top: 0,
						}}
						source={require("../images/istockphoto-672810138-612x612.png")}
					/>
				</View>

				<ScrollView
					style={{
						// position: "absolute",
						top: "-5%",
						borderTopLeftRadius: 25,
						borderTopRightRadius: 25,
						overflow: "hidden",
						backgroundColor: "#FFFFFF",
						width: "100%",
						height: screenHeight,
						// borderWidth: 1
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
								<Text style={{ fontSize: 30, fontWeight: "bold" }}>
									{testData.name}
								</Text>
								<TouchableOpacity
									style={{ alignSelf: "center" }}
									onPress={() => setIsFavorited(!isFavorited)}
								>
									{isFavorited ? (
										<Image
											style={{ alignSelf: "center", marginLeft: "5%" }}
											source={require("../images/favorited.png")}
										/>
									) : (
										<Image
											style={{ alignSelf: "center", marginLeft: "5%" }}
											source={require("../images/not-favorited.png")}
										/>
									)}
								</TouchableOpacity>
								{/* <Image
									style={{ alignSelf: "center", marginLeft: "5%" }}
									source={require("../images/not-favorited.png")}
								/> */}
							</View>
							<View style={{ flexDirection: "row" }}>
								<Image
									style={{ alignSelf: "center" }}
									source={require("../images/Time-Circle.png")}
								></Image>
								<Text
									style={{
										alignSelf: "center",
										fontSize: 10,
										color: "#838383",
									}}
								>
									30 min Vegan
								</Text>
							</View>
						</View>
						<View style={{ marginTop: "5%", marginBottom: "10%" }}>
							<Text style={{ paddingHorizontal: "2%" }}>
								{testData.description}
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
							<View style={{ marginBottom: "8%" }}>
								<SlideToggle
									viewIngredientsFunction={setViewIngredients}
									viewIngredients={viewIngredients}
								></SlideToggle>
							</View>
							<View style={{
								flexDirection: "row",
								justifyContent: "space-between",
								marginBottom: "2%"
							}}>
								<Text
									style={{
										paddingLeft: "2%",
										marginBottom: "2%",
										color: "#5D5D5D",
									}}
								>
									{testData.ingredients.length} items
								</Text>
								<View
									style={{
										borderBottomWidth: 2,
										borderBottomColor: "#3B9744",
									}}
								>

									<Text style={{
										color: "#3B9744",
										fontSize: 15,
										fontWeight: "bold",
										// textDecorationLine: "underline"
										lineHeight: 20,
										
									}}>
										Add all to Cart
									</Text>
								</View>
							</View>
							<View style={{}}>
								<Carousel
									width={screenWidth}
									height={screenWidth}
									// autoPlay={true}
									data={[...new Array(2).keys()]}
									scrollAnimationDuration={200}
									// onSnapToItem={(index) => console. ("current index:", index)}
									onSnapToItem={() => setViewIngredients(!viewIngredients)}
									renderItem={({ index }) => (
										// viewIngredients ? ingredients : wtf[0]

										<View>{wtf[index]}</View>
									)}
								/>
							</View>
						</View>
					</View>

				</ScrollView>
			</View>
		</>
	);

	// return <ModalPopup test={item}></ModalPopup>;
	return (
		<>
		<ScrollView style={{
			backgroundColor: "#FFFFFF"
		}}>
			{/* <BottomSheet
					index={0}
					enablePanDownToClose={true}
					handleIndicatorStyle={{ display: "none" }}
					backgroundComponent={null}
					handleHeight={40}
			>

				<BottomSheetScrollView>
					{item}

				</BottomSheetScrollView>
			</BottomSheet> */}
			{item}
		</ScrollView>

		<FloatingActionButton text={ "Add To Calendar" } navigation={navigation} goTo={"AddToCalendar"} data={{}}></FloatingActionButton>
		</>
	)

};

export default MealDetails;
