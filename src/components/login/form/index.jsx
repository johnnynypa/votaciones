// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setCurrentUser } from '../../../redux/actions/login';
import {peoples}  from '../../../datas.json';

import InputLogin from './input';


import './form.css';
import Avatar from '../../media/avatar.svg';
import idCard from '../../media/id-card.svg';

type Props = {
    setCurrentUser : Function,
    history: any
}

type State = {
    name: string,
    dni: string,
    error: string
}

class FormLogin extends React.Component<Props, State>{
    constructor(){
        super();
        this.state = {
            name: "",
            dni: "",
            error: ""
        }

        // $FlowFixMe
        this.onChange = this.onChange.bind(this);
        // $FlowFixMe
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e : any){
        this.setState({
            [e.target.name]: e.target.value,
            error: ""
        })
    }

    onSubmit(){
        this.setState({
            error: ""
        })
        for (let people of peoples){
            if(people.name === this.state.name && people.dni === this.state.dni){
                this.props.setCurrentUser(people);
                this.props.history.push("/prescidente")
                return;
            }
        }
        this.setState({
            error: "Credenciales incorreptas"
        })
    }

    render(){
        return(
            <div id="form-login" >
                <InputLogin
                    placeholder="Nombre completo"
                    type="text"
                    img={Avatar}
                    onChange={this.onChange}
                    value={this.state.name}
                    name="name"
                    />
                <InputLogin
                    placeholder="Documento de identidad"
                    type="text"
                    img={idCard}
                    onChange={this.onChange}
                    value={this.state.dni}
                    name="dni"
                />
                <span> {this.state.error} </span>
                <button id="form-login-button" onClick={this.onSubmit} >
                    Entrar
                </button>
            </div>
        )
    }
}

export default connect(null, {setCurrentUser})(withRouter(FormLogin));