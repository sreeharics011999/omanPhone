import { Image, TextInput, View } from "react-native"
import { SearchIcon } from "../constants/Images"
import { Colors, HEIGHT, WIDTH } from "../constants/constant"
import { RFValue } from "react-native-responsive-fontsize"


const Search: React.FC<{ placeHolder?: string }> = ({ placeHolder }) => {
    return (
        <View style={{ flexDirection: "row", marginHorizontal: WIDTH * 0.02, backgroundColor: Colors.primaryColor, marginBottom: HEIGHT * 0.02, alignItems: "center", paddingHorizontal: WIDTH * 0.04, borderRadius: 10,height:HEIGHT*0.055 }}>
            <Image source={SearchIcon} style={{ width: WIDTH * 0.06, height: WIDTH * 0.06 }} tintColor={Colors.textColor} resizeMode="contain" />
            <TextInput placeholder={placeHolder} placeholderTextColor={Colors.lightGrey} style={{fontSize:RFValue(12),marginLeft:WIDTH*0.03,color:Colors.textColor}}/>
        </View>
    )
}
export default Search