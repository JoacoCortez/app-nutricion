import  React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import db from "../../db/db";
import { collection, getDoc, getDocs, query, where } from '@firebase/firestore';
import "./modal.css";

function ModalFunction({onDataFlow}) {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        meal: "",
        quantity: ""
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    const calPerProt = 4.00
    const calPerCarb = 4.00
    const calPerFat = 9.00
    //Meals properties are calculated per gram
    
    
    function handleChange(e){

        setFormData(({
            ...formData, [e.target.name]: e.target.value
        }))

    }
    
    
    
    
    
    async function handleSubmit(e){
        e.preventDefault()
        
        
        const mealList = collection(db, "meals")
        const mealNutrients = query(mealList, where("meal", "==", formData.meal))
        
        await getDocs(mealNutrients)
        .then((snapshot) =>{
            const mealData =  snapshot.docs[0].data()
            console.log(mealData)
            
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
        }


  
    return (
        <>
            <button className="add-meal-button" onClick={handleShow}>
                +
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Agrega una comida</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Indicá la comida seguido de la cantidad en gr/mll</p>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="meal" value={formData.meal} onChange={handleChange}  placeholder="Comida" required/>

                            <input type="number" name="quantity"  value={formData.quantity} onChange={handleChange} placeholder="gr/mll" required/>

                            <input type="submit" value="Agregar"/>
                        </form>
                    </div>
                </Modal.Body>
                
            </Modal>
        </>
    );
}

export default ModalFunction