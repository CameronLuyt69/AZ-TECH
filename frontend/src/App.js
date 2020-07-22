import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import ProductDisplayScreen from './screens/ProductDisplayScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';


function App() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <BrowserRouter>
      <div className="grid-container">

        <header>
          <div className="logos">
            <a href="#" data-target="slide-out" className="sidenav-trigger bolder"><i className="fas fa-bars" aria-hidden="true"></i></a>
            <Link to="/">AZ-TECH</Link>
          </div>
          <div className="navbar">
            <ul>
              <li><i className="fas fa-home"></i></li>
              <li><Link to="/cart/:id"><i className="fas fa-shopping-cart"></i></Link></li>
            {userInfo && userInfo.isAdmin && (
              <>
              <li><Link to="/orders"><i className="fas fa-tasks"></i></Link></li>
              <li><Link to="/products"><i className="fas fa-warehouse"></i></Link></li>
              </>
            )}
            {userInfo ? (
              <li><Link to="/profile"><i className="fas fa-user"></i></Link></li>
            ) : (
              <li><Link to="/signin"><i className="fas fa-sign-in-alt"></i></Link></li>
            )}
            </ul>
          </div>
        </header>
              
        <ul id="slide-out" className="sidenav">
              <div className="header black card-panel indigo-text text-darken-2"><h4>Shopping Categories</h4></div>
              <li>
                <Link to="/category/Phones">Phones</Link>
              </li>
              <li>
                <Link to="/category/Laptops">Laptops</Link>
              </li>
        </ul>

        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={ProductDisplayScreen} />
            <Route path="/" exact={true} component={ProductDisplayScreen} />
          </div>
        </main>
        <footer className="footer">
          <div className="foot1">

            <div className="footy">
              <h3>My Acount</h3>
              <div className="acc">
                <div>Profile</div>
                <div>Shopping Cart</div>
              </div>
            </div>

            <div className="footy">
              <h3>Information</h3>
              <div className="infomo">
                <div>Terms of use</div>
                <div>Privacy Policy</div>
                <div>Delivery Terms and Conditions</div>
              </div>
            </div>

            <div className="footy">
              <h3>Contact Us</h3>
              <div className="socials">
                <a href="https://www.facebook.com/cameron.luyt.7" className="fa fa-facebook-square"></a>
                <a href="https://www.instagram.com/camer0n1que/" className="fa fa-instagram"></a>
                <a href="https://github.com/CameronLuyt69" className="fa fa-github"></a>
                <a href="https://www.linkedin.com/in/cameron-luyt-138b441a9/" className="fa fa-linkedin"></a>
                <a href="https://twitter.com/CameronLuyt69" className="fa fa-twitter"></a>
              </div>
            </div>

          </div>
          <div className="foot2">© 2018 AZ-TECH | Designed and Developed By Cameron Luyt</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}


export default App;
