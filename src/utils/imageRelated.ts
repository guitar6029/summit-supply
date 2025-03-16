import Forest from "@/assets/img/dan-meyers-ylJtKpTYjn4-unsplash.jpg";
import TheSummitClassicBoot from "@/assets/img/boot.png";
import TheRidgeExplorerBoot from "@/assets/img/ridgeExplorer_nobackground.png";
import TheTrailRoverBoot from "@/assets/img/trailrover.jpg";
import TheTrailStriderBoot from "@/assets/img/trailStider_nobackground.png";

import ClassicBootImageBg from "@/assets/img/summitclassic.jpg";
import RidgeExplorerBootBg from "@/assets/img/ridgeExplorer.jpg";
import TrailRoverBootBg from "@/assets/img/trailrover.jpg";
import TrailStriderBg from "@/assets/img/trailStrider.jpg";
import UrbanVoyagerBg from "@/assets/img/urbanvoyager.jpg";
import WeekendStrollerBg from "@/assets/img/weekendstroller.jpg";

export function getForestImage() {
  return Forest;
}

export function getBootImage(id: string) {
  switch (id) {
    case "1":
      return TheSummitClassicBoot;
    case "2":
      return TheTrailRoverBoot;
    case "3":
      return TheRidgeExplorerBoot;
    case "4":
      return TheTrailStriderBoot;
    default:
      return TheSummitClassicBoot;
  }
}

export function getBootImageWithBg(imageName: string) {
  if (imageName === "ridgeExplorer") {
    return RidgeExplorerBootBg;
  }

  if (imageName === "trailRover") {
    return TrailRoverBootBg;
  }

  if (imageName === "trailStrider") {
    return TrailStriderBg;
  }

  if (imageName === "urbanVoyager") {
    return UrbanVoyagerBg;
  }

  if (imageName === "weekendStroller") {
    return WeekendStrollerBg;
  }

  return ClassicBootImageBg;
}

export function getSecondaryBgClass(imageName: string) {
  if (imageName === "ridgeExplorer") {
    return "hiking-2-bg";
  }
  if (imageName === "trailRover") {
    return "hiking-3-bg";
  }
  if (imageName === "trailStrider") {
    return "hiking-4-bg";
  }

  return "hiking-bg";
}
