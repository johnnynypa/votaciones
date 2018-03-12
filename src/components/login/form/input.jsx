// @flow
import React from 'react';
import './input.css';
type Props = {
    type: string,
    placeholder: string,
    img: any,
    onChange: Function,
    value: string,
    name: string
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
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    className="input-login-form"
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                />
            </div>
        )
    }
}

export default InputLogin