
const BaseUrl = "http://omanphone.smsoman.com/api/"
let url
const EndPoint = {
    banner:()=>{
        url=`${BaseUrl}configuration`
        return url
    },
    homePage:()=>{
        url=`${BaseUrl}homepage`
        return url
    },
    productDetails:(id:number)=>{
        url=`${BaseUrl}productdetails?id=${id}`
        return url
    },

}


export { EndPoint }