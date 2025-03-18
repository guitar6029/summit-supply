export type Shoe = {
  id: number;
  size: number[];
  price: number;
  name: string;
  first_section_title: string[];
  first_section_quote: string;
  first_section_background_image: string;
  first_section_background_image_alt: string;
  second_section_boot_title: string;
  second_section_boot_description: string;

  description_detailed: string;
  material: string[];
  features: string[];
  care_instructions: string[];
  warranty_info: string;

  second_section_boot_img: string;
  second_section_boot_img_alt: string;
  secondary_img: string;
  url_slug: string;
  img_url: string;
  shoe_type: ShoeType;
};

export type ShoeType = "boot" | "casual";
