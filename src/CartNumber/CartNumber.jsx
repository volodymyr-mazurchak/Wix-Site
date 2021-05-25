import React from 'react';
import './CartNumber.scss';

export class CartNumber extends React.Component {
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
            document.querySelector('.cart-container').classList.remove('active');
            document.querySelector('.page-header__black-background').style.display = "none";
        }
        return (
            <div className="cart-container">
                <div className="cart-container__header">
                    <button className="cart-container__header_button" onClick={this.handleClick}>&gt;</button>
                    <span className="cart-container__header_text">Cart</span>
                </div>
                <div className="cart-container__main">
                    <span className="cart-container__main_text">Cart is empty</span>
                </div>
            </div>
        );
    }
};
