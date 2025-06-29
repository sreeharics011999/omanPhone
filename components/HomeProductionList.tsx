import { FlatList, Text, View } from "react-native"
import { Colors, HEIGHT, WIDTH } from "../constants/constant"
import { Button, ProductCard } from "./index"
import { RFValue } from "react-native-responsive-fontsize"

const HomeProductionList: React.FC = ({productData,handleSelectItem}) => {
    console.log("productData=>",productData);
    
    return (
        <View style={{ backgroundColor: Colors.primaryColor, marginHorizontal: WIDTH * 0.025, width: WIDTH * 0.95, marginTop: WIDTH * 0.025 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: WIDTH * 0.03, paddingVertical: HEIGHT * 0.02, }}>
                <Text style={{ fontSize: RFValue(13), fontWeight: "600", color: Colors.textColor,width:WIDTH*0.6 }}>{productData?.title}</Text>
                <Button btnStyle={{ width: WIDTH * 0.25, paddingVertical: HEIGHT * 0.005 }} btnTitle="View All" />
            </View>
            <FlatList data={productData?.items}
                renderItem={({ item, index }) => <ProductCard product={item} cardStyle={{ borderRightWidth: index % 2 == 0 ? 1 : 0, borderColor: Colors?.lightGrey }} handleSelectItem={handleSelectItem}/>}
                keyExtractor={(_, index) => index?.toString()}
                numColumns={2}
                style={{ marginHorizontal: WIDTH * 0.01 }}
                ItemSeparatorComponent={() => <View style={{ backgroundColor: Colors?.lightGrey, height: HEIGHT * 0.001 }} />}
                scrollEnabled={false}
            />
        </View>
    )
}
export default HomeProductionList