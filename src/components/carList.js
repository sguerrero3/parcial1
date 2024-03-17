import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import CarDetail from "./carDetail";
import { FormattedMessage } from "react-intl";

function CarList(){

    const [carros, setCarros] = useState([]);
    const [selCarro, setSelCarro] = useState(null)

    useEffect(() => {

        const URL = "http://190.25.98.196:3001/cars"

        fetch(URL).then((data) => data.json()).then((data) => {
            setCarros(data);
        })
    }, [])

    const handleClick = (car)=> {

        setSelCarro(car)

    } 


    return(

        <div className="container">

        <Row>

        <Col xs={8}>

            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col" style={{ width: '10%' }} >#</th>
                        <th scope="col" style={{ width: '20%' }} > <FormattedMessage id="Brand" /></th>
                        <th scope="col" style={{ width: '20%' }} ><FormattedMessage id="Line" /></th>
                        <th scope="col"><FormattedMessage id="Model" /></th>
                    </tr>
                </thead>

                <tbody>
                    {carros.map((carro) => (

                        <tr key={carro.id} onClick={() => handleClick(carro)}>
                            <th scope="row">{carro.id}</th>
                            <td>{carro.marca}</td>
                            <td>{carro.linea}</td>
                            <td>{carro.modelo}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        
        </Col>

        <Col>

            {selCarro ? (
                <CarDetail carro={selCarro} />
            ): (<h1> </h1>)}            
        
        </Col>

        </Row>

        </div>

        
    );

}

export default CarList;