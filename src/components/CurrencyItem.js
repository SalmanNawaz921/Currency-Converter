import React, { useEffect } from "react";

export const CurrencyItem = (props) => {
  const { baseCurr, toCurr, convertedVal, amount, isSubmit } = props;
  return (
    isSubmit && (
      <div>
        <h4 className="text-left my-2">{`${amount}${baseCurr}= ${convertedVal}${toCurr}`}</h4>
      </div>
    )
  );
};
