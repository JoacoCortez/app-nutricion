import  React, { useState } from 'react';
import db from "../../db/db";
import { collection, getDoc, getDocs, query, where } from '@firebase/firestore';
import "./mealForm.css";

function MealForm({onDataFlow}) {
    
    const [formData, setFormData] = useState({
        meal: "",
        quantity: 0
    })
  
    const calPerProt = 4.00
    const calPerCarb = 4.00
    const calPerFat = 9.00
    //Meals properties are calculated per gram
    
    
    function handleChange(e){

        setFormData(({
        
            ...formData, [e.target.name]: e.target.value
            
        }))

    }
    
    async function handlePlus(){
        if(formData.meal.length !== 0){
            const newQuantity = await parseInt(formData.quantity) + 1
            await setFormData({...formData, quantity: newQuantity})    
            console.log("FORM DATA ACAAA ", formData)
        }
    }
    
    function handleMinus(){
        if(formData.quantity > 0){
            const newQuantity = parseInt(formData.quantity) - 1
            setFormData({...formData, quantity: newQuantity})
        }
    }
    
    
    
    async function handleSubmit(e){
        e.preventDefault()
        console.log(formData)

        if(formData.quantity < 1){
            alert("Cantidad invalida")
            return
        }
        
        

        const mealList = collection(db, "meals")
        const mealNutrients = query(mealList, where("meal", "==", formData.meal))
        
        
        
        const verifyMeal = await getDocs(mealNutrients);
            if (verifyMeal.empty) {
                alert("Es una demo, usar las comidas registradas");
                return;
            }
    
        
        
        
        await getDocs(mealNutrients)
        .then((snapshot) =>{
            const mealData =  snapshot.docs[0].data()
            console.log("MEAL DATA ", mealData)
            
                
                function calculateCalories(){
                    const protein = mealData.nutrients.protein * calPerProt 
                    const carbs = mealData.nutrients.carbs * calPerCarb 
                    const fats = mealData.nutrients.fats * calPerFat 
            
                    const macroData = protein * formData.quantity + carbs * formData.quantity + fats * formData.quantity
                    console.log("MACROO ", macroData)
                    console.log(protein)
                    return macroData.toFixed()
                }
                
                
                const data = {
                    meal: formData.meal,
                    quantity: formData.quantity,
                    calories: calculateCalories(),
                    protein: mealData.nutrients.protein * formData.quantity,
                    carbs: mealData.nutrients.carbs * formData.quantity,
                    fats: mealData.nutrients.fats * formData.quantity
                }
                
                
                
                onDataFlow(data)
                console.log(data)
                
                console.log(snapshot.docs[0].data())
            })
            setFormData({
                meal: "",
                quantity: 0
            })
        }


  
    return (
        <>

            <form className='meal-form' onSubmit={handleSubmit}>
                <label htmlFor="meal">Alimento</label>
                <input className='meal-input' type="text" name="meal" value={formData.meal} onChange={handleChange} required/>
                
                <label htmlFor="quantity">Cantidad en gr/mll</label>
                <div className="meal-form-quantity-container">
                    <input className='quantity-input' type="number" name="quantity"  value={formData.quantity} onChange={handleChange} required/>
                    <button className="plus-button" type="button" onClick={() => handlePlus()}>+</button>
                    <button className="minus-button" type="button" onClick={() => handleMinus()}>-</button>
                </div>    

                <input id="submit-button" type="submit" value="Agregar"/>
            </form>
                   
        </>
    );
}

export default MealForm