import { Image, Pressable, Text, View } from "react-native"
import { Colors, HEIGHT, productSource, WIDTH } from "../constants/constant"
import { RFValue } from "react-native-responsive-fontsize"
import { DeleteIcon } from "../constants/Images"
import { useEffect, useState } from "react"

const CartCard = ({ product, onPress, setItemPrice, itemPrice }) => {
    const [count, setCount] = useState(1)
    useEffect(() => {
        priceItem()
    }, [count])
    const priceItem = () => {
  setItemPrice(prev => {
    const existing = prev.findIndex(p => p.id === product?.id);
    const updatedItem = {
      id: product?.id,
      totalPrice: count * product?.price,
    };
    if (existing !== -1) {
      const updated = [...prev];
      updated[existing] = updatedItem;
      return updated;
    }
    return [...prev, updatedItem];
  });
};

    const handleCountClick = (type) => {
        if (type == "+") {
            setCount(() => count + 1)
        }
        else {
            if (count > 1) {
                setCount(() => count - 1)
            }
        }
    }
    return (
        <View style={{ backgroundColor: Colors?.primaryColor, paddingVertical: HEIGHT * 0.02, shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 5, marginBottom: HEIGHT * 0.01 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: WIDTH * 0.05, paddingBottom: HEIGHT * 0.02 }}>
                <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.02, width: WIDTH * 0.6 }}>
                    <Text style={{ color: Colors.textColor, fontSize: RFValue(14), }}>{product?.name}<Text style={{ color: Colors.textColor, fontSize: RFValue(14), marginLeft: WIDTH * 0.02 }}>(blue,128 gb)</Text></Text>
                </View>
                <Image source={{ uri: product?.image[0] }} style={{ width: WIDTH * 0.3, height: HEIGHT * 0.2, }} resizeMode="contain" />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: WIDTH * 0.05 }}>
                <View>
                    <Text style={{ color: Colors.secondaryColor, fontSize: RFValue(14), fontWeight: "900" }}>OMR {product?.price}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.4, alignItems: "center" }}>
                    <Pressable onPress={onPress}>
                        <Image source={DeleteIcon} style={{ width: WIDTH * 0.05, height: WIDTH * 0.05 }} tintColor={Colors?.textColor} />
                    </Pressable>
                    <View style={{ flexDirection: "row", width: WIDTH * 0.2, justifyContent: "space-between", alignItems: "center" }}>
                        <Pressable style={{ backgroundColor: Colors.backgroundGrey, borderRadius: 50, alignItems: "center", justifyContent: "center", width: WIDTH * 0.07, height: WIDTH * 0.07 }} onPress={() => handleCountClick("-")}>
                            <Text style={{ color: Colors.textColor, fontSize: RFValue(12), }}>-</Text>
                        </Pressable>
                        <View style={{ width: WIDTH * 0.06, height: WIDTH * 0.06, alignItems: "center", justifyContent: "center", }}>
                            <Text>{count}</Text>
                        </View>
                        <Pressable style={{ backgroundColor: Colors.backgroundGrey, borderRadius: 50, alignItems: "center", justifyContent: "center", width: WIDTH * 0.07, height: WIDTH * 0.07 }} onPress={() => handleCountClick("+")}>
                            <Text style={{ color: Colors.textColor, fontSize: RFValue(12), }}>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default CartCard