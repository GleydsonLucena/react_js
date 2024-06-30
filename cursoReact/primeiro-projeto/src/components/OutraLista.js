import React from 'react'

const OutraLista = ({ items }) => {
  return (
    <>
      <h3>Lista de coisas boas:</h3>
      {items.length > 0
        ? (items.map((item, index) => <p key={index}>{item}</p>))
        : <p>nada</p>
      }
    </>
  )
}

export default OutraLista