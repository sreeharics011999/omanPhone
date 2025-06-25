import { Dimensions } from "react-native";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Colors={
    primaryColor:"#ffffff",
    secondaryColor:"#ed3419",
    textColor:"#28282B",
    lightGrey:"#D3D3D3",
    backgroundGrey:"#e0ded9",
    orange:"#ffc100"
}
const productImagePath="http://omanphone.smsoman.com/pub/media/catalog/product"
const productSource=(image)=>{
    const uri={uri:`${productImagePath+image}`}
    return uri
}

export {WIDTH,HEIGHT,Colors,productSource}