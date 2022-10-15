import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import foodsJson from './foods.json';
import { useState } from 'react';
import FoodBox from './componentes/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <h1>Food List</h1>
      <div>
        {foods.map(function (food) {
          return (
            <FoodBox food={food} />
          )
        })};
      </div>
    </div>
  );
}

export default App;
