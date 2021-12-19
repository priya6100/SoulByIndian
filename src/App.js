/** @format */

import { useEffect, useState, createContext, useContext } from "react";
import "./App.css";
import HomePage from "./containers/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import ProductListPage from "./containers/ProductListPage";

import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, updateCart, updateWishlist } from "./actions";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import CartPage from "./containers/CartPage";
import WishlistPage from "./containers/WishlistPage";
import PrivateRoute from "./components/PrivateRoute";
import OrderPage from "./containers/OrderPage";
import OrderDetailsPage from "./containers/OrderDetailsPage";
// import Footer from './components/Footer';
import PortFolio from "./components/Portfolio";
import CheckOutPage from "./containers/CheckOutPage";
import { ThankYou } from "./components/Thankyou";
import Men from "./components/men/Men";
import SignIn from "./containers/ForgotPasswordPage/NewPassword";
import NewPassword from "./containers/ForgotPasswordPage/NewPassword";
import ForgetPassword from "./containers/ForgotPasswordPage/Forgotpassword";
import ResetPassword from "./containers/ForgotPasswordPage/ResetPassword";
import Reset from "./components/reset";

export const UserContext = createContext();

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  useEffect(() => {
    console.log("App.js - updateCart");
    dispatch(updateCart());
  }, [auth.authenticate]);

  useEffect(() => {
    console.log("App.js - updateWishlist");
    dispatch(updateWishlist());
  }, [auth.authenticate]);

  const Routing = () => {
    const history = useHistory();
    const { state, dispatch } = useContext(UserContext);
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        dispatch({ type: "USER", payload: user });
      } else {
        if (!history.location.pathname.startsWith("/reset"))
          history.push("/signin");
      }
    }, []);
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/portfolio" exact component={PortFolio} />
          <Route path="/thank" component={ThankYou} />
          <Route path="/cart" component={CartPage} />
          <PrivateRoute path="/wishlist" component={WishlistPage} />
          <Route path="/forgot-password" component={ForgetPassword} />
          <PrivateRoute path="/reset" component={ResetPassword} />
          <Route path="/new-password" component={SignIn} />

          <PrivateRoute exact path="/reset-password/:id/:token">
            <Reset />
          </PrivateRoute>

          <PrivateRoute path="/reset/:token">
            <NewPassword />
          </PrivateRoute>

          <Route path="/checkout" component={CheckOutPage} />
          <PrivateRoute path="/account/orders" component={OrderPage} />
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />
          <Route
            path="/:productSlug/:productId/p"
            component={ProductDetailsPage}
          />
          <Route path="/:slug" component={ProductListPage} />

          <Route path="/men" exact component={Men} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
