import React, { useEffect, useState, useRef } from "react";
import Current from "./Current";
import Fetching from "../../Components/Fetching/Fetching";
import { getCurrent, getDefaultCurrency } from "../../redux/convertion-reduser";
import { connect } from "react-redux";
import { compose } from "redux";
import DropDefault from "../../Components/DropDefault/DropDefault";

//контейнерная компонента (HOС) для вывода валюты

const CorrentContainer = (props) => {

  //хук загрузки всех валют
  useEffect(() => {
    props.getCurrent();
  }, []);

  //работа с базоми валютами
  const [baseСurrency, switchBase] = useState(props.defaultCurrency);
  const [isOpen, setOpen] = useState(false);
  let handleDefault = (event) => {
    switchBase(event.target.innerText);
    setOpen(false);
  };

  useEffect(() => {
    props.getDefaultCurrency(baseСurrency);
  }, [baseСurrency]);

  return (
    <>
      {props.currentList.length === 0 ? (
        <Fetching />
      ) : (
        <>
          <div className="current__default">
            Базовая валюта:
            <DropDefault
              isOpen={isOpen}
              baseСurrency={baseСurrency}
              handleDefault={handleDefault}
              setOpen={setOpen}
            />
          </div>
          <Current
            currentList={props.currentList}
            defaultCurrency={props.defaultCurrency}
            setOpen={setOpen}
          />
        </>
      )}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    //получение данных из стейта
    currentList: state.convertionPage.currentList,
    defaultCurrency: state.convertionPage.defaultCurrency,
    isFetching: state.convertionPage.isFetching,
  };
};
export default compose(
  connect(mapStateToProps, { getCurrent, getDefaultCurrency })
)(CorrentContainer);
