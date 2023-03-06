import React, { useState } from "react"
import calculateCalories from "../../logic/calculate"
import ModalFunction from "../Modal/Modal"
import "./addMeal.css";

function AddMeal(){
  const [mealData, setMealData] = useState([])
  
  // The prevData => [...prevData, mealData] function inside setMealData is a callback function that takes the previous state prevData as an argument and returns a new state that is an array of the previous state (...prevData) and the new meal data (mealData) that is passed in as an argument.
  function handleAddMeal(newMeal) {
    
    
    setMealData(prevData => [...prevData, newMeal]);
    console.log(mealData)
    
    
  }
  

  function handleDelete(item){
    const fixedMeals = mealData.filter(data => data.meal !== item.meal)

    console.log(item)
    setMealData(fixedMeals)
  }


  
  return(
      <>
        <div>
      {mealData.map((data, index) => (
        <div className="meal-container" key={index}>
          <p>Artículo: {data.meal}</p>
          <p>gr/mll: {data.quantity}</p>
          <p>Calorías: {data.calories}</p>
          <button onClick={() => handleDelete(data)}>-</button>
        </div>
      ))}
    </div>
      <ModalFunction onDataFlow={handleAddMeal}/>
      </>
  )

}

export default AddMeal