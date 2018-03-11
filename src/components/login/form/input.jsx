// @flow
import React from 'react';
import './input.css';
type Props = {
    type: string,
    placeholder: string,
    img: any
}

class InputLogin extends React.Component<Props>{
    render(){
        return(
            <div className="input-login" >
                <div className="input-login-cont-img">
                    <img className="input-login-img" src={this.props.img} alt=""/>
                    <hr/>
                </div>
                <input
                    className="input-login-form"
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                />
            </div>
        )
    }
}

export default InputLogin