import React from "react";
import {ReactComponent as Star} from '../../assets/icons/Star.svg';
import {ReactComponent as StarEmpty} from '../../assets/icons/StarEmpty.svg';

export const Product = ({item}) => {
    return (
        <div className="product">
            <div className="product__image">
                <img src={item.image} alt={item.name} className={`${!item.active && "product__image--disabled"}`}/>
                {item.promo && <div className="product__image__promo"><span>Promo</span></div>}
            </div>
            <div className="product__text">
                <div className="product__title"><h2>{item.name}</h2></div>
                <div className="product__description"><p>{item.description}</p>
                </div>
                <div className="product__rating">
                    {Array.from({ length: item.rating }, (e, i) => <Star key={i} className="star"/>)}
                    {item.rating<5 && Array.from({ length: 5-item.rating }, (e, i) => <StarEmpty key={item.rating+i} className="star star--empty"/>)}
                </div>
                <div className="product__details"><a href="" className="button button--filled" disabled={!item.active}>Show Details</a></div>
            </div>
        </div>
    )
}