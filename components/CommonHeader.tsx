import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native"
import { Colors, HEIGHT, WIDTH } from "../constants/constant"
import { RFValue } from "react-native-responsive-fontsize"
import { PropsWithChildren } from "react"

interface Props {
    leftIcon?: ImageSourcePropType,
    title?: string,
    right1Icon?: ImageSourcePropType,
    right2Icon?: ImageSourcePropType,
    onPressLeft?:()=>void,
    onPressRight1?:()=>void,
    onPressRight2?:()=>void,
}


const CommonHeader: React.FC<PropsWithChildren<Props>> = ({ leftIcon, title, right1Icon, right2Icon, children,onPressLeft,onPressRight1,onPressRight2 }) => {
    return (
      <View style={{ backgroundColor: Colors.secondaryColor, shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 5  }} >
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.02, alignItems: "center" }}>
                <Pressable style={{ width: WIDTH * 0.2, alignItems: "flex-start" }} onPress={onPressLeft}>
                    <Image source={leftIcon} style={{ width: WIDTH * 0.06, height: WIDTH * 0.06 }} tintColor={Colors.primaryColor} resizeMode="contain" />
                </Pressable>
                <View style={{ width: WIDTH * 0.5 }}>
                    <Text style={{ textAlign: "center", color: Colors.primaryColor, fontSize: RFValue(16) }}>{title}</Text>
                </View>
                <View style={{ flexDirection: "row", width: WIDTH * 0.2, justifyContent: "flex-end" }}>
                    <Pressable onPress={onPressRight1}>
                        <Image source={right1Icon} style={{ width: WIDTH * 0.06, height: WIDTH * 0.06, marginRight: WIDTH * 0.03 }} tintColor={Colors.primaryColor} resizeMode="contain" />
                    </Pressable>
                    <Pressable onPress={onPressRight2}>
                        <Image source={right2Icon} style={{ width: WIDTH * 0.06, height: WIDTH * 0.06 }} tintColor={Colors.primaryColor} resizeMode="contain" />
                    </Pressable>
                </View>
            </View>
            {children}
        </View>
    )
}
export default CommonHeader