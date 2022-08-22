import { createContext } from "react";
import { User } from "../../types/User";

export type UsersContextType = {
  users: User[];
}

export const UsersContext = createContext<UsersContextType | null>(null!);