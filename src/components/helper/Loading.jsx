import React from 'react';
import styles from './Loading.module.css';
import LoadingIcon from '../../assets/loading.svg?react';

const Loading = () => {
  return (
    <div className={styles.container}>
      <LoadingIcon className={styles.icon} />
    </div>
  );
};

export default Loading;
