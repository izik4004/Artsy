import FeaturedImage3 from "../assets/FeaturedProduct1.png";
import FeaturedImage2 from "../assets/FeaturedProduct2.png";
import FeaturedImage1 from "../assets/FeaturedProduct3.png";
import UpcomingImage from "../assets/Upcomingsection.png";
import CreatorsImage from "../assets/CreatorsImage1.png"
import Product1 from "../assets/item1.png"
import Product2 from "../assets/item2.png"
import Product3 from "../assets/item3.png"
import Product4 from "../assets/item4.png"
import Product5 from "../assets/item5.png"
import Product6 from "../assets/item6.png"
import Product7 from "../assets/item7.png"
import Product8 from "../assets/item8.png"
import Product9 from "../assets/item9.png"
import Auction1 from "../assets/aution1.png"
import Auction2 from "../assets/auction2.png"
import Slider1 from "../assets/slider1.png"
import Slider2 from "../assets/slider2.png"
import Slider3 from "../assets/slider3.png"
import Slider4 from "../assets/slider4.png"
import Slider5 from "../assets/slider5.png"




export const nav = [
  { name: "Home", href: "/" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Auctions", href: "/auctions" },
  { name: "Drop", href: "/drop" },
];

export const hero = {
  title: "Photography is poetry & beautiful untold stories",
  subtitle:
    "Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.",
};

export const carousel = [Slider1, Slider2, Slider3, Slider4, Slider5]
export const features = {
  feature1: {
    id:"1",
    title: "The Boolean Egyptian",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    image: FeaturedImage1,
  },
  feature2: {
    pretitle: "Free some cost",
    title: "Save cost for you and family",
    subtitle:
      "Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.",
    btnLink: "Learn more",
    image: FeaturedImage2,
  },
  feature3: {
    pretitle: "Use anytime",
    title: "Use anytime when you need",
    subtitle:
      "Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.",
    btnLink: "Learn more",
    image: FeaturedImage3,
  },
};

export const upcomingAuction = {
  title: "See Upcoming Auctions and Exhibitions",
  pretitle: "MONALISA REDEFINED IN STYLE",
  subtitle:
    "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS",
  image: UpcomingImage,
};

export const footer = {
  title: "ARTSY",
 
 
  footerText: "Artsystudios © 2022. All Rights Reserved.",
  footerLink1: [
    { name: "Home", href: "/" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Auctions", href: "/auctions" },
    { name: "Drops", href: "/drop" },
  ],
  footerLink2: [
    { name: "Blog", href: "/#" },
    { name: "Wallets", href: "/#" },
    { name: "Rates", href: "/#" },
    { name: "High bids", href: "/#" },
  ],
  footerLink3: [
    { name: "artsystudios@gmail.com",},
    {  name: "Lagos, Nigeria", },
  ],
};

export const explore = [
    { name: "Explore marketplace", href: "/#" },
    { name: "See Auctions", href: "/#" },
]

export const topCreators = {
    title: "TOP CREATORS OF THE WEEK",
    specialty: [
        { name: "Editorials"},
        { name: "Fashion"},
        { name: "Lifestyle"},
        { name: "Blueprints"},
      ],
    subtitle:
      "Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting. Jack Lowden",
    image: CreatorsImage,
  };

  export const category = ["Editorial", "Fashion", "Optics", "Arts & Museum", "Nature"  ];

  export const price = ["All", "Below $100,00", "$100.00 - $150.00", "$150.00 - $200.00", "Above $200.00"  ];

  export const products = [
    {
        id:1,
        name: "PHILOMENA '22",
        price: 3.90,
        image: Product1,
        category:"fashion",
        subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
       FeaturedImage1: FeaturedImage1,
    },
    {
        id:2,
        name: "BOOLEAN EGYPTIAN",
        price: 3.90,
        image: Product2,
        category:"arts",
        subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    image: FeaturedImage1,
    },
    {
        id:3,
        name: "BLANC",
        price: 3.90,
        image: Product3,
        category:"nature",
        subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    image: FeaturedImage1,
    },
    {
        id:4,
        name: "ELLIPSIA",
        price: 3.90,
        image: Product4,
        category:"editorial"
    },
    {
        id:5,
        name: "THE LAWMAKERS",
        price: 3.90,
        image: Product5,
        category:"fashion"
    },
    {
        id:6,
        name: "VEIL",
        price: 3.90,
        image: Product6,
        category:"nature"
    },
    {
        id:7,
        name: "ALTERNATING",
        price: 3.90,
        image: Product7,
        category:"editorial"
    },
    {
        id:8,
        name: "ROSEMARY '22",
        price: 3.90,
        image: Product8,
        category:"art"
    },
    {
        id:9,
        name: "BEVERLY",
        price: 3.90,
        image: Product9
    },
  ]

  // export const bid = [
  //   {
  //     id:1,
  //     name: "Out of the box",
  //     creator: "Dan Murray",
  //     Highestbid: "0.57ETH",
  //     currentbid: "0.987 ETH",
  //     date: "12/08/22",
  //     image: Auction1
  //   },
  //   {
  //     id:2,
  //     name: "Out of the box",
  //     creator: "Jacob Banks",
  //     Highestbid: "0.34ETH",
  //     currentbid: "0.99 ETH",
  //     date: "12/08/22",
  //     image:Auction2
  //   }
  // ]

  export const auction = [
    {
      id:1,
      name: "Out of the box",
      creator: "Dan Murray",
      Highestbid: "0.57ETH",
      currentbid: "0.987 ETH",
      date: "12/08/22",
      image: Auction1
    },
    {
      id:2,
      name: "Out of the box",
      creator: "Jacob Banks",
      Highestbid: "0.34ETH",
      currentbid: "0.99 ETH",
      date: "12/08/22",
      image:Auction2
    }
  ]

  function getProductData(id) {
    let productData = products.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export {getProductData}