import { createContext, useState } from "react";
// ye store hai jismai data hai 
export const MyStore = createContext();

// make a provider/shopkeeper of our store who handle data and serves to the customers
export const ContextProvider = ({children}) => {
     const [centralValue, setCentralValue] = useState("me context se hu")
    return <MyStore.Provider value={{ centralValue, setCentralValue }}>{children}</MyStore.Provider>
}
