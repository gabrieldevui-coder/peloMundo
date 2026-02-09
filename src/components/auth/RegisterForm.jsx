import React from 'react';
import Title from '../Title';
import styles from './LoginForm.module.css';
import useForm from '../../hooks/useForm';
import Input from '../forms/Input';
import Button from '../forms/Button';
import { Link } from 'react-router-dom';
import { POST_USER } from '../../api';
import { dataUser } from '../../UserContext';
import useFetch from '../../hooks/useFetch';
import Error from '../helper/error';
const RegisterForm = () => {
  const { userLogin } = React.useContext(dataUser);
  const username = useForm();
  const password = useForm();
  const email = useForm('email');
  const { error, resquest, loading } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = POST_USER({
      password: password.value,
      email: email.value,
      username: username.value,
    });
    const { response } = await resquest(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }
  return (
    <section className={`${styles.wrapper} animaLeft-Container`}>
      <Title title="Cadastrar" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input type="text" {...username} label="Usuário" id="username" />
        <Input type="email" {...email} label="Email" id="email" />
        <Input {...password} type="password" label="Senha" id="password" />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}

        <Error erro={error} />
      </form>
      <Link className={styles.cadastrar} to="/login">
        já tem conta ? <span>entrar</span>
      </Link>
    </section>
  );
};

export default RegisterForm;
