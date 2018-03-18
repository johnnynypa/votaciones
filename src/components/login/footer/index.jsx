import React from 'react';
import './footerLogin.css';

import Rectangle from '../../media/Rectangle.svg';
import Calidad from '../../media/calidad.png';


class FooterLogin extends React.Component{
    render(){
        return(
            <div id="footer-login" >
                <div id="elecciones" >
                    <img src={Rectangle} alt="" className="background" />
                    <img src={Calidad} alt="" className="front-background" />
                </div>
                <h1>
                    Vota, ¡Tú Decides!
                </h1>
            </div>
        )
    }
}

export default FooterLogin;