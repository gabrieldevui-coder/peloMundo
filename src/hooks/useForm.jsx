import React from 'react';

const types = {
  email: {
    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: 'Preencha um email valido',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;

    if (value.length === 0) {
      setError('Preencha o campo');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  function onChange({ target }) {
    setValue(target.value);
    if (error) {
      validate(target.value);
    }
  }

  return {
    value,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: ({ target }) => validate(target.value),
  };
};

export default useForm;
