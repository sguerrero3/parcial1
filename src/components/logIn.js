import { Button, Form, FormLabel } from "react-bootstrap";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

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
        setValidationStates(true)
    }


    return(

        <div className="container">

            <Row>
                <h1 style={{color: "#000000", fontSize:"32px", fontWeight:"bold", fontFamily: 'Inter, sans-serif', textAlign: 'center', padding:"2rem"}}>
                    <FormattedMessage id="LogIn"/>
                </h1>
            </Row>
            <Row>

            <div style={{ display: 'flex', justifyContent: 'center' }}>

            <Form>
                <Form.Group>

                    <FormLabel style={{color: "#000000", fontSize:"20px", fontWeight:"bold", fontFamily: 'Inter, sans-serif'}}>
                        <FormattedMessage id="Username"/>
                    </FormLabel>

                    <Form.Control type="text" placeholder="" onChange={handleUserChange} value={formValues.login} className={validationState ? '' : 'is-invalid'} style={{backgroundColor: "#D9D9D9", borderRadius:"0px", width:"30rem", height: "3.5rem"}}/>
                </Form.Group>

                <Form.Group>
                    <FormLabel style={{color: "#000000", fontSize:"20px", fontWeight:"bold", fontFamily: 'Inter, sans-serif'}}>
                        <FormattedMessage id="Password"/>
                    </FormLabel>

                    <Form.Control type="password" placeholder="" onChange={handlePasswordChange} value={formValues.password} className={validationState ? '' : 'is-invalid'} style={{backgroundColor: "#D9D9D9", borderRadius:"0px", width:"30rem", height: "3.5rem"}}/>

                </Form.Group>
            </Form>
            </div>
            </Row>

            <Row>
                <div className="button-group" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{paddingRight:"1rem", paddingTop:"2rem"}}>
                    <Button onClick={clickSubmit} style={{backgroundColor: "#003B93", borderRadius:"0px", border: "none", color:"#FFFFFF", fontSize:"20px", fontWeight:"bold", fontFamily: 'Inter, sans-serif', height:"3.5rem", width:"14rem", textAlign:"center"}}>
                        <FormattedMessage id="Go"/>
                    </Button>
                    </div>
                    <div style={{paddingLeft:"1rem", paddingTop:"2rem"}}>
                    <Button onClick={clickCancelar}  style={{backgroundColor: "#E75D5D", borderRadius:"0px", border: "none", color:"#000000", fontSize:"20px", fontWeight:"bold", fontFamily: 'Inter, sans-serif', height:"3.5rem", width:"14rem", textAlign:"center"}}>
                        <FormattedMessage id="Cancel"/>
                    </Button>
                    </div>
                </div>
            </Row>

            <Row>
                <div style={{display: 'flex', justifyContent: 'center', padding:"1rem"}}>
                { !validationState && <Form.Text style={{color:"#CD3232", fontSize:"18px", fontWeight:"bold", fontFamily: 'Inter, sans-serif'}}><FormattedMessage id="Error"/></Form.Text>}
                </div>
            </Row>


        </div>
    );
}

export default LogIn;