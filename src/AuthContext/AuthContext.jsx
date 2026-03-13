// import { createContext } from 'react';

// //  Create the context
// export const AuthContext = createContext();

// //  Create the provider component
// export const AuthContextProvider = ({ children }) => {
//   const{userId,role}=localStorage.getItem(JSON.parse(userDetails))
//   // const role = "employer";  
//   // const isAuthorized = true;

//   return (
//     <AuthContext.Provider value={{ role, isAuthorized }}>
//       {children}  
//     </AuthContext.Provider>
//   );
// };


import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const userId = userDetails?.userId;
  const role = userDetails?.role;

  const isAuthorized = !!userId;

  return (
    <AuthContext.Provider value={{ userId, role, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};