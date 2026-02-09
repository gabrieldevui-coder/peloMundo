import React from 'react';
import styles from './Title.module.css';
const Title = ({ title, subtitle }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.subtitle}>{subtitle}</span>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Title;
