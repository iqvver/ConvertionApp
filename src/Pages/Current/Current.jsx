import React from "react";

const Current = ({currentList}) => {
  return (
    <div className="current">
      <div className="current__title">Курс на: {currentList.Date}</div>
      <div className="current__descr">
        <div className="current__default">Базовая валюта: RUB</div>
        <div className="current__usd">1 USD = {currentList.Valute.USD.Value} RUB</div>
        <div className="current__eur">1 EUR = {currentList.Valute.EUR.Value} RUB</div>
      </div>
    </div>
  );
};

export default Current;
