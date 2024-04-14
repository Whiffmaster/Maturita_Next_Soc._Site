"use client"
import React, {createContext, ReactNode, useContext, useState} from "react";
import {Users} from "../../models/User";


interface UserContextValue {
  user: Users| undefined;
  setUser: React.Dispatch<React.SetStateAction<Users>>
}

const Context = createContext<UserContextValue | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useFeedContext must be used within a MyContextProvider');
  }
  return context;
};

export const UserContext  =( {children } : {children: ReactNode}) => {
  const [user, setUser] = useState<Users>();

  return (
    <Context.Provider value={{user, setUser}}>
  {children}
  </Context.Provider>
);
};