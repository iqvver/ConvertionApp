import * as React from "react";
import Current from "./Current";
import Fetching from "../../Components/Fetching/Fetching";
import { getCurrent } from "../../redux/convertion-reduser";
import { connect } from "react-redux";
import { compose } from "redux";

const CorrentContainer = (props) => {
  React.useEffect(() => {
    props.getCurrent();
  }, []);

  return (
    <>
      {props.currentList.length === 0 ? (
        <Fetching />
      ) : (
        <Current currentList={props.currentList} />
      )}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    //данные из стейта
    currentList: state.convertionPage.currentList,
    isFetching: state.convertionPage.isFetching,
  };
};
export default compose(connect(mapStateToProps, { getCurrent }))(
  CorrentContainer
);
