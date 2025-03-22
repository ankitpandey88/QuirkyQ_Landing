
// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     sessionStorage.getItem("isAuthenticated") === "true"
//   );
//   const [user, setUser] = useState(null);
//   const [userId, setUserId] = useState(sessionStorage.getItem("userId")); // ✅ Store user ID

//   const login = (userData) => {
//     setIsAuthenticated(true);
//     setUser(userData);
//     setUserId(userData.id); // ✅ Save ID
//     sessionStorage.setItem("isAuthenticated", "true");
//     sessionStorage.setItem("user", JSON.stringify(userData));
//     sessionStorage.setItem("userId", userData.id); // ✅ Save ID in sessionStorage
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//     setUserId(null);
//     sessionStorage.removeItem("isAuthenticated");
//     sessionStorage.removeItem("user");
//     sessionStorage.removeItem("userId"); // ✅ Clear ID on logout
//   };

//   useEffect(() => {
//     setIsAuthenticated(sessionStorage.getItem("isAuthenticated") === "true");
//     const storedUser = sessionStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//       setUserId(sessionStorage.getItem("userId")); // ✅ Load ID from sessionStorage
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, userId, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     sessionStorage.getItem("isAuthenticated") === "true"
//   );
//   const [user, setUser] = useState(null);
//   const [userId, setUserId] = useState(sessionStorage.getItem("userId"));
//   const [email, setEmail] = useState(sessionStorage.getItem("email") || "");

//   const login = (userData) => {
//     console.log("UserData received in login:", userData); // ✅ Debugging log

//     setIsAuthenticated(true);
//     setUser(userData);
//     setUserId(userData.id);
//     setEmail(userData.email); // ✅ Store email

//     sessionStorage.setItem("isAuthenticated", "true");
//     sessionStorage.setItem("user", JSON.stringify(userData));
//     sessionStorage.setItem("userId", userData.id);
//     sessionStorage.setItem("email", userData.email); // ✅ Save email in sessionStorage

//     console.log("Session Storage after login:", sessionStorage.getItem("email")); // ✅ Debugging log
//   };

//   useEffect(() => {
//     const storedUser = sessionStorage.getItem("user");
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUser(parsedUser);
//       setUserId(parsedUser.id);
//       setEmail(parsedUser.email || ""); // ✅ Retrieve email correctly
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, userId, email, login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [userId, setUserId] = useState(sessionStorage.getItem("userId") || null);
  const [email, setEmail] = useState(sessionStorage.getItem("email") || "");

  // ✅ Login function
  const login = (userData) => {
    console.log("UserData received in login:", userData);

    setIsAuthenticated(true);
    setUser(userData);
    setUserId(userData.id);
    setEmail(userData.email);

    sessionStorage.setItem("isAuthenticated", "true");
    sessionStorage.setItem("user", JSON.stringify(userData));
    sessionStorage.setItem("userId", userData.id);
    sessionStorage.setItem("email", userData.email);

    console.log("Session Storage after login:", sessionStorage.getItem("email"));
  };

  // ✅ Logout function
  const logout = () => {
    console.log("Logging out...");

    setIsAuthenticated(false);
    setUser(null);
    setUserId(null);
    setEmail("");

    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("email");

    console.log("Session Storage after logout:", sessionStorage.getItem("email"));
  };

  // ✅ Restore session from storage
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setUserId(parsedUser.id);
      setEmail(parsedUser.email || "");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, userId, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
