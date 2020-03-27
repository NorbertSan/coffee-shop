import { createGlobalStyle } from "styled-components";
import theme from "theme";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
*,*::after,*::before{
    box-sizing:border-box;
}
html{
    font-size:62.5%;
}
   body{
        font-size:${theme.fontSize.s};
        margin:0;
        font-family: 'Roboto', sans-serif;
        background:${theme.whiteColor};
        color:${theme.primaryColor};
        overflow-x:hidden;
    }  
`;

export default GlobalStyles;
