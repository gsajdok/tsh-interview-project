import React from "react";

export const Product = ({item}) => {
    return (
        <div key={item.id} className="product">
            <div className="product__image">
                <img src={item.image} alt={item.name} className={`${!item.active && "product__image--disabled"}`}/>
                {item.promo && <div className="product__image__promo"><span>Promo</span></div>}
            </div>
            <div className="product__text">
                <div className="product__title"><h2>{item.name}</h2></div>
                <div className="product__description"><p>{item.description}</p>
                </div>
                <div className="product__rating">{item.rating}</div>
                <div className="product__details"><a href="" className="button button--filled" disabled={!item.active}>Show Details</a></div>
            </div>
        </div>
    )
}