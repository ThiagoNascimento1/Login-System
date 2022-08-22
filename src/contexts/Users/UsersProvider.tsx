import { url } from "../../data/urls";
import { useFetch } from "../../hooks/useFetch";
import { UsersContext } from "./UsersContext";

export const UsersProvider = ({ children }: { children: JSX.Element}) => {

  const { data: users } = useFetch(url);

  return (
    <UsersContext.Provider value={{ users }}>
      { children }
    </UsersContext.Provider>
  )
};