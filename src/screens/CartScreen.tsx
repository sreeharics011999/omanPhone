import { FlatList, Text, View } from "react-native"
import { Button, CartCard, CommonHeader } from "../components"
import { ArrowIcon } from "../constants/Images"
import { Colors, HEIGHT, WIDTH } from "../constants/constant";
import { RFValue } from "react-native-responsive-fontsize";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../redux/reducer";
import { useState } from "react";

const CartScreen = ({ navigation }) => {
    const cartArray = useSelector((state) => state?.user?.cartData)
    const dispatch = useDispatch()
    const [itemPrice, setItemPrice] = useState([])
    const total = itemPrice?.reduce((sum, item) => sum + Number(item?.totalPrice), 0);

    const handleDelete = (id) => {
        const item = itemPrice?.filter((item) => item?.id !== id)
        setItemPrice(item)
        dispatch(deleteCart(id))
    }
    return (
        <View style={{ flex: 1 }}>
            <CommonHeader title={`My Cart (2)`} leftIcon={ArrowIcon} onPressLeft={() => navigation.goBack()} />
            <FlatList
                data={cartArray}
                renderItem={({ item }) => <CartCard product={item} onPress={() => handleDelete(item?.id)} setItemPrice={setItemPrice} itemPrice={itemPrice} />}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: Colors.primaryColor, paddingVertical: HEIGHT * 0.01, paddingHorizontal: WIDTH * 0.05, position: "absolute", width: WIDTH, bottom: 0 }}>
                <View>
                    <Text style={{ color: Colors.textColor, fontSize: RFValue(10), fontWeight: "600" }}>Total :</Text>
                    <Text style={{ color: Colors.textColor, fontSize: RFValue(12), fontWeight: "900" }}>OMR {total}</Text>
                </View>
                <Button btnTitle="Checkout" btnStyle={{ width: WIDTH * 0.3 }} titleStyle={{ textTransform: "uppercase" }} />
            </View>
        </View>
    )
}
export default CartScreen