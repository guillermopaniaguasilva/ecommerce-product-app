import { DefaultTheme } from 'styled-components';

const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
};

const colors = {
  veryDarkBlue: '#050449',
  darkGrayishBlue: '#3A4759',
  grayishBlue: '#B3BBC5',
  lightGrayishBlue: '#F6F8FC',
  white: '#FFFFFF',
  black: '#000000',
  orange: '#FF5D00',
  paleOrange: '#FFF2ED',
};

const fontSizes = {
  headingL: '64px',
  headingM: '24px',
  headingS: '20px',
  bodyM: '18px',
  bodyS: '14px',
};

const fontLineHeights = {
  headingL: '77px',
  headingM: '29px',
  headingS: '24px',
  bodyM: '24px',
  bodyS: '17px',
};

const fontWeights = {
  extraLight: 300,
  light: 400,
  normal: 500,
  bold: 700,
};

const fontFamilies = {
  main: 'Kumbh Sans',
};

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      veryDarkBlue: string;
      darkGrayishBlue: string;
      grayishBlue: string;
      lightGrayishBlue: string;
      white: string;
      black: string;
      orange: string;
      paleOrange: string;
    };
    fontSizes: {
      headingL: string;
      headingM: string;
      headingS: string;
      bodyM: string;
      bodyS: string;
    };
    fontWeights: {
      extraLight: number;
      light: number;
      normal: number;
      bold: number;
    };
    fontLineHeights: {
      headingL: string;
      headingM: string;
      headingS: string;
      bodyM: string;
      bodyS: string;
    };
    fontFamilies: {
      main: string;
    };
  }
}

const theme: DefaultTheme = {
  breakpoints,
  colors,
  fontSizes,
  fontLineHeights,
  fontWeights,
  fontFamilies,
};

export default theme;
