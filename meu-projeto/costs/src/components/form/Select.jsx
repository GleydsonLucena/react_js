import React from 'react'
import styles from '../layout/module/Select.module.css';

const Select = ({ text, name, options, handleOnChange, value }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
        <option disabled>Selecione uma categoria</option>
        {options.map(value => (
          <option key={value.id} value={value.id}>{value.name}</option>
        ))}
      </select>
    </div>
  )
}

export default Select