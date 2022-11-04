import React from "react";
import { Field, reduxForm } from "redux-form";

let ConvertionForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="convertion-form">
      <Field
        className="convertion-form__input"
        component="input"
        name="convertionInput"
        type="number"
      />
      {
        //<button className="convertion-form__button" type="submit">&#10004;</button>
      }
    </form>
  );
};

ConvertionForm = reduxForm({
  form: "Convertion",
})(ConvertionForm);

const Convertion = ({ currentList, count, newConvertion, total }) => {
  return (
    <div className="сonvertion">
      <div className="сonvertion__title">
        Курс на: {currentList.Date}
      </div>
      <div className="сonvertion__descr">
        <ConvertionForm onSubmit={(value) => newConvertion(value)} />
        {count} USD = {total} RUB
      </div>
    </div>
  );
};

export default Convertion;
