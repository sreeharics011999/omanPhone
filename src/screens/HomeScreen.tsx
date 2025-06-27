import { useEffect, useState } from "react"
import { FlatList, ScrollView, View } from "react-native"
import { Carousel, CommonHeader, HomeBanner, HomeProductionList, Search } from "../components"
import { NotificationIcon, ToggleIcon } from "../constants/Images"
import { Colors, HEIGHT } from "../constants/constant"
import ApiConfig from "../constants/ApiConfig"
import { EndPoint } from "../constants/ApiUrl"


const HomeScreen = ({ navigation }) => {
    const [homeData, setHomeData] = useState({ productList: {}, bannerData: [] })
    useEffect(() => {
        fetchHomeBanner()
        fetchHomeData()
    }, [])

    const fetchHomeBanner = async () => {
        const bannerResponce = await ApiConfig("GET", EndPoint?.banner())
        try {
            if (bannerResponce?.status == 200) {
                if (bannerResponce?.data) {
                    setHomeData(prev => ({ ...prev, bannerData: bannerResponce?.data?.data?.slider }))
                }
            }
        }
        catch (error) {
            console.error(error)
        }
    }
    const fetchHomeData = async () => {
        const homeApiData = await ApiConfig("GET", EndPoint?.homePage())
        try {
            if (homeApiData?.status == 200) {
                if (homeApiData?.data) {
                    setHomeData(prev => ({ ...prev, productList: homeApiData?.data }))
                }
            }
        }
        catch (error) {
            console.error(error)
        }
    }
    const homeScreenRender = (data) => {
        let renderItem
        switch (data?.type) {
            case "productlist":
                renderItem = <HomeProductionList productData={data?.data} handleSelectItem={handleSelectItem} />
                break;
            case "banner":
                renderItem = <HomeBanner data={data?.data} />
                break;
            default:
                break;
        }
        return renderItem
    }
    const handleSelectItem = (id) => {
        navigation.navigate("ProductDetail", id)
    }
    return (
        <View style={{ backgroundColor: Colors.backgroundGrey }}>
            <CommonHeader title="omanPhone" leftIcon={ToggleIcon} right2Icon={NotificationIcon}>
                <Search placeHolder="Search products..." />
            </CommonHeader>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: HEIGHT * 0.15 }}>
                <Carousel data={homeData?.bannerData} autoScroll={true} />
                <FlatList data={homeData?.productList}
                    renderItem={({ item }) => homeScreenRender(item)}
                    keyExtractor={(_, index) => index.toString()}
                    scrollEnabled={false}
                />
            </ScrollView>

        </View>
    )
}
export default HomeScreen