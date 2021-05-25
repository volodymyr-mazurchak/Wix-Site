import React from 'react';
import './ContactPage.scss';
import sportGirlContact from '../assets/imgs/sport_girl_contact.webp';

export class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmitClick = this.handleSubmitClick.bind(this);
      this.handleHrefClick = this.handleHrefClick.bind(this);
    }

    componentDidMount() {
        const name = document.querySelector('.page-contact__contact-text_name');
        const email = document.querySelector('.page-contact__contact-text_email');
        name.addEventListener('blur', () => {
            if(name.value === "") name.classList.add('active-name-email'); 
            else {
                name.classList.remove('active-name-email');
            } 
        });
        email.addEventListener('blur', () => {
            if(!email.value.match(/^.+@.+\.[a-zA-Z]{2,63}$/)) email.classList.add('active-name-email'); 
            else {
                email.classList.remove('active-name-email');
            } 
        }); 
    } 

    handleHrefClick() {
        const name = document.querySelector('.page-contact__contact-text_name');
        const email = document.querySelector('.page-contact__contact-text_email');
        name.classList.remove('active-name-email'); 
        email.classList.remove('active-name-email'); 
    }

    handleSubmitClick(e) {
        e.preventDefault();
        document.querySelector('.page-contact__contact-text_name').value = "";
        document.querySelector('.page-contact__contact-text_email').value = "";
        document.querySelector('.page-contact__contact-text_textarea').value = "";
        document.querySelector('.page-contact__contact-text_submit').focus();
        this.handleHrefClick();
        const thanksText = document.querySelector('.page-contact__contact-text_thanks-text');
        thanksText.classList.add('active-thanks-text');
        setTimeout(() => {
            if(thanksText) {
                thanksText.classList.remove('active-thanks-text');
            }
        }, 3000);
    }

    render() {
        return (
            <main className="page-contact">
                <div className="page-contact__contact-text">
                    <div className="page-contact__contact-text_content-wrapper"> 
                        <h2 className="page-contact__contact-text_header">CONTACT</h2>
                            <p className="page-contact__contact-text_visit-text">VISIT OUR STORE</p>
                            <p className="page-contact__contact-text_address-text">
                                Address: 500 Terry Francois Street<br />
                                San Francisco, CA 94158t<br />
                                Phone: 123-456-7890t<br />
                                Email:  <span className="page-contact__contact-text_link-email">info@my-domain.com</span>
                            </p>
                            <form className="page-contact__contact-text_form" onSubmit={this.handleSubmitClick}>
                                <input type="text" placeholder="Name" required className="page-contact__contact-text_name form-name-email"/>
                                <input type="email" placeholder="Email" required pattern="^.+@.+\.[a-zA-Z]{2,63}$" className="page-contact__contact-text_email form-name-email"/>
                                <textarea placeholder="Type your message here..." className="page-contact__contact-text_textarea"></textarea>
                                <input type="submit" value="Submit" className="page-contact__contact-text_submit"/>
                                <p className="page-contact__contact-text_thanks-text">
                                    Thanks for Submitting!
                                </p>
                            </form>
                            <p className="page-contact__contact-text_stockists-text">STOCKISTS</p>
                            <p className="page-contact__contact-text_first-store stores">
                                Store 1<br />
                                500 Terry Francois Street<br />
                                San Francisco, CA 94158<br />
                                Tel: 123-456-7890
                            </p>
                            <p className="page-contact__contact-text_second-store stores">
                                Store 2<br />
                                500 Terry Francois Street<br />
                                San Francisco, CA 94158<br />
                                Tel: 123-456-7890
                            </p>
                            <p className="page-contact__contact-text_third-store stores">
                                Store 3<br />
                                500 Terry Francois Street<br />
                                San Francisco, CA 94158<br />
                                Tel: 123-456-7890
                            </p>
                            <p className="page-contact__contact-text_fourth-store stores">
                                Store 4<br />
                                500 Terry Francois Street<br />
                                San Francisco, CA 94158<br />
                                Tel: 123-456-7890
                            </p>
                    </div> 
                </div>
                <div className="page-contact__img-wrapper">
                    <img src={sportGirlContact} alt="Sport Girl" className="page-contact__img-wrapper_img"/>
                </div>
            </main>
        );
    }
}