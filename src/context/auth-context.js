import React from 'react';

const AuthContext = React.createContext({
  currentUser: {},
  register: (firstname, lastname, email, password) => {},
  login: (email, password) => {},
  logout: () => {},
});
export default AuthContext;
