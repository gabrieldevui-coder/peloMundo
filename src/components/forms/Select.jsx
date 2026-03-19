import React from 'react';
import Error from '../helper/Error';
import styles from './Select.module.css';
const Select = ({ options, label, value, error, onChange, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <select onBlur={onBlur} value={value} onChange={onChange}>
        <option value="" disabled>
          {label}
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {error && <Error erro={error} />}
    </div>
  );
};

export default Select;
