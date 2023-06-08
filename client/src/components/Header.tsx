import { View, Text } from "react-native";

interface Props {
    name: string
}

export const Header: React.FC<Props> = (Props) => {
    return (
        <Text>{Props.name}</Text>
    )
}

export default Header;