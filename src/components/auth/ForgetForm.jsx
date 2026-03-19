import React from 'react';
import styles from './ForgetForm.module.css';
import Input from '../forms/Input';
import useForm from '../../hooks/useForm';
import Error from '../helper/Error';
import Button from '../forms/Button';
import useFetch from '../../hooks/useFetch';
import { PASSWORD_LOST } from '../../api';

const ForgetForm = () => {
  const Email_or_Username = useForm();
  const { resquest, data, loading, error } = useFetch();
  async function handleSubmit(event) {
    event.preventDefault();
    // if (Email_or_Username.validate()) {
    //   const { url, options } = PASSWORD_LOST({
    //     login: Email_or_Username.value,
    //     url: window.location.href.replace('perdeu', 'resetar'),
    //   });
    //   const { json } = await resquest(url, options);
    // }
  }
  return (
    <section className={styles.lost}>
      <h1 className="title">Perdeu a senha ?</h1>
      {data ? (
        data
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label="Email / Usuário"
            id="email_or_username"
            {...Email_or_Username}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
        </form>
      )}

      <Error erro={error} />
    </section>
  );
};

export default ForgetForm;
