// @flow
import React from 'react';
import { connect } from 'react-redux';
import Candidate from '../../components/tarjeton/candidato';
import type { Candidato } from '../../moduleTypes';
import './stilo.css';

import ImgPartido1 from '../../components/media/Logo-partido-verde.png';
import ImgCandidate1 from '../../components/media/candidate1.jpg';
import ImgCandidate1Vice from '../../components/media/candidate3.3.jpg';

import ImgPartido2 from '../../components/media/polo-democratico.png';
import ImgCandidate2 from '../../components/media/candidate2.jpg';
import ImgCandidate2Vice from '../../components/media/candidate2.2.jpg';

import ImgPartido3 from '../../components/media/decentes.jpg';
import ImgCandidate3 from '../../components/media/candidate3.jpg';
import ImgCandidate3Vice from '../../components/media/candidate1.1.jpg';

import ImgPartido4 from '../../components/media/movimiento-mira.png';
import ImgCandidate4 from '../../components/media/candidate4.jpg';
import ImgCandidate4Vice from '../../components/media/candidate4.4.jpg';

import ImgPartido5 from '../../components/media/partido-u.png';
import ImgCandidate5 from '../../components/media/candidate5.jpg';
import ImgCandidate5Vice from '../../components/media/candidate5.5.jpg';

type Props = {
    candidatos : Array<Candidato>,
    votos: []
}


class Prescidencia extends React.Component<Props>{
    render(){
        console.log(this.props.votos);
        return(
            <div id="page-tarjeton" >
                <div id="bandera-fondo">
                    <div id="yellow" />
                    <div id="blue" />
                    <div  id="red" />
                </div>
                <div className="page-tarjeton-cont">
                    <h2>VOTO PARA FÓRMULA DE PRESIDENTE Y<br/>VICEPRESIDENTE DE LA REPUBLICA</h2>
                    <div className="cont-candidates">
                        <div className="row-candidates" >
                            <Candidate
                                idCandidato={this.props.candidatos[1].id}
                                imgPartido={ImgPartido1}
                                partido={this.props.candidatos[1].partido}
                                nameCandidato={this.props.candidatos[1].name}
                                nameVice={this.props.candidatos[1].viceName}
                                imgCandidato={ImgCandidate1}
                                imgVice={ImgCandidate1Vice}
                                />
                            <Candidate
                                idCandidato={this.props.candidatos[2].id}
                                imgPartido={ImgPartido2}
                                partido={this.props.candidatos[2].partido}
                                nameCandidato={this.props.candidatos[2].name}
                                nameVice={this.props.candidatos[2].viceName}
                                imgCandidato={ImgCandidate2}
                                imgVice={ImgCandidate2Vice}
                                />
                            <Candidate
                                idCandidato={this.props.candidatos[3].id}
                                imgPartido={ImgPartido3}
                                partido={this.props.candidatos[3].partido}
                                nameCandidato={this.props.candidatos[3].name}
                                nameVice={this.props.candidatos[3].viceName}
                                imgCandidato={ImgCandidate3}
                                imgVice={ImgCandidate3Vice}
                                />
                        </div>
                        <div className="row-candidates" >
                        <Candidate
                                idCandidato={this.props.candidatos[4].id}
                                imgPartido={ImgPartido4}
                                partido={this.props.candidatos[4].partido}
                                nameCandidato={this.props.candidatos[4].name}
                                nameVice={this.props.candidatos[4].viceName}
                                imgCandidato={ImgCandidate4}
                                imgVice={ImgCandidate4Vice}
                                />
                            <Candidate
                                idCandidato={this.props.candidatos[5].id}
                                imgPartido={ImgPartido5}
                                partido={this.props.candidatos[5].partido}
                                nameCandidato={this.props.candidatos[5].name}
                                nameVice={this.props.candidatos[5].viceName}
                                imgCandidato={ImgCandidate5}
                                imgVice={ImgCandidate5Vice}
                                />
                            <Candidate
                                idCandidato={this.props.candidatos[0].id}
                                partido="Voto en blanco"
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