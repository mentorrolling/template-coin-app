import React, { useState, useEffect } from "react";
import CoinTable from "./components/CoinTable";
import CoinNavbar from "./components/CoinNavbar";
import CoinSearch from "./components/CoinSearch";

import { getCoins, getSearchCoin } from "./helpers/CoinsFetch";

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
      // console.log(respuesta);
    });
  }, [coins.update]);

  useEffect(() => {
    getSearchCoin(inputValue).then((resultado) => {
      // setCoins({
      //   datos: resultado,
      //   loading: false,
      //   update: true,
      // });

      setCoins((c) => ({ ...c, datos: resultado }));
    });
  }, [inputValue]);

  return (
    <>
      <CoinNavbar setCoins={setCoins} coins={coins} />
      <div className="container my-4">
        <CoinSearch inputValue={inputValue} setInputValue={setInputValue} />
        {/* <div className="row">
        <div className="col">
          <h1>Coin App</h1>
        </div>
      </div> */}
        <div className="row mt-2">
          <div className="col">
            <CoinTable coins={coins} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
