import React from "react";

//Libreria para formato de números
import numeral from "numeral";

const CoinTable = ({ coins }) => {
  return (
    <div className="table-coin table-responsive">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#Rank</th>
            <th scope="col" className="text-logo">
              Name
            </th>
            <th scope="col">Price</th>
            <th scope="col">Market cap</th>
            <th scope="col">VWAP(24)</th>
            <th scope="col">Supply</th>
            <th scope="col">Volumen24h</th>
            <th scope="col">Change24h</th>
          </tr>
        </thead>
        <tbody>
          {coins.datos.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.rank}</td>
              <td>{coin.name}</td>
              <td>{numeral(coin.priceUsd).format("$0,0.00")}</td>
              <td>{numeral(coin.marketCapUsd).format("($ 0.00 a)")}</td>
              <td>{numeral(coin.vwap24Hr).format("$0,0.00")}</td>
              <td>{numeral(coin.supply).format("0.0a")}</td>
              <td>{numeral(coin.volumeUsd24Hr).format("($ 0.00 a)")}</td>
              <td
                className={
                  coin.changePercent24Hr > 0 ? "text-success" : "text-danger"
                }
              >
                {parseFloat(coin.changePercent24Hr).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
