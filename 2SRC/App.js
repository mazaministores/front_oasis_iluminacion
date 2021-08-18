import React, { Suspense } from 'react';
import './App.css';
import { Route, Switch } from 'wouter';
import StorePage from './pages/store';

const MasterPage = React.lazy(() => import('./pages/master/index'))
const ArticlesPage = React.lazy(() => import('./pages/master/articles'))
const OthersPage = React.lazy(() => import('./pages/master/others'))
const LoginPage = React.lazy(() => import('./pages/master/login'))
const DetailPage = React.lazy(() => import('./pages/master/detail'))

function App() {

  return (
    <Suspense fallback={null}>
      <Switch>
        <Route
          path="/"
          component={StorePage}
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
