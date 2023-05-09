import { Text, TouchableOpacity, Dimensions } from "react-native";

export const FloatingActionButton = (props) => {
	let screenHeight = Dimensions.get("window").height;
	let screenWidth = Dimensions.get("window").width;
	return (
		<TouchableOpacity
			style={{
				position: "absolute",
				// marginRight: 50,
				// marginLeft: 50,
				// marginTop: "20%",
				top: "88%",
				// left: "25%",
                alignSelf: "center",
                // padding: 20,
                width: "50%",
				paddingTop: 20,
				paddingBottom: 20,
				backgroundColor: "#3B9744",
				borderRadius: 20,
				borderWidth: 1,
				borderColor: "#FFFFFF",
			}}
		>
			<Text
				style={{
					color: "#FFFFFF",
					textAlign: "center",
					paddingLeft: 10,
					paddingRight: 10,
					fontSize: "20%",
					fontWeight: "bold",
				}}
			>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
};

export default FloatingActionButton;
