import { useState, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/login-registration/LoginRegisterNavigation";

import { Header } from "../../components/Header";

import { CommonActions } from '@react-navigation/native';

import {
	View,
	ScrollView,
	Text,
	StyleSheet,
	Dimensions,
	TextInput,
	TouchableOpacity,
    Image,
} from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "SelectGoal">;
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const SelectGoal: React.FC<Props> = (Props) => {

    return (
        <ScrollView style={styles.container}>
            <Header name={Props.route.params.name}></Header>
            <View style={styles.inputGroup}>
                <TouchableOpacity onPress={() => Props.navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [{ name: "TabNavigation" }]
                      })
                )}>

                    {
                        Props.route.params.firstChoice ?
                        <Image source={require("../../images/goals/relaxed/relaxed.png")} 
                            style={styles.image}></Image> :
                        <Image source={require("../../images/goals/training/weight-loss.png")} 
                            style={styles.image}></Image>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => !Props.route.params.firstChoice ? 
                Props.navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [{ name: "TabNavigation" }]
                      })
                ) : Props.navigation.push("SelectGoal", {firstChoice: false, name: "Training"})} >
                    {
                        Props.route.params.firstChoice ? 
                        <Image source={require("../../images/goals/training/training.png")} 
                            style={styles.image}></Image> :
                        <Image source={require("../../images/goals/training/weight-gain.png")} 
                            style={styles.image}></Image>
                    }
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.skipButton}>Skip</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
		width: screenWidth,
		height: screenHeight,
	},

    inputGroup: {
        // paddingHorizontal: 15,
		// height: screenHeight - 400,
        justifyContent: "space-between", 
        // padding: 15 
        alignItems: "center"
    },

    image: {
        // borderWidth: 1,
        // marginBottom: 
        // alignSelf: "center",
        height: 250,
        width: 330,
        marginBottom: 20
    },

    skipButton: {
        color: "#3B9744"
    }


    



});


export default SelectGoal;