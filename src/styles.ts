import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  rose: '#E66767',
  lightRose: '#FFEBD9',
  backgroundColor: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;

  body {
    background-color: ${colors.backgroundColor};
    color: ${colors.rose};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
}
`
