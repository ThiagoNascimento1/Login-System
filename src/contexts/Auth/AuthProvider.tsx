import { useState } from "react";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element}) => {

  const [ user, setUser ] = useState<User | null>(null);
  
  const signin = (user: User) => {
    setUser(user);
  };

  const signout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, setUser, signin, signout}}>
      {children}
    </AuthContext.Provider>
  )
};