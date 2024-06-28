import PropTypes from 'prop-types'

const Button = ({ className, text }) => {
  return (
    <div className={className}>
      {text}
    </div>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
}

export default Button