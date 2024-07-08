import { PropTypes } from 'prop-types';
import '../../assets/styles/Container.sass';


const Container = ({ customClass, children }) => {
  return (
    <div className={`main-container ${customClass}`}>
      {children}
    </div>
  )
}

Container.propTypes = {
  customClass: PropTypes.string,
  children: PropTypes.node.isRequired,
}


export default Container