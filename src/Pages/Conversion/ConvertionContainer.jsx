import React, { useState, useEffect } from "react";
import Convertion from "./Convertion";
import Fetching from "../../Components/Fetching/Fetching";
import { getYourCount, getCurrent } from "../../redux/convertion-reduser";
import { connect } from "react-redux";
import { compose } from "redux";

//контейнерная компонента (HOС) для конвертации валюты,

const ConvertionContainer = (props) => {
  const [count, setCount] = useState(props.yourCount);
  let arrCount = "";
  {
    count ? (arrCount = count.toString().toUpperCase().split(" ")) : (arrCount = "");
  }

  let newConvertion = (value) => {
    setCount(value.convertionInput);
    value.convertionInput = "";
  };

  useEffect(() => {
    props.getCurrent();
  }, []);

  useEffect(() => {
    props.getYourCount(arrCount);
  }, [count]);

  return (
    <>
      {!props.currentList ? (
        <Fetching />
      ) : (
        <Convertion
          currentList={props.currentList}
          count={count}
          total={props.total}
          newConvertion={newConvertion}
          yourCount={props.yourCount}
        />
      )}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    //данные из стейта
    currentList: state.convertionPage.currentList,
    yourCount: state.convertionPage.yourCount,
    total: state.convertionPage.total,
    isFetching: state.convertionPage.isFetching,
  };
};
export default compose(connect(mapStateToProps, { getYourCount, getCurrent }))(
  ConvertionContainer
);
