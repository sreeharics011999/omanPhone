import { View } from "react-native"
import ShimmerPlaceholder from "react-native-shimmer-placeholder"
import { HEIGHT, WIDTH } from "../constants/constant"
import LinearGradient from "react-native-linear-gradient"

const ProductDetailShimmer = () => {
    return (
        <View style={{ flex: 1 }}>
            <ShimmerPlaceholder height={HEIGHT * 0.4} width={WIDTH} LinearGradient={LinearGradient} />
            <View style={{paddingHorizontal: WIDTH * 0.05 }}>
                <ShimmerPlaceholder height={HEIGHT * 0.03} width={WIDTH * 0.8} LinearGradient={LinearGradient} style={{ marginTop: HEIGHT * 0.02}}/>
                    <ShimmerPlaceholder height={HEIGHT * 0.015} width={WIDTH * 0.2} LinearGradient={LinearGradient} style={{ marginTop: HEIGHT * 0.01 }}/>
                    <ShimmerPlaceholder height={HEIGHT * 0.025} width={WIDTH * 0.5} LinearGradient={LinearGradient} style={{ marginTop: HEIGHT * 0.01 }} />
                    <ShimmerPlaceholder height={HEIGHT * 0.28} width={WIDTH * 0.9} LinearGradient={LinearGradient} style={{ marginTop: HEIGHT * 0.015 }} />
            </View>
                <ShimmerPlaceholder height={HEIGHT * 0.05} width={WIDTH} LinearGradient={LinearGradient} style={{ marginTop: HEIGHT * 0.48 }} />
        </View>
    )
}
export default ProductDetailShimmer