import React from 'react'
import PropTypes from 'prop-types'

const Pessoa = ({ nome, idade, foto, profissao }) => {
    return (
        <div>

            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>

        </div>
    )
}

Pessoa.propTypes = {}

export default Pessoa