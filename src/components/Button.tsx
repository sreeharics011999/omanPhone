import { Pressable, Text, TextStyle, ViewStyle } from "react-native"
import { Colors, HEIGHT } from "../constants/constant"
import { RFValue } from "react-native-responsive-fontsize"

interface Props{
    btnTitle:string,
    btnStyle:ViewStyle,
    titleStyle?:TextStyle
    onPress?:()=>void
}
const Button :React.FC<Props>= ({btnTitle,btnStyle,titleStyle,onPress}) => {
    return (
        <Pressable style={[{ backgroundColor: Colors.secondaryColor,alignItems:"center",paddingVertical: HEIGHT * 0.01,shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 5  },btnStyle]} onPress={onPress}>
            <Text style={[{ color: Colors.primaryColor, fontSize: RFValue(13) },titleStyle]}>{btnTitle}</Text>
        </Pressable>
    )
}
export default Button