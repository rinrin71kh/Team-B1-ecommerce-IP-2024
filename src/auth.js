// src/auth.js
export const AuthService = {
    isAuthenticated: !!localStorage.getItem('authToken'),
    login(token) {
      localStorage.setItem('authToken', token);
      this.isAuthenticated = true;
    },
    logout() {
      localStorage.removeItem('authToken');
      this.isAuthenticated = false;
    },
    isLoggedIn() {
      return !!localStorage.getItem('authToken');
    },
  };
  