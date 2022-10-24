import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import foodsJson from './foods.json';
import { useEffect, useState } from 'react';
import FoodBox from './componentes/FoodBox';
import AddFoodForm from './componentes/AddFoodForm';


function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [foodsUpd, setFoodsUpd] = useState(foodsJson);
console.log(foods)

  useEffect(()=>{
    setFoods([...foodsUpd])
  },[foodsUpd])
  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm foods={foodsUpd} setFoods={setFoodsUpd}/>
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
