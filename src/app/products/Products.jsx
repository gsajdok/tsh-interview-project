import React from 'react';
import {Header} from "./Header";

export const Products = () => {
  return (
    <>
        <Header/>
        <section className="products">
            <div className="products__wrapper">
                <div className="products__list">
                    <div className="product">
                        <div className="product__image">
                            <img src="https://picsum.photos/640/480?random=1074" alt=""/>
                            <div className="product__image__promo"><span>Promo</span></div>
                        </div>
                        <div className="product__text">
                            <div className="product__title"><h2>White Watch</h2></div>
                            <div className="product__description"><p>How To Protect Your Computer Very Useful Tips</p>
                            </div>
                            <div className="product__rating">S S N N N</div>
                            <div className="product__details"><a href="">Show Details</a></div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product__image">
                            <img src="https://picsum.photos/640/480?random=1074" alt=""/>
                            <div className="product__image__promo"><span>Promo</span></div>
                        </div>
                        <div className="product__text">
                            <div className="product__title"><h2>White Watch</h2></div>
                            <div className="product__description"><p>How To Protect Your Computer Very Useful Tips</p>
                            </div>
                            <div className="product__rating">S S N N N</div>
                            <div className="product__details"><a href="">Show Details</a></div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product__image">
                            <img src="https://picsum.photos/640/480?random=1074" alt=""/>
                            <div className="product__image__promo"><span>Promo</span></div>
                        </div>
                        <div className="product__text">
                            <div className="product__title"><h2>White Watch</h2></div>
                            <div className="product__description"><p>How To Protect Your Computer Very Useful Tips</p>
                            </div>
                            <div className="product__rating">S S N N N</div>
                            <div className="product__details"><a href="">Show Details</a></div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product__image">
                            <img src="https://picsum.photos/640/480?random=1074" alt=""/>
                            <div className="product__image__promo"><span>Promo</span></div>
                        </div>
                        <div className="product__text">
                            <div className="product__title"><h2>White Watch</h2></div>
                            <div className="product__description"><p>How To Protect Your Computer Very Useful Tips</p>
                            </div>
                            <div className="product__rating">S S N N N</div>
                            <div className="product__details"><a href="">Show Details</a></div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product__image">
                            <img src="https://picsum.photos/640/480?random=1074" alt=""/>
                            <div className="product__image__promo"><span>Promo</span></div>
                        </div>
                        <div className="product__text">
                            <div className="product__title"><h2>White Watch</h2></div>
                            <div className="product__description"><p>How To Protect Your Computer Very Useful Tips</p>
                            </div>
                            <div className="product__rating">S S N N N</div>
                            <div className="product__details"><a href="">Show Details</a></div>
                        </div>
                    </div>
                </div>
                <div className="products__pages">
                    <a href="">First</a>
                    <div className="products__pages__digits">
                        <a href="">1</a>
                        <a href="">2</a>
                        <a href="">3</a>
                        ...
                        <a href="">8</a>
                        <a href="">9</a>
                        <a href="">10</a>
                    </div>
                    <a href="">Last</a>
                </div>
            </div>
        </section>
    </>
  );
};
