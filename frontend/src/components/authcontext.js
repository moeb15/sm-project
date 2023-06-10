import axios from "axios";
import { createContext } from "react";
 
const AuthContext = createContext({});
 
export const AuthContextProvider = ({children}) => {
  const login = async (payload) => {
    await axios.post("http://127.0.0.1:5000/token", payload,{
        withCredentials:true,
    });
  };
  return (
    <AuthContext.Provider value={{login}}>
        {children}
    </AuthContext.Provider>);
};
 
export default AuthContext;