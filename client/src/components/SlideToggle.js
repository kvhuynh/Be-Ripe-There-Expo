import React, { useState, useEffect } from "react";
import { View, Switch, StyleSheet, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import SwitchSelector from "react-native-switch-selector";

const options = [
	{ label: "Ingredients", value: "ingredients" },
	{ label: "Instructions", value: "instructions" },
];

export const BuiltInSlideToggle = (props) => {
	// console.log(props)
	const [initialValue, setInitialValue] = useState(0)

	useEffect(() => {

		if (!props.viewIngredients) {
			// console.log("setting initial value to 1");
			setInitialValue(1);
		} else {
			// console.log("setting initial value to 0");
			setInitialValue(0);
		}
		// console.log(initialValue);
		// console.log("i got updated");
	})
	return (
		<>
			<SwitchSelector
				options={options}
				initial={initialValue}
				textColor={"#3B9744"}
                backgroundColor={"#F1F1F1"}
				buttonColor={"#3B9744"}
                borderRadius={10}
				onPress={(value) => {
					props.viewIngredientsFunction(!props.viewIngredients);
					// setViewIngredients(!viewIngredients)
					// console.log("from slide toggle ")
				}}
			/>
		</>
	);
};

export default BuiltInSlideToggle;
