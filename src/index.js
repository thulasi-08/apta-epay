import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Layout from "./structure/header/nav-bar";
import Footer from "./structure/footer/footer";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Booking from "./components/booking-form/booking";
import Departures from "./components/search/departures";
import Returns from "./components/search/returns";
import CheckOut from './components/checkout/checkout';
import Confirmation from './components/confirmation/confirmation';


export default function App() {
  return (
    <BrowserRouter>
      <Layout />
      <div className='fixedHeight'>
        <Routes>
          <Route index element={<Booking />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="booking" element={<Booking />} /> 
          <Route path="book-departure" element={<Departures />} /> 
          <Route path="book-return" element={<Returns />} /> 
          <Route path="pay-direct/tranfertypee/BOFEAMeDICVIS/KLIKJJeikm2390-02PLrs_erer" element={<CheckOut />} /> 
          <Route path="confirmation" element={<Confirmation />} /> 

        </Routes>
      </div>
      <hr/>
      <Footer />
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

