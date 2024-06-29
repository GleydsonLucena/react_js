import { useState } from "react";
import PropTypes from 'prop-types'
import "../assets/scss/global.scss";

const Keys = ({ operator, className = '' }) => {
  
  const [calc, setCalc] = useState('');

  return (
    <div onChange={(e) => setCalc(e.target.value)} className={'keys' + ' ' + className}> <span>{ operator }</span> </div>
  )
}

Keys.propTypes = {
  operator: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Keys