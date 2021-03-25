/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage/Loadable';
import Logare from '../Logare/Loadable';
import Despre from '../Despre/Loadable';
import Inregistrare from '../Inregistrare/Loadable';
import ComandaTaxi from '../ComandaTaxi/Loadable';
import Angajare from '../Angajare/Loadable';
import Contact from '../Contact/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/despre" component={Despre} />
        <Route path="/comanda-taxi" component={ComandaTaxi} />
        <Route path="/angajare" component={Angajare} />
        <Route path="/Contact" component={Contact} />
        <Route path="/logare" component={Logare} />
        <Route path="/inregistrare" component={Inregistrare} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
