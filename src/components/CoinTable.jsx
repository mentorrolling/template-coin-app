import React from "react";

const CoinTable = () => {
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
         
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
