import http from './httpService';
import { getJwt } from './authService';

const apiEndpoint = '/users';

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getJwt()}`,
  },
};

export function signup(user) {
  return http.post(
    apiEndpoint + '/signup',
    {
      firstName: user.firstName,
      lastName: user.lastName,
      identityNumber: user.identityNumber,
      email: user.email,
      password: user.password,
    },
    config
  );
}

export function getUserProfile(id) {
  return http.get(`${apiEndpoint}/${id}/profile`, config);
}

export function updateUserProfile(data, id) {
  return http.patch(
    `${apiEndpoint}/${id}/profile`,
    {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      address: data.address,
      country: data.country,
    },
    config
  );
}

export function getUsers(currentPage) {
  return http.get(`${apiEndpoint}?pageNumber=${currentPage}`, config);
}

export function getUserById(id) {
  return http.get(apiEndpoint + '/' + id, config);
}

export function adminUpdateUser(user, id) {
  return http.put(
    apiEndpoint + '/' + id,
    {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      country: user.country,
      level: user.level,
      isAdmin: user.isAdmin,
    },
    config
  );
}

export function deleteUser(id) {
  return http.delete(apiEndpoint + '/' + id, config);
}

export function resetPassword(email) {
  return http.post(apiEndpoint + '/reset-password', { email }, config);
}

export function getNewPassword(token) {
  return http.get(`${apiEndpoint}/new-password/${token}`);
}

export function setNewPassword(userId, passwordToken, password) {
  return http.post(
    `${apiEndpoint}/new-password`,
    { userId, passwordToken, password },
    config
  );
}
