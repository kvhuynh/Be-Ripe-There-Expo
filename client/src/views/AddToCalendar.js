import moment from "moment";
import { Dimensions, ScrollView, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useState, useEffect } from "react";

import SlideToggle from "../components/SlideToggle";

import { Calendar } from "react-native-calendars";
import { FloatingActionButton } from "./../components/FloatingActionButton";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const AddToCalendar = ({ navigation }) => {

	return (
		<Animated.View
			key={"uniqueKey"}
			entering={FadeIn.duration(400)}
			exiting={FadeOut.duration(400)}
		>
			<ScrollView
				style={{
					backgroundColor: "#FFFFFF",
					width: "100%",
					height: screenHeight,
				}}
			>
				<View
					style={{
						padding: "5%",
						paddingTop: "10%",
					}}
				>
					<Text
						style={{ fontSize: 30, fontWeight: "bold", marginBottom: "10%" }}
					>
						Add to Calendar
					</Text>
					<Text
						style={{ fontSize: 25, fontWeight: "bold", marginBottom: "10%" }}
					>
						Select Date
					</Text>
					<Calendar
						style={{
							marginBottom: "10%",
						}}
						theme={{
							arrowColor: "#3B9744",
							arrowStyle: {
								borderWidth: 1,
								borderColor: "#97C69E",
								borderRadius: "10%",
								height: 40,
								width: 40,
								justifyContent: "center",
								alignItems: "center",
							},
						}}
						// onDayPress={({dateString}) => console.log(dateString)}
						minDate={Date()}
						onDayPress={({ date }) => {
							console.log(moment(date).format("DD/MM/YYYY"));
						
							navigation.navigate("SelectDate", {
								date: moment().format("dddd MMMM Do YYYY"),
							})
						}
						}
						markedDates={{
							"2023-05-16": {
								selected: true,
								marked: true,
								selectedColor: "blue",
							},
							"2023-05-17": { marked: true },
							"2023-05-18": { marked: true, dotColor: "red", activeOpacity: 0 },
							"2023-05-19": { disabled: true, disableTouchEvent: true },
						}}
					></Calendar>
				</View>
			</ScrollView>
		</Animated.View>
	);
};

export const SelectDate = (props) => {
	// console.log(props.navigation.getParam("date"))
	console.log(props.route.params.date);
	return (
		<>
			<ScrollView
				style={{
					backgroundColor: "#FFFFFF",
					width: "100%",
					height: screenHeight,
				}}
			>
				<View
					style={{
						padding: "5%",
						paddingTop: "10%",
					}}
				>
					<Text
						style={{ fontSize: 30, fontWeight: "bold", marginBottom: "10%" }}
					>
						Add to Calendar
					</Text>
					<Text
						style={{ fontSize: 25, fontWeight: "bold", marginBottom: "10%" }}
					>
						Date Selected
					</Text>
					<Text
						style={{
							fontSize: 25,
							fontWeight: "bold",
							marginBottom: "10%",
							color: "#3B9744",
						}}
					>
						{props.route.params.date}
					</Text>
					<Text
						style={{
							fontSize: 25,
							fontWeight: "bold",
							marginBottom: "10%",
							color: "#3B9744",
						}}
					>
						{props.route.params.date}
					</Text>
				</View>
			</ScrollView>
			<FloatingActionButton
				navigation={props.navigation}
				goTo={"CalendarView"}
				text={"Add To Calendar"}
				positionFromTop={"88%"}
			></FloatingActionButton>
		</>
	);
};

// export default AddToCalendar;
export default { AddToCalendar, SelectDate };
