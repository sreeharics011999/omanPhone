import { Image, Pressable, Text, View, ViewStyle } from "react-native"
import { StarIcon } from "../constants/Images"
import { Colors, HEIGHT, productSource, WIDTH } from "../constants/constant"
import { RFValue } from "react-native-responsive-fontsize"
import { RatingComponent } from "./index"
interface Props {
    cardStyle?: ViewStyle,
    product: {},
    handleSelectItem?: (id: string) => void
}
const ProductCard: React.FC<Props> = ({ cardStyle, product, handleSelectItem }) => {
    return (
        <Pressable style={[{ paddingHorizontal: WIDTH * 0.05, width: WIDTH * 0.95 / 2, alignItems: "center", paddingVertical: HEIGHT * 0.02, flex: 1, }, cardStyle]} onPress={() => handleSelectItem(product?.id)}>
            <View style={{ flex: 1,justifyContent:"space-between" }}>
                <View>
                    <Image source={productSource(product?.image)} style={{ width: WIDTH * 0.375, height: HEIGHT * 0.2, }} resizeMode="contain" />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: "absolute", width: WIDTH * 0.42, left: -WIDTH * 0.02, bottom: HEIGHT * 0.03 }}>
                        <RatingComponent rating={3.5} />
                        <View style={{ backgroundColor: Colors.primaryColor, paddingHorizontal: WIDTH * 0.02 }}>
                            <Text style={{ color: Colors.secondaryColor, fontSize: RFValue(13), fontWeight: "900" }}>{product?.storage}</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ color: Colors.textColor, fontSize: RFValue(12), marginTop: HEIGHT * 0.007, textAlign: "center" }}>{product?.name}<Text style={{ color: Colors.textColor, fontSize: RFValue(12) }}>  (blue,128 gb)</Text></Text>
                <View style={{ justifyContent: "flex-end" }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: HEIGHT * 0.007, alignItems: "center", }}>
                        <Text style={{ color: Colors.secondaryColor, fontSize: RFValue(12), fontWeight: "900" }}>OMR {product?.price}</Text>
                        <Text style={{ color: Colors.textColor, fontSize: RFValue(8), textDecorationLine: "line-through", marginLeft: WIDTH * 0.02, opacity: 0.5 }}>OMR 1,75,000</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}
export default ProductCard