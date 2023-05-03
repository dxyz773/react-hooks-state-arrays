import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [foodType, setFoodType] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  // function handleLiClick(id) {
  //   const newFoodArray = foods.filter((food) => food.id !== id);
  //   setFoods(newFoodArray);
  // }

  function addHeat(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return { ...food, heatLevel: food.heatLevel + 1 };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }
  const foodsToDisplay = foods.filter((food) => {
    if (foodType === "All") {
      return true;
    } else {
      return food.cuisine === foodType;
    }
  });

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => addHeat(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function filterFood(e) {
    setFoodType(e.target.value);
  }

  return (
    <div>
      <select name="filter" onChange={filterFood}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
