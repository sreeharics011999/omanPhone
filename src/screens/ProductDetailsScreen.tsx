import { useEffect, useState } from "react";
import { FlatList, Image, LayoutAnimation, Pressable, ScrollView, Text, View } from "react-native"
import { RFValue } from "react-native-responsive-fontsize";
import RenderHTML from "react-native-render-html";
import { Button, Carousel, CommonHeader, ProductCard, RatingComponent } from "../components"
import { ArrowIcon, CartFillIcon, FavouriteIcon, SearchIcon } from "../constants/Images"
import { Colors, HEIGHT, WIDTH } from "../constants/constant";
import ApiConfig from "../constants/ApiConfig";
import { EndPoint } from "../constants/ApiUrl";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/reducer";

const dummySimilarProducts = [
  {
    name: "AAPINORO HEMORO DIAMANTINA CUSTOMIZED YOUR IPHONE 12 PRO",
    id: 893,
    sku: "PHDMTIPH12PROCSYR",
    image: "/f/r/front_1_5.jpg",
    price: 820,
    storage: false,
    product_tag: null,
    preorder: ""
  },
  {
    name: "PINORO HEMORO DIAMANTINA IPHONE 12 PRO MAX",
    id: 888,
    sku: "PHDMTIPH12PROMX",
    image: "/f/r/front_1_4.jpg",
    price: 1400,
    storage: false,
    product_tag: null,
    preorder: ""
  }
];
const ProductDetailsScreen = ({ navigation, route }) => {
  const cartArray = useSelector((state) => state?.user?.cartData)
  const dispatch = useDispatch()
  const [viewDetail, setViewDetail] = useState(false)
  const [productDetail, setProductDetail] = useState({})
  const array = productDetail?.image?.map((item) => ({ image: item }));
  const cartExist = cartArray?.some((item) => item?.id == route?.params)
  useEffect(() => {
    fetchProductDetail()
  }, [])
  const fetchProductDetail = async () => {
    const bannerResponce = await ApiConfig("GET", EndPoint?.productDetails(route?.params))
    try {
      if (bannerResponce?.status == 200) {
        if (bannerResponce?.data) {
          setProductDetail(bannerResponce?.data)
        }
      }
    }
    catch (error) {
      console.error(error)
    }
  }
  const handleViewAll = () => {
    setViewDetail(true)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }
  const handleAddtoCart = () => {
    if (!cartExist) {
      dispatch(addCart(productDetail))
    }
    navigation.navigate("HomeScreen", {
      screen: "Cart",
    })
  }
  return (
    <View>
      <CommonHeader leftIcon={ArrowIcon} title="Product Details" right1Icon={SearchIcon} right2Icon={CartFillIcon} onPressLeft={() => navigation.goBack()} onPressRight2={() => navigation.navigate()} />
      <ScrollView style={{ backgroundColor: Colors.primaryColor, }} contentContainerStyle={{ paddingBottom: HEIGHT * 0.13 }} scrollEnabled showsVerticalScrollIndicator={false}>
        <Image source={FavouriteIcon} style={{ width: WIDTH * 0.07, height: WIDTH * 0.07, position: "absolute", top: HEIGHT * 0.05, right: WIDTH * 0.05, zIndex: 1 }} tintColor={Colors.lightGrey} />
        <View style={{ height: HEIGHT * 0.4 }}>
          <Carousel data={array} imageStyle={{ height: HEIGHT * 0.4, resizeMode: "contain" }} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: HEIGHT * 0.02, paddingHorizontal: WIDTH * 0.05 }}>
          <Text style={{ color: Colors.textColor, fontSize: RFValue(14), }}>{productDetail?.name}</Text>
          <Text style={{ color: Colors.textColor, fontSize: RFValue(14), marginLeft: WIDTH * 0.02 }}>(blue,128 gb)</Text>
        </View>
        <RatingComponent rating={3.5} ratingStyle={{ width: WIDTH * 0.13, marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.01 }} />
        <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.007, alignItems: "center", marginHorizontal: WIDTH * 0.05 }}>
          <Text style={{ color: Colors.secondaryColor, fontSize: RFValue(16), fontWeight: "900" }}>OMR {productDetail?.price}</Text>
          <Text style={{ color: Colors.textColor, fontSize: RFValue(12), textDecorationLine: "line-through", marginLeft: WIDTH * 0.05, opacity: 0.5 }}>OMR 1,75,000</Text>
        </View>
        <View style={{ marginHorizontal: WIDTH * 0.05, }}>
          <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: Colors.lightGrey, paddingVertical: HEIGHT * 0.008, marginTop: HEIGHT * 0.01 }}>
            <Text style={{ color: Colors.textColor, fontSize: RFValue(12), fontWeight: "700", marginLeft: WIDTH * 0.05 }}>color</Text>
            <Image source={{ uri: productDetail?.attrs?.color }} style={{ width: WIDTH * 0.07, height: WIDTH * 0.07, borderRadius: 50, marginLeft: WIDTH * 0.05 }} />
          </View>
          <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "center", paddingBottom: HEIGHT * 0.025, backgroundColor: Colors.backgroundGrey }}>
            {
              productDetail?.attrs?.specs?.map((item, index) =>
                <View style={{ alignItems: "center", paddingHorizontal: WIDTH * 0.05, width: WIDTH * 0.25, marginTop: HEIGHT * 0.025 }} key={index?.toString()}>
                  <Image source={{ uri: item?.icon }} style={{ width: WIDTH * 0.07, height: WIDTH * 0.07 }} tintColor={Colors.textColor} />
                  <Text style={{ color: Colors.textColor, fontSize: RFValue(12), fontWeight: "700", marginTop: HEIGHT * 0.005, textTransform: "capitalize" }}>{item?.title}</Text>
                </View>
              )
            }
          </View>
        </View>
        <View style={{ paddingVertical: HEIGHT * 0.008, borderBottomWidth: 3, borderTopWidth: 3, borderColor: Colors.lightGrey, paddingHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.02 }}>
          <Text style={{ color: Colors.textColor, fontSize: RFValue(14), fontWeight: "700" }}>About Products</Text>
          {!viewDetail ?
            <Pressable style={{ alignItems: "center", justifyContent: "center", marginVertical: HEIGHT * 0.02 }} onPress={() => handleViewAll()}>
              <Text style={{ color: Colors.secondaryColor, fontSize: RFValue(12), fontWeight: "700" }}>View Details...</Text>
            </Pressable>
            :
            <View style={{ marginVertical: HEIGHT * 0.02 }}>
              <RenderHTML source={{ html: productDetail?.description }} contentWidth={WIDTH * 0.9} />
            </View>
          }
        </View>
        <View style={{ paddingHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.01 }}>
          <Text style={{ color: Colors.textColor, fontSize: RFValue(14), fontWeight: "700" }}>Similar Products</Text>
          <FlatList
            data={dummySimilarProducts}
            renderItem={({ item, index }) => <ProductCard product={item} handleSelectItem={(id) => navigation.navigate("ProductDetail", id)} cardStyle={{ borderRightWidth: index % 2 == 0 ? 1 : 0, borderColor: Colors?.lightGrey }} />}
            numColumns={2}
            keyExtractor={(_, index) => index?.toString()}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={{ backgroundColor: Colors?.lightGrey, height: HEIGHT * 0.001 }} />}
          />
        </View>
      </ScrollView>
      <Button btnTitle={cartExist ? "Go to cart" : "Add to cart"} btnStyle={{ position: "absolute", bottom: HEIGHT * 0.07, width: WIDTH }} titleStyle={{ textTransform: "uppercase" }} onPress={() => handleAddtoCart()} />
    </View>
  )
}
export default ProductDetailsScreen