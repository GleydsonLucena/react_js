import React from 'react'
import styles from "../layout/module/SubmitButton.module.css";

const SubmitButton = ({ text }) => {
  return (
    <div>
      <button className={styles.btn} type='submit'>{text}</button>
    </div>
  )
}

export default SubmitButton