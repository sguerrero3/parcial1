import { Row, Image } from 'react-bootstrap';
import fotoCarro from '../images/FotoCarro.png'

function Header(){

    return(

        <div className='container'>
            <Row>
                <h1>TuSegundazo.com</h1>
            </Row>

            <Row>
                <Image src={fotoCarro} fluid />

            </Row>

        </div>
    );
}

export default Header;