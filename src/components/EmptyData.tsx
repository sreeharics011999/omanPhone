import { Image, Text, View } from "react-native"
import { Nodata } from "../constants/Images"
import { RFValue } from "react-native-responsive-fontsize"
import { Colors, HEIGHT, WIDTH } from "../constants/constant"

const EmptyData: React.FC<{ title: string }> = ({ title }) => {
    return (
        <View style={{flex:1, alignItems:"center",justifyContent:"center" ,backgroundColor:Colors.primaryColor}}>
            <Image source={Nodata} style={{height:HEIGHT*0.15,width:WIDTH*0.2}}  tintColor={Colors.secondaryColor} resizeMode="contain"/>
            <Text style={{ color: Colors.secondaryColor, fontSize: RFValue(14), }}>{title}<Text style={{ color: Colors.textColor}}> is Empty</Text></Text>
        </View>
    )
}
export default EmptyData