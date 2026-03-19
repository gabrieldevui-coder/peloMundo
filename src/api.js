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

export const POST_PHOTO = (body, token) => {
  return {
    url: API_URL + 'api/photo',
    options: {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      method: 'POST',
      body: body,
    },
  };
};

export const PHOTOS_GET = ({ page, total, user }) => {
  return {
    url: `${API_URL}api/photo/?_page=${page}&_total=${total}&_user=${user ? user : 0}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

export const PHOTO_GET = (id) => {
  return {
    url: `${API_URL}api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};
export const PHOTO_DELETE = (id) => {
  return {
    url: `${API_URL}api/photo/${id}`,
    options: {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      method: 'DELETE',
      cache: 'no-store',
    },
  };
};
export const POST_COMMENT = (id, body) => {
  return {
    url: API_URL + `api/comment/${id}`,
    options: {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      method: 'POST',
      body: JSON.stringify(body),
    },
  };
};

export function PASSWORD_LOST(body) {
  return {
    url: API_URL + 'api/password/lost',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
export const GET_STATS = () => {
  return {
    url: `${API_URL}api/stats`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    },
  };
};
