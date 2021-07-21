const limite = 10;

export const getCoins = async () => {
  const resp = await fetch(`https://api.coincap.io/v2/assets?limit=${limite}`);
  const informacion = await resp.json();
  // console.log(informacion.data);
  return informacion.data;
};

export const getSearchCoin = async (parametro) => {
  const resp = await fetch(
    `https://api.coincap.io/v2/assets?limit=${limite}&search=${parametro}`
  );
  const resultado = await resp.json();

  return resultado.data;
};
