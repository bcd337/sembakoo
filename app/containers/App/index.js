/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

import Container from 'components/Container'
import Sidebar from 'components/Sidebar'
import AppBody from 'components/AppBody'

import '@fortawesome/fontawesome-free/css/all.css'
import 'resources/bootstrap.min.css'
import 'rsuite/dist/styles/rsuite-default.css'

const AppWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  padding: 0;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Container>
        <Sidebar />
        <AppBody>
           <Header />
           <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/features" component={FeaturePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
          <Footer />
        </AppBody>
      </Container>
      <GlobalStyle />
    </AppWrapper>
  );
}
