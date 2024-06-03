import React, {createContext, ReactNode, useContext, useState } from 'react';

type Coins = {
    myCoins: number;
    setMyCoins: React.Dispatch<React.SetStateAction<number>>;
}

const CoinsBalance = createContext<Coins | null>(null);

export const useBalance = () => {
    const context = useContext(CoinsBalance);
    
    return context;
}


export const CoinsProvider: React.FC = ({  }) => {
    const [myCoins, setMyCoins] = useState(500);


    return (
        <CoinsBalance.Provider value={{myCoins, setMyCoins}}>

        </CoinsBalance.Provider>
    );
};