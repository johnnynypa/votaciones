// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import FormLogin from '../../components/login/form';
import Footer from '../../components/login/footer';

import UniMag from '../../components/media/logoUnimag.png';
import './login.css'

type Props = {
    isLogin: boolean,
    history: any
}


class Login extends React.Component<Props, {}>{

    componentWillMount(){
        if(this.props.isLogin){
            this.props.history.push("/prescidente")
        }
    }
    render(){
        return(
            <div id="container-login" >
                <div id="container-son-login" >
                    <div className="son-login son-login-left ">
                        <img src={UniMag} alt=""/>
                    </div>
                    <div className="son-login son-login-right ">
                        <FormLogin />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state: any){
    return {
        isLogin: state.login.isLogin
    }
}

export default connect(mapStateToProps)(withRouter(Login));