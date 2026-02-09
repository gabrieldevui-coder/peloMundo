import React from 'react';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';
import Error from '../helper/error';
import { dataUser } from '../../UserContext';
import Title from '../Title';
const LoginForm = () => {
  const { userLogin, erro, loading } = React.useContext(dataUser);
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    const passwordIsValid = password.validate();
    const usernameIsValid = username.validate();
    event.preventDefault();
    if (usernameIsValid && passwordIsValid) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <div className={`${styles.wrapper} animaLeft-Container`}>
      <Title title="Entrar" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input type="text" {...username} label="usuário" id="username" />
        <Input {...password} type="password" label="senha" id="password" />
        <Link className={styles.perdeu} to="/login/perdeu">
          Perdeu senha ?
        </Link>
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error erro={erro} />
      </form>
      <Link className={styles.cadastrar} to="/login/criar">
        não tem conta ? <span>cadastre-se</span>
      </Link>
    </div>
  );
};

export default LoginForm;
