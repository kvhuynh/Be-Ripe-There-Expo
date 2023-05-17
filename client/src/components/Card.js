import { View, Image, Text } from "react-native";

export const Card = (props) => {

	const small = (
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
						padding: 3,
					}}
					numberOfLines={2}
				>
					INDONESIAN CHICKEN BURGERfffff
				</Text>
			</View>
		</View>
	);
    
	const large = (
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
					paddingLeft: 6,
				}}
			>
				<View style={{}}>
					<Text style={{ fontSize: 20, fontWeight: "bold" }}>
						Fried Rice
					</Text>
					<Text>30 min vegan</Text>
				</View>
			</View>
		</View>
	);
	return (
		<View
			style={{
				flex: 0.7,
				marginLeft: "1%",
				borderRadius: 10,
				marginRight: "4%",
				backgroundColor: "#F1F1F1",
				marginLeft: 0,
			}}
		>
			<View
				style={{
					top: -60,
				}}
			>
				<Image
					style={{
						width: "100%",
						width: 414 / 3,
						height: 414 / 3,
						borderRadius: 414 / 4,
						alignSelf: "center",
						resizeMode: "cover",
					}}
					source={require("../images/istockphoto-672810138-612x612.png")}
				></Image>
			</View>
			<View
				style={{
					height: "18%",
					// flexDirection: "row",
					// alignSelf: "flex-end"
					// alignSelf: "center",
					alignItems: "center",
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
	);
};

export default Card;
