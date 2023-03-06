import React from "react";
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
    
    return(
        <Accordion id="acordion">
            
            <AccordionItem eventKey="0">
                <AccordionHeader id="acordion-header" > Desayuno </AccordionHeader>
                <AccordionBody>
                    <AddMeal/>
                </AccordionBody>
            </AccordionItem>
            
            <AccordionItem eventKey="1">
                <AccordionHeader> Almuerzo </AccordionHeader>
                <AccordionBody>
                    <AddMeal/>
                </AccordionBody>
            </AccordionItem>
            
            <AccordionItem eventKey="2">
                <AccordionHeader> Merienda </AccordionHeader>
                <AccordionBody>
                    <AddMeal/>
                </AccordionBody>
            </AccordionItem>
        
            <AccordionItem eventKey="3">
                <AccordionHeader> Cena </AccordionHeader>
                <AccordionBody>
                    <AddMeal/>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem eventKey="4">
                <AccordionHeader> Colaciones </AccordionHeader>
                <AccordionBody>
                    <AddMeal/>
                </AccordionBody>
            </AccordionItem>
        
        </Accordion>

    )

}    

export default MealList

