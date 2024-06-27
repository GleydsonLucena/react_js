/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import "./Header.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'


const Button = ({ text, className }) => {
  return (
    <button className={className}>
      <div className="btn-face-blue">
        {text}
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </div>
      <div className="btn-face-gradient">
        {text}
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </div>
    </button >
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Button
