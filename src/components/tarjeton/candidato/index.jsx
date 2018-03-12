//@flow
import React from 'react';
import './style.css';

type Props = {
    partido: string,
    imgCandidato?: any,
    imgVice?: any,
    nameCandidato?: string,
    nameVice?: string,
    imgPartido?: any,
    idCandidato: number
}


class Candidato extends React.Component<Props>{
    render(){
        return(
            <div className="candidate">
                <h3>{this.props.partido}</h3>
                { (this.props.idCandidato != 0) &&   <img src={this.props.imgPartido} alt=""/>}
                { (this.props.idCandidato != 0) &&   <div className="candidate-data" >
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
            </div>
        )
    }
}

export default Candidato;