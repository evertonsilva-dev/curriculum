import React from 'react';
import { Router } from 'react-router-dom';
import { withTheme } from 'styled-components';
import { AppProvider } from './contexts';
import Routes from './router';
import history from './router/history';
import GlobalStyle from './styles';

interface Props {
  theme: {
    mode: String;
  };
}
const App = ({ theme }: Props) => {
  return (
    <AppProvider>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
    </AppProvider>
  );
};

export default withTheme(App);
