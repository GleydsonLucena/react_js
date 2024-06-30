import React from 'react'

const Saldacao = ({ nome }) => {

  const gerarSaldacao = (algumNome) => `Saldações ${algumNome}, bem vindo!`

  return (
    (!nome)
      ? <p>Digite seu nome no campo!</p>
      : <p>{gerarSaldacao(nome)}</p>
  )

}

export default Saldacao