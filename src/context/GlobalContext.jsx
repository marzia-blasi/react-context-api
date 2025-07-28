import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const urlApi = "https://fakestoreapi.com/products";
  //prodotti Api
  const [api, setApi] = useState(urlApi);
  const [actData, setActData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setActData(data);
      });
  }, [api]);

  return (
    <GlobalContext.Provider
      value={{
        api,
        setApi,
        actData,
        setActData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext };
