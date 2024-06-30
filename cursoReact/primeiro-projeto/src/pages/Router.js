import React from 'react'
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import Footer from './components/layout/Footer';

const Routers = () => {

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contact />} />
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routers