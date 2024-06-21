/* eslint-disable no-unused-vars */
import { React, useState} from 'react'
import "./Contador.css"

const Contador = props => {

 const [contador, setContador] = useState(0);

  const adicionar = () => {
   setContador(contador + 1);
  }


  return (
    <div className="container-contador">
      <div>{contador}</div>
      <button onClick={adicionar} className="btn">Adicionar</button>
    </div>
  )
}

export default Contador