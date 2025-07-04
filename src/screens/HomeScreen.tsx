import { useEffect, useState } from "react"
import { FlatList, SafeAreaView, ScrollView, View } from "react-native"
import { Carousel, CommonHeader, HomeBanner, HomeProductionList, Search } from "../components"
import { NotificationIcon, ToggleIcon } from "../constants/Images"
import { Colors,} from "../constants/constant"
import { useSelector } from "react-redux"


const HomeScreen = ({ navigation }) => {
    const data=useSelector((state)=>state?.user)
    const [homeData, setHomeData] = useState({ productList: {}, bannerData: [] })
    useEffect(() => {
        setHomeData({bannerData: data?.homeBanner,productList:data?.homeData})
    }, [])
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
        <SafeAreaView  style={{ flex: 1 }}>
        <View style={{ backgroundColor: Colors.backgroundGrey ,flex: 1}}>
            <CommonHeader title="omanPhone" leftIcon={ToggleIcon} right2Icon={NotificationIcon}>
                <Search placeHolder="Search products..." />
            </CommonHeader>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Carousel data={homeData?.bannerData} autoScroll={true} />
                <FlatList data={homeData?.productList}
                    renderItem={({ item }) => homeScreenRender(item)}
                    keyExtractor={(_, index) => index.toString()}
                    scrollEnabled={false}
                />
            </ScrollView>
        </View>
        </SafeAreaView>
    )
}
export default HomeScreen