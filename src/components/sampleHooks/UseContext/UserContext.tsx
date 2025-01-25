"use client"
import { createContext, useContext, ReactNode, useState } from "react";

type userContextType = {
  user: boolean;
  login: () => void;
  logout: () => void;
};

const userContextDefaultValues: userContextType = {
  user: false,
  login: () => {},
  logout: () => {},
};

const UserContext = createContext<userContextType>(userContextDefaultValues);

export function useUser() {
  return useContext(UserContext);
}

type Props = {
  children: ReactNode;
};

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<boolean>(false);

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  const value = {
    user,
    login,
    logout,
  };

  return (
    <>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </>
  );
}
