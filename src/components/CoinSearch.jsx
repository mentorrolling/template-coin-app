import React from "react";

const CoinSearch = () => {
  return (
    <div className="row mb-5">
      <div className="col col-md-6 offset-md-3">
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Buscar cripto..."
              className="form-control"
             
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoinSearch;
