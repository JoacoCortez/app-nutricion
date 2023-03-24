import  React, { useContext, useEffect } from "react";
import "./measurer.css";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { MealContext } from "../../context/mealContext";

Chart.register(ArcElement, Tooltip, Legend);

function Measurer(){
    const dataMeal = useContext(MealContext)
    console.log("CONTEXT ", dataMeal)

    
    

    
    
    // useEffect(()=>{

    //     console.log("DATAMEAL ", dataMeal[0])

    
    // },[dataMeal])
    
    if(dataMeal[0].length == 0){
        const data = {
            labels: ["Proteina", "Carbohidratos", "Grasas"],
            datasets: [{
                data: [1, 1, 1],
                backgroundColor: ["grey"]
                
            
            }]
        }
    
        const options = {
            responsive: true
        }
    
    
        return(
            <div className="graph-section-container">
                <ul className="macro-list">
                    <li className="carbs-list">Carbohidratos: </li>
                    <li className="protein-list">Proteinas: </li>
                    <li className="fats-list">Grasas: </li>
                </ul>
                <div className="graphic-container">
                        
                    <Doughnut data={data} options={options}/>
            
            
                </div>

            </div>
        )
    }else{
        const totalProtein = dataMeal[0].reduce( (acumulator, currentValue) =>
            acumulator + currentValue.protein
        ,0)

        const totalCarbs = dataMeal[0].reduce( (acumulator, currentValue) => 
            acumulator + currentValue.carbs
        ,0)
        
        const totalFats = dataMeal[0].reduce( (acumulator, currentValue) =>
            acumulator + currentValue.fats
        ,0)

        
        const data = {
            labels: ["Proteina", "Carbohidratos", "Grasas"],
            datasets: [{
                data: [totalProtein, totalCarbs, totalFats ],
                backgroundColor: ["brown", "blue", "yellow"]
                
            
            }]
        }
        
        const options = {
            responsive: true
        }
    
    
        return(
            <div className="graph-section-container">
                <ul className="macro-list">
                    <li className="carbs-list">Carbohidratos: </li>
                    <li className="protein-list">Proteinas: </li>
                    <li className="fats-list">Grasas: </li>
                </ul>
                <div className="graphic-container">
                    
                    <Doughnut data={data} options={options}/>
        
        
                </div>

            </div>    
        )

    }
}


export default Measurer