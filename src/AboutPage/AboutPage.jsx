import React from 'react';
import './AboutPage.scss';
import sportGirl from '../assets/imgs/sport_girl.webp';

export const About = () => {
    return (
        <main className="page-about">
            <div className="page-about__about-text">
                <h2 className="page-about__about-text_header">ABOUT</h2>
                <p className="page-about__about-text_first-par par">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <p className="page-about__about-text_second-par par">This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
            </div>
            <div className="page-about__img-wrapper">
                <img src={sportGirl} alt="Sport Girl" className="page-about__img-wrapper_img"/>
            </div>
        </main>
    );
};