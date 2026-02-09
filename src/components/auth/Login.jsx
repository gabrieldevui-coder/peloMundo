import React from 'react';
import styles from './Login.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgetForm from './ForgetForm';
import ResetForm from './ResetForm';

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.form}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<RegisterForm />} />
          <Route path="/perdeu" element={<ForgetForm />} />
          <Route path="/resetar" element={<ResetForm />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
