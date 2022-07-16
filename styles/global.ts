export const global_css = `
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    background-image: url(./../images/background-mobile-gradient.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    background-color: #000;
    color: white;
    font-family: 'Chakra Petch';
  }

  @media (min-width: 768px) {
    body {
      background-image: url(./../images/background-gradient.svg);
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`
