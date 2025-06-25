import { Image, Text, View, ViewStyle } from "react-native"
import { StarIcon } from "../constants/Images"
import { Colors, HEIGHT, productSource, WIDTH } from "../constants/constant"
import { RFValue } from "react-native-responsive-fontsize"
interface Props {
    cardStyle?: ViewStyle
}
const ProductCard: React.FC<Props> = ({ cardStyle, product }) => {
    return (
        <View style={[{ paddingHorizontal: WIDTH * 0.05, width: WIDTH * 0.95 / 2, alignItems: "center", paddingVertical: HEIGHT * 0.02 }, cardStyle]}>
            <View>
                <Image source={productSource(product?.image)} style={{ width: WIDTH * 0.375, height: HEIGHT * 0.2, }} resizeMode="contain" />
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: "absolute", width: WIDTH * 0.42, left: -WIDTH * 0.02, bottom: HEIGHT * 0.03 }}>
                    <View style={{ backgroundColor: Colors.orange, paddingHorizontal: WIDTH * 0.02, borderRadius: 10, flexDirection: "row", alignItems: "center" }}>
                        <Image source={StarIcon} tintColor={Colors.primaryColor} style={{ width: WIDTH * 0.03, height: WIDTH * 0.03 }} />
                        <Text style={{ color: Colors.primaryColor, fontSize: RFValue(11), fontWeight: "900" }}>3.5</Text>
                    </View>
                    <View style={{ backgroundColor: Colors.primaryColor, paddingHorizontal: WIDTH * 0.02 }}>
                        <Text style={{ color: Colors.secondaryColor, fontSize: RFValue(13), fontWeight: "900" }}>{product?.storage}</Text>
                    </View>
                </View>
            </View>
            <Text style={{ color: Colors.textColor, fontSize: RFValue(12), marginTop: HEIGHT * 0.007, textAlign: "center" }}>{product?.name}</Text>
            <Text style={{ color: Colors.textColor, fontSize: RFValue(12) }}>(blue,128 gb)</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: HEIGHT * 0.007, alignItems: "center" }}>
                <Text style={{ color: Colors.secondaryColor, fontSize: RFValue(12), fontWeight: "900" }}>OMR {product?.price}</Text>
                <Text style={{ color: Colors.textColor, fontSize: RFValue(8), textDecorationLine: "line-through", marginLeft: WIDTH * 0.02, opacity: 0.5 }}>OMR 1,75,000</Text>
            </View>
        </View>
    )
}
export default ProductCard