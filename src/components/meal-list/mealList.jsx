import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AddMeal from "../addMeal/addMeal";
import "./mealList.css";

const acordeon = document.getElementsByClassName("acordeon")
let i 



function MealList(){

    for(i = 0; i < acordeon.length; i++){

        acordeon[i].addEventListener("click", ()=>{
            
            this.classList.toggle("active")
            let content = this.nextElementSibling
            
            if(content.style.display === "block"){
                content.style.display = "none"
            }else{
                content.style.display = "block"
            }
        })
    }

    return(



    <Accordion id="my-acordion">
            
        <AccordionItem id="acordion-element" eventKey="0">
            <AccordionHeader id="acordion-header" > Desayuno </AccordionHeader>
            <AccordionBody className="acordion-body-bg">
                <AddMeal/>
            </AccordionBody>
        </AccordionItem>
        
        <AccordionItem id="acordion-element" eventKey="1">
            <AccordionHeader id="acordion-header" > Almuerzo </AccordionHeader>
            <AccordionBody className="acordion-body-bg">
                <AddMeal/>
            </AccordionBody>
        </AccordionItem>
        
        <AccordionItem id="acordion-element" eventKey="2">
            <AccordionHeader id="acordion-header" > Merienda </AccordionHeader>
            <AccordionBody className="acordion-body-bg">
                <AddMeal/>
            </AccordionBody>
        </AccordionItem>

        <AccordionItem id="acordion-element" eventKey="3">
            <AccordionHeader id="acordion-header" > Cena </AccordionHeader>
            <AccordionBody className="acordion-body-bg">
                <AddMeal/>
            </AccordionBody>
        </AccordionItem>

        <AccordionItem id="acordion-element" eventKey="4">
            <AccordionHeader id="acordion-header" > Colaciones </AccordionHeader>
            <AccordionBody className="acordion-body-bg">
                <AddMeal/>
            </AccordionBody>
        </AccordionItem>

    </Accordion>
    )



}
 

export default MealList

