import { useState, useEffect } from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import { testBackEnd, testRegister } from "../services/internalApiService";

export const Login = ({ navigation }) => {
	const [error, setErrors] = useState(null);

	const handleSubmit = (event) => {
		testRegister()
            .then((user) => {});
	};

	return (
		<SafeAreaView style={styles.container}>
			<Button
				title="press me for testing connection to back end"
				onPress={testBackEnd}
			></Button>
			<Button
				title="press me for register test"
				onPress={handleSubmit}
			></Button>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "center",
	},
});
