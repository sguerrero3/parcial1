import { FormattedMessage } from "react-intl";

function Footer(){

    return(
        <div className="container" style={{display: 'flex', justifyContent: 'center', paddingTop:'5rem', fontSize:"18px", fontFamily: 'Inter, sans-serif', color:"#000000"}}>

            <p style={{textAlign:"center"}}>
                <FormattedMessage id="Contact" />: +57 3102105253 - info@tusegundazo.com - @tusegundazo
            </p>

        </div>
    );

}

export default Footer;