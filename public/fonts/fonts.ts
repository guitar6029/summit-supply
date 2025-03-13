// fonts.ts
import localFont from 'next/font/local';

export const customfont = localFont({
    src: '../fonts/MyFont.otf',  // Correct path to your font file
    variable: '--font-custom-font',  // Define the global CSS variable
});