import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

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

html, body, #root{
    width: 100%;
    height: 100%;
    background: #171b40;
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
