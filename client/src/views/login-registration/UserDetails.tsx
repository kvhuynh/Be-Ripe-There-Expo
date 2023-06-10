import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/login-registration/LoginRegisterNavigation";
import { Header } from "../../components/Header"

import { View, ScrollView, Text, StyleSheet, Dimensions , TextInput, TouchableOpacity} from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const UserDetails: React.FC<Props> = (Props) => {
    return(
        <ScrollView style={styles.container}>
        <Header name="Enter Information" ></Header> 
        <Header name="Create an Account"></Header>
        <View style={styles.inputGroup}>
            <View>
                <Text style={styles.inputTitle}>First Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter First Name"
                    // onChangeText={(e: string) => handleChange("firstName", e)}
                />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.inputTitle}>Last Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Last Name"
                    // onChangeText={(e: string) => handleChange("lastName", e)}
                />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.inputTitle}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    // onChangeText={(e: string) => handleChange("email", e)}
                />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.inputTitle}>Password:</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    // onChangeText={(e: string) => handleChange("password", e)}
                />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.inputTitle}>Confirm Password:</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Enter Confirm Password"
                    // onChangeText={(e: string) => handleChange("confirmPassword", e)}
                />
            </View>
        </View>
        <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

    </ScrollView>
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

export default UserDetails;