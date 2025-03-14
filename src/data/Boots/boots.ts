export type Boot = {
  name: string;
  firstSectionTitle: string[];
  firstSectionQuote: string;
  firstSectionBackgroundImage: string;
  firstSectionBackgroundImageAlt: string;
  secondSectionBootTitle: string;
  secondSectionBootDescription: {
    text: string;
    boldtext: string;
  };
  secondSectionBootImg: string;
  secondSectionBootImgAlt: string;
  secondaryImg: string;
  urlSlug: string;
};

export const boots: Boot[] = [
  {
    name: "The Summit Classic",
    firstSectionTitle: ["Our", "Classic", "Boot"],
    firstSectionQuote:
      "Tested by nature. Perfected by tradition. Ready for your journey.",
    firstSectionBackgroundImage: "summitClassic",
    firstSectionBackgroundImageAlt: "forest",
    secondSectionBootTitle: "The Summit Classic",
    secondSectionBootDescription: {
      text: "Born from decades of craftsmanship, The Summit Classic is more than just a hiking boot—it's a legacy. Handmade with the finest full-grain leather and reinforced with a Vibram sole, this boot is built for the toughest trails and the longest journeys.",
      boldtext: "The Summit Classic",
    },
    secondSectionBootImg: "summitClassic",
    secondSectionBootImgAlt: "The Summit Classic",
    secondaryImg: "summitClassic",
    urlSlug: "the-summit-classic",
  },
  {
    name: "The Ridge Explorer",
    firstSectionTitle: ["Our", "Explorer", "Boot"],
    firstSectionQuote:
      "The Ridge Explorer is a rugged hiking boot that is built for the trail.",
    firstSectionBackgroundImage: "ridgeExplorer",
    firstSectionBackgroundImageAlt: "forest",
    secondSectionBootTitle: "The Ridge Explorer",
    secondSectionBootDescription: {
      text: "The Ridge Explorer is a rugged hiking boot that is built for the trail. With a waterproof lining and a durable rubber sole, this boot is designed to keep you comfortable and protected in any terrain.",
      boldtext: "The Ridge Explorer",
    },
    secondSectionBootImg: "ridgeExplorer",
    secondSectionBootImgAlt: "The Ridge Explorer",
    secondaryImg: "ridgeExplorer",
    urlSlug: "the-ridge-explorer",
  },
  {
    name: "The Trail Rover",
    firstSectionTitle: ["Our", "Casual", "Hiker"],
    firstSectionQuote:
      "Adventure starts with every step. Walk farther, explore more.",
    firstSectionBackgroundImage: "trailRover",
    firstSectionBackgroundImageAlt: "scenic trail",
    secondSectionBootTitle: "The Trail Rover",
    secondSectionBootDescription: {
      text: "Designed for the modern explorer, The Trail Rover is the perfect fusion of casual comfort and rugged durability. Whether you're navigating city streets or taking on forest trails, this boot offers the versatility you need. With a lightweight build, breathable suede-mesh construction, and an all-terrain sole, the Trail Rover keeps you comfortable on every journey.",
      boldtext: "The Trail Rover",
    },
    secondSectionBootImg: "trailRover",
    secondSectionBootImgAlt: "The Trail Rover",
    secondaryImg: "trailRover",
    urlSlug: "the-trail-rover",
  },
  {
    name: "The Trail Strider",
    firstSectionTitle: ["Our", "Hiking", "Sneaker"],
    firstSectionQuote:
      "Light on your feet. Strong on the trail. Comfort meets performance.",
    firstSectionBackgroundImage: "trailStrider",
    firstSectionBackgroundImageAlt: "mountain path",
    secondSectionBootTitle: "The Trail Strider",
    secondSectionBootDescription: {
      text: "The Trail Strider is built for those who seek adventure without sacrificing comfort. Engineered with a lightweight, breathable knit upper and a responsive cushioned sole, this sneaker offers the agility of a running shoe with the durability of a hiking boot. Whether you're tackling light trails, city streets, or weekend getaways, the Trail Strider is your go-to choice.",
      boldtext: "The Trail Strider",
    },
    secondSectionBootImg: "trailStrider",
    secondSectionBootImgAlt: "The Trail Strider",
    secondaryImg: "trailStrider",
    urlSlug: "the-trail-strider",
  },
];
