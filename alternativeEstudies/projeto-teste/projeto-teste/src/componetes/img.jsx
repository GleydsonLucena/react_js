import propTypes from 'reareact-dom';
const Img = ({ url, description }) => {
  return (
    <>
      <img src={url} alt={description} />
    </>
  )
}
Img.prop = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Img
