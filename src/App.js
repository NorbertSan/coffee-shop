import React from "react";
import GlobalStyles from "GlobalStyles";
import styled from "styled-components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MainTemplate from "templates/MainTemplate";
import SecondaryTemplate from "templates/SecondaryTemplate";
import HomeView from "views/HomeView";
import AboutView from "views/AboutView";
import FinalizationView from "views/FinalizationView";
import ShopCartView from "views/ShopCartView";
import DetailsPageView from "views/DetailsPageView";
import ProductsView from "views/ProductsView";
import { Provider } from "react-redux";
import store from "store";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <AppRoute path="/home" layout={MainTemplate} component={HomeView} />
        <AppRoute path="/about" layout={MainTemplate} component={AboutView} />
        <AppRoute
          path="/shopcart"
          layout={SecondaryTemplate}
          component={ShopCartView}
        />
        <AppRoute
          path="/finalization"
          layout={SecondaryTemplate}
          component={FinalizationView}
        />
        <AppRoute
          exact
          path="/products"
          layout={MainTemplate}
          component={ProductsView}
        />
        <AppRoute
          exact
          path="/products/:id"
          layout={SecondaryTemplate}
          component={DetailsPageView}
        />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
