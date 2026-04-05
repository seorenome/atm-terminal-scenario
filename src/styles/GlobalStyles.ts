import { createGlobalStyle } from 'styled-components'

import OschadSansRegular from '../assets/fonts/OschadSans-Regular.woff2'
import OschadSansMedium from '../assets/fonts/OschadSans-Medium.woff2'
import OschadSansSemiBold from '../assets/fonts/OschadSans-SemiBold.woff2'
import OschadSansBold from '../assets/fonts/OschadSans-Bold.woff2'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Oschad Sans';
    src: url(${OschadSansRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Oschad Sans';
    src: url(${OschadSansMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Oschad Sans';
    src: url(${OschadSansSemiBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Oschad Sans';
    src: url(${OschadSansBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    min-height: 100%;
  }

  body {
    min-height: 100vh;
    font-family: 'Oschad Sans', Arial, sans-serif;
    background-color: #bdbdbd;
    color: #000000;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`