import { createContext } from 'react';

//  Create the context
export const AuthContext = createContext();

//  Create the provider component
export const AuthContextProvider = ({ children }) => {
  //const{userId,role}=localStorage.getItem(JSON.parse(userDetails))
  const role = "employee";  
  const isAuthorized = true;

  return (
    <AuthContext.Provider value={{ role, isAuthorized }}>
      {children}  
    </AuthContext.Provider>
  );
};