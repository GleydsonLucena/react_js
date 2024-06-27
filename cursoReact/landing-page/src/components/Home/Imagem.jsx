
import PropTypes from 'prop-types'

const Imagem = props => {
  return (
    <img src={props.img} alt="" />
  )
}

Imagem.propTypes = {
  img: PropTypes.any,
}

export default Imagem