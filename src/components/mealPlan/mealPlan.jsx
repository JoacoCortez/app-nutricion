import React, {useEffect, useState }from 'react';
import "./mealPlan.css";
import Modal from 'react-bootstrap/Modal';

export default function MealPlan() {
  
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

  

    return (
    <>
        <div id='mealPlan-container'>
            <h2>Plan de comidas</h2>
            <div className="mealPlan-list">
                <div className="mealPlan-container-high-protein" onClick={handleShow1}>
                    <img src="" alt="" />
                    <p className="mealPlan-list-text" >Alta en Proteínas</p>
                </div>
                <div className="mealPlan-container-intermitent" onClick={handleShow2}>
                    <img src="" alt="" />
                    <p className="mealPlan-list-text" >Ayuno Intermitente</p>
                </div>
                <div className="mealPlan-container-balanced" onClick={handleShow3}>
                    <img src="" alt="" />
                    <p className="mealPlan-list-text" >Equilibrada</p>
                </div>
            </div>
        </div>

        
        <Modal show={show1} onHide={handleClose1}>
            <Modal.Body>
                <div className="my-modal-container">
                    <div className="meal-description">    
                        <h2>Alta en proteínas</h2>
                        <p>Desde hace tiempo se ha popularizado la sustitución de carbohidratos por proteínas como método rápido para perder peso. Esta dieta sigue principios similares a la keto, pero no es tan estricta con el consumo de hidratos.</p>
                    </div>
                    <div className="meal-aliments">
                        <h3>Alimentos habituales</h3>
                        <ul className="meal-aliments-list">
                            <li>Frutas & verduras:
                                <p>Palta, Mango, Banana, Cebolla, Lechuga, Tomate</p>
                            </li>
                            <li>Carnes:
                                <p>Huevo, Churrasco, Pollo sin piel, Atún, Salmón</p>
                            </li>
                            <li>Cereales & Legumbres: 
                                <p>Arróz, Porotos</p>
                            </li>
                            <li>Lácteos: 
                                <p>Yogur griego, Leche descremada, Queso crema</p>
                            </li>
                        </ul>
                    </div>
                </div>    
            </Modal.Body>
        </Modal>    

        
        <Modal show={show2} onHide={handleClose2}>
            <Modal.Body>
                <div className="my-modal-container">
                    <div className="meal-description">    
                        <h2>Ayuno intermitente</h2>
                        <p>El ayuno intermitente funciona reduciendo drásticamente la ingesta calórica durante un par de días de la semana, mientras que el resto de los días se mantiene en niveles normales. Con el tiempo, debería reducir su apetito en general y favorecer la pérdida de peso a través de un déficit calórico.</p>
                    </div>
                    <div className="meal-aliments">
                        <h3>Alimentos habituales</h3>
                        <ul className="meal-aliments-list">
                        <li>Frutas & verduras:
                                <p>Pomelo, Banana, Palta, Choclo, Espinaca, Calabaza</p>
                            </li>
                            <li>Carnes:
                                <p>Atún, Churrasco, Huevo</p>
                            </li>
                            <li>Cereales & Legumbres: 
                                <p>Avena, Arróz</p>
                            </li>
                            <li>Lácteos: 
                                <p>Queso fresco, Leche descremada, Yogur</p>
                            </li>
                        </ul>
                    </div>
                </div>    
            </Modal.Body>
        </Modal>    

        
        <Modal show={show3} onHide={handleClose3}>
            <Modal.Body>
                <div className="my-modal-container">
                    <div className="meal-description">    
                        <h2>Equilibrada</h2>
                        <p>Una dieta equlibrada que consta de alimentos frescos, carnes magras, pescado, cereales integrales y productos animales bajos en grasa es la mejor manera de asegurar que se satisfagan todas sus necesidades nutricionales.</p>
                    </div>
                    <div className="meal-aliments">
                        <h3>Alimentos habituales</h3>
                        <ul className="meal-aliments-list">
                            <li>Frutas & verduras:
                                <p>Naranja,Durazno, Champiniones, Rúcula, Zanahoria</p>
                            </li>
                            <li>Carnes:
                                <p>Salmón, Pollo, Langostinos, Carne vacuna</p>
                            </li>
                            <li>Cereales & Legumbres: 
                                <p>Granola, Nueces, Arróz</p>
                            </li>
                            <li>Lácteos: 
                                <p>Leche, Yogur, Queso crema</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Modal.Body>
        </Modal>    
    </>
    )
}
