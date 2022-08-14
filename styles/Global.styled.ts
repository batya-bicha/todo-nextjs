import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  border: 0;
  -ms-overflow-style: none;
}

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
  color: #000;
}

a,
a:visited {
  text-decoration: none;
  color: #000;
}

a:hover {
  text-decoration: none;
  color: #000;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

ul li {
  list-style: none;
}

img {
  image-rendering: -moz-crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}

input:focus:-moz-placeholder {
  color: transparent;
}

input:focus::-moz-placeholder {
  color: transparent;
}

input:focus:-ms-input-placeholder {
  color: transparent;
}

body {
  width: 100%;
  height: 100%;
  background: rgb(255, 236, 183);

  #__next {
    display: flex;
    width: 100%;
    height: 100%;

    img, input::placeholder, footer{
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
}
`;