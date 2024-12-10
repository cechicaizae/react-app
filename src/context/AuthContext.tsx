import { createContext, PropsWithChildren, useContext, useState } from "react";

enum StateTest{
    'checking',
    'login',
    'closed',
    'autenticated'
}



export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
const [state,useState]= useState(StateTest.checking);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
