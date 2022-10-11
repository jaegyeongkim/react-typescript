import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { color } from "./theme";

const globalStyles = createGlobalStyle`
    ${reset}
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }  

    #root{
        display: flex;
        width: 100%;
        color: black;
    }
    button, a{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        border: 0;
        font-size: 1rem;
        text-decoration: none;
        color: black;
        background-color: transparent;
        cursor: pointer;
    }
    a{
        
    }
    textarea{
        resize: none;
        font-family: antialiased;
    }
    input, textarea{
        border: 1px solid ${color.gray_02};
    }
`;

export default globalStyles;
