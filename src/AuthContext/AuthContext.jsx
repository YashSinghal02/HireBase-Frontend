// import { createContext } from "react";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const userDetails = JSON.parse(localStorage.getItem("userDetails"));

//   const userId = userDetails?.userId;
//   const role = userDetails?.role;

//     const isAuthorized = !!userDetails; 

//   return (
//     <AuthContext.Provider value={{ userId, role, isAuthorized }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(() => {
    return JSON.parse(localStorage.getItem("userDetails"));
  });

  const userId = userDetails?.userId;
  const role = userDetails?.role;
  const name = userDetails?.name;   // store name
  const email = userDetails?.email; // store email
  const phone = userDetails?.phone; // store phonenumber
  const isAuthorized = !!userDetails;

  const login = (details) => {
    localStorage.setItem("userDetails", JSON.stringify(details));
    setUserDetails(details);
  };

  const logout = () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("accessToken");
    setUserDetails(null);
  };

  return (
    <AuthContext.Provider value={{ userId, role, name, email, userDetails, isAuthorized, login, logout, phone, setUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};