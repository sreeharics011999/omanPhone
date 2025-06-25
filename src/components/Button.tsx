import { Pressable, Text, ViewStyle } from "react-native"
import { Colors, HEIGHT } from "../constants/constant"
import { RFValue } from "react-native-responsive-fontsize"

interface Props{
    btnTitle:string,
    btnStyle:ViewStyle
}
const Button :React.FC<Props>= ({btnTitle,btnStyle}) => {
    return (
        <Pressable style={[{ backgroundColor: Colors.secondaryColor, alignItems: "center", paddingVertical: HEIGHT * 0.01 },btnStyle]}>
            <Text style={{ color: Colors.primaryColor, fontSize: RFValue(13) }}>{btnTitle}</Text>
        </Pressable>
    )
}
export default Button