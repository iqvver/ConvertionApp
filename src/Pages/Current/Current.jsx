import React from "react";
import { cutNum } from "../../Utils/utils";

const Current = ({ currentList, defaultCurrency, setOpen }) => {
  return (
    <div className="current" onClick={() => setOpen(false)}>
      <div className="current__title">Курс на: {currentList.Date}</div>
      {defaultCurrency === "RUB" ? (
        <DefaultRUB currentList={currentList} />
      ) : defaultCurrency === "USD" ? (
        <DefaultUSD currentList={currentList} />
      ) : (
        <DefaultEUR currentList={currentList} />
      )}
    </div>
  );
};

export default Current;

const DefaultRUB = ({ currentList }) => {
  return (
    <div className="current__descr">
      <div>1 USD = {currentList.Valute.USD.Value} RUB</div>
      <div>1 EUR = {currentList.Valute.EUR.Value} RUB</div>
      <br />
      <div>
        USD/EUR = {cutNum(currentList.Valute.USD.Value, currentList.Valute.EUR.Value)}EUR
      </div>
      <div>
        EUR/USD = {cutNum(currentList.Valute.EUR.Value, currentList.Valute.USD.Value)}USD
      </div>
    </div>
  );
};

const DefaultUSD = ({ currentList }) => {
  return (
    <div className="current__descr">
      <div>1 RUB = {cutNum(1, currentList.Valute.USD.Value)} USD</div>
      <div>
        1 EUR = {cutNum(currentList.Valute.USD.Value, currentList.Valute.EUR.Value)} USD
      </div>
    </div>
  );
};

const DefaultEUR = ({ currentList }) => {
  return (
    <div className="current__descr">
      <div>1 RUB = {cutNum(1, currentList.Valute.EUR.Value)} EUR</div>
      <div>
        1 EUR = {cutNum(currentList.Valute.EUR.Value, currentList.Valute.USD.Value)} EUR
      </div>
    </div>
  );
};
