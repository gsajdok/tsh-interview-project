import {Link} from "react-router-dom";
import {AppRoute} from "../../routing/AppRoute.enum";
import React, {useState} from "react";
import {ReactComponent as Lens} from '../../assets/icons/Lens.svg'
import {Loading} from "./Loading";

export const Header = ({isLoaded, setSearchQuery, setActiveCheck, setPromoCheck, activeCheck, promoCheck, setCurrentPage}) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        setSearchQuery(searchInput);
    }

    const handleCheckboxOnChange = (e) => {
        if(e.target.getAttribute('name')==='checkbox__active') {
            setActiveCheck(!activeCheck);
        } else if(e.target.getAttribute('name')==='checkbox__promo') {
            setPromoCheck(!promoCheck);
        }
        setCurrentPage(1);
    }

    return (
        <header>
            <div className="header__wrapper">
                <div className="logo"><h1 className="logo"><Link to={AppRoute.home}>join.tsh.io</Link></h1></div>
                <div className="account">
                    <Link to={AppRoute.login} className="button button--empty">Log in</Link>
                </div>
                <div className="searchBox">
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="searchInput" className="searchInput" placeholder="Search" value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
                        <input disabled={!isLoaded} type="submit" id="submit__searchQuery" style={{display: "none"}}/>
                        <label className="searchInput__button" htmlFor="submit__searchQuery">
                            {isLoaded ? <Lens/> : <Loading type={"searchBar"}/>}
                        </label>
                    </form>
                </div>
                <div className="filters">
                    <div className="filters__checkbox__active">
                            <input disabled={!isLoaded} type="checkbox" name="checkbox__active" id="checkbox__active" checked={activeCheck || false} onChange={handleCheckboxOnChange}/>
                            <label htmlFor="checkbox__active">Active</label>
                    </div>
                    <div className="filters__checkbox__promo">
                        <input disabled={!isLoaded} type="checkbox" name="checkbox__promo" id="checkbox__promo" checked={promoCheck || false} onChange={handleCheckboxOnChange}/>
                        <label htmlFor="checkbox__promo">Promo</label>
                    </div>
                </div>
            </div>
        </header>
    )
}