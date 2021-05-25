import './loginClick.scss';
import {SvgCrossBtn} from '../SVG/SVG.tsx';
import facebookLogo from '../assets/imgs/facebookLogo.png';
import googleLogo from '../assets/imgs/googleLogo.png';
import React from 'react';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick =  this.handleClick.bind(this);
        this.state = {active: true};
    }

    handleClick() {
        this.setState({ active: false });
    }

    render() {
        if(!this.state.active) {
            this.state.active = true;
            return null;
        }
        return (
            <div className="login-container">
                <button 
                    className="login-container__button-cross"
                    onClick={this.handleClick}
                >
                    <SvgCrossBtn />
                </button>
                <h1 className="login-container__text-header">Sign Up</h1>
                <div className="login-container__subheader-wrapper">
                    <span className="login-container__subheader-text">Already a member?</span>
                    <button className="login-container__subheader-button">Log in</button>
                </div>
                <div className="login-container__auth-wrapper">
                    <button className="login-container__facebook-btn">
                        <img className="login-container__facebook-img" src={facebookLogo} alt="Facebook" />
                        <span className="login-container__facebook-text">
                            Sign up with Facebook
                        </span>
                    </button>
                    <button className="login-container__google-btn">
                        <img className="login-container__google-img" src={googleLogo} alt="Google" />
                        <span className="login-container__google-text">
                            Sign up with Google
                        </span>
                    </button>
                </div>
                <div className="login-container__hr-wrapper">
                    <span className="login-container__hr-text">or</span>
                </div>
                <button className="login-container__email-btn">Sign up with email</button>
            </div>
        );
    }
};
