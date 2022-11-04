import React from "react";
import { Field, reduxForm } from "redux-form";

//компонента с текстовым полем (формой) для ввода запроса конвертации

let ConvertionForm = ({ handleSubmit, count }) => {
  return (
    <form onSubmit={handleSubmit} className="convertion-form">
      <Field
        className="convertion-form__input"
        component={"input"}
        name={"convertionInput"}
        type={"text"}
        pattern="([0-9]+\s+usd+\s+in+\s+rub)|([0-9]+\s+eur+\s+in+\s+rub)"
        title="15 usd in rub или 15 eur in rub "
        placeholder={count}
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

const Convertion = ({ currentList, count, yourCount, newConvertion, total }) => {
  return (
    <div className="сonvertion">
      <div className="сonvertion__title">Курс на: {currentList.Date}</div>
      <div className="сonvertion__descr">
        Можно переводить: <br />
        USD &#8594; RUB ,
        EUR &#8594; RUB
        <ConvertionForm
          onSubmit={(value) => newConvertion(value)}
          count={count}
        />
        {total ? (
          <div>
            {yourCount[0]} {yourCount[1].toUpperCase()} = {total} RUB
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Convertion;
