import React, { createContext, useContext, useEffect, useState } from 'react'

const Crypto = createContext();

const CryptoContext = ({children}) => {
    
    const [currency, setcurrency] = useState("INR")
    const [currencySymbol, setcurrencySymbol] = useState("₹")

    useEffect(() => {
        if(currency === "INR") setcurrencySymbol("₹")
        else if (currency === "USD") setcurrencySymbol("$")
     
    }, [currency])
    

  

  return (
    <Crypto.Provider value={{currency, currencySymbol, setcurrency}} >
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContext;

export const CryptoState = () =>{
  return useContext(Crypto);
}