import React from 'react';
import { GET_USER, TOKEN_POST, TOKEN_POST_VALIDATE } from './api';
import { useNavigate } from 'react-router-dom';

export const dataUser = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState('');
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [erro, setError] = React.useState(null);

  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setLogin(true);
    setData(json);
  }
  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: usuário inválido`);
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      getUser(token);
      navigate('/conta');
      setLogin(true);
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_POST_VALIDATE(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  function userLogout() {
    setData(null);
    setError(false);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <dataUser.Provider
      value={{ userLogin, userLogout, data, erro, loading, login }}
    >
      {children}
    </dataUser.Provider>
  );
};
