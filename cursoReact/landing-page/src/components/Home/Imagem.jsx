import "./Home.scss"
import PropTypes from 'prop-types'

const Imagem = ({ img, className, alt }) => {
  return (
    <div className="img-container">
      <img className={className} src={img} alt={alt} />
    </div>
  )
}

Imagem.propTypes = {
  img: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

export default Imagem