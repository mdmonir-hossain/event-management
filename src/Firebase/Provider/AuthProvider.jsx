import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const authInformation = {
        name: 'ok'
    }
    return (
        <AuthContext.Provider value={authInformation}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;