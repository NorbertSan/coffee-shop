import React from "react";
import GlobalStyles from "GlobalStyles";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MainTemplate from "templates/MainTemplate";
import HomeView from "views/HomeView";
import AboutView from "views/AboutView";
import ContactView from "views/ContactView";
import ShopCartView from "views/ShopCartView";
import ProductsView from "views/ProductsView";

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <MainTemplate>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={HomeView} />
        <Route path="/about" component={AboutView} />
        <Route path="/contact" component={ContactView} />
        <Route path="/products" component={ProductsView} />
        <Route path="/shopcart" component={ShopCartView} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default App;
