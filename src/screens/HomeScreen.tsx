import { FlatList, Pressable, ScrollView, Text, View } from "react-native"
import { Button, Carousel, CommonHeader, ProductCard, Search } from "../components"
import { NotificationIcon, ToggleIcon } from "../constants/Images"
import { Colors, HEIGHT, WIDTH } from "../constants/constant"
import { useEffect, useState } from "react"
import { RFValue } from "react-native-responsive-fontsize"


const slider = [
    {
        image: 'http://omanphone.smsoman.com/mobile-admin/uploads/image_614ad0733a86f.jpg',
        type: 'category',
        id: 6,
        sort_order: 0.00
    },
    {
        image: 'http://omanphone.smsoman.com/mobile-admin/uploads/image_614ad9cd8725c.jpg',
        type: 'category',
        id: 6,
        sort_order: 0.00
    },
    {
        image: 'http://omanphone.smsoman.com/mobile-admin/uploads/image_614acfc8d8ba3.jpg',
        type: 'category',
        id: 6,
        sort_order: 0.00
    },
    {
        image: 'http://omanphone.smsoman.com/mobile-admin/uploads/image_614ad9de45153.jpg',
        type: 'category',
        id: 6,
        sort_order: 0.00
    },
    {
        image: 'http://omanphone.smsoman.com/mobile-admin/uploads/image_61e7999615ec0.jpg',
        type: 'category',
        id: 8,
        sort_order: 0.00
    },
    {
        image: 'http://omanphone.smsoman.com/mobile-admin/uploads/image_61f2959c3627a.jpg',
        type: 'category',
        id: 6,
        sort_order: 0.00
    },
    {
        image: 'http://omanphone.smsoman.com/mobile-admin/uploads/image_61f295a838e83.jpg',
        type: 'category',
        id: 6,
        sort_order: 0.00
    },
    {
        image: 'http://omanphone.smsoman.com/mobile-admin/uploads/image_61f295b1a272c.jpg',
        type: 'category',
        id: 6,
        sort_order: 0.00
    }
]
const ProductData = {
    id: 17,
    title: "New Arrival",
    items: [
        {
            name: "HUAWEI P50 POCKET 256GB",
            id: 1394,
            sku: "HUAWEI P50 POCKET 256GB",
            image: "/h/w/hwp5pckt10.jpg",
            price: 539.9,
            storage: "256 GB",
            product_tag: "Pre-Order",
            preorder: ""
        },
        {
            name: "REDMI NOTE 11 128GB",
            id: 1419,
            sku: "XIRDMINT11128GB",
            image: "/r/d/rdmint114.jpg",
            price: 89.9,
            storage: "128 GB",
            product_tag: "New Arrival",
            preorder: ""
        },
        {
            name: "REDMI NOTE 11 64GB",
            id: 1418,
            sku: "XIRDMINT1164GB",
            image: "/r/d/rdmint113.jpg",
            price: 74.9,
            storage: "64 GB",
            product_tag: "New Arrival",
            preorder: ""
        },
        {
            name: "HUAWEI NOVA 8i 128GB",
            id: 909,
            sku: "HWNV8i128GB",
            image: "/h/u/huawei_nova_8i_128gb_blue_6.jpg",
            price: 134.9,
            storage: "128 GB",
            product_tag: "vat included",
            preorder: ""
        }
    ]
}
const HomeScreen = () => {
    const [homeData, setHomeData] = useState({})
    useEffect(() => {
        setHomeData({ ...homeData, bannerData: slider, productList: ProductData })
    },[])
    return (
        <View style={{ backgroundColor: Colors.backgroundGrey }}>
            <CommonHeader title="omanPhone" leftIcon={ToggleIcon} right2Icon={NotificationIcon}>
                <Search placeHolder="Search products..." />
            </CommonHeader>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:HEIGHT*0.15}}>
                <Carousel data={homeData?.bannerData} />
                <View style={{ backgroundColor: Colors.primaryColor, marginHorizontal: WIDTH * 0.025, width: WIDTH * 0.95, marginTop: WIDTH * 0.025 }}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:WIDTH*0.03,paddingVertical:HEIGHT*0.02}}>
                        <Text style={{fontSize:RFValue(13),fontWeight:"600",color:Colors.textColor}}>{ProductData?.title}</Text>
                       <Button btnStyle={{width:WIDTH*0.25,paddingVertical:HEIGHT*0.005}} btnTitle="View All"/>
                    </View>
                    <FlatList data={homeData?.productList?.items}
                        renderItem={({ item,index }) => <ProductCard product={item} cardStyle={{borderRightWidth:index%2==0?1:0,borderColor:Colors?.lightGrey}} />}
                        keyExtractor={(_, index) => index?.toString()}
                        numColumns={2}
                        style={{marginHorizontal:WIDTH*0.01}}
                        ItemSeparatorComponent={()=><View style={{backgroundColor:Colors?.lightGrey,height:HEIGHT*0.001}}/>}
                        scrollEnabled={false}
                    />
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:WIDTH*0.03,paddingVertical:HEIGHT*0.02}}>
                        <Text style={{fontSize:RFValue(13),fontWeight:"600",color:Colors.textColor}}>{ProductData?.title}</Text>
                       <Button btnStyle={{width:WIDTH*0.25,paddingVertical:HEIGHT*0.005}} btnTitle="View All"/>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}
export default HomeScreen