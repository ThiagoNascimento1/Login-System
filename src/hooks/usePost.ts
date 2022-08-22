import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { User } from "../types/User";

export const usePost = (url: string, user: User) => {

  const auth = useContext(AuthContext);

  const postData = async () => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    
    const json = await res.json();
    auth.setUser(json);
    console.log(auth.user);
  };
  postData();
  
};