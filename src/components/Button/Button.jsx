"use client"
import styles from './Button.module.css';

const Button= ({ handleSubmit }) => {
    return <button className={styles.Button} onClick={handleSubmit} >submit</button>
};

export default Button;
