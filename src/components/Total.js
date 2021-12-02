import React from 'react';
import { useState } from 'react';

export default function Total(props) {
  //console.log(props.checkoutData);
  const { checkoutData } = props;
  const total = checkoutData.reduce((sum, elem) => {
    return sum + elem.quantity * elem.calories;
  }, 0);

  return (
    <div>
      <h1>Todays foods</h1>
      {checkoutData.map((elem, index) => {
        const { name, quantity, calories } = elem;
        return (
          <div>
            {name} x {quantity} = {quantity * calories} cal
          </div>
        );
      })}
      <hr />
      <h1>Total calories = {Math.round(total)}</h1>
    </div>
  );
}
