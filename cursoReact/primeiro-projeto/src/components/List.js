import React from 'react'
import Item from './Item'

const List = (props) => {
  return (
    < className="opa">
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Peogeout"/>
        <Item marca="Mercedes"/>
        <Item marca="Ferrari"/>
      </ul>
    </>
  )
}

export default List