import { useEffect, useRef, useState } from "react";
import {
	View,
	ImageBackground,
	Text,
	StyleSheet,
	Animated,
	Easing,
	Image,
	Pressable,
	TouchableOpacity,
} from "react-native";

import FloatingActionButton from "../components/FloatingActionButton";

import {
	horizontalScale,
	moderateScale,
	verticalScale,
} from "../themes/metric";

const INPUT_RANGE_START = 0;
const INPUT_RANGE_END = 1;
const OUTPUT_RANGE_START = -281;
const OUTPUT_RANGE_END = 0;
const ANIMATION_TO_VALUE = 1;
const ANIMATION_DURATION = 30000;

interface Props {
	navigation?: Navigator
}

export const SplashScreen: React.FC<Props> = ({ navigation }) => {
	const initialValue = 0;
	const translateValue = useRef(new Animated.Value(initialValue)).current;
	

	useEffect(() => {
		const translate = () => {
			translateValue.setValue(initialValue);
			Animated.timing(translateValue, {
				toValue: ANIMATION_TO_VALUE,
				duration: ANIMATION_DURATION,
				easing: Easing.linear,
				useNativeDriver: true,
			}).start(() => translate());
		};
		translate();
	}, [translateValue]);

	const translateAnimation = translateValue.interpolate({
		inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
		outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
	});

	const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

	return (
		<View style={styles.container} resizeMode="center">
			<AnimatedImage
				resizeMode="cover"
				style={[
					styles.background,
					{
						transform: [
							{
								translateX: translateAnimation,
							},
							{
								translateY: translateAnimation,
							},
						],
					},
				]}
				source={require("../images/splash-page/splash-image.png")}
			/>
			<View style={styles.content}>
				<Image
					style={styles.tinyLogo}
					source={require("../images/splash-page/logo-4x.png")}
					resizeMode="contain"
				/>
				
				<View
					style={{
						marginTop: "25%",
						padding: 40,
						justifyContent: "space-around",
						flexDirection: "column",
						height: "50%"
					}}
				>
					<Text
						style={{
							color: "#FFFFFF",
							fontSize: "30px",
							fontWeight: "bold",
							textAlign: "center",
						}}
					>
						Simple Ways to Find Nutrition
					</Text>

					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
						<Text style={styles.buttonText}>Start Cooking</Text>
					</TouchableOpacity>
					<Text
						style={{
							textAlign: "center",
							color: "#FFFFFF",
						}}
					>
						Already a member? <Text style={{color: "#3B9744"}} onPress={() => navigation.navigate("Login")} >Sign in</Text>
					</Text>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		flex: 1,
		position: "absolute",
		top: "15%",
		// justifyContent: 'center',
		// alignItems: 'center'
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
	text: {
		color: "white",
		fontSize: 42,
		lineHeight: 84,
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "#0000000",
	},
	tinyLogo: {
		marginLeft: 20,
		height: verticalScale(275),
		width: horizontalScale(300),
	},
	button: {
		alignSelf: "center",
		width: "85%",
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: "#3B9744",
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "#3B9744",
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
	background: {
		// width: 1200,
		// height: 1800,
		height: verticalScale(1500),
		width: horizontalScale(1000),
		top: 0,
		transform: [
			{
				translateX: 0,
			},
			{
				translateY: 0,
			},
		],
	},
});

export default SplashScreen;
