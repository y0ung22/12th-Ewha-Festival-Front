import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

input, textarea {
    border: none;
    outline: none;
}

html, body {
    height: 100%;
    background: linear-gradient(180deg, #FFF 26.21%, #00FF75 120.91%);
}

@media (min-width: 576px) {
    .wrapper {
        width: 390px;
        margin: 0 auto;
    }
}
`;

export default GlobalStyles;
