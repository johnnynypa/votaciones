//@flow
import React from 'react';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';
import {votar} from '../../../redux/actions/votacion';
import {logout} from '../../../redux/actions/login';
import './style.css';
import SweetAlert from 'sweetalert-react';

type Props = {
    partido: string,
    imgCandidato?: any,
    imgVice?: any,
    nameCandidato?: string,
    nameVice?: string,
    imgPartido?: any,
    idCandidato: number,
    votar: Function,
    logout: Function,
    idUsuario: number,
    votos: [],
    history: any,
    isLogin: boolean
}

type State = {
    showError: boolean,
    show: boolean
}


class Candidato extends React.Component<Props, State>{
    constructor(props:Props){
        super(props);

        this.state = {
            showError: false,
            show: false
        }

        //$FlowFixMe
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        for (let voto of this.props.votos){
            if(voto.idUser === this.props.idUsuario){
                this.setState({ showError: true });
                return;
            }
        }
        this.setState({ show: true });
    }


    render(){
        if(!this.props.isLogin){
            this.props.logout();
            this.props.history.push('/');
        }
        return(
            <div className="candidate" onClick={this.onClick} >
                <h3>{this.props.partido}</h3>
                { (this.props.idCandidato !== 0) &&   <img src={this.props.imgPartido} alt=""/>}
                { (this.props.idCandidato !== 0) &&   <div className="candidate-data" >
                    <div>
                        Prescidencia
                        <img src={this.props.imgCandidato} alt=""/>
                        {this.props.nameCandidato}
                    </div>
                    <div>
                        Viceprescidencia
                        <img src={this.props.imgVice} alt=""/>
                        {this.props.nameVice}
                    </div>
                </div>}

                <SweetAlert
                    show={this.state.show}
                    title="Confirme su voto"
                    type="success"
                    text="¿Desea votar por el candidato seleccionado?"
                    showCancelButton
                    onConfirm={() => {
                        this.props.votar({
                            idCandidato: this.props.idCandidato,
                            idUsuario: this.props.idUsuario,
                        })
                        this.setState({ show: false });
                        this.props.logout();
                        this.props.history.push('/');
                    }}
                    onCancel={() => {
                        this.setState({ show: false });
                    }}
                    onEscapeKey={() => this.setState({ show: false })}
                    onOutsideClick={() => this.setState({ show: false })}
                    />
                    <SweetAlert
                    show={this.state.showError}
                    onConfirm = {() => {
                        this.setState({showError: false});
                        this.props.logout();
                        this.props.history.push('/');
                    }}
                    title="Error"
                    type="error"
                    text="Usted ya ha votado antes"
                    onEscapeKey={() => this.setState({ showError: false })}
                    onOutsideClick={() => this.setState({ showError: false })}
                    />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        isLogin: state.login.isLogin,
        idUsuario : state.login.user.id,
        votos: state.votacion.votos
    }
}

export default connect(mapStateToProps, {votar, logout})(withRouter(Candidato));