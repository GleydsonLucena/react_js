import React from 'react'
import PropTypes from "prop-types";

const Item = ({ marca, AnoLancamento }) => {

  return (
    <li>{marca} - {AnoLancamento}</li>
  )
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  AnoLancamento: PropTypes.number.isRequired
}

  // Item.defaultProps = {
  // marca: "Faltou a marca!",
  // AnoLancamento: 0,
  // }

export default Item