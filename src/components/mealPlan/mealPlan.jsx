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
        <div className='mealPlan-container'>
            <h2>Plan de comidas</h2>
            <div className="mealPlan-list">
                <div onClick={handleShow1}>
                    <img src="" alt="" />
                    <p className="mealPlan-list-text" >Mediterraneo</p>
                </div>
                <div onClick={handleShow2}>
                    <img src="" alt="" />
                    <p className="mealPlan-list-text" >Bajo en Carbohidratos</p>
                </div>
                <div onClick={handleShow3}>
                    <img src="" alt="" />
                    <p className="mealPlan-list-text" >Ayuno Intermitente</p>
                </div>
            </div>
        </div>

        
        <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="meal-description">    
                    <h2>Mediterraneo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odit, incidunt eveniet tenetur necessitatibus amet aliquam soluta, placeat illo iste laborum consequuntur voluptatem distinctio in! Minima natus, dolore soluta in ut sit incidunt.</p>
                </div>
                <div className="meal-aliments">
                    <h3>Alimentos necesarios</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis asperiores, dolores sapiente tempora officia illum iste quam voluptatem magnam animi esse aliquid doloremque soluta aut quidem eaque expedita minima, sit ut sequi alias, vel dignissimos. Ex quam repellat quo facilis.</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                
            </Modal.Footer>
        </Modal>    

        
        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>222222222222222222222222222</Modal.Body>
            <Modal.Footer>
                
            </Modal.Footer>
        </Modal>    

        
        <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>333333333333333333333333333333!</Modal.Body>
            <Modal.Footer>
                
            </Modal.Footer>
        </Modal>    
    </>
    )
}
