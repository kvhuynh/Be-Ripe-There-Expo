import { useState } from "react";

import { View, Text, SafeAreaView, TextInput, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import { Header } from "../../components/Header"
import { SignInWithThirdParty } from "../../components/SignInWithThirdParty"

import { RootStackParamList } from "../../navigation/login-registration/LoginRegisterNavigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { loginUser } from "../../services/internalApiService"


const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export interface LoginState {
	email: string;
	password: string;
}

interface ErrorState {
	emailError: string;
	passwordError: string;
}

const initialLoginState = {
	email: "",
	password: "",
};

const initialErrorState = {
	emailError: "",
	passwordError: "",
};

export const Login: React.FC<Props> = (Props) => {

    const [loginData, setLoginData] = useState<any>();

	const handleChange = (prop: keyof LoginState, event: string) => {
		setLoginData({ ...loginData, [prop]: event });
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		loginUser(loginData)
			.then((response: any) => {
				console.log(response);
				if (response.access_token !== null) {
					Props.navigation.navigate("TabNavigation");
				}
				
			});
	};
    return (
        <SafeAreaView style={styles.container}>
            <Header name="Sign in"></Header>
            <View style={styles.inputGroup}>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputTitle}>Email:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Email"
							autoCapitalize="none"
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
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            <SignInWithThirdParty isLogin={true} ></SignInWithThirdParty>
        </SafeAreaView>
    )
}
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
		height: screenHeight - 600,
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
});

export default Login;