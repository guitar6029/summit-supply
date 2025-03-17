export type Boot = {
  id: number;
  size: number[];
  price: number;
  name: string;
  first_section_title: string[]; // Changed to snake_case
  first_section_quote: string; // Changed to snake_case
  first_section_background_image: string; // Changed to snake_case
  first_section_background_image_alt: string; // Changed to snake_case
  second_section_boot_title: string; // Changed to snake_case
  second_section_boot_description: string; // Changed to snake_case

  description_detailed: string; // Changed to snake_case
  material: string[];
  features: string[];
  care_instructions: string[]; // Changed to snake_case
  warranty_info: string; // Changed to snake_case

  second_section_boot_img: string; // Changed to snake_case
  second_section_boot_img_alt: string; // Changed to snake_case
  secondary_img: string; // Changed to snake_case
  url_slug: string; // Changed to snake_case
  img_url: string;
};
