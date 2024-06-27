// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./ListItem.scss";

// eslint-disable-next-line react/prop-types
const ListItem = ({ text }) => {
  return (
    <li className="listItem">
      {text}
    </li>
  )
}

export default ListItem