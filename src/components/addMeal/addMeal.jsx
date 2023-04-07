import {React, useContext, useState } from "react"
import { MealContext } from "../../context/mealContext";
import calculateCalories from "../../logic/calculate";
import MealForm from "../mealForm/mealForm";
import "./addMeal.css";

function AddMeal(){
  const [mealData, setMealData] = useState([])
  const [totalData, setTotalData] = useContext(MealContext)

  // The prevData => [...prevData, mealData] function inside setMealData is a callback function that takes the previous state prevData as an argument and returns a new state that is an array of the previous state (...prevData) and the new meal data (mealData) that is passed in as an argument.
  async function handleAddMeal(newMeal) {
    if(mealData.find(objet => objet.meal == newMeal.meal)){
      alert("El artículo ya esta en la lista")
      return

    }else {
      await setMealData(prevData => [...prevData, newMeal]);
      await setTotalData(prevData => [...prevData, newMeal]);

    }
    
    
    
    console.log(mealData)
    console.log(totalData)
  }
  

  function handleDelete(item){
    const fixedMeals = mealData.filter(data => data.meal !== item.meal)

    const fixedTotal = totalData.filter(data => data.meal !== item.meal)

    console.log(item)
    setMealData(fixedMeals)
    setTotalData(fixedTotal)
  }


  
  return(
      <>
      <MealForm onDataFlow={handleAddMeal}/>
      
      <div>
        {mealData.map((data, index) => (
          <div className="meal-container" key={index}>
            <p>Artículo: {data.meal}</p>
            <p>gr/mll: {data.quantity}</p>
            <p>Calorías: {data.calories}</p>
            <button className="delete-button" onClick={() => handleDelete(data)}>-</button>
          </div>
        ))}
      </div>
      </>
  )

}

export default AddMeal