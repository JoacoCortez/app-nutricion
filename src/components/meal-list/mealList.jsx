import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AddMeal from "../addMeal/addMeal";
import "./mealList.css";

// const acordeon = document.getElementsByClassName("acordeon")
// let i 



// function MealList(){

//     for(i = 0; i < acordeon.length; i++){

//         acordeon[i].addEventListener("click", ()=>{
            
//             this.classList.toggle("active")
//             let content = this.nextElementSibling
            
//             if(content.style.display === "block"){
//                 content.style.display = "none"
//             }else{
//                 content.style.display = "block"
//             }
//         })
//     }
// }

function MealList(){
    const [isActive, setIsActive] = useState(false)
    const [activeContent, setActiveContent] = useState(false)
    const [activeButtons, setActiveButtons] = useState({})

    function toggleActive(index){
        setIsActive(!isActive)

        setActiveButtons(prevState => {
            const newState = {...prevState} 
            newState[index] = !prevState[index]   //the newState is the oposite of the current state 
            return newState
        })
    
        
    }
    
    
 
    
    
    
    
    return(
        
        <div className="cards-container">
            <div className="card-meal">
                <h3>Desayuno</h3>
                <button onClick={() => toggleActive(0)} className={isActive ? "active-class" : "inactive-class"}>{activeButtons[0] ? "-" : "+"}</button>
                <div className={activeButtons[0] ? "card-content-active" : "card-content-inactive"}>
                    <AddMeal/>
                </div>
            </div>
            

            <div className="card-meal">
                <h3>Almuerzo</h3>
                <button onClick={() => toggleActive(1)} className={isActive ? "active-class" : "inactive-class"}>{activeButtons[1] ? "-" : "+"}</button>
                <div className={activeButtons[1] ? "card-content-active" : "card-content-inactive"}>
                    <AddMeal/>
                </div>
            </div>
            
            <div className="card-meal">
                <h3>Merienda</h3>
                <button onClick={() => toggleActive(2)} className={isActive ? "active-class" : "inactive-class"}>{activeButtons[2] ? "-" : "+"} </button>
                <div className={activeButtons[2] ? "card-content-active" : "card-content-inactive"}>
                    <AddMeal/>
                </div>
            </div>
            
            <div className="card-meal">
                <h3>Cena</h3>
                <button onClick={() => toggleActive(3)} className={isActive ? "active-class" : "inactive-class"}>{activeButtons[3] ? "-" : "+"}</button>
                <div className={activeButtons[3] ? "card-content-active" : "card-content-inactive"}>
                    <AddMeal/>
                </div>
            </div>
            
            <div className="card-meal">
                <h3>Colaciones</h3>
                <button onClick={() => toggleActive(4)} className={isActive ? "active-class" : "inactive-class"}>{activeButtons[4] ? "-" : "+"}</button>
                <div className={activeButtons[4] ? "card-content-active" : "card-content-inactive"}>
                    <AddMeal/>
                </div>
            </div>


        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // <Accordion id="acordion">
            
        //     <AccordionItem eventKey="0">
        //         <AccordionHeader id="acordion-header" > Desayuno </AccordionHeader>
        //         <AccordionBody>
        //             <AddMeal/>
        //         </AccordionBody>
        //     </AccordionItem>
            
        //     <AccordionItem eventKey="1">
        //         <AccordionHeader> Almuerzo </AccordionHeader>
        //         <AccordionBody>
        //             <AddMeal/>
        //         </AccordionBody>
        //     </AccordionItem>
            
        //     <AccordionItem eventKey="2">
        //         <AccordionHeader> Merienda </AccordionHeader>
        //         <AccordionBody>
        //             <AddMeal/>
        //         </AccordionBody>
        //     </AccordionItem>
        
        //     <AccordionItem eventKey="3">
        //         <AccordionHeader> Cena </AccordionHeader>
        //         <AccordionBody>
        //             <AddMeal/>
        //         </AccordionBody>
        //     </AccordionItem>

        //     <AccordionItem eventKey="4">
        //         <AccordionHeader> Colaciones </AccordionHeader>
        //         <AccordionBody>
        //             <AddMeal/>
        //         </AccordionBody>
        //     </AccordionItem>
        
        // </Accordion>

    )

}    

export default MealList

