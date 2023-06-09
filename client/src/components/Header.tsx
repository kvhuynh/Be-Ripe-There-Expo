import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from "react-native";

interface Props {
	name: string;
}
export const Header: React.FC<Props> = (Props) => {
	return (
			<View
				style={{
					padding: "5%",
					paddingTop: "10%",
				}}
			>
				<Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: "10%" }}>
					{Props.name}
				</Text>
			</View>
	);
};

export default Header;
