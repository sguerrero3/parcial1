import { Row, Image } from 'react-bootstrap';
import { useIntl } from "react-intl";
import fotoCarro from '../images/FotoCarro.png';
import photoCarro from '../images/PhotoCarro.png';

function Header(){

    const intl = useIntl();
    const locale = intl.locale;

    return(

        <div className='container'>
            <Row>
                <h1 style={{ textShadow:'2px 3px 4px rgba(0, 0, 0, 0.5)', fontFamily:"Jaldi, sans-serif", fontSize:"36px", fontWeight:'bolder'}}>TuSegundazo.com</h1>
            </Row>

            <Row>
                <hr />
                <Image src={locale === "es" ? fotoCarro: photoCarro} fluid style={{paddingBottom:"1rem"}}/>
                <hr />

            </Row>

        </div>
    );
}

export default Header;