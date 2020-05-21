import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

*{
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
}

*:focus{
    outline: 0;
}

body{
    -webkit-font-smoothing: antialiased;
}

body, input, button{
    font: 16px 'Roboto', sans-serif;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}

button{
    cursor: pointer;
}

`;