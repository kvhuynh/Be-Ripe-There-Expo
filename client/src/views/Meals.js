import { useState } from "react";
import {
	View,
	Text,
	ScrollView,
	Dimensions,
	Image,
	StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { value, SearchBar } from "@rneui/themed";

export const Meals = () => {
	let screenHeight = Dimensions.get("window").height;
	let screenWidth = Dimensions.get("window").width;

	const [value, setValue] = useState("");

	const updateSearch = (search) => {
		setSearch(search);
	};

	// const baseOptions = {
	// 	vertical: false,
	// 	width: screenWidth * 0.1,
	// 	height: screenWidth / 2,
	// };

	return (
		<ScrollView
			style={{
				// position: "absolute",
				// overflow: "hidden",
				backgroundColor: "#FFFFFF",
				width: "100%",
				height: screenHeight,
				// paddingLeft: "5%",
				// borderWidth: 1
			}}
		>
			<View
				style={{
					// marginBottom: "10%",
					padding: "5%",
					paddingTop: "10%",
				}}
			>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-evenly" }}
					>
						<Text style={{ fontSize: "30%", fontWeight: "bold" }}>
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
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						paddingRight: "%",
					}}
				>
					<Text style={{ fontSize: "20%", fontWeight: "bold" }}>
						Yummy Dishes
					</Text>
					<Text
						style={{
							fontSize: "17%",
							color: "#3B9744",
							fontWeight: "bold",
							alignSelf: "center",
						}}
					>
						See all
					</Text>
				</View>
			</View>
			<View
				style={{
					// paddingBottom: "40%"
					// padding: "5%",
					paddingLeft: "5%",
				}}
			>
				<Carousel
					// {...baseOptions}
					width={screenWidth * 0.8}
					height={screenWidth}
					loop={true}
					ref={null}
					style={{ width: "100%" }}
					autoPlay={true}
					// autoPlayInterval={isFast ? 100 : 2000}
					data={[...new Array(6).keys()]}
					pagingEnabled={true}
					onSnapToItem={(index) => console.log("current index:", index)}
					renderItem={({ index }) => (
						<View
							style={{
								flex: 1,
								marginLeft: "1%",
								borderWidth: 1,
								marginBottom: "40%",
							}}
						>
							{/* <SBItem key={index} index={index} /> */}
							<Text>{index}</Text>
						</View>
					)}
				/>
				<Carousel
					// {...baseOptions}
					width={screenWidth * 0.35}
					height={screenWidth}
					loop={true}
					ref={null}
					style={{ width: "100%" }}
					autoPlay={true}
					// autoPlayInterval={isFast ? 100 : 2000}
					data={[...new Array(6).keys()]}
					pagingEnabled={true}
					onSnapToItem={(index) => console.log("current index:", index)}
					renderItem={({ index }) => (
						<View
							style={{
								flex: 1,
								marginLeft: "1%",
								borderWidth: 1,
								marginBottom: "40%",
							}}
						>
							{/* <SBItem key={index} index={index} /> */}
							<Text>{index}</Text>
						</View>
					)}
				/>
				<Carousel
					// {...baseOptions}
					width={screenWidth * 0.2}
					height={"20%"}
					loop={true}
					ref={null}
					style={{ width: "200%" }}
					autoPlay={true}
					// autoPlayInterval={isFast ? 100 : 2000}
					data={[...new Array(6).keys()]}
					pagingEnabled={true}
					onSnapToItem={(index) => console.log("current index:", index)}
					renderItem={({ index }) => (
						<View
							style={{
								flex: 1,
								marginLeft: "1%",
								borderWidth: 1,
								marginBottom: "40%",
                                width: "200%"
							}}
						>
							{/* <SBItem key={index} index={index} /> */}
							<Text>{index}</Text>
						</View>
					)}
				/>
			</View>
		</ScrollView>
	);
};

export default Meals;
