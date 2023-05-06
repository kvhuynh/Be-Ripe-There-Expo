import React, { useState } from "react";
import { View, Switch, StyleSheet, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import SwitchSelector from "react-native-switch-selector";

const options = [
	{ label: "Ingredients", value: "ingredients" },
	{ label: "Instructions", value: "instructions" },
];

export const BuiltInSlideToggle = () => {
	return (
		<>
			<SwitchSelector
				options={options}
				initial={0}
				textColor={"#3B9744"}
                backgroundColor={"#F1F1F1"}
				buttonColor={"#3B9744"}
                borderRadius={10}
				onPress={(value) => console.log(`Call onPress with value: ${value}`)}
			/>
		</>
	);
};

export default BuiltInSlideToggle;
