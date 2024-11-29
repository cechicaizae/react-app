import { createContext, PropsWithChildren, useContext } from "react";

export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }: PropsWithChildren) => {
    return (<AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>)
}   