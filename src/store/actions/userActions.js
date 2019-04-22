export const ON_USER_LOGIN = 'ON_USER_LOGIN';
export const ON_USER_LOGOUT = 'ON_USER_LOGOUT';

export const doLogin = payload =>  ({
  type: ON_USER_LOGIN,
  payload
});

export const doLogout = payload => ({
  type: ON_USER_LOGOUT,
  payload
});
