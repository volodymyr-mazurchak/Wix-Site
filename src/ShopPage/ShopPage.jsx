import React from 'react';
import './ShopPage.scss';
import shopClothes from '../assets/imgs/shop_clothes.webp';
import {SvgPlus, SvgMinus, SvgCrossBtn} from '../SVG/SVG.tsx';
import {ArrivalElement} from './ArrivalElement.jsx';
import imProduct from '../assets/imgs/im_product.webp';
import seamlessBra from '../assets/imgs/seamless_bra.webp';
import seamlessBraHover from '../assets/imgs/seamless_bra_hover.webp';
import imProduct2 from '../assets/imgs/im_product_2.webp';
import imProduct3 from '../assets/imgs/im_product_3.webp';
import printedLeggings from '../assets/imgs/printed_leggings.webp';
import imProduct4 from '../assets/imgs/im_product_4.webp';
import imProduct4Hover from '../assets/imgs/im_product_4_hover.webp';
import imProduct5 from '../assets/imgs/im_product_5.webp';
import imProduct6 from '../assets/imgs/im_product_6.webp';
import runningTop from '../assets/imgs/running_top.webp';
import imProduct7 from '../assets/imgs/im_product_7.webp';
import imProduct7Hover from '../assets/imgs/im_product_7_hover.webp';
import imProduct8 from '../assets/imgs/im_product_8.webp';
import imProduct9 from '../assets/imgs/im_product_9.webp';
import runningShorts from '../assets/imgs/running_shorts.webp';
import imProduct10 from '../assets/imgs/im_product_10.webp';
import imProduct10Hover from '../assets/imgs/im_product_10_hover.webp';
import imProduct11 from '../assets/imgs/im_product_11.webp';
import imProduct12 from '../assets/imgs/im_product_12.webp';

export class Shop extends React.Component {
    constructor(props) {
      super(props);
      this.handleClearFilters = this.handleClearFilters.bind(this);
      this.handleColorHoverOut = this.handleColorHoverOut.bind(this);
      this.handleRangeChange = this.handleRangeChange.bind(this); 
      this.handleBtnFilterClick = this.handleBtnFilterClick.bind(this);
      this.handleCrossClick = this.handleCrossClick.bind(this);
      this.handleClearBtnClick = this.handleClearBtnClick.bind(this);
      this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
    }

    componentDidMount() {
        const clearBtn = document.querySelector('.page-shop__filter_clear-btn');
        clearBtn.disabled = "true";
    }

    handleCategoryButtonClick(category) {
        switch(category) {
            case "collection":
                const plusCollection = document.querySelector('.plus-collection');
                const minusCollection = document.querySelector('.minus-collection');
                const hiddenList = document.querySelector('.page-shop__filter_hidden-list');
                const btns = document.querySelectorAll('.page-shop__filter_hidden-list_btn');

                plusCollection.classList.toggle('plus-minus-disactive');
                minusCollection.classList.toggle('plus-minus-active');
                hiddenList.classList.toggle('hidden-list-active');

                for(const btn of btns) {
                    btn.classList.toggle('btn-active-color');
                }
                break;
            case "price":
                const plusPrice = document.querySelector('.plus-price');
                const minusPrice = document.querySelector('.minus-price');
                const hiddenRange = document.querySelector('.page-shop__filter_hidden-range');

                plusPrice.classList.toggle('plus-minus-disactive');
                minusPrice.classList.toggle('plus-minus-active');
                hiddenRange.classList.toggle('hidden-range-active');
                break;
            case "color":
                const plusColor = document.querySelector('.plus-color');
                const minusColor = document.querySelector('.minus-color');
                const hiddenColor = document.querySelector('.page-shop__filter_hidden-color');

                plusColor.classList.toggle('plus-minus-disactive');
                minusColor.classList.toggle('plus-minus-active');
                hiddenColor.classList.toggle('hidden-color-active');
                break;
            case "size":
                const plusSize = document.querySelector('.plus-size');
                const minusSize = document.querySelector('.minus-size');
                const hiddenCheckboxes = document.querySelector('.page-shop__filter_hidden-checkbox');

                plusSize.classList.toggle('plus-minus-disactive');
                minusSize.classList.toggle('plus-minus-active');
                hiddenCheckboxes.classList.toggle('hidden-checkbox-active');
                break;
        }
    }

    handleRangeChange() { 
        const label = document.querySelector('.page-shop__filter_hidden-range_second-label');
        const range = document.querySelector('.page-shop__filter_hidden-range_range');
        label.innerHTML = `${range.value},00₴`;  
    } 

    handleColorHover(color) {
        const colorText = document.querySelector('.page-shop__filter_color');
        colorText.innerHTML = `Color: ${color}`;
    }

    handleColorHoverOut() {
        const colorText = document.querySelector('.page-shop__filter_color');
        colorText.innerHTML = "Color";
    }

    handleClickСheckbox(checkbox) {
        const large = document.querySelector('.page-shop__filter_hidden-checkbox_large-checkbox');
        const medium = document.querySelector('.page-shop__filter_hidden-checkbox_medium-checkbox');
        const small = document.querySelector('.page-shop__filter_hidden-checkbox_small-checkbox');
        const clearFilter = document.querySelector('.page-shop__filter_clear-filters');
        const clearBtn = document.querySelector('.page-shop__filter_clear-btn');
        const windowWidth = window.screen.availWidth;
        if(windowWidth > 1200) {
            switch(checkbox) {
                case "large":
                    if(large.checked) {
                        clearFilter.style.display = "block";
                        return;
                    }
                    if(!medium.checked && !small.checked) clearFilter.style.display = "none";
                    break;
                case "medium":
                    if(medium.checked) {
                        clearFilter.style.display = "block";
                        return;
                    }
                    if(!large.checked && !small.checked) clearFilter.style.display = "none";
                    break;
                case "small":
                    if(small.checked) {
                        clearFilter.style.display = "block";
                        return;
                    }
                    if(!large.checked && !medium.checked) clearFilter.style.display = "none";
                    break;
            }
        } else {
            switch(checkbox) {
                case "large":
                    if(large.checked) {
                        clearBtn.disabled = "";
                        return;
                    }
                    if(!medium.checked && !small.checked) clearBtn.disabled = "true";
                    break;
                case "medium":
                    if(medium.checked) {
                        clearBtn.disabled = "";
                        return;
                    }
                    if(!large.checked && !small.checked) clearBtn.disabled = "true";
                    break;
                case "small":
                    if(small.checked) {
                        clearBtn.disabled = "";
                        return;
                    }
                    if(!large.checked && !medium.checked) clearBtn.disabled = "true";
                    break;
            }
        }
    }

    handleClickLabel(label) {
        const large = document.querySelector('.page-shop__filter_hidden-checkbox_large-checkbox');
        const medium = document.querySelector('.page-shop__filter_hidden-checkbox_medium-checkbox');
        const small = document.querySelector('.page-shop__filter_hidden-checkbox_small-checkbox');
        const clearFilter = document.querySelector('.page-shop__filter_clear-filters');
        const clearBtn = document.querySelector('.page-shop__filter_clear-btn');
        const windowWidth = window.screen.availWidth;

        if(windowWidth > 1200) {
            switch(label) {
                case "large":
                    if(large.checked) {
                        large.checked = "";
                        if(!medium.checked && !small.checked) clearFilter.style.display = "none";
                        return;
                    }
                    large.checked = "true";
                    clearFilter.style.display = "block";
                    break;
                case "medium":
                    if(medium.checked) {
                        medium.checked = "";
                        if(!large.checked && !small.checked) clearFilter.style.display = "none";
                        return;
                    }
                    medium.checked = "true";
                    clearFilter.style.display = "block";
                    break;
                case "small":
                    if(small.checked) {
                        small.checked = "";
                        if(!large.checked && !medium.checked) clearFilter.style.display = "none";
                        return;
                    }
                    small.checked = "true";
                    clearFilter.style.display = "block";
                    break;
            }
        } else {
            switch(label) {
                case "large":
                    if(large.checked) {
                        large.checked = "";
                        if(!medium.checked && !small.checked) clearBtn.disabled = "true";
                        return;
                    }
                    large.checked = "true";
                    clearBtn.disabled = "";
                    break;
                case "medium":
                    if(medium.checked) {
                        medium.checked = "";
                        if(!large.checked && !small.checked) clearBtn.disabled = "true";
                        return;
                    }
                    medium.checked = "true";
                    clearBtn.disabled = "";
                    break;
                case "small":
                    if(small.checked) {
                        small.checked = "";
                        if(!large.checked && !medium.checked) clearBtn.disabled = "true";
                        return;
                    }
                    small.checked = "true";
                    clearBtn.disabled = "";
                    break;
            }
        }  
    }

    handleClearFilters() {
        const checkboxes = document.querySelectorAll('.checkbox');
        const clearFilter = document.querySelector('.page-shop__filter_clear-filters');
        for(const elem of checkboxes) {
            elem.checked = "";
        }
        clearFilter.style.display = "none";
    }

    handleClearBtnClick() {
        const checkboxes = document.querySelectorAll('.checkbox');
        const clearBtn = document.querySelector('.page-shop__filter_clear-btn');
        for(const elem of checkboxes) {
            elem.checked = "";
        }
        clearBtn.disabled = "true";
    }

    handleBtnFilterClick() {
        const filter = document.querySelector('.page-shop__filter');
        filter.classList.add('filter-active');
    }

    handleCrossClick() {
        const filter = document.querySelector('.page-shop__filter');
        filter.classList.remove('filter-active');
    }

    handleLoadMoreClick() {
        const loadMore = document.querySelector('.page-shop__arrival-imgs_btn-wrapper');
        const hiddenImgs = document.querySelectorAll('.hidden-imgs');
        
        loadMore.style.display = "none";
        for(const elem of hiddenImgs) {
            elem.classList.remove('hidden-imgs');
        }
    }

    render() {
        return (
            <main className="page-shop">
                <section className="page-shop__text-img-wrapper">
                    <div className="page-shop__shop-text">
                        <h2 className="page-shop__shop-text_text">SHOP</h2>
                    </div>
                    <div className="page-shop__shop-img">
                        <img src={shopClothes} className="page-shop__shop-img_img" alt="Shop"/>
                    </div>
                </section>
                <section className="page-shop__filter-btn-wrapper">
                    <button className="page-shop__filter-btn-wrapper_btn" onClick={this.handleBtnFilterClick}>Filter</button>
                </section>
                <section className="page-shop__filter-imgs-wrapper">
                    <aside className="page-shop__filter">
                        <div className="page-shop__filter_header-btn-wrapper">
                            <p className="page-shop__filter_header">Filter by</p>
                            <button className="page-shop__filter_button-cross" onClick={this.handleCrossClick}>
                                <SvgCrossBtn />
                            </button>
                        </div>
                        <div className="page-shop__filter_row">
                            <div className="page-shop__filter_categories-button" onClick={() => this.handleCategoryButtonClick("collection")}>
                                <p className="page-shop__filter_collection categories">Collection</p>
                                <p className="page-shop__filter_plus plus-collection"><SvgPlus /></p>
                                <p className="page-shop__filter_minus minus-collection"><SvgMinus /></p>
                            </div>
                            <div className="page-shop__filter_hidden-list">
                                    <button className="page-shop__filter_hidden-list_btn">All</button>
                                    <button className="page-shop__filter_hidden-list_btn">Sport Bras</button>
                                    <button className="page-shop__filter_hidden-list_btn">Leggings</button>
                                    <button className="page-shop__filter_hidden-list_btn">Shirts</button>
                                    <button className="page-shop__filter_hidden-list_btn">Shorts</button>
                                    <button className="page-shop__filter_hidden-list_btn">New Arrivals</button>
                                    <button className="page-shop__filter_hidden-list_btn">Best Sellers</button>
                            </div>
                        </div>
                        <div className="page-shop__filter_row">
                            <div className="page-shop__filter_categories-button" onClick={() => this.handleCategoryButtonClick("price")}>
                                <p className="page-shop__filter_price categories">Price <span className="page-shop__filter_price-number">(9,00₴ - 40,00₴)</span></p>
                                <p className="page-shop__filter_plus plus-price"><SvgPlus /></p>
                                <p className="page-shop__filter_minus minus-price"><SvgMinus /></p>
                            </div>
                            <div className="page-shop__filter_hidden-range">
                                <input type="range" min="9" max="40" className="page-shop__filter_hidden-range_range" onChange={this.handleRangeChange}/>
                                <div className="page-shop__filter_hidden-range_label-wrapper">
                                    <span className="page-shop__filter_hidden-range_first-label label-price">9,00₴</span>
                                    <span className="page-shop__filter_hidden-range_second-label label-price">40,00₴</span>
                                </div>
                            </div> 
                        </div>
                        <div className="page-shop__filter_row">
                            <div className="page-shop__filter_categories-button" onClick={() => this.handleCategoryButtonClick("color")}>
                                <p className="page-shop__filter_color categories">Color</p>
                                <p className="page-shop__filter_plus plus-color"><SvgPlus /></p>
                                <p className="page-shop__filter_minus minus-color"><SvgMinus /></p>
                            </div>
                            <div className="page-shop__filter_hidden-color">
                                <div className="page-shop__filter_hidden-color_color brown" onMouseEnter={() => this.handleColorHover("Brown")} onMouseLeave={this.handleColorHoverOut}></div>
                                <div className="page-shop__filter_hidden-color_color burgundy" onMouseEnter={() => this.handleColorHover("Burgundy")} onMouseLeave={this.handleColorHoverOut}></div>
                                <div className="page-shop__filter_hidden-color_color gray" onMouseEnter={() => this.handleColorHover("Gray")} onMouseLeave={this.handleColorHoverOut}></div>
                                <div className="page-shop__filter_hidden-color_color green" onMouseEnter={() => this.handleColorHover("Green")} onMouseLeave={this.handleColorHoverOut}></div>
                                <div className="page-shop__filter_hidden-color_color light-green" onMouseEnter={() => this.handleColorHover("Light Green")} onMouseLeave={this.handleColorHoverOut}></div>
                                <div className="page-shop__filter_hidden-color_color navy" onMouseEnter={() => this.handleColorHover("Navy")} onMouseLeave={this.handleColorHoverOut}></div>
                                <div className="page-shop__filter_hidden-color_color purple" onMouseEnter={() => this.handleColorHover("Purple")} onMouseLeave={this.handleColorHoverOut}></div>
                                <div className="page-shop__filter_hidden-color_color teal" onMouseEnter={() => this.handleColorHover("Teal")} onMouseLeave={this.handleColorHoverOut}></div>
                                <div className="page-shop__filter_hidden-color_color violet" onMouseEnter={() => this.handleColorHover("Violet")} onMouseLeave={this.handleColorHoverOut}></div>
                                <div className="page-shop__filter_hidden-color_color yellow" onMouseEnter={() => this.handleColorHover("Yellow")} onMouseLeave={this.handleColorHoverOut}></div>
                            </div>
                        </div>
                        <div className="page-shop__filter_row">
                            <div className="page-shop__filter_categories-button" onClick={() => this.handleCategoryButtonClick("size")}>
                                <p className="page-shop__filter_size categories">Size</p>
                                <p className="page-shop__filter_plus plus-size"><SvgPlus /></p>
                                <p className="page-shop__filter_minus minus-size"><SvgMinus /></p>
                            </div>
                            <div className="page-shop__filter_hidden-checkbox">
                                <input type="checkbox" name="large" className="page-shop__filter_hidden-checkbox_large-checkbox checkbox" onClick={() => this.handleClickСheckbox("large")} />
                                <label htmlFor="large" className="page-shop__filter_hidden-checkbox_large-label label-checkbox" onClick={() => this.handleClickLabel("large")}>Large</label><br />
                                <input type="checkbox" name="medium" className="page-shop__filter_hidden-checkbox_medium-checkbox checkbox" onClick={() => this.handleClickСheckbox("medium")} />
                                <label htmlFor="medium" className="page-shop__filter_hidden-checkbox_medium-label label-checkbox" onClick={() => this.handleClickLabel("medium")}>Medium</label><br />
                                <input type="checkbox" name="small" className="page-shop__filter_hidden-checkbox_small-checkbox checkbox" onClick={() => this.handleClickСheckbox("small")} />
                                <label htmlFor="small" className="page-shop__filter_hidden-checkbox_small-label label-checkbox" onClick={() => this.handleClickLabel("small")}>Small</label>
                            </div>
                        </div>
                        <div className="page-shop__filter_clear-filters">
                            <p className="page-shop__filter_clear-filters_text" onClick={this.handleClearFilters}>Clear filters <span className="page-shop__filter_clear-filters_x">X</span></p>
                        </div>
                        <div className="page-shop__filter_clear-apply-btns-wrapper">
                            <button className="page-shop__filter_clear-btn filter-btn" onClick={this.handleClearBtnClick}>Clear filters</button>
                            <button className="page-shop__filter_apply-btn filter-btn" onClick={this.handleCrossClick}>Apply</button>
                        </div>
                    </aside>
                    <div className="page-shop__arrival-imgs">
                        <ArrivalElement id="1" arrivalImg={imProduct} arrivalName="I'm a Product" arrivalPrice="21,00₴" />
                        <ArrivalElement id="2" arrivalText="New Arrival" arrivalImg={seamlessBra} arrivalImgHover={seamlessBraHover} arrivalName="Seamless Bra" arrivalPrice="18,00₴" />
                        <ArrivalElement id="3" arrivalImg={imProduct2} arrivalName="I'm a Product" arrivalPrice="15,00₴" />
                        <ArrivalElement id="4" arrivalText="Best Seller" arrivalImg={imProduct3} arrivalName="I'm a Product" arrivalPrice="25,00₴" />
                        <ArrivalElement id="5" arrivalText="New Arrival" arrivalImg={printedLeggings} arrivalName="Printed Leggings" arrivalPrice="28,00₴" />
                        <ArrivalElement id="6" arrivalImg={imProduct4} arrivalImgHover={imProduct4Hover} arrivalName="I'm a Product" arrivalPrice="40,00₴" />
                        <ArrivalElement id="7" arrivalText="Best Seller" arrivalImg={imProduct5} arrivalName="I'm a Product" arrivalPrice="21,00₴" />
                        <ArrivalElement id="8" arrivalImg={imProduct6} arrivalName="I'm a Product" arrivalPrice="32,00₴" />
                        <ArrivalElement id="9" arrivalText="New Arrival" arrivalImg={runningTop} arrivalName="Running Top" arrivalPrice="19,00₴" />
                        <ArrivalElement id="10" arrivalImg={imProduct7} arrivalImgHover={imProduct7Hover} arrivalName="I'm a Product" arrivalPrice="22,00₴" />
                        <ArrivalElement id="11" arrivalImg={imProduct8} arrivalName="I'm a Product" arrivalPrice="15,00₴" arrivalClass="hidden-imgs" />
                        <ArrivalElement id="12" arrivalImg={imProduct9} arrivalName="I'm a Product" arrivalPrice="12,00₴" arrivalClass="hidden-imgs"/>
                        <ArrivalElement id="13" arrivalText="New Arrival" arrivalImg={runningShorts} arrivalName="Running Shorts" arrivalPrice="9,00₴" arrivalClass="hidden-imgs"/>
                        <ArrivalElement id="14" arrivalImg={imProduct10} arrivalImgHover={imProduct10Hover} arrivalName="I'm a Product" arrivalPrice="18,00₴" arrivalClass="hidden-imgs"/>
                        <ArrivalElement id="15" arrivalText="Best Seller" arrivalImg={imProduct11} arrivalName="I'm a Product" arrivalPrice="18,00₴" arrivalClass="hidden-imgs"/>
                        <ArrivalElement id="16" arrivalImg={imProduct12} arrivalName="I'm a Product" arrivalPrice="12,00₴" arrivalClass="hidden-imgs"/>
                        <div className="page-shop__arrival-imgs_btn-wrapper">
                            <button className="page-shop__arrival-imgs_btn" onClick={this.handleLoadMoreClick}>Load More</button>
                        </div>
                    </div>
                </section>
            </main>
        ); 
    }
}