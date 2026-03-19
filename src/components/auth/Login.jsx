import React from 'react';
import styles from './Login.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgetForm from './ForgetForm';
import ResetForm from './ResetForm';
import NotFound from '../NotFound';
import Head from '../helper/Head';

const Login = () => {
  return (
    <section className={styles.login}>
      <Head
        title="Login"
        description="Entre ou cadastre-se para poder comentar ou postar fotos da sua viagem"
      />
      <div className={styles.form}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<RegisterForm />} />
          <Route path="/perdeu" element={<ForgetForm />} />
          <Route path="/resetar" element={<ResetForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
