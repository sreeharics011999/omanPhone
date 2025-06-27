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
const dummyHome= [
  {
    type: "productlist",
    data: {
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
    },
    subtype: "product_list"
  },
  {
    type: "productlist",
    data: {
      id: 18,
      title: "BESPOKE LUXURY PHONES - PINORO HEMORO",
      items: [
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
        },
        {
          name: "PINORO HEMORO DIAMANTINA SERIES IPHONE 12 PRO",
          id: 887,
          sku: "PHDMTIPH12PRO",
          image: "/f/r/front_1_3.jpg",
          price: 1300,
          storage: false,
          product_tag: null,
          preorder: ""
        },
        {
          name: "PINORO HEMORO DIAMANTINA CUSTOMIZED YOUR IPHONE 12 PRO MAX",
          id: 894,
          sku: "PHDMTIPH12PROMXCSYR",
          image: "/5/_/5_2_2.jpg",
          price: 850,
          storage: false,
          product_tag: null,
          preorder: ""
        }
      ]
    },
    subtype: "product_list"
  },
  {
    type: "banner",
    data: {
      id: 5438,
      type: "brand",
      file: "https://omanphone.smsoman.com/mobile-admin/uploads/image_614ada079781e.jpg"
    }
  },
  {
    type: "productlist",
    data: {
      id: 0,
      title: "Offers",
      items: []
    },
    subtype: "sales_product"
  }
];

export {WIDTH,HEIGHT,Colors,productSource,dummyHome}