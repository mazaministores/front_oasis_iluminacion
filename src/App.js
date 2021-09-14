import React, { Suspense } from 'react';
import './App.css';
import { Route, Switch } from 'wouter';
import StorePage from './pages/store';
import HomePage from './pages/home';
import OffersPage from './pages/Offers'
import SearchPage from './pages/search';
import ScrollToTop from './components/ScrollToTop'
import CategorieSelectPage from './pages/Categorie-Select';

const MasterPage = React.lazy(() => import('./pages/master/index'))
const ArticlesPage = React.lazy(() => import('./pages/master/articles'))
const OthersPage = React.lazy(() => import('./pages/master/others'))
const LoginPage = React.lazy(() => import('./pages/master/login'))
const DetailPage = React.lazy(() => import('./pages/master/detail'))

function App() {

  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <Switch>
        <Route
          path="/"
          component={HomePage}
        />
        <Route
          path="/category/:id"
          component={StorePage}
        />
        <Route
          path="/offers"
          component={OffersPage}
        />
        <Route
          path="/categorieoptions/:id"
          component={CategorieSelectPage}
        />
        <Route
          path="/search/:id"
          component={SearchPage}
        />
        <Route
          path="/master"
          component={MasterPage}
        />
        <Route
          path="/master/articles"
          component={ArticlesPage}
        />
        <Route
          path="/master/others"
          component={OthersPage}
        />
        <Route
          path="/master/login"
          component={LoginPage}
        />
        <Route
          path="/master/detail"
          component={DetailPage}
        />
      </Switch>
    </Suspense>

  );
}

export default App;
