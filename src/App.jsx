import React, { useState, useEffect } from "react";
import CoinNavbar from "./components/CoinNavbar";
import CoinTable from "./components/CoinTable";
import CoinSearch from "./components/CoinSearch";
//Funciones Helpers
import { getCoins, searchCoins } from "./helpers/coinsFetch";

const App = () => {
  const [coins, setCoins] = useState({
    datos: [],
    loading: true,
    update: false,
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    //acciones
    getCoins().then((respuesta) => {
      setCoins({
        datos: respuesta,
        loading: false,
        update: true,
      });

      setInputValue("");
    });
  }, [coins.update]);

  useEffect(() => {
    searchCoins(inputValue).then((respuesta) => {
      setCoins({
        datos: respuesta,
        loading: false,
        update: true,
      });
    });
  }, [inputValue]);

  return (
    <>
      <CoinNavbar coins={coins} setCoins={setCoins} />
      <div className="container mt-3">
        <CoinSearch inputValue={inputValue} setInputValue={setInputValue} />
        <div className="row ">
          <div className="col">
            {coins.loading ? (
              <h3 className="text-white text-center">Cargando...</h3>
            ) : (
              <CoinTable coins={coins} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
