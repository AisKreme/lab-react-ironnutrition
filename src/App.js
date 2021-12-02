import { React, useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import Total from './components/Total';

function App() {
  const [foodsArray, setFoods] = useState(foods);
  const [foodsArrayCopy, setFoodsArrayCopy] = useState(foods);
  const [checkoutData, setCheckout] = useState([]);
  const [showForm, setShowForm] = useState(false);

  let handleClick = (food, quantity) => {
    let checkoutFood = {
      name: food.name,
      quantity: quantity,
      calories: food.calories,
    };
    setCheckout([checkoutFood, ...checkoutData]);
  };

  let handleToggle = () => {
    setShowForm(!showForm);
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    const { name, calories, image } = event.target;

    let newFood = {
      name: name.value,
      calories: calories.value,
      image: image.value,
    };
    setFoods([newFood, ...foodsArray]);
    setShowForm(false);
  };

  let handleSearch = (event) => {
    let food = event.target.value;
    let filteredFoods = foodsArray.filter((elem) => {
      return elem.name.includes(food);
    });
    setFoodsArrayCopy(filteredFoods);
  };

  return (
    <div className="columns">
      <div className="column">
        <Search btnSearch={handleSearch} />
        {showForm ? (
          <AddFood btnSubmit={handleSubmit} />
        ) : (
          <button onClick={handleToggle} className="button is-link">
            Add Food
          </button>
        )}
        {foodsArrayCopy.map((elem, index) => {
          return <Foodbox key={index} food={elem} btnClick={handleClick} />;
        })}
      </div>
      <div className="column">
        <Total checkoutData={checkoutData} />
      </div>
    </div>
  );
}

export default App;
