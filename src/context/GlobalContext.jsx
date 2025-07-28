import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext();

const urlApi = "https://fakestoreapi.com/products";

function GlobalProvider({ children }) {
  //prodotti Api
  //   const [api, setApi] = useState(urlApi);
  const [actData, setActData] = useState(null);

  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setActData(data);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        // api,
        // setApi,
        actData,
        setActData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("GlobalContext must be used in GlobalContext.Provider");
  return context;
}

export { GlobalProvider, useGlobalContext };
