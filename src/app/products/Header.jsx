import {Link} from "react-router-dom";
import {AppRoute} from "../../routing/AppRoute.enum";
import React, {useState} from "react";
import {ReactComponent as Lens} from '../../assets/icons/Lens.svg'

export const Header = ({setSearchQuery, setActiveCheck, setPromoCheck, activeCheck, promoCheck, setCurrentPage}) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setCurrentPage(1);
        setSearchQuery(searchInput);
    }

    return (
        <header>
        <div className="header__wrapper">
            <div className="logo"><h1 className="logo">join.tsh.io</h1></div>
            <div className="account">
                <Link to={AppRoute.login} className="button button--empty">Log in</Link>
            </div>
            <div className="searchBox">
                <form onSubmit={handleSubmit}>
                    <input type="text" id="searchBox" className="searchInput" placeholder="Search" value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
                    <input type="submit" id="submit__searchQuery" style={{display: "none"}}/>
                    <label className="searchInput__button" htmlFor="submit__searchQuery"><Lens/></label>
                </form>
            </div>
            <div className="filters">
                <div className="filters__checkbox__active">
                    <input type="checkbox" name="checkbox__active" checked={activeCheck} onChange={() => setActiveCheck(!activeCheck)}/>
                    <label for="checkbox__active">Active</label>
                </div>
                <div className="filters__checkbox__promo">
                    <input type="checkbox" name="checkbox__promo" checked={promoCheck} onChange={() => setPromoCheck(!promoCheck)}/>
                    <label htmlFor="checkbox__promo">Promo</label>
                </div>
            </div>
        </div>
    </header>
    )
}