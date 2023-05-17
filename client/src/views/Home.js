import { Text, View, ScrollView, Dimensions, TouchableOpacity } from "react-native";

export const Home = ({ navigation }) => {
	let screenHeight = Dimensions.get("window").height;
	let screenWidth = Dimensions.get("window").width;
	return (
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
				<TouchableOpacity
					onPress={() => navigation.navigate("CalendarStack", {screen: "CalendarView"})} 
				>
					<Text>
						yo
					</Text>
				</TouchableOpacity>
			</View>
			{/* <View>
        <Text></Text>
    </View> */}
		</ScrollView>
	);
};

export default Home;
