import Keys from './Keys.jsx';
import "../assets/scss/global.scss";


const AllKeys = () => {
  
  

  return (
    <>
      <Keys operator='C'/>
      <Keys operator='%' className='operator-calc'/>
      <Keys operator='+' className='operator-calc'/>
      <Keys operator='7'/>
      <Keys operator='8'/>
      <Keys operator='9'/>
      <Keys operator='x' className='operator-calc'/>
      <Keys operator='4'/>
      <Keys operator='5'/>
      <Keys operator='6'/>
      <Keys operator='-' className='operator-calc'/>
      <Keys operator='1'/>
      <Keys operator='2'/>
      <Keys operator='3'/>
      <Keys operator='+' className='operator-calc'/>
      <Keys operator='0'/>
      <Keys operator=','/>
      <Keys operator='=' className='operator-calc'/>
    </>
  )
}

export default AllKeys