import React from 'react'
import Button from './evento/Button';
// import PropTypes from 'prop-types'

const Evento = props => {

  const meuEvento = () => {
    console.log('Ativando o evento');
  }

  const segundoEvento = () => {
    console.log('Ativando o segundo evento!')
  }


  return (
    <>
      <p>Click para disparar o evento!</p>
      <Button event={meuEvento} text="Primeiro evento" />
      <button onClick={meuEvento}>Ativar!</button>
      <button onClick={segundoEvento}>Segundo evento!</button>
    </>
  )
}

// Evento.propTypes = {}

export default Evento