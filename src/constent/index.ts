import { features } from "node:process";
import { TSubscrptionPlanOptions } from "../types";

export const blankImage="https://res.cloudinary.com/dcrui4h7s/image/upload/v1728573900/vm6kctldpgh85xgvy9m3.png"
export const noImage="https://res.cloudinary.com/dcrui4h7s/image/upload/v1728642046/oe3xmzjttc2eje9ocvt3.png"
export const genderOptions=[
    {key:"Male",label:"Male"},
    {key:"Female",label:"Female"},
    {key:"Other",label:"Other"}
]
export const techBlogCategories = [
    { key: "JavaScript", value: "JavaScript" },
    { key: "TypeScript", value: "TypeScript" },
    { key: "React", value: "React" },
    { key: "Node.js", value: "Node.js" },
    { key: "MongoDB", value: "MongoDB" },
    { key: "Web Development", value: "Web Development" },
    { key: "DevOps", value: "DevOps" },
    { key: "Cloud Computing", value: "Cloud Computing" },
    { key: "Machine Learning", value: "Machine Learning" },
    { key: "AI and Robotics", value: "AI and Robotics" }
  ];
  export const premiumOrFreeOptions=[
    {key:"Free",value:"Free"},
    {key:"Premium",value:"Premium"},
   
]
export const subscrptionPlanOptions:TSubscrptionPlanOptions[]=[
  {
    plan:"1 Month",
    amount:300,
    features:[
      "Latest Tech Tips",
      "Exclusive How-To Guides",
      "Advanced Tech Solutions",
      "Member-Only Webinars"
    ]
  },
  {
    plan:"6 Months",
    amount:500,
    features:[
      "Latest Tech Tips",
      "Exclusive How-To Guides",
      "Advanced Tech Solutions",
      "Member-Only Webinars"
    ]
  },
  {
    plan:"1 Year",
    amount:700,
    features:[
      "Latest Tech Tips",
      "Exclusive How-To Guides",
      "Advanced Tech Solutions",
      "Member-Only Webinars"
    ]
  }
]
export const teamInformations = [
  {
    image:
      "https://res.cloudinary.com/dcrui4h7s/image/upload/v1726161621/dreams-trip-car-rental-reservation-system/o9ogwuhoadptb1kidzzd.webp",
    name: "Mr. Shourav Paul",
    designation: "CEO",
  },
  {
    image:
      "https://res.cloudinary.com/dcrui4h7s/image/upload/v1726175059/dreams-trip-car-rental-reservation-system/o5uwmcmian2fuhxlrilg.jpg",
    name: "Radika Sen",
    designation: "COO",
  },
  {
    image:
      "https://res.cloudinary.com/dcrui4h7s/image/upload/v1726175236/dreams-trip-car-rental-reservation-system/ecfa1j6ncy2k5pzzkrmg.jpg",
    name: "Mr. Hasan Ulahh",
    designation: "CFO",
  },
];