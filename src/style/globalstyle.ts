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
        color: black;
    }
    button{
        border: 0;
        padding: 0;
        background-color: transparent;
        cursor: pointer;
    }
    a{
        text-decoration: none;
        color: black;
    }
    textarea{
        resize: none;
        font-family: antialiased;
    }
`;

export default globalStyles;
