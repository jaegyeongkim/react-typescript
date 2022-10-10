import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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
    }
    button{
        border: 0;
        padding: 0;
        outline: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

export default globalStyles;
