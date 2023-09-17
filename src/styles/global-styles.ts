import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body{
        font-size: 1.6rem;
        font-family: ${theme.fonts.family.default};
    }

    h1, h2, h3, h4, h5, h6{
        font-family: ${theme.fonts.family.secondary};
        margin: ${theme.spacings.large} 0;
    }

    p{
        margin: ${theme.spacings.medium} 0;
    }
`;
