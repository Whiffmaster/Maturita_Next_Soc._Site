"use client"
import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {Posts} from "../../models/Post";



export interface DummyPost {
    _id: string;
    content: string;
}


interface FeedContextValue {
    feed: Posts[] | DummyPost[];
    setFeed: React.Dispatch<React.SetStateAction<Posts[] | DummyPost[]>>
}

const Context = createContext<FeedContextValue | undefined>(undefined);

export const useFeedContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useFeedContext must be used within a MyContextProvider');
    }
    return context;
};

export const FeedContext  =( {children } : {children: ReactNode}) => {
    const [feed, setFeed] = useState<Posts[] | DummyPost[]>([]);
    useEffect(() => {
        if (!feed || feed.length == 0) setFeed([{
            _id: "-1",
            content: "Found nothing!",
        }])

    }, [feed])

    return (
        <Context.Provider value={{feed, setFeed}}>
            {children}
        </Context.Provider>
    );
};