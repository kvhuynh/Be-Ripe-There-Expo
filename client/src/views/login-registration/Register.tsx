import {
	View,
	Text,
	TextInput,
	ScrollView,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
    Button,
    Image
} from "react-native";
import { Header } from "../../components/Header";

import { useEffect } from "react";

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
import {EXPO_CLIENT_ID} from "@env"
export const Register: React.FC = () => {

    const [request, response, promptAsync] = Google.useAuthRequest({
        // iosClientId: process.env.IOS_CLIENT_ID
        expoClientId: process.env.EXPO_CLIENT_ID
      });

      useEffect(() => {
        console.log(process.env.EXPO_CLIENT_ID);
      })

	return (
		<ScrollView style={styles.container}>
			<Header name="Create an Account"></Header>
			<View style={styles.inputGroup}>
				<View>
					<Text style={styles.inputTitle}>First Name</Text>
					<TextInput style={styles.input} placeholder="Enter First Name:" />
				</View>
				<View style={styles.inputBox}>
					<Text style={styles.inputTitle}>Last Name:</Text>
					<TextInput style={styles.input} placeholder="Enter Last Name" />
				</View>
				<View style={styles.inputBox}>
					<Text style={styles.inputTitle}>Email:</Text>
					<TextInput style={styles.input} placeholder="Enter Email" />
				</View>
				<View style={styles.inputBox}>
					<Text style={styles.inputTitle}>Password:</Text>
					<TextInput style={styles.input} placeholder="Enter Password" />
				</View>
				<View style={styles.inputBox}>
					<Text style={styles.inputTitle}>Confirm Password:</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter Confirm Password"
					/>
				</View>
			</View>
			<TouchableOpacity
				style={styles.button}
				// onPress={() => Props.navigation.navigate("Register")}
			>
				<Text style={styles.buttonText}>Continue</Text>
			</TouchableOpacity>

			<View style={{ flexDirection: "row" }}>
				<View style={[styles.line, { marginLeft: 90 }]} />
				<Text style={styles.lineText}>Or Sign up With</Text>
				<View style={[styles.line, { marginRight: 90 }]} />
			</View>
			<Text
				style={{ textAlign: "center" }}
			>
				Already a member?{" "}
				<Text
					style={{ color: "#3B9744" }}
					// onPress={() => Props.navigation.navigate("Login")}
				>
					Sign in
				</Text>
			</Text>
            <Button title="Sign in with google" disabled={!request} onPress={() => {
                promptAsync();
            }} />
			<Image source={require("../../images/")}></Image>
			<Image source={require("../../images/tab-navigation-icons/selected/calendar-selected.png")}></Image>
                
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

	line: {
		backgroundColor: "#8C8C8C",
		height: 1,
		flex: 1,
		alignSelf: "center",
	},

	lineText: {
		alignSelf: "center",
		paddingHorizontal: 5,
		fontSize: 15,
		color: "#8C8C8C",
	},
});

export default Register;
