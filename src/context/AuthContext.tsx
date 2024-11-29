import { createContext, PropsWithChildren, useContext, useState } from "react";

enum StateTest {
    'cheking',
    'login',
    'closed',
    'authenticated'
}

export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [state, setState] = useState(StateTest.cheking)
    return (<AuthContext.Provider value={{
        state: state
    }}>
        {children}
    </AuthContext.Provider>)
}   