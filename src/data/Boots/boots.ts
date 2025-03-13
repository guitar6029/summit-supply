import { StaticImageData } from "next/image";

type Boot = {
  name: string;
  firstSectionTitle: string[];
  firstSectionQuote: string;
  firstSectionBackgroundImage: string | StaticImageData;
  firstSectionBackgroundImageAlt: string;
  secondSectionBootTitle: string;
  secondSectionBootDescription: {
    text: string;
    boldtext: string;
  };
  secondSectionBootImg: string | StaticImageData;
    secondSectionBootImgAlt: string;
};

export const boots: Boot[] = [
  {
    name: "The Summit Classic",
    firstSectionTitle: ["Our", "Classic", "Boot"],
    firstSectionQuote:
      "Tested by nature. Perfected by tradition. Ready for your journey.",
    firstSectionBackgroundImage: "/img/dan-meyers-ylJtKpTYjn4-unsplash.jpg",
    firstSectionBackgroundImageAlt: "forest",
    secondSectionBootTitle: "The Summit Classic",
    secondSectionBootDescription: {
      text: "Born from decades of craftsmanship, The Summit Classic is more than just a hiking boot—it&apos;s a legacy. Handmade with the finest full-grain leather and reinforced with a Vibram sole, this boot is built for the toughest trails and the longest journeys.",
      boldtext: "The Summit Classic",
    },
    secondSectionBootImg: "/img/boot.png",
    secondSectionBootImgAlt: "The Summit Classic",
  },
  {
    name: "The Ridge Explorer",
    firstSectionTitle: ["Our", "Explorer", "Boot"],
    firstSectionQuote:
      "The Ridge Explorer is a rugged hiking boot that is built for the trail.",
    firstSectionBackgroundImage: "/img/dan-meyers-ylJtKpTYjn4-unsplash.jpg",
    firstSectionBackgroundImageAlt: "forest",
    secondSectionBootTitle: "The Ridge Explorer",
    secondSectionBootDescription: {
        text: "The Ridge Explorer is a rugged hiking boot that is built for the trail. With a waterproof lining and a durable rubber sole, this boot is designed to keep you comfortable and protected in any terrain.",
        boldtext: "The Ridge Explorer",
    },
    secondSectionBootImg: "/img/boot.png",
    secondSectionBootImgAlt: "The Ridge Explorer",
    }
  
];
