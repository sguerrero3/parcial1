import { Card,CardText,CardTitle } from "react-bootstrap"
import { FormattedMessage, FormattedNumber} from "react-intl";

function CarDetail(props){


    return(

        <Card style={{borderRadius:"0px", backgroundColor:"#E3E3E3", borderColor:"#000000"}}>

            <CardTitle style={{fontWeight:'bold', fontSize:'18px', textAlign:'center', paddingTop:"1rem"}}>
                {props.carro.marca} {" "} {props.carro.linea}
            </CardTitle>
            
            <div style={{paddingLeft:"3rem", paddingRight:"3rem", paddingTop:"1rem", paddingBottom:"1rem", display: 'flex', justifyContent: 'center'}}>
            <Card.Img 
                style={{borderRadius:"0px", boxShadow:'2px 3px 4px rgba(0, 0, 0, 0.5)'}}
                variant="top"
                src= {props.carro.imagen}
                alt={props.carro.linea} />
            
            </div>
            <div style={{paddingLeft:"2rem", paddingRight:"2rem", paddingBottom:"1rem"}}>
            <CardText style={{fontSize:'18px'}}>
                &rarr; <FormattedMessage id="Milage" />: <FormattedNumber value={props.carro.kilometraje}/> <br/>
                &rarr; <FormattedMessage id="Color" />: <FormattedMessage id={props.carro.color}/> <br/>
                &rarr; <FormattedMessage id="Reference" />: {props.carro.referencia}
            </CardText>
            </div>
        </Card>
    )

}

export default CarDetail