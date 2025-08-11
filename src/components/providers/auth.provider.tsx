"use client";
import React from "react";
import { TokenManager } from "utils/token";
import { useTokenListener } from "hooks/token.hook";

interface IAuthContext {
  logged?: boolean;
  setLogged: React.Dispatch<React.SetStateAction<IAuthContext["logged"]>>;
}

const AuthContext = React.createContext<null | IAuthContext>(null);
export const useAuthContext = () => React.useContext(AuthContext)!;

export default function AuthProvider(properties: React.PropsWithChildren) {
  const [logged, setLogged] = React.useState<IAuthContext["logged"]>(true);

  useTokenListener();
  React.useEffect(() => {
    const token = TokenManager.getAccessToken();
    setLogged(token ? !TokenManager.isTokenExpired(token) : false);
  }, []);

  return (
    <AuthContext.Provider value={{ logged, setLogged }}>
      {properties.children}
    </AuthContext.Provider>
  );
}
