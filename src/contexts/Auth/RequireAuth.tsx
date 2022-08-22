import { useContext } from "react";
import { Login } from "../../pages/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {

  const auth = useContext(AuthContext);
  if (!auth.user) {
    return (
      <>
      <h1 style={{textAlign: "center", color: "#fff"}}>Faça login ou cadastre-se para prosseguir!</h1>
      <Login />
      </>
    )
  }
  return children;
};