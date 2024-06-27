// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Header.scss";
import ListItem from './ListItem/ListItem';
import Button from './Button';

const Header = () => {
  return (
    <header className="headerContent">
      <h2>LOGO</h2>

      <ul className="list">
        <ListItem text={"Home"} />
        <ListItem text={"Sobre"} />
        <ListItem text={"Galeria"} />
      </ul>

      <Button text={'Contato'} className={'btn'}/>


    </header>
  )
}

export default Header