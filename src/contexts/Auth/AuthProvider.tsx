import { useState } from "react";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";
import { useFetch } from "../../hooks/useFetch";
import { url } from "../../data/urls";

export const AuthProvider = ({ children }: { children: JSX.Element}) => {

  const [ user, setUser ] = useState<User | null>(null);
  const { data } = useFetch(url);
  
  const signin = (email: string, password: string) => {
    const res = data.some((user: User) => {
      if (user.email === email && user.password === password) {
        setUser(user);
        return true;
      } else {
        return false;
      }
    });
    return res ? true : false;
  };

  const signout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, signin, signout}}>
      {children}
    </AuthContext.Provider>
  )
};