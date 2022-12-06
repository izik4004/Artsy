import FeaturedImage3 from "../assets/FeaturedProduct1.png";
import FeaturedImage2 from "../assets/FeaturedProduct2.png";
import FeaturedImage1 from "../assets/FeaturedProduct3.png";
import UpcomingImage from "../assets/Upcomingsection.png";

export const nav = [
  { name: "Home", href: "/" },
  { name: "Marketplace", href: "/products" },
  { name: "Auctions", href: "/auctions" },
  { name: "Drop", href: "/drop" },
];

export const hero = {
  title: "Photography is poetry & beautiful untold stories",
  subtitle:
    "Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.",
};

export const features = {
  feature1: {
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
