import React from 'react';
import './BackToTopBtn.scss';
import {SvgBackToTopBtn} from '../SVG/SVG.tsx';

export class BackToTopBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const backToTop = document.querySelector('.back-to-top');
        window.addEventListener('scroll', function() {
            clearTimeout(this.clear);
            backToTop.style.opacity = 1;
            this.clear = setTimeout(() => {
                backToTop.style.opacity = 0;
            }, 3000);
        }); 
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    render() {
        return (
            <div className="back-to-top">
                <SvgBackToTopBtn />
            </div>
        );
    }
}