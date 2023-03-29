import React, { createContext, useContext, useState } from 'react';

type StateType<T> = [T, React.Dispatch<React.SetStateAction<T>>];
type ContextType = {
    username: StateType<string>;
    isAuthenticated: StateType<boolean>;
};

export const MyAccountContext = createContext<ContextType>({} as any);

export const useMyAccount = () => useContext(MyAccountContext);

interface Props {
    children?: React.ReactNode;
}

export const MyAccountProvider: React.FC<Props> = ({
    children,
}) => {
   
    const username = useState<string>("");
    const isAuthenticated = useState<boolean>(false);

    return (
        <MyAccountContext.Provider
            value={{
                username,
                isAuthenticated
            }}
        >
            {children}
        </MyAccountContext.Provider>
    );
};
