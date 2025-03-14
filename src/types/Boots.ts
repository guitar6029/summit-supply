export type Boot = {
    id: number,
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
  