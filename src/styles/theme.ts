import { DefaultTheme, css } from "styled-components";

const sizes = {
  pc: 1024,
  tablet: 500,
};

const theme: DefaultTheme = {
  media: Object.keys(sizes).reduce((acc: any, label: string) => {
    if (label === "pc" || label === "tablet") {
      // @ts-ignore
      acc[label] = (...args) => css`
        @media (hover: hover) and (min-width: ${sizes[label]}px) {
          ${
            // @ts-ignore
            css(...args)
          };
        }
      `;
    }
    return acc;
  }, {}),
};

export { theme };
