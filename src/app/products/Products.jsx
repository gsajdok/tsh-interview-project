import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../routing/AppRoute.enum';

export const Products = () => {
  return (
    <>
        <header>
            <div className="header__wrapper">
                <div className="logo">join.tsh.io</div>
                <div className="account">
                    <Link to={AppRoute.login}>Log in</Link>
                </div>
                <div className="searchBox">
                    <input type="text" id="searchBox"/>
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
      <h2>Products page</h2>
    </>
  );
};
