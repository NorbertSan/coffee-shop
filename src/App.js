import React from "react";
import GlobalStyles from "GlobalStyles";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MainTemplate from "templates/MainTemplate";
import HomeView from "views/HomeView";
import AboutView from "views/AboutView";
import ContactView from "views/ContactView";
import ShopCartView from "views/ShopCartView";
import DetailsPageView from "views/DetailsPageView";
import ProductsView from "views/ProductsView";
import { Provider } from "react-redux";
import store from "store";

const App = () => (
  <Provider store={store}>
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
          <Route exact path="/products" component={ProductsView} />
          <Route path="/products/:id" component={DetailsPageView} />
          <Route path="/shopcart" component={ShopCartView} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default App;
