import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import CarDetail from "./carDetail";

function CarList(){

    const [carros, setCarros] = useState([]);
    const [selCarro, setSelCarro] = useState(null)

    useEffect(() => {

        const URL = "http://localhost:3001/cars"

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

        <Col>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Linea</th>
                        <th scope="col">Modelo</th>
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