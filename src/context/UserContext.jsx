/* import { createContext, useState } from 'react';
 
export const UserContext = createContext();

const getInitialUser = () => {
  try {
    const stored = localStorage.getItem("user");
    if (!stored) {
      return { email: "", accessToken: "" };
    }

    const parsed = JSON.parse(stored);
    return {
      email: parsed.email || "",
      accessToken: parsed.accessToken || ""
    };
  } catch (e) {
    console.error("Error leyendo user de localStorage", e);
    return { email: "", accessToken: "" };
  }
};

export default function UserProvider ({children}) {

    const [user, setUser] = useState(getInitialUser)

    const saveUser = (email,accessToken) => {
        localStorage.setItem("user",JSON.stringify({email,accessToken}))
        setUser({
            email,
            accessToken

        })
    }

    const deleteUser = () => {
        localStorage.setItem("user",JSON.stringify({email:"",accessToken:""}))
        setUser({
                    email:"",
                    accessToken:""
        })
    }

    return (
        <UserContext.Provider value={{user, saveUser, deleteUser}} >
            {children}
        </UserContext.Provider>
    )
} */