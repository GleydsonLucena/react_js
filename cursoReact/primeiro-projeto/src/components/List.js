import React from 'react'
import Item from './Item'

const List = () => {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Peogeout" AnoLancamento={1985} />
        <Item marca="Mercedes" AnoLancamento={1964} />
        <Item marca="Ferrari" AnoLancamento={1925} />
        <Item />
      </ul>
    </>
  )
}

export default List