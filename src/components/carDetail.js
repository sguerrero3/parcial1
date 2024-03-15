import { Card,CardText,CardTitle } from "react-bootstrap"

function CarDetail(props){


    return(

        <Card>

            <CardTitle>
                {props.carro.marca} {" "} {props.carro.linea}
            </CardTitle>

            <Card.Img 
                style={{  }}
                variant="top"
                src= {props.carro.imagen}
                alt={props.carro.linea} />

            <CardText>
                - Kilometraje: {props.carro.kilometraje} <br/>
                - Color: {props.carro.color} <br/>
                - Referencia: {props.carro.referencia}
            </CardText>

        </Card>
    )

}

export default CarDetail