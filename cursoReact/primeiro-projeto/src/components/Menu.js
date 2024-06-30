import React from 'react'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/empresa">Empresa</Link>
      </li>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
  )
}

export default Menu