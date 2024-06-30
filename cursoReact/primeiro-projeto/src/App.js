import React from 'react'
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';


const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App