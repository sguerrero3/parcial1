import { Button, Form, FormLabel } from "react-bootstrap";
import { useState } from "react";
import Row from "react-bootstrap/Row";

import { useNavigate } from 'react-router-dom';

function LogIn(){

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({user:"", password:""})

    const handleUserChange = (e) =>{
        setFormValues({...formValues, user: e.target.value})
    }

    const handlePasswordChange = (e) => {
        setFormValues({...formValues, password: e.target.value})
    }

    const clickSubmit = () => {
        //Poner lo de submit
        console.log(formValues)
        navigate('/cars');
    }

    const clickCancelar = () => {
        setFormValues({user:"", password: ""})
    }


    return(

        <div className="container">

            <Row>
                <h1>
                    Inicio de sesión
                </h1>
            </Row>

            <Row>
            <Form>
                <Form.Group>

                    <FormLabel>
                        Nombre de usuario
                    </FormLabel>

                    <Form.Control type="text" placeholder="Nombre de usuario" onChange={handleUserChange} value={formValues.user}/>
                </Form.Group>

                <Form.Group>
                    <FormLabel>
                        Contraseña
                    </FormLabel>

                    <Form.Control type="password" placeholder="" onChange={handlePasswordChange} value={formValues.password}/>

                </Form.Group>
            </Form>
            </Row>

            <Row>
                <div className="button-group">
                    <Button variant="primary" onClick={clickSubmit}>
                        Ingresar
                    </Button>
                    <Button variant="danger" onClick={clickCancelar}>
                        Cancelar
                    </Button>
                </div>
            </Row>


        </div>
    );
}

export default LogIn;