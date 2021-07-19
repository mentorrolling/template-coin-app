import React from "react";

const CoinNavbar = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div>
            <img className="img-logo" src="" alt="Logo" />
            <span className="navbar-brand">CryptoApp</span>
          </div>

          <button
            className=" btn btn-coin"
            
          >
            Actualizar
          </button>
        </div>
        <button
          className="btn"
         
        >
          Salir
        </button>
      </nav>
    </div>
  );
};

export default CoinNavbar;
