import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#234586',
      dark: '#0D1831',
    },
    secondary: {
      main: '#F9EA69',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif;',
    h1: {
      fontSize: '48.83px',
      fontWeight: 500,
    },
    h2: {
      fontSize: '39.06px',
      fontWeight: 500,
    },
    h3: {
      fontSize: '31.25px',
      fontWeight: 500,
    },
    h4: {
      fontSize: '25px',
      fontWeight: 500,
    },
    h5: {
      fontSize: '20px',
      fontWeight: 400,
    },
    h6: {
      fontSize: '16px',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 3,
  },
  overrides: {
    MuiTypography: {
      root: {
        color: '#fff',
      },
    },
  },
  props: {
    MuiTextField: {
      InputLabelProps: {
        classes: {},
      },
    },
  },
});
