import React from 'react';
import Error from '../helper/Error';
import styles from './TextArea.module.css';
const TextArea = ({
  id,
  value,
  onChange,
  error,
  label,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <label htmlFor={id}>{label}</label>
        <textarea
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        ></textarea>
        {error && <Error erro={error} />}
      </div>
    </>
  );
};

export default TextArea;
