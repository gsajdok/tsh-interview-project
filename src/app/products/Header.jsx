import {Link} from "react-router-dom";
import {AppRoute} from "../../routing/AppRoute.enum";
import React from "react";
import Lens from '../../assets/icons/Lens.svg'

export const Header = () => {
    return (
        <header>
        <div className="header__wrapper">
            <div className="logo"><h1 className="logo">join.tsh.io</h1></div>
            <div className="account">
                <Link to={AppRoute.login} className="button button--empty">Log in</Link>
            </div>
            <div className="searchBox">
                <input type="text" id="searchBox" className="searchInput" placeholder="Search"/>
                <button className="searchInput__button"><img src={Lens}/></button>
            </div>
            <div className="filters">
                <div className="filters__checkbox__active">
                    <input type="checkbox" id="checkbox__active" name="checkbox__active"/>
                    <label for="checkbox__active">Active</label>
                </div>
                <div className="filters__checkbox__promo">
                    <input type="checkbox" id="checkbox__promo" name="checkbox__promo"/>
                    <label htmlFor="checkbox__promo">Promo</label>
                </div>
            </div>
        </div>
    </header>
    )
}