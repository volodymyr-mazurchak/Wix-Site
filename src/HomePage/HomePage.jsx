import React from 'react';
import {Link} from "react-router-dom";
import './HomePage.scss';
import img1 from '../assets/imgs/home_img_1.webp';
import img2 from '../assets/imgs/home_img_2.webp';
import img3 from '../assets/imgs/home_img_3.webp';
import runningTop from '../assets/imgs/running_top.webp';
import runningShorts from '../assets/imgs/running_shorts.webp';
import seamlessBra from '../assets/imgs/seamless_bra.webp';
import seamlessBraHover from '../assets/imgs/seamless_bra_hover.webp';
import printedLeggings from '../assets/imgs/printed_leggings.webp';
import girl1 from '../assets/imgs/girl_1.jpg';
import girl2 from '../assets/imgs/girl_2.jpg';
import girl3 from '../assets/imgs/girl_3.jpg';
import girl4 from '../assets/imgs/girl_4.jpg';
import girl5 from '../assets/imgs/girl_5.jpg';
import girl6 from '../assets/imgs/girl_6.jpg';
import girl7 from '../assets/imgs/girl_7.jpg';
import girl8 from '../assets/imgs/girl_8.jpg';
import girl9 from '../assets/imgs/girl_9.jpg';
import girl10 from '../assets/imgs/girl_10.jpg';
import girl11 from '../assets/imgs/girl_11.jpg';
import girl12 from '../assets/imgs/girl_12.jpg';
import nextArrow from '../assets/imgs/next_btn.png';
import previousArrow from '../assets/imgs/previous_btn.png';


export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleNextArrow = this.handleNextArrow.bind(this);
        this.handlePreviousArrow = this.handlePreviousArrow.bind(this); 
       this.hundred = 0;
       this.clear = 0;
    }
    
    componentDidMount() {
        const anchor = document.querySelector('a[href^="#"]');
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    handlePreviousArrow() {
        this.hundred -= 100;
        document.querySelector(".section-girls-img").style.transform = `translateX(-${this.hundred}%)`;
        document.querySelector(".section-girls-img").style.transition = "all 0.6s";
    }

    handleNextArrow() {
        this.hundred += 100;
        document.querySelector(".section-girls-img").style.transform = `translateX(-${this.hundred}%)`;
        document.querySelector(".section-girls-img").style.transition = "all 0.6s";
    }

    render() {
        return (
            <main className="page-home">
                <div className="section-video">
                    <div className="section-video__text-block">
                        <span className="section-video__text">Introducing Your New Workout Wardrobe</span>
                        <Link 
                            to="/shop" 
                            className="section-video__btn-wrapper-link"
                        >
                            <button className="section-video__btn">Start Shopping</button>
                        </Link>
                    </div>
                    <div className="section-video__video-block">
                        <video 
                            className="section-video__video" 
                            role="presentation" 
                            crossOrigin="anonymous" playsInline={true} 
                            preload="auto" muted={true} loop="loop" 
                            autoPlay="autoplay" tabIndex="-1"
                            src="https://video.wixstatic.com/video/ea26fd_8c104192d964488b8ab4c8ab031223f8/720p/mp4/file.mp4">
                            Your browser does not support the video or formats.    
                        </video>
                    </div>
                </div>
                <div className="section-three-img">
                    <figure className="section-three-img__img-wrapper">
                        <img 
                            className="section-three-img__img-wrapper_img" 
                            src={img1} 
                            alt="The Cielo Story" 
                        />
                        <Link 
                        to="/about" 
                        className="section-three-img__img-wrapper_text"
                      >
                        The Cielo Story
                      </Link>
                    </figure>
                    <figure className="section-three-img__img-wrapper">
                        <img 
                            className="section-three-img__img-wrapper_img"
                            src={img2} 
                            alt="View Our Collection" 
                        />
                        <Link 
                        to="/shop" 
                        className="section-three-img__img-wrapper_text"
                      >
                        View Our Collection
                      </Link>
                    </figure>
                    <figure className="section-three-img__img-wrapper">
                        <img 
                            className="section-three-img__img-wrapper_img"
                            src={img3} 
                            alt="Join Our Community" 
                        />
                        <a href="#home" className="section-three-img__img-wrapper_text third-text">Join Our Community</a>
                    </figure>
                </div>
                <div className="section-latest">
                    <p className="section-latest__text">LATEST ARRIVALS</p>
                </div>
                <div className="section-arrival-imgs">
                        <div className="section-arrival-imgs__img-wrapper">
                            <div className="section-arrival-imgs__new-arrival">
                                <span className="section-arrival-imgs__new-arrival_text">New Arrival</span>
                            </div>
                            <img src={runningTop} alt="Running Top" className="section-arrival-imgs__img" />
                            <div className="section-arrival-imgs__quick-view">
                                <span className="section-arrival-imgs__quick-view_text">Quick View</span>
                            </div>
                            <p className="section-arrival-imgs__text">Running Top</p>
                            <p className="section-arrival-imgs__price">19,00₴</p>
                        </div>
                        <div className="section-arrival-imgs__img-wrapper">
                            <div className="section-arrival-imgs__new-arrival">
                                <span className="section-arrival-imgs__new-arrival_text">New Arrival</span>
                            </div>
                            <img src={runningShorts} alt="Running Shorts" className="section-arrival-imgs__img" />
                            <div className="section-arrival-imgs__quick-view">
                                <span className="section-arrival-imgs__quick-view_text">Quick View</span>
                            </div>
                            <p className="section-arrival-imgs__text">Running Shorts</p>
                            <p className="section-arrival-imgs__price">9,00₴</p>
                        </div>
                        <div className="section-arrival-imgs__img-wrapper">
                            <div className="section-arrival-imgs__new-arrival">
                                <span className="section-arrival-imgs__new-arrival_text">New Arrival</span>
                            </div>
                            <img src={seamlessBra} alt="Seamless Bra" className="section-arrival-imgs__img seamless-bra" />
                            <img src={seamlessBraHover} alt="Seamless Bra" className="section-arrival-imgs__img seamless-bra-hover" />
                            <div className="section-arrival-imgs__quick-view">
                                <span className="section-arrival-imgs__quick-view_text">Quick View</span>
                            </div>
                            <p className="section-arrival-imgs__text">Seamless Bra</p>
                            <p className="section-arrival-imgs__price">18,00₴</p>
                        </div>
                        <div className="section-arrival-imgs__img-wrapper">
                            <div className="section-arrival-imgs__new-arrival">
                                <span className="section-arrival-imgs__new-arrival_text">New Arrival</span>
                            </div>
                            <img src={printedLeggings} alt="Printed Leggings" className="section-arrival-imgs__img" />
                            <div className="section-arrival-imgs__quick-view">
                                <span className="section-arrival-imgs__quick-view_text">Quick View</span>
                            </div>
                            <p className="section-arrival-imgs__text">Printed Leggings</p>
                            <p className="section-arrival-imgs__price">28,00₴</p>
                        </div>
                </div>
                <div className="group-girls-text">
                    <div className="section-girls-img">
                            <div className="section-girls-img__column">
                                <img src={girl1} alt="Girl1" className="section-girls-img__img" />
                                <p className="section-girls-img__text-wrapper">
                                    <span className="section-girls-img__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</span>
                                </p>
                                <img src={nextArrow} alt="Next Arrow" className="section-girls-img__arrow-next small-btn" onClick={this.handleNextArrow}/>
                            </div>
                            <div className="section-girls-img__column">
                                <img src={girl2} alt="Girl2" className="section-girls-img__img" />
                                <p className="section-girls-img__text-wrapper">
                                    <span className="section-girls-img__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</span>
                                </p>
                                <img src={previousArrow} alt="Prevous Arrow" className="section-girls-img__arrow-previous small-btn" onClick={this.handlePreviousArrow} />
                                <img src={nextArrow} alt="Next Arrow" className="section-girls-img__arrow-next small-btn" onClick={this.handleNextArrow}/>
                            </div>
                            <div className="section-girls-img__column">
                                <img src={girl3} alt="Girl3" className="section-girls-img__img" />
                                <p className="section-girls-img__text-wrapper">
                                    <span className="section-girls-img__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</span>
                                </p>
                                <img src={previousArrow} alt="Prevous Arrow" className="section-girls-img__arrow-previous small-btn" onClick={this.handlePreviousArrow} />
                                <img src={nextArrow} alt="Next Arrow" className="section-girls-img__arrow-next small-btn" onClick={this.handleNextArrow}/>
                            </div>
                            <div className="section-girls-img__column">
                                <img src={girl4} alt="Girl4" className="section-girls-img__img" />
                                <p className="section-girls-img__text-wrapper">
                                    <span className="section-girls-img__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</span>
                                </p>
                                <img src={previousArrow} alt="Prevous Arrow" className="section-girls-img__arrow-previous small-btn" onClick={this.handlePreviousArrow} />
                                <img src={nextArrow} alt="Next Arrow" className="section-girls-img__arrow-next small-btn" onClick={this.handleNextArrow}/>
                            </div>
                            <div className="section-girls-img__column">
                                <img src={girl5} alt="Girl5" className="section-girls-img__img" />
                                <p className="section-girls-img__text-wrapper">
                                    <span className="section-girls-img__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</span>
                                </p>
                                <img src={previousArrow} alt="Prevous Arrow" className="section-girls-img__arrow-previous small-btn" onClick={this.handlePreviousArrow} />
                                <img src={nextArrow} alt="Next Arrow" className="section-girls-img__arrow-next" onClick={this.handleNextArrow}/>
                            </div>
                            <div className="section-girls-img__column">
                                <img src={girl6} alt="Girl6" className="section-girls-img__img" />
                                <p className="section-girls-img__text-wrapper">
                                    <span className="section-girls-img__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</span>
                                </p>
                                <img src={previousArrow} alt="Prevous Arrow" className="section-girls-img__arrow-previous" onClick={this.handlePreviousArrow} />
                                <img src={nextArrow} alt="Next Arrow" className="section-girls-img__arrow-next small-btn" onClick={this.handleNextArrow}/>
                            </div>
                            <div className="section-girls-img__column">
                                <img src={girl7} alt="Girl7" className="section-girls-img__img" />
                                <p className="section-girls-img__text-wrapper">
                                    <span className="section-girls-img__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</span>
                                </p>
                                <img src={previousArrow} alt="Prevous Arrow" className="section-girls-img__arrow-previous small-btn" onClick={this.handlePreviousArrow} />
                                <img src={nextArrow} alt="Next Arrow" className="section-girls-img__arrow-next small-btn" onClick={this.handleNextArrow}/>
                            </div>
                            <div className="section-girls-img__column">
                                <img src={girl8} alt="Girl8" className="section-girls-img__img" />
                                <p className="section-girls-img__text-wrapper">
                                    <span className="section-girls-img__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</span>
                                </p>
                                <img src={previousArrow} alt="Prevous Arrow" className="section-girls-img__arrow-previous small-btn" onClick={this.handlePreviousArrow} />
                                <img src={nextArrow} alt="Next Arrow" className="section-girls-img__arrow-next small-btn" onClick={this.handleNextArrow}/>
                            </div>
                            <div className="section-girls-img__column">
                                <img src={girl9} alt="Girl9" className="section-girls-img__img" />
                                <p className="section-girls-img__text-wrapper">
                                    <span className="section-girls-img__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</span>
                                </p>
                                <img src={previousArrow} alt="Prevous Arrow" className="section-girls-img__arrow-previous small-btn" onClick={this.handlePreviousArrow} />
                                <img src={nextArrow} alt="Next Arrow" className="section-girls-img__arrow-next small-btn" onClick={this.handleNextArrow}/>
                            </div>
                            <div className="section-girls-img__column">
                                <img src={girl10} alt="Girl10" className="section-girls-img__img" />
                                <p className="section-girls-img__text-wrapper">
                                    <span className="section-girls-img__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</span>
                                </p>
                                <img src={previousArrow} alt="Prevous Arrow" className="section-girls-img__arrow-previous small-btn" onClick={this.handlePreviousArrow} />
                                <img src={nextArrow} alt="Next Arrow" className="section-girls-img__arrow-next" onClick={this.handleNextArrow}/>
                            </div>
                            <div className="section-girls-img__column">
                                <img src={girl11} alt="Girl11" className="section-girls-img__img" />
                                <p className="section-girls-img__text-wrapper">
                                    <span className="section-girls-img__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</span>
                                </p>
                                <img src={previousArrow} alt="Previous Arrow" className="section-girls-img__arrow-previous" onClick={this.handlePreviousArrow} />
                                <img src={nextArrow} alt="Next Arrow" className="section-girls-img__arrow-next small-btn" onClick={this.handleNextArrow}/>
                            </div>
                            <div className="section-girls-img__column">
                                <img src={girl12} alt="Girl12" className="section-girls-img__img" />
                                <p className="section-girls-img__text-wrapper">
                                    <span className="section-girls-img__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</span>
                                </p>
                                <img src={previousArrow} alt="Prevous Arrow" className="section-girls-img__arrow-previous small-btn" onClick={this.handlePreviousArrow} />
                            </div>
                    </div>
                    <div className="section-follow-us">
                        <h4 className="section-follow-us__text">FOLLOW US ON INSTAGRAM</h4>
                    </div>
                </div>
            </main>
        );
    }
};