// src/utils/auth.js

export const setAuthUser = (user) => {
  localStorage.setItem('authUser', JSON.stringify(user));
  window.dispatchEvent(new Event('authChange'));
};

export const removeAuthUser = () => {
  localStorage.removeItem('authUser');
  window.dispatchEvent(new Event('authChange'));
};

export const getAuthUser = () => {
  const stored = localStorage.getItem('authUser');
  return stored ? JSON.parse(stored) : null;
};
