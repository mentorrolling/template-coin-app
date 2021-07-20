import React, { useState, useEffect } from "react";
import CoinTable from "./components/CoinTable";

const App = () => {
  const [coins, setCoins] = useState({
    datos: [],
    loading: true,
    update: false,
  });

  useEffect(() => {
    //acciones
    getCoins().then((respuesta) => {
      setCoins({
        datos: respuesta,
        loading: false,
        update: true,
      });

      // console.log(respuesta);
    });
  }, []);

  const getCoins = async () => {
    const resp = await fetch("https://api.coincap.io/v2/assets?limit=10");
    const informacion = await resp.json();
    // console.log(informacion.data);
    return informacion.data;
  };

  // getCoins();

  // if (coins.datos.length > 0) {
  //   console.log("Datos cargados");
  // } else {
  //   console.log("loading...");
  // }

  // coins.datos.length > 0
  //   ? console.log("Datos cargados")
  //   : console.log("loading...");

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Coin App</h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <CoinTable coins={coins} />
        </div>
      </div>
    </div>
  );
};

export default App;
