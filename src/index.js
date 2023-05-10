import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Layout from "./structure/header/nav-bar";
import Footer from "./structure/footer/footer";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Booking from "./components/booking/booking";
import Departures from "./components/search/departures";
import Returns from "./components/search/returns";
import ContactForm from './components/contact-us/contact-us';
import CheckOut from './components/checkout/checkout';



export default function App() {
  return (
    <BrowserRouter>
      <Layout />
      <div className='fixedHeight'>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="booking" element={<Booking />} /> 
          <Route path="book-departure" element={<Departures />} /> 
          <Route path="book-return" element={<Returns />} /> 
          <Route path="contact-us" element={<ContactForm />} /> 
          <Route path="pay-direct/tranfertypee/BOFEAMeDICVIS/KLIKJJeikm2390-02PLrs_erer" element={<CheckOut />} /> 
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

