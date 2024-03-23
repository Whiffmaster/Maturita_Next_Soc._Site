"use client"
import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {Socket} from "socket.io-client";


interface SocketContextValue {
  socket: Socket | undefined;
  setSocket: React.Dispatch<React.SetStateAction<Socket>>
}

const Context = createContext<SocketContextValue | undefined>(undefined);

export const useIoContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useIoContext must be used within a IoContextProvider');
  }
  return context;
};

export const IoContext  =( {children } : {children: ReactNode}) => {
  const [socket, setSocket] = useState<Socket|undefined>();

  return (
    <Context.Provider value={{socket, setSocket}}>
      {children}
    </Context.Provider>
  );
};