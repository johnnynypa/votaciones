// @flow
import React from 'react';
import InputLogin from './input';
import './form.css';

import Avatar from '../../media/avatar.svg';
import idCard from '../../media/id-card.svg';

class FormLogin extends React.Component<any>{
    render(){
        return(
            <div id="form-login" >
                <InputLogin
                    placeholder="Nombre completo"
                    type="text"
                    img={Avatar}
                    />
                <InputLogin
                    placeholder="Documento de identidad"
                    type="text"
                    img={idCard}
                />
            </div>
        )
    }
}

export default FormLogin;