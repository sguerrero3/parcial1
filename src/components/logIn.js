import { Button, Form, FormLabel } from "react-bootstrap";
import { useState } from "react";
import Row from "react-bootstrap/Row";

import { useNavigate } from 'react-router-dom';

function LogIn(){

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({login:"", password:""})

    const [validationState, setValidationStates] = useState(true);

    const handleUserChange = (e) =>{
        setFormValues({...formValues, login: e.target.value})
    }

    const handlePasswordChange = (e) => {
        setFormValues({...formValues, password: e.target.value})
    }

    const clickSubmit = () => {

        fetch("http://localhost:3001/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(formValues)
        }).then((data) => {
            if (data.ok){
                navigate('/cars');
            }
            else{
                setValidationStates(false);
            }
        })        
    }

    const clickCancelar = () => {
        setFormValues({login:"", password: ""})
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

                    <Form.Control type="text" placeholder="Nombre de usuario" onChange={handleUserChange} value={formValues.login} className={validationState ? '' : 'is-invalid'}/>
                </Form.Group>

                <Form.Group>
                    <FormLabel>
                        Contraseña
                    </FormLabel>

                    <Form.Control type="password" placeholder="" onChange={handlePasswordChange} value={formValues.password} className={validationState ? '' : 'is-invalid'}/>

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

            <Row>
                { !validationState && <Form.Text className="text-mal">Error de autenticación. Revise sus credenciales</Form.Text>}
            </Row>


        </div>
    );
}

export default LogIn;