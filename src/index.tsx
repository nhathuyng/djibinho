import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, responsiveFontSizes } from '@material-ui/core';
import { MuiThemeProvider as Theme } from '@material-ui/core/styles';
import { theme } from './other/theme';
import { Provider } from 'react-redux';
import { store } from './state/store/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <Theme theme={responsiveFontSizes(theme)}>
        <App />
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
