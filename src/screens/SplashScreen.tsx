import { ActivityIndicator, Image, View } from "react-native"
import { AppIcon } from "../constants/Images"
import { Colors, HEIGHT, WIDTH } from "../constants/constant"
import ApiConfig from "../constants/ApiConfig"
import { EndPoint } from "../constants/ApiUrl"
import { useDispatch } from "react-redux"
import { homeBanner, homeData } from "../redux/reducer"
import { useEffect } from "react"

const SplashScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        fetchHomeBanner()
    }, [])
    const fetchHomeBanner = async () => {
        const bannerResponce = await ApiConfig("GET", EndPoint?.banner())
        const homeApiData = await ApiConfig("GET", EndPoint?.homePage())
        try {
            if (bannerResponce?.status == 200) {
                if (bannerResponce?.data) {
                    dispatch(homeBanner(bannerResponce?.data?.data?.slider))
                }
            }
            if (homeApiData?.status == 200) {
                if (homeApiData?.data) {
                    dispatch(homeData(homeApiData?.data))
                }
            }
        }
        catch (error) {
            console.error(error)
        }
        finally {
            navigation.navigate("HomeScreen")
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: Colors.secondaryColor, alignItems: "center", justifyContent: "center" }}>
            <Image source={AppIcon} style={{ width: WIDTH * 0.3, height: HEIGHT * 0.15 }} tintColor={Colors.primaryColor} resizeMode="contain" />
            <ActivityIndicator style={{ marginTop: HEIGHT * 0.1 }} color={Colors.primaryColor} size={WIDTH * 0.08} />
        </View>
    )
}
export default SplashScreen