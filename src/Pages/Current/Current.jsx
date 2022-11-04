import React from "react";
import { cutNum } from "../../Utils/utils";

const Current = ({currentList}) => {

  return (
    <div className="current">
      <div className="current__title">Курс на: {currentList.Date}</div>
      <div className="current__descr">
        <div className="current__default">Базовая валюта: RUB</div>
        <div>1 USD = {currentList.Valute.USD.Value} RUB</div>
        <div>1 EUR = {currentList.Valute.EUR.Value} RUB</div>
        <br />
        <div>USD/EUR = {cutNum(currentList.Valute.USD.Value, currentList.Valute.EUR.Value)} EUR</div>
        <div>EUR/USD = {cutNum(currentList.Valute.EUR.Value, currentList.Valute.USD.Value)} USD</div>
      </div>
    </div>
  );
};

export default Current;
