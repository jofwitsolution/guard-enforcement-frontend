import jwtDecode from 'jwt-decode';
import http from './httpService';

const apiEndPoint = '/auth/login';
const tokenKey = 'token';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export async function login(email, password) {
  const { data } = await http.post(apiEndPoint, { email, password }, config);
  localStorage.setItem(tokenKey, data.token);
}

// to login immediately after signup
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

// to check if user is logged in
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    // console.log(jwtDecode(jwt));
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

const authService = {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};

export default authService;
