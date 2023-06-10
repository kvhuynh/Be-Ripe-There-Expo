import {
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

import { useState, useEffect } from "react";

import { createUser } from "../../services/internalApiService";

import { Header } from "../../components/Header";
import { RootStackParamList } from "../../navigation/login-registration/LoginRegisterNavigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CommonActions } from '@react-navigation/native';

import * as Facebook from "expo-auth-session/providers/facebook";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

interface UserState {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

interface ErrorState {
	firstNameError: string;
	lastNameError: string;
	emailError: string;
	passwordError: string;
}

const initialUserState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const initialErrorState = {
	firstNameError: "",
	lastNameError: "",
	emailError: "",
	passwordError: "",
};

type Props = NativeStackScreenProps<RootStackParamList, "Register">;
WebBrowser.maybeCompleteAuthSession();

export const Register: React.FC<Props> = (Props) => {
	const [token, setToken] = useState("");
	const [userInfo, setUserInfo] = useState<any>(null);
	const [auth, setAuth] = useState<any>();
	const [requireRefresh, setRequireRefresh] = useState(false);
	const [userInformation, setUserInformation] =
		useState<UserState>(initialUserState);

	const [googleRequest, googleResponse, googlePromptAsync] =
		Google.useAuthRequest({
			expoClientId: process.env.GOOGLE_EXPO_CLIENT_ID,
		});

	const [faceBookRequest, faceBookResponse, faceBookPromptAsync] =
		Facebook.useAuthRequest({
			clientId: process.env.FACEBOOK_EXPO_CLIENT_ID,
		});

	useEffect(() => {
		console.log(googleResponse);
		if (googleResponse?.type === "success") {
			setAuth(googleResponse.authentication);

			const persistAuth = async () => {
				await AsyncStorage.setItem(
					"auth",
					JSON.stringify(googleResponse.authentication)
				);
			};
			persistAuth();
			Props.navigation.dispatch(
				CommonActions.reset({
				  index: 0,
				  routes: [{ name: "TabNavigation" }]
				})
		  )
		}
	}, [googleResponse]);

	useEffect(() => {
		const getPersistedAuth = async () => {
			const jsonValue = await AsyncStorage.getItem("auth");
			if (jsonValue != null) {
				const authFromJson = JSON.parse(jsonValue);
				setAuth(authFromJson);
				console.log(authFromJson);

				setRequireRefresh(
					!AuthSession.TokenResponse.isTokenFresh({
						expiresIn: authFromJson.expiresIn,
						issuedAt: authFromJson.issuedAt,
					})
				);
			}
		};
		getPersistedAuth();
	}, []);

	const handleChange = (prop: keyof UserState, event: string) => {
		setUserInformation({ ...userInformation, [prop]: event });
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		createUser(userInformation).then(() => {
			Props.navigation.navigate("UserDetails");
		});
	};

	const getUserData = async () => {
		let userInfoResponse = await fetch(
			"https://www.googleapis.com/userinfo/v2/me",
			{
				headers: { Authorization: `Bearer ${auth.accessToken}` },
			}
		);

		userInfoResponse.json().then((data) => {
			console.log(data);
			setUserInfo(data);
		});
	};

	//   const showUserData = () => {
	// 	if (userInfo) {
	// 	  return (
	// 		<View style={styles.userInfo}>
	// 		  <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
	// 		  <Text>Welcome {userInfo.name}</Text>
	// 		  <Text>{userInfo.email}</Text>
	// 		</View>
	// 	  );
	// 	}
	//   };

	//   const getClientId = () => {
	// 	if (Platform.OS === "ios") {
	// 	  return "139581308140-imf4dv4bogf4aj945eosqvnett4mp06e.apps.googleusercontent.com";
	// 	} else if (Platform.OS === "android") {
	// 	  return "139581308140-n3ebiqnid8tmskvneo7lck2cku8va9s3.apps.googleusercontent.com";
	// 	} else {
	// 	  console.log("Invalid platform - not handled");
	// 	}
	//   }

	//   const refreshToken = async () => {
	// 	// const clientId = getClientId();
	// 	console.log(auth);
	// 	const tokenResult = await AuthSession.refreshAsync({
	// 	  clientId: process.env.GOOGLE_EXPO_CLIENT_ID,
	// 	  refreshToken: auth.refreshToken
	// 	}, {
	// 	  tokenEndpoint: "https://www.googleapis.com/oauth2/v4/token"
	// 	});

	// 	tokenResult.refreshToken = auth.refreshToken;

	// 	setAuth(tokenResult);
	// 	await AsyncStorage.setItem("auth", JSON.stringify(tokenResult));
	// 	setRequireRefresh(false);
	//   };

	//   if (requireRefresh) {
	// 	return (
	// 	  <View style={styles.container}>
	// 		<Text>Token requires refresh...</Text>
	// 		<Button title="Refresh Token" onPress={refreshToken} />
	// 	  </View>
	// 	)
	//   }

	const logout = async () => {
		await AuthSession.revokeAsync(
			{
				token: auth.accessToken,
			},
			{
				revocationEndpoint: "https://oauth2.googleapis.com/revoke",
			}
		);

		setAuth(undefined);
		setUserInfo(undefined);
		await AsyncStorage.removeItem("auth");
	};

	return (
		<ScrollView style={styles.container}>
			<Header name="Create an Account"></Header>
			<View style={styles.inputGroup}>
				<View>
					<Text style={styles.inputTitle}>First Name:</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter First Name"
						onChangeText={(e: string) => handleChange("firstName", e)}
					/>
				</View>
				<View style={styles.inputBox}>
					<Text style={styles.inputTitle}>Last Name:</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter Last Name"
						onChangeText={(e: string) => handleChange("lastName", e)}
					/>
				</View>
				<View style={styles.inputBox}>
					<Text style={styles.inputTitle}>Email:</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter Email"
						onChangeText={(e: string) => handleChange("email", e)}
					/>
				</View>
				<View style={styles.inputBox}>
					<Text style={styles.inputTitle}>Password:</Text>
					<TextInput
						style={styles.input}
						secureTextEntry={true}
						placeholder="Enter Password"
						onChangeText={(e: string) => handleChange("password", e)}
					/>
				</View>
				<View style={styles.inputBox}>
					<Text style={styles.inputTitle}>Confirm Password:</Text>
					<TextInput
						style={styles.input}
						secureTextEntry={true}
						placeholder="Enter Confirm Password"
						onChangeText={(e: string) => handleChange("confirmPassword", e)}
					/>
				</View>
			</View>
			<TouchableOpacity style={styles.button} onPress={handleSubmit}>
				<Text style={styles.buttonText}>Continue</Text>
			</TouchableOpacity>

			<View style={{ justifyContent: "space-between", height: "15%" }}>
				<View style={{ flexDirection: "row" }}>
					<View style={[styles.line, { marginLeft: 90 }]} />
					<Text style={styles.lineText}>Or Sign up With</Text>
					<View style={[styles.line, { marginRight: 90 }]} />
				</View>
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<TouchableOpacity
						disabled={!googleRequest}
						onPress={() => {
							googlePromptAsync();
						}}
					>
						<Image
							style={styles.thirdPartyLogo}
							source={require("../../images/third-party/google-logo-7.png")}
						></Image>
					</TouchableOpacity>
					<View style={{ padding: 10 }}></View>
					<TouchableOpacity
						disabled={!googleRequest}
						onPress={logout}
					>
						<Image
							style={styles.thirdPartyLogo}
							source={require("../../images/third-party/google-logo-7.png")}
						></Image>
					</TouchableOpacity>
					<View style={{ padding: 10 }}></View>

					<TouchableOpacity
						disabled={!faceBookRequest}
						onPress={() => {
							faceBookPromptAsync();
						}}
					>
						<Image
							style={styles.thirdPartyLogo}
							source={require("../../images/third-party/facebook-logo-3.png")}
						></Image>
					</TouchableOpacity>
				</View>
				<Text style={{ textAlign: "center" }}>
					Already a member?{" "}
					<Text
						style={{ color: "#3B9744" }}
						onPress={() => Props.navigation.navigate("Login")}
					>
						Sign in
					</Text>
				</Text>
			</View>
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

	thirdPartyLogo: {
		height: 50,
		width: 50,
		padding: 5,
		borderRadius: 10,
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
});

export default Register;
