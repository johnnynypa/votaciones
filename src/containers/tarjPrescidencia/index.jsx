// @flow
import React from 'react';
import { connect } from 'react-redux';
import Candidate from '../../components/tarjeton/candidato';
import type { Candidato } from '../../moduleTypes';
import './stilo.css';

type Props = {
    candidatos : Array<Candidato>,
    votos: []
}


class Prescidencia extends React.Component<Props>{
    render(){
        console.log(this.props.votos);
        return(
            <div id="page-tarjeton" >
                <div className="page-tarjeton-cont">
                    <h2>VOTO PARA FÓRMULA DE PRESIDENTE Y<br/>VICEPRESIDENTE DE LA REPUBLICA</h2>
                    <div className="cont-candidates">
                        <div className="row-candidates" >
                            <Candidate
                                idCandidato={this.props.candidatos[1].id}
                                nameCandidato={this.props.candidatos[1].name}
                                // imgCandidato={ImgCandidate1}
                                />
                            <Candidate
                                idCandidato={this.props.candidatos[2].id}
                                nameCandidato={this.props.candidatos[2].name}
                                // imgCandidato={ImgCandidate2}
                                />
                            <Candidate
                                idCandidato={this.props.candidatos[0].id}
                                nameCandidato="Voto en blanco"
                                />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        candidatos: state.votacion.candidatos,
        votos: state.votacion.votos
    }
}

export default connect(mapStateToProps)(Prescidencia)