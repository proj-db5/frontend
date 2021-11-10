import { DefaultTheme, css, CSSObject } from "styled-components";

const sizes = {
  desktop_2: 1919,
  desktop_3: 1599,
  desktop_4: 1365,
  tablet: 1023,
  mobile: 599,
};

const theme: DefaultTheme = {
  media: Object.keys(sizes).reduce((acc: any, label: string) => {
    if (
      label === "desktop_2" ||
      label === "desktop_3" ||
      label === "desktop_4" ||
      label === "tablet" ||
      label === "mobile"
    ) {
      // @ts-ignore
      acc[label] = (...args) => css`
        @media (hover: hover) and (max-width: ${sizes[label]}px) {
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
