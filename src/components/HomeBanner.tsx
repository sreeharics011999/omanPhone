import { Image } from "react-native"
import { DummyBanner } from "../constants/Images"
import { HEIGHT, WIDTH } from "../constants/constant"

const HomeBanner=({data})=>{
    return(
        <Image source={{uri:data?.file}} style={{width:WIDTH*0.95,alignSelf:"center", height:HEIGHT*0.25,marginTop:HEIGHT*0.01}} resizeMode="cover"/>
    )
}
export default HomeBanner