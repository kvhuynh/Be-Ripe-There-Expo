import { useState, useEffect } from "react";
import {
	TouchableOpacity,
	View,
	Image,
	Dimensions,
	StyleSheet,
	Text,
} from "react-native";

import { useNavigation } from '@react-navigation/native';

import * as Facebook from "expo-auth-session/providers/facebook";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CommonActions } from "@react-navigation/native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

type Props = {
	isLogin: boolean;
};

WebBrowser.maybeCompleteAuthSession();
export const SignInWithThirdParty: React.FC<Props> = (Props) => {
	const [token, setToken] = useState("");
	const [userInfo, setUserInfo] = useState<any>(null);
	const [auth, setAuth] = useState<any>();
	const [requireRefresh, setRequireRefresh] = useState(false);
	// const [userInformation, setUserInformation] =

    const navigation = useNavigation<any>();

	const [googleRequest, googleResponse, googlePromptAsync] =
		Google.useAuthRequest({
			expoClientId: process.env.GOOGLE_EXPO_CLIENT_ID,
		});

	const [faceBookRequest, faceBookResponse, faceBookPromptAsync] =
		Facebook.useAuthRequest({
			clientId: process.env.FACEBOOK_EXPO_CLIENT_ID,
		});

	useEffect(() => {
		if (googleResponse?.type === "success") {
			setAuth(googleResponse.authentication);
			const persistAuth = async () => {
				await AsyncStorage.setItem(
					"auth",
					JSON.stringify(googleResponse.authentication)
				);
			};
			persistAuth();
			navigation.dispatch(
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
				// console.log(authFromJson);

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
		<View style={{ justifyContent: "space-between", height: "15%" }}>
			<View style={{ flexDirection: "row" }}>
				<View style={[styles.line, { marginLeft: 90 }]} />
                {Props.isLogin ? <Text style={styles.lineText}>Or Sign in With</Text>: <Text style={styles.lineText}>Or Sign up With</Text>}
				{/* <Text style={styles.lineText}>Or Sign up With</Text> */}
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
						source={require("../images/third-party/google-logo-7.png")}
					></Image>
				</TouchableOpacity>
				<View style={{ padding: 10 }}></View>
				<TouchableOpacity
					disabled={!googleRequest}
					onPress={logout}
				>
					<Image
						style={styles.thirdPartyLogo}
						source={require("../images/third-party/google-logo-7.png")}
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
						source={require("../images/third-party/facebook-logo-3.png")}
					></Image>
				</TouchableOpacity>
			</View>
			{Props.isLogin ? (
				<Text style={{ textAlign: "center" }}>
					Not a member?{" "}
					<Text
						style={{ color: "#3B9744" }}
						onPress={() => navigation.navigate("Register")}
					>
						Sign up
					</Text>
				</Text>
			) : (
				<Text style={{ textAlign: "center" }}>
					Already a member?{" "}
					<Text
						style={{ color: "#3B9744" }}
						onPress={() => navigation.navigate("Login")}
					>
						Sign in
					</Text>
				</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
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

export default SignInWithThirdParty;
