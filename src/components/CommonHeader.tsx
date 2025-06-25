import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native"
import { Colors, HEIGHT, WIDTH } from "../constants/constant"
import { RFValue } from "react-native-responsive-fontsize"
import { PropsWithChildren } from "react"

interface Props {
    leftIcon?: ImageSourcePropType,
    title?: string,
    right1Icon?: ImageSourcePropType,
    right2Icon?: ImageSourcePropType,
}


const CommonHeader: React.FC<PropsWithChildren<Props>> = ({ leftIcon, title, right1Icon, right2Icon, children }) => {
    return (
      <View style={{ backgroundColor: Colors.secondaryColor, shadowColor: 'green', shadowOffset: { width: 10, height: 5 }, shadowOpacity: 1, shadowRadius: 5.84, elevation: 5 }} >
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.02, alignItems: "center" }}>
                <Pressable style={{ width: WIDTH * 0.2, alignItems: "flex-start" }}>
                    <Image source={leftIcon} style={{ width: WIDTH * 0.06, height: WIDTH * 0.06 }} tintColor={Colors.primaryColor} resizeMode="contain" />
                </Pressable>
                <View style={{ width: WIDTH * 0.5 }}>
                    <Text style={{ textAlign: "center", color: Colors.primaryColor, fontSize: RFValue(16) }}>{title}</Text>
                </View>
                <View style={{ flexDirection: "row", width: WIDTH * 0.2, justifyContent: "flex-end" }}>
                    <Pressable>
                        <Image source={right1Icon} style={{ width: WIDTH * 0.06, height: WIDTH * 0.06, marginRight: WIDTH * 0.03 }} tintColor={Colors.primaryColor} resizeMode="contain" />
                    </Pressable>
                    <Pressable>
                        <Image source={right2Icon} style={{ width: WIDTH * 0.06, height: WIDTH * 0.06 }} tintColor={Colors.primaryColor} resizeMode="contain" />
                    </Pressable>
                </View>
            </View>
            {children}
        </View>
    )
}
export default CommonHeader