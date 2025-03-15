export type Boot = {
    id: number,
    size: number[],
    price: number,
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
    extraDescription: {
      descriptionDetailed: string,
      material: string[],
      features: string[],
      careInstructions: string[],
      warrantyInfo: string
    },
    secondSectionBootImg: string;
    secondSectionBootImgAlt: string;
    secondaryImg: string;
    urlSlug: string;
  };
  