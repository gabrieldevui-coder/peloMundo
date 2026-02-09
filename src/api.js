export const API_URL = 'http://pelomundoapi.test/json/';

export const TOKEN_POST = (body) => {
  return {
    url: API_URL + 'jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const TOKEN_POST_VALIDATE = (token) => {
  return {
    url: API_URL + 'jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
};

export const GET_USER = (token) => {
  return {
    url: API_URL + 'api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
};

export const POST_USER = (body) => {
  return {
    url: API_URL + 'api/user',
    options: {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
};
