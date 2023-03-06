import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalFunction({onDataFlow}) {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        meal: "",
        quantity: ""
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    function handleChange(e){

        setFormData(({
            ...formData, [e.target.name]: e.target.value
        }))

    }

    
    function handleSubmit(e){
        e.preventDefault()
        
        const macroData = formData.meal * formData.quantity

        console.log(macroData)

        const data = {
            meal: formData.meal,
            quantity: formData.quantity,
            calories: macroData
        }
        
        onDataFlow(data)
        
        console.log(data)

    }


  
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                +
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Agrega una comida</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    En el espacio en blanco indicá la comida seguido de la cantidad en gr/mll
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