import React from 'react';

export class ArrivalElement extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
        if(!this.props.arrivalText) {
            const arrivalBlockArr = document.querySelectorAll('.page-shop__img-wrapper_new-arrival-block');
            arrivalBlockArr[this.props.id - 1].style.display = "none";
        }

        if(this.props.arrivalImgHover) {
            const id = this.props.id - 1;
            const imgWrapperArr = document.querySelectorAll('.page-shop__img-wrapper');
            const imgArr = document.querySelectorAll('.simple-img');
            const imgHoverArr = document.querySelectorAll('.img-hover');

            imgWrapperArr[id].addEventListener('mouseover', () => {
                imgArr[id].style.display = "none";
                imgHoverArr[id].style.display = "block";
            });

            imgWrapperArr[id].addEventListener('mouseleave', () => {
                imgArr[id].style.display = "block";
                imgHoverArr[id].style.display = "none";
            });
        }

        if(this.props.arrivalClass) {
            const id = this.props.id - 1;
            const imgWrapperArr = document.querySelectorAll('.page-shop__img-wrapper');
            imgWrapperArr[id].classList.add(this.props.arrivalClass);
        }
    }

    render() {
        return (
            <div className="page-shop__img-wrapper">
                <div className="page-shop__img-wrapper_arrival-img-quick">
                    <div className="page-shop__img-wrapper_new-arrival-block">
                        <span className="page-shop__img-wrapper_new-arrival-text">{this.props.arrivalText}</span>
                    </div>
                    <img src={this.props.arrivalImg} alt={this.props.arrivalName} className="page-shop__img-wrapper_img simple-img" />
                    <img src={this.props.arrivalImgHover} alt={this.props.arrivalName} className="page-shop__img-wrapper_img img-hover" />
                    <div className="page-shop__img-wrapper_quick-view-block">
                        <span className="page-shop__img-wrapper_quick-view-text">Quick View</span>
                    </div>
                </div>
                <div className="page-shop__img-wrapper_name-price-wrapper">
                    <p className="page-shop__img-wrapper_name">{this.props.arrivalName}</p>
                    <p className="page-shop__img-wrapper_price">{this.props.arrivalPrice}</p>
                </div>
            </div>
        );
    }
}