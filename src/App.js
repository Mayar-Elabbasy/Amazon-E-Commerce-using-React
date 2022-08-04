import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';
import { useEffect } from 'react';
import { auth } from './firebase';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './components/ContextConfig/StateProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const promise = loadStripe('pk_test_51IFOIjEE9KsFcKpo6avN7rYiMAmiNaoXqRA2s5KRrBAZimUgs7IGOvZUPUYZAZQ47OAFoItUTd9fDmsfQutE80tS00SkPWDdXy');

function App() {

  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log("user", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
        toast.success("User Successfully Login", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        <ToastContainer />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
