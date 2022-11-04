import React, { useState, useEffect } from "react";
import Convertion from "./Convertion";
import Fetching from "../../Components/Fetching/Fetching";
import { getYourCount, getCurrent } from "../../redux/convertion-reduser";
import { connect } from "react-redux";
import { compose } from "redux";

const ConvertionContainer = (props) => {
  const [count, setCount] = useState(props.yourCount);
  let newConvertion = (value) => {
    setCount(value.convertionInput);
  };
  useEffect(() => {
    props.getCurrent();
  }, []);

  useEffect(() => {
    props.getYourCount(count);
  }, [count]);
  return (
    <div>
      {!props.currentList ? (
        <Fetching />
      ) : (
        <Convertion
          currentList={props.currentList}
          count={count}
          total={props.total}
          newConvertion={newConvertion}
        />
      )}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    //данные о пользователях
    currentList: state.convertionPage.currentList,
    yourCount: state.convertionPage.yourCount,
    total: state.convertionPage.total,
    isFetching: state.convertionPage.isFetching,
  };
};
export default compose(connect(mapStateToProps, { getYourCount, getCurrent }))(
  ConvertionContainer
);
