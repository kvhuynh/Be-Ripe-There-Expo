import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/login-registration/LoginRegisterNavigation";
import { Header } from "../../components/Header";

import {
	View,
	ScrollView,
	Text,
	StyleSheet,
	Dimensions,
	TextInput,
	TouchableOpacity,
} from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "UserDetails">;
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const UserDetails: React.FC<Props> = (Props) => {
	return (
		<ScrollView style={styles.container}>
			<Header name="Enter Information"></Header>
			<View style={styles.inputGroup}>
				<View>
					<Text style={styles.inputTitle}>Age:</Text>
					<TextInput
						style={[styles.input, { width: 90 }]}
						placeholder="Enter Age"
						// onChangeText={(e: string) => handleChange("firstName", e)}
					/>
				</View>
				<View style={styles.inputBox}>
					<Text style={styles.inputTitle}>Weigh (lbs):</Text>
					<TextInput
						style={[styles.input, { width: 90 }]}
						placeholder="Enter Weight"
						// onChangeText={(e: string) => handleChange("lastName", e)}
					/>
				</View>
				<View style={styles.inputBox}>
					<Text style={styles.inputTitle}>Card Details (Optional):</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter Card Number"
						// onChangeText={(e: string) => handleChange("email", e)}
					/>
				</View>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					
					<View style={styles.inputBox}>
						<Text style={styles.inputTitle}>Expiration Date:</Text>
						<View style={{flexDirection: "row"}}>
							<TextInput
								style={[styles.input, { width: 80, marginRight: 20 }]}
								secureTextEntry={true}
								placeholder="00"
								// onChangeText={(e: string) => handleChange("password", e)}
							/>
							<TextInput
								style={[styles.input, { width: 80}]}
								secureTextEntry={true}
								placeholder="00"
								// onChangeText={(e: string) => handleChange("password", e)}
							/>
						</View>
					</View>
					<View style={styles.inputBox}>
						<Text style={styles.inputTitle}>CV Code:</Text>
						<TextInput
								style={[styles.input, { width: 80}]}

							secureTextEntry={true}
							placeholder="00"
							// onChangeText={(e: string) => handleChange("confirmPassword", e)}
						/>
					</View>
				</View>
			</View>
			<TouchableOpacity style={styles.button} onPress={() => Props.navigation.navigate("SelectGoal", {
				name: "Choose Your Goals",
				firstChoice: true,
			})}>
				<Text style={styles.buttonText}>Continue</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
		width: screenWidth,
		height: screenHeight,
	},

	inputTitle: {
		fontSize: 15,
		marginBottom: 10,
	},

	inputGroup: {
		paddingHorizontal: 30,
		height: screenHeight - 400,
	},

	inputBox: {
		marginTop: 20,
	},

	input: {
		height: 40,
		padding: 10,
		borderWidth: 1,
		borderRadius: 10,
		fontSize: 15,
		borderColor: "#C1C1C1",
	},

	// cardInput: {
	// 	width: 
	// },

	button: {
		alignSelf: "center",
		width: "85%",
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: "#3B9744",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#3B9744",
		marginBottom: 40,
		// marginTop: 40
	},
	buttonText: {
		backgroundColor: "#3B9744",
		color: "#FFFFFF",
		textAlign: "center",
		paddingLeft: 10,
		paddingRight: 10,
		fontSize: 15,
		fontWeight: "bold",
	},

});

export default UserDetails;
