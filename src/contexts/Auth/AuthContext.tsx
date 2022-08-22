import { createContext } from "react";
import { User } from "../../types/User";

export type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
  signin: (user: User) => void;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);