import React from 'react'

const SeuNome = ({ setNome }) => {

  return (
    <div>
      <p>Digite seu nome:</p>
      <input type='text' placeholder='Qual é o seu nome?' onChange={(e) => setNome(e.target.value)} />
      {console.log(SeuNome)}
    </div>
  )
}

export default SeuNome