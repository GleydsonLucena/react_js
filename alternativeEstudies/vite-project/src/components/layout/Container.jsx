import '../../assets/styles/Container.sass';

const Container = props => {
  return (
    <div className={`main-container ${props.customClass}`}>
      {props.children}
    </div>
  )
}

export default Container