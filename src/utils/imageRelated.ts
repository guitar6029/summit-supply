import Forest from "@/assets/img/dan-meyers-ylJtKpTYjn4-unsplash.jpg";
import TheSummitClassicBoot from "@/assets/img/boot.png";
import TheRidgeExplorerBoot from "@/assets/img/ridgeExplorer_nobackground.png";
import TheTrailRoverBoot from "@/assets/img/trailRover_nobackground.png";
import TheTrailStriderBoot from "@/assets/img/trailStider_nobackground.png";

export function getForestImage(){
    return Forest
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
