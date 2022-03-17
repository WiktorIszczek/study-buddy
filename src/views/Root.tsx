import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import UsersList from 'components/organisms/UsersList.js/UsersList';
import { format } from 'path';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
