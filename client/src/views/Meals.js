import { useState } from "react";
import {
	Dimensions,
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { SearchBar } from "@rneui/themed";

export const Meals = ({ navigation }) => {
	let screenHeight = Dimensions.get("window").height;
	let screenWidth = Dimensions.get("window").width;

	const [value, setValue] = useState("");

	const [selected, setSelected] = useState(null);

	const updateSearch = (search) => {
		setSearch(search);
	};

	const specializedMeals = [
		"Protein",
		"Carbs",
		"Balanced",
		"Vegetarian",
		"Vegan",
	];

	return (
		<Animated.View
        key={'uniqueKey'}
        entering={FadeIn.duration(400)}
        exiting={FadeOut.duration(400)}>
		<ScrollView
			style={{
				backgroundColor: "#FFFFFF",
				width: "100%",
				height: screenHeight,
			}}
		>
			<View
				style={{
					padding: "5%",
					paddingTop: "10%",
				}}
			>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-evenly" }}
					>
						<Text style={{ fontSize: 30, fontWeight: "bold" }}>
							Find the best recipes for cooking
						</Text>
						{/* <Image
							style={{ alignSelf: "center", marginLeft: "5%" }}
							source={require("../images/Group-43.png")}
						/> */}
					</View>
				</View>
				<View
					style={{
						marginLeft: "-1%",
						marginBottom: "10%",
					}}
				>
					<SearchBar
						platform="default"
						containerStyle={{
							backgroundColor: "#FFFFFF",
							borderBottomColor: "transparent",
							borderTopColor: "transparent",
							width: "100%",
						}}
						inputContainerStyle={{
							backgroundColor: "white",
							borderColor: "grey",
							borderWidth: 1,
							borderBottomWidth: 1,
							borderRadius: "15%",
						}}
						inputStyle={{}}
						leftIconContainerStyle={{}}
						rightIconContainerStyle={{}}
						loadingProps={{}}
						onChangeText={(newVal) => setValue(newVal)}
						onClearText={() => console.log(onClearText())}
						placeholder="Search recipes"
						placeholderTextColor="#888"
						cancelButtonTitle="Cancel"
						cancelButtonProps={{}}
						onCancel={() => console.log(onCancel())}
						value={value}
					/>
				</View>
			</View>
			<View
				style={{
					// paddingBottom: "40%"
					// padding: "5%",
					paddingLeft: "5%",
				}}
			>
				{/* Promoted main dishes */}
				<View
					style={{
						marginBottom: "5%",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginBottom: "5%",
						}}
					>
						<Text style={{ fontSize: 20, fontWeight: "bold" }}>
							Yummy Dishes
						</Text>
						<Text
							style={{
								fontSize: 17,
								color: "#3B9744",
								fontWeight: "bold",
								alignSelf: "center",
								marginRight: "5%",
							}}
						>
							See all
						</Text>
					</View>
					<Carousel
						// {...baseOptions}
						width={screenWidth * 0.63}
						height={screenWidth * 0.63}
						loop={true}
						ref={null}
						style={{ width: "100%" }}
						// autoPlay={true}
						// autoPlayInterval={isFast ? 100 : 2000}
						data={[...new Array(6).keys()]}
						pagingEnabled={true}
						onSnapToItem={(index) => console.log("current index:", index)}
						renderItem={({ index }) => (
							<TouchableOpacity
								style={{
									flex: 1,
									marginLeft: "1%",
									// borderWidth: 1,
									borderRadius: 20,
									marginRight: "4%",
								}}
								onPress={() => {
									navigation.navigate("MealDetails")
								}}
							>
								<Image
									style={{
										resizeMode: "cover",
										borderTopLeftRadius: 20,
										borderTopRightRadius: 20,
										width: "100%",
										height: "80%",
									}}
									// source={require("../images/istockphoto-672810138-612x612.png")}
									
								></Image>
								<View
									style={{
										backgroundColor: "#fff",
										borderBottomLeftRadius: 20,
										borderBottomRightRadius: 20,
										height: "18%",
										shadowColor: "#000",
										shadowOffset: { width: 1, height: 1 },
										shadowOpacity: 0.4,
										shadowRadius: 3,
										elevation: 5,
										paddingLeft: 6
									}}
								>
									<View
										style={{

										}}
									>
										<Text
											style={{ fontSize: 20, fontWeight: "bold" }}
										>
											Fried Rice
										</Text>
										<Text>
											30 min vegan 
										</Text>

									</View>
								</View>
							</TouchableOpacity>
						)}
					/>
				</View>

				{/* Favorited Dishes */}
				<View style={{
					marginBottom: "6%"
				}}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginBottom: "5%",
							// paddingRight: "%",
						}}
					>
						<Text style={{ fontSize: 20, fontWeight: "bold" }}>
							Favorites
						</Text>
						{/* <Text
							style={{
								fontSize: "17%",
								color: "#3B9744",
								fontWeight: "bold",
								alignSelf: "center",
								marginRight: "5%",
							}}
						>
							See all
						</Text> */}
					</View>
					<Carousel
						// {...baseOptions}
						width={screenWidth * 0.38}
						height={screenWidth * 0.6}
						loop={true}
						ref={null}
						style={{ width: "100%" }}
						// autoPlay={true}
						// autoPlayInterval={isFast ? 100 : 2000}
						data={[...new Array(6).keys()]}
						pagingEnabled={true}
						onSnapToItem={(index) => console.log("current index:", index)}
						renderItem={({ index }) => (
							<View
								style={{
									flex: 1,
									marginLeft: "1%",
									// borderWidth: 1,
									borderRadius: 20,
									marginRight: "4%",
								}}
							>
								<Image
									style={{
										resizeMode: "cover",
										borderTopLeftRadius: 20,
										borderTopRightRadius: 20,
										width: "100%",
										height: "80%",
									}}
									source={require("../images/istockphoto-672810138-612x612.png")}
								></Image>
								<View
									style={{
										backgroundColor: "#fff",
										borderBottomLeftRadius: 20,
										borderBottomRightRadius: 20,
										height: "18%",
										shadowColor: "#000",
										shadowOffset: { width: 1, height: 1 },
										shadowOpacity: 0.4,
										shadowRadius: 3,
										elevation: 5,
									}}
								>
										<Text
											style={{
												alignSelf: "center",
												// justifyContent: "center",
												fontSize: 15,
												fontWeight: "bold",
												flex: 1,
												flexWrap: "wrap",
												height: "100%",
												flexDirection: "row",
												padding: 3
												
											}}
											numberOfLines={2}
										>
											INDONESIAN CHICKEN BURGERfffff
										</Text>
								</View>
							</View>
						)}
					/>
				</View>

				{/* Specialized meals */}
				<View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginBottom: "5%",
							// paddingRight: "%",
						}}
					>
						<Text style={{ fontSize: 20, fontWeight: "bold" }}>
							Specialized Meals
						</Text>

					</View>

					<Carousel
						width={screenWidth * 0.35}
						height={screenWidth * 0.2}
						loop={true}
						ref={null}
						style={{ width: "200%", marginBottom: 50 }}
						data={specializedMeals}
						pagingEnabled={true}
						onSnapToItem={(index) => console.log("current index:", index)}
						renderItem={({ index }) => (
							<View
								style={{
									flex: 1,
									marginLeft: "1%",
									width: "56%",
									borderRadius: 20,
									marginRight: "4%",
								}}
							>
								<TouchableOpacity
									style={{
										flex: 1,
										marginLeft: "1%",
										// borderWidth: 1,
										marginBottom: "40%",
										width: "175%",
										backgroundColor: index === selected ? "#3B9744" : "#FFFFFF",
										borderRadius: 20,
										// marginRight: "40%"
										alignItems: "center",
										justifyContent: "center",
									}}
									key={index}
									onPress={() => setSelected(index)}
									underlayColor={"gray"}
								>
									<View
										style={{
											backgroundColor: "#fff",
											backgroundColor:
												index === selected ? "#3B9744" : "#FFFFFF",
										}}
									>
										<Text
											style={{
												color: index === selected ? "#FFFFFF" : "#3B9744",
												fontSize: 15,
												fontWeight: "bold",
											}}
										>
											{specializedMeals[index]}
										</Text>
									</View>
								</TouchableOpacity>
							</View>
						)}
					/>
					<Carousel
						// {...baseOptions}
						width={screenWidth * 0.45}
						height={screenWidth * 0.6}
						loop={true}
						ref={null}
						style={{
							width: "200%",
							position: "relative",
							overflow: "visible",
						}}
						// autoPlay={true}
						// autoPlayInterval={isFast ? 100 : 2000}
						data={[...new Array(6).keys()]}
						pagingEnabled={true}
						onSnapToItem={(index) => console.log("current index:", index)}
						renderItem={({ index }) => (
							<View
								style={{
									flex: 0.7,
									marginLeft: "1%",
									// borderWidth: 1,
									borderRadius: 10,
									marginRight: "4%",
									backgroundColor: "#F1F1F1",
									// position: "relative",
									// borderWidth: 1,
									    marginLeft: 0,
								}}
							>
								<View
									style={{
										// position: "absolute",
										// alignSelf: "center",
										top: -60,
									}}
								>
									<Image
										style={{
											// width: 100,
											// height: 100,
											width: "100%",
											width: 414 / 3,
											height: 414 / 3,
											borderRadius: 414 / 4,
											// borderRadius: 100 / 2,
											alignSelf: "center",
											resizeMode: "cover",
										}}
										source={require("../images/istockphoto-672810138-612x612.png")}
									>
										
									</Image>
								</View>
									<View
										style={{
											height: "18%",
											// flexDirection: "row",
											// alignSelf: "flex-end"
											// alignSelf: "center",
											alignItems:"center",
										}}
									>
										<Text
											style={{
												// alignSelf: "center",
												// justifyContent: "center",
												fontSize: 15,
												fontWeight: "bold",
												flex: 1,
												flexWrap: "wrap",
												height: "100%",
												flexDirection: "row",
											}}
											numberOfLines={2}
										>
											Chicken Steam Bunshhh
										</Text>
									</View>
							</View>
						)}
					/>
				</View>
			</View>
			{/* <View>
				<Text></Text>
			</View> */}
		</ScrollView>
		</Animated.View>
	);
};

export default Meals;
