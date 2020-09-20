import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, responsiveFontSizes } from '@material-ui/core';
import { MuiThemeProvider as Theme } from '@material-ui/core/styles';
import { theme } from './other/theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Theme theme={responsiveFontSizes(theme)}>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
