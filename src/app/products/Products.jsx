import React, {useEffect, useState} from 'react';
import {Header} from "./Header";
import {Product} from "./Product";
import {Empty} from "./Empty";
import {fetchData} from "../../utilities/api";

export const Products = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCheck, setActiveCheck] = useState(false);
    const [promoCheck, setPromoCheck] = useState(false);

    let parameters = {limit: 10, page: 1};
    //{search: "text", limit: 1, page: 1, promo: true, active: true}

    useEffect(() => {
        fetchData(setLoaded, setProducts, setError, parameters);
    }, [])

    useEffect(() => {
        parameters = {...parameters, search: searchQuery, promo: promoCheck, active: activeCheck};
        if(!promoCheck) { delete parameters["promo"] }
        if(!activeCheck) { delete parameters["active"] }
        if(searchQuery==="") { delete parameters["search"] }
        fetchData(setLoaded, setProducts, setError, parameters);
    }, [searchQuery, activeCheck, promoCheck])

    if (error) {
        return (
            <>
                <Header/>
                <div>Error</div>
            </>
        )
    } else if (!isLoaded || products.length===0) {
        return (
            <>
                <Header/>
                <div>Loading</div>
            </>
        )
    } else {
        return (
            <>
                <Header setSearchQuery={setSearchQuery} setActiveCheck={setActiveCheck} setPromoCheck={setPromoCheck} activeCheck={activeCheck} promoCheck={promoCheck}/>
                <section className="products">
                    <div className="products__wrapper">
                        <div className="products__list">
                            {products.meta.totalItems===0 ? <Empty/> : products.items.map(item => <Product key={item.id} item={item}/>)}
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
    }

};
