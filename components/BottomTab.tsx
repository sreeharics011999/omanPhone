import { Image, Pressable, Text, View } from "react-native"
import { CartIcon, CategoriesIcon, HomeIcon, SearchIcon } from "../constants/Images"
import { Colors, HEIGHT, WIDTH } from "../constants/constant"
import { RFValue } from "react-native-responsive-fontsize"

const bottomTabArray = [
    { name: "Home", icon: HomeIcon, path: "Home" },
    { name: "Search", icon: SearchIcon, path: "Search" },
    { name: "Category", icon: CategoriesIcon, path: "Category" },
    { name: "Cart", icon: CartIcon, path: "Cart" }
]

const BottomTab: React.FC = ({ state, navigation }) => {
    const currentRoute = state.routes[state.index].name;
    const hiddenRoutes = ['Cart'];
    if (hiddenRoutes.includes(currentRoute)) {
        return null;
    }
    return (
        <View style={{ backgroundColor: Colors.primaryColor, flexDirection: "row", justifyContent: "space-between", paddingVertical: HEIGHT * 0.02, shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 5 }}>
            {
                bottomTabArray.map((item, index) => {
                    const isFocused = index == state.index
                    return (
                        <Pressable onPress={() => navigation.navigate(item.path)} key={index.toString()} style={{ alignItems: "center", paddingHorizontal: WIDTH * 0.05, width: WIDTH * 0.24 }}>
                            <Image source={item.icon} tintColor={isFocused ? Colors.secondaryColor : Colors.textColor} style={{ height: WIDTH * 0.06, width: WIDTH * 0.06 }} />
                            <Text style={{ color: isFocused ? Colors.secondaryColor : Colors.textColor, marginTop: HEIGHT * 0.002, fontSize: RFValue(12), fontWeight: isFocused ? "600" : "400" }}>{item.name}</Text>
                        </Pressable>
                    )
                }
                )
            }
        </View>
    )
}
export default BottomTab