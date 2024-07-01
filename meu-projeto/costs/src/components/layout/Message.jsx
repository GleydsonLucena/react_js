import { useState, useEffect } from 'react';
import styles from '../layout/module/Message.module.css';

const Message = ({ msg, type }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && <div className={`${styles.messsage} ${styles[type]}`}>{msg}</div>}
    </>
  )
}

export default Message