import React from 'react';
import {Link} from "react-router-dom";
import './Footer.scss';

export class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.handleLinkClick = this.handleLinkClick.bind(this);
      this.handleHrefClick = this.handleHrefClick.bind(this);
      this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }
    componentDidMount() {
        const email = document.querySelector('.page-footer__join_email');
        email.addEventListener('blur', () => {
            if(!email.value.match(/^.+@.+\.[a-zA-Z]{2,63}$/)){
                email.classList.add('active-email'); 
            } else {
                email.classList.remove('active-email');
            }
        });
    } 

    handleLinkClick() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        this.handleHrefClick();
    }

    handleHrefClick() {
        const email = document.querySelector('.page-footer__join_email');
        email.classList.remove('active-email'); 
    }

    handleSubmitClick(e) {
        e.preventDefault();
        document.querySelector('.page-footer__join_email').value = "";
        document.querySelector('.page-footer__join_submit').focus();
        this.handleHrefClick();
        document.querySelector('.page-footer__join_thanks-text').classList.add('active-thanks-text')
        setTimeout(() => {
            document.querySelector('.page-footer__join_thanks-text').classList.remove('active-thanks-text');
        }, 3000);
    } 

    render() {
        return (
          <footer className="page-footer">
              <div className="page-footer__hr"></div>
              <div className="page-footer__up">
                  <div className="page-footer__cielo-apparel container">
                      <p className="page-footer__cielo-apparel_header headers">
                          Cielo Apparel
                      </p>
                      <Link to="/" className="page-footer__cielo-apparel_text link" onClick={this.handleLinkClick}>
                          Home
                      </Link>
                      <Link to="/shop" className="page-footer__cielo-apparel_text link" onClick={this.handleLinkClick}>
                          Shop
                      </Link>
                      <Link to="/about" className="page-footer__cielo-apparel_text link" onClick={this.handleLinkClick}>
                          About
                      </Link>
                      <Link to="/" className="page-footer__cielo-apparel_text link" onClick={this.handleLinkClick}>
                          Forum
                      </Link>
                      <Link to="/contact" className="page-footer__cielo-apparel_text link" onClick={this.handleLinkClick}>
                          Contact
                      </Link>
                  </div>
                  <div className="page-footer__explore container">
                    <p className="page-footer__explore_header headers">
                        Explore
                    </p>
                    <Link to="/" className="page-footer__explore_text link" onClick={this.handleLinkClick}>
                          FAQ
                    </Link>
                    <Link to="/" className="page-footer__explore_text link" onClick={this.handleLinkClick}>
                          Shipping &#38; Returns
                    </Link>
                    <Link to="/" className="page-footer__explore_text link" onClick={this.handleLinkClick}>
                          Store Policy
                    </Link>
                    <Link to="/" className="page-footer__explore_text link" onClick={this.handleLinkClick}>
                          Payment Methods
                    </Link>
                  </div>
                  <div className="page-footer__join container">
                    <p className="page-footer__join_header headers">
                        Join our Newsletter
                    </p>
                    <form className="page-footer__join_form" onSubmit={this.handleSubmitClick}>
                        <input type="email" placeholder="Enter your email here*" className="page-footer__join_email" required pattern="^.+@.+\.[a-zA-Z]{2,63}$"/>
                        <input type="submit" value="Subscribe Now" className="page-footer__join_submit"/> 
                    </form>
                    <p className="page-footer__join_thanks-text">
                        Thanks for Submitting!
                    </p>
                  </div>
                  <div className="page-footer__follow-us container">
                    <p className="page-footer__follow-us_header headers">
                        Follow Us
                    </p>
                    <a href="https://www.facebook.com/wix" target="_blank"  rel="noreferrer" className="page-footer__follow-us_text link" onClick={this.handleHrefClick}>Facebook</a>
                    <a href="https://twitter.com/wix" target="_blank" rel="noreferrer" className="page-footer__follow-us_text link" onClick={this.handleHrefClick}>Twitter</a>
                    <a href="https://www.instagram.com/wix/" target="_blank" rel="noreferrer" className="page-footer__follow-us_text link" onClick={this.handleHrefClick}>Instagram</a>
                    <a href="https://www.pinterest.com/wixcom/_created/" target="_blank" rel="noreferrer" className="page-footer__follow-us_text link" onClick={this.handleHrefClick}>Pinterest</a>
                  </div>
              </div>
              <div className="page-footer__hr"></div>
              <p className="page-footer__down">
                <span className="page-footer__down_text">
                    © 2023 by Cielo Apparel. Proudly created with&nbsp; 
                    <a href="https://www.wix.com/?utm_campaign=vir_created_with" 
                    target="_blank" rel="noreferrer" 
                    className="page-footer__down_link" 
                    onClick={this.handleHrefClick}>Wix.com</a>
                </span>
              </p>
          </footer>
      );
    }
}