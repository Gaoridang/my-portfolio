import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      background: string;
      font: string;
    };

    fontSize: {
      xl: string;
      ll: string;
      ml: string;
      rl: string;
      sl: string;
    };

    fontWeight: {
      extraBold: number;
      bold: number;
      semiBold: number;
      medium: number;
      reguler: number;
      thin: number;
    };
  }
}
