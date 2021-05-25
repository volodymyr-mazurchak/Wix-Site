import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';
import {SvgLogo, SvgAvatar, SvgCartAndNumber, SvgCrossBtn} from '../SVG/SVG.tsx';
import {Login} from '../Login/loginClick.jsx';
import {CartNumber} from '../CartNumber/CartNumber.jsx';

export class Header extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick =  this.handleLoginClick.bind(this);
      this.handleCartClick = this.handleCartClick.bind(this);
      this.handleLinesClick = this.handleLinesClick.bind(this); 
      this.handleCrossClick = this.handleCrossClick.bind(this);
      this.blackBackClick = this.blackBackClick.bind(this);
      this.state = {
        login: false, 
        cartNumber: false, 
        linesActive: false,
        crossActive: false
      };
    }

    handleLoginClick() {
      this.setState({login: true});
    }

    handleCartClick() {
      this.setState({cartNumber: true});
    }
    
    handleLinesClick() {
      this.setState({linesActive: true});
    } 
    
    handleCrossClick() {
      this.setState({crossActive: true});
    }

    blackBackClick() {
      document.querySelector('.cart-container').classList.remove('active');
      document.querySelector('.page-header__black-background').style.display = "none";
    }


    render() {
      let login;
      if (this.state.login) {
        this.state.login = false;
        login = <Login />;
      } 
      if(this.state.cartNumber) {
        this.state.cartNumber = false;
        document.querySelector('.cart-container').classList.add('active');
        document.querySelector('.page-header__black-background').style.display = "block";
      } 
      if(this.state.linesActive) {
        this.state.linesActive = false;
        document.querySelector('.right-side').classList.add('active');
        document.querySelector('.page-header__button-cross').classList.add('active');
      } 
      if(this.state.crossActive) {
        this.state.crossActive = false;
        document.querySelector('.right-side').classList.remove('active');
        document.querySelector('.page-header__button-cross').classList.remove('active');
      } 
      return (
          <header className="page-header">
            {login}
            <CartNumber />
            <button 
              className="page-header__button-cross"
              onClick={this.handleCrossClick}
            >
              <SvgCrossBtn />
            </button>
            <div className="page-header__black-background" onClick={this.blackBackClick}></div> 
            <div className="page-header__text-wrapper">
              <span className="page-header__text">
                Get 15% OFF - Use Coupon Code CIELO
              </span>
            </div>
            <div className="page-header__hr"></div>
            <div className="page-header__nav">
              <ul className="page-header__nav_ul">
                  <li>
                    <Link to="/" className="page-header__nav_logo-wrapper">
                      <SvgLogo width={50} height={50} />
                      <span>Cielo Apparel</span>
                    </Link>
                  </li>
              </ul>
              <div className="page-header__nav_cart-lines">
                <div className="page-header__nav_cart" onClick={this.handleCartClick}>
                    <SvgCartAndNumber width={42} height={17} />
                </div>
                <div className="page-header__tripple-line" onClick={this.handleLinesClick}>
                  <div className="page-header__line"></div>
                  <div className="page-header__line"></div>
                  <div className="page-header__line"></div>
                </div>
              </div>
              <ul className="page-header__nav_ul right-side">
                    <li className="page-header__nav_li">
                      <Link 
                        to="/" 
                        className="page-header__nav_link"
                        onClick={this.handleCrossClick}
                      >
                        HOME
                      </Link>
                    </li>
                    <li className="page-header__nav_li">
                      <Link 
                        to="/shop" 
                        className="page-header__nav_link"
                        onClick={this.handleCrossClick}
                      >
                        SHOP
                      </Link>
                    </li>
                    <li className="page-header__nav_li">
                      <Link 
                        to="/about" 
                        className="page-header__nav_link"
                        onClick={this.handleCrossClick}
                      >
                        ABOUT
                      </Link>
                    </li>
                    <li className="page-header__nav_li">
                      <Link 
                        to="/contact" 
                        className="page-header__nav_link"
                        onClick={this.handleCrossClick}
                      >
                        CONTACT
                      </Link>
                    </li>
                  <li className="page-header__nav_login-li">
                    <div className="page-header__nav_login-wrapper" onClick={this.handleLoginClick}>
                      <SvgAvatar width={22} height={22} />
                      <span className="page-header__nav_login">Log In</span>
                    </div> 
                  </li>
                  <li className="page-header__nav_cart-in-ul">
                    <div className="page-header__nav_link" onClick={this.handleCartClick}>
                      <SvgCartAndNumber width={42} height={17} />
                    </div>
                  </li>
              </ul>
            </div>
          </header>
          
      );
    }
};