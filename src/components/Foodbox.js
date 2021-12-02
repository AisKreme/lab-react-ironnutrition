import React from 'react';
import { useState } from 'react';

export default function Foodbox(props) {
  const { food, btnClick } = props;
  const [qty, setQty] = useState(0);

  let handleQty = (event) => {
    setQty(event.target.value);
  };

  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.food.name}</strong> <br />
                <small>{props.food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={qty}
                  onChange={handleQty}
                />
              </div>
              <div className="control">
                <button
                  onClick={() => {
                    btnClick(food, qty);
                  }}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
