import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import './index.css';
import Layout from "./structure/header/nav-bar";
import Footer from "./structure/footer/footer";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Contact from "./pages/checkout";
import NoPage from "./pages/confirmation";

export default function App() {
  return (
    <BrowserRouter> 
    <Layout/>   
      <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
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

