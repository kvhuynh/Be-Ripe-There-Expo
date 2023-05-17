import moment from 'moment';
import { Dimensions, ScrollView, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useEffect } from "react"

import SlideToggle from "../components/SlideToggle";

import { Calendar } from "react-native-calendars";

export const CalendarView = ({ navigation }) => {
	let screenHeight = Dimensions.get("window").height;
	let screenWidth = Dimensions.get("window").width;
    console.log(moment().format("dddd MMMM Do YYYY"))

    useEffect(() => {
        
    })


	return (
        <Animated.View
        key={'uniqueKey'}
        entering={FadeIn.duration(400)}
        exiting={FadeOut.duration(400)}>

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
                    <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: "10%" }}>
                        Meal Calendar
                    </Text>
                    <Calendar
                        style={{
                            marginBottom: "10%"
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
                                alignItems: "center"
                            },
                        }}
                        markedDates={{
                            '2023-05-16': {selected: true, marked: true, selectedColor: 'blue'},
                            '2023-05-17': {marked: true},
                            '2023-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                            '2023-05-19': {disabled: true, disableTouchEvent: true}
                        }}
                            

                    ></Calendar>
                    <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: "10%" }}>
                        Today's Meals
                    </Text>
                    <SlideToggle></SlideToggle>
                </View>
            </ScrollView>
        </Animated.View>
	);
};

export default CalendarView;
