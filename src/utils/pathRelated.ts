export function getShoePath(shoeType: string) {
  switch (shoeType) {
    case "casual":
      return "casual";
    case "boot":
      return "boots";
    default:
      return "boots";
  }
}

export function getShoeImg(shoeName: string): string {
  // Normalize, trim, drop punctuation/underscores/hyphens, remove leading "the"
  const raw = shoeName ?? "";
  let k = raw
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .replace(/[\s_\-]/g, "");        // remove spaces/underscores/hyphens
  k = k.replace(/^the/, "");          // remove leading "the"

  // Handle common aliases/typos
  const alias: Record<string, string> = {
    trailblazer: "trailbrazer",       // if DB ever says "blazer"
  };
  k = alias[k] ?? k;

  const map: Record<string, string> = {
    bearwearingbackpack: "/img/bear_wearing_backpack.png",
    cityglide: "/img/city_glide.jpg",
    citynomad: "/img/city_nomad.jpg",
    forestbd: "/img/forest_bd.jpg",
    ironridge: "/img/iron_ridge.jpg",
    luxestrider: "/img/luxe_strider.jpg",
    ridgeexplorer: "/img/ridge_explorer.jpg",
    summitclassic: "/img/summit_classic.jpg",
    supplysummithero: "/img/supply_summit_hero.jpg",
    supplysummitlogo: "/img/supply_summit_logo.png",
    trailbrazer: "/img/trail_brazer.jpg",
    trailrover: "/img/trail_rover.jpg",
    trailstrider: "/img/trail_strider.jpg",
    urbantrekker: "/img/urban_trekker.jpg",
    urbanvoyager: "/img/urban_voyager.jpg",
    weekendstroller: "/img/weekend_stroller.jpg",
  };

  if (map[k]) return map[k];

  // Fuzzy fallback
  const fuzzy = Object.keys(map).find((key) => key.includes(k) || k.includes(key));
  return fuzzy ? map[fuzzy] : "/img/supply_summit_logo.png";
}