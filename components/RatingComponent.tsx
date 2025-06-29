import React from "react"
import { Image, Text, View, ViewStyle } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { Colors, WIDTH } from "../constants/constant"
import { StarIcon } from "../constants/Images"

const RatingComponent :React.FC<{rating:number,ratingStyle?:ViewStyle}>= ({rating,ratingStyle}) => {
    return (
        <View style={[{ backgroundColor: Colors.orange, paddingHorizontal: WIDTH * 0.02, borderRadius: 10, flexDirection: "row", alignItems: "center" },ratingStyle]}>
            <Image source={StarIcon} tintColor={Colors.primaryColor} style={{ width: WIDTH * 0.03, height: WIDTH * 0.03 }} />
            <Text style={{ color: Colors.primaryColor, fontSize: RFValue(11), fontWeight: "900" }}>{rating}</Text>
        </View>
    )
}
export default RatingComponent